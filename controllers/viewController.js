const { estimatedDocumentCount } = require("../models/log")

const RESOURCE_PATH = '/logs'

const viewController = {
    index(req, res, next){
        res.render('logs/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('logs/New')
    },
    edit(req, res, next){
        res.render('logs/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('logs/Show', res.locals.data)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        const logId = req.params.id || res.locals.data.log._id
        res.redirect(`${RESOURCE_PATH}/${logId}`)
    }
}

module.exports = viewController