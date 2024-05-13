function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = `${weight}`;
        document.body.style.textTransform = `${transform}`;
        document.body.style.backgroundColor = `${background}`;
        document.body.style.color = `${color}`;
      };
}

function main() {
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);

    let p = document.createElement("p");
    p.innerHTML = "Welcome Holberton!";
    document.body.appendChild(p);

    function addThemeButton(text, modeFunction) {
        let button = document.createElement("button")
        button.textContent = text;
        button.onclick = modeFunction;
        document.body.appendChild(button);
    }

    addThemeButton('Spooky', spooky);
    addThemeButton('Dark mode', darkMode);
    addThemeButton('Scream mode', screamMode);
}