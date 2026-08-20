# Luna Beauty Salon

A simple, modern, elegant, and responsive static website for **Luna Beauty Salon**.
This project is built using only standard web technologies (HTML5, CSS3, and vanilla JavaScript) with zero external frameworks or backend dependencies. It has been meticulously structured to be lightweight and ready for inclusion in DevOps CI/CD pipeline demonstrations.

## Features

- **Elegant Design:** Soft cream and warm dusty-rose aesthetic with elegant typography (`Playfair Display` & `Montserrat`).
- **Responsive Layout:** Adaptive styling across Desktop, Tablet, and Mobile screens.
  - Hamburger menu toggle for mobile viewports.
  - Fluid grid/flexbox cards and service rows.
  - Responsive image layouts and form alignments.
- **Interactive Experience:** Smooth scrolling to sections, active section tracking on the navigation menu, and dynamic required-field validation on the booking form.
- **No External Dependencies:** Local high-quality salon image assets stored directly inside `images/`.

## Project Directory Structure

```text
beauty-salon/
├── index.html     # Semantic HTML5 document structure
├── style.css      # Custom CSS3 styles, variables, grid layouts, and media queries
├── script.js     # Vanilla JavaScript handling mobile menu, validation, and scroll offsets
└── images/        # High-quality local image assets (Unsplash placeholders)
```

## How to Run the Website Locally

1. **Directly via Browser:**
   - Double-click `index.html` inside the `beauty-salon` folder, or drag-and-drop `index.html` into any modern web browser (such as Chrome, Firefox, Safari, or Edge) to load the website.

2. **Using a Local Development Server (Recommended):**
   - If you have Python installed, you can launch a simple local HTTP server from the project's root:
     ```bash
     python3 -m http.server 8000
     ```
     Then, open your web browser and navigate to `http://localhost:8000/beauty-salon/`.

   - If you are using VS Code, you can install the **Live Server** extension and click **Go Live** to launch and automatically reload changes.
# Luna-Beauty-Salon
