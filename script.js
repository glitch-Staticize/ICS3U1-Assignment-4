// Cosine Law
function cosineLaw(sideA, sideB, angleC) {
    return Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(angleC));
}

document.getElementById("calculateCosine").onclick = function (event) {
    event.preventDefault();

    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var angleC = parseFloat(document.getElementById("angleC").value) * (Math.PI / 180);

    var sideC = cosineLaw(sideA, sideB, angleC);
    document.getElementById("cosineResult").innerText = sideC;
}

// Asymptote Finder
function findAsymptote(nValue, mValue) {
    const asymptoteType = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sextic", "Septic", "Octic", "Nonic", "Decic"];

    if (mValue == nValue) {
        return "The asymptote is horizontal";
    } else if (nValue > mValue) {
        return "The asymptote is the x-axis";
    } else if (nValue < mValue) {
        return "The asymptote is " + asymptoteType[mValue - nValue - 1];
    } else {
        return "Null";
    }
}

document.getElementById("calculateAsymptote").addEventListener("click", function (event) {
    event.preventDefault();
    let asyM = parseInt(document.getElementById("mValue").value);
    let asyN = parseInt(document.getElementById("nValue").value);
    document.getElementById("asymptoteResult").innerText = findAsymptote(asyN, asyM);
});

// Gregory-Leibniz Pi Approximation
function piApprox(nValuePi) {
    let pi = 0;
    for (let i = 0; i < nValuePi; i++) {
        pi += 4 * (Math.pow(-1, i) / (2 * i + 1));
    }
    return pi;
}

document.getElementById("calculatePi").addEventListener("click", function (event) {
    event.preventDefault();
    let nPi = parseInt(document.getElementById("nValuePi").value);
    document.getElementById("piResult").innerText = piApprox(nPi);
})