const {updatebyId , todoQuestion} = require('./todos');

const update = async () => {
  const id = await todoQuestion("Masukkan id todo : ");
  const title = await todoQuestion("Masukkan judul pada todo : ")
  const description = await todoQuestion("masukkan deksripsi todo : ")
  const status = await todoQuestion("masukkan status todo : ")
  updatebyId(id , {title , description , status})
}

update()