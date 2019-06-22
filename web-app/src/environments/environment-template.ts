var configJson = require('../../../configs/config-<COMPANY>.json');

export const environment = {
    production: false,
    restAPIport: configJson.rest_api.port,
    userName: configJson.name,
    role: configJson.role
 };
