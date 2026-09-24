/**
 * Particle Lab - Advanced Animated Background Generator
 * Production-Ready Web Backgrounds & Cyber 3D Engine
 * By Semplicemente.io
 */

// Character Sets for Matrix Rain
const charSets = {
    binary: ["0", "1"],
    alphanumeric: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    katakana: ["ｱ", "ｲ", "ｳ", "ｴ", "ｵ", "ｶ", "ｷ", "ｸ", "ｹ", "ｺ", "ｻ", "ｼ", "ｽ", "ｾ", "ｿ", "ﾀ", "ﾁ", "ﾂ", "ﾃ", "ﾄ", "ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾉ", "ﾊ", "ﾋ", "ﾌ", "ﾍ", "ﾎ", "ﾏ", "ﾐ", "ﾑ", "ﾒ", "ﾓ", "ﾔ", "ﾕ", "ﾖ", "ﾗ", "ﾘ", "ﾙ", "ﾚ", "ﾛ", "ﾜ", "ﾝ"]
};

// Presets Configuration (Production Real-World Web Backgrounds + 3D Modes)
const presets = {
    // 1. 🌐 Digital Network (Plexus)
    network: {
        particles: {
            number: { value: 90, density: { enable: true, value_area: 800 } },
            color: { value: "#a78bfa" },
            shape: { type: "circle" },
            opacity: { value: 0.65, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 140,
                color: "#8b5cf6",
                opacity: 0.5,
                width: 1.2
            },
            move: {
                enable: true,
                speed: 1.8,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                grab: { distance: 160, line_linked: { opacity: 0.9 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    },

    // 2. 🌌 Ambient Stardust (SaaS Minimalist Luxury)
    stardust: {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: "#c4b5fd" },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.15, sync: false } },
            size: { value: 2.2, random: true },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "push" } },
            modes: {
                bubble: { distance: 150, size: 4, duration: 2, opacity: 0.9 }
            }
        },
        retina_detect: true
    },

    // 3. 💎 Floating Polygons (Modern Geometric UI)
    geometric: {
        particles: {
            number: { value: 35, density: { enable: true, value_area: 800 } },
            color: { value: "#8b5cf6" },
            shape: {
                type: ["triangle", "polygon"],
                polygon: { nb_sides: 6 }
            },
            opacity: { value: 0.35, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false } },
            size: { value: 14, random: true },
            line_linked: {
                enable: true,
                distance: 200,
                color: "#7c3aed",
                opacity: 0.25,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            },
            rotate: {
                value: 0,
                random: true,
                direction: "clockwise",
                animation: { enable: true, speed: 5, sync: false }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
            modes: {
                repulse: { distance: 120, duration: 0.4 }
            }
        },
        retina_detect: true
    },

    // Glowing Bokeh Orbs
    bokeh: {
        particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#a78bfa" },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true, anim: { enable: true, speed: 0.4, opacity_min: 0.05, sync: false } },
            size: { value: 24, random: true, anim: { enable: true, speed: 2, size_min: 8, sync: false } },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 1.5,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "push" } },
            modes: {
                bubble: { distance: 220, size: 36, duration: 2, opacity: 0.75 }
            }
        },
        retina_detect: true
    },

    // 5. ✨ Starfield Deep Space
    stars: {
        particles: {
            number: { value: 300, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 2, random: true },
            move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            },
            line_linked: { enable: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false }, onclick: { enable: false } }
        },
        retina_detect: true
    },

    // 6. ❄️ Snowfall Winter
    snow: {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.75, random: false },
            size: { value: 4, random: true },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 3,
                direction: "bottom",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            },
            wobble: { enable: true, distance: 10, speed: 10 }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false }, onclick: { enable: false } }
        },
        retina_detect: true
    },

    // 7. 🔥 Plasma Flame
    fire: {
        particles: {
            number: { value: 110, density: { enable: true, value_area: 800 } },
            color: { value: ["#7c3aed", "#6366f1", "#38bdf8"] },
            shape: { type: "circle" },
            opacity: { value: 0.65, random: true, anim: { enable: true, speed: 1.2, opacity_min: 0, sync: false } },
            size: { value: 5, random: true, anim: { enable: true, speed: 4, size_min: 0.2, sync: false } },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 5.5,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            },
            wobble: { enable: true, distance: 12, speed: 12 }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false }, onclick: { enable: false } }
        },
        retina_detect: true
    },

    // 8. ⚡ Matrix Digital Rain
    matrix: {
        particles: {
            number: { value: 140, density: { enable: true, value_area: 800 } },
            color: { value: "#a78bfa" },
            shape: {
                type: "char",
                character: {
                    value: charSets.binary,
                    font: "Verdana",
                    style: "",
                    weight: "400",
                    fill: true
                }
            },
            opacity: { value: 0.9, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
            size: { value: 11, random: false },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 16,
                direction: "bottom",
                random: false,
                straight: true,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false }, onclick: { enable: false } }
        },
        retina_detect: true
    },

    // 9. 💻 Matrix Classic CRT
    matrixReal: {
        type: 'custom',
        particles: {
            number: { value: 150 },
            color: { value: "#8b5cf6" },
            size: { value: 16 },
            move: { speed: 5.5 }
        }
    },

    // 10. 🎉 Party Confetti
    confetti: {
        particles: {
            number: { value: 90, density: { enable: true, value_area: 800 } },
            color: { value: ["#8b5cf6", "#7c3aed", "#6366f1", "#38bdf8", "#c4b5fd"] },
            shape: { type: ["circle", "square", "triangle"] },
            opacity: { value: 0.9, random: false, anim: { enable: false } },
            size: { value: 7, random: true },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 4.5,
                direction: "bottom",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            },
            rotate: {
                value: 0,
                random: true,
                direction: "random",
                animation: { enable: true, speed: 10, sync: false }
            },
            tilt: {
                enable: true,
                value: 0,
                random: true,
                direction: "random",
                animation: { enable: true, speed: 10, sync: false }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false }, onclick: { enable: false } }
        },
        retina_detect: true
    },

    // 11. 💡 Magic Fireflies
    fireflies: {
        particles: {
            number: { value: 45, density: { enable: true, value_area: 800 } },
            color: { value: "#c4b5fd" },
            shape: { type: "circle" },
            opacity: { value: 0.9, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.2, sync: false } },
            size: { value: 3.5, random: true },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
            modes: {
                repulse: { distance: 100, duration: 0.4 }
            }
        },
        retina_detect: true
    },

    // 12. 🚀 Hyperspace Warp
    warp: {
        particles: {
            number: { value: 250, density: { enable: true, value_area: 800 } },
            color: { value: "#c4b5fd" },
            shape: { type: "circle" },
            opacity: { value: 0.85, random: true },
            size: { value: 2, random: true },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 18,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                warp: true
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false }, onclick: { enable: false } }
        },
        retina_detect: true
    },

    // 3D Cyber Globe
    planet3d: {
        type: 'custom',
        particles: {
            number: { value: 360 },
            color: { value: "#8b5cf6" },
            size: { value: 3 },
            move: { speed: 1.5 },
            ringRadius: 350
        }
    },

    // Cosmic Vortex
    vortex: {
        type: 'custom',
        particles: {
            number: { value: 280 },
            color: { value: "#7c3aed" },
            size: { value: 2.5 },
            move: { speed: 1.2 }
        }
    },

    // Quantum Waves 3D
    wave3d: {
        type: 'custom',
        particles: {
            number: { value: 320 },
            color: { value: "#6366f1" },
            size: { value: 3 },
            move: { speed: 2 }
        }
    }
};

// UI Specific Controls Mapping
const controlConfig = {
    network: ['network'],
    stardust: [],
    geometric: ['network'],
    bokeh: [],
    stars: [],
    snow: ['snow'],
    fire: [],
    matrix: ['matrix'],
    matrixReal: ['matrix', 'matrixReal'],
    confetti: [],
    fireflies: [],
    warp: [],
    planet3d: ['planet3d'],
    vortex: [],
    wave3d: []
};

let currentConfig = JSON.parse(JSON.stringify(presets.network));
let currentPresetName = 'network';
let currentExportFormat = 'html';

// DOM References
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const btnCloseSidebar = document.getElementById('btn-close-sidebar');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const presetSelect = document.getElementById('preset-select');
const btnRandomize = document.getElementById('btn-randomize');

// Custom Canvas Elements
const customCanvas = document.getElementById("custom-canvas");
const customCtx = customCanvas.getContext("2d");
let customAnimationId;
let customActive = false;

// 3D & Custom State
let matrixDrops = [];
let matrixColumns = 0;
let globeRotY = 0;
let globeRotX = 0.2;
let targetRotX = 0.2;
let targetRotY = 0;
let vortexAngle = 0;
let waveTime = 0;

// Parameter Controls
const countInput = document.getElementById("particle-count");
const countVal = document.getElementById("particle-count-val");
const speedInput = document.getElementById("particle-speed");
const speedVal = document.getElementById("particle-speed-val");
const sizeInput = document.getElementById("particle-size");
const sizeVal = document.getElementById("particle-size-val");
const colorInput = document.getElementById("particle-color");
const colorHexBadge = document.getElementById("color-hex-badge");
const colorPreviewPill = document.getElementById("color-preview-pill");

// Specific Preset Inputs
const planetRingInput = document.getElementById("planet-ring");
const planetRingVal = document.getElementById("planet-ring-val");
const distInput = document.getElementById("link-distance");
const distVal = document.getElementById("link-distance-val");
const matrixCharsetSelect = document.getElementById("matrix-charset");
const matrixCharsInput = document.getElementById("matrix-chars");
const matrixOpacityInput = document.getElementById("matrix-opacity");
const matrixOpacityVal = document.getElementById("matrix-opacity-val");
const snowGravityInput = document.getElementById("snow-gravity");
const snowGravityVal = document.getElementById("snow-gravity-val");

// Effects & Interactivity
const toggleGlow = document.getElementById("toggle-glow");
const toggleTrails = document.getElementById("toggle-trails");
const interactionMode = document.getElementById("interaction-mode");

// Export Modal Elements
const btnGenerate = document.getElementById("btn-generate");
const btnCopy = document.getElementById("btn-copy");
const btnDownload = document.getElementById("btn-download");
const btnCloseModal = document.getElementById("btn-close-modal");
const exportModal = document.getElementById("export-modal");
const exportCodeArea = document.getElementById("export-code");
const exportTabs = document.querySelectorAll(".export-tab");

// ==========================================================================
// SIDEBAR COLLAPSE / EXPAND LOGIC
// ==========================================================================

const openSidebar = () => {
    sidebar.classList.remove('collapsed');
    sidebarToggle.classList.remove('visible');
    if (window.innerWidth <= 768) {
        sidebarBackdrop.classList.add('active');
    }
};

const closeSidebar = () => {
    sidebar.classList.add('collapsed');
    sidebarToggle.classList.add('visible');
    sidebarBackdrop.classList.remove('active');
};

const toggleSidebarState = () => {
    if (sidebar.classList.contains('collapsed')) {
        openSidebar();
    } else {
        closeSidebar();
    }
};

sidebarToggle.addEventListener('click', openSidebar);
btnCloseSidebar.addEventListener('click', closeSidebar);
sidebarBackdrop.addEventListener('click', closeSidebar);

// Keyboard shortcut 'H'
window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        return;
    }
    if (e.key === 'h' || e.key === 'H') {
        toggleSidebarState();
    } else if (e.key === 'Escape') {
        if (!exportModal.classList.contains('hidden')) {
            exportModal.classList.add('hidden');
        } else {
            closeSidebar();
        }
    }
});

// Interactive mouse rotation for 3D Custom Canvas
window.addEventListener('mousemove', (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    targetRotX = ny * 0.75;
    targetRotY = nx * 1.1;
});

// ==========================================================================
// COLOR SYNC & UI UPDATES
// ==========================================================================

const updateColorUI = (colorHex) => {
    colorHexBadge.innerText = colorHex;
    colorPreviewPill.style.backgroundColor = colorHex;
    const hex = colorHex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const pickText = colorPreviewPill.querySelector('.color-pick-text');
    if (pickText) {
        pickText.style.color = brightness > 140 ? '#06020e' : '#ffffff';
    }
};

const updateUI = () => {
    countVal.innerText = countInput.value;
    speedVal.innerText = speedInput.value;
    sizeVal.innerText = sizeInput.value;
    if (planetRingVal && planetRingInput) planetRingVal.innerText = planetRingInput.value;
    if (distVal) distVal.innerText = distInput.value;
    if (matrixOpacityVal) matrixOpacityVal.innerText = matrixOpacityInput.value;
    if (snowGravityVal) snowGravityVal.innerText = snowGravityInput.value;
    updateColorUI(colorInput.value);
};

// ==========================================================================
// 3D CYBER GLOBE & CUSTOM CANVAS ENGINE
// ==========================================================================

const resizeCustomCanvas = () => {
    customCanvas.width = window.innerWidth;
    customCanvas.height = window.innerHeight;

    if (currentPresetName === 'matrixReal') {
        const fontSize = parseInt(sizeInput.value) || 16;
        matrixColumns = Math.floor(customCanvas.width / Math.max(8, fontSize));
        if (matrixDrops.length === 0 || Math.abs(matrixDrops.length - matrixColumns) > 2) {
            matrixDrops = [];
            for (let i = 0; i < matrixColumns; i++) {
                matrixDrops[i] = Math.floor(Math.random() * -50);
            }
        }
    }
};

// 3D Cyber Particle Globe Engine
let globePoints = [];
const generateGlobePoints = (numPoints, radius) => {
    globePoints = [];
    const parallels = 14;
    const ptsPerParallel = Math.floor(numPoints / parallels);

    for (let p = 0; p <= parallels; p++) {
        const phi = (p / parallels) * Math.PI; // 0 to PI
        const y = radius * Math.cos(phi);
        const ringRad = radius * Math.sin(phi);

        for (let i = 0; i < ptsPerParallel; i++) {
            const theta = (i / ptsPerParallel) * (Math.PI * 2);
            const x = ringRad * Math.cos(theta);
            const z = ringRad * Math.sin(theta);
            globePoints.push({ x, y, z, origRad: radius });
        }
    }
};

const drawCyberGlobe = (speed, size, color) => {
    const cx = customCanvas.width / 2;
    const cy = customCanvas.height / 2;
    const focal = 550;

    globeRotX += (targetRotX - globeRotX) * 0.05;
    globeRotY += 0.005 * speed;

    customCtx.clearRect(0, 0, customCanvas.width, customCanvas.height);

    // Subtle atmospheric core glow
    const coreRad = parseInt(planetRingInput ? planetRingInput.value : 180);
    const grad = customCtx.createRadialGradient(cx, cy, 10, cx, cy, coreRad * 1.5);
    grad.addColorStop(0, "rgba(139, 92, 246, 0.15)");
    grad.addColorStop(0.7, "rgba(99, 102, 241, 0.04)");
    grad.addColorStop(1, "rgba(6, 2, 14, 0)");
    customCtx.fillStyle = grad;
    customCtx.fillRect(0, 0, customCanvas.width, customCanvas.height);

    const cosX = Math.cos(globeRotX);
    const sinX = Math.sin(globeRotX);
    const cosY = Math.cos(globeRotY);
    const sinY = Math.sin(globeRotY);

    const projected = [];

    for (let i = 0; i < globePoints.length; i++) {
        const pt = globePoints[i];

        // Rotate Y
        const x1 = pt.x * cosY - pt.z * sinY;
        const z1 = pt.x * sinY + pt.z * cosY;

        // Rotate X
        const y2 = pt.y * cosX - z1 * sinX;
        const z2 = pt.y * sinX + z1 * cosX;

        const depth = z2 + 450;
        if (depth > 10) {
            const scale = focal / depth;
            const sx = cx + x1 * scale;
            const sy = cy + y2 * scale;
            projected.push({ sx, sy, z: z2, scale, x1, y2 });
        }
    }

    projected.sort((a, b) => a.z - b.z);

    const isGlow = toggleGlow.checked;

    for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        // Facing camera brightness
        const normalZ = p.z / coreRad;
        const alpha = Math.max(0.12, Math.min(0.95, (normalZ + 1) * 0.5));
        const ptSize = Math.max(0.8, size * p.scale * 0.7);

        customCtx.beginPath();
        customCtx.arc(p.sx, p.sy, ptSize, 0, Math.PI * 2);
        customCtx.fillStyle = color;
        customCtx.globalAlpha = alpha;

        if (isGlow && normalZ > -0.2) {
            customCtx.shadowColor = color;
            customCtx.shadowBlur = 8;
        } else {
            customCtx.shadowBlur = 0;
        }

        customCtx.fill();
    }
    customCtx.globalAlpha = 1;
};

// Cosmic Vortex Engine
let vortexParticles = [];
const initVortexParticles = (count) => {
    vortexParticles = [];
    for (let i = 0; i < count; i++) {
        vortexParticles.push({
            dist: Math.random() * 450 + 30,
            angle: Math.random() * Math.PI * 2,
            orbitSpeed: (Math.random() * 0.003 + 0.002),
            fallSpeed: Math.random() * 0.2 + 0.1,
            size: Math.random() * 2.5 + 1.2
        });
    }
};

const drawVortex = (speed, size, color) => {
    const cx = customCanvas.width / 2;
    const cy = customCanvas.height / 2;

    if (toggleTrails.checked) {
        customCtx.fillStyle = "rgba(6, 2, 14, 0.12)";
        customCtx.fillRect(0, 0, customCanvas.width, customCanvas.height);
    } else {
        customCtx.clearRect(0, 0, customCanvas.width, customCanvas.height);
    }

    // Core Singularity Glow
    const coreGrad = customCtx.createRadialGradient(cx, cy, 5, cx, cy, 180);
    coreGrad.addColorStop(0, "rgba(124, 58, 237, 0.25)");
    coreGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.06)");
    coreGrad.addColorStop(1, "rgba(6, 2, 14, 0)");
    customCtx.fillStyle = coreGrad;
    customCtx.fillRect(0, 0, customCanvas.width, customCanvas.height);

    for (let i = 0; i < vortexParticles.length; i++) {
        const p = vortexParticles[i];
        // Slow majestic rotation
        p.angle += p.orbitSpeed * speed * 1.5;
        p.dist -= p.fallSpeed * (speed * 0.5);

        if (p.dist < 20) {
            p.dist = Math.random() * 200 + 350;
        }

        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * (p.dist * 0.45);

        const normDist = p.dist / 450;
        const alpha = Math.min(0.9, Math.max(0.15, normDist + 0.1));

        customCtx.beginPath();
        customCtx.arc(x, y, Math.max(0.8, size * (p.size / 3)), 0, Math.PI * 2);
        customCtx.fillStyle = color;
        customCtx.globalAlpha = alpha;

        if (toggleGlow.checked) {
            customCtx.shadowColor = color;
            customCtx.shadowBlur = 10;
        } else {
            customCtx.shadowBlur = 0;
        }

        customCtx.fill();
    }
    customCtx.globalAlpha = 1;
};

// 3D Quantum Wave Mesh
const drawWave3D = (speed, size, color) => {
    waveTime += 0.012 * speed;
    customCtx.clearRect(0, 0, customCanvas.width, customCanvas.height);

    const cols = 26;
    const rows = 16;
    const spacingX = customCanvas.width / (cols - 1);
    const spacingY = (customCanvas.height * 0.7) / (rows - 1);
    const startY = customCanvas.height * 0.28;

    for (let r = 0; r < rows; r++) {
        customCtx.beginPath();
        for (let c = 0; c < cols; c++) {
            const x = c * spacingX;
            const wave = Math.sin(c * 0.25 + waveTime) * Math.cos(r * 0.35 + waveTime) * 30;
            const y = startY + r * spacingY + wave;

            if (c === 0) {
                customCtx.moveTo(x, y);
            } else {
                customCtx.lineTo(x, y);
            }

            customCtx.fillStyle = color;
            customCtx.fillRect(x - size * 0.7, y - size * 0.7, size * 1.4, size * 1.4);
        }
        customCtx.strokeStyle = color;
        customCtx.globalAlpha = 0.2 + (r / rows) * 0.45;
        customCtx.lineWidth = 1;
        customCtx.stroke();
    }
    customCtx.globalAlpha = 1;
};

// Matrix CRT Engine
let lastMatrixUpdate = 0;
const drawMatrixRain = (speed) => {
    const now = performance.now();
    // Throttle frame interval according to speed (speed 0.1 -> ~600ms, speed 1 -> ~80ms, speed 2 -> ~45ms, speed 15 -> ~10ms)
    const interval = Math.max(10, 80 / Math.max(0.05, speed * 0.9));
    if (now - lastMatrixUpdate < interval) {
        return;
    }
    lastMatrixUpdate = now;

    customCtx.globalCompositeOperation = 'destination-out';
    const fadeSpeed = Math.max(0.01, (parseFloat(matrixOpacityInput.value) || 1) * 0.05);
    customCtx.fillStyle = `rgba(0, 0, 0, ${fadeSpeed})`;
    customCtx.fillRect(0, 0, customCanvas.width, customCanvas.height);

    customCtx.globalCompositeOperation = 'source-over';
    const fontSize = parseInt(sizeInput.value) || 16;
    customCtx.fillStyle = colorInput.value || "#8b5cf6";
    customCtx.font = fontSize + "px monospace";

    let charString = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const setKey = matrixCharsetSelect.value;
    if (setKey === 'custom') {
        charString = matrixCharsInput.value || charString;
    } else if (charSets[setKey]) {
        charString = charSets[setKey].join("");
    }
    if (!charString) charString = "0123456789";

    for (let i = 0; i < matrixDrops.length; i++) {
        const text = charString.charAt(Math.floor(Math.random() * charString.length));
        customCtx.fillText(text, i * fontSize, matrixDrops[i] * fontSize);

        if (matrixDrops[i] * fontSize > customCanvas.height && Math.random() > 0.975) {
            matrixDrops[i] = 0;
        }
        matrixDrops[i]++;
    }
};

const renderCustomCanvas = () => {
    if (!customActive) return;

    const speed = parseFloat(speedInput.value) || 2;
    const size = parseFloat(sizeInput.value) || 3;
    const color = colorInput.value || "#8b5cf6";

    if (currentPresetName === 'planet3d') {
        drawCyberGlobe(speed, size, color);
    } else if (currentPresetName === 'vortex') {
        drawVortex(speed, size, color);
    } else if (currentPresetName === 'wave3d') {
        drawWave3D(speed, size, color);
    } else if (currentPresetName === 'matrixReal') {
        drawMatrixRain(speed);
    }

    customAnimationId = requestAnimationFrame(renderCustomCanvas);
};

const startCustomCanvas = () => {
    customActive = true;
    customCanvas.style.display = 'block';
    resizeCustomCanvas();

    if (currentPresetName === 'planet3d') {
        const count = parseInt(countInput.value) || 360;
        const rad = parseInt(planetRingInput ? planetRingInput.value : 350) || 350;
        generateGlobePoints(count, rad);
    } else if (currentPresetName === 'vortex') {
        initVortexParticles(parseInt(countInput.value) || 280);
    }

    cancelAnimationFrame(customAnimationId);
    renderCustomCanvas();
};

const stopCustomCanvas = () => {
    customActive = false;
    cancelAnimationFrame(customAnimationId);
    customCanvas.style.display = 'none';
    customCtx.clearRect(0, 0, customCanvas.width, customCanvas.height);
};

window.addEventListener("resize", () => {
    if (customActive) {
        resizeCustomCanvas();
    }
});

// ==========================================================================
// RELOAD & PRESET SYNC
// ==========================================================================

const isCustomPreset = (presetName) => {
    return presetName === 'planet3d' || presetName === 'vortex' || presetName === 'wave3d' || presetName === 'matrixReal';
};

const reloadParticles = () => {
    const container = tsParticles.domItem(0);

    if (isCustomPreset(currentPresetName)) {
        if (container) container.destroy();
        startCustomCanvas();
        return;
    }

    stopCustomCanvas();

    if (container) {
        container.destroy();
    }
    tsParticles.load("tsparticles", currentConfig);
};

const loadPreset = (presetName) => {
    currentPresetName = presetName;
    presetSelect.value = presetName;
    currentConfig = JSON.parse(JSON.stringify(presets[presetName]));

    // Sync General Inputs
    countInput.value = currentConfig.particles.number.value;
    speedInput.value = currentConfig.particles.move.speed;
    sizeInput.value = Array.isArray(currentConfig.particles.size.value)
        ? currentConfig.particles.size.value[0]
        : currentConfig.particles.size.value;

    // Sync Color
    let color = currentConfig.particles.color.value;
    if (Array.isArray(color)) color = color[0];
    if (typeof color !== 'string') color = "#8b5cf6";
    colorInput.value = color;

    // Specific Preset values
    if (presetName === 'planet3d' && planetRingInput) {
        planetRingInput.value = currentConfig.particles.ringRadius || 180;
    }

    if ((presetName === 'network' || presetName === 'geometric') && currentConfig.particles.line_linked) {
        distInput.value = currentConfig.particles.line_linked.distance || 140;
    }

    if (presetName === 'matrix' || presetName === 'matrixReal') {
        let foundSet = 'custom';
        const currentChars = currentConfig.particles.shape?.character?.value || charSets.binary;
        const currentCharsStr = Array.isArray(currentChars) ? currentChars.join("") : currentChars;

        for (const [key, val] of Object.entries(charSets)) {
            if (val.join("") === currentCharsStr) {
                foundSet = key;
                break;
            }
        }

        matrixCharsetSelect.value = foundSet;
        if (foundSet === 'custom') {
            matrixCharsInput.value = currentCharsStr;
            matrixCharsInput.classList.remove('hidden');
        } else {
            matrixCharsInput.classList.add('hidden');
        }
    }

    if (presetName === 'snow') {
        snowGravityInput.value = currentConfig.particles.move.speed;
    }

    // Toggle Visibility of Specific Controls
    document.querySelectorAll('.specific-card[data-specific]').forEach(el => {
        el.classList.add('hidden');
    });

    const visibleControls = controlConfig[presetName];
    if (visibleControls) {
        visibleControls.forEach(controlType => {
            document.querySelectorAll(`.specific-card[data-specific="${controlType}"]`).forEach(el => {
                el.classList.remove('hidden');
            });
        });
    }

    // Pro Effects & Interaction
    toggleGlow.checked = !!(currentConfig.particles.shadow && currentConfig.particles.shadow.enable);
    toggleTrails.checked = !!(currentConfig.particles.move.trail && currentConfig.particles.move.trail.enable);

    const hoverMode = currentConfig.interactivity?.events?.onhover?.mode;
    interactionMode.value = Array.isArray(hoverMode) ? hoverMode[0] : hoverMode || 'none';

    const interactionCard = document.querySelector('.interaction-card');
    if (interactionCard) {
        if (isCustomPreset(presetName)) {
            interactionCard.classList.add('hidden');
        } else {
            interactionCard.classList.remove('hidden');
        }
    }

    updateUI();
    reloadParticles();
};

// ==========================================================================
// RANDOMIZE PRESET GENERATOR
// ==========================================================================

const deepVioletPalette = [
    "#8b5cf6", "#7c3aed", "#6d28d9", "#6366f1", "#4f46e5",
    "#a78bfa", "#c4b5fd", "#38bdf8", "#06b6d4", "#ffffff"
];

btnRandomize.addEventListener('click', () => {
    const keys = Object.keys(presets);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomColor = deepVioletPalette[Math.floor(Math.random() * deepVioletPalette.length)];

    loadPreset(randomKey);
    colorInput.value = randomColor;
    currentConfig.particles.color.value = randomColor;
    if (currentConfig.particles.line_linked) {
        currentConfig.particles.line_linked.color = randomColor;
    }
    updateUI();
    reloadParticles();
});

// ==========================================================================
// EVENT LISTENERS: CONTROLS & INPUTS
// ==========================================================================

presetSelect.addEventListener('change', (e) => {
    loadPreset(e.target.value);
});

countInput.addEventListener("input", (e) => {
    currentConfig.particles.number.value = parseInt(e.target.value);
    updateUI();
    if (currentPresetName === 'planet3d') {
        generateGlobePoints(parseInt(e.target.value), parseInt(planetRingInput ? planetRingInput.value : 180) || 180);
    } else if (currentPresetName === 'vortex') {
        initVortexParticles(parseInt(e.target.value));
    } else {
        reloadParticles();
    }
});

speedInput.addEventListener("input", (e) => {
    currentConfig.particles.move.speed = parseFloat(e.target.value);
    updateUI();
    if (!isCustomPreset(currentPresetName)) {
        reloadParticles();
    }
});

sizeInput.addEventListener("input", (e) => {
    currentConfig.particles.size.value = parseFloat(e.target.value);
    updateUI();
    if (!isCustomPreset(currentPresetName)) {
        reloadParticles();
    }
});

colorInput.addEventListener("input", (e) => {
    const val = e.target.value;
    currentConfig.particles.color.value = val;
    if (currentConfig.particles.line_linked) {
        currentConfig.particles.line_linked.color = val;
    }
    updateUI();
    if (!isCustomPreset(currentPresetName)) {
        reloadParticles();
    }
});

if (planetRingInput) {
    planetRingInput.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        currentConfig.particles.ringRadius = val;
        updateUI();
        if (currentPresetName === 'planet3d') {
            generateGlobePoints(parseInt(countInput.value) || 360, val);
        }
    });
}

distInput.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    if (!currentConfig.particles.line_linked) currentConfig.particles.line_linked = { enable: true };
    currentConfig.particles.line_linked.enable = val > 0;
    currentConfig.particles.line_linked.distance = val;
    updateUI();
    reloadParticles();
});

matrixCharsetSelect.addEventListener("change", (e) => {
    const val = e.target.value;
    if (val === 'custom') {
        matrixCharsInput.classList.remove('hidden');
        const currentChars = currentConfig.particles.shape?.character?.value || charSets.binary;
        matrixCharsInput.value = Array.isArray(currentChars) ? currentChars.join("") : currentChars;
    } else {
        matrixCharsInput.classList.add('hidden');
        if (charSets[val]) {
            if (currentConfig.particles.shape) {
                currentConfig.particles.shape.character.value = charSets[val];
            }
            reloadParticles();
        }
    }
});

matrixCharsInput.addEventListener("change", (e) => {
    const val = e.target.value;
    if (currentConfig.particles.shape) {
        currentConfig.particles.shape.character.value = val.split("");
    }
    reloadParticles();
});

matrixOpacityInput.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    if (!currentConfig.particles.opacity) currentConfig.particles.opacity = {};
    if (!currentConfig.particles.opacity.anim) currentConfig.particles.opacity.anim = { enable: true };
    currentConfig.particles.opacity.anim.speed = val;
    updateUI();
});

snowGravityInput.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    currentConfig.particles.move.speed = val;
    updateUI();
    reloadParticles();
});

toggleGlow.addEventListener("change", (e) => {
    if (e.target.checked) {
        currentConfig.particles.shadow = {
            enable: true,
            color: currentConfig.particles.color.value,
            blur: 12
        };
    } else {
        if (currentConfig.particles.shadow) currentConfig.particles.shadow.enable = false;
    }
    if (!isCustomPreset(currentPresetName)) {
        reloadParticles();
    }
});

toggleTrails.addEventListener("change", (e) => {
    if (e.target.checked) {
        currentConfig.particles.move.trail = {
            enable: true,
            length: 10,
            fillColor: "#06020e"
        };
    } else {
        if (currentConfig.particles.move.trail) currentConfig.particles.move.trail.enable = false;
    }
    if (!isCustomPreset(currentPresetName)) {
        reloadParticles();
    }
});

interactionMode.addEventListener("change", (e) => {
    const val = e.target.value;
    if (!currentConfig.interactivity) {
        currentConfig.interactivity = { events: { onhover: {} } };
    }
    if (!currentConfig.interactivity.events) {
        currentConfig.interactivity.events = { onhover: {} };
    }
    if (val === 'none') {
        currentConfig.interactivity.events.onhover.enable = false;
    } else {
        currentConfig.interactivity.events.onhover.enable = true;
        currentConfig.interactivity.events.onhover.mode = val;
    }
    reloadParticles();
});

// ==========================================================================
// EXPORT CODE GENERATOR & MODAL
// ==========================================================================

const generateCodeSnippet = (format) => {
    const configString = JSON.stringify(currentConfig, null, 4);

    if (format === 'json') {
        return configString;
    }

    if (format === 'js') {
        return `// Particle Lab - tsParticles Background Snippet
// Include tsParticles bundle: <script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"><\/script>
const particlesConfig = ${configString};
tsParticles.load("tsparticles", particlesConfig);`;
    }

    // Default HTML
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Particle Background</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #06020e; overflow: hidden; width: 100vw; height: 100vh; }
        #tsparticles { position: fixed; inset: 0; width: 100%; height: 100%; z-index: 0; }
    </style>
    <!-- tsParticles CDN -->
    <script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"><\/script>
</head>
<body>
    <div id="tsparticles"></div>

    <script>
        const particlesConfig = ${configString};
        tsParticles.load("tsparticles", particlesConfig);
    <\/script>
</body>
</html>`;
};

const refreshExportCode = () => {
    exportCodeArea.value = generateCodeSnippet(currentExportFormat);
};

exportTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        exportTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentExportFormat = tab.getAttribute('data-format');
        refreshExportCode();
    });
});

btnGenerate.addEventListener("click", () => {
    refreshExportCode();
    exportModal.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", () => {
    exportModal.classList.add("hidden");
});

exportModal.addEventListener("click", (e) => {
    if (e.target === exportModal) {
        exportModal.classList.add("hidden");
    }
});

btnCopy.addEventListener("click", () => {
    exportCodeArea.select();
    navigator.clipboard.writeText(exportCodeArea.value).then(() => {
        const originalText = btnCopy.innerHTML;
        btnCopy.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            btnCopy.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

btnDownload.addEventListener("click", () => {
    const code = exportCodeArea.value;
    let fileName = `particle-background.${currentExportFormat === 'json' ? 'json' : currentExportFormat === 'js' ? 'js' : 'html'}`;
    let mimeType = currentExportFormat === 'json' ? 'application/json' : currentExportFormat === 'js' ? 'text/javascript' : 'text/html';

    const blob = new Blob([code], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// ==========================================================================
// INITIALIZATION
// ==========================================================================

loadPreset('network');
