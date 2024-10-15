{

        type Area = {
            height: number;
            width: string
        }
    
        // making number to string using mapp 
        type AreaString = {
            [index in keyof Area] : string
        }
    
        // look up type 
        type Height = Area['height']
    
        // generic types with mapp
    
        type Area2<T> = {
            [key in keyof T] : T[key]
        };
        
    const area: Area2<{ height: string;  width: string}> = {
        height: '23',
        width: '45'
        }
    
    }