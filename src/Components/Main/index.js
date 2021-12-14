import React from 'react'
import * as S from "./styles"
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"

export function Main() {

  const data = useStaticQuery(graphql`
    
        query{
            alldata{
                mains{
                    projectaxi {
                        url
                      }
                      projectcathouse {
                        url
                      }
                      projectcrespos {
                        url
                      }
                      titleprojectcathouse
                      titleprojectcrespos
                      titleprojectrecipes
                      titleprojects
                      titleprojecttaxi
                      projectrecipes {
                        url
                      }
                }
            }
        }
    
    
    `)


  const {
    
    projectaxi,
    projectcathouse,
    projectrecipes,
    titleprojects,
    
  } = data.alldata.mains[0]


  return (
    <S.Main>
      <S.SectionCards>
        <S.BoxIMGCard back={projectcathouse.url}>

        </S.BoxIMGCard>
        <S.BoxIMGCard  back={projectaxi.url}>

        </S.BoxIMGCard>
        <S.BoxIMGCard  back={projectrecipes.url}>

        </S.BoxIMGCard>
      </S.SectionCards>
      <S.BoxTitleProject>
        <Link className="Link" to="/projetos"><p>{titleprojects}</p></Link>
      </S.BoxTitleProject>
    </S.Main>
  )
}
