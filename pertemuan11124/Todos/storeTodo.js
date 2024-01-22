const {todoQuestion , storeTodo} = require('./todos')

const store = async () => {
    const title = await todoQuestion("Enter title todo : ")
    const description = await todoQuestion("Enter deksripsion : ")
    const status = await todoQuestion("Enter Status : ")

    storeTodo(title , description , status)
};

store()