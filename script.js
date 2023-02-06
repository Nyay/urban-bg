const photoDiv = document.getElementById('photos');

const calcTransform = (maxValue, decimalValue) => maxValue * decimalValue * -1;

window.onmousemove = ((event) => {
    const mouseX = event.x, mouseY = event.y;

    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    const maxX = photoDiv.offsetWidth - window.innerWidth;
    const maxY = photoDiv.offsetHeight - window.innerHeight;

    const translateX = calcTransform(maxX, xDecimal);
    const translateY = calcTransform(maxY, yDecimal);

    photoDiv.style.transform = `translate(${translateX}px, ${translateY}px)`;

    photoDiv.animate({
        transform: `translate(${translateX}px, ${translateY}px)`,
    }, {
        duration: 3000,
        fill: "backwards",
        easing: "ease",
    })
})