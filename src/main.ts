import './style.css'

type Kategorie = 'technik' | 'inhalt' | 'marke'

interface Massnahme {
    id: number
    titel: string
    kategorie: Kategorie
    erledigt: boolean
}

const massnahmen: Massnahme[] = [
    { id: 1, titel: 'Strukturierte Daten (Schema.org) einbinden', kategorie: 'technik', erledigt: false },
    { id: 2, titel: 'KI-Crawler in robots.txt nicht blockieren', kategorie: 'technik', erledigt: false },
    { id: 3, titel: 'Ladezeit unter 3 Sekunden bringen', kategorie: 'technik', erledigt: false },
    { id: 4, titel: 'FAQ-Seite mit echten Kundenfragen erstellen', kategorie: 'inhalt', erledigt: false },
    { id: 5, titel: 'Leistungen klar und zitierfähig beschreiben', kategorie: 'inhalt', erledigt: false },
    { id: 6, titel: 'Fachartikel mit eigenen Zahlen veröffentlichen', kategorie: 'inhalt', erledigt: false },
    { id: 7, titel: 'Google-Unternehmensprofil vollständig pflegen', kategorie: 'marke', erledigt: false },
    { id: 8, titel: 'Erwähnungen in Branchenverzeichnissen sichern', kategorie: 'marke', erledigt: false },
]

const liste = document.querySelector<HTMLUListElement>('#liste')
const status = document.querySelector<HTMLParagraphElement>('#status')

function erstelleEintrag(m: Massnahme): string {
    return `<li class="${m.erledigt ? 'erledigt' : ''}">
    <input type="checkbox" id="m-${m.id}" data-id="${m.id}" ${m.erledigt ? 'checked' : ''}>
    <label for="m-${m.id}">${m.titel}</label>
  </li>`
}

function render(eintraege: Massnahme[]): void {
    if (!liste || !status) return
    liste.innerHTML = eintraege.map(erstelleEintrag).join('')
    status.textContent = `${eintraege.length} Maßnahmen angezeigt`
}

render(massnahmen)