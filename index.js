import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors  from 'cors';
import db_connection from './services/db';
import api_routes from  './routes/api.js';

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
//db connection
db_connection.connection_db()

//Routes imported here
app.use(api_routes);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({error: err});
});

//Now tisten to this port 
if (app.listen(process.env.PORT)) {
    console.log("Server is listening to Port " + process.env.PORT);
}
else{
    console.log("An error occured");
}

module.exports = app;