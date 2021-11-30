import React from 'react'
import * as S from "./styles"
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
        projectcrespos,
        projectrecipes,
        titleprojectcathouse,
        titleprojectcrespos,
        titleprojectrecipes,
        titleprojects,
        titleprojecttaxi,

    } = data.alldata.mains[0]


    return (
        <S.Main>
          <S.SectionCards>
            <S.BoxIMGCard className="EfectScaleDwon" back={projectaxi.url}>
              
            </S.BoxIMGCard>
            <S.BoxIMGCard back={projectcathouse.url}>
              
            </S.BoxIMGCard>
            <S.BoxIMGCard back={projectrecipes.url}>
              
            </S.BoxIMGCard>
            <S.BoxIMGCard back={projectcrespos.url}>
              
            </S.BoxIMGCard>
          </S.SectionCards>
          <S.BoxTitleProject>
              <p>{titleprojects}</p>
          </S.BoxTitleProject>
        </S.Main>
    )
}
