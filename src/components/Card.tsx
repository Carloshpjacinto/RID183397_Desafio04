import { LikeCurtido, LikeNaoCurtido } from "@/assets";
import { ListImgProjetos, TituloH2 } from "@/resources";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

const StyledCard = styled.div`

    .sessaoCard{

        grid-template-columns: repeat(2, 1fr);
    }

    .CardProjetos{

        width: 55rem;
        height: 70rem;
        border: .1rem solid #0F1624;
        border-top-left-radius: 5rem;
        border-bottom-right-radius: 5rem;
        margin: 10rem 0rem 0rem 10rem;
        box-shadow: .1rem .1rem 1.5rem #FFFFFF;   
    }

    .imgProjeto{

        width: 50rem;
        height: 26.6rem;
        border-radius: .8rem;

        margin: 3rem 0rem 0rem 0rem;
    }

    .paragrafoCard{

        font-size: 2.8rem;
        margin: 0rem 0rem 3rem 3rem
    }

    .textoProjeto{

        font-size: 3.6rem;
        margin: 2rem 0rem 4rem 0rem
    }

    .Like{

        background: none;
        border: none;
        padding: 0;
        margin: 0;
    }

    .like2{

        width: 5.5rem;
        height: 5.5rem;

        margin-right: 5.5rem;

        cursor:pointer;
    }

`

function Card(){

    const [favProjects, setFavProject] = useState<number[]>([])

    const handleSavedProjecs:any = (id:number) => {

        setFavProject((prevFavProjects) => {

            if(prevFavProjects.includes(id)){

                const filterArray:any = prevFavProjects.filter((projectId) => projectId !== id)

                sessionStorage.setItem("favProjects", JSON.stringify(filterArray))

                return prevFavProjects.filter((projectId) => projectId !== id)

            }else{

                sessionStorage.setItem("favProjects", JSON.stringify([...prevFavProjects, id]))

                return [...prevFavProjects, id]

            }
        })
    }

    useEffect(() => {

        const savedFavProjects = sessionStorage.getItem("favProjects");
    
        if (savedFavProjects) {
            setFavProject(JSON.parse(savedFavProjects));
        }
    }, []);

    return(

        <StyledCard id="Projeto">

            <TituloH2 className="tituloCard" children="Projetos" />
            
            <div className="d-grid sessaoCard">
                {
                    ListImgProjetos.map((listaProjetos) => (
                        <div className="CardProjetos" key={listaProjetos.id}>

                            <div className="d-flex fd-column al-center">

                                <img className="imgProjeto" src={listaProjetos.src}/>

                                <h2 className="textoProjeto">{listaProjetos.nome}</h2>

                            </div>
                            <p className="paragrafoCard">{listaProjetos.textoParagrafo}</p>
                            
                            <div className="d-flex al-center jc-between">

                                <a href={listaProjetos.linkProjeto} target="_blank"><StyledButton className="buttonCard" children="Clique aqui"/></a>

                                <button className="Like" onClick={() => handleSavedProjecs(listaProjetos.id)}><img className="like2" src={favProjects.includes(listaProjetos.id) ? LikeCurtido : LikeNaoCurtido} alt="" /></button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </StyledCard>
    )
}
export default Card
