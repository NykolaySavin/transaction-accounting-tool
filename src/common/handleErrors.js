import logger from "winston";
import * as errors from "../errors";

export default function handleError(err) {
  if (err instanceof errors.ForbiddenError) {
    logger.error(err);
    this.throw(403);
    return;
  }

  if (err instanceof errors.NotFoundError) {
    logger.error(err);
    this.throw(404);
    return;
  }

  if (err instanceof errors.ValidationError) {
    logger.error(err);
    this.throw(400, err.message);
    return;
  }

  if (err instanceof errors.InternalError) {
    logger.error(err);
    this.throw(500, err.message);
  }

  logger.error(err);
  this.throw(500);
}
