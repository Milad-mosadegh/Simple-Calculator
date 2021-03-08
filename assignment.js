var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var result = document.getElementById("result")

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiBtn = document.getElementById("multi");
const percentageBtn = document.getElementById("percentage");

/*
 
 ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
 ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
 █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
 ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
 ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
 ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                                           
 
*/

function plus(a, b) {
    return parseFloat(a.value) + parseFloat(b.value);
}

function minus(a, b) {
    return parseFloat(a.value) - parseFloat(b.value);
}

function multi(a, b) {
    return parseFloat(a.value) * parseFloat(b.value);
}

function percentage(a, b) {
    return parseFloat(a.value) / parseFloat(b.value);
}

/*
 
 ██████╗ ████████╗███╗   ██╗     █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗
 ██╔══██╗╚══██╔══╝████╗  ██║    ██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
 ██████╔╝   ██║   ██╔██╗ ██║    ███████║██║        ██║   ██║██║   ██║██╔██╗ ██║
 ██╔══██╗   ██║   ██║╚██╗██║    ██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║
 ██████╔╝   ██║   ██║ ╚████║    ██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝    ╚═╝   ╚═╝  ╚═══╝    ╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                                                                               
 
*/

plusBtn.addEventListener("click", function () {

    if (n1.value === "" || n2.value === "") {
        alert("please fill all")
    } else {
        result.innerHTML = `Result of ${n1.value} plus ${n2.value} is: \n \n <h1>${plus(n1, n2)}</h1>`
        n1.value = ""
        n2.value = ""
    }
})


minusBtn.addEventListener("click", function () {
    if (n1.value === "" || n2.value === "") {
        alert("please fill all")
    }
    result.innerHTML = `Result of ${n1.value} minus ${n2.value} is: \n \n <h1>${minus(n1, n2)}</h1>`
    n1.value = ""
    n2.value = ""
})

multiBtn.addEventListener("click", function () {
    if (n1.value === "" || n2.value === "") {
        alert("please fill all")
    }
    result.innerHTML = `Result of ${n1.value} multiply ${n2.value} is: \n \n <h2>${multi(n1, n2)}</h2>`
    n1.value = ""
    n2.value = ""
})


percentageBtn.addEventListener("click", function () {
    if (n1.value === "" || n2.value === "") {
        alert("please fill all")
    }
    result.innerHTML = `Result of ${n1.value} percentage ${n2.value} is: \n \n <h1>${percentage(n1, n2)}</h1>`
    n1.value = ""
    n2.value = ""
})
