/* PUERTO */
process.env.PORT = process.env.PORT || 3000;

/* ENTORNO - Variable de Heroku */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/* VENCIMIENTO - Expiración del Token */
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

/* SEED - O semilla de autenticación */
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

/* DATA BASE */
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/* Google - CLIENT ID */
process.env.CLIENT_ID = process.env.CLIENT_ID || '139879126525-55si4qmja2fk4mprofr75314mqrdfl2v.apps.googleusercontent.com';