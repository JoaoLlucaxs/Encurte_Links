import React ,{useState,useEffect} from 'react'
import * as L from './style'
import {FiArrowLeft,FiLink,FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {getLinkSave,removeLink} from '../../storage'
import ItemModal from '../../component/Modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LinkS() {
  const[myLink,setMyLink]=useState([])
  const[data,setData]=useState([])
  const[modal,setModal]=useState(false)
  const[message,setMessage]=useState(false)

  useEffect(()=>{
      async function getLink(){
        const resolve=await getLinkSave('@linkcurtos')

        if(resolve.length === 0){
         setMessage(true)
        }
        setMyLink(resolve)
      }
      getLink()
  },[])

  const handleClickModal=(link)=>{
    setData(link)
    setModal(true)
  }

  async function deleteLink(id){
    const response=await removeLink(myLink,id)

    if(response.length === 0){
        setMessage(true)
      }
      setMyLink(response)
  }

    return (
      <L.Linkss>
        <L.Header>
            <Link to='/'>
            <FiArrowLeft size={28} color="#fff"/>
            </Link>
           
            <h1>Meus Links</h1>
        </L.Header> 
        
    {message && (
      <h2 style={{color:'#fff',display:'flex',textAlign:'center',justifyContent:'center'}}>Não Links no momento</h2>
      )}

        {myLink.map(link =>(
          
        <L.Item key={link.id}>
        <L.button onClick={()=>handleClickModal(link)}>
            <FiLink size={19}/>
            {link.long_url}
            </L.button>

            <L.buttonDelete onClick={()=>deleteLink(link.id)}>
            <FiTrash size={19} color='#ff5454'/>
            
            </L.buttonDelete>
        </L.Item>
        
        ))}

      {modal && (
        <ItemModal modalClose={()=>setModal(false)}
        content={data}/>
      )}
       
       <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
/>
<ToastContainer />
      </L.Linkss>
      
    )
  }
  
  export default LinkS