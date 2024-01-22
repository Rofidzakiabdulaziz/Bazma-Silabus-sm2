const { Console } = require('console')
const fs = require('fs')


fs.writeFileSync("perkenalan.txt", "Perkenalkan saya Rofi")

const perkenalan = fs.readFileSync('perkenalan.txt')
console.log(perkenalan.toString())

const perangkat = fs.mkdirSync("rofi")
Console.log(perangkat.uppercase())


const ulink = fs.unlinkSync("rofi", "paijo.txt")
console.log(ulink)


const hapus = "perkenalan.txt"

fs.unlinkSync(hapus.toString())
