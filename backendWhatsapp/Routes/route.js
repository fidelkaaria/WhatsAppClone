
import express from "express";

const router = express.Router()

import {postMessage,getMessage} from '../Controllers/messages.js'

router.post('/',postMessage)
router.get('/',getMessage)



export default router





