const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

require('dotenv').config();
require('./config/database');
const app =  express();

//* Middleware
app.use(express.json());
app.use(userRouter);
app.use(productRouter);

app.listen(process.env.PORT, () => console.log(`Servidor conectado en puerto: ${process.env.PORT}`)
)