 const getclass = (kode) => {
    const kelas = kode === 1 ? "SiJA" : "RPL";
    return { kode , kelas }  ;
 }

 console.log(getclass(1))

 console.log(getclass(2))
 console.log(getclass(3))
 console.log(getclass(4))


//  menambahkan kepanjangan dari kode kelas

const functionclass = (kode , deksripsi , kelas ) => {
return {kode,deksripsi , kelas}
}

const kelasdeskription = (kodeid) => {
     const kelas = kodeid  === 1 ? functionclass("SIJA","Sistem Jaringan dan Aplikasi")  : functionclass("RPL","Rekayasa Perangkat Lunak")
     return {kodeid , kelas}
}

console.log(kelasdeskription(1))



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

   console.log(getGameitem(1))




   // tugas 1 
   