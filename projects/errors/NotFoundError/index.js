import HttpError from './index';

class NotFoundError extends HttpError {
    constructor(message = 'Not Found', code = 'ERR_NOT_FOUND') {
        super({
            message,
            code,
            status: 404 
        });

        Error.captureStackTrace(this, NotFoundError);
    }
}

export default NotFoundError;
