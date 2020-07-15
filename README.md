# SEKG GAME SEARCH

All you need to know about projects:
- [BACKEND](sekg-games-backend/README.md)
- [FRONTEND](sekg-games/README.md)


## WITH DOCKER COMPOSE 🤖

### ENV files

- api.env : port and connection to db
- db.env: database configuration


If you're using docker, you'll have everything running with:

```
docker-compose up
```

Backend running on: [http://localhost:8000](http://localhost:8000)

Web app running on: [http://localhost:4200](http://localhost:4200)

If you wanna change FRONTEND ports you have to update the `docker-compose.yml` and `Dockerfile` files.
Containers are using `node:12` image.

## WITHOUT DOCKER 🛠️

### You'll need a postgress DB running in your computer

You have to run backend and frontend services:
- API instructions [HERE](sekg-games-backend/README.md)
- WEB instructions [HERE](sekg-games/README.md)

