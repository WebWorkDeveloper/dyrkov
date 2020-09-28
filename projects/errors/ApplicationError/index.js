class ApplicationError extends Error {
    constructor({ message = 'Application error', code = 'ERR_APPLICATION' }) {
        super(message);

        this.name = this.constructor.name;
        this.code = code;

        Error.captureStackTrace(this, ApplicationError);
    }
}

export default ApplicationError;
