/* PUERTO */
process.env.PORT = process.env.PORT || 3000;

/* ENTORNO - Variable de Heroku */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/* BD */
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://pepe:wC2P9VXcaDzsshuw@cluster0.mjsvv.mongodb.net/cafe'
}

process.env.URLDB = urlDB;