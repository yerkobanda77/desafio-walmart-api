const mocks = require("./mocks")

describe("get /productsFilters CONTROLLER", () => {
    beforeEach(() => {
        jest.resetModules();
      });
    test('TEST001: cuando se envia un parametro correcto ', async () => {
        const ctx = {
            response: { set: jest.fn() },
            params: { search: "1"}
        }
        jest.doMock(mocks.PATH_PRODUCTS_FILTERS_MODULE, () => {
            return {
                productsFiltersModule: jest.fn(() => mocks.RESPONSE_PRODUCTS_MODULE_TEST001)
            };
        });     
        const { productsFiltersController } = require(mocks.PATH_PRODUCTS_CONTROLLER);
        const result = await productsFiltersController(ctx);
        expect(result.response.body).toEqual(mocks.RESPONSE_PRODUCTS_MODULE_TEST001);
    });
    test('TEST00: cuando se envia un parametro incorrecto ', async () => {
        const ctx = {
            response: { set: jest.fn() },
            params: { search: "ab"}
        }
        jest.doMock(mocks.PATH_PRODUCTS_FILTERS_MODULE, () => {
            return {
                productsFiltersModule: jest.fn(() => {throw mocks.RESPONSE_PRODUCTS_MODULE_TEST002})
            };
        });     
        const { productsFiltersController } = require(mocks.PATH_PRODUCTS_CONTROLLER);
        const result = await productsFiltersController(ctx);
        expect(result.response.body).toEqual(mocks.RESPONSE_PRODUCT_CONTROLLER_TEST002);
    });
})