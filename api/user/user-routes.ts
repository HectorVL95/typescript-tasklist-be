import { Router } from "express";
import { create_user, delete_user } from "./user-controllers.js";

const userRouter = Router();

userRouter
  .route('/create_user')
  .post(create_user)

userRouter
  .route('/delete_user/:_id')
  .delete(delete_user)

export default userRouter