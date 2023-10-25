import { useContext, useState } from 'react';
import { authContext} from '../context/authContext'

 const Transaccion = () => {

  const [description,setDescription] = useState()
  const [monto,setMonto] = useState(0)

  const {addTransaccion} = useContext(authContext);

  const onSubmit = (e) =>{
   e.preventDefault ()
   addTransaccion({
    id: 1,
    description,
    monto
   })
  
    }

 
      return (
    <div style={{color:'white'}}>Transaccion
    <form onSubmit={onSubmit}>
      <input type = "text" placeholder='Ingresa una descripcion'
      onChange={(e)=> setDescription(e.target.value)} />
      <input type = "number" placeholder='00.00' step='0.01'
       onChange={(e)=> setMonto(e.target.value)}/>
      <button>Añade una transaccion</button>
    </form>
    </div>
  )
}

export default Transaccion