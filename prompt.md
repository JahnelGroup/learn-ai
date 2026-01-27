# Responsive Design Audit Agent for Docusaurus Site

## Business Outcome

Systematically evaluate every page in the scoped URL list for responsive design quality across mobile (375px), tablet (768px), and desktop (1280px) viewports. Generate an actionable audit report identifying visual issues, layout problems, and CSS improvements needed to achieve consistent, professional presentation across all device sizes.

This audit ensures the Docusaurus site delivers an excellent user experience regardless of device, catching issues that manual review would miss and providing developers with specific, prioritized fixes.

---

## Scope Configuration

**Target URLs to Audit:**
```
http://localhost:3000/
```

**Viewport Breakpoints:**
- **Mobile:** 375px width (iPhone SE/standard mobile)
- **Tablet:** 768px width (iPad portrait)  
- **Desktop:** 1280px width (standard laptop)

---

## MCP Browser

Use google chrome to navigate to the site, it's already running in another terminal you do not need to start it.

---

## Audit Process

### For Each URL in the Scope List:

**Step 1: Visual Inspection via Browser**

Open the URL in the browser and capture screenshots at each viewport width. For each viewport, evaluate:

- **Layout integrity:** Do elements stack appropriately? Is there horizontal overflow causing unwanted scrolling?
- **Typography:** Is text readable without zooming? Are font sizes appropriate for the viewport?
- **Navigation:** Is the mobile menu functional? Does the navbar collapse/expand correctly?
- **Images and media:** Do images scale properly? Are they cropped awkwardly?
- **Spacing:** Are margins and padding proportional to viewport size?
- **Touch targets:** On mobile, are buttons and links at least 44x44px?
- **Content hierarchy:** Does the visual hierarchy remain clear across viewports?
- **Tables and code blocks:** Do they have horizontal scroll or do they break layout?
- **Sidebar behavior:** Does the docs sidebar collapse appropriately on mobile/tablet?

**Step 2: Code Analysis**

For issues identified visually, inspect the corresponding source files:

- Check `src/css/custom.css` for existing responsive styles and media queries
- Check component files in `src/components/` for inline styles or className usage
- Check `src/pages/` for page-specific styling issues
- Check `docusaurus.config.js` for theme configuration that might affect responsive behavior
- Review any Docusaurus theme customizations in `src/theme/` directory

For each visual issue, identify:
1. Which CSS file/component is responsible
2. Whether existing media queries are missing, malformed, or have incorrect breakpoints
3. Whether the issue stems from Docusaurus defaults vs. custom overrides

**Step 3: Document Findings**

For each page, record:
- URL tested
- Screenshot references for each viewport (or description of visual state)
- Issues found per viewport with severity rating
- Root cause in code (file path + line number if possible)
- Recommended fix

---

## Issue Classification

**Severity Levels:**

- **Critical:** Content is inaccessible, unreadable, or page is broken (horizontal scroll, overlapping text, navigation unusable)
- **Major:** Significant usability problems (touch targets too small, awkward layouts, content cut off)
- **Minor:** Cosmetic issues that don't block usage (spacing inconsistencies, slight misalignments)

**Issue Categories:**

- `LAYOUT` - Structural problems (overflow, stacking, grid/flex issues)
- `TYPOGRAPHY` - Font size, line height, readability
- `NAVIGATION` - Menu, sidebar, breadcrumb issues
- `MEDIA` - Images, videos, embeds not scaling
- `SPACING` - Margins, padding, gaps inappropriate for viewport
- `INTERACTIVE` - Buttons, links, form elements
- `TABLES` - Data tables breaking layout
- `CODE_BLOCKS` - Code snippets overflow or unreadable

---

## Output Format

Generate a markdown report with the following structure:

```markdown
# Responsive Design Audit Report
**Site:** [Site Name]
**Audit Date:** [Date]
**Pages Audited:** [Count]

## Executive Summary
- Total issues found: X
- Critical: X | Major: X | Minor: X
- Most common issue type: [Category]
- Priority recommendation: [One sentence]

---

## Page-by-Page Findings

### Page: [URL]

#### Mobile (375px)
| Issue | Category | Severity | Description | File/Location | Recommended Fix |
|-------|----------|----------|-------------|---------------|-----------------|
| 1 | LAYOUT | Critical | Horizontal overflow on hero section | src/css/custom.css:45 | Add `overflow-x: hidden` and constrain max-width |

#### Tablet (768px)
| Issue | Category | Severity | Description | File/Location | Recommended Fix |
|-------|----------|----------|-------------|---------------|-----------------|
| 1 | NAVIGATION | Major | Sidebar overlaps content | src/theme/DocSidebar/index.js | Adjust breakpoint from 996px to 768px |

#### Desktop (1280px)
✅ No issues found

---

[Repeat for each page]

---

## Global Issues
Issues that appear across multiple pages (fix once, resolve everywhere):

| Issue | Affected Pages | Category | Severity | Root Cause | Recommended Fix |
|-------|----------------|----------|----------|------------|-----------------|
| 1 | 8 of 10 pages | CODE_BLOCKS | Major | Code blocks have no max-width constraint | Add to custom.css: `.prism-code { max-width: 100%; overflow-x: auto; }` |

---

## Recommended Fix Priority

### Immediate (Critical Issues)
1. [Specific fix with file path]
2. [Specific fix with file path]

### This Sprint (Major Issues)  
1. [Specific fix with file path]
2. [Specific fix with file path]

### Backlog (Minor Issues)
1. [Specific fix with file path]
2. [Specific fix with file path]

---

## CSS Fixes Reference

Consolidated CSS additions for `src/css/custom.css`:

```css
/* Mobile-first responsive fixes */

/* Fix 1: [Description] */
@media (max-width: 375px) {
  /* specific rules */
}

/* Fix 2: [Description] */
@media (max-width: 768px) {
  /* specific rules */
}
```
```

---

## Workflow Summary

**Happy Path:**
1. Read the scoped URL list from the configuration above
2. For each URL, open browser at mobile viewport (375px)
3. Visually inspect and capture/note issues
4. Resize to tablet (768px), repeat inspection
5. Resize to desktop (1280px), repeat inspection
6. Open relevant source files to identify root causes
7. Correlate visual issues with specific code locations
8. Move to next URL
9. After all URLs complete, generate consolidated report
10. Save report as `responsive-audit-report.md` in project root

**Error States:**
- If a URL fails to load: Log the error and continue to next URL
- If source file cannot be located: Note "Source file not identified" and suggest manual review
- If browser viewport cannot be resized: Note the limitation and proceed with available viewports

**Edge Cases:**
- Pages with dynamic content: Note that audit reflects content at time of capture
- Pages requiring authentication: Skip and note in report
- Very long pages: Scroll through entire page at each viewport before documenting

---

## Docusaurus-Specific Considerations

**Key Technical Details:**
- Default Docusaurus breakpoint is 996px for sidebar collapse
- Check `@docusaurus/theme-classic` customizations in `src/theme/`
- Infima CSS framework variables in `:root` may need viewport-specific overrides
- Swizzled components in `src/theme/` take precedence over defaults

**Files to Prioritize:**
- `src/css/custom.css` - Primary location for custom responsive styles
- `docusaurus.config.js` - Theme and navbar configuration
- `src/theme/**` - Any swizzled/customized theme components
- `src/components/**` - Custom React components
- `src/pages/**` - Custom pages outside docs
- `sidebars.js` - Sidebar structure (affects mobile navigation)

**CSS Variable Patterns:**
When suggesting fixes, use Docusaurus/Infima CSS variables where possible:
- `--ifm-spacing-horizontal`
- `--ifm-spacing-vertical`
- `--ifm-font-size-base`
- `--ifm-container-width`

---

## Implementation Guidance

- Use the browser's device emulation or responsive design mode for consistent viewport testing
- Take screenshots or detailed notes at each viewport before moving to the next
- When identifying CSS issues, note whether the fix should use Docusaurus CSS variables (e.g., `--ifm-*`) for consistency
- Prefer mobile-first media query patterns (`min-width`) unless existing codebase uses desktop-first (`max-width`)
- Match existing code style and CSS organization patterns in the project
- Group related fixes together in the report to minimize context-switching during implementation