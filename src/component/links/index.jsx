import React from 'react'
import * as L from './style'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function LinkLogos(){
    return(
        <L.Icons>
            <L.social href='https://github.com/JoaoLlucaxs'>
                <FaGithub size={24} color='#fff'/>
            </L.social>

            <L.social href='https://www.linkedin.com/in/jo%C3%A3o-lucas-queiroz-aa6313230/'>
                <FaLinkedin size={24} color='#fff'/>
            </L.social>
            <Link to='/link'>Meus Links</Link>
        </L.Icons>
    )
}
