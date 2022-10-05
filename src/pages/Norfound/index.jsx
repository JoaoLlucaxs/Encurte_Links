import React from 'react'
import * as C from './style'
import {Link} from 'react-router-dom'


export default function Notfound(){
    return(
        <>
          <C.Container>
          <h1>Página não encontrada</h1>
          <Link to='/'>Voltar a página home</Link>
      </C.Container>
        </>
      
    )
}