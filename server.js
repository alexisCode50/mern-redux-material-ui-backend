const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// connection with mongodb
require('./config/database');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// endpoint api rest (prefix 'api')
app.use("/api", require('./routes/TaskRoutes'));

// server
app.set('port', 4000);
app.listen(app.get('port'), () => {
	console.log('Server ready at the port: 4000');
})

