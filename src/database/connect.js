const mongoose = require('mongoose')

const connectToDataBase = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.7cy9dh1.mongodb.net/?retryWrites=true&w=majority`, 
  (error)=> {
    if(error) {
      return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error)
    }

    return console.log('Conexão ao banco de dados realizada com sucesso!')
  })
}

module.exports = connectToDataBase