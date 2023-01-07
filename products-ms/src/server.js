const express = require('express');
const app = express();
const storage = require('node-persist');
const products = require("./utils");
const cors = require('cors');

app.use(cors({origin: "*"}));
app.use(express.json());

storage.init().then(() => {
        storage.updateItem('products', JSON.stringify(products));
        console.log('Storage connected.');
    }
);

const routes = require('./routes/routes');
routes(app);
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
