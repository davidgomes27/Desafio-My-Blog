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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1690px;
    padding: 18rem 0;
    position: relative;
    background-color: #1C1C1C;

    .Title{
        color: #836FFF;
        font-family: 'Montserrat', sans-serif;
        font-size: max(25px, 3vw);
    }
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
    width: 30rem;
    height: 20rem;
    background-image: url(${prop => prop.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

   &:hover .boxtitle{
       
       color: #fff;
       animation: visivel 0.500s ease-in-out forwards;
   }

   
    .boxtitle{
        text-align: center;
        width: 100%;
        height: 5rem;
        position: absolute;
        bottom: 0px;
        color: transparent;
        overflow: hidden;
        background-color: transparent;
    }

   


    @keyframes visivel {
        from{
            background-color: transparent;
            color: transparent;
        }
        to{
            
            color: #fff;
        }
    }
`

export const BoxTitle = styled.div`


`