import Log from './Log';

interface IFormatter {
    format(log: Log): string
}

export default IFormatter;
