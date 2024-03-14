export type HttpCodes = 200 | 400 | 401 | 403 | 404 | 500;

export class HttpError {
  statusCode: HttpCodes;
  message: Uppercase<string>;

  constructor(statusCode: HttpCodes, message: Uppercase<string>) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
