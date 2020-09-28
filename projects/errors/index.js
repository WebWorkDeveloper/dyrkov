import InternalServerError from './InternalServerError/index.js';
import BadRequestError from './BadRequestError/index.js';
import NotFoundError from './NotFoundError/index.js';

import DomainError from './BadRequestError/index.js';
import ValidationError from './ValidationError/index.js';

export default {
    InternalServerError,
    ValidationError,
    BadRequestError,
    DomainError,
    NotFoundError
};
