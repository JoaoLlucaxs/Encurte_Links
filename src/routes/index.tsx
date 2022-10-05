import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Link from '../pages/Link'
import Notfound from '../pages/Norfound'

const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/link' element={<Link/>}/>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas