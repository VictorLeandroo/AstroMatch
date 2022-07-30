import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { DivPrincipal, DivPerfil, DivImg, Img } from './styled'

export default function Matches() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        GetMatches()
    }, [])

    const GetMatches = () => {
        axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-eleuterio-alves/matches"
        ).then((resposta) => {
            setMatches(resposta.data.matches)
        }).catch((erro) => {
            alert(erro.response)
        })
    }
    return (
        <DivPrincipal>
            {matches.map((match) => {
                if (matches == []) {
                    return (
                        <div>
                            <h2>Você ainda não tem matches</h2>
                        </div>
                    )
                } else {
                    return (
                        <DivPerfil key={match.id}>
                            <DivImg>
                                <Img

                                    src={match.photo}
                                />
                            </DivImg>
                            <div>
                                {match.name}
                            </div>
                        </DivPerfil>
                    )
                }
            })}
        </DivPrincipal>
    )
}
