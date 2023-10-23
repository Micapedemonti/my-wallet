import { useContext } from 'react';
import { authContext} from '../context/authContext'

 const Balance = () => {

    const Context = useContext(authContext);
    console.log(Context.total)
    
      return (
    <div style={{color:'white'}}>Transaccion
        {JSON.stringify(Context.total)}
    </div>
  )
}

export default Balance