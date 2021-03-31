const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path')

const PORT = process.env.PORT || 3000;

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.listen(PORT, () => console.log('Server started on PORT', PORT))
