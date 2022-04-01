import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { auth } from './firebase/firebase.js'
import { intToRoman } from './integerToRoman.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/:num?', (req, res) => {
  const roman = intToRoman(req.params.num)
  res.send(roman)
})

app.post('/roman', (req, res) => {
  const roman = intToRoman(req.body.num)
  return res.json({ roman })
})

app.post('/romanFromInput', (req, res) => {
  // idToken comes from the client app
  const idToken = req.headers.authorization?.split(' ')[1]

  auth.verifyIdToken(idToken)
    .then(() => {
      const { num } = req.body.input
      const roman = intToRoman(num)
      return res.json({ roman })
    })
    .catch((error) => {
      console.log(`idToken: ${idToken}`)
      console.log(`Error Message: ${error}`)
      res.status(403).send('Invalid token provided')
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
