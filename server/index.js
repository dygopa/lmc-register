const express  = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config();

const db = mysql.createPool({
    host: 'p3plcpnl0546.prod.phx3.secureserver.net',
    user: 'lmc-userdb',
    password: '$D&k!^E[{DiK',
    database: 'lmcrdb'
});

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/register/participantes", async (req, res) => {
    const estu0 = req.body.estu0;
    const estu1 = req.body.estu1;
    const estu2 = req.body.estu2;
    const estu3 = req.body.estu3;
    const estu4 = req.body.estu4;

    const sqlInsert = "INSERT INTO equipos (nombre_apellidos, nombre_equipo, email, telefono, edad, genero, pais, universidad, carrera) VALUES (?),(?),(?),(?),(?) ";
    db.query(sqlInsert, [
        [estu0.nombre, estu0.equipo, estu0.email, estu0.telefono, estu0.edad, estu0.genero, estu0.pais, estu0.universidad, estu0.carrera],
        [estu1.nombre, estu1.equipo, estu1.email, estu1.telefono, estu1.edad, estu1.genero, estu1.pais, estu1.universidad, estu1.carrera],
        [estu2.nombre, estu2.equipo, estu2.email, estu2.telefono, estu2.edad, estu2.genero, estu2.pais, estu2.universidad, estu2.carrera],
        [estu3.nombre, estu3.equipo, estu3.email, estu3.telefono, estu3.edad, estu3.genero, estu3.pais, estu3.universidad, estu3.carrera],
        [estu4.nombre, estu4.equipo, estu4.email, estu4.telefono, estu4.edad, estu4.genero, estu4.pais, estu4.universidad, estu4.carrera]
    ], (err, result) =>{
        console.log(err);
    });

    const correosParticipantes = [estu0.email, estu1.email, estu2.email, estu3.email, estu4.email];

    contentHtml = `
        <p>Bienvenidos integrantes del Equipo <b>${estu0.equipo}</b></p>
        <br/>
        <p>Su registro se completó exitosamente. Para completar el proceso es necesario 
        que todos los integrantes del equipo sigan nuestras redes sociales para que 
        puedan estar informados de las próximas actividades y noticias que estaremos publicando.</p>
        <br/>
        <ul>
            <li>Instagram: <a href="https://www.instagram.com/gmcpanama.oficial/">@gmcpanama.oficial</a></li>
            <li>Facebook: <a> href="https://www.facebook.com/gmcpanama1"</a>GMC Panamá</li>
            <li>Linkedin: <a> href="http://linkedin.com/company/panamagmc"</a>GMC Panamá</li>
        </ul>
        <br/>
        <p>Por otra parte, a este mismo correo les enviaremos sus credenciales de acceso para 
        ingresar a la sección de la competencia. Esta información la recibirán una vez que se 
        cierren las inscripciones y las utilizarán tanto para la sesión de prueba 
        como para la competencia.</p>
        <br/>
        <p>Cualquier información adicional que requieran, pueden contactarnos por nuestras redes 
        o visitar nuestra página <a href="https://gmc-panama.com/">www.gmc-panama.com</a> y escribirnos por nuestro contacto.</p>
        <br/>
        <p>Desde ya les deseamos mucho éxito y gracias por aceptar el Reto.</p>
        <br/>
        <h2>Equipo Latam Management Challenge</h2>
        
    `;

    try {
        const transporter = nodemailer.createTransport({
            host: "p3plcpnl0546.prod.phx3.secureserver.net",
            port: "465",
            secure: true,
            auth: {
                user: "registro@lmc-inscripcion.novatec-corp.com",
                pass: "$D&k!^E[{DiK"
            },
            tls: {
                rejectUnauthoraized: false
            }
        });
    
        await transporter.sendMail({
            from: "'Latam Management Challenge' <registro@lmc-inscripcion.novatec-corp.com>",
            to: correosParticipantes,
            subject: 'Registro Exitoso - Latam Management Challenge 2020',
            html: contentHtml
    
        })
    } catch (e) {
        console.log(e);
    }

    console.log('Message sent');

});

app.delete("/api/register/delete", (req, res) => {
    const sqlInsert = "DELETE FROM equipos WHERE edad = (?) ";
    db.query(sqlInsert, 0, (err, result) => {
        console.log(result);
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server escuchando en puerto 3001");
});
