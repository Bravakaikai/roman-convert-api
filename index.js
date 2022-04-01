import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
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
  const { num } = req.body.input
  const roman = intToRoman(num)
  return res.json({ roman })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
