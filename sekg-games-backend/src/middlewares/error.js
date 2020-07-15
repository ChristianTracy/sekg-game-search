/**
 @module middlewares/error
*/

const CUSTOM_ERRORS = {
  404: 'Nothing here... you could try another endpoint',
  500: 'KABOOM!'
}

/**
 * Error middleware to catch errores and emit them to the custom error handler
 * @param {Object} ctx - Koa context
 * @param {Function} next - Koa next
 */ 
module.exports = async (ctx, next) => {
    try {
      await next();
      if (ctx.status === 404) ctx.throw(404);
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = CUSTOM_ERRORS[err.status] || err.message;
      ctx.app.emit('error', err, ctx);
    }
  };
