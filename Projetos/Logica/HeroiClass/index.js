const prompt = require("prompt-sync")();
let nome = prompt(`Digite o nome do heroi: `)
let classe = ' '
let xp = prompt(`Diga quanto de xp tem o ${nome}: `)

if (xp>=10001) {
    classe = "Radiante"
}else if (xp>=9001){
    classe = "Imortal"
}else if (xp>=8001) {
    classe = "Ascendente"
}else if (xp>=8001) {
    classe = "Ascendente"
}else if (xp>=8001) {
    classe = "Ascendente"
}else if (xp>=7001) {
    classe = "Platina"
}else if (xp>=5001) {
    classe = "Ouro"
}else if (xp>=2001) {
    classe = "Prata"
}else if (xp>=1001) {
    classe = "Bronze"
}else{
    classe = "Ferro"
}

console.log(`O Herói ${nome} está no nível ${classe}`)
