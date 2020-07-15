const Koa = require('koa');
const cors = require('@koa/cors');
const routes = require('./routes');
const errorMiddleware = require('./src/middlewares/error');
const errorsHandler = require('./src/utils/errorsHandler');
const PORT = 8000;

const app = new Koa();

app.use(errorMiddleware);
app.use(cors());
app.use(routes);

app.on('error', errorsHandler);

app.listen(PORT);
console.log(`-> LISTENING ON PORT ${PORT}`);