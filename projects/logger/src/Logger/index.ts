import ITransport from '../ITransport';
import Level from '../Level.enum';
import ILogger from '../ILogger';

import Log from '../Log';

class Logger implements ILogger {

    private transport: ITransport;

    private log(level: Level, message: string) {
        this.transport.send(new Log(level, message));
    }

    public info(message: string) {
        this.log(Level.Info, message);
    }

    public debug(message: string) {
        this.log(Level.Debug, message);
    }

    public warn(message: string) {
        this.log(Level.Warn, message);
    }

    public error(message: string) {
        this.log(Level.Error, message);
    }

    public constructor(transport: ITransport) {
        this.transport = transport;
    }
}

export default Logger;
