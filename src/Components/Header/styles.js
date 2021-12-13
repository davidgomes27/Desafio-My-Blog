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
    border: 5px solid #fff;
    margin: 4rem 0 1rem 0;
    

`

export const BoxMyName = styled.div`

    h1{
        
        margin: 0 0 1rem 0;
        font-family: 'Montserrat', sans-serif;
        color: #FFFFFF;
        text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
    }

`

export const BoxPais = styled.div`

    p{
        
        margin: 0 0 1rem 0;
        font-weight: bolder;
        font-family: 'Montserrat', sans-serif;
        color: #FFFFFF;
        text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
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