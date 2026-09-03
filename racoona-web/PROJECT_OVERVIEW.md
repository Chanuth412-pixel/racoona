# Racoona AI — Project Documentation & Guide

Welcome to the **Racoona AI** web application documentation. This guide explains what the project is, how it is built, its structure, and how you can run or modify it — all in simple, plain language.

---

## 🌟 1. What is Racoona AI?

**Racoona AI** is an enterprise technology and investment infrastructure company based in Ashburn, Virginia. 

The website serves as the corporate home and digital front door for Racoona AI, highlighting its primary business capabilities:

1. **Custom AI & Cloud Software Engineering**: Building production-ready AI models, legacy software modernization, and multi-cloud solutions (AWS, Azure, Google Cloud).
2. **Enterprise Infrastructure & IT Operations**: Providing 24/7 managed IT services, government & commercial cloud migrations, and NIST/HIPAA-compliant security protocols.
3. **Strategic Partnerships**: Partnering with infrastructure leaders like **TrinetTec** to power enterprise-grade computing and operations.

*(Note: The Food & Hospitality division is currently temporarily paused in main navigation).*

---

## 🛠️ 2. Technologies Used (Tech Stack)

This project uses modern web development tools to deliver a fast, responsive, and visually impressive experience:

* **[Astro](https://astro.build/)**: The core framework used to build static, lightning-fast web pages.
* **[React](https://react.dev/)**: Used for interactive components like animated grids, sliding navigation bars, and counter animations.
* **[Framer Motion](https://www.framer.com/motion/)**: Delivers smooth micro-animations and interactive UI visual effects.
* **[Tailwind CSS](https://tailwindcss.com/)**: Used for styling with modern colors, typography, layout cards, and responsive designs.
* **[Geist & Inter Fonts](https://fontsource.org/)**: Modern typography for a clean enterprise visual aesthetic.

---

## 📁 3. Project Directory Structure

Here is a simple breakdown of how the code is organized inside `racoona-web/`:

```text
racoona-web/
├── public/                # Static assets like images (raccoon-logo.png) & favicon
├── src/
│   ├── components/        # Reusable UI parts & interactive widgets (React & Astro)
│   ├── layouts/           # Page layouts (BaseLayout.astro contains Header & Footer)
│   ├── pages/             # Web pages (each file becomes a web route)
│   │   ├── about.astro          -> /about
│   │   ├── careers.astro        -> /careers
│   │   ├── contact.astro        -> /contact
│   │   ├── food-hospitality.astro -> /food-hospitality (paused)
│   │   ├── index.astro          -> / (Homepage)
│   │   ├── it-services.astro    -> /it-services
│   │   ├── software.astro       -> /software
│   │   └── blog/                -> /blog
│   └── styles/            # Global CSS styles (global.css)
├── astro.config.mjs       # Astro configuration file
├── package.json           # List of project dependencies & run commands
└── README.md              # Project quick reference
```

---

## 📄 4. Summary of Main Pages

* **Home Page (`src/pages/index.astro`)**:
  * Features a 2.5D interactive isometric architectural hero graphic.
  * Live stats bar (*42% Lower Cloud Costs*, *99.99% Uptime*).
  * Core operating division cards (*Software & AI*, *IT Operations*).
  * Strategic Infrastructure Partner banner (**TrinetTec**).
  * "Why Racoona" feature grid & "Who We Serve" client ecosystem.

* **Software Page (`src/pages/software.astro`)**:
  * Focuses on custom software development, AI models, and cloud modernization.

* **IT Services Page (`src/pages/it-services.astro`)**:
  * Details managed cloud operations, 24/7 monitoring, and compliance standards.

* **Careers Page (`src/pages/careers.astro`)**:
  * Displays current open engineering and infrastructure positions (e.g. Senior Cloud DevOps Engineer) with an apply action link.

* **About Us (`src/pages/about.astro`)**:
  * Information about Racoona AI's corporate mission, strategy, and headquarters in Ashburn, VA.

* **Contact (`src/pages/contact.astro`)**:
  * Interactive form for potential clients, partners, or applicants to reach out.

---

## 🧭 5. Layout & Navigation (BaseLayout)

All pages inherit from `src/layouts/BaseLayout.astro`:
* **Top Header / Navbar**: Contains the logo and interactive pill navigation bar (`NavbarNav.tsx`) that highlights active pages smoothly.
* **Footer**: Contains corporate information, links to sectors and pages, contact details, and copyright notices.
* **View Transitions**: Built-in smooth page transition animations so switching pages feels instant like a desktop application.

---

## 💻 6. How to Run the Project Locally

Follow these simple steps in your command terminal:

### Step 1: Open the Project Folder
Make sure your terminal is inside the `racoona-web` folder:
```bash
cd racoona-web
```

### Step 2: Install Dependencies
If running for the first time, install the required packages:
```bash
npm install
```

### Step 3: Start Development Server
Launch the live development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:4321` to view the website.

### Step 4: Build for Production
To generate the final optimized static website files for deployment:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

### Step 5: Preview Production Build
To test the production build locally before uploading:
```bash
npm run preview
```

---

## 📝 7. How to Update Content

* **To add/remove header links**: Edit `navItems` array inside `src/layouts/BaseLayout.astro`.
* **To add job openings**: Edit `src/pages/careers.astro` and add new job cards inside the job grid container.
* **To edit homepage content**: Edit `src/pages/index.astro` or individual components inside `src/components/`.

---

*Documentation compiled for Racoona AI static website repository.*
