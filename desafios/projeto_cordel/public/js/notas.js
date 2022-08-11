
let btn = document.querySelector("#btnenvio")

btn.addEventListener('click', () => {

    let nota1mat = parseFloat(document.querySelector("#nota1mat").value)
    let nota2mat = parseFloat(document.querySelector("#nota2mat").value)
    let mediamat = document.querySelector("#mediamat")

    // Notas de Física
    let nota1fis = parseFloat(document.querySelector("#nota1fis").value)
    let nota2fis = parseFloat(document.querySelector("#nota2fis").value)
    let mediafis = document.querySelector("#mediafis")

    // Notas de Química
    let nota1qui = parseFloat(document.querySelector("#nota1qui").value)
    let nota2qui = parseFloat(document.querySelector("#nota2qui").value)
    let mediaqui = document.querySelector("#mediaqui")

    // Notas de Biologia
    let nota1bio = parseFloat(document.querySelector("#nota1bio").value)
    let nota2bio = parseFloat(document.querySelector("#nota2bio").value)
    let mediabio = document.querySelector("#mediabio")

    // Notas de História
    let nota1hist = parseFloat(document.querySelector("#nota1hist").value)
    let nota2hist = parseFloat(document.querySelector("#nota2hist").value)
    let mediahist = document.querySelector("#mediahist")

    // Notas de Geografia
    let nota1geo = parseFloat(document.querySelector("#nota1geo").value)
    let nota2geo = parseFloat(document.querySelector("#nota2geo").value)
    let mediageo = document.querySelector("#mediageo")

    //Médias gerais
    let mediatotalexatas = document.querySelector("#mediatotalexatas")
    let mediatotalhumanas = document.querySelector("#mediatotalhumanas")

    mediamat.innerHTML = ((nota1mat + nota2mat) / 2)
    mediafis.innerHTML = ((nota1fis + nota2fis) / 2)
    mediaqui.innerHTML = ((nota1qui + nota2qui) / 2)
    mediabio.innerHTML = ((nota1bio + nota2bio) / 2)
    mediahist.innerHTML = ((nota1hist + nota2hist) / 2)
    mediageo.innerHTML = ((nota1geo + nota2geo) / 2)
})
