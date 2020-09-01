// const express = require('express')

// const app = express()
// const path = require('path')
// app.use(express.static(path.join(__dirname, 'dist')))

// const port = 3000
// app.listen(port, function(){
//     console.log(`Running server on port ${port}`)
// })

// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }

// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send("Ending the cycle, thanks for visiting")
// })

// app.get('/maps', function (request, response) {
//     response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//     response.send("This here is the shoobi *route*")
// })

// app.get('/life', function (request, response) {
//     response.send("42")
// })

// app.get('/landing/:username', function (request, response) {
//     response.send(`Hi there, ${request.params.username}`)
// })

// app.get('/users/:userID', function (request, response) {
//     response.send(users[request.params.userID])
// })

// app.get('/routeWithOptionalParameters', (request, response) => {
//     let params = request.query
//     response.send(params)
// })

// app.get('/details', (request, response) => {
//     const details = {
//         zipcode: "6863155",
//         city: "Ankh Morpork",
//         middleName: "Wilfred"
//       }  
//       console.log(details.city)
//       response.send(details)
//     })
// //http://localhost:3000/details/?city=details    ||
// //http://localhost:3000/details/?zipcode=6863155&city=AnkhMorpork&middleName=Wilfred

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_moduls')))
//console.log(__dirname)

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

const data = {
    8113: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9125: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.get('/books/:bookID', function(request, response){
    let bookID = request.params.bookID
    response.send(data[bookID])
})
