const fs = require("fs");
require("colors");

const crearArchivo = async (base = 10, isListed, upTo = 11) => {
  try {
    let salida = "";
    let consola = "";
    fs.writeFileSync(`tabla-${base}.txt`, salida);

    for (let i = 0; i < upTo; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x"} ${i} ${"=".green} ${base * i}\n`;
    }
    isListed && console.log(salida);
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    console.log(consola);
    return `tabla-${base}.txt`;
    //   new Promise((resolve, reject) => {
    //     for (let i = 0; i < 11; i++) {
    //       salida += `${base} x ${i} = ${base * i}\n`;
    //     }

    //     fs.writeFileSync(`tabla-${base}.txt`, salida);

    //     resolve(`tabla-${base}.txt`);
    //   });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearArchivo,
};
