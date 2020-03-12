// list variables

var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
var score = 0;
var wins = 0;
var losses = 0;
var bluebtn = document.querySelector(".blue");
var purpbtn = document.querySelector(".purple");
var opalbtn = document.querySelector(".opal");
var pinkbtn = document.querySelector(".pink");
document.querySelector(".targetNumber").innerHTML = targetNumber


function reset() {
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    document.querySelector(".targetNumber").innerHTML = targetNumber
    score = 0;
    document.querySelector(".score").innerHTML = targetNumber
    bluebtn.dataset.value = Math.floor(Math.random() * (12 - 1) + 1);
    purpbtn.dataset.value = Math.floor(Math.random() * (12 - 1) + 1);
    opalbtn.dataset.value = Math.floor(Math.random() * (12 - 1) + 1);
    pinkbtn.dataset.value = Math.floor(Math.random() * (12 - 1) + 1);
}

//Blue Crystal
bluebtn.dataset.value = Math.floor(Math.random() * (12 - 1) + 1);

bluebtn.addEventListener("click", function (event) {
    var blueVal = bluebtn.dataset.value
    score += Number(blueVal)
    document.querySelector(".score").innerHTML = score
    console.log("blue")
    console.log(blueVal)
    if (score > targetNumber) {
        losses += 1;
        document.querySelector(".losses").innerHTML = losses
        alert("You lost!")
        reset()
    } else if (targetNumber === score) {
        wins += 1;
        document.querySelector(".wins").innerHTML = wins
        alert("You won!")
        reset()
    }
})

//Purple Crystal
purpbtn.dataset.value = Math.floor(Math.random() * (12 - 1) + 1);

purpbtn.addEventListener("click", function (event) {
    var purpleVal = purpbtn.dataset.value
    score += Number(purpleVal)
    document.querySelector(".score").innerHTML = score
    console.log("purple")
    console.log(purpleVal)
    if (score > targetNumber) {
        losses += 1;
        document.querySelector(".losses").innerHTML = losses
        alert("You lost!")
        reset()
    } else if (targetNumber === score) {
        wins += 1;
        document.querySelector(".wins").innerHTML = wins
        alert("You won!")
        reset()
    }
})

//Clear Crystal
opalbtn.dataset.value = Math.floor(Math.random() * (12 - 1) + 1);

opalbtn.addEventListener("click", function (event) {
    var opalVal = opalbtn.dataset.value
    score += Number(opalVal)
    document.querySelector(".score").innerHTML = score
    console.log("opal")
    console.log(opalVal)
    if (score > targetNumber) {
        losses += 1;
        document.querySelector(".losses").innerHTML = losses
        alert("You lost!")
        reset()
    } else if (targetNumber === score) {
        wins += 1;
        document.querySelector(".wins").innerHTML = wins
        alert("You won!")
        reset()
    }
})

//Pink Crystal

pinkbtn.dataset.value = Math.floor(Math.random() * (12 - 1) + 1);

pinkbtn.addEventListener("click", function (event) {
    var pinkVal = pinkbtn.dataset.value
    score += Number(pinkVal)
    document.querySelector(".score").innerHTML = score
    console.log("pink")
    console.log(pinkVal)
    if (score > targetNumber) {
        losses += 1;
        document.querySelector(".losses").innerHTML = losses
        alert("You lost!")
        reset()
    } else if (targetNumber === score) {
        wins += 1;
        document.querySelector(".wins").innerHTML = wins
        alert("You won!")
        reset()
    }
})

