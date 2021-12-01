import React from 'react'
import * as S from "./styles"
import { Link } from 'gatsby'
import {graphql , useStaticQuery} from "gatsby"

export function Footer() {

    const data = useStaticQuery(graphql`

        query{
            alldata{
                footers{
                    titlecopyright
                    titlesobremim
                    imglua {
                      url
                    }
                    imgsol {
                      url
                    }
                }
            }
        }
    
    
    
    
    `)

    const {

        titlecopyright,
        titlesobremim,
        imglua,
        imgsol,

    } = data.alldata.footers[0]
    return (
        <S.Footer>
            <S.BoxSobreMim>
                <S.BoxTitle>
                    <Link to="/aboutme" className="TitleSobreMIM">{titlesobremim}</Link>
                </S.BoxTitle>
                <div>
                    
                </div>
            </S.BoxSobreMim>
            <S.BoxCopyHight>
                    <p className="CopyHight">{titlecopyright}</p>
            </S.BoxCopyHight>

        </S.Footer>
    )
}
