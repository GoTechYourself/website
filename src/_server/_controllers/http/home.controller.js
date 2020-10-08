
const render = require("./../../framework/render")
module.exports = {

    Index: (req, res, next) => {
        render({
            req: req,
            res : res,
            view : "home.ejs",
        })
    }

}