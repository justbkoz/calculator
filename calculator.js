const nums = document.getElementsByClassName('nums')

document.body.addEventListener('click', clicked);

let oldWorkingNum = '';
let workingNum = '';
let totalDisplayed = false;

const doMath = {
    '+': function (x, y) { return ((x * 10) + (y * 10)) / 10 },
    '-': function (x, y) { return ((x * 10) - (y * 10)) / 10 },
    '/': function (x, y) { return ((x * 10) / (y * 10)) },
    '*': function (x, y) { return ((x * 10) * (y * 10)) / 100 },
}; //The 10s are to help alleviate the lack of js precision 

document.addEventListener('keypress', function (e) {
    e.preventDefault();
    console.log(e)
    if (e.key == 'Enter') { document.getElementById('equals').click() }
    if (e.key == '0') { document.getElementById('zero').click() }
    if (e.key == '1') { document.getElementById('one').click() }
    if (e.key == '2') { document.getElementById('two').click() }
    if (e.key == '3') { document.getElementById('three').click() }
    if (e.key == '4') { document.getElementById('four').click() }
    if (e.key == '5') { document.getElementById('five').click() }
    if (e.key == '6') { document.getElementById('six').click() }
    if (e.key == '7') { document.getElementById('seven').click() }
    if (e.key == '8') { document.getElementById('eight').click() }
    if (e.key == '9') { document.getElementById('nine').click() }
    if (e.key == '-') { document.getElementById('minus').click() }
    if (e.key == '=') { document.getElementById('add').click() }
    if (e.key == '.') { document.getElementById('decimal').click() }
    //if (e.key == '') { document.getElementById('clear').click() }
    //if (e.key == '') { document.getElementById('multiply').click() }
    //if (e.key == '') { document.getElementById('divide').click() }

});

function clicked(e) {
    if ((workingNum == 'Not a Number') || workingNum == 'Infinity') {
        workingNum = ``;
        document.getElementById('lowerDisplay').innerText = `${workingNum}`
    }
    if (e.target.value == 'zero' && workingNum == '0') {
        return;
    }
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
        if (workingNum == '') {
            oldWorkingNum = '';
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`;
        } else {
            workingNum = '';
            document.getElementById('lowerDisplay').innerText = `${workingNum}`;
        }
    }
    else if (e.target.value == 'posNeg') {
        if (!workingNum == '') {
            workingNum *= -1;
            workingNum = workingNum.toString();
            document.getElementById('lowerDisplay').innerText = `${workingNum}`;
        }
    }
    else if (e.target.value == 'divide') {
        if (workingNum == '') {
        } else if (oldWorkingNum == '') {
            oldWorkingNum = `${workingNum} /`;
            workingNum = '';
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        } else {
            oldWorkingNum = `${oldWorkingNum} ${workingNum}`
            workingNum = '';
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseFloat(split[0]), parseFloat(split[2]))
            oldWorkingNum = `${newNum} /`;
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        }
    }
    else if (e.target.value == 'multiply') {
        if (workingNum == '') {
        } else if (oldWorkingNum == '') {
            oldWorkingNum = `${workingNum} *`;
            workingNum = '';
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        } else {
            oldWorkingNum = `${oldWorkingNum} ${workingNum}`
            workingNum = '';
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseFloat(split[0]), parseFloat(split[2]))
            oldWorkingNum = `${newNum} *`;
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        }
    }
    else if (e.target.value == 'minus') {
        if (workingNum == '') {
        } else if (oldWorkingNum == '') {
            oldWorkingNum = `${workingNum} -`;
            workingNum = '';
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        } else {
            oldWorkingNum = `${oldWorkingNum} ${workingNum} -`
            workingNum = '';
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseFloat(split[0]), parseFloat(split[2]))
            oldWorkingNum = `${newNum} -`;
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        }
    }
    else if (e.target.value == 'add') {
        if (workingNum == '') {
        } else if (oldWorkingNum == '') {
            oldWorkingNum = `${workingNum} +`;
            workingNum = '';
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        } else {
            oldWorkingNum = `${oldWorkingNum} ${workingNum}`
            workingNum = '';
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseFloat(split[0]), parseFloat(split[2]))
            oldWorkingNum = `${newNum} +`;
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        }
    }
    else if (e.target.value == 'decimal') {
        if (!workingNum.includes('.')) {
            workingNum += e.target.innerText;
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
        }
    }
    else if (e.target.value == 'equals') {
        if (workingNum == '') {
        } else if (oldWorkingNum == '') {
        } else {
            totalDisplayed = true;
            oldWorkingNum = `${oldWorkingNum} ${workingNum} =`
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseFloat(split[0]), parseFloat(split[2]))
            oldWorkingNum = ``;
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`
            document.getElementById('lowerDisplay').innerText = `${Number(newNum.toFixed(7))}`
            workingNum = `${Number(newNum.toFixed(7))}`;
        }
    }
    if (workingNum == 'NaN') {
        workingNum = `Not a Number`;
        document.getElementById('lowerDisplay').innerText = `${workingNum}`
    }
    if (oldWorkingNum == '' && workingNum == '') {
        document.getElementById('clear').innerHTML = 'ALL<br>CLEAR';
    } else if (workingNum == '') {
        document.getElementById('clear').innerHTML = 'ALL<br>CLEAR';
    } else if (oldWorkingNum == '') {
        document.getElementById('clear').innerHTML = 'ALL<br>CLEAR';
    } else {
        document.getElementById('clear').innerHTML = 'CLEAR';
    }
}