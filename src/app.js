let baseInput = document.querySelector('#base')
let heightInput = document.querySelector('#height')
let areaInput = document.querySelector('#area')
let calcButton = document.querySelector('#calcButton')

// console.log(baseInput, heightInput, areaInput, calcButton)

calcButton.addEventListener('click', () => {    
   workInput()   
})

function workInput() {
    let base = Number(baseInput.value)
    let height = Number(heightInput.value)
    let area = calcTriangleArea(base, height)
    areaInput.value = area
    console.log(area)
}

function calcTriangleArea(base, height) {
    if(base <= 0 || height <=0){
        throw new Error('Hiba a paraméter nem megfelelő');
    }
    return base * height / 2
}
function chekInput(input){
    //szabályos kifejezések
    let res = input.match(/^[012345]$/);
    if(res){
        return true;
    }else{
        return false;
    }
}