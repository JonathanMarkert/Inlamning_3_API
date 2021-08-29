# Inlamning_3_API Webutveckling

## Filer och mappar
Server.js
    serverfil, importerar routes from Fishes.js och kör på port 5000.
    Startar med npm start commandot

fishDB.json
    agerar databas och ersatte in-memory databasen

Routes/Fishes.js
    sköter routing och importerar funktioner från FishesController

Controllers/FishesController.js
    sköter logik för CRUD-funktioner. Skriver till och läser från fishDB.json

## GIthub
https://github.com/JonathanMarkert/Inlamning_3_API
## övrigt
Jag har gjort alla kontroller via Postman
Tiden räckte inte till för att göra ett enkelt klient-gränssnitt

### Krav för godkänt:
1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs) ***Done***
2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http) ***Done***
3. Datan som API:et hanterar sparas lokalt i serverfilen ***Done***
4. Git & GitHub har använts  ***Done***
5. Projektmappen innehåller en README.md fil - (läs ovan för mer info)  ***Done***
6. Uppgiften lämnas in i tid!  ***Done***

### Krav för väl godkänt:
1. Alla punkter för godkänt är uppfyllda  ***Done***
2. All data skall vara sparad i en JSON-fil istället för i serverfilen  ***Done***
3. Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort  ***Done***
4. Ett simpelt klient-gränssnitt skall finnas för att anropa API:ets olika endpoints, samt
visa upp resultatet vid GET anrop
5. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt  ***Done***