const ModuleError = require("../../src/utils/model/Module.error")

const PATH_PRODUCTS_FILTERS_MODULE = "../../src/components/modules/productsFilters.module.js";

const PATH_PRODUCTS_SERVICE = "../../src/components/services/mongoDb/products.js";

const RESPONSE_PRODUCTS_MONGO_TEST001 = {
    "id": 1,
    "brand": "ooy eqrceli",
    "description": "rlñlw brhrka",
    "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
    "price": 498724
}

const RESPONSE_PRODUCTS_TEST001 = {
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

const RESPONSE_PRODUCTS_TEST002 = {
    "code": "PFM.0000",
    "message": "Successful OK",
    "result": []
}

const RESPONSE_PRODUCTS_MONGO_TEST003 = [
    {
        "id": 3,
        "brand": "weñxoab",
        "description": "hqhoy qacirk abba",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 171740
    },
    {
        "id": 86,
        "brand": "tsf pzlflrg",
        "description": "hqhoy qacirk",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "price": 91993
    },
    {
        "id": 200,
        "brand": "gksxznn",
        "description": "hqhoy qacirk",
        "image": "www.lider.cl/catalogo/images/babyIcon.svg",
        "price": 325855
    },
    {
        "id": 250,
        "brand": "ola zñehhmt",
        "description": "hqhoy qacirk",
        "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
        "price": 906432
    },
    {
        "id": 670,
        "brand": "xhy dhzñffq",
        "description": "hqhoy qacirk",
        "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
        "price": 666998
    },
    {
        "id": 1052,
        "brand": "jhmccvu",
        "description": "hqhoy qacirk",
        "image": "www.lider.cl/catalogo/images/electronicsIcon.svg",
        "price": 341280
    },
    {
        "id": 1086,
        "brand": "lbumraa",
        "description": "hqhoy qacirk",
        "image": "www.lider.cl/catalogo/images/toysIcon.svg",
        "price": 723258
    }
];

const RESPONSE_PRODUCTS_TEST003 = {
    "code": "PFM.0000",
    "message": "Successful OK",
    "result": [
        {
            "id": 3,
            "brand": "weñxoab",
            "description": "hqhoy qacirk abba",
            "image": "www.lider.cl/catalogo/images/homeIcon.svg",
            "priceOld": 171740,
            "price": 171740,
            "discount": 0
        },
        {
            "id": 86,
            "brand": "tsf pzlflrg",
            "description": "hqhoy qacirk",
            "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
            "priceOld": 91993,
            "price": 91993,
            "discount": 0
        },
        {
            "id": 200,
            "brand": "gksxznn",
            "description": "hqhoy qacirk",
            "image": "www.lider.cl/catalogo/images/babyIcon.svg",
            "priceOld": 325855,
            "price": 325855,
            "discount": 0
        },
        {
            "id": 250,
            "brand": "ola zñehhmt",
            "description": "hqhoy qacirk",
            "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
            "priceOld": 906432,
            "price": 906432,
            "discount": 0
        },
        {
            "id": 670,
            "brand": "xhy dhzñffq",
            "description": "hqhoy qacirk",
            "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
            "priceOld": 666998,
            "price": 666998,
            "discount": 0
        },
        {
            "id": 1052,
            "brand": "jhmccvu",
            "description": "hqhoy qacirk",
            "image": "www.lider.cl/catalogo/images/electronicsIcon.svg",
            "priceOld": 341280,
            "price": 341280,
            "discount": 0
        },
        {
            "id": 1086,
            "brand": "lbumraa",
            "description": "hqhoy qacirk",
            "image": "www.lider.cl/catalogo/images/toysIcon.svg",
            "priceOld": 723258,
            "price": 723258,
            "discount": 0
        }
    ]
}

const RESPONSE_PRODUCTS_MONGO_TEST004 = [
    {
        "id": 3,
        "brand": "weñxoab",
        "description": "hqhoy qacirk abba",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 171740,
    },
    {
        "id": 5,
        "brand": "peuoooypt abba",
        "description": "trcwl iagxxh",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "price": 814893,
    }
]

const RESPONSE_PRODUCTS_TEST004 = {
    "code": "PFM.0000",
    "message": "Successful OK",
    "result": [
        {
            "id": 3,
            "brand": "weñxoab",
            "description": "hqhoy qacirk abba",
            "image": "www.lider.cl/catalogo/images/homeIcon.svg",
            "priceOld": 171740,
            "price": 85870,
            "discount": 50
        },
        {
            "id": 5,
            "brand": "peuoooypt abba",
            "description": "trcwl iagxxh",
            "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
            "priceOld": 814893,
            "price": 407446.5,
            "discount": 50
        }
    ]
}

const RESPONSE_PRODUCTS_TEST005 = new ModuleError("Invalid params");
const RESPONSE_PRODUCTS_TEST006 = new ModuleError("TypeError: getProductsById is not a function");

module.exports = {
    PATH_PRODUCTS_FILTERS_MODULE,
    PATH_PRODUCTS_SERVICE,
    RESPONSE_PRODUCTS_MONGO_TEST001,
    RESPONSE_PRODUCTS_TEST001,
    RESPONSE_PRODUCTS_TEST002,
    RESPONSE_PRODUCTS_MONGO_TEST003,
    RESPONSE_PRODUCTS_TEST003,
    RESPONSE_PRODUCTS_MONGO_TEST004,
    RESPONSE_PRODUCTS_TEST004,
    RESPONSE_PRODUCTS_TEST005,
    RESPONSE_PRODUCTS_TEST006
}

