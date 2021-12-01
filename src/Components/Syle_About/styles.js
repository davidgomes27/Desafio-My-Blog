import styled from "styled-components"

export const SectionWaves = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    .BoxWaves{
       
        position: absolute;
        bottom: 0px;
    }

    .Wave1{
        
        animation: movewave1 3s ease-in-out infinite alternate;
    }

    @keyframes movewave1 {
        from{
            transform: translateX(-200px);
        }
    }



    .Wave2{
        animation: movewave2 3s ease-in-out 3s infinite alternate;
    }

    @keyframes movewave2 {
        from{
            transform: translateX(-400px);
        }
    }



    .Wave3{
        animation: movewave3 3s ease-in-out 5s infinite alternate;
    }

    @keyframes movewave3 {
        from{
            transform: translateX(-600px);
        }
    }

    
`

export const SectionAboutMe = styled.section`
    width: 100%;
    height: 100vh;
    background-color:  #7f99f8;

`