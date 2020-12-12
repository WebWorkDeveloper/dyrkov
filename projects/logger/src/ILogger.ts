interface ILogger {
    info(message: String): void
    error(message: String): void
    debug(message: String): void
    warn(message: String): void
};

export default ILogger
