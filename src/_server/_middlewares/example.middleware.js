module.exports = (req,res,next) => {
    console.log(`I'm a example Middleware :) `)
    next();
}