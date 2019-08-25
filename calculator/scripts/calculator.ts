class Calculator {
    private firstNum = 0;
    private secondNum = 0;
    private operator = "+";
    private output : HTMLSpanElement;
    private first = true;

    constructor(outputId: string) {
        this.output = <HTMLSpanElement>document.getElementById(outputId);
        this.output.innerHTML = " "
        this.wireEvents();
    }

    getValue(num: number) {
        if (this.first) {
            return this.firstNum = this.firstNum * 10 + num;
        } else {
            return this.secondNum = this.secondNum * 10 + num;
        }
    }

    wireEvents() {
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (let n of nums) {
            let btn = 'button'+n;
            document.getElementById(btn).addEventListener('click',
                event => {
                    this.output.innerHTML = this.getValue(n).toString()
                });
        }

        document.getElementById('add').addEventListener('click',
            event => {
                this.operator="+"
                this.first=false
            });
        document.getElementById('subtract').addEventListener('click',
            event => {
                this.operator="-"
                this.first=false
            });
        document.getElementById('multiply').addEventListener('click',
            event => {
                this.operator="x"
                this.first=false
            });
        document.getElementById('divide').addEventListener('click',
            event => {
                this.operator="/"
                this.first=false
            });
        document.getElementById('equal').addEventListener('click',
            event => {
                this.output.innerHTML = this.equal().toString()
            });
        document.getElementById('clear').addEventListener('click',
            event => {
                this.output.innerHTML = this.clear().toString()
            });
    }

    add() {
        return this.firstNum + this.secondNum;
    }

    subtract() {
        return this.firstNum - this.secondNum;
    }

    multiply() {
        return this.firstNum * this.secondNum;
    }

    divide() {
        if (this.secondNum === 0) {
            return "NaN";
        }
        return this.firstNum / this.secondNum;
    }

    equal() {
        switch (this.operator) {
            case "-" :
                return this.subtract();
            case "x" :
                return this.multiply();
            case "/" :
                return this.divide();
            default :
                return this.add();
        }
    }

    clear() {
        this.firstNum=0
        this.secondNum=0
        this.operator="+"
        return " "
    }
}

window.onload = function () {
    var calc = new Calculator('Output');
};




