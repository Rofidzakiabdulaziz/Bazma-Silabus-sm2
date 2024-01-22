// hari senin sampai jumat
 
function cekHari(angka) {
    switch (angka) {
        case  1 :
          return "Senin"
          break; ;
        
        case 2 : 
        return "Selasa" 
        break ;
        case 3 : 
        return "Rabu" 
        break ;
        case 4 : 
        return "Kamis" 
        break ;
        case 5: 
        return "Jumat" 
        break ;
        default :
        return "hari libur"
      }
}


function bintangpersegipanjang(panjang , lebar ) {
    let pola = ""
    for (let i = 0; i < lebar; i++) {
        for (let j = 0; j < panjang; j++) {
            pola += "* ";
        }
        pola += "\n";
    }
  
    return pola;
 
}

function cekNilai(nilai) {
    switch (nilai) {
      case  100 :
        return "Terbaik"
        break; ;
      
      case 90  : 
      return "Cukup Baik" 
      break ;
      case 80 : 
      return "Baik" 
      break ;
      case 60 : 
      return "Harus Semangat" 
      break ;
      case 50: 
      return "Remedial" 
      break ;
      default :
      return "hari libur"
    }
  
  
  }
  
function cekNilai2(nilai) {
    if(nilai === 100) {
        return "Terbaik"
    } else if(nilai >= 90){
       return "Sangat baik"
    }else if(nilai >= 80 ){
        return "Baik"
    }else if(nilai >= 60) {
        return "Harus Semangat"
    }else if(nilai <= 50) {
        return "Remedial"
    }else {
        return "Anda GAGAL"
    }
  
  }
module.exports = {cekHari,cekNilai,bintangpersegipanjang,cekNilai2}


