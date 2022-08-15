import React from 'react'
import Name from '../../assets/nome.png'
import { DivPrincipal, ButtonStyled } from './styled'

export default function Header2(props) {
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
        ><img src="https://cdn-icons-png.flaticon.com/512/7794/7794439.png" /></ButtonStyled>
      </div>
    </DivPrincipal>
  )
}
