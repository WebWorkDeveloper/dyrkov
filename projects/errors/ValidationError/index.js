import ApplicationError from '../ApplicationError/index.js';

class ValidationError extends ApplicationError {
    constructor(message = 'Validation error', code = 'ERR_VALIDATION', details = []) {
        super({
            message,
            code
        });

        Error.captureStackTrace(this, ValidationError);

        this.details = details;
    }
}


export default ValidationError;
