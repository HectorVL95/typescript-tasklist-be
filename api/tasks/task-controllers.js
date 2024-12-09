var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import taskModel from "./task-model.js";
const JWT_SECRET = process.env.JWT_SECRET || 'This is secret';
export const create_task = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, completed } = req.body;
        const owner = req.headers.authorization;
        const task = yield taskModel.create({ name, completed, owner });
        res.status(200).json({
            success: true,
            message: 'Task successfully created',
            data: task,
        });
    }
    catch (error) {
        console.error('could not createtask', error.message);
        res.status(500).json({
            sucess: false,
            message: 'Error at creating task',
        });
    }
});
export const delete_task = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield taskModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            sucess: true,
            message: 'Deleted task successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error at deleting task',
        });
        console.error('Could not delete task', error.message);
    }
});
export const modify_task = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: 'Updated task successfully',
            data: task
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error at updating task'
        });
        console.error('Could not delete task', error.message);
    }
});
export const show_tasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskModel.find();
        res.status(200).json({
            success: true,
            message: 'Tasks shown successfully',
            data: tasks
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error at showing tasks'
        });
        console.error('Could not show tasks', error.message);
    }
});
export const complete_task = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: 'Successful change of completion',
            data: task
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error when completing a task'
        });
        console.error('Error completing the task', error.message);
    }
});
