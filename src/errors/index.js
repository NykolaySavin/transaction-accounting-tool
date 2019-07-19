export class ForbiddenError extends Error {}

export class ValidationError extends Error {}

export class NotFoundError extends Error {}

export class CredentialsError extends Error {
  constructor() {
    const message = "Credentials are not valid";
    super(message);
  }
}

export class InternalError extends Error {
  constructor(originalError) {
    const message = "Internal error occurred. Please try again later.";
    super(message);
    this.originalError = originalError;
  }
}
