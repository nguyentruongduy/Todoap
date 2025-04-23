export default function logger (reducer) {
    return (prevstate,action,args) => {

        console.group(action)
        console.log('Prev stage:',prevstate)
        console.log('Action arguments:',args)

        const nextStage = reducer(prevstate,action,args)
        console.log('Next stage:',nextStage)
        console.groupEnd()
        return nextStage
    }
}