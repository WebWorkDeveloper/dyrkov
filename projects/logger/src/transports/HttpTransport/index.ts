import ITransport from '../../ITransport';
import Log from '../../Log';

class HttpTransport implements ITransport {

    private host: string;

    public send(log: Log) {
        // TODO: отпарвить на хост все это дело, 
        // провести все через сериалайзер
    }

    constructor(host: string) {
        this.host = host;
    }

};

export default HttpTransport;
