// const {
//     v4: uuidv4
// } = require('uuid')

// console.log(uuidv4())


const generateRandomid = (length) => {
  let result = '';
  const character = 'abcdefghijklmnopqrstuvwxyz1234567890';
     for(let i = 0 ; i = length ; i++){
       result += character.charAt(Math.floor(Math.random()) * character.length)
     }
     return result
};

  module.exports = generateRandomid;