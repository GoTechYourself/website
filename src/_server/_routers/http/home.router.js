var HomepageController = require('./../../_controllers/http/home.controller')

module.exports = (router) => {

    router
        .route('/')
        .get(HomepageController.Index);

}