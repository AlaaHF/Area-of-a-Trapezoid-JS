// Area of a Trapezoid Calculator

// Event Listeners
document.getElementById('calc-btn').addEventListener('click', calcArea);

// Event Fuctions
function calcArea(){
    // Input
    let topBase = Number(document.getElementById('base1').value);
    let bottomBase = Number(document.getElementById('base2').value);
    let height = Number(document.getElementById('height').value);

    // Process
    let area = (1/2)*(topBase + bottomBase)*(height);

    // Output
    document.getElementById('result').innerHTML = area;
}

