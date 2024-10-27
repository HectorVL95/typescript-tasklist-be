import { NextFunction, Request, Response } from "express"
import userModel from "./user-model.js"

export const create_user = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userModel.create(req.body)
    res.status(200).json({
      sucess: true,
      message: 'created user successfully'
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'error when trying to create user'
    })
    console.error('Could not create user', error.message)
  }
}