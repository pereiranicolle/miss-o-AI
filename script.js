const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A AI pode ser considerada inteligente mesmo sem emoções?",
        alternativas: [
            {
                texto: "Sim, inteligência não depende de sentir!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Não, prefiro fazer parte do que ser inteligente!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Agora imagine que essa IA pode ser usadas em escolas,empregos e até no governo tomando decisões com base em dados. Você confiaria que ela tomasse decisõs importantes no seu lugar?",
        alternativas: [
            {
                texto: "Sim, porque ela é lógica e rápida",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Não, porque falta humanidade e ética",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Você se preocupa com os avanços da IA e seu impacto no futuro do trabalho??",
        alternativas: [
            {
                texto: "Sim, a IA pode substituir muitos empregos, especialmente os que são repetitivos e baseados em dados..",
                afirmacao: "Você está preocupado que a IA substitua grande parte da força de trabalho humana, especialmente nas áreas de produção e serviços."
            },
            {
                texto: "Não, a IA criará novas oportunidades de trabalho e melhorará a produtividade.",
                afirmacao: "Você acredita que a IA não vai destruir empregos, mas transformará as funções e criará novas oportunidades em áreas emergentes.."
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial pode ultrapassar a inteligência humana no futuro?",
        alternativas: [
            {
                texto: "Sim, a IA tem o potencial de se tornar mais inteligente do que os humanos em várias áreas.",
                afirmacao: "Você acredita que a IA, com o avanço da tecnologia, pode superar as capacidades cognitivas humanas, especialmente em tarefas específicas."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: " grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "A IA pode ser uma ferramenta útil para melhorar a segurança e otimizar decisões em diversas áreas.",
                afirmacao: "Você acredita que o uso de IA para monitoramento pode ajudar a melhorar a segurança pública, saúde e até a eficiência do trabalho."
            },
            {
                texto: "O monitoramento por IA pode ser uma violação da privacidade e levar ao controle excessivo das pessoas.",
                afirmacao: "Você está preocupado com os riscos de privacidade e controle que a IA pode trazer, além da falta de transparência nas decisões automatizadas. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
