import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const port = process.env.PORT || 4000;

//api endpoints
app.get('/', (req, res, next) => {
    return res.send('Hello');
})

connectToDatabase()
    .then(() => {
        app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
    })
    .catch((err) => console.log(err));

