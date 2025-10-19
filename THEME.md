# Theme Customization Guide

This project uses CSS variables for easy theme customization. You can change the entire look and feel by updating just a few variables!

## Theme Variables

All theme variables are defined in `src/app/globals.css` in the `:root` section.

### Color Variables

```css
/* Custom theme colors */
--theme-primary: #7F1734;      /* Primary color (navbar, buttons, accents) */
--theme-background: #7F1734;   /* Page background color */
--theme-text: #FFF0F5;         /* Text color */
```

### Font Variables

```css
/* Custom theme fonts */
--theme-font-heading: var(--font-serif);  /* Font for headings (Spectral) */
--theme-font-body: var(--font-mono);      /* Font for body text (JetBrains Mono) */
```

## How to Change the Theme

### Changing Colors

1. Open `src/app/globals.css`
2. Find the `:root` section (around line 35)
3. Update the color values:

```css
:root {
  /* ... other variables ... */
  
  /* Custom theme colors */
  --theme-primary: #YOUR_COLOR;      /* Change navbar and accent color */
  --theme-background: #YOUR_COLOR;   /* Change page background */
  --theme-text: #YOUR_COLOR;         /* Change text color */
}
```

### Changing Fonts

1. Open `src/app/layout.tsx`
2. Import your desired Google Fonts:

```tsx
import { Your_Font, Another_Font } from "next/font/google";

const yourFont = Your_Font({
  variable: "--font-serif",  // For headings
  subsets: ["latin"],
});

const anotherFont = Another_Font({
  variable: "--font-mono",   // For body text
  subsets: ["latin"],
});
```

3. Update the font variables in the body className
4. The CSS variables will automatically use your new fonts!

## Current Theme

- **Primary Color**: `#7F1734` (Deep Red)
- **Background**: `#7F1734` (Deep Red)
- **Text Color**: `#FFF0F5` (Lavender Blush / Light Pink)
- **Heading Font**: Young Serif (Serif)
- **Body Font**: Instrument Sans (Sans-serif)

## Where Theme Variables Are Used

### Colors
- Navbar background: `var(--theme-primary)`
- Page background: `var(--theme-background)`
- All text colors: `var(--theme-text)`
- Border colors: `var(--theme-primary)`
- Hover effects: Based on `var(--theme-text)`

### Fonts
- "Hospital" title: `var(--theme-font-heading)`
- All headings (h1-h6): `var(--theme-font-heading)`
- Body text: `var(--theme-font-body)`
- Navigation items: `var(--theme-font-body)`
- Dropdown menus: Both fonts used appropriately

## Example: Switching to a Blue Theme

```css
:root {
  --theme-primary: #1E40AF;      /* Blue navbar */
  --theme-background: #1E40AF;   /* Blue background */
  --theme-text: #E0E7FF;         /* Light blue text */
}
```

Save the file and the entire app will update automatically! 🎨
