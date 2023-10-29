import mongoose from 'mongoose'
import config from 'config'

async function connectDb() {

  const dbUri = config.get<string>('dbUri')

  try {
    mongoose.connect(dbUri)
    console.log('Conectou ao banco de dados!')
  }
  catch (e:any) {
    console.log("Houve um problema ao conectar-se ao banco de dados!")
    console.error(e)
  }

}

export default connectDb