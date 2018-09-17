import express from 'express'
import removeOrganization from 'src/business/usecase/RemoveOrganization.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    removeOrganization.execute(req.params.id, responder)
}

const router = express.Router()
router.delete('/organizations/:id', handlerOrganization)
export default router
