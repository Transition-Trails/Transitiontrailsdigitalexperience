# Git Command Cheatsheet for Transition Trails

Quick reference for common git operations in the Transition Trails Digital Experience project.

## Daily Workflow

### Starting a New Feature/Issue

```bash
# 1. Make sure you're on main and it's up to date
git checkout main
git pull origin main

# 2. Create a new branch from Linear issue (e.g., TT-123)
git checkout -b TT-123-brief-description

# 3. Verify you're on the right branch
git branch
```

### Making Changes

```bash
# Check what files have changed
git status

# See detailed changes
git diff

# Stage specific files
git add path/to/file.tsx

# Stage all changed files
git add .

# Commit with Linear issue reference
git commit -m "TT-123: Description of changes"

# Push to remote
git push origin TT-123-brief-description
```

### Working on Existing Branch

```bash
# Switch to your feature branch
git checkout TT-123-brief-description

# Get latest changes from main
git fetch origin
git merge origin/main

# Or use rebase for cleaner history
git rebase origin/main

# Continue working...
git add .
git commit -m "TT-123: Additional changes"
git push origin TT-123-brief-description
```

## Branch Management

### List Branches

```bash
# List local branches
git branch

# List all branches (including remote)
git branch -a

# List remote branches only
git branch -r
```

### Switch Branches

```bash
# Switch to existing branch
git checkout branch-name

# Create and switch to new branch
git checkout -b new-branch-name

# Switch to previous branch
git checkout -
```

### Delete Branches

```bash
# Delete local branch (safe - only if merged)
git branch -d TT-123-brief-description

# Force delete local branch
git branch -D TT-123-brief-description

# Delete remote branch
git push origin --delete TT-123-brief-description
```

## Commit Operations

### Viewing Commits

```bash
# View commit history
git log

# View compact history
git log --oneline

# View last 5 commits
git log -5

# View commits by author
git log --author="Your Name"

# View commits for specific file
git log -- path/to/file.tsx
```

### Modifying Commits

```bash
# Amend last commit message
git commit --amend -m "TT-123: Updated message"

# Add more changes to last commit
git add forgotten-file.tsx
git commit --amend --no-edit

# Amend and change message
git add .
git commit --amend
```

### Undoing Changes

```bash
# Discard changes in working directory
git checkout -- path/to/file.tsx

# Unstage file (keep changes)
git reset HEAD path/to/file.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a specific commit (creates new commit)
git revert commit-hash
```

## Syncing with Remote

### Fetching & Pulling

```bash
# Fetch changes without merging
git fetch origin

# Pull changes from main
git pull origin main

# Pull changes from current branch
git pull

# Pull with rebase instead of merge
git pull --rebase origin main
```

### Pushing

```bash
# Push current branch
git push

# Push and set upstream
git push -u origin TT-123-brief-description

# Force push (use with caution!)
git push --force-with-lease

# Push all branches
git push --all
```

## Handling Conflicts

### When Merging

```bash
# Start merge
git merge origin/main

# If conflicts occur:
# 1. Open conflicted files and resolve
# 2. Stage resolved files
git add path/to/resolved-file.tsx

# 3. Complete merge
git commit

# Or abort merge
git merge --abort
```

### When Rebasing

```bash
# Start rebase
git rebase origin/main

# If conflicts occur:
# 1. Open conflicted files and resolve
# 2. Stage resolved files
git add path/to/resolved-file.tsx

# 3. Continue rebase
git rebase --continue

# Or skip current commit
git rebase --skip

# Or abort rebase
git rebase --abort
```

## Stashing Changes

Temporarily save uncommitted changes:

```bash
# Stash current changes
git stash

# Stash with message
git stash save "WIP: working on feature"

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{2}

# Apply and remove from stash list
git stash pop

# Delete specific stash
git stash drop stash@{2}

# Clear all stashes
git stash clear
```

## Useful Aliases

Add these to your `~/.gitconfig`:

```ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    cm = commit -m
    ca = commit --amend
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = log --graph --oneline --all
    undo = reset --soft HEAD~1
```

Usage:
```bash
git st                      # Instead of git status
git co main                 # Instead of git checkout main
git cm "TT-123: Message"    # Instead of git commit -m
```

## Linear-Specific Commands

### Creating Branch from Linear Issue

```bash
# Pattern: <ISSUE-ID>-brief-description
git checkout -b TT-123-add-visitor-trail
git checkout -b TT-456-fix-mobile-nav
git checkout -b TT-789-refactor-tokens
```

### Commit Messages for Linear

```bash
# Standard commit
git commit -m "TT-123: Add hero section component"

# Bug fix (auto-closes issue when merged)
git commit -m "Fixes TT-123: Resolve routing context error"

# Multiple changes
git commit -m "TT-123: Implement dashboard widgets

- Add widget grid layout
- Create placeholder components
- Integrate with design tokens"
```

### Creating PR after Push

```bash
# After pushing branch
git push origin TT-123-add-visitor-trail

# GitHub CLI (if installed)
gh pr create --title "TT-123: Add visitor trail page" \
             --body "Fixes: TT-123" \
             --base main
```

## Common Scenarios

### Scenario 1: Starting Work on a Linear Issue

```bash
# TT-123: Implement contact form
git checkout main
git pull origin main
git checkout -b TT-123-implement-contact-form
# Make changes...
git add .
git commit -m "TT-123: Add contact form component"
git push origin TT-123-implement-contact-form
# Create PR on GitHub
```

### Scenario 2: Updating PR with Review Feedback

```bash
# Switch to PR branch
git checkout TT-123-implement-contact-form

# Make requested changes...
git add .
git commit -m "TT-123: Address PR review feedback

- Update form validation
- Add error messages
- Improve accessibility"

git push origin TT-123-implement-contact-form
```

### Scenario 3: Syncing Branch with Latest Main

```bash
# While on feature branch
git checkout TT-123-implement-contact-form
git fetch origin
git rebase origin/main

# If conflicts, resolve them, then:
git add .
git rebase --continue

# Force push (rebase rewrites history)
git push --force-with-lease origin TT-123-implement-contact-form
```

### Scenario 4: Accidentally Committed to Main

```bash
# If you committed to main but haven't pushed
git checkout main
git reset --soft HEAD~1  # Undo commit, keep changes
git checkout -b TT-123-new-branch  # Create proper branch
git commit -m "TT-123: Description"
git push origin TT-123-new-branch
```

### Scenario 5: Need to Switch Branches with Uncommitted Work

```bash
# Save work without committing
git stash

# Switch branches
git checkout other-branch

# Come back and restore
git checkout TT-123-your-branch
git stash pop
```

### Scenario 6: Squashing Multiple Commits Before PR

```bash
# Interactive rebase last 3 commits
git rebase -i HEAD~3

# In the editor, change 'pick' to 'squash' for commits to combine
# Save and close, then edit the combined commit message

# Force push
git push --force-with-lease origin TT-123-your-branch
```

## Emergency Commands

### Recover Deleted Branch

```bash
# Find the commit hash
git reflog

# Recreate branch
git checkout -b recovered-branch <commit-hash>
```

### Recover Deleted Commits

```bash
# Find lost commits
git reflog

# Cherry-pick specific commit
git cherry-pick <commit-hash>
```

### Reset to Remote State

```bash
# Discard all local changes and match remote
git fetch origin
git reset --hard origin/main
```

## Best Practices

1. **Commit Often**: Small, focused commits are easier to review and revert
2. **Write Clear Messages**: Always reference Linear issue ID
3. **Pull Before Push**: Avoid conflicts by staying in sync
4. **Branch from Main**: Always create feature branches from up-to-date main
5. **Delete Merged Branches**: Keep repository clean
6. **Use Force Push Carefully**: Only on your own branches, never on main
7. **Review Before Commit**: Use `git diff` to check what you're committing

## Getting Help

```bash
# Get help for any command
git help <command>
git <command> --help

# Examples
git help commit
git rebase --help
```

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [Linear Git Integration](https://linear.app/docs/github)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
