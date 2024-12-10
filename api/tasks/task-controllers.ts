import { Request, Response, NextFunction } from "express";
import taskModel from "./task-model.js";
import userModel from "../user/user-model.js";

const JWT_SECRET:string = process.env.JWT_SECRET || 'This is secret';

export const create_task = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, completed } = req.body
      const owner = req.user.userId
      const task = await taskModel.create({ name, completed, owner})
      res.status(200).json({
        success: true,
        message: 'Task successfully created',
        data: task,
      })
    } catch (error: any) {
      console.error('could not createtask', error.message)
      res.status(500).json({
        sucess: false,
        message: 'Error at creating task',
      })
    }
}

export const delete_task = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await taskModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
      sucess: true,
      message: 'Deleted task successfully',
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error at deleting task',
    })
    console.error('Could not delete task', error.message)
  }
}

export const modify_task = async (req: Request, res: Response, next: NextFunction) =>  {
  try {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Updated task successfully',
      data: task
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error at updating task'
    })
    console.error('Could not delete task', error.message)
  }
}

export const show_tasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await taskModel.find({owner: req.user?.userId})
    res.status(200).json({
      success: true,
      message: 'Tasks shown successfully',
      data: tasks
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error at showing tasks'
    })
    console.error('Could not show tasks', error.message)
  }
}

export const complete_task = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Successful change of completion',
      data: task
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Error when completing a task'
    })
    console.error('Error completing the task', error.message)
  }
}