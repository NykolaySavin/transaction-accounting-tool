import serve from "koa-static";
import send from "koa-send";
import config from "../config";
import path from 'path';

export default function(app, router) {
  if (config.mode == "production") {
    app.use(serve(path.join(__dirname, "/../../client/build")));
    router.get("*", async ctx => {
      await send(ctx, path.join(__dirname + "/../../client/build/index.html"));
    });
  }
}
