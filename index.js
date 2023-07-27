const express = require('express');
const logger = require('./middleware/logger');
var cors = require('cors')
const mongoose = require('mongoose');

const app = express();

app.use(cors())
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const uri = "mongodb+srv://Raymond:RaymondZhou@cluster0.8vkuzg9.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connected successfully');
});

app.use('/api/courses', require('./routes/api/courses'));
app.use('/course', require('./routes/course'))

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
