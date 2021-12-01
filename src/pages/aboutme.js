import React from 'react'
import * as S from "../Components/Syle_About/styles"
import GlobalStyle from '../Components/GlobalStyles/global.js'
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
                }
            }
        }
    
    
    
    `)

    const {

        sutitlesobremim,
        myperfilphotograph,
        titlesobremim,

    } = data.alldata.sobremims[0]
    return (
        <div>
            <GlobalStyle />
            <S.SectionWaves>


                <svg className="BoxWaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 314">
                    <path className="Wave3" fill="#0099ff" fill-opacity="1" d="M0,288L40,288C80,288,160,288,240,256C320,224,400,160,480,160C560,160,640,224,720,229.3C800,235,880,181,960,138.7C1040,96,1120,64,1200,74.7C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    <path className="Wave2" fill="#0099ff" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,53.3C320,43,400,53,480,85.3C560,117,640,171,720,160C800,149,880,75,960,74.7C1040,75,1120,149,1200,176C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    <path className="Wave1" fill="#7f99f8" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,117.3C480,149,600,235,720,245.3C840,256,960,192,1080,154.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                   
                </svg>
            </S.SectionWaves>
            <S.SectionAboutMe>

            </S.SectionAboutMe>
        </div>
    )
}
