class Calculator {
    constructor() {
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendDigit(digit) {
        if (digit === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += digit;
        this.updateDisplay();
    }

    appendDecimal(decimal) {
        if (this.currentOperand === '') {
            this.currentOperand = '0' + decimal;
        } else if (!this.currentOperand.includes('.')) {
            this.currentOperand += decimal;
        }
        this.updateDisplay();
    }

    setOperator(operator) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operation = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculate() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.updateDisplay();
    }

    updateDisplay() {
        document.getElementById('display').value = this.currentOperand;
    }
}

// Create an instance of Calculator
const calculator = new Calculator();