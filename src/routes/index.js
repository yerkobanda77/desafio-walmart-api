const { healthcheckController } = require('../components/controllers/healthcheck.controller');
const { productsFiltersController } = require('../components/controllers/productsFilters.controller');

function loadRoutes(router) {
  router.get('/', healthcheckController);
  router.get('/healthcheck', healthcheckController);
  router.get('/productsFilters/:search', productsFiltersController);

  return router
}

module.exports = {loadRoutes}
