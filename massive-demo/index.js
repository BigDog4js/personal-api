const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);
const session = require(`express-session`);
const massive = require(`massive`);

const connectionString = 
      "postgres://BigDog4js@localhost/BigDog4js";

const massiveConnection = massive.connectSync({
    
    connectionString: connectionString
})



const app = express();

const port = 3000;

app.set(`db`, massiveConnection)

const db = app.get(`db`);

console.log(db);
app.use(bodyParser.json());

app.use(cors());

app.use(session({secret: `keyboard cat`}))

app.listen(port, () => {
    console.log(`Listening on port {port}`)
})

