const mongoose = require("mongoose");
const { schemaProducts } = require("./schema/products");
const ModuleError = require("../../../utils/model/Module.error");

const schema = new mongoose.Schema(schemaProducts);
const StaticModel = mongoose.model("products", schema);

async function getProducts(){    
    let responseBd;
    try {
        responseBd = await StaticModel.find()
        .limit(100);
    } catch (error) {
        const MONGO_SERVICE_ERROR = new ModuleError("ProductsMongoService");
        MONGO_SERVICE_ERROR.code = 500;
        throw MONGO_SERVICE_ERROR;
    }

    return responseBd;
}

async function getProductsById(id){    
    let responseBd;
    try {
        if(!isNaN(id)){
            responseBd = await StaticModel.findOne({id});
        }
    } catch (error) {
        const MONGO_SERVICE_ERROR = new ModuleError("ProductsMongoService");
        MONGO_SERVICE_ERROR.code = 500;
        throw MONGO_SERVICE_ERROR;
    }

    return responseBd;
}

async function getProductsFilters(filters){    
    let responseBd;
    try {
        responseBd = await StaticModel.find(filters);
    } catch (error) {
        const MONGO_SERVICE_ERROR = new ModuleError("ProductsMongoService");
        MONGO_SERVICE_ERROR.code = 500;
        throw MONGO_SERVICE_ERROR;
    }

    return responseBd;
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsFilters
}