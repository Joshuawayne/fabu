

<div align="center">

# ✨ FABU ✨

**Timeless Elegance. Modern Expression.**

</div>

Welcome to the digital atelier of FABU, an immersive e-commerce experience meticulously crafted to embody the essence of refined style and conscious luxury. This application serves as the premier online destination for discovering our curated collections, where distinctive design meets mindful creation.

---

##  filosofía (Our Philosophy)

At FABU, we believe fashion is an intimate form of artistry. Our guiding principle is the harmonious fusion of captivating design with an unwavering commitment to quality and thoughtful craftsmanship. We strive to create pieces that are not only visually stunning but also a joy to wear and a treasure to cherish for years to come—transcending fleeting trends to cultivate enduring style and empower personal narrative.

---

## The Digital Boutique Experience

This web application is more than just an online store; it's a carefully orchestrated digital extension of the FABU world. Built with a keen eye for detail and a passion for seamless user experience, it invites you to explore our creations in an environment that mirrors the sophistication of our brand.

### Key Highlights:

*   **Luxurious User Interface:** A clean, elegant design language using a refined color palette (`#FDFCFB`, `#333333`, `#B08D57`) and sophisticated typography (Poppins) to create a serene and upscale browsing experience.
*   **Interactive Product Showcase:** Engage with our products through unique visual interactions, such as the captivating `PixelTransition` effect that reveals complementary items on hover or tap, adding a touch of discovery to your journey.
*   **Dedicated Shop Gallery:** Browse our complete collection with ease on a dedicated shop page, featuring high-quality imagery and detailed product information.
*   **The FABU Narrative:** Delve into "Our Story," a dedicated section that shares the inspiration, craftsmanship, and values woven into the fabric of our brand.
*   **Seamless Cart & Checkout Simulation:** Experience a smooth and intuitive journey from product selection to a simulated checkout, designed for effortless interaction.
*   **Responsive & Accessible Design:** Crafted to provide an optimal viewing experience across a wide range of devices, ensuring accessibility for all patrons.

---

## Technology Palette

FABU's digital presence is brought to life using a modern, robust technology stack, ensuring performance, scalability, and a delightful user experience:

*   **React:** A declarative, efficient, and flexible JavaScript library for building user interfaces.
*   **TypeScript:** Enhancing JavaScript with static typing for improved code quality and maintainability.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development, customized to achieve FABU's unique aesthetic.
*   **GSAP (GreenSock Animation Platform):** Powering smooth and sophisticated animations, including the signature `PixelTransition`, to elevate the visual narrative.
*   **Vite:** (Implicitly, via `esm.sh` and modern module setup) Facilitating a fast and lean development experience.

---

## Setting the Stage: Installation & Launch

To explore the FABU digital experience locally:

1.  **Prerequisites:**
    *   Node.js (v18 or later recommended)
    *   npm or yarn

2.  **Clone the Sanctuary:**
    ```bash
    git clone https://your-repository-url/fabu-ecommerce.git
    cd fabu-ecommerce
    ```

3.  **Install Dependencies:**
    Unveil the necessary components by running:
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Graceful Launch (Development Server):**
    To bring the FABU experience to life in your browser:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will typically start the application on `http://localhost:5173` (or another port if specified by your Vite configuration).

---

## Architectural Blueprint (Project Structure)

The codebase is organized with clarity and elegance in mind:

```
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (Header, ProductCard, Modals, etc.)
│   │   ├── icons/          # SVG icon components
│   │   └── ...
│   ├── constants.ts        # Application-wide constants (products, nav links)
│   ├── types.ts            # TypeScript type definitions
│   ├── App.tsx             # Main application component, routing logic
│   └── index.tsx           # Entry point of the application
├── index.html              # Main HTML file
├── tailwind.config.js      # Tailwind CSS configuration (via inline script in index.html)
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration (if explicitly used, otherwise defaults)
└── README.md               # This testament to elegance
```

---

## An Invitation

We invite you to immerse yourself in the world of FABU. Explore our collections, discover our story, and experience the confluence of art and apparel.

Should you wish to contribute to this vision or have inquiries, please refer to our contribution guidelines (to be added) or contact us through the application's contact form.

**FABU - Dress with Intention.**

---

<div align="center">
  <small>&copy; {new Date().getFullYear()} FABU. All Rights Reserved.</small>
</div>


This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
