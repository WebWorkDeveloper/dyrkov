import Level from '../Level.enum';

class Log {

    public level: Level;

    public message: String;

    public timestamp: Number;

    public constructor(level: Level, message: String) {
        this.level = level;
        this.message = message;
        this.timestamp = Math.ceil(Date.now() / 1000);
    }
}

export default Log;
