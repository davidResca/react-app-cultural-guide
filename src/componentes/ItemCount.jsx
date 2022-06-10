import {useState} from 'react';
import swal from 'sweetalert2';

const ItemCount = (props) => {

    const {stock, initial} = props;

    const [contador, setContador] = useState(initial)

    const aumentarContador = () =>{
        if(contador < stock){
            setContador(contador + 1);
        } else {
            swal.fire({
                text: 'el stock máximo es de:' + stock,
                icon: 'error'
            })
        }
    }

    const disminuirContador = ()=>{
        if(contador >= 1){
            setContador(contador - 1);
        }
    }

    const confirmarContador = ()=>{
        if(contador === 1){
            swal.fire({
                text: 'Se ha agregado: ' + contador + ' producto a su carro',
                icon: 'success'
            })    
        } else if(contador === 0){
            swal.fire({
                text: 'Debes agregar al menos 1 producto si quieres continuar',
                icon: 'error'
            })    
        } else{
            swal.fire({
                text: 'Se han agregado: ' + contador + ' productos a su carro',
                icon: 'success'
            })  
        }
    }
    

    return(
        <div className="contador">
            <button className="btn-cont" onClick={disminuirContador}>-</button>
            <span className="counter">{contador}</span>
            <button className="btn-cont" onClick={aumentarContador}>+</button>
            <button className="btn-confirm" onClick={confirmarContador}>Confirmar</button>

        </div>
    )
}

export default ItemCount;