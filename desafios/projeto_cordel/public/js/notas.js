
let btn = document.querySelector("#btnenvio")

btn.addEventListener('click', () => {

    let nota1mat = parseFloat(document.querySelector("#nota1mat").value)
    let nota2mat = parseFloat(document.querySelector("#nota2mat").value)
    let nota3mat = parseFloat(document.querySelector("#nota3mat").value)
    let nota4mat = parseFloat(document.querySelector("#nota4mat").value)
    let mediamat = document.querySelector("#mediamat")

    // Notas de Física
    let nota1fis = parseFloat(document.querySelector("#nota1fis").value)
    let nota2fis = parseFloat(document.querySelector("#nota2fis").value)
    let nota3fis = parseFloat(document.querySelector("#nota3fis").value)
    let nota4fis = parseFloat(document.querySelector("#nota4fis").value)
    let mediafis = document.querySelector("#mediafis")

    // Notas de Química
    let nota1qui = parseFloat(document.querySelector("#nota1qui").value)
    let nota2qui = parseFloat(document.querySelector("#nota2qui").value)
    let nota3qui = parseFloat(document.querySelector("#nota3qui").value)
    let nota4qui = parseFloat(document.querySelector("#nota4qui").value)
    let mediaqui = document.querySelector("#mediaqui")

    // Notas de Biologia
    let nota1bio = parseFloat(document.querySelector("#nota1bio").value)
    let nota2bio = parseFloat(document.querySelector("#nota2bio").value)
    let nota3bio = parseFloat(document.querySelector("#nota3bio").value)
    let nota4bio = parseFloat(document.querySelector("#nota4bio").value)
    let mediabio = document.querySelector("#mediabio")

    // Notas de História
    let nota1hist = parseFloat(document.querySelector("#nota1hist").value)
    let nota2hist = parseFloat(document.querySelector("#nota2hist").value)
    let nota3hist = parseFloat(document.querySelector("#nota3hist").value)
    let nota4hist = parseFloat(document.querySelector("#nota4hist").value)
    let mediahist = document.querySelector("#mediahist")

    // Notas de Geografia
    let nota1geo = parseFloat(document.querySelector("#nota1geo").value)
    let nota2geo = parseFloat(document.querySelector("#nota2geo").value)
    let nota3geo = parseFloat(document.querySelector("#nota3geo").value)
    let nota4geo = parseFloat(document.querySelector("#nota4geo").value)
    let mediageo = document.querySelector("#mediageo")

    //Médias gerais
    let mediatotalexatas = document.querySelector("#mediatotalexatas")
    let mediatotalhumanas = document.querySelector("#mediatotalhumanas")

    mediamat.innerHTML = ((nota1mat + nota2mat + nota3mat + nota4mat) / 4)
    mediafis.innerHTML = ((nota1fis + nota2fis + nota3fis + nota4fis) / 4)
    mediaqui.innerHTML = ((nota1qui + nota2qui + nota3qui + nota4qui) / 4)
    mediabio.innerHTML = ((nota1bio + nota2bio + nota3bio + nota4bio) / 4)
    mediahist.innerHTML = ((nota1hist + nota2hist + nota3hist + nota4hist) / 4)
    mediageo.innerHTML = ((nota1geo + nota2geo + nota3geo + nota4geo) / 4)

    mediatotalexatas.innerHTML = ((parseFloat(mediamat.innerHTML) + parseFloat(mediafis.innerHTML) + parseFloat(mediaqui.innerHTML) + parseFloat(mediabio.innerHTML)) / 4)
    mediatotalhumanas.innerHTML = ((parseFloat(mediahist.innerHTML) + parseFloat(mediageo.innerHTML)) / 2)
})
