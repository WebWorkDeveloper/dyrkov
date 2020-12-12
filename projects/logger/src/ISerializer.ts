import Log from './Log';

interface ISerializer {
    serialize(log: Log): string
}

export default ISerializer;
