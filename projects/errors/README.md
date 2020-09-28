# Errors

Project store  structure of errors for any project on js

## Codes

Every error have unique code

Code naming conversation
1. Uppercase
2. Dashed
3. Start from prefix `ERR`

Error codes examples: `ERR_SERVER`, `ERR_USER_NAME_IS_REQUIRED`

## Usage
```
import { ValidationError, InternalServerError, DomainError } from  '@dyrkov/errors';

const username = 'Some name';

try {
    if (username.length >  5) {
        throw ValidationError('User name so long', 'ERR_USER_NAME_LIMIT_EXCEEDING')
    }
} catch (err) {
    logger.error(err)

    if (err instanceof ValidationError) {
        return res.send(new BadRequestError(err.message, err.code))
    }

    return res.send(new InternalServerError(err.message))
}

import DomainError  from '@dyrkov/errors/DomainError';

try {
    if (dishe.isCooking()) {
        throw DomainError('You can\'t cooking dishes')
    } else {
        dishe.cooking()
    }
} catch (err) {
    logger.error(err)

    if (err instanceof DomainError) {
        return alert(err.message)
    }

    return toast('Attention!', err.message, err.code)
}

```
