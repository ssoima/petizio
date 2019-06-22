var configJson = require('../../../configs/config-s1.json');

export const environment = {
    production: false,
    restAPIport: configJson.rest_api.port,
    userName: configJson.name,
    role: configJson.role
 };
