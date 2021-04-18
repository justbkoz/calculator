const buttons = document.getElementsByClassName('buttons')
const nums = document.getElementsByClassName('nums')


document.body.addEventListener('click', clicked);

let oldWorkingNum = '';
let workingNum = '';

const doMath = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
};
// console.log(doMath['+'](1, 2))   <---how this func works!



function clicked(e) {
    if (e.target.className.match('nums')) {
        workingNum += e.target.innerText;
        document.getElementById('lowerDisplay').innerText = `${workingNum}`
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
        console.log(e.target.innerText)
    }
    else if (e.target.value == 'add') {
        if (workingNum == '') {
            return;
        } else if (oldWorkingNum == '') {
            oldWorkingNum = `${workingNum} +`;
            workingNum = '';
            document.getElementById('lowerDisplay').innerText = `${workingNum}`
            document.getElementById('upperDisplay').innerText = `${oldWorkingNum}`;

        } else {
            oldWorkingNum = `${oldWorkingNum} ${workingNum} +`
            workingNum = '';
            split = oldWorkingNum.split(' ');
            let newNum = doMath[`${split[1]}`](parseInt(split[0]), parseInt(split[2]))
            oldWorkingNum = `${newNum} +`;
            document.getElementById('lowerDisplay').innerText = `${newNum}`
            document.getElementById('upperDisplay').innerText = `${newNum} +`;

        }
    }
    else if (e.target.value == 'decimal') { // need to limit this to one decimal
        workingNum += e.target.innerText;
        document.getElementById('lowerDisplay').innerText = `${workingNum}`
    }
    else if (e.target.value == 'equals') {
        console.log(e.target.innerText)
    }
    else console.log('dang it') //need to get rid of this...
}


// currently... every time I click + i add to the array.  I need the array to start over with just 
// the newest numbers
