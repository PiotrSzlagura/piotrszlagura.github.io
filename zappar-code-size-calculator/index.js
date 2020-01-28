document.querySelector("#trigger").addEventListener("click", function () {
    const posterWidth = Number(document.querySelector("#width").value.replace(",", "."));
    const posterHeight = Number(document.querySelector("#height").value.replace(",", "."));

    if (isNaN(posterWidth) || isNaN(posterHeight)) {
        alert("Both values have to be numbers.")
    } else {
        const {radius, diameter} = getZapparImageData(posterWidth, posterHeight);

        document.getElementById("results-wrapper").classList.remove("hidden");

        document.getElementById("radius").innerText = radius.toFixed(4);
        document.getElementById("diameter").innerText = diameter.toFixed(4);
    }
});

function getZapparImageData(posterWidth, posterHeight) {
    const posterSurface = posterWidth * posterHeight;
    const zapparImageSurface = posterSurface / 15;
    const zapparImageRadius = Math.sqrt(zapparImageSurface / Math.PI);

    return {
        radius: zapparImageRadius,
        diameter: zapparImageRadius * 2
    };
}
