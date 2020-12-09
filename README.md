# Supportformular

### Aufgabenstellung:
* Sprachen: Deutsch, Englisch
  * Sprachauswahl oben platziert
* Formular:
  * nur Pflichtfelder
  * Name/Name (Textfeld, initial leer)
  * Emailadresse/Email address (Textfeld, initial leer, Validierung ob es sich bei der Eingabe um eine gültige Mailadresse handelt)
  * Themenbereich/Topic (Selectfeld mit den Optionen „Allgemeine Anfrage“, „Softwarefehler“ und „Rückruf“)
    * Softwarefehler: zusätzliches Feld für Versionsnummer (Bsp: "1.0.0" oder "1.11.12"), keine Buchstaben, Schema <zahl>.<zahl>.<zahl>
    * Rückruf: zusätzliches Feld für Telefonnummer mit Validierung
  * Beschreibung/Description (Textarea)
  * Absenden-Button
* Ergebnisseite
* Ergebnisse werden nicht gespeichert

### Verwendete Libraries / Packages
* i18next (für Übersetzungen)
* libphonenumber-js (für die Formatierung von internationalen Telefonnummern)
* React-Hook-Form (für Formular und Eingabeprüfung)
* styled-components
* Yup (für Schema der Fomulardaten)

### Assets
* Icons von [Feather](https://feathericons.com/)
* Font von [Google Fonts](https://fonts.google.com/)

### Wireframes
* https://www.figma.com/file/0xyNJ0JRKd2ra0HjoN4fEF/F11-Supportform-Wireframe?node-id=0%3A1

### Überlegungen
* Package sanitize-html: hier nicht nötig, da Daten nur als Strings gesammelt und angezeigt werden
* Package react-select: macht das Stylen von Selectfeldern und deren Optionen einfacher
* CSS Module und Variablen statt styled-components: kann organisierter wirken, macht bei einem kleinen Projekt aber kaum Unterschied
