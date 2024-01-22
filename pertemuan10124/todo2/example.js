const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface( {
    input : process.stdin,
    output: process.stdout
})

rl.question('Nama lengkap : ', (nama) => { 
   rl.question('Masukkan umur anda :' , (umur) => {
    rl.question('Masukan nama sekolah :' , (sekolah) => {
        // console.log('--data saya--')
        // console.log(`Nama bapa anda adalah ${answer} dam umur saya adalah ${umur} sekolah saya di ${sekolah}`)

        const data = {nama , umur ,sekolah };
        const fileDB = fs.readFileSync('./db/cek.json','utf8');
        const dataDiri = JSON.parse(fileDB);
        dataDiri.push(data);
        fs.writeFileSync('./db/cek.json' , JSON.stringify(dataDiri))
        console.log('Terima kasih sudah mempekenalkan dirinya');
        rl.close()
    

    });
  });
});