/**
 @module utils/errorsHandler
*/

/**
 * Error handler, the error could be log, save into another platform
 * or wherever we needs to logs this information
 * @param {Object} errr - Javascript error
 * @param {Object} ctx - Koa context
 */ 
module.exports = (err, ctx) => {
    if (ctx.status === 404) return;
    console.error(err);
}