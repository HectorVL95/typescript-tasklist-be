import { create_task, delete_task, modify_task, show_tasks } from "./task-controllers.js";
import { Router } from "express";

const taskRouter = Router();

taskRouter
  .route('/create_task')
  .post(create_task)

taskRouter
  .route('/delete_task/:id')
  .delete(delete_task)

taskRouter
  .route('/modify_task/:id')
  .put(modify_task)

taskRouter
  .route('/show_tasks')
  .get(show_tasks)
  
export default taskRouter;