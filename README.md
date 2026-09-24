# 🌌 Particle Lab - Studio v2.0

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-particlelab.semplicemente.io-7c3aed?style=for-the-badge&logo=google-chrome&logoColor=white)](https://particlelab.semplicemente.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Privacy First](https://img.shields.io/badge/Privacy-100%25%20First-34d399?style=for-the-badge&logo=shield)](https://semplicemente.io/)
[![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-No%20Dependencies-8b5cf6?style=for-the-badge&logo=javascript)](https://particlelab.semplicemente.io/)

**An advanced visual generator for interactive animated backgrounds in HTML5 Canvas & tsParticles.**  
Design, customize in real-time, and export production-ready code for your website in seconds.

[🌐 Live Demo](https://particlelab.semplicemente.io/) • [✨ Key Features](#-key-features) • [📦 Preset Catalog](#-preset-catalog) • [🚀 Quick Start](#-quick-start) • [💻 Embedding](#-embedding-backgrounds-in-your-website)

</div>

---

## 💎 Key Features

- **🎨 Modern Glassmorphic Interface**: Deep violet frosted glass UI featuring backdrop blur, vibrant neon accents, and distraction-free controls.
- **⚡ Collapsible Lateral Dock**: Compact sidebar with smooth transitions, keyboard shortcut (<kbd>H</kbd>), and an ambient floating trigger button.
- **🛡️ 100% Privacy-First**: Zero tracking cookies, zero external font calls, and instant 0ms latency rendering using native system font stacks.
- **📱 Fully Responsive**: Fluid layout adaptation for desktop monitors and touch-optimized controls for mobile devices.
- **🪐 Hybrid tsParticles + 3D Canvas Engine**: Combines the flexibility of `tsParticles v2` with custom HTML5 Canvas rendering for 3D Cyber Globes, Cosmic Vortices, and CRT Matrix Rain at steady 60 FPS.
- **📋 Instant Multi-Format Export**:
  - 📄 **Complete HTML**: Ready to deploy as a standalone file.
  - ⚡ **JavaScript Snippet**: Ready to drop into existing web apps.
  - ⚙️ **JSON Configuration**: Clean options object for `tsParticles`.
  - 💾 **Direct Download**: One-click file generation.
- **🎲 One-Click Randomizer**: Instantly shuffle presets, color palettes, and motion dynamics for creative inspiration.

---

## 📦 Preset Catalog

### 🌐 Hero Sections & Web Backgrounds
| Preset | Description | Ideal For |
| :--- | :--- | :--- |
| **🌐 Digital Network** | Interconnected nodes with distance-based reactive lines and cursor magnetism (*Plexus*). | SaaS, Tech Startups, Portfolios |
| **🌌 Ambient Stardust** | Subtle, slow-drifting stellar dust with gentle opacity pulsing. | Luxury, Dark UI, Minimalist Landing Pages |
| **💎 Floating Polygons** | Floating geometric hexagons and triangles with smooth rotation. | Web3, Fintech, Creative Agencies |
| **🫧 Glowing Bokeh Orbs**| Soft, out-of-focus illuminated spheres rising gracefully with depth-of-field. | Modern Hero Sections, Creative Studios |
| **✨ Starfield Deep Space** | Deep space starfield with twinkling stars and configurable warp speeds. | Gaming, Sci-Fi, Astronomy |
| **❄️ Snowfall Winter** | Gentle falling snowflakes with natural sway and adjustable gravity. | Seasonal Campaigns, Holiday Themes |
| **🔥 Plasma Flame** | Upward flowing thermal particles with dynamic chromatic transitions. | Events, Gaming, High-Energy Themes |
| **⚡ Matrix Digital Rain** | Cascading digital code streams with selectable character sets (Binary, Katakana, Alphanumeric). | Cybersecurity, Developer Tools |
| **💻 Matrix Classic CRT** | Phosphor terminal simulation with frame-rate throttling and trailing effects. | Retro, Terminal, Hacker Aesthetics |
| **🎉 Party Confetti** | Multi-colored celebration confetti with 3D tumbling physics and tilt gravity. | Success Screens, Milestones, Gamification |
| **💡 Magic Fireflies** | Ambient bioluminescent fireflies with organic motion and hover repulse. | Nature, Wellness, Storytelling |
| **🚀 Hyperspace Warp** | High-speed relativistic star tunnel with perspective acceleration. | Product Launches, Keynotes |

### 🪐 3D & Canvas Visual Effects
| Preset | Description |
| :--- | :--- |
| **🪐 Cyber Globe 3D** | Geometric 3D particle sphere structured with parallels and meridians, face lighting, and interactive mouse-inertia rotation. |
| **🌀 Cosmic Vortex** | Hypnotic gravitational accretion spiral drawing cosmic matter toward a luminous core. |
| **🌊 Quantum Wave 3D** | Undulating 3D sine-wave matrix terrain rippling continuously across the viewport. |

---

## 🛠️ Adjustable Parameters

- **Speed**: From subtle, relaxing ambient drifts (`0.1`) to supersonic streams (`20.0`).
- **Count / Density**: From lightweight minimalist accents to dense particle clouds (`10` - `500`).
- **Particle Size**: Control point and glyph dimensions (`1px` - `50px`).
- **Color & Hue**: Interactive color picker with real-time swatch preview.
- **Mouse Interaction**: *Grab* (connect), *Repulse* (push away), *Attract* (pull in), *Bubble* (magnify), or *None*.
- **Pro Effects**:
  - ☀️ **Neon Glow**: Calibrated ambient drop shadow glow.
  - ☄️ **Motion Trails**: Smooth canvas persistence for trailing effects.
- **Contextual Parameters**: 3D Globe Radius, Link Distance, Custom Matrix Character Sets, Snow Gravity, and more.

---

## 🚀 Quick Start

The project is built with **Vanilla HTML5, CSS3, and JavaScript (ES6+)** with zero required dependencies or build steps.

### 1. Clone the Repository
```bash
git clone https://github.com/semplicemente-io/particlelab.semplicemente.io.git
cd particlelab.semplicemente.io
```

### 2. Run Locally
Open `index.html` directly in any modern web browser, or serve it using your preferred local server:

---

## 💻 Embedding Backgrounds in Your Website

### Option 1: Standalone HTML File
1. Configure your desired particle effect in **Particle Lab**.
2. Click **"Export Code"**.
3. Select the **"Complete HTML"** tab and click **"Copy"** or **"Download File"**.
4. Paste the markup directly into your project.

### Option 2: Existing Project (tsParticles)
Include the `tsParticles` script and load the JSON configuration copied from the **"JavaScript Snippet"** tab:

```html
<!-- tsParticles CDN Bundle -->
<script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>

<!-- Particle Container -->
<div id="tsparticles"></div>

<script>
  tsParticles.load("tsparticles", {
    /* Paste your exported JSON configuration here */
  });
</script>
```

---

## 🧰 Tech Stack

- **Structure**: Semantic HTML5
- **Styling**: Modern Vanilla CSS (Variables, Flexbox, Grid, Backdrop Filters, System Font Stack)
- **Logic**: Vanilla Modern JavaScript (ES6+)
- **Graphics Engines**: [tsParticles v2](https://particles.js.org/) + Custom HTML5 Canvas 2D/3D Engine
- **Icons**: [Font Awesome 6](https://fontawesome.com/)

---

## 👨‍💻 Author

Developed and maintained by [**Semplicemente.io**](https://semplicemente.io/).

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
