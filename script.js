
const firstMember ={
    Number: "",
    Islocked: false
}

const Operator = {
    Operation: "",
    Islocked: false
}

const secondMember ={
    Number: "",
    Islocked: true
}
const screen = document.querySelector('#currentNum')

function start() {
    addValueToNumButton()
    addFunctionToOperationalButton()
}

function addValueToNumButton() {

    const btnDel = document.querySelector('#Del')
    btnDel.addEventListener('click', function(){

        let Number1 = firstMember.Number
        let Number2 = secondMember.Number

        if(firstMember.Islocked === false) { 
            let splitNum = Number1.split("")
            splitNum.pop()
            let joinNum = splitNum.join()
            firstMember.Number = joinNum.replace(/,/g, '')
            
        } else if (secondMember.Islocked === false) {
            let splitNum2 =Number2.split("")
            splitNum2.pop()
            let joinNum2 = splitNum2.join()
            secondMember.Number = joinNum2.replace(/,/g, '')  
        }
        renderOperationInScreen()
    })

    const btnZero = document.querySelector('#zero')
    btnZero.addEventListener('click', function() {addNumToKeyObj("0"); renderOperationInScreen()})

    const btnOne = document.querySelector('#one')
    btnOne.addEventListener('click', function() {addNumToKeyObj("1"); renderOperationInScreen()})

    const btnTwo = document.querySelector('#two')
    btnTwo.addEventListener('click', function() {addNumToKeyObj("2"); renderOperationInScreen()})

    const btnThree = document.querySelector('#three')
    btnThree.addEventListener('click', function() {addNumToKeyObj("3"); renderOperationInScreen()})

    const btnFour = document.querySelector('#four')
    btnFour.addEventListener('click', function() {addNumToKeyObj("4"); renderOperationInScreen()})

    const btnFive = document.querySelector('#five')
    btnFive.addEventListener('click', function() {addNumToKeyObj("5"); renderOperationInScreen()})

    const btnSix = document.querySelector('#six')
    btnSix.addEventListener('click', function() {addNumToKeyObj("6"); renderOperationInScreen()})

    const btnSeven = document.querySelector('#seven')
    btnSeven.addEventListener('click', function() {addNumToKeyObj("7"); renderOperationInScreen()})

    const btnEight = document.querySelector('#eight')
    btnEight.addEventListener('click', function() {addNumToKeyObj("8"); renderOperationInScreen()})

    const btnNine = document.querySelector('#nine')
    btnNine.addEventListener('click', function() {addNumToKeyObj("9"); renderOperationInScreen()})

    
}

function addNumToKeyObj(Num) {
    if(firstMember.Islocked === false) { firstMember.Number += `${Num}`} else if (secondMember.Islocked === false) {secondMember.Number += `${Num}`}
    console.log(firstMember)
    console.log(secondMember)
}

function addFunctionToOperationalButton() {

    const plusButton = document.querySelector('#plus')
    plusButton.addEventListener('click', function(){addOperator("plus")})

    const minusButton = document.querySelector('#minus')
    minusButton.addEventListener('click', function(){addOperator("minus") })

    const multiplyButton = document.querySelector('#multiply')
    multiplyButton.addEventListener('click', function(){addOperator("multiply") })

    const divideButton = document.querySelector('#divide')
    divideButton.addEventListener('click', function(){addOperator("divide") })

    const equalsButton = document.querySelector('#equals')
    equalsButton.addEventListener('click', function(){addEqualsToOperator()})
}

function addOperator(opr) { 
    if(Operator.Islocked === false){
        Operator.Operation = `${opr}` 
        console.log(Operator)
        Operator.Islocked = true
        firstMember.Islocked = true
        secondMember.Islocked = false
    }
    console.log(Operator)
}

function addEqualsToOperator() {
    let mem1 = parseInt(firstMember.Number)
    let mem2 = parseInt(secondMember.Number)
    let opr = Operator.Operation
    let result = 0
    if(opr === "plus"){result = mem1 + mem2}
    else if(opr === "minus"){result = mem1 - mem2}
    else if(opr === "multiply"){result = mem1 * mem2}
    else if(opr === "divide"){result = mem1 / mem2}
    screen.innerHTML = result

}

function renderOperationInScreen() {
    let firstmem = firstMember.Number
    let secondmem = secondMember.Number
    if(firstMember.Islocked === false) {screen.innerHTML = firstmem} 
    else if (secondMember.Islocked === false) {screen.innerHTML = secondmem}

}

start()