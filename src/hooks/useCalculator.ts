import { useState } from 'react'
// import {}
const useCalculator = () => {

    const [result, setResult] = useState<any>(0)
    const [number, setNumber] = useState<any>('')
    const [ operations , setOperations] = useState<any>([])

    let currentOperations = [
        '+',
        '-',
        '*',
        '/',
    ]

    const handleSetValue = (e: CustomEvent) => {
        setNumber(e.detail.value || '')
    }
    
    const onDelegateTarget = (event: React.MouseEvent<HTMLIonButtonElement>) => { 

        
        const target = event.currentTarget as HTMLIonButtonElement;
        const action = target.getAttribute("data-symbol");
        
        
        if( currentOperations.includes(action!) && !number ){
            if( currentOperations.includes(operations[operations.length - 1]) )
                {
                    let copy = operations
                    copy.pop()
                    debugger
                    setOperations([...copy, action])
                }
        }
        

        if( action === 'ce' ){
            setNumber('')
            setResult('')
            setOperations([])
            return
        }
        
        let newOperations = [...operations, number, action].filter( (value:any) => value !== '' )

        setOperations(newOperations)
        
        setNumber('')
        
        if( action === "=" ){
            showResult(newOperations)
        }


    }

    const showResult = (operations:string[]) => {

        const elements = operations
            .filter( (value:any) => value !== '' )
            .filter( (value:any) => value !== '=' )
        

        if( currentOperations.includes(elements[elements.length - 1]) )
        {
            elements.pop()
        }

        let str = elements.join(' ')

        const res = eval(str)

        setResult(res)
        setNumber(res)
        setOperations([])

    }
  
    return {
        number,
        result,
        handleSetValue,
        onDelegateTarget,
        operations,
        operationsShow: operations.filter( (op:string) => op !== '=' ).map( (op:string) => {
            if( op === '*' ) return 'x'
            if( op === '/' ) return '÷'
            return op
        })
    }
}

export default useCalculator