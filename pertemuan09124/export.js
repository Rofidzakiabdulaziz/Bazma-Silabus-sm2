    const  {kelasBaru, getkelasAsync, getkelasBaruAsync}  = require('./arsitektur')
// console.log(kelasBaru(1))

// getkelasAsync(1).then((kelasSIJA) => {
//     console.log(kelasSIJA)
// } 
//  ) 
// getkelasAsync(2).then((kelasRpl) => {
//     console.log(kelasRpl)
// } 
//  ) 

 getkelasBaruAsync(2).then((kelasMM) => {
    console.log(kelasMM)
} 
 ) 
