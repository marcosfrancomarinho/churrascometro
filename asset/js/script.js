// Carne - 400 gr por pessoa   + de 6 horas - 650.
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml.
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml.
// Crianças valem por 0,5.
// Cerveja 355 ml a unidade.
function clear() {
    adult.value = " ";
    children.value = " ";
    hours.value = " ";
    adult.focus();
}
function check(horas, adulto, crianca) {
    if (adulto.lenght == 0 || crianca.length == 0 || horas.length == 0) {
        return true;
    } else {
        return false;
    }
}
function calculateMeat(time) {
    if (time >= 6) {
        return true;
    } else {
        return false;
    }
};
function calculateBeer(time) {
    if (time >= 6) {
        return true;
    } else {
        return false;
    }
};
function calculateSoda(time) {
    if (time >= 6) {
        return true;
    } else {
        return false;
    }
};
function meat(horas, adulto, crianca) {
    const quant = Number(adulto) + Number(crianca / 2);
    if (calculateMeat(horas)) {
        return quant * 650 / 1000;
    } else {
        return quant * 400 / 1000;
    }
};
function beer(horas, adulto) {
    if (calculateBeer(horas)) {
        return Math.ceil((adulto * 2000) / 355);
    } else {
        return Math.ceil((adulto * 1200) / 355);
    }
};
function soda(horas, adulto, crianca) {
    const quant = Number(adulto) + Number(crianca / 2);
    if (calculateSoda(horas)) {
        return Math.ceil((quant * 1500) / 2000);
    } else {
        return Math.ceil((quant * 1000) / 2000);
    }
};
function positionEnter(margin) {
    margin.style = `position: relative; left:0px; opacity: 1`
};
function calculate() {
    let margin = document.querySelectorAll(".container-result")[0];
    let adult = document.querySelector("#adult");
    let children = document.querySelector("#children");
    let hours = document.querySelector("#hours");
    let icon = document.querySelectorAll("span");
    const result = document.querySelectorAll(".result");
    if (check(adult.value, children.value, hours.value)) {
        alert("ERROR - PREENCHA TODOS OS CAMPOS");
    }
    else {
        positionEnter(margin)
        result[0].innerHTML = ` ${(meat(hours.value, adult.value, children.value))} Kilogramas de Carne.`;
        result[1].innerHTML = `${(beer(hours.value, adult.value))} Latinhas de Cerveja.`;
        result[2].innerHTML = `  ${(soda(hours.value, adult.value, children.value))} Garrafa de 2L de Refrigerante.`;
        for (let i = 0; i < icon.length; i++) {
            icon[i].style.opacity = "1";
        };
    }
    clear()
};