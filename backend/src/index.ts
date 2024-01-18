import app from './app'
import 'dotenv/config'
import { connectToDatabase } from './database';


const {PORT} = process.env
connectToDatabase()
app.listen(PORT)
console.log(`Server listening on port ${PORT}`);
