import mongoose from "mongoose";

const db:string = 'mongodb://localhost:27017'

export const connect_db = async () => {
  try {
   await mongoose.connect(db, {
    dbName: 'taskify'
   })
   console.log(`Connected to taskify DB`)
  } catch (error:any) {
    console.error('Error connecting to DB', error.message)
  }
}
