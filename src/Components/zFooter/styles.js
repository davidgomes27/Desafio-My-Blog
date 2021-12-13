import styled from "styled-components"

export const Footer = styled.footer`
    width: 100%;
`

export const BoxSobreMim = styled.div`
    width: 100%;
    background-color: #363636;

`

export const BoxTitle = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0;


    .TitleSobreMIM{
        font-size: 250%;
        font-family: 'Montserrat', sans-serif;
        padding-left: 3rem;
        text-decoration: none;
        color: #FFFFFF;
        text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
    }
`

export const BoxCopyHight = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #1C1C1C;
    padding: 2rem 0;

    .CopyHight{
       color: #fff;
       font-size : 12px;
       padding-right: 2rem;
       font-family: 'Montserrat', sans-serif;
    }

`