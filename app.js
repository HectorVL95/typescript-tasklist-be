import express from "express";
import { connect_db } from "./config/database.js";
import userRouter from "./api/user/user-routes.js";
import taskRouter from "./api/tasks/task-routes.js";
import cors from 'cors';
const app = express();
const port = 5050;
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connect_db();
app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
