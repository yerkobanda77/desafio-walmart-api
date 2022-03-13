const mocks = require("./mocks")

describe("get /productsFilters MODULO", () => {
    beforeEach(() => {
        jest.resetModules();
      });
    test('TEST001: cuando se envia un id existente ', async () => {
        jest.doMock(mocks.PATH_PRODUCTS_SERVICE, () => {
            return {
                getProductsById: jest.fn(() => mocks.RESPONSE_PRODUCTS_MONGO_TEST001)
            };
        });     
        const PARAMS = { search: "1"}
        const { productsFiltersModule } = require(mocks.PATH_PRODUCTS_FILTERS_MODULE);
        const result = await productsFiltersModule(PARAMS);
        expect(result).toEqual(mocks.RESPONSE_PRODUCTS_TEST001);
    });
    test('TEST002: cuando se envia un id inexistente y no se encuentra nada', async () => {
        jest.doMock(mocks.PATH_PRODUCTS_SERVICE, () => {
            return {
                getProductsById: jest.fn(() => null),
                getProductsFilters: jest.fn(() => [])
            };
        });   
        const PARAMS = { search: "13333"}
        const { productsFiltersModule } = require(mocks.PATH_PRODUCTS_FILTERS_MODULE);
        const result = await productsFiltersModule(PARAMS);
        expect(result).toEqual(mocks.RESPONSE_PRODUCTS_TEST002);
    });
    test('TEST003: cuando se envia busqueda sin palindromo', async () => {
        jest.doMock(mocks.PATH_PRODUCTS_SERVICE, () => {
            return {
                getProductsById: jest.fn(() => null),
                getProductsFilters: jest.fn(() => mocks.RESPONSE_PRODUCTS_MONGO_TEST003)
            };
        });   
        const PARAMS = { search: "hqhoy"}
        const { productsFiltersModule } = require(mocks.PATH_PRODUCTS_FILTERS_MODULE);
        const result = await productsFiltersModule(PARAMS);
        expect(result).toEqual(mocks.RESPONSE_PRODUCTS_TEST003);
    });
    test('TEST004: cuando se envia busqueda CON palindromo', async () => {
        jest.doMock(mocks.PATH_PRODUCTS_SERVICE, () => {
            return {
                getProductsById: jest.fn(() => null),
                getProductsFilters: jest.fn(() => mocks.RESPONSE_PRODUCTS_MONGO_TEST004)
            };
        });   
        const PARAMS = { search: "abba"}
        const { productsFiltersModule } = require(mocks.PATH_PRODUCTS_FILTERS_MODULE);
        const result = await productsFiltersModule(PARAMS);
        expect(result).toEqual(mocks.RESPONSE_PRODUCTS_TEST004);
    });
    test('TEST005: cuando se envia busqueda con un largo no valido', async () => {
        jest.doMock(mocks.PATH_PRODUCTS_SERVICE, () => {
            return {
                getProductsById: jest.fn(() => null)
            };
        });   
        const PARAMS = { search: "ab"}
        const { productsFiltersModule } = require(mocks.PATH_PRODUCTS_FILTERS_MODULE);
        try{ 
            await productsFiltersModule(PARAMS);
        }
        catch(error){
            expect(error).toEqual(mocks.RESPONSE_PRODUCTS_TEST005);
        }
    });
    test('TEST006: cuando existe un error interno del servidor', async () => {
        jest.doMock(mocks.PATH_PRODUCTS_SERVICE, () => {
            return {
                getProductsByIda: jest.fn(() => null)
            };
        });   
        const PARAMS = { search: "ab"}
        const { productsFiltersModule } = require(mocks.PATH_PRODUCTS_FILTERS_MODULE);
        try{ 
            await productsFiltersModule(PARAMS);
        }
        catch(error){
            expect(error).toEqual(mocks.RESPONSE_PRODUCTS_TEST006);
        }
    });
})