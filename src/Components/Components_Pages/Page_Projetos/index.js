import React from 'react'
import * as S from "./styles"
import GlobalStyle from '../../GlobalStyles/global'
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from "gatsby"

export default function Projetos() {

    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                projetos{
                    imgprojeto5 {
                        url
                    }
                    imgprojeto4 {
                        url
                    }
                    imgprojeto3 {
                        url
                    }
                    imgprojeto2 {
                        url
                    }
                    imgprojeto1 {
                        url
                    }
                    imgbacgroundcodigo {
                        url
                    }
                    subtitleprojectbeatlife
                    subtitleprojectcathouse
                    subtitleprojectcrespos
                    subtitleprojectrecipes
                    subtitleprojetaxi
                    titledesktop
                    titleprojeto1
                    titleprojeto2
                    titleprojeto3
                    titleprojeto4
                    titleprojeto5
                    titleresponsivo
                    titleprojeto
                    setaesquerda {
                        url
                    }
                }
            }
        }
    
    
    `)

    const {

        imgprojeto5,
        imgprojeto4,
        imgprojeto3,
        imgprojeto2,
        imgprojeto1,
        imgbacgroundcodigo,
        subtitleprojectbeatlife,
        subtitleprojectcathouse,
        subtitleprojectcrespos,
        subtitleprojectrecipes,
        subtitleprojetaxi,
        titledesktop,
        titleprojeto1,
        titleprojeto2,
        titleprojeto3,
        titleprojeto4,
        titleprojeto5,
        titleresponsivo,
        titleprojeto,
        setaesquerda

    } = data.alldata.projetos[0]

    return (
        <S.Container>
            <Helmet>
                <title>Projetos</title>
            </Helmet>
            <GlobalStyle />
            <S.Sectiontitleprojeto >
                <S.BoxSetaHome>
                    <Link to="/"><img className="IMG" src={setaesquerda.url} alt="imagem de uma seta para esquerda" /></Link>
                </S.BoxSetaHome>
                <p className="Title">{titleprojeto}</p>
            </S.Sectiontitleprojeto>
            <S.SectionProjetos>
                <S.Boxprojetos>
                    <S.CardProjets className="cardprojetos" background = {imgprojeto1.url}>
                        <S.BoxTitle className="boxtitle">
                            <h2 className="Title">{titleprojeto1}</h2>                        
                        </S.BoxTitle>
                    </S.CardProjets>
                    <S.CardProjets className="cardprojetos" background = {imgprojeto2.url}>
                        <S.BoxTitle className="boxtitle">
                            <h2 className="Title">{titleprojeto2}</h2>
                        </S.BoxTitle>
                    </S.CardProjets>
                    <S.CardProjets className="cardprojetos" background = {imgprojeto3.url}>
                        <S.BoxTitle className="boxtitle">
                            <h2 className="Title">{titleprojeto3}</h2>
                        </S.BoxTitle>
                    </S.CardProjets>
                    <S.CardProjets className="cardprojetos" background = {imgprojeto4.url}>
                        <S.BoxTitle className="boxtitle">
                            <h2 className="Title">{titleprojeto4}</h2>                           
                        </S.BoxTitle>
                    </S.CardProjets>
                    <S.CardProjets className="cardprojetos" background = {imgprojeto5.url}>
                        <S.BoxTitle className="boxtitle">
                            <h2 className="Title">{titleprojeto5}</h2>
                        </S.BoxTitle>
                    </S.CardProjets>
                </S.Boxprojetos>
            </S.SectionProjetos>
        </S.Container>
    )
}
