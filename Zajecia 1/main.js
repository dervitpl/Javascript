const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')
const liczba4 = document.querySelector('#liczba4')
const btnPrzelicz = document.querySelector('#przelicz')
const sumaPojemnik = document.querySelector('#suma')
const sredniaPojemnik = document.querySelector('#srednia')
const minPojemnik = document.querySelector('#min')
const maxPojemnik = document.querySelector('#max')
var suma = "suma = ";
var srednia = "srednia = ";
var min = "min = ";
var max = "max = ";
btnPrzelicz.addEventListener('click' , () => {
    sumaPojemnik.innerHTML = suma + (+liczba1.value + +liczba2.value + +liczba3.value + +liczba4.value)
    sredniaPojemnik.innerHTML = srednia + (+liczba1.value + +liczba2.value + +liczba3.value + +liczba4.value)/4 
    minPojemnik.innerHTML = min + Math.min(+liczba1.value, +liczba2.value,+liczba3.value,+liczba4.value)
    maxPojemnik.innerHTML = max + Math.max(+liczba1.value, +liczba2.value,+liczba3.value,+liczba4.value)
    console.dir(liczba1.value)
})
document.getElementById("liczba1", "liczba2", "liczba3", "liczba4").addEventListener("keyup", myFunction);
function myFunction() {
    var x document.getElementById("liczba1")
}