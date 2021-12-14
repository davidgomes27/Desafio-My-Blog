import styled from "styled-components"

export const SectionWaves = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    position: relative;
    background: #2980B9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



    .BoxWaves{
       
        position: absolute;
        bottom: 0px;
    }

    .Wave1{
        
        animation: movewave1 3s ease-in-out 3s infinite alternate;
    }

    @keyframes movewave1 {
        from{
            transform: translateX(-200px);
        }
    }



    .Wave2{
        animation: movewave2 4s ease-in-out 3s infinite alternate;
    }

    @keyframes movewave2 {
        from{
            transform: translateX(-680px);
        }
    }



    .Wave3{
        animation: movewave3 3s ease-in-out 5s infinite alternate;
    }

    @keyframes movewave3 {
        from{
            transform: translateX(-500px);
        }
    }

    
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 5rem;
    border: 2px solid #ffff;
    
    margin: 15rem 2rem 0 2rem;


    .Title_About_Me{
        color: #ffff;
        font-size: 3em;
        font-family: 'Gwendolyn', cursive;
        
    }


`

export const BoxSeta = styled.div`
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 2rem;
        left: 3rem;
        


    .IMGSETA{
        width: 100%;
        height: 100%;
    }
`

export const SectionAboutMe = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    background-color:  #00BFFF;

`

export const BoxContainerAboutMe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 80%;
    max-width: 1690px;
    border: 2px solid #fff;
    margin: 3rem;
`

export const BoxAboutMe = styled.div`
    width: 100%;
    height: 500px;
    overflow: auto;
    padding: 3rem 3rem 3rem 3rem;
    gap: 2rem;
       
    .ASS{

    }

    
`

export const Text = styled.h2`
        margin: 0rem 0 2rem 0;
        font-size: max(30px, 3vw);
        display: flex;
        flex-wrap: wrap;
        text-align: flex-start;
        color: #fff;
        font-family: 'Gwendolyn', cursive;

        
        
`

