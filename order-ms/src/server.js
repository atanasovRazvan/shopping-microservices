const express = require('express');
const { PORT } = require("./config");
const app = express();

app.use(express.json());

const routes = require('./routes/routes');
routes(app);

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
});
