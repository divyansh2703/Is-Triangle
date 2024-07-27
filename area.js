const lengthTriangle = document.querySelectorAll('.length');
const areaBtn = document.querySelector('#area-btn');
const outputEl= document.querySelector('#output')

function calculateBaseHeigth(a,b){
    const areaMultiplication = a*b/2;
    return areaMultiplication;
//  console.log(areaMultiplication)
}

function areaTriangle(){
    const areaMultiplication = calculateBaseHeigth(Number(lengthTriangle[0].value),Number(lengthTriangle[1].value));
    outputEl.innerText = "area of the Triangle is " + areaMultiplication + "cm²";

}

areaBtn.addEventListener('click', areaTriangle);