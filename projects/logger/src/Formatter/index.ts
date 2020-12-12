import IFormatter from '../IFormatter';
import Log from '../Log';

class Formatter implements IFormatter {

    public format(log: Log) {
        return `${log.datetime} - [${log.level}] - ${log.message}`;
    }

}

export default Formatter;
