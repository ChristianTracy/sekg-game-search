/**
 @module controllers/unhealth
*/

/**
 * Fake an error
 * @param {Object} ctx - Koa context
 * @throws Will throw an error
 */
module.exports = (ctx) => {
    ctx.throw(500, 'AUTO GENERATED ERROR');
};