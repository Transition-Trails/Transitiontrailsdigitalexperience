# Chat Log Quick Reference

**For:** AI/Figma Make chat session documentation  
**Updated:** November 24, 2024 (TTA-138)

---

## 🎯 The One Rule

**ALL AI chat sessions go in ONE file:**
```
/docs/workflow/figma-make-chat-log.md
```

**DO NOT create:** `CHAT_SESSION_*.md` files in the root anymore.

---

## ⚡ Quick Start

### For a New PR Chat Session:

1. **Open the file:**
   ```bash
   code /docs/workflow/figma-make-chat-log.md
   ```

2. **Add your section** under "Chat Logs by Pull Request" (newest first):
   ```markdown
   ### [TTA-XXX] Your Title (PR: #NN, Branch: feature/tta-xxx-description)
   
   - **Linear Issue:** [TTA-XXX](link)
   - **Branch:** `feature/tta-xxx-description`
   - **PR URL:** https://github.com/.../pull/NN
   - **Date Range:** 2024-MM-DD → 2024-MM-DD
   - **Summary of Conversation:**
     - What you discussed
     - What was decided
     - What was implemented
   
   #### Chat Transcript
   > **Angela:** [Your question or request]
   > **Figma Make:** [AI response]
   ```

3. **Update the PR index** (between the markers):
   ```markdown
   <!-- PR_INDEX_START -->
   - [TTA-XXX] Your Title (PR: #NN, Branch: feature/tta-xxx-description)
   - [TTA-138] Documentation automation (PR: #7, Branch: ...)
   - [TTA-137] Initial prototype (PR: #6, Branch: ...)
   <!-- PR_INDEX_END -->
   ```

4. **Save and commit:**
   ```bash
   git add docs/workflow/figma-make-chat-log.md
   git commit -m "TTA-XXX: Add chat session to canonical log"
   ```

---

## 📋 Section Template

Copy this template for each new PR:

```markdown
### [TTA-XXX] Short Descriptive Title (PR: #NN, Branch: branch-name)

- **Linear Issue:** [TTA-XXX](https://linear.app/transitiontrails/issue/TTA-XXX)
- **Branch:** `feature/tta-xxx-short-description`
- **PR URL:** https://github.com/Transition-Trails/Transitiontrailsdigitalexperience/pull/NN
- **Date Range:** YYYY-MM-DD → YYYY-MM-DD
- **Summary of Conversation:**
  - Key point 1
  - Key point 2
  - Key point 3

#### Chat Transcript

> **Angela:** [User's question or request]

> **Figma Make:** [AI's response and actions]

[Continue the conversation...]

#### Implementation Actions

**Files Created:**
- `/path/to/file.ext` - Description

**Files Modified:**
- `/path/to/file.ext` - Changes made

**Key Decisions:**
- Decision 1 and why
- Decision 2 and why
```

---

## 🔍 Finding Things

### Find a specific PR:
1. Look at the PR index at the top
2. Search for `[TTA-XXX]` or PR number
3. Click/jump to the section

### Search for a topic:
1. Use your editor's find: `Cmd/Ctrl + F`
2. Search for keywords
3. All sessions are in one file!

### Check latest activity:
- Look at the PR index
- Newest PRs are listed first
- Sections are ordered newest to oldest

---

## ✅ Dos and ❌ Don'ts

### ✅ DO
- Update `/docs/workflow/figma-make-chat-log.md`
- Add new sections at the top (newest first)
- Update the PR index between markers
- Keep summaries concise (3-5 bullets)
- Include chat transcript for context
- Note key files created/modified

### ❌ DON'T
- Create new `CHAT_SESSION_*.md` files
- Delete existing PR sections
- Remove or modify the index markers
- Forget to update the PR index
- Put chat logs anywhere else
- Overwrite the entire file

---

## 🎨 Formatting Tips

### Speaker Attribution
```markdown
> **Angela:** User's question or prompt

> **Figma Make:** AI's response
```

### Multiple Exchanges
```markdown
> **Angela:** First question

> **Figma Make:** First response

> **Angela:** Follow-up question

> **Figma Make:** Follow-up response
```

### Code Blocks
```markdown
**Commands Used:**
\`\`\`bash
git add file.md
git commit -m "Message"
git push
\`\`\`
```

### Lists
```markdown
**Summary:**
- First point
- Second point
- Third point
```

---

## 📍 File Location

**Canonical Chat Log:**
```
/docs/workflow/figma-make-chat-log.md
```

**This Quick Reference:**
```
/docs/workflow/CHAT_LOG_QUICK_REFERENCE.md
```

**Branch Documentation Guide:**
```
/docs/workflow/branch-documentation-guide.md
```

---

## 🔗 Related Documentation

- **Full Chat Log:** `/docs/workflow/figma-make-chat-log.md`
- **Branch Docs Guide:** `/docs/workflow/branch-documentation-guide.md`
- **TTA-138 Summary:** `/TTA-138_COMPLETION_SUMMARY.md`
- **README:** `/README.md`

---

## 💡 Examples

### Good Section Title
```markdown
### [TTA-142] Add progress tracking to Guided Trail (PR: #9, Branch: feature/tta-142-progress-tracking)
```

### Good Summary
```markdown
- **Summary of Conversation:**
  - Discussed implementation of progress tracking system
  - Decided to use localStorage for client-side persistence
  - Created ProgressTracker component with visual indicators
```

### Good Chat Excerpt
```markdown
#### Chat Transcript

> **Angela:** I need to add progress tracking to the Guided Trail page so users can see how far they've completed.

> **Figma Make:** I'll implement a progress tracking system with a visual progress bar and module completion tracking. I'll use localStorage for client-side persistence and create a reusable ProgressTracker component.

[Created ProgressTracker.tsx with completion percentage and visual bar]

> **Angela:** Can we also show which specific modules are complete?

> **Figma Make:** Yes! I'll add checkmarks to completed modules and gray out locked future modules.
```

---

## ⚠️ Common Mistakes

### Mistake 1: Creating Separate Files
```
❌ /CHAT_SESSION_2024-11-25.md
✅ Update /docs/workflow/figma-make-chat-log.md
```

### Mistake 2: Forgetting the Index
```
❌ Add section but don't update index
✅ Add section AND update index between markers
```

### Mistake 3: Wrong Order
```
❌ Add new PR at the bottom
✅ Add new PR at the top (newest first)
```

### Mistake 4: Overwriting Content
```
❌ Replace entire file
✅ Add new section, preserve existing
```

---

## 🚀 One-Liner Cheat Sheet

```bash
# Open chat log → Add section (top) → Update index → Save → Commit
code docs/workflow/figma-make-chat-log.md
```

---

## 📞 Need Help?

1. **See examples:** Check TTA-137 and TTA-138 sections in the chat log
2. **Read the guide:** `/docs/workflow/branch-documentation-guide.md`
3. **Check the summary:** `/TTA-138_COMPLETION_SUMMARY.md`
4. **Ask:** Include in your next PR review

---

**Last Updated:** November 24, 2024 (TTA-138)  
**Maintained By:** Development Team  
**Questions:** Reference the canonical chat log for live examples
