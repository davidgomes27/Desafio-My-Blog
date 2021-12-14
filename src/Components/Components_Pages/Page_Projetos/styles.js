import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: #1C1C1C;
`

export const Sectiontitleprojeto = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${prop => prop.back});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
    .Title{
        
        font-family: 'Montserrat', sans-serif;
        font-size: max(25px, 3vw);
        color: #FFFFFF;
        text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
    }
`
export const Boxtitleprojeto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1690px;
    padding: 18rem 0;
    position: relative;
    


`
export const BoxSetaHome = styled.div`
    width: 2rem;
    height: 1.700rem;
    position: absolute;
    top: 2rem;
    left: 1rem;


    .IMG{
        width: 100%;
        height: 100%;
    }

`

export const SectionProjetos =styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #A9A9A9;
    padding: 4rem 0;
`

export const Boxprojetos =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 80%;
    max-width: 1690px;
`



export const CardProjets = styled.div`
    width: 18rem;
    height: 20rem;
    background-image: url(${prop => prop.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    animation: borderradiusreverse 0.500s ease-in-out forwards;
    -webkit-box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.75);


    &:hover{
        animation: borderradius 0.500s ease-in-out forwards;
    }

    @keyframes borderradius{
        from{
            border-radius: 0px;
        }
        to{
            border-radius: 20px 20px 0px 0px;
        }
    }

    @keyframes borderradiusreverse {
        from{
            border-radius: 20px 20px 0px 0px;
        }
        to{
            border-radius: 0px;
        }
    }

    .boxtitle1{
        background-color: #ddb3c2;
        animation: tranparentoff1 0.500s ease-in-out forwards;
    }

    .boxtitle2{
        gap: 0.200rem;
        background-color: #9767a9;
        animation: tranparentoff2 0.500s ease-in-out forwards;
    }

    .boxtitle3{
        background-color: #dfe4de;
        animation: tranparentoff3 0.500s ease-in-out forwards;
    }

    .boxtitle4{
        background-color: #ffce3a;
        animation: tranparentoff4 0.500s ease-in-out forwards;
    }

    .boxtitle5{
        background-color: #02b4b4;
        animation: tranparentoff5 0.500s ease-in-out forwards;
    }

   &:hover .boxtitle1{
       color: #fff;
       animation: backanimation1 0.500s ease-in-out forwards;
   }

   &:hover .boxtitle2{
       color: #fff;
       animation: backanimation2 0.500s ease-in-out forwards;
   }

   &:hover .boxtitle3{
        white-space: nowrap;
       color: #fff;
       animation: backanimation3 0.500s ease-in-out forwards;
       
   }

   &:hover .boxtitle4{
        white-space: nowrap;
       color: #fff;
       animation: backanimation4 0.500s ease-in-out forwards;
       
   }

   &:hover .boxtitle5{
        white-space: nowrap;
       color: #fff;
       animation: backanimation5 0.500s ease-in-out forwards;
       
   }


   
   @keyframes tranparentoff1 {
       from{
        color: #fff;
        height: 5rem;
       }
       to{
        color: transparent;
        height: 0rem;
       }
   }

   @keyframes tranparentoff2 {
       from{
        color: #fff;
        height: 5rem;
       }
       to{
        color: transparent;
        height: 0.100rem;
       }
   }

   @keyframes tranparentoff3 {
       from{
        color: #fff;
        width: 100%;
       }
       to{
        color: transparent;
        width: 0%;
       }
   }

   @keyframes tranparentoff4 {
       from{
        color: #fff;
        width: 100%;
       }
       to{
        color: transparent;
        width: 0%;
       }
   }

   @keyframes tranparentoff5 {
       from{
        color: #fff;
        width: 100%;
       }
       to{
        color: transparent;
        width: 0%;
       }
   }

    @keyframes backanimation1 {
        from{
            height: 0rem;
            color: transparent;
        }
        to{
            color: #fff;
            height: 5rem;
        }
    }

    @keyframes backanimation2 {
        from{
            height: 0.100rem;
            color: transparent;
        }
        to{
            color: #fff;
            height: 5rem;
        }
    }

    @keyframes backanimation3 {
        from{
            height: 0rem;
            color: transparent;
        }
        to{
            height: 5rem;
            color: #fff;
        }
    }

    @keyframes backanimation4 {
        from{
            height: 0.100rem;
            color: transparent;
        }
        to{
            height: 5rem;
            color: #fff;
        }
            
    }

    @keyframes backanimation5 {
        from{
            height: 0.100rem;
            color: transparent;
        }
        to{
            color: #fff;
            height: 5rem;
        }
    }
`

export const BoxTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 5rem;
    width: 100%;
    overflow: hidden;
    color: transparent;
    bottom: 0px;
    position: absolute;
    white-space: nowrap;
    gap: 1rem;
`