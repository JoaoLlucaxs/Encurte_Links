import React from 'react'
import {FiX,FiClipboard} from 'react-icons/fi'
import * as C from './style'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Modal({modalClose,content}){

    async function copyClipboard(){
        await navigator.clipboard.writeText(content.link)

        toast('Copiado com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return(
       <C.modalContainer>
        <C.modalHeader>
            <h2>Link Encurtado</h2>
            <button onClick={modalClose}>
                <FiX size={28} color='#222'/>
            </button>
        </C.modalHeader>
        <span>{content.long_url}
        </span>

        <C.Button onClick={copyClipboard}>
           {content.link}
            <FiClipboard size={20} color="#222"/>
        </C.Button>
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
       </C.modalContainer>
    )
}