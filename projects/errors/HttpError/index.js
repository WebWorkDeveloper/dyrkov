import ApplicationError from '../ApplicationError/index.js';

class HttpError extends ApplicationError {
    constructor({ message = 'Http error', code = 'ERR_HTTP', status = 500 }) {
        super({
            message,
            code
        });

        Error.captureStackTrace(this, HttpError);

        this.status = status;
    }
}

export default HttpError;
