import styled from "styled-components"

export const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A9A9A9;
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
    

    &:hover{
        
        &:before{
            content:"";
            width: 50%;
            height: 1px;
            position: absolute;
            background-color: #fff;
            top: 5rem;
            animation: lineup 0.500s ease-in-out forwards;
            
        }
    }

    @keyframes lineup{
        from{
            width: 0%;
        }
        to{
            width: 50%;
        }
    }

    .Link{
        text-decoration: none;
    }

    p{
        font-size: 3rem;
        font-family: 'Montserrat', sans-serif;
        color: #FFFFFF;
        text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);

        
    }

    
`


export const SectionCards = styled.section`
    width: 75%;
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
    animation: scaledown .4s linear forwards;
    
    margin-bottom: 1rem;
    

    &:hover{
        animation: scale 0.4s linear forwards;
        
    }

    @keyframes scaledown{
        0%{
            transform: scale(1.1);
            box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.3);
        }
        100%{
            transform: scale(1.0);
            -webkit-box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.75);
        }
    }

    
    @keyframes scale{
        0%{
            transform: scale(1);
            -webkit-box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.75);
        }
        100%{
            transform: scale(1.1);
            box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.3);
        }
    }
    
`


export const Img = styled.img`
    width: 100%;
`