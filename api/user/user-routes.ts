import { Router } from "express";
import { create_user, delete_user, modify_user, get_users } from "./user-controllers.js";

const userRouter = Router();

userRouter
  .route('/create_user')
  .post(create_user)

userRouter
  .route('/delete_user/:_id')
  .delete(delete_user)

userRouter
  .route('/modify_user/:_id')
  .put(modify_user)

userRouter
  .route('/get_users')
  .get(get_users)

export default userRouter