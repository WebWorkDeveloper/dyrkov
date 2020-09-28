import HttpError from '../HttpError/index.js';

class InternalServerError extends HttpError {
    constructor(message = 'Server Error', code = 'ERR_SERVER') {
        super({
            message,
            code,
            status: 500 
        });

        Error.captureStackTrace(this, InternalServerError);
    }
}

export default InternalServerError;
