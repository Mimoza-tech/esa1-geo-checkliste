# GEO-Checkliste für KMU

Statische Webseite für ESA 1 (Front-End Development, WS 2026/27).

## Was die Seite zeigt
Eine interaktive Checkliste mit Maßnahmen, mit denen kleine und mittlere Unternehmen in KI-Suchsystemen wie ChatGPT, Perplexity und Google AI Overviews sichtbar werden. Die Maßnahmen lassen sich nach Kategorie (Technik, Inhalt, Marke) filtern und abhaken.

## Technische Entscheidungen
- **Vite 5 mit TypeScript-Template (vanilla-ts):** schneller Dev-Server, `npm run build` prüft die Typen. Vite 5 statt der aktuellen Version, weil Node 18 installiert ist.
- **Semantisches HTML:** header, nav, main, section, aside, figure/figcaption, footer
- **Accessibility:** aria-label an Navigation und Filtergruppe, aria-pressed für den aktiven Filter, aria-live für die Statusmeldung. Lighthouse Accessibility: 100 (siehe lighthouse.png)
- **TypeScript:** Interface `Massnahme`, Union Type `Kategorie`, typisierte Funktionen, Array-Methoden filter, map und find
- **Event Delegation:** ein Listener auf der Liste statt auf jeder Checkbox, weil die Einträge bei jedem Render neu erzeugt werden

## Starten
npm install
npm run dev
