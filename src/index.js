import Koa from "koa";
import logger from "winston";
import config from "./config";
import koaConfig from "./config/koa";
import initLogger from "./initLogger";

initLogger();
const app = new Koa();
koaConfig(app);

const port = config.api.port;

app.listen(port, () => {
  logger.info(`Server is listening on port with number ${port}`);
});
