# Accessibility Testing Checklist

## Automated Testing

### 1. Run axe DevTools Browser Extension
- [ ] Install axe DevTools (https://www.deque.com/axe/devtools/)
- [ ] Run scan on each page section
- [ ] No critical issues, no violations

### 2. WCAG Contrast Checker
- [ ] Check all text colors with WebAIM Contrast Checker
- [ ] All text ≥ 4.5:1 for AA compliance (or 3:1 for large text)
- [ ] Verify button states (normal, hover, focus)

### 3. Lighthouse Audit
```bash
npm run build
npm start
# Open DevTools > Lighthouse > Accessibility
# Target score: ≥ 90
```

---

## Manual Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements in logical order
- [ ] Focus indicators are clearly visible (browser default or custom)
- [ ] No keyboard traps (can't focus or escape with keyboard)
- [ ] Skip navigation link works (optional but recommended)
- [ ] All buttons and links are reachable with Tab key

### Screen Reader Testing

#### macOS (VoiceOver)
```
# Enable VoiceOver:
Cmd + F5

# Navigate:
- VO + Right Arrow: read next item
- VO + Space: activate item
- VO + U: show rotor (headings, links, form controls)
```

#### Windows (NVDA - Free)
1. Download: https://www.nvaccess.org/
2. Start reading: Insert + Down Arrow
3. Tab through page

#### Browser (ChromeVox)
- Install extension from Chrome Web Store
- Ctrl + Alt + Z to enable

**Test checklist:**
- [ ] Page title is announced
- [ ] Sections are identified as `<section>`
- [ ] Headings announce level (h1, h2, etc.)
- [ ] Form labels are announced before inputs
- [ ] Buttons announce their purpose
- [ ] Links announce their destination
- [ ] Error messages are announced
- [ ] Images have meaningful alt text (or alt="" for decorative)

### Mobile/Touch Testing
- [ ] All buttons/links are ≥ 44x44px (Apple) or 48x48dp (Material Design)
- [ ] Touch targets have adequate spacing (min 8px padding)
- [ ] No hover-dependent content (use focus or direct access)
- [ ] Orientation change works (portrait/landscape)
- [ ] Text is readable without horizontal scroll (zoom to 200%)

### Color Blindness Testing
- [ ] Information not conveyed by color alone
- [ ] Use patterns, text, or icons in addition to color
- [ ] Test with simulator: https://www.color-blindness.com/coblis-color-blindness-simulator/

### Reduced Motion
- [ ] Test on device with `prefers-reduced-motion: reduce` enabled
- [ ] Animations should be disabled or minimal
- [ ] Page must remain functional without animations

**macOS:** Settings > Accessibility > Display > Reduce motion
**Windows:** Settings > Ease of Access > Display > Show animations

---

## Component-Specific Tests

### Hero Section
- [ ] Main headline is large and readable
- [ ] CTA button is keyboard accessible
- [ ] Animation respects `prefers-reduced-motion`

### Forms (Newsletter, Contact)
- [ ] Each field has associated `<label>`
- [ ] Required fields are marked (aria-required or * with explanation)
- [ ] Error messages are announced
- [ ] Success message is announced
- [ ] Form can be submitted with Enter key

### Testimonials Carousel
- [ ] Navigation buttons are keyboard accessible
- [ ] Carousel indicator buttons are labeled
- [ ] Current slide is announced
- [ ] Carousel doesn't autoplay (or can be paused)

### Navigation
- [ ] Skip link (if present) is first focusable element
- [ ] Nav is semantically marked with `<nav>`
- [ ] Active page is indicated to screen readers

### Footer
- [ ] Social links have accessible labels
- [ ] Links announce their destination
- [ ] Footer is marked with `<footer>`

---

## Content Accessibility

### Headings
- [ ] One main `<h1>` per page
- [ ] Headings are in logical order (h1 → h2 → h3, no skipping)
- [ ] Headings describe section content

### Text
- [ ] Font size ≥ 16px for body text
- [ ] Line-height ≥ 1.5 for readability
- [ ] Line length ≤ 80 characters for readability
- [ ] No justified text (use left-align for better readability for dyslexic users)

### Images
- [ ] All meaningful images have descriptive alt text
- [ ] Decorative images have alt="" (empty)
- [ ] Complex images have `<figure>` + `<figcaption>`
- [ ] Text in images is accessible (avoid text in images)

### Links
- [ ] Link text is descriptive ("Learn more" is bad; "Learn more about Lila" is good)
- [ ] Links are visually distinguishable (underline, color, or other)
- [ ] No links that say "click here" or "read more"

---

## Testing Tools

| Tool | Purpose | Link |
|------|---------|------|
| **axe DevTools** | Automated accessibility audit | https://www.deque.com/axe/devtools/ |
| **WAVE** | WebAIM tool for visual feedback | https://wave.webaim.org/ |
| **Lighthouse** | Chrome DevTools built-in | DevTools > Lighthouse |
| **NVDA** | Free screen reader (Windows) | https://www.nvaccess.org/ |
| **ChromeVox** | Chrome extension screen reader | Chrome Web Store |
| **WebAIM Contrast** | Color contrast checker | https://webaim.org/resources/contrastchecker/ |
| **Hemingway App** | Text readability checker | https://hemingwayapp.com/ |

---

## WCAG 2.1 Criteria Covered

| Level | Criterion | Status |
|-------|-----------|--------|
| **A** | 1.1.1 Non-text Content | ✓ Alt text |
| **A** | 1.3.1 Info & Relationships | ✓ Semantic HTML |
| **A** | 1.4.3 Contrast (Minimum) | ✓ 4.5:1+ |
| **A** | 2.1.1 Keyboard | ✓ Tab navigation |
| **A** | 2.1.2 No Keyboard Trap | ✓ Tested |
| **A** | 2.4.1 Bypass Blocks | ✓ Skip link (optional) |
| **A** | 2.4.3 Focus Order | ✓ Logical order |
| **A** | 3.3.1 Error Identification | ✓ Form errors |
| **A** | 3.3.4 Error Prevention | ✓ Validation |
| **AA** | 1.4.5 Images of Text | ✓ Text used |
| **AA** | 2.4.7 Focus Visible | ✓ Focus indicators |
| **AA** | 3.2.4 Consistent Identification | ✓ UI consistency |

---

## Regression Testing

After updates, ensure:
- [ ] No new axe violations
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] Manual keyboard nav still works
- [ ] Screen reader experience unchanged
- [ ] Mobile touch targets still ≥ 44x44px
- [ ] Form submission still accessible

---

## Resources

- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM: https://webaim.org/
- MDN Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility
- A11ycasts (Google): https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9Xc-RgEzwLvsPccX6h
