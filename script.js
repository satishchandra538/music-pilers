const dance = () => {
    setInterval(() => {
        let height = Math.floor(Math.random() * 650);
        let pilerNumber = Math.floor(Math.random() * 55) + 1;
        let piler = document.getElementById(`elm${pilerNumber}`);
        piler.style.height = height + "px";
        piler.innerHTML = height;
        piler.style.backgroundColor = `rgb(${height/5},${height/3},${height})`
    }, 5)
}

dance()