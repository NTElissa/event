import express from "express";
import  { createEventController, getEventController, 
    updateEventController, deleteEventController,getAllEventsController } from "../controllers/CreateEventController.js";



const eventRouter= express.Router();

eventRouter.post("/",createEventController );
eventRouter.delete("/delete/:id",deleteEventController);
eventRouter.get("/get/:id",getEventController);
eventRouter.put("/update/:id",updateEventController  );
eventRouter.get("/getAll",getAllEventsController);

export default eventRouter