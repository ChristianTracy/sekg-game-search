/**
 @module controllers/health
*/

/**
 * Simple function that returns current date as request response
 * @param {Object} ctx - Koa context
 */
module.exports = (ctx) => {
    ctx.body = `Everything great here! - At: ${Date()}`;
};