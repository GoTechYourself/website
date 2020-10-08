const { check } = require('express-validator')

module.exports = [
    check('username').isEmail(),
    // check('publicid').isString().isLength({ min :5 }),
    check('password').isLength({ min: 5 })
]