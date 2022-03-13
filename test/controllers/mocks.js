const ModuleError = require("../../src/utils/model/Module.error")

const PATH_PRODUCTS_FILTERS_MODULE = "../../src/components/modules/productsFilters.module.js";

const PATH_PRODUCTS_CONTROLLER = "../../src/components/controllers/productsFilters.controller.js";

const RESPONSE_PRODUCTS_MODULE_TEST001 = {
    "code": "PFM.0000",
    "message": "Successful OK",
    "result": {
        "id": 1,
        "brand": "ooy eqrceli",
        "description": "rlñlw brhrka",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "priceOld": 498724,
        "price": 498724,
        "discount": 0
    }
}
const RESPONSE_PRODUCTS_MODULE_TEST002 = new ModuleError("Invalid params");
RESPONSE_PRODUCTS_MODULE_TEST002.code = 500;
RESPONSE_PRODUCTS_MODULE_TEST002.resultCode = "PFM.0002";
RESPONSE_PRODUCTS_MODULE_TEST002.message = "Invalid params";

const RESPONSE_PRODUCT_CONTROLLER_TEST002 = {
    "code": "PFM.0002",
    "message": "Invalid params",
    "result": {}
}

module.exports = {
    PATH_PRODUCTS_FILTERS_MODULE,
    PATH_PRODUCTS_CONTROLLER,
    RESPONSE_PRODUCTS_MODULE_TEST001,
    RESPONSE_PRODUCTS_MODULE_TEST002,
    RESPONSE_PRODUCT_CONTROLLER_TEST002
}

