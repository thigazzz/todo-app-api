import express from 'express'
import { router } from './routes/routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(4444, () => console.log('server is on 4444 port!'))