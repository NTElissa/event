import express from "express"
import eventRouter from "./event/eventRoute.js"
const router = express.Router()

// all routes
router.use("/event",eventRouter)

export default router