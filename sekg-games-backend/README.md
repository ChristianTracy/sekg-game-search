[BACK](../README.md)
# SEKG GAMES BACKEND 🤖

This api uses [KOA](https://koajs.com) as server framework.


## Get your backend running 🏃

If you are using docker, remember.. less steps! [follow this instructions](../README.md)

But if you don't have docker prepared, no problem!

You can use this:
```
npm install
npm run start
```
**Note**: this api was made using NodeJS version 12.


That's it! you have your own backend running on [http://localhost:8000](http://localhost:8000)

**HINT**
This project is using [nodemon](https://nodemon.io). What does it mean? **free livereload! 🔄**


## API Docs 🗒️

In this you'll find two documentation versions.

- [MD version](APIDOCS.md)
- HTML version: `/docs` folder

### How could i generate those files?

First of all, the way uses to document the code is with [JSdoc](https://jsdoc.app)
Then you could use one of the following scripts to generate or update your API docs 😉

To update/gerate markdown api docs file
```
npm run generate:docs:md
```

To update/gerate html api docs file
```
npm run generate:docs:html
```

## Games source 🎮

The API internally uses [RAWG](https://rawg.io/apidocs)


## Endpoints 🔍


### `/health`
Check you API health , you should this first.

returns: 
```
STATUS: 200
BODY: Everything great here! - At: [CURRENT DATE]
```

### `/unhealth`
Fake unhealth status. Simulates an unexpected error with a 500 status.

returns
``` 
STATUS: 500
BODY: KABOOM!
```


### `/games?search=`
The important one. You must use this endpoint using **query params** to make a search


example: 
`/games?search=league%20of%20legends`

returns JSON
``` 
STATUS: 500
BODY: 
[
    {
        "name": "League of Legends",
        "imgSrc": "https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg",
        "releaseDate": "2009-10-27"
    },
    {
        "name": "League of Legends: Wild Rift",
        "imgSrc": "https://media.rawg.io/media/games/3c7/3c773379b9a4161528bf12a2c9346e93.jpg",
        "releaseDate": null
    },
]
```
