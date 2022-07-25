

const Form = ({handleChange, usuario, handleSubmit }) => {
    //destructuring usuario.
    const {nombre, apellido, tel, email, confirmar_email} = usuario;
    return (
        <form onSubmit = {handleSubmit} action="">
            <input
                className='form-input' 
                onChange={handleChange} 
                placeholder="nombre..." 
                type="text" 
                id="nombre" 
                value={nombre}
            />
            <input 
                className='form-input'
                onChange={handleChange} 
                placeholder="apellido..." 
                type="text" 
                id="apellido" 
                value={apellido}
            />
            <input
                className='form-input'
                onChange={handleChange} 
                placeholder="tel..." 
                type="number" id="tel" 
                value={tel}
            />
            <input 
                className='form-input'
                onChange={handleChange}  
                placeholder="email..." 
                type="email" 
                id="email" 
                value={email}
            />
            <input
                className='form-input'
                onChange={handleChange}  
                placeholder="confirmar email..." 
                type="email" 
                id="confirmar_email" 
                value={confirmar_email}
            />
            { nombre && apellido && tel && email && confirmar_email && (email === confirmar_email) ?
            <button type="submit">Proceder al Pago</button>
            : 
            <button type="submit" disabled> Proceder al Pago</button>
        }
        </form>
    )
}

export default Form;