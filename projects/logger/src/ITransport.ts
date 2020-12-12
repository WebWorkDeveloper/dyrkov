import Log from './Log';

interface ITransport {
    send(log: Log): void
}

export default ITransport;
