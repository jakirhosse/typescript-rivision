{

        const createArray = <T>(param: T) : T[]=> {
            return [param]
        }
    
        const createMultiElementArray = <T, Q>(num1: T, num2: Q): [T, Q] => {
            return [num1, num2];
        }
        const arr1 = createArray<string>("string")
        const arr2 = createMultiElementArray<string, number>("bro", 8)
    
        type User = {
            name: string;
            age: number
        }
        const arr3 = createMultiElementArray<string, User>("bro", {name: 'Most', age: 65})
    }

    