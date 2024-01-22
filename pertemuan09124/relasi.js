function namarelas(nama){
    return `Hello my name is ${nama}`
}

function daerah(daerah){
    return `Daerah saya tinggal di${daerah}`
}

function objekdata(nama , kelas) {
   const data = {
    nama ,
    kelas
   }
  
   
    return data
}

function arrayrelasi(abjad) {
    const arr = ['a' , 'b' , 'c' , 'd']
       if(abjad !== undefined){
        arr.unshift(abjad)
       }
    return arr
}

module.exports= {namarelas,daerah,objekdata,arrayrelasi}