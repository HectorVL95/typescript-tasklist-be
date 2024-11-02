import userModel from "./user-model.js"
import { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt";

export const create_user = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const { email, username, password } = req.body
      const hashed_password = await bcrypt.hash(password, 10)
      req.body.password = hashed_password
      const created = await userModel.create({email, username, password: hashed_password})
    res.status(200).json({
      sucess: true,
      message: 'created user successfully',
      data: created
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'error when trying to create user'
    })
    console.error('Could not create user', error.message)
  }
}

export const delete_user = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
      sucess: true,
      message: 'Deleted user successfull'
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error when trying to delete user'
    })
    console.error('Could not delete user', error.message)
  }
}

export const modify_user = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'modified user successfully'
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'error when trying to modify user'
    })
    console.error('Could not modify user', error.message)
  }
}

export const get_users = async (req: Request, res: Response, Next: NextFunction) => {
  try {
    const users = await userModel.find();
    console.log(users);
    res.status(200).json({
      success: true,
      message: 'Users acquired',
      data: users
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'error when trying to get users list'
    });
    console.error('Could not retrieved users list', error.message);
  }
}
