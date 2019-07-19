import koaRouter from "koa-router";
import bodyParser from "koa-body";
import helmet from "koa-helmet";
import logger from "koa-logger";
import routeConfig from "../routes/index";
import staticConfig from "./static";

export default function(app) {
  app.use(helmet());
  app.use(
    bodyParser({
      multipart: true
    })
  );
  app.use(logger());
  const router = koaRouter();
  routeConfig(router);
  staticConfig(app, router);
  app.use(router.routes());
}
