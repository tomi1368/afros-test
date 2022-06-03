import react, {useState} from "react"
import passwordValidator from "../../../../exercise3"
import Validations from "./component/Validations"
import errObj from "./mock/initialValue"
import "./Exercise5.css"
const Exercise5 = ()=>{
    const [password,setPassword] = useState({value:"",errors:errObj.err})
    const handlerPassword = (e)=>{
        passwordValidator(e.target.value,setPassword)
    }
    return(
        <form className="form">
            <h3>Password</h3>
            <input className="password" placeholder="Enter password..." value={password.value} type="password" name="password" onChange={handlerPassword} />
            <Validations errors={password.errors}/>
        </form>
    )
}

export default Exercise5