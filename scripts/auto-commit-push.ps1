param(
    [string]$CommitPrefix = "auto: backup",
    [switch]$DryRun,
    [switch]$SkipRemoteCheck
)

$ErrorActionPreference = "Stop"

function Invoke-Git {
    param(
        [Parameter(Mandatory = $true)]
        [string[]]$Args
    )

    $output = & git @Args 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "git $($Args -join ' ') failed: $output"
    }

    return $output
}

$repoRoot = Invoke-Git -Args @("rev-parse", "--show-toplevel")
$branch = Invoke-Git -Args @("rev-parse", "--abbrev-ref", "HEAD")

if (-not $SkipRemoteCheck) {
    Invoke-Git -Args @("fetch", "origin", $branch)
    $aheadBehind = Invoke-Git -Args @("rev-list", "--left-right", "--count", "HEAD...origin/$branch")
    $parts = ($aheadBehind -split "\s+") | Where-Object { $_ -ne "" }

    if ($parts.Length -lt 2) {
        throw "Unable to parse branch divergence: $aheadBehind"
    }

    $remoteAhead = [int]$parts[1]

    if ($remoteAhead -gt 0) {
        throw "Remote branch origin/$branch has new commits. Resolve or pull manually before auto-push."
    }
}

$status = Invoke-Git -Args @("status", "--porcelain")
if (-not $status) {
    Write-Output "No changes to commit in $repoRoot."
    exit 0
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMessage = "$CommitPrefix ($timestamp)"

if ($DryRun) {
    Write-Output "Dry run only."
    Write-Output "Repository: $repoRoot"
    Write-Output "Branch: $branch"
    Write-Output "Pending changes:"
    Write-Output $status
    Write-Output "Commit message: $commitMessage"
    exit 0
}

Invoke-Git -Args @("add", "-A")

$hasStagedDiff = & git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Output "No staged diff detected after git add -A."
    exit 0
}

Invoke-Git -Args @("commit", "-m", $commitMessage)
Invoke-Git -Args @("push", "origin", $branch)

Write-Output "Committed and pushed to origin/$branch with message: $commitMessage"
