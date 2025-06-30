# TypeScript-JavaScript-Utilities

## English Version

### Description
**TypeScript(JavaScript) Utilities** is a collection of TypeScript and JavaScript modules that provide functions to make using these languages easier. This library includes several helper functions:

- **Formatted console output**: The `consoleLogger` module allows for printing colored and formatted text to the console.

Each method is well-documented and explains what it does.

### Installation
1. Download the desired file and add it to your TypeScript(JavaScript) project.
2. Import the module like this: `import * as %NAME% from './%FILE%'`

```typeScript
// Example Import
import * as logger from './consoleLogger';

logger.consoleLog("BLUE", "REGULAR", "Hello World");

```

### Usage
#### Formatted console output
```typeScript
import * as logger from './consoleLogger';

// Bolded blue text gets logged
logger.consoleLog("BLUE", "REGULAR", "Hello World");

```

### Contributions
Contributions are welcome! Please send a pull request or open an issue if you have any suggestions.

### Author
Dennis Bauer (Sandwich898)

---

## Deutsche Version

### Beschreibung
**TypeScript(JavaScript) Utilities** ist eine Sammlung von TypeScript- und JavaScript-Modulen, die Funktionen bereitstellen, um die Nutzung der Programmiersprachen einfacher zu gestalten. Diese Bibliothek umfasst mehrere Hilfsfunktionen:

- **Schöne Konsolenausgabe**: Das `consoleLogger`-Modul ermöglicht das Ausgeben von farbigem und formatiertem Text in der Konsole.

Jede Funktion ist gut dokumentiert und erklärt, was sie macht.

### Installation
1. Lade die gewünschte Datei herunter und füge sie in dein TypeScript(JavaScript)-Projekt ein.
2. Importiere das Module so: `import * as %NAME% from './%FILE%'`

```typeScript
// Beispiel Import
import * as logger from './consoleLogger';

logger.consoleLog("BLUE", "REGULAR", "Hello World");

```

### Verwendung
#### Schöne Konsolenausgabe
```typeScript
// Beispiel Import
import * as logger from './consoleLogger';

// Blauer, dick geschriebener Text wird ausgeben
logger.consoleLog("BLUE", "BOLD", "Hello World");

```

### Beiträge
Beiträge sind herzlich willkommen! Bitte sende einen Pull-Request oder eröffne ein Issue, wenn du Verbesserungsvorschläge hast.

### Autor
Dennis Bauer (Sandwich898)