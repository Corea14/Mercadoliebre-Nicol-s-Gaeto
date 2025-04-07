const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(publicPath));
app.get('/', (req, res) => res.render(path.resolve(__dirname, './views/home.ejs')));
app.post('/', (req, res) => res.render(path.resolve(__dirname, './views/home.ejs')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, './views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views/login.html')));


app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en Puerto: 3000"));


