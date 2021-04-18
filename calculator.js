const buttons = document.getElementsByClassName('buttons')
const nums = document.getElementsByClassName('nums')

document.body.addEventListener('click', clicked);

let oldWorkingNum = '';
let workingNum = '';
let totalDisplayed = false;

const doMath = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
};
// console.log(doMath['+'](1, 2))   <---how this func works!



function clicked(e) {
    if (e.target.className.match('nums')) {
        if (totalDisplayed) {
            workingNum = '';
            workingNum += e.target.innerText;
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
            totalDisplayed = false;
        } else {
            workingNum += e.target.innerText;
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        }
    }
    else if (e.target.value == 'clear') {
        workingNum = '';
        document.getElementById('lowerDisplay').innerText = `${workingNum}`;
    }
    else if (e.target.value == 'posNeg') {
        console.log(e.target.innerText)
    }
    else if (e.target.value == 'percent') {
        console.log(e.target.innerText)
    }
    else if (e.target.value == 'divide') {
        console.log(e.target.innerText)
    }
    else if (e.target.value == 'multiply') {
        console.log(e.target.innerText)
    }
    else if (e.target.value == 'minus') {
        if (workingNum == '') {
            return;
        } else if (oldWorkingNum == '') {
            oldWorkingNum = `${workingNum} -`;
            workingNum = '';
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        } else {
            oldWorkingNum = `${oldWorkingNum} ${workingNum} -`
            workingNum = '';
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseFloat(split[0]), parseFloat(split[2]))
            oldWorkingNum = `${newNum} -`;
            document.getElementById('lowerDisplay').innerText = `${Number(newNum.toFixed(5))}`
        }
    }
    else if (e.target.value == 'add') {
        if (workingNum == '') {
            return;
        } else if (oldWorkingNum == '') {
            oldWorkingNum = `${workingNum} +`;
            workingNum = '';
        } else {
            oldWorkingNum = `${oldWorkingNum} ${workingNum}`
            workingNum = '';
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseFloat(split[0]), parseFloat(split[2]))
            oldWorkingNum = `${newNum} +`;
            document.getElementById('lowerDisplay').innerText = `${Number(newNum.toFixed(5))}`
        }
    }
    else if (e.target.value == 'decimal') { // need to limit this to one decimal
        workingNum += e.target.innerText;
        document.getElementById('lowerDisplay').innerText = `${workingNum}`
    }
    else if (e.target.value == 'equals') {
        if (workingNum == '') {
            return;
        } else if (oldWorkingNum == '') {
            return;
        } else {
            totalDisplayed = true;
            oldWorkingNum = `${oldWorkingNum} ${workingNum} =`
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseFloat(split[0]), parseFloat(split[2]))
            oldWorkingNum = ``;
            document.getElementById('lowerDisplay').innerText = `${Number(newNum.toFixed(5))}`
            workingNum = `${Number(newNum.toFixed(5))}`;
        }
    }
    else console.log('dang it') //need to get rid of this...


}