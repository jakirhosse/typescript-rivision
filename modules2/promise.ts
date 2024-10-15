{

        // creating promise 
        const createPromise = () : Promise<string> => {
            const something = new Promise<string>((resolve, reject) => {
                const data : string = 'something';
                if (data) {
                    resolve(data)
                } else {
                    reject('failed something')
                }
            })
            return something
        }
    
        // calling the promise 
        const promiseData = async (): Promise<string> => {
            const data = await createPromise()
            return data
        }
    
        promiseData()
    
    
    }