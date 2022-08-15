import styled from "styled-components";


export const DivPrincipal = styled.div`
    position: fixed;
    top: 80px;
    width: 100%;
`
export const DivPerfil = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 100%;
    
`
export const DivInfos = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const DivImg = styled.div`
    position: fixed;
    width: 100%;
    height: 68%;
    background-color: white;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    `
export const ImgPerfil = styled.img`
    top: 20px;
    opacity: 98%;
    box-shadow: inset 1px -7em 8px black;
    
    width: 100%;
    height:100%;
    border-top: solid gray 1px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
`
export const DivNome = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    width: 100%;
    height: 45px;
    border-bottom: solid gray 1px;
`
export const DivIcon = styled.div`
    padding: 10px;
`
export const DivInfo = styled.div`
    color:  white;
    position: fixed;
    margin-top: 140%;
    padding-left: 10px;
    width: 100%;
`
export const DivBio = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    width: 100%;
    height: 59px;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;   
    border-bottom-right-radius: 10px;

`
export const DivBotoes = styled.div`
    display: grid;
    position: fixed;
    bottom: 20px;
    grid-template-columns: 50% 50%;
    gap: 10px;
    width: 100%;
    justify-items: center;
`

export const BotaoLike = styled.button`
    position: static;
    align-self: center;
    border-radius: 50%;
    position: static;
    border: 0;
    background-color: #f3fffd;
    font-size: 20px;
    transition: 0.3s;
    cursor: pointer;
    img{
        width: 60px;
        position: fixed;
        transition: 0.3s;
        border-radius:50%;
        bottom: 20px;
        right: 50px;
        bottom: 20px;
        &:hover {
        transition: 0.3s;
        box-shadow: 1px 1px 6px #6ff5e4;
        width: 70px;
        bottom: 15px;
        right: 45px;
    };
    }
`
export const BotaoDislike = styled.button`
    border-radius: 50%;
    position: static;
    border: 0;
    background-color: #811cb8;
    font-size: 20px;
    transition: 0.3s;
    cursor: pointer;
    img{
        width: 60px;
        position: fixed;
        transition: 0.3s;
        border-radius:50%;
        bottom: 20px;
        left: 60px;
        bottom: 20px;
        &:hover {
        transition: 0.3s;
        box-shadow: 1px 1px 6px #811cb8;
        width: 70px;
        bottom: 15px;
        left: 55px;
    };
    }
`
export const DivMatches = styled.div`
    background-color: white;
    width: 100%;
    height: 440px;
    display: grid;
    justify-content: center;
    align-items: center;
    border: solid gray 1px;
    border-radius: 10px;

    img{
        position: absolute;
        right: 45%;
        bottom: 10%;
        border-radius:50%;
        width: 50px;
        &:hover{
            width: 55px;
            box-shadow: 1px 1px 6px #811cb8;

        }
    }
    button{
        border: 0;
        background-color: transparent;
        cursor: pointer;
    }
`