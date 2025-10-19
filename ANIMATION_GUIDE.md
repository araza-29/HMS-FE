# Framer Motion Intro Animation Guide

## What We Built

A beautiful intro animation sequence:
1. **Black screen** with logo appearing in center
2. **Text "RehabEase"** slides in from the right
3. **Logo + text** move up to navbar position
4. **Background** transitions from black to red
5. **Navbar items** slide down from top

## Files Created

### 1. `src/components/IntroAnimation.tsx`
The main intro animation component that handles the logo reveal and text animation.

**Key Features:**
- Logo fades in and scales up
- Text slides in from left after logo appears
- Everything moves to navbar position
- Background transitions from black to red
- Uses `sessionStorage` to show only once per session

### 2. `src/components/AnimatedNavbar.tsx`
An animated version of your navbar that slides in from top.

**Key Features:**
- Entire navbar slides down
- Left menu items animate first
- Right menu items animate with delay
- Smooth easing animations

### 3. `src/components/LayoutWrapper.tsx`
A client-side wrapper that coordinates the intro and navbar animations.

**Key Features:**
- Checks if user has seen intro (sessionStorage)
- Shows intro on first visit
- Triggers navbar animation after intro completes
- Manages animation state

## How It Works

### Animation Timeline

```
0s    -> Logo appears (fade in + scale)
1s    -> Text "RehabEase" slides in from left
2.5s  -> Logo + text move to navbar position
2.5s  -> Background changes black → red
3.5s  -> Intro completes
4s    -> Navbar slides down from top
4.5s  -> Left menu items appear
4.7s  -> Right menu items appear
```

### Key Framer Motion Concepts

#### 1. **motion components**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
/>
```
- `initial`: Starting state
- `animate`: End state
- `transition`: How to animate between them

#### 2. **AnimatePresence**
```tsx
<AnimatePresence>
  {showIntro && <IntroAnimation />}
</AnimatePresence>
```
Handles exit animations when component unmounts.

#### 3. **Sequential Animations**
```tsx
animate={{
  opacity: step >= 1 ? 1 : 0,
  x: step >= 1 ? 0 : -50
}}
```
Control animations based on state changes.

## Customization Guide

### Change Animation Duration

In `IntroAnimation.tsx`:
```tsx
// Current timings
const timer1 = setTimeout(() => setStep(1), 1000)   // Logo display time
const timer2 = setTimeout(() => setStep(2), 2500)   // Before text appears
const timer3 = setTimeout(() => setStep(3), 3500)   // Before move to navbar
const timer4 = setTimeout(() => onComplete(), 4500) // Total duration
```

**To make it faster:**
```tsx
const timer1 = setTimeout(() => setStep(1), 500)    // Logo display: 0.5s
const timer2 = setTimeout(() => setStep(2), 1500)   // Text appears: 1s later
const timer3 = setTimeout(() => setStep(3), 2500)   // Move to navbar: 1s later
const timer4 = setTimeout(() => onComplete(), 3000) // Complete: 0.5s later
```

### Change Colors

In `IntroAnimation.tsx`, change background color:
```tsx
animate={{
  backgroundColor: step >= 2 ? "#YOUR_COLOR" : "#000000"
}}
```

### Change Logo/Text Size

In `IntroAnimation.tsx`:
```tsx
// Logo size
<Image
  width={120}  // Change this
  height={120} // Change this
/>

// Text size
<motion.span
  className="text-6xl"  // Change from text-5xl to text-6xl
>
```

### Change Animation Direction

**Text from right instead of left:**
```tsx
initial={{ opacity: 0, x: 50 }}  // Positive x = from right
animate={{ opacity: 1, x: 0 }}
```

**Navbar from bottom instead of top:**
```tsx
// In AnimatedNavbar.tsx
initial={{ y: 100 }}  // Positive y = from bottom
animate={{ y: 0 }}
```

### Disable Intro Animation

To completely disable the intro (useful for development):

In `LayoutWrapper.tsx`:
```tsx
const [showIntro, setShowIntro] = useState(false) // Change true to false
```

Or always show it (remove sessionStorage check):
```tsx
// Remove this useEffect
useEffect(() => {
  const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")
  if (hasSeenIntro) {
    setShowIntro(false)
    setIntroComplete(true)
  }
}, [])
```

## Advanced Customizations

### Add More Animation Steps

In `IntroAnimation.tsx`:
```tsx
const [step, setStep] = useState(0)

useEffect(() => {
  const timer1 = setTimeout(() => setStep(1), 1000)
  const timer2 = setTimeout(() => setStep(2), 2000)
  const timer3 = setTimeout(() => setStep(3), 3000)
  const timer4 = setTimeout(() => setStep(4), 4000) // New step!
  const timer5 = setTimeout(() => onComplete(), 5000)
  
  return () => {
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    clearTimeout(timer4)
    clearTimeout(timer5)
  }
}, [onComplete])
```

Then add animation for step 4:
```tsx
animate={{
  // Your new animation for step === 4
}}
```

### Add Sound Effects

```tsx
useEffect(() => {
  const audio = new Audio('/sounds/intro.mp3')
  audio.play()
}, [])
```

### Add Particles or Effects

Install a particle library:
```bash
npm install react-particles
```

Then add to your IntroAnimation component.

### Make It Responsive

```tsx
<motion.span
  className="text-3xl md:text-5xl lg:text-6xl"  // Responsive sizes
>
```

## Troubleshooting

### Animation not showing?
- Check browser console for errors
- Verify framer-motion is installed: `npm list framer-motion`
- Clear sessionStorage: Open DevTools → Application → Storage → Clear

### Animation too slow/fast?
- Adjust timeout values in `IntroAnimation.tsx`
- Adjust `transition.duration` values

### Background not changing?
- Check CSS variable `--theme-primary` is defined
- Verify hex color format is correct

### Navbar not animating?
- Check `showAnimation` prop is being passed correctly
- Verify AnimatedNavbar is imported in LayoutWrapper

## Best Practices

1. **Keep animations under 5 seconds** - Users don't like long waits
2. **Use ease-in-out** - Most natural feeling
3. **Test on slow devices** - Animations should still be smooth
4. **Provide skip button** (optional) - Let users skip if they want
5. **Use sessionStorage** - Don't show intro every page load

## Next Steps

1. Test the animation - Refresh your browser
2. Adjust timings to your preference
3. Customize colors and sizes
4. Add more steps if needed
5. Test on mobile devices

## Example: Adding a Skip Button

```tsx
// In IntroAnimation.tsx
<button
  onClick={onComplete}
  className="absolute top-4 right-4 text-white"
>
  Skip →
</button>
```

Enjoy your beautiful intro animation! 🎨✨
