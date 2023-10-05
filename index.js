


function calculateMonteCarlo() {
    const simulationsInput = document.getElementById("simulations");
    const simulations = parseInt(simulationsInput.value);

    if (isNaN(simulations) || simulations < 1) {
        alert("Porfavor ingresar un numero valido (mayor a 1).");
        return;
    }

    const realValue = calculateRealIntegral();
    const monteCarloValue = monteCarloIntegration(simulations);
    const errorPercentage = calculateError(realValue, monteCarloValue);

    const output = document.getElementById("output");
    output.innerHTML = `
        <p>Real valor de la integral ${realValue.toFixed(4)}</p>
        <p>Aproximacion por montecarlo: ${monteCarloValue.toFixed(4)}</p>
        <p>Error de porcentaje: ${errorPercentage.toFixed(2)}%</p>
    `;
    document.getElementById("success-alert").style.display = "block";

    setTimeout(function() {
        document.getElementById("success-alert").style.display = "none";
    }, 3000);}

function calculateRealIntegral() {
    const a = 2;
    const b = 3;
    const realValue = ((b ** 3 - a ** 3) * 3 / 3) + ((b ** 2 - a ** 2) * 2 / 2);
    return realValue;
}

function monteCarloIntegration(simulations) {
    const a = 2;
    const b = 3;
    let sum = 0;

    for (let i = 0; i < simulations; i++) {
        const randomX = Math.random() * (b - a) + a;
        const fx = 3 * randomX ** 2 + 2 * randomX;
        sum += fx;
    }

    const average = sum / simulations;
    const monteCarloValue = (b - a) * average;
    return monteCarloValue;
}

function calculateError(realValue, monteCarloValue) {
    const error = Math.abs(realValue - monteCarloValue);
    const errorPercentage = (error / realValue) * 100;
    return errorPercentage;
}
function calculateMonteCarloo() {

    document.getElementById("success-alert").style.display = "block";

    setTimeout(function() {
        document.getElementById("success-alert").style.display = "none";
    }, 3000); 
}
