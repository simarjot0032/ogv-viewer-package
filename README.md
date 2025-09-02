# OGV Viewer React

A powerful and customizable React component for viewing 3D OBJ models in the browser, built with Three.js and React Three Fiber.

## Features

- 🎯 **Easy Integration** - Drop-in React component
- 🖱️ **Interactive Controls** - Rotate, zoom, and pan with mouse/touch
- 🎨 **Customizable Settings** - Background colors, grid, lighting, and more
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Performance Optimized** - Built with React Three Fiber for smooth rendering
- 🎮 **Rich Controls** - Auto-rotate, preset views, zoom levels, and scaling
- 🔧 **TypeScript Support** - Full type safety included

## Installation

```bash
npm install ogv-viewer-react
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom @react-three/fiber @react-three/drei
```

## Quick Start

```tsx
import React from 'react';
import { ModelViewer } from 'ogv-viewer-react';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ModelViewer
        url="/path/to/your/model.obj"
        showSettings={true}
        initialZoom={8}
        initialScale={0.02}
      />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | `string` | ✅ | - | URL to the OBJ model file |
| `showSettings` | `boolean` | ✅ | - | Whether to show the settings button and panel |
| `initialZoom` | `number` | ❌ | `8` | Initial zoom level of the camera |
| `initialScale` | `number` | ❌ | `0.02` | Initial scale of the 3D model |
| `className` | `string` | ❌ | `''` | Additional CSS class for the container |
| `style` | `React.CSSProperties` | ❌ | `{}` | Inline styles for the container |
| `children` | `React.ReactNode` | ❌ | - | Additional content to render inside the viewer |

## Settings Panel Features

When `showSettings={true}`, users can access:

### 🎮 Interactive Controls
- **Mouse Controls**: Left-click drag to rotate, right-click drag to pan, scroll to zoom
- **Auto-rotate**: Continuous 360° rotation
- **Grid Toggle**: Show/hide the reference grid

### 📐 Camera Views
- **Perspective Views**: Front, Back, Left, Right, Top, Bottom, Isometric
- **Custom Positioning**: Preset camera angles for optimal viewing

### 🔍 Zoom & Scale
- **Zoom Presets**: Close, Normal, Far, Very Far
- **Custom Zoom**: Slider control from 0.5x to 50x
- **Model Scale**: Adjust model size from 0.001 to 0.5
- **Scale Presets**: Tiny, Small, Medium, Large, Huge

### 🎨 Visual Customization
- **Background Colors**: Color picker for scene background
- **Enhanced Lighting**: Multiple light sources for optimal visibility
- **Grid Customization**: Configurable grid with sections and colors

## Advanced Usage

### Custom Styling

```tsx
<ModelViewer
  url="/model.obj"
  showSettings={true}
  className="my-viewer"
  style={{
    width: '800px',
    height: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}
/>
```

### Without Settings Panel

```tsx
<ModelViewer
  url="/model.obj"
  showSettings={false}
  initialZoom={12}
  initialScale={0.05}
/>

```

## Technical Details

### Built With
- **React Three Fiber** - React renderer for Three.js
- **Three.js** - 3D graphics library
- **React Three Drei** - Useful helpers and components
- **TypeScript** - Type safety and better development experience

### Browser Support
- Modern browsers with WebGL 2 support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Optimized for smooth 60fps rendering
- Efficient model loading with suspense
- Responsive controls with damping
- Memory-efficient cleanup

## File Format Support

Currently supports **OBJ** format files. The viewer expects:
- Valid OBJ geometry files
- Accessible URLs (same-origin or CORS-enabled)
- Reasonable file sizes for web delivery

## Troubleshooting

### Model Not Loading
- Ensure the OBJ file URL is accessible
- Check browser console for CORS errors
- Verify the file is a valid OBJ format

### Performance Issues
- Reduce model complexity for better performance
- Use smaller `initialScale` values for large models
- Consider model optimization tools

### Styling Issues
- The component uses CSS-in-JS for critical styles
- Additional styling can be applied via `className` and `style` props
- Ensure parent container has defined dimensions

## Examples

Check out these example implementations:

```tsx
// Basic viewer
<ModelViewer url="/models/chair.obj" showSettings={false} />

// Full-featured viewer
<ModelViewer 
  url="/models/car.obj" 
  showSettings={true}
  initialZoom={15}
  initialScale={0.1}
  style={{ height: '500px' }}
/>

// Custom styled viewer
<ModelViewer 
  url="/models/building.obj" 
  showSettings={true}
  className="architectural-viewer"
  style={{ 
    background: 'linear-gradient(to bottom, #87CEEB, #98FB98)',
    borderRadius: '12px'
  }}
/>
```

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## License

MIT License - see LICENSE file for details.

## Support

For questions and support, please open an issue on the GitHub repository.