import { create_task, delete_task, modify_task, show_tasks, complete_task } from "./task-controllers.js";
import { Router } from "express";
import { extractToken } from "../../middlewares/extractToken.js";

const taskRouter = Router();

taskRouter
  .route('/create_task')
  .post(extractToken, create_task)

taskRouter
  .route('/delete_task/:id')
  .delete(delete_task)

taskRouter
  .route('/modify_task/:id')
  .put(modify_task)

taskRouter
  .route('/show_tasks')
  .get(extractToken, show_tasks)

taskRouter
  .route('/complete_task/:id')
  .put(complete_task)
  
export default taskRouter;