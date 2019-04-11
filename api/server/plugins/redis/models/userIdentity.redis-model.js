import { MODEL_USER_IDENTITY } from '../../../../util/constants';
import BaseModel from '../lib/base-model';

const schema = {
    provider: {
        type: 'string'
    },
    token: {
        type: 'string'
    },
    secret: {
        type: 'string'
    },
    profile: {
        type: 'json'
    }
};

class UserIdentityRedisModel extends BaseModel {

    constructor() {

        super({ schema });
    }

    static get modelName() {

        return MODEL_USER_IDENTITY;
    }

    static get idGenerator() {

        return 'increment';
    }

    static get definitions() {

        return schema;
    }

}

module.exports = UserIdentityRedisModel;
