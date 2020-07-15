/**
 @module controllers/games
*/

const gamesService = require ('../services/games');

/**
 * Uses a service to look for a game and send the response
 * using Koa context
 * @param {Object} ctx - Koa context
 * @throws Will throw an error if the search query is null.
 */
const search = async (ctx) => {
    const { query } = ctx;
    if (!query.search) {
        ctx.throw(400,"Ups! Seems you forgot to send us 'search' query param");
    };
    if (query.search) {
        const response = await gamesService.search(query.search);
        ctx.body = response;
    }
}

module.exports = {
    search
};