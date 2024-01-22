const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input : stdin ,
    output : stdout

}) ; 


// cek folder,ada atau tidak jita dtidak maka buatkan foldernya
const directory = './db';
if(!fs.existsSync(directory)){
    fs.mkdirSync(directory)
}

// cek file dalam folder
const cekFile= './db/data.json';
if(!fs.existsSync(cekFile)) {
     fs.writeFileSync(cekFile , '[]' , 'utf8')
}


const questionExample = (question) => {
       return new Promise((resolve, reject) => {
        rl.question(question , (answer) => {
            resolve(answer)
        } );
}) ;
};



const addData = async () => { 
    const nama = await  questionExample('Masukkan nama anda : ');
    const umur = await questionExample('masukkan umur anda : ');
    const hobi = await questionExample('Masukkan Hobimu : ');

    const data = {nama , umur , hobi};
        const fileDB = fs.readFileSync('./db/data.json','utf8');
        const dataDiri = JSON.parse(fileDB);

        dataDiri.push(data);
        fs.writeFileSync('./db/data.json' , JSON.stringify(dataDiri))
        console.log('Terima kasih sudah mempekenalkan dirinya');    
        rl.close()
    
}

addData()