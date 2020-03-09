// list variables

var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
var score = 0;
var wins = 0;
var losses = 0;
document.querySelector(".targetNumber").innerHTML = targetNumber


//function to reset game
function reset () {
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

}

//Blue Crystal
var bluebtn = document.querySelector(".blue");
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
    } else if (targetNumber === score) {
        wins += 1;
        document.querySelector(".wins").innerHTML = wins
        alert("You won!")
        reset()
    }
})

//Purple Crystal
var purpbtn = document.querySelector(".purple");
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
    } else if (targetNumber === score) {
        wins += 1;
        document.querySelector(".wins").innerHTML = wins
        alert("You won!")
        reset()
    }
})

//Clear Crystal
var opalbtn = document.querySelector(".opal");
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
    } else if (targetNumber === score) {
        wins += 1;
        document.querySelector(".wins").innerHTML = wins
        alert("You won!")
        reset()
    }
})

//Pink Crystal
var pinkbtn = document.querySelector(".pink");
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
    } else if (targetNumber === score) {
        wins += 1;
        document.querySelector(".wins").innerHTML = wins
        alert("You won!")
        reset()
    }
})

