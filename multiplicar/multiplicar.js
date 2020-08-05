const fs = require('fs');
const colors = require('colors/safe');



let listarTabla = (base, limite = 10) => {

    console.log('=================='.green)
    console.log(`Tabla del ${ base }`.red)
    console.log('=================='.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}\n`);

    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es un número`);
            return;
        }

        let file = "";


        for (let i = 1; i <= limite; i++) {
            file += `${ base } * ${ i } = ${ base * i}\n`

            //console.log(file);
        }


        fs.writeFile(`tablas/tabla-${ base }.txt`, file, (err) => {
            if (err) reject(err);
            else
                resolve(`tablas/tabla-${ base }.txt`)
            console.log('The file has been saved!');
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}