const router = require('@koa/router')();
const heatlhController = require('./src/controllers/health');
const unheatlhController = require('./src/controllers/unhealth');
const gamesController = require('./src/controllers/games');

router
    .get('/health', heatlhController)
    .get('/unhealth', unheatlhController) // just for testing
    .get('/games', gamesController.search);

module.exports = router.routes();