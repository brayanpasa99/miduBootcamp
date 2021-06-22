const http = require('http');

let notes = [
    {
        "id": 1,
        "content": "Me tengo que suscribir a @midudev en Youtube y Twitch",
        "date": "2019-05-30T17:30:31.098z",
        "important": true,
    },
    {
        "id": 2,
        "content": "Tengo que estudiar las clases del FullStack Bootcamp",
        "date": "2019-05-30T18:39:34.091z",
        "important": false,
    },
    {
        "id": 3,
        "content": "Repasar los retos de JS de midudev",
        "date": "2019-05-30T19:20:14.298z",
        "important": true,
    }
];

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(notes));
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
