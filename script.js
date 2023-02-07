const screen = document.querySelector('#currentNum')
const historic = document.querySelector('#historic')

const firstMember = {
    Number: "",
    Islocked: false
}

const Operator = {
    Operation: "",
    Islocked: false
}

const secondMember = {
    Number: "",
    Islocked: true
}

const memResult = {
    firstMem: [],
    operatorMem: [],
    secondMem: [],
    Number: [],
    Islocked: true
}

function start() {
    addValueToNumButton()
    addFunctionToOperationalButton()
}

function addValueToNumButton() {

    const btnDel = document.querySelector('#Del')
    btnDel.addEventListener('click', function(){

        if(firstMember.Islocked === false) { 
            let Num = firstMember.Number.split("")
            Num.pop()
            Num = Num.join()
            firstMember.Number = Num.replace(/,/g, '')
            
        } else if (secondMember.Islocked === false) {
            let Num = secondMember.Number.split("")
            Num.pop()
            Num = Num.join()
            secondMember.Number = Num.replace(/,/g, '')  
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
    plusButton.addEventListener('click', function(){addOperator("+")})

    const minusButton = document.querySelector('#minus')
    minusButton.addEventListener('click', function(){addOperator("-") })

    const multiplyButton = document.querySelector('#multiply')
    multiplyButton.addEventListener('click', function(){addOperator("*") })

    const divideButton = document.querySelector('#divide')
    divideButton.addEventListener('click', function(){addOperator("/") })

    const percentageButton = document.querySelector('#percentage')
    percentageButton.addEventListener('click', function(){addOperator("%") })

    const expoButton = document.querySelector('#exponenciation')
    expoButton.addEventListener('click', function(){addOperator("**")})

    const equalsButton = document.querySelector('#equals')
    equalsButton.addEventListener('click', function(){addEqualsToOperator() })
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
    if(opr === "+"){result = mem1 + mem2}
    else if(opr === "-") {result = mem1 - mem2}
    else if(opr === "*") {result = mem1 * mem2}
    else if(opr === "/") {result = mem1 / mem2}
    else if (opr === "%") {result = (mem1/100) * mem2}
    else if (opr === "**") {result = mem1 ** mem2}
    else if (opr === "") {}
    
    if(result != 0){memResult.Number.unshift(`${result}`); 
    memResult.firstMem.unshift(`${mem1}`); 
    memResult.secondMem.unshift(`${mem2}`);
    memResult.operatorMem.unshift(`${opr}`)}
    screen.innerHTML = memResult.Number[0]
    console.log(memResult)
    renderOperationHistoric(memResult)

    firstMember.Islocked = false
    firstMember.Number = `${memResult.Number[0]}`
    
    secondMember.Islocked = true
    secondMember.Number = ""
    
    Operator.Islocked = false
    Operator.Operation = ""

    console.log(firstMember)
    console.log(secondMember)
    
}

function renderOperationInScreen() {
    let firstmem = firstMember.Number
    let secondmem = secondMember.Number
    if(firstMember.Islocked === false) {screen.innerHTML = firstmem} 
    else if (secondMember.Islocked === false) {screen.innerHTML = secondmem}

}

function renderOperationHistoric(obj) {

    historic.innerHTML = `${obj.firstMem[0]} ${obj.operatorMem[0]} ${obj.secondMem[0]} `

}
start()