import express from "express";
import { connect_db } from "./config/database.js";
import userRouter from "./api/user/user-routes.js";

const app = express();
const port:number = 5050;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connect_db();

app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})