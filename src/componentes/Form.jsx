import React from 'react'

const Form = ({props}) => {

    const handleSubmit = (e)=> {
        e.preventDefault();
        const userName = e.target.elements.name.value
        const userLastName = e.target.elements.last_name.value
        const userEmail = e.target.elements.email.value
        const userPhone = e.target.elements.phone.value

        console.log(userName, userLastName, userEmail, userPhone);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <input type="text" id="last_name"/>
                </div>
                <div>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <input type="number" id="phone"/>
                </div>
                <button>comprar</button>
            </form>
    )
}

export default Form