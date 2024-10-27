var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
const db = 'mongodb://localhost:27017';
export const connect_db = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(db, {
            dbName: 'taskify'
        });
        console.log(`Connected to taskify DB`);
    }
    catch (error) {
        console.error('Error connecting to DB', error.message);
    }
});
