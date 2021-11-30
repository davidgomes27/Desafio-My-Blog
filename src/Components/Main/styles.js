import styled from "styled-components"

export const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: 	#A9A9A9;
    flex-direction: column;

`

export const BoxTitleProject = styled.div`
    width: 80%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 3rem;

    p{
        font-size: 3rem;
        font-family: 'Montserrat', sans-serif;
        color: #836FFF;
    }

    &:before{
        content:"";
        width: 50rem;
        height: 1px;
        position: absolute;
        background-color: #836FFF;
        top: 5rem;
        

    }
`


export const SectionCards = styled.section`
    width: 90%;
    max-width: 1690px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

`

export const BoxIMGCard = styled.div`
    width: 20rem;
    height: 25rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    border: 2px solid #836FFF;
    border-radius: 10px;
    background-image: url(${prop => prop.back});
    position: relative;
    bottom: 8rem;
    animation: scaledown .4s linear ;
    animation-fill-mode: forwards;
    

    &:hover{
        animation: scale 0.4s linear;
        animation-fill-mode: forwards;
    }

    @keyframes scaledown{
        0%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1.0);
        }
    }

    
    @keyframes scale{
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(1.1);
        }
    }
    
`


export const Img = styled.img`
    width: 100%;
`