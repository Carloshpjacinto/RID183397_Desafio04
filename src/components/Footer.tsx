import styled from "styled-components";
import { LogoFigma, LogoGitHub, LogoLinkedin } from "@/assets";

const StyledFooter = styled.footer`

    margin-bottom: 5rem;

    .contato{

        font-size: 4.2rem;
        margin: 0rem;
    }

    .contato:last-child{

        margin-left: 10rem;
    }

    img{

        width: 7rem;
        height: 7rem;
        margin-left: 5rem;
        cursor: pointer;
    }
`

function Footer(){

    return(
        <StyledFooter className="d-flex jc-between al-center">
            
            <div className="d-flex">
                <h3 className="contato">Meu contato:<br/>12 988888888</h3>

                <h3 className="contato">Email:<br/>xxx@xyz.com</h3>
            </div>
            <div>
                <a href="https://github.com/Carloshpjacinto" target="_blank"><img src={LogoGitHub} alt="Logo GitHub" /></a>

                <a href="https://www.linkedin.com/in/carlos-henrique-parreira-jacinto-1962b0179/" target="_blank"><img src={LogoLinkedin} alt="Logo Linkedin" /></a>

                <a><img src={LogoFigma} alt="Logo Figma" /></a>
            </div>
        </StyledFooter>
    )
}

export default Footer
