let totalhabitantes = document.querySelector(".resultado")
let populationlist = document.querySelectorAll("#popul")

populationlist.forEach((element) => {
    Number(totalhabitantes.innerHTML) += Number(totalhabitantes.innerHTML) + Number(element)
});