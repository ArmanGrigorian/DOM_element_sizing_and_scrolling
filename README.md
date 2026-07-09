# ⚡ DOM Explorer Studio — Advanced DOM Metrics & Window Architecture

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3 Glassmorphism](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Upwork Portfolio Showcase](https://img.shields.io/badge/Upwork-Portfolio%20Showcase-14A800?style=for-the-badge&logo=upwork&logoColor=white)

**DOM Explorer Studio** is a state-of-the-art, interactive visualizer and inspection suite designed to demystify complex browser sizing mechanics, DOM Box Model calculations, viewport coordinate systems, and programmatic window manipulation APIs.

Designed and engineered by **Arman Grigoryan** as a showcase of high-performance **Vanilla JavaScript architecture**, responsive **Dark/Light Glassmorphism UI**, and real-time DOM telemetry.

---

## 🌟 Live Interactive Laboratories

### 1. 📐 Element Inspector (`index.html`)

An interactive sandbox for exploring how browsers compute Box Model dimensions and overflow behaviors in real time.

- **Chrome DevTools-Style Box Model Diagram**: Dynamically visualizes computed `margin`, `border`, `padding`, and inner `content` dimensions synchronously with window and element events.
- **Categorized Telemetry Dashboard**: Grouped breakdown of **Offset** (`offsetTop/Left/Width/Height`), **Client** (`clientTop/Left/Width/Height`), and **Scroll** (`scrollTop/Left/Width/Height`) properties.
- **Live D-Pad Controller & MutationObserver**: Real-time position controller (`translateY/X`) paired with a `MutationObserver` actively tracking attribute updates and DOM tree mutations.
- **One-Click Code Snippet Generator**: Extracts copy-to-clipboard JavaScript snippets reflecting exact active metric coordinates.

### 2. 🎯 Screen & Coordinates HUD (`views/screenWindowCoords.html`)

An interactive radar HUD for understanding browser coordinate vectors and display metrics.

- **Real-Time Crosshair Radar**: Tracks `--mouse-x` and `--mouse-y` via CSS variables and JavaScript event listeners, displaying live coordinate vectors inside a responsive arena.
- **Interactive Target Box Comparison**: Demonstrates the critical difference between local target offsets (`offsetX/Y`), viewport bounds (`clientX/Y`), total document coordinates (`pageX/Y`), and monitor positions (`screenX/Y`).
- **Display & Window Metrics Engine**: Complete breakdowns of `window.screen` (`screenTop`, `screenLeft`) against `window.innerWidth/outerWidth` and `window.scrollX/scrollY`.

### 3. 🧪 Scroll & Window Laboratory (`views/scrollResizeMove.html`)

A programmatic testbed for testing modern window manipulation and document scrolling methods.

- **Scroll Action Suite**: Interactive controls and quick-action presets for `window.scrollBy`, `window.scrollTo`, and `Element.scrollIntoView({ behavior: 'smooth' })`.
- **Popup Window Controller**: Safely spawns secondary browser windows (`window.open()`) with custom styling to demonstrate dynamic `resizeBy`, `resizeTo`, `moveBy`, and `moveTo` APIs without triggering browser primary-window security blocks.
- **Live Execution Event Console**: A dark-mode terminal log tracking every API dispatch with execution timestamps and error handling.

---

## 🏛️ Technical Architecture & Key Highlights

1. **Pure Zero-Dependency Architecture**: Built using native HTML5, modern CSS3 custom properties (`variables.css`, `common.css`), and ES6+ JavaScript modules (`type="module"`).
2. **Reactive DOM Telemetry via MutationObserver**: Instead of relying solely on expensive polling intervals, the system observes attribute changes (`attributes: true`) and structural changes (`childList: true`) to update telemetry instantly.
3. **Hardware-Accelerated CSS Variables**: Crosshair rendering (`--mouse-x`, `--mouse-y`) and theme toggling (`[data-theme="light/dark"]`) operate smoothly at 60 FPS without layout thrashing.
4. **Resilient Window & Security Management**: Adheres to strict browser popup and security boundaries (`Firefox 7+ / Chrome multi-tab restrictions`), gracefully handling errors and educating users with real-time feedback.

---

## 📚 Complete DOM Box Model & Coordinate Cheat Sheet

| Property Group  | Property               | What It Measures                                                             | Excludes                     |
| :-------------- | :--------------------- | :--------------------------------------------------------------------------- | :--------------------------- |
| **Offset**      | `offsetWidth / Height` | Outer dimensions including padding and borders.                              | Margins                      |
| **Offset**      | `offsetTop / Left`     | Distance from the top/left edge of the closest `offsetParent`.               | —                            |
| **Client**      | `clientWidth / Height` | Inner dimensions including padding.                                          | Borders, Margins, Scrollbars |
| **Client**      | `clientTop / Left`     | Thickness of top and left border (plus scrollbar if on left/top).            | Content, Padding             |
| **Scroll**      | `scrollWidth / Height` | Total size of scrollable content inside the element (even if hidden).        | Borders, Margins             |
| **Scroll**      | `scrollTop / Left`     | Current vertical/horizontal scroll position inside the overflow box.         | —                            |
| **Coordinates** | `clientX / clientY`    | Mouse coordinate measured relative to the visible **Viewport**.              | Page Scroll                  |
| **Coordinates** | `pageX / pageY`        | Mouse coordinate measured relative to the top-left of the **Document**.      | —                            |
| **Coordinates** | `offsetX / offsetY`    | Mouse coordinate measured relative to the target element's **Padding Edge**. | —                            |
| **Coordinates** | `screenX / screenY`    | Mouse coordinate measured relative to the physical **Monitor Display**.      | —                            |

---

## 🚀 Quick Start & Local Execution

No complex build steps or dependencies required! You can open and run this application immediately.

### Option 1: Direct File Launch

Simply double-click `index.html` (or open it in your web browser of choice).

### Option 2: Local Development Server (Recommended for ES modules)

If you have Node.js installed, run:

```bash
npx serve .
```

Or with Python:

```bash
python -m http.server 8000
```

Navigate to `http://localhost:8000` to start exploring!

---

## 👨‍💻 About the Author


