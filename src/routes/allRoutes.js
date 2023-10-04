import express from "express"
import eventRouter from "./eventRoute.js"
const router = express.Router()

// all routes
router.use("/event",eventRouter)

export default router