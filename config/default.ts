const dbUser = process.env.DATABASE_USER
const dbPass = process.env.DATABASE_PASSWORD

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.qa4xova.mongodb.net/?retryWrites=true&w=majority`
}