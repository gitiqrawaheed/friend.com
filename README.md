# NYC, God, and Unwanted Friends

A React scrollytelling website analyzing graffiti responses to Friend.com subway ads in New York City.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up images:
   - Create a symlink from your pictures folder to public:
   ```bash
   ln -s ../pictures ./public/pictures
   ```
   - Or copy your pictures folder:
   ```bash
   cp -r pictures public/pictures
   ```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

- `src/components/` - All scene components (Scene01-27)
- `src/components/TextBlock/` - Reusable text block component
- `src/components/GraffitiScroller/` - Two-column word frequency scroller
- `src/data/wordFrequency.js` - Curated word frequency data
- `pictures/` - All image assets

## Features

- Scroll-triggered animations using IntersectionObserver
- Image morph transitions
- Word cloud visualization
- Two-column scrollytelling layout
- Responsive design

## Images

All images are located in the `/pictures` directory and are referenced with paths like `/pictures/filename.png`.
