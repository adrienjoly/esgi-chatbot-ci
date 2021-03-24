Ce projet est un serveur HTTP implémenté avec Express.

## Comment installer

```
$ npm install
```

## Comment exécuter

```
$ npm start
```

## Comment tester

```
$ curl "http://localhost:3000/" # doit répondre “Bonjour !”
$ curl "http://localhost:3000/hello?nom=Sasha" # doit répondre “Bonjour, Sasha !””
$ curl "http://localhost:3000/hello?nom=Michel" # doit répondre “Bonjour, Michel !””
$ curl "http://localhost:3000/hello" # doit répondre “Quel est votre nom ?”
$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" "http://localhost:3000/chat" # doit répondre “Nous sommes à Paris”
$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" "http://localhost:3000/chat" # doit répondre “Il fait beau”
```

## Deploiement en production

```
heroku login
heroku git:clone -a chatbot-3moc
git add .
git commit -am "deploiement"
git push heroku master
```
