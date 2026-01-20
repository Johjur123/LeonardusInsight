# Fractional BI - Technical Documentation

## Project Overzicht
Dit is een moderne, responsive website gebouwd voor een strategisch BI consultancy bureau. De site is ontworpen met een "Editorial Authority" design esthetiek, gericht op professionaliteit, leesbaarheid en conversie.

## Tech Stack
- **Framework**: React (v19) met TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (v4) met CSS variabelen voor theming
- **Routing**: Wouter (lichtgewicht routing)
- **Animaties**: Framer Motion
- **Icons**: Lucide React
- **Deploy**: Replit

## Bestandsstructuur

### `client/`
De frontend code bevindt zich in deze map.

*   **`index.html`**: Het entry point van de applicatie. Bevat meta tags voor SEO en laadt de fonts (Lora & Inter).
*   **`src/`**: Broncode.
    *   **`main.tsx`**: Mount de React applicatie in de DOM.
    *   **`App.tsx`**: Bevat de routing logica en de hoofdlayout wrappers (QueryClient, Toaster).
    *   **`index.css`**: De globale stylesheets. Hier zijn de Tailwind configuratie (`@theme`) en de CSS variabelen voor kleuren en fonts gedefinieerd.
    *   **`lib/`**: Hulpfuncties (utils, queryClient).
    *   **`components/`**: Herbruikbare UI componenten.
        *   **`ui/`**: Primitieve componenten zoals `Button`, `Sheet` (voor mobiel menu), `Card`.
        *   **`layout/`**: Grote structurele componenten zoals `Navbar.tsx` en `Footer.tsx`.
    *   **`pages/`**: De pagina's van de applicatie.
        *   **`home.tsx`**: De hoofdpagina. Bevat alle secties (Hero, Vision, Expertise, About, Contact).
        *   **`not-found.tsx`**: 404 pagina.

### `attached_assets/`
Bevat de gegenereerde afbeeldingen en statische assets.

## Design Systeem

Het design systeem is gedefinieerd in `client/src/index.css`.

*   **Kleuren**:
    *   Primary: Deep Editorial Green (`#26594C`)
    *   Background: Cream/Paper White (`#FDFCF8`)
    *   Foreground: Charcoal (`#212529`)
    *   Secondary: Muted Gold/Clay (`#C2B299`)
*   **Typografie**:
    *   Headings: `Lora` (Serif) - voor een redactionele, betrouwbare uitstraling.
    *   Body: `Inter` (Sans-serif) - voor optimale leesbaarheid.

## Aanpassingen maken

1.  **Tekst & Inhoud**: Pas de teksten aan in `client/src/pages/home.tsx`.
2.  **Menu items**: Pas de navigatie aan in `client/src/components/layout/navbar.tsx`.
3.  **Kleuren**: Wijzig de CSS variabelen in `client/src/index.css`.
4.  **Afbeeldingen**: Nieuwe afbeeldingen kunnen worden toegevoegd aan `attached_assets` of `client/public` en geïmporteerd in de componenten.
