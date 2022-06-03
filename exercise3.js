import errObj from "./front-exercises/src/components/exercise5/mock/initialValue"
const isNumber = num=> num.charCodeAt(0) >= 48 && num.charCodeAt(0) <= 57
const isLowerCase = char => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
const isUpperCase = char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122
const isSpecialChar = char => !isNumber(char) && !isLowerCase(char) && !isUpperCase(char)
let error = {}
const objMessage = {...errObj.err}

const passwordValidator = (password,setPass)=>{
    const splitPassword = [...password]
    passwordLength(password)
    lengthChars(splitPassword)
    nextCharIsRepeated(splitPassword)
    hasLowerAndUpper(splitPassword)
    hasZeroOrBlanks(splitPassword)
    setPass({errors:error,value:password})
}

const passwordLength = (password)=>{
    
    let passwordError = {
        passwordLength:{
            err:false,
            message:objMessage["passwordLength"].message
        }
    }
    if(password.length < 16) passwordError["passwordLength"].err=true
    error={...error,...passwordError}
} 

const lengthChars = (splitPassword)=>{
    let lengthError = {
        lengthChars:{
            err:false,
            message: objMessage["lengthChars"].message
        }
    }
    if(!splitPassword.filter(char=> isNumber(char)).length < 4 || !splitPassword.filter(char=>isSpecialChar(char)).length < 2 ) lengthError["lengthChars"].err = true
    error={...error,...lengthError}
}

const nextCharIsRepeated = (splitPassword)=>{
    let nextError = {
        nextCharIsRepeated:{
            err:false,
            message: objMessage["nextCharIsRepeated"].message
        }
    }
    for(let i = 0; i<splitPassword.length; i++ ){
        if(i == splitPassword.length - 1) break
        if(splitPassword[i] == splitPassword[i+1]) nextError["nextCharIsRepeated"].err = true
        if(isSpecialChar(splitPassword[i])){
           const repeatSpecialChar =  splitPassword.indexOf(splitPassword[i]) == splitPassword.lastIndexOf(splitPassword[i])
           const nextIsSpecialChar = isSpecialChar(splitPassword[i+1])
           if(!repeatSpecialChar || nextIsSpecialChar ) nextError["nextCharIsRepeated"].err = true
        }
    }
    error={...error,...nextError}
}

const hasLowerAndUpper = (splitPassword)=> {
    let lowerHigher = {
        hasLowerAndUpper:{
            err:false,
            message:objMessage["hasLowerAndUpper"].message
        }
    }
    if(!splitPassword.find(el=> isUpperCase(el) || !splitPassword.find(el=> isLowerCase(el) ) )) lowerHigher["hasLowerAndUpper"].err = true
    error={...error,...lowerHigher}
}

const hasZeroOrBlanks = (splitPassword)=>{
    let hasZeroBlanksError = {
        hasZeroOrBlanks:{
            err:false,
            message:objMessage["hasZeroOrBlanks"].message
        }
    }
    if(splitPassword.includes(" ") || splitPassword.includes("0") ) hasZeroBlanksError["hasZeroOrBlanks"].err = true
    error={...error,...hasZeroBlanksError}
}

export default passwordValidator