import HttpError from '../HttpError/index.js';

class BadRequestError extends HttpError {
    constructor(message = 'Bad Request', code = 'ERR_BAD_REQUEST') {
        super({
            message,
            code,
            status: 400 
        });

        Error.captureStackTrace(this, BadRequestError);
    }
}

export default BadRequestError;
