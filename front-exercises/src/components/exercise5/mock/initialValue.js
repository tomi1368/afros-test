import passwordMessages from "./errorMessage";

let errObj = {}
const messageMapped = Object.entries(passwordMessages).map(item=>{
    return {
        [item[0]] : {
            err:true,
            message:item[1]
        }
    }
})




Object.values(messageMapped).forEach(el=>{
    errObj={
        err:{
            ...errObj.err,
            ...el
        }
    }
})



export default errObj
