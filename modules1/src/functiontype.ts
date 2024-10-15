// Normal function 
function add(num1: number, num2: number): number /*this is function return type*/{
        return num1 + num2
    }
    // arrow function 
    const addArrow = (num1:number, num2:number):number=> num1 + num2
    
    const numb: number[] = [2, 4, 6]
    
    const squareNum : number[]= numb.map((ele: number):number=> ele*ele)