"use strict";
const ModuleError = require("../../utils/model/Module.error");
const { getProductsById, getProductsFilters } = require("../services/mongoDb/products")

async function productsFiltersModule(params) {
    try {
        let result;
        //validate find id
        const product = await getProductsById(params.search);
        
        if(product){
            result = setProduct(product);
        }
        else{
            //validate params
            await validateParams(params);

            //build filter
            const filters = await buildFilters(params);

            //Search dataMongo
            const productsMongo = await getProductsFilters(filters);
            
            //Search Palindrome
            const isPalindrome = searchPalindrome(params);

            //Work Responde
            result = await workProducts(productsMongo, isPalindrome);
        }

        //Config response
        return {
            code: "PFM.0000",
            message: "Successful OK",
            result
        };
    } catch (error) {
        if (error instanceof ModuleError) {
            throw error;
        }
        const ERROR = new ModuleError("productsFiltersModule");
        ERROR.code = 500;
        ERROR.resultCode = "PFM.0001";
        ERROR.message = error;
        throw ERROR;
    }
}

async function validateParams(params){
    if(params?.search.length > 3){
        return true;
    }
    const ERROR = new ModuleError("productsFiltersModule");
    ERROR.code = 500;
    ERROR.resultCode = "PFM.0002";
    ERROR.message = "Invalid params";
    throw ERROR;
}

async function buildFilters(params){
    const { search } = params;
    return {
        $or: [
          { brand: { $regex: '.*' + search + '.*' } },
          { description: { $regex: '.*' + search + '.*' } },
        ],
      }
}

async function workProducts(elements, isPalindrome){
    return elements.map(element => {
        return setProduct(element, isPalindrome);
    });
}

function setProduct(element, isPalindrome){
    let price = element.price;
    let discount = 0;
    if(isPalindrome){
        price = element.price*0.5;
        discount = 50;
    }
    return {
        id: element.id,
        brand: element.brand,
        description: element.description,
        image: element.image,
        priceOld: element.price,
        price,
        discount
    };
}

function searchPalindrome(params){
    const { search } = params;
    const searchReversed = search.split("").reverse().join("");
    if(search === searchReversed){
        return true;
    } 
    else {
        return false;
    }
}

module.exports = {productsFiltersModule};