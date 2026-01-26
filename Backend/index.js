//Tic tac toe backend server setup
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;




app.listen(PORT,()=>{
    console.log(`Server is running on port https/${PORT}`);
})

