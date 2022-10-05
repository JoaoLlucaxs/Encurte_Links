import React from 'react'
import * as C from './style'
import {FiLink} from 'react-icons/fi'
import LinkLogos from '../../component/links'
import { useState } from 'react'
import Modal from '../../component/Modal'
import api from '../../axios/api'
import {linkSave} from '../../storage'

function Home() {
  const[links,setLinks]=useState('')
  const[modal,setModal]=useState(false)
  const[data,setData]=useState({})
 

  async function clickLink(e){
   
   try{
    e.preventDefault()
    const response=await api.post('/shorten',{
      long_url:links
    })
    setData(response.data)
    setModal(true)
    linkSave('@linkcurtos',response.data)
    setLinks('')

   }catch{
    alert('Ops ocorreu um erro')
    setLinks('')
   }
  }

    return (
      <C.Container>
        <C.Home>
          <FiLink size={50}/>
            <h1>Encurta Link</h1>
            <span>Cole seu Link e encurta de um jeito fácil!!</span>
        </C.Home>

        <C.Form>
          <div>
            <FiLink size={25}/>
            <C.Input placeholder='Digite seu Link...'
            value={links}
            onChange={(e)=>setLinks(e.target.value)}></C.Input>
          </div>

          <C.Button onClick={clickLink}>Encurtar Link</C.Button>
        </C.Form>


        <LinkLogos/>
        {modal && (
           <Modal
           modalClose={()=>setModal(false)}
           content={data}/>
        )}
      </C.Container>
    )
  }
  
  export default Home
  