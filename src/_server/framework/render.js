module.exports = ({req, res, view, layout = "default", data = {}}) => {
    res.render('pages/' + view, {
        layout: 'layouts/' + layout,
        data: data,
        authu: ((req.session && req.session.user) ? req.session.user : null)
    });
}