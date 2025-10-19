# Quick Animation Reference

## Files You Need to Know

| File | Purpose | When to Edit |
|------|---------|--------------|
| `IntroAnimation.tsx` | Main intro sequence | Change timings, colors, sizes |
| `AnimatedNavbar.tsx` | Navbar slide-in animation | Modify navbar animation |
| `LayoutWrapper.tsx` | Coordinates both animations | Change when intro shows |

## Quick Edits

### Make Animation Faster
**File:** `IntroAnimation.tsx`
```tsx
// Change these numbers (in milliseconds):
setTimeout(() => setStep(1), 500)   // ← Was 1000
setTimeout(() => setStep(2), 1500)  // ← Was 2500
setTimeout(() => setStep(3), 2000)  // ← Was 3500
setTimeout(() => onComplete(), 2500) // ← Was 4500
```

### Change Background Color
**File:** `IntroAnimation.tsx`
```tsx
backgroundColor: step >= 2 ? "#YOUR_HEX_COLOR" : "#000000"
```

### Bigger Logo
**File:** `IntroAnimation.tsx`
```tsx
width={120}   // ← Was 80
height={120}  // ← Was 80
```

### Always Show Intro
**File:** `LayoutWrapper.tsx`
```tsx
// Comment out or remove:
// sessionStorage.setItem("hasSeenIntro", "true")
```

### Disable Intro Completely
**File:** `LayoutWrapper.tsx`
```tsx
const [showIntro, setShowIntro] = useState(false) // ← Was true
```

## Animation Timing Chart

```
Time   | What Happens
-------|-------------
0.0s   | Black screen, logo fades in
1.0s   | Text slides in from left
2.5s   | Logo + text move to navbar
2.5s   | Background: black → red
3.5s   | Intro completes
4.0s   | Navbar slides down
4.5s   | Left menu items appear
4.7s   | Right menu items appear
```

## Common Customizations

### Skip Button
Add to `IntroAnimation.tsx` inside the motion.div:
```tsx
<button
  onClick={onComplete}
  className="absolute top-4 right-4 px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-black transition-colors"
>
  Skip
</button>
```

### Fade Instead of Slide
**File:** `AnimatedNavbar.tsx`
```tsx
initial={{ opacity: 0 }}    // ← Instead of y: -100
animate={{ opacity: 1 }}    // ← Instead of y: 0
```

### Text from Right
**File:** `IntroAnimation.tsx`
```tsx
initial={{ opacity: 0, x: 50 }}   // ← Positive = from right
```

### Slower/Smoother
Add to any `transition`:
```tsx
transition={{ duration: 2, ease: "easeInOut" }}
```

## Test Your Changes

1. Save your files
2. Clear browser cache (Ctrl + Shift + R)
3. If intro doesn't show:
   - Open DevTools (F12)
   - Go to Application tab
   - Find Session Storage
   - Delete `hasSeenIntro`
   - Refresh page

## CSS Variables You Can Use

```css
var(--theme-primary)        /* Navbar red color */
var(--theme-background)     /* Page background */
var(--theme-text)          /* Text color (light pink) */
var(--theme-font-heading)  /* Young Serif font */
var(--theme-font-body)     /* Instrument Sans font */
```

## Need Help?

- Read full guide: `ANIMATION_GUIDE.md`
- Framer Motion docs: https://www.framer.com/motion/
- Test animations at: https://www.framer.com/motion/examples/

## Pro Tips

✅ Keep total animation under 5 seconds
✅ Test on mobile devices
✅ Use `ease-in-out` for natural feel
✅ Provide skip option for returning users
✅ Cache intro completion in sessionStorage
❌ Don't make animations too slow
❌ Don't animate too many elements at once
❌ Don't forget to test with slow connection
