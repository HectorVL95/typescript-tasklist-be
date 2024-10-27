import { Router } from "express";
import { create_user } from "./user-controllers.js";

const userRouter = Router();

userRouter
  .route('/create_user')
  .post(create_user)

export default userRouter