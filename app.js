import express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');

let arr = [
  
    "johndoe@gmail.com", "janedoe@gmail.com", "paul@gmail.com"
    
  ];

app.get('/', (req, res) => {
    res.render('index');
});


app.post('/', (req, res) => {

    res.send('frontend fetch(backend); backend... gets frontend, how?');
    // console.log(req)
});

app.listen(3000);