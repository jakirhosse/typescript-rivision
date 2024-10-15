{

        type GenericArray<T> = Array<T>
        const roll: GenericArray<number>  = [1, 2, 3, 4]
        
        const name: GenericArray<string> = ['mr', 'ms']
    
        type User = {
            name: string;
            age: number;
        }
    
        const user: GenericArray<User> = [
            {
                name: "jhankar",
                age: 12
            },
            {
                name: "jhankar",
                age: 12
            }
        ]
    
    
        // generic tuple
    
        type GenericTuple<X,Y> = [X,Y]
    
        const bros: GenericTuple<string, string> = ['Mr', "Ms"]
        
        const userWithId : GenericTuple<number, {user: string, age: number}> = [
            1234, {user: "Name", age: 23}
        ]
    }