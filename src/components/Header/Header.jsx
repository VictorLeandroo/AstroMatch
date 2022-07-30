import React from 'react'
import Name from '../../assets/nome.png'
import { DivPrincipal, ButtonStyled } from './styled'

export default function Header(props) {
  return (
    <DivPrincipal>
      <div>
        <img 
        src={Name}
        />
      </div>
      <div>
        <ButtonStyled
          onClick={props.mudarTela}
        ><img src='https://cdn-icons-png.flaticon.com/512/1029/1029183.png'/></ButtonStyled>
      </div>
    </DivPrincipal>
  )
}
