const fs = require('fs')
const path = require('path')

// Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), error => {
//   if (error) {
//     return console.log('Error: ', error)
//   }

//   console.log('Pasta criada com sucesso')
// })

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, '/test', 'teste.txt'),
  'Hello Node!',
  error => {
    if (error) {
      return console.log('ERRO: ', error)
    }

    console.log('Aquivo criado com sucesso')
  }
)

// Adicionar à um arquivo
fs.appendFile(
  path.join(__dirname, '/test', 'teste.txt'),
  'Hello World!',
  error => {
    if (error) {
      return console.log('ERRO: ', error)
    }

    console.log('Arquivo modificado com sucesso')
  }
)

// Ler Arquivo
fs.readFile(
  path.join(__dirname, '/test', 'teste.txt'),
  'utf-8',
  (error, data) => {
    if (error) {
      return console.log('ERROR: ', error)
    }

    console.log(data)
  }
)
