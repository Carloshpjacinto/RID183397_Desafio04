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
        border: none;
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

    .botaoLike{

        background: none;
        border: none;
        padding: 0;
        margin: 0;
    }

    .likeImg{

        width: 5.5rem;
        height: 5.5rem;
        margin-right: 5.5rem;
        cursor:pointer;
    }
`

function Card(){
    
    const [ProjetoFavorito, setProjetoFavorito] = useState<number[]>([])

    const SalvarProjetos:any = (id:number) => {

        setProjetoFavorito((ListaProjetos) => {

            if(ListaProjetos.includes(id)){

                const filterArray:any = ListaProjetos.filter((projetoId) => projetoId !== id)

                sessionStorage.setItem("ProjetoFavorito", JSON.stringify(filterArray))

                return ListaProjetos.filter((projetoId) => projetoId !== id)

            }else{

                sessionStorage.setItem("ProjetoFavorito", JSON.stringify([...ListaProjetos, id]))

                return [...ListaProjetos, id]

            }
        })
    }

    useEffect(() => {

        const salvarProjetoFavorito = sessionStorage.getItem("ProjetoFavorito");
    
        if (salvarProjetoFavorito) {
            setProjetoFavorito(JSON.parse(salvarProjetoFavorito));
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
                                <a href={listaProjetos.linkProjeto} target="_blank"><StyledButton className="botaoCard" children="Clique aqui"/></a>

                                <button className="botaoLike" onClick={() => SalvarProjetos(listaProjetos.id)}><img className="likeImg" src={ProjetoFavorito.includes(listaProjetos.id) ? LikeCurtido : LikeNaoCurtido} alt="LIKE" /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </StyledCard>
    )
}
export default Card
