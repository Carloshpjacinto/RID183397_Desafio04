import { ProjetoArquitetura, ProjetoBlog, ProjetoBootcamp, ProjetoLanding } from "@/assets";

interface projetos{

    id:number;
    nome:string;
    src:any;
    textoParagrafo:string;
    linkProjeto:string
}

export const ListImgProjetos:projetos[] = [
    
    {id:1, nome:"Arquitetura DNC", src: ProjetoArquitetura, textoParagrafo: "Site construido para descrição e apresentação de uma empresa de arquitetura. Projeto construido nas aulas da formação de Arquiteto de software", linkProjeto: "https://dnc-project-page-arquitetura.vercel.app/"},
    {id:2, nome: "Blog", src: ProjetoBlog, textoParagrafo: "Blog construído para divulgação de notícias e curiosidades sobre o mundo tech. Projeto desenvolvido durante as aulas da formação de Arquiteto de Software.", linkProjeto: "https://thenewsdev.netlify.app/"},
    {id:3, nome: "Bootcamp DNC", src: ProjetoBootcamp, textoParagrafo: "Página construida para captura de dados dos alunos interessados no Bootcamp da escola DNC. Projeto construido nas aulas de HTML e CSS.", linkProjeto: "https://dncbootcamppage.netlify.app/"},
    {id:4, nome: "Landing Page", src: ProjetoLanding, textoParagrafo: "Página construída para captura de dados dos alunos interessados nos curos da DNC. Projeto desenvolvido durante as aulas da formação.", linkProjeto: "https://landinpagednc.netlify.app/"},

]
