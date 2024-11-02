var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import userModel from "./user-model.js";
import bcrypt from "bcrypt";
export const create_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password } = req.body;
        const hashed_password = yield bcrypt.hash(password, 10);
        req.body.password = hashed_password;
        const created = yield userModel.create({ email, username, password: hashed_password });
        res.status(200).json({
            sucess: true,
            message: 'created user successfully',
            data: created
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'error when trying to create user'
        });
        console.error('Could not create user', error.message);
    }
});
export const delete_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            sucess: true,
            message: 'Deleted user successfull'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error when trying to delete user'
        });
        console.error('Could not delete user', error.message);
    }
});
export const modify_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: 'modified user successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'error when trying to modify user'
        });
        console.error('Could not modify user', error.message);
    }
});
export const get_users = (req, res, Next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel.find();
        console.log(users);
        res.status(200).json({
            success: true,
            message: 'Users acquired',
            data: users
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'error when trying to get users list'
        });
        console.error('Could not retrieved users list', error.message);
    }
});
