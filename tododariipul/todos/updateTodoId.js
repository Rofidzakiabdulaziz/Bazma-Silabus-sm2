const  { updateById, todoQuestion } = require('./todos');

const update = async () => {
    const id = await todoQuestion("Masukan id todo : ");
    const title = await todoQuestion("Masukan judul todo : ");
    const description = await todoQuestion("Masukan deskripsi todo : ");
    const status = await todoQuestion("Masukan status todo : ");

    updateById( id, { title, description, status } );
};

update();