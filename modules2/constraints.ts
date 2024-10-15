{

        // constraints
        // T extends version are constraints, that mean i force to this function that this object must have inside when i call this function 
        const addToCourseStudent = <T extends { id: number; name: string;  email: string}>(student: T) => {
            const course = "Next dev"
            return {
                ...student,
                course
            }
        }
    
    
        const student2 = addToCourseStudent({
            id: 422,
            name: 'mr-y',
            email: 'y@gmail.com',
            emni: 'emni'
        })
        const student1 = addToCourseStudent < { id: number; name: string;  email: string}>({
            id: 322,
            name: 'mr.x',
            email: 'x@gmail.com'
        })
    }