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
export const create_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel.create(req.body);
        res.status(200).json({
            sucess: true,
            message: 'created user successfully'
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
