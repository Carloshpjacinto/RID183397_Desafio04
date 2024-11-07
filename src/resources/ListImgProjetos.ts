import { ProjetoArquitetura, ProjetoBlog, ProjetoBootcamp, ProjetoLanding } from "@/assets";

interface projetos{

    id:number;
    nome:string;
    src:any;
    textoParagrafo:string;
    linkProjeto:string
}

export const ListImgProjetos:projetos[] = [
    
    {id:1, nome:"Arquitetura", src: ProjetoArquitetura, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkProjeto: "https://dnc-project-page-arquitetura.vercel.app/"},
    {id:2, nome: "Blog", src: ProjetoBlog, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkProjeto: "https://thenewsdev.netlify.app/"},
    {id:3, nome: "Bootcamp", src: ProjetoBootcamp, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkProjeto: "https://dncbootcamppage.netlify.app/"},
    {id:4, nome: "Landing Page", src: ProjetoLanding, textoParagrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", linkProjeto: "https://landinpagednc.netlify.app/"},

]
