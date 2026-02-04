export interface ItemCatalogo {
    id: string;
    titulo: string;
    imagem: string;
}

const emBreve: ItemCatalogo[] = [
    { id: '1', titulo: 'Loucos Um Pelo Outro', imagem: '/images/em_breve/loucos_um_pelo_outro.jpg' },
    { id: '2', titulo: 'Love to Hate You', imagem: '/images/em_breve/love_to_hate_you.jpg' },
    { id: '3', titulo: 'Rainha das Lágrimas', imagem: '/images/em_breve/rainha_das_lagrimas.jpg' },
    { id: '4', titulo: 'Todo Mundo Me Ama', imagem: '/images/em_breve/todo_mundo_me_ama.jpg' },
    { id: '5', titulo: 'Um Pesadelo de Casamento', imagem: '/images/em_breve/um_pesadelo_de_casamento.jpg' },
    { id: '6', titulo: 'Uma Família Inusitada', imagem: '/images/em_breve/uma_familia_inusitada.jpg' },
];

const populares: ItemCatalogo[] = [
    { id: '1', titulo: 'A Love So Beautiful', imagem: '/images/mais_populares/a_love_so_beautyful.jpg' },
    { id: '2', titulo: 'A Mestra das Pegadinhas', imagem: '/images/mais_populares/a_mestra_das_pegadinhas.jpg' },
    { id: '3', titulo: 'Amor Rural', imagem: '/images/mais_populares/amor_rural.jpg' },
    { id: '4', titulo: 'Apaixonados na Cidade', imagem: '/images/mais_populares/apaixonados_na_cidade.jpg' },
    { id: '5', titulo: 'Hierarchy', imagem: '/images/mais_populares/hierarchy.jpg' },
    { id: '6', titulo: 'Médicos em Colapso', imagem: '/images/mais_populares/medicos_em_colapso.jpg' },
];

export const obterEmBreve = (): ItemCatalogo[] => emBreve;
export const obterPopulares = (): ItemCatalogo[] => populares;
