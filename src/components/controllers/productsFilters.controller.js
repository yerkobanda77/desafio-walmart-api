"use strict";
const { productsFiltersModule } = require("../modules/productsFilters.module");

async function productsFiltersController(ctx) {
    try {
        const { params } = ctx;
        const response = await productsFiltersModule(params);
        ctx.response.status = 200;
        ctx.response.body = response;
      } catch (error) {
        const response = {
          code: error.resultCode,
          message: error.message?.message || error.message,
          result: error.data || {},
        };
        ctx.response.status = error.code;
        ctx.response.body = response;
      }
      return ctx;
}
module.exports = {productsFiltersController};