import react from "react"

const Validations = ({errors})=>{
    console.log(errors)
    const validationList = Object.values(errors)
    return(
        validationList.map(elem=>{
            console.log(elem)
            return(
                <div style={{color: `${elem.err ? "red" : "green"}`}}>
                    {elem.message}
                </div>
            )
        })
    )
}

export default Validations