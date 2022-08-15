import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { URL } from '../../contants/contants'
import { DivInfo, DivIcon, ImgPerfil, DivImg, DivNome, DivBio, BotaoLike, BotaoDislike, DivPerfil, DivPrincipal, DivBotoes, DivInfos, DivMatches } from './styled'
import Swal from 'sweetalert2'
import cancel from '../../assets/cancelar.png'

export default function Perfil() {
    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        GetProfileToChoose()
    }, [])

    const GetProfileToChoose = () => {
        axios.get(
            `${URL}/person`
        ).then((resposta) => {
            setPerfil(resposta.data.profile)
        }).catch((erro) => {
            alert(erro.response)
        })
    }
    const ChoosePerson = (id, choice) => {
        const body = {
            "id": id,
            "choice": choice
        }
        axios.post(
            `${URL}/choose-person`,
            body, {
            headers: {
                "Content-Type": "application/json",
            }
        }
        ).then((resposta) => {
            if (resposta.data.isMatch) {
                Swal.fire({
                    title: "Deu Match 💕",
                    text: "Verifique seus matches",
                    showConfirmButton: false,
                    timer: 1200,
                })
            }
            GetProfileToChoose()
        }).catch((erro) => {
            alert("Ocorreu um erro, tente novamente", erro.response)
        })
    }
    const Clear = () => {
        axios.put(
            `${URL}/clear`
        ).then((resposta) => {
            Swal.fire({
                title: "Perfis resetados com sucesso!",
                showConfirmButton: false,
                timer: 1000,
            })
            GetProfileToChoose()
        }).catch((erro) => {
            alert("OCorreu um erro, tente novamente", erro.response)
        })
    }
    return (
        <DivPrincipal>
            {perfil ? (
                <DivPerfil key={perfil.id}>
                    <DivImg >
                        <ImgPerfil
                            alt={perfil.photo_alt}
                            src={perfil.photo}
                        />
                    </DivImg>
                    <DivInfos>
                        <DivNome>
                            <DivIcon>

                            </DivIcon>
                            <DivInfo>
                                <h4> <h2>{perfil.name}, {perfil.age}</h2></h4>
                            </DivInfo>
                        </DivNome>
                        <DivBio>
                            <DivIcon>

                            </DivIcon>
                            <DivInfo>
                                <h5> {perfil.bio}</h5>
                            </DivInfo>
                        </DivBio>
                    </DivInfos>
                    <DivBotoes>
                        <div>
                            <BotaoDislike
                                onClick={() => ChoosePerson(perfil.id, false)}
                            ><img src={cancel} alt="a" /></BotaoDislike>
                        </div>
                        <div>
                            <BotaoLike
                                onClick={() => ChoosePerson(perfil.id, true)}
                            ><img src="https://cdn-icons-png.flaticon.com/512/7347/7347090.png" /></BotaoLike>
                        </div>
                    </DivBotoes>
                </DivPerfil>
            )
                :
                (
                    <DivMatches>
                        <h3>Você já viu todos os perfis 😊</h3>
                        <h4>Clique no botão abaixo para recomeçar</h4>
                        <button
                            onClick={Clear}
                        ><img src="https://cdn-icons-png.flaticon.com/512/6076/6076370.png" /> </button>
                    </DivMatches>
                )
            }


        </DivPrincipal>
    )
}
