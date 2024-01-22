const getclass = (kode) => {
    const kelas = kode === 1 ? "SiJA" : "RPL";
    return { kode , kelas }  ;
 }

//  console.log(getclass(1))

//  console.log(getclass(2))
//  console.log(getclass(3))
//  console.log(getclass(4))


//  menambahkan kepanjangan dari kode kelas

const functionclass = (kode , deksripsi , kelas ) => {
return {kode,deksripsi , kelas}
}

const kelasdeskription = (kodeid) => {
     const kelas = kodeid  === 1 ? functionclass("SIJA","Sistem Jaringan dan Aplikasi")  : functionclass("RPL","Rekayasa Perangkat Lunak")
     return {kodeid , kelas}
}

// console.log(kelasdeskription(1))



// buatlah 5 data objek bentuk item game 
const getitem = (rank , hero , skill , cooldown) =>{
      return {rank, hero , skill , cooldown}
}
   const getGameitem = (kodeid) =>{
      const item = kodeid === 1 ? getitem("Legend" , "Brody" , "3 skll" , 35) : 
      kodeid === 2 ? getitem("Epic","Layla","3 skill",35) : 
      kodeid === 3 ? getitem("master","parsha","3 skill",30) :
      kodeid === 4 ? getitem("elite","zhask","4 skill",25) : 
      getitem("mytich","alpha","3 skill",20)
      return {item , kodeid}
   }

//    console.log(getGameitem(1))




   // tugas 1 
//    const functionkelas = (kode , deksripsi , kelas ) => {
//     return {kode,deksripsi , kelas}
//     }
    
//     const deskription = (kodeid) => {
//          const kelas = kodeid  === 1 ? functionkelas("SIJA","Sistem Jaringan dan Aplikasi")  :
//           kodeid === 2 ?  functionkelas("RPL","Rekayasa Perangkat Lunak") : 
//           kodeid === 3 ? functionkelas("MM","Multimedia") : ("NF" , "Not Found")
//          return {kodeid , kelas}
//     }
    
    // console.log(deskription(1))
    // console.log(deskription(2))


    // contoh pa bayu
    const classFun = (kode , namaKelas) => {
        return {kode , namaKelas}
    }

    const kelasBaru = (id) => {
        if(id === 1 ) {
            return classFun("Sija", "Sistem infomasi Jaringan dan aplikasi");
        } else if (id === 2){
            return classFun("RPL", "Rekayasa perangkat lunak");
        } else if (id === 3){
            return classFun("MM", "Multimedia");
        }
        return {id} ;
    }


    // async kelas

//    const getclasasync = async (kodeid) => {

//     const kelas = kodeid === 1 ? "Sija" : "RPL";
//     const data = await kelas;
//     return {kodeid , data}
//    }

//    getclasasync(1).then(console.log)
// console.log(getclasasync(1))

 const getkelasAsync = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const kelas = id === 1 ? "SIJA" : "RPL" ;
            resolve({id , kelas})
        },1000);
    }) 
 }
 const getkelasBaruAsync = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let kelas
          if(id === 1){
            kelas = classFun("SIJA","Sistem Informasi Jaringan dan Aplikasi")
          }else if(id === 2) {
            kelas = classFun("RPL","Rekayasa perangkat lunak")
          }else if(id === 3){
            kelas = classFun("MM","Multimedia")
          }
          resolve({id,kelas})
        },1000);
    }) 
 }


 module.exports = {kelasBaru , getGameitem , kelasdeskription , getclass ,getkelasAsync,getkelasBaruAsync};