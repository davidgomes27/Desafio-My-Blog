import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1C1C1C;
    background-image: url(${prop => prop.back});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
`

export const Container = styled.section`
    width: 80%;
    max-width: 1690px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 15rem 0;
    

`

export const BoxPerfil = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`

export const BoxImG = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    overflow: hidden;
    border: 5px solid #000;
    margin: 4rem 0 1rem 0;
    

`

export const BoxMyName = styled.div`

    h1{
        color: #000;
        margin: 0 0 1rem 0;
        font-family: 'Montserrat', sans-serif;
    }

`

export const BoxPais = styled.div`

    p{
        color: #000;
        margin: 0 0 1rem 0;
        font-weight: bolder;
        font-family: 'Montserrat', sans-serif;
    }

`

export const BoxNav = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const BoxGitHub = styled.div`
    width: 2rem;

`

export const BoxLinkedin = styled.div`
    width: 2rem;

`