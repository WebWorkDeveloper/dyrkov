import ITransport from '../../ITransport';
import Log from '../../Log';

class ConsoleTransport implements ITransport {

    public send(log: Log) {
        console.log(log);
    }

};

export default ConsoleTransport;
