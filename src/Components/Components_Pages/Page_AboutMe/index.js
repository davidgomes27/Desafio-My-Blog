import React from 'react'
import * as S from "./styles"
import GlobalStyle from '../../GlobalStyles/global'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"


export default function Aboutme() {

    const data = useStaticQuery(graphql`
        
        query{
            alldata{
                sobremims{
                    sutitlesobremim
                    myperfilphotograph {
                        url
                    }
                    titlesobremim
                    text1
                    text2
                    text3
                    text4
                    titlemyname
                    imgseta1 {
                        url
                    }
                    imgseta2 {
                        url
                    }
                }
            }
        }
    
    
    
    `)

    const {

        titlesobremim,
        text1,
        text2,
        text3,
        text4,
        titlemyname,
        imgseta2,

    } = data.alldata.sobremims[0]
    return (
        <div>
            <Helmet>
                <title>Sobre Mim</title>
            </Helmet>
            <GlobalStyle />
            <S.SectionWaves>
                <S.BoxSeta>
                   <Link to="/"> <img className="IMGSETA" src={imgseta2.url} alt="imagem de uma seta para esquerda"/></Link>
                </S.BoxSeta>
                <S.BoxTitle>
                    <h1 className="Title_About_Me">{titlesobremim}</h1>
                </S.BoxTitle>

                <svg className="BoxWaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 314">
                    <path className="Wave3" fill="#00FFFF" fill-opacity="1" d="M0,288L40,288C80,288,160,288,240,256C320,224,400,160,480,160C560,160,640,224,720,229.3C800,235,880,181,960,138.7C1040,96,1120,64,1200,74.7C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    <path className="Wave2" fill="#1E90FF" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,122.7C384,96,480,64,576,69.3C672,75,768,117,864,160C960,203,1056,245,1152,266.7C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path className="Wave1" fill="#00BFFF" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,117.3C480,149,600,235,720,245.3C840,256,960,192,1080,154.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </S.SectionWaves>
            <S.SectionAboutMe>
                <S.BoxContainerAboutMe>
                    <S.BoxAboutMe>
                        <S.Text className="text-1">{text1}</S.Text>
                        <S.Text className="text-1">{text2}</S.Text>
                        <S.Text className="text-1">{text3}</S.Text>
                        <S.Text className="text-1">{text4}</S.Text>
                        <S.Text className="ASS">{titlemyname}</S.Text>
                    </S.BoxAboutMe>
                </S.BoxContainerAboutMe>
            </S.SectionAboutMe>
        </div>
    )
}
