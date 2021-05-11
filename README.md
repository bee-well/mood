# Mood Tjänsten
Mood-tjänsten ska användas för att rapportera en användares humör till systemet. Den kommer att använda en REST API för kommunikation mellan klient och server.
## REST API
Det finns egentligen en viktig endpoint, `POST /mood`. Den är beskriven nedan.
### POST /mood
#### Body data
```
{
  "mood": Integer,
  "tags": []string
}
```
#### Databas
Moongose databas sparar endast från Mood sidan. Innehåller följande data:
```
{
    user: Number,
    mood: Number,
    tags: [String]
}, { timestamps: true}
```
#### Validation
Se till att `mood` är mellan `1` och `5`.
#### MQ
Vid en lyckad rapportering ska ett event skickas till RabbitMQ. Eventet ska skickas till kön `moods` och bör innehålla följande data.
```
{
  "type": "created",
  "payload": {
    "user": Integer,
    "mood": Integer,
    "tags": []string,
    "reported": Date
  }
}
```
*För att göra ändringar i detta eller andra repositories för Bee Well, vänligen utveckla på en separat branch och skapa en PR till main branchen då CI/CD är aktiverat så fungerande kod måste alltid befinna sig på main*

#### Köra mot docker
docker-compose up --build

#### __TEST__
Automatiska tester mood, att det har skapats rätt och sparats rätt. Mockar data för att se att det stämmer överens med datan som sparas. 






