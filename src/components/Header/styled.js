import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`
export const ButtonStyled = styled.button`
    position: fixed;
    top: 25px;
    right: 30px;
    border: 0;
    background-color: transparent;

    img{
        width: 35px;
        transition: 0.3s;
        &:hover{
            width: 40px;
            transition: 0.3s;
    }
    }
    cursor: pointer;
    
`