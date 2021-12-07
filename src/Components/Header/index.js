import React from 'react'
import * as S from "./styles"
import { graphql , useStaticQuery } from "gatsby"

export function Header() {

    const data = useStaticQuery(graphql`
        query{
            alldata{
                headers {
                    subtitlepais
                    github {
                      url
                    }
                    linkedin {
                      url
                    }
                    backgroundheader {
                        url
                      }
                    titledavid
                    titlegithub
                    titlelinkedin
                    perfil {
                      url
                    }
                }
            }
        }
    `)


    const {
        subtitlepais,
        github,
        linkedin,
        perfil,
        titledavid,
        titlegithub,
        titlelinkedin,
        backgroundheader,


    } = data.alldata.headers[0]
    return (
        <S.Header back={backgroundheader.url}>
            <S.Container >
                <S.BoxPerfil>
                    <S.BoxImG>
                        <img style={{width:'100%' , height:'127%'}} src={perfil.url} alt="imagem de perfil"/>
                    </S.BoxImG>
                    <S.BoxMyName>
                        <h1>{titledavid}</h1>
                    </S.BoxMyName>
                </S.BoxPerfil>
                <S.BoxPais>
                    <p>{subtitlepais}</p>
                </S.BoxPais>
                <S.BoxNav>
                    <S.BoxGitHub>
                        <a href="https://github.com/davidgomes27" target="_blank"><img style={{width:'100%' , height:'100%'}} src={github.url}/></a>
                    </S.BoxGitHub>
                    <S.BoxLinkedin>
                        <a href="https://www.linkedin.com/in/gomesdavidsilva/" target="_blank"><img style={{width:'100%' , height:'100%'}} src={linkedin.url}/></a>
                    </S.BoxLinkedin>
                </S.BoxNav>
            </S.Container>
        </S.Header>
    )
}
