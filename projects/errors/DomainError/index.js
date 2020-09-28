import ApplicationError from '../ApplicationError/index.js';

class DomainError extends ApplicationError {
    constructor(message = 'Domain error', code = 'ERR_DOMAIN') {
        super({
            message,
            code
        });

        Error.captureStackTrace(this, DomainError);
    }
}

export default DomainError;
