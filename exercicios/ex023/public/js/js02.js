let totalhabitantes = document.querySelector(".resultado")
let populationlist = document.querySelectorAll(".popul")
let totalhab = 0

populationlist.forEach((element) => {
    totalhab += parseInt(element.innerHTML)
});

totalhabitantes.innerHTML = totalhab