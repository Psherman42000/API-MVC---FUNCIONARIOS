const express = require('express');
const routes = require('./Routes/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/funcionarios', routes);

app.listen(3000);
console.log('API Is Working...');