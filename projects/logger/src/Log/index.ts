import Level from '../Level.enum';

class Log {

    public level: Level;

    public message: String;

    public datetime: Number;

    public constructor(level: Level, message: String) {
        this.level = level;
        this.message = message;
        this.datetime = Math.ceil(Date.now() / 1000);
    }
}

export default Log;
