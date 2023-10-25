import dotenv from 'dotenv'
dotenv.config()
//TOKEN= "OOKJJHHJGHJGHJGHJGJ"

export const env = {

    port:process.env.PORT,
    mongoURL: process.env.MONGO_URI,
    token: process.env.TOKEN
}