import { Pergunta } from "../types/Pergunta";

export const categorias = [
  { label: "Ingressos", value: "ingressos" },
  { label: "Meia-Entrada", value: "meia-entrada" },
  { label: "Filmes e Sessões", value: "filmes-e-sessoes" },
  { label: "Promoções e Benefícios", value: "promocoes-e-beneficios" },
  { label: "Bomboniere", value: "bomboniere" },
  { label: "Salas e Tecnologias", value: "salas-e-tecnologias" },
  { label: "Formas de Pagamento", value: "formas-de-pagamento" },
];

export const opcoes = [
  { label: "Sim", value: true },
  { label: "Não", value: false },
];

export const perguntasFrequentes: Pergunta[] = [
  {
    id: "67e6e9dc1d3f9df5cc9db822",
    pergunta: "Como funciona a venda de ingressos na bilheteria?",
    resposta:
      "A venda de ingressos na bilheteria funciona 30 minutos antes da sessão e até 10 minutos após o início da sessão. Após esse tempo, o nosso sistema é programado para encerrar as vendas automaticamente e iniciar a comercialização de bilhetes para próxima sessão do dia.",
    cadastro: "25/11/2024",
    cliques: "1087",
    ordem: "1",
    categoria: "ingressos",
    principalDuvida: true,
    ordemPrincipalDuvida: "1",
    ativa: true,
  },
  {
    id: "67e6ea201d3f9df5cc9db823",
    pergunta: "Como funciona a venda de ingresso na Web?",
    resposta:
      "O serviço de venda de ingressos na web é de inteira responsabilidade da empresa INGRESSO PLUS, a qual cobra uma taxa de serviço pela venda. As regras e forma de utilização estão disponiveis no campo ATENDIMENTO do link abaixo: www.ingressoplus.com.br/site/",
    cadastro: "25/11/2024",
    cliques: "345",
    ordem: "2",
    categoria: "ingressos",
    principalDuvida: true,
    ordemPrincipalDuvida: "3",
    ativa: true,
  },
  {
    id: "67e6a23a3c0493d4559af52d",
    pergunta: "Posso alterar o horário do filme comprado?",
    resposta:
      "Não é permitido alterar o horário do filme comprado. Deverá solicitar o estorno e efetuar uma nova compra. Estorno de ingressos comprados na web => através de um e-mail enviado a ingressos@ingressoplus.com.br Estorno de ingressos comprados na bilheteria e ATM => presencialmente no cinema",
    cadastro: "25/11/2024",
    cliques: "152",
    ordem: "3",
    categoria: "ingressos",
    principalDuvida: true,
    ordemPrincipalDuvida: "2",
    ativa: true,
  },
  {
    id: "67e6ea491d3f9df5cc9db824",
    pergunta:
      "Comprei o ingresso pela internet, mas não pude comparecer na sessão. Como faço para ter o dinheiro de volta?",
    resposta: `
      A venda online de ingressos é feita pelo Ingresso Plus.
      Para solicitar o estorno é preciso que envie um e-mail para ingressos@ingressoplus.com.br com os dados do voucher (data da sessão e número da reserva) e aguardar um retorno da mesma com a confirmação do reembolso.
    `,
    cadastro: "25/11/2024",
    cliques: "965",
    ordem: "4",
    categoria: "ingressos",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6eae71d3f9df5cc9db825",
    pergunta: "Quem tem direito a meia-entrada?",
    resposta: `
      Estudantes, idosos, pessoas com deficiência (incluindo seu acompanhante) e jovens de 15 a 29 anos comprovadamente carentes.
      Mais informações: http://www.cinesercla.com.br/Home/Leis
    `,
    cadastro: "25/11/2024",
    cliques: "1087",
    ordem: "1",
    categoria: "meia-entrada",
    principalDuvida: true,
    ordemPrincipalDuvida: "4",
    ativa: true,
  },
  {
    id: "67e6eb101d3f9df5cc9db826",
    pergunta:
      "Quais são os documentos que devo apresentar para ter direito a meia-entrada?",
    resposta: `
      LEI Nº 12.933, DE 26 DE DEZEMBRO DE 2013 - Art. 1º paragráfo 2º : 
      "Terão direito ao benefício os estudantes regularmente matriculados nos níveis e modalidades de educação e ensino previstos no Título V da Lei nº 9.394, de 20 de dezembro de 1996, que comprovem sua condição de discente, mediante a apresentação, no momento da aquisição do ingresso e na portaria do local de realização do evento, da Carteira de Identificação Estudantil (CIE), emitida pela Associação Nacional de Pós-Graduandos (ANPG), pela União Nacional dos Estudantes (UNE), pela União Brasileira dos Estudantes Secundaristas (Ubes), pelas entidades estaduais e municipais filiadas àquelas, pelos Diretórios Centrais dos Estudantes (DCEs) e pelos Centros e Diretórios Acadêmicos, com prazo de validade renovável a cada ano, conforme modelo único nacionalmente padronizado e publicamente disponibilizado pelas entidades nacionais antes referidas e pelo Instituto Nacional de Tecnologia da Informação (ITI), com certificação digital deste, podendo a carteira de identificação estudantil ter 50% (cinquenta por cento) de características locais". 
    `,
    cadastro: "25/11/2024",
    cliques: "345",
    ordem: "2",
    categoria: "meia-entrada",
    principalDuvida: true,
    ordemPrincipalDuvida: "5",
    ativa: true,
  },
  {
    id: "67e6eb2f1d3f9df5cc9db827",
    pergunta: "Por que um filme é lançado em uma unidade e em outra não?",
    resposta: `
      Os lançamentos de filmes nos cinemas são definidos pelas distribuidoras e não pelos exibidores. Com base em estratégias e planejamentos, as distribuidoras escolhem as cidades e locais para lançarem seus filmes.
    `,
    cadastro: "25/11/2024",
    cliques: "1087",
    ordem: "1",
    categoria: "filmes-e-sessoes",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6eb631d3f9df5cc9db828",
    pergunta: "Por que há mais sessões dubladas na programação?",
    resposta: `
      A maioria do público que frequenta a Rede Cinesercla tem preferência por filmes dublados. 
    `,
    cadastro: "25/11/2024",
    cliques: "345",
    ordem: "2",
    categoria: "filmes-e-sessoes",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6eb7f1d3f9df5cc9db829",
    pergunta:
      "Por que a data de lançamento de um filme é alterada repentinamente?",
    resposta: `
      São as distribuidoras quem determinam as datas de lançamento de seus filmes. Portanto, são elas quem também alteram as datas de estreia, muitas vezes, sem prévio aviso. Confira em nossa seção EM BREVE e fique ligado nas próximas atrações.
    `,
    cadastro: "25/11/2024",
    cliques: "152",
    ordem: "3",
    categoria: "filmes-e-sessoes",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6eba31d3f9df5cc9db82a",
    pergunta: "Por quanto tempo um filme fica em cartaz?",
    resposta: `
      Não sabemos por quanto tempo um filme ficará em cartaz. Isso depende de diversos fatores, entre eles, a demanda e novos lançamentos. Para que um novo filme entre em cartaz, um outro deverá sair. Essa troca de filmes você pode acompanhar toda quinta-feira, data em que a programação é atualizada e será válida até quarta-feira na semana seguinte.
    `,
    cadastro: "25/11/2024",
    cliques: "965",
    ordem: "4",
    categoria: "filmes-e-sessoes",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ebc31d3f9df5cc9db82b",
    pergunta:
      "Por que a programação da unidade que frequento foi alterada sem prévio aviso?",
    resposta: `
      Infelizmente, imprevistos acontecem e isso pode provocar cancelamentos de ingresso e mudanças na programação. Como temos acordos comerciais com as distribuidoras ou quando há uma grande demanda por um longa, mudanças na programação são feitas sem prévio aviso para que determinado filme não deixe de ser exibido.
    `,
    cadastro: "25/11/2024",
    cliques: "152",
    ordem: "5",
    categoria: "filmes-e-sessoes",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ebe01d3f9df5cc9db82c",
    pergunta:
      "Crianças abaixo da classificação indicativa do filme podem entrar na sessão?",
    resposta: `
      Crianças ou adolescentes que possuem idade abaixo da classificação indicativa do filme podem entrar na sessão desde que o responsável legal pela criança ou adolescente seja maior de idade, o acompanhe na sessão e assine um termo de responsabilidade que fica disponível em nosso site (https://www.cinesercla.com.br/Uploads/upload/classificacao-indicativa.pdf) ou na bilheteria do cinema.
      Essa regra vale para filmes com classificação indicativa até 16 anos. Caso o filme tenha a classificação indicativa de 18 anos, em hipótese alguma será permitia a entrada da crianças mesmo que o responsável legal tenha assinado o termo de responsabilidade.
      Para filmes de classificação indicativa de 18 anos, jovens de 16 e 17 anos de idade podem entrar na sessão desde que o responsável legal o acompanhe e assine o tal termo de responsabilidade.
      Mais informações: http://www.cinesercla.com.br/Home/Leis
    `,
    cadastro: "25/11/2024",
    cliques: "965",
    ordem: "6",
    categoria: "filmes-e-sessoes",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ec071d3f9df5cc9db82d",
    pergunta: "Criança até 2 anos de idade paga ingresso?",
    resposta: `
      Apesar de não haver legislação que garanta aos bebês a gratuidade, na Rede Cinesercla, criança até 2 anos de idade (2 anos, 11 meses e 30 dias) não paga entrada desde que assista ao filme sentada no colo do responsável. Limitado a uma criança com entrada gratuita por responsável. Crianças que já completaram 3 anos pagam meia entrada.
    `,
    cadastro: "25/11/2024",
    cliques: "152",
    ordem: "7",
    categoria: "filmes-e-sessoes",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ec201d3f9df5cc9db82e",
    pergunta: "Qual o valor dos ingressos corporativos?",
    resposta: `
      Temos valores e ingressos diferenciados para cada unidade. Caso tenha interesse, informe a unidade e solicite os valores pelo e-mail: marketing@cinesercla.com.br 
    `,
    cadastro: "25/11/2024",
    cliques: "955",
    ordem: "1",
    categoria: "promocoes-e-beneficios",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ec3c1d3f9df5cc9db82f",
    pergunta: "Aniversariante tem gratuidade?",
    resposta: `
      Aniversariante tem a gratuidade e ganha pipoca pequena e refrigerante 500ml, se levar para a mesma sessão 24 convidados ( todos pagarão MEIA ENTRADA).
      Além disso, poderá usar o benefício de comprar o COMBO DUPLO 500 para seus convidados.
      Confira na tabela de preços da unidade que você frequenta.
    `,
    cadastro: "25/11/2024",
    cliques: "141",
    ordem: "2",
    categoria: "promocoes-e-beneficios",
    principalDuvida: true,
    ordemPrincipalDuvida: "6",
    ativa: true,
  },
  {
    id: "67e6ec581d3f9df5cc9db830",
    pergunta:
      "Quais alimentos são permitidos e quais não são permitidos nas salas do Cinesercla?",
    resposta: `
      Permitimos a entrada de balas, chocolates, pipocas, água, sucos e refrigerantes comprados ou não em nossa bomboniere.
      Não permitimos bandeja de comida, marmitas, pizzas, sanduíches, sorvetes, milk shakes, batatas frita, chips, bebidas alcoólicas, entre outros.
      Mais informações: http://www.cinesercla.com.br/Home/Leis
    `,
    cadastro: "25/11/2024",
    cliques: "200",
    ordem: "2",
    categoria: "bomboniere",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ec731d3f9df5cc9db831",
    pergunta: "Os óculos 3D são higienizados?",
    resposta: `
      Sim, todos os óculos 3D usados por clientes após as sessões são higienizados. Seguimos o procedimento de limpeza recomendado pelo fabricante dos óculos. A higienização é realizada por uma máquina especial que utilza água filtrada em alta temperatura e um produto específico que ajuda na remoção de sujeiras. O mesmo equipamento realiza a secagem deixando os óculos higienizados e prontos para serem reutilizado por outros clientes.
    `,
    cadastro: "25/11/2024",
    cliques: "435",
    ordem: "2",
    categoria: "salas-e-tecnologias",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ec931d3f9df5cc9db832",
    pergunta: "Quais são as formas de pagamento?",
    resposta: `
      Aceitamos cartões de débito e crédito (nas bandeiras Visa, Mastercard, Elo e Hypercard) além de dinheiro.
      Para compras via cartões, você pode adquirir ingressos nas bilheteria e auto atendimentos ou por meio do nosso site (verifique no Ingresso Plus as bandeiras aceitas e a taxa de administração cobrada pela mesma).
      Para compras em dinheiro, somente nas bilheterias.
    `,
    cadastro: "25/11/2024",
    cliques: "200",
    ordem: "1",
    categoria: "formas-de-pagamento",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ecaf1d3f9df5cc9db833",
    pergunta: "O Cinesercla aceita Vale Cultura?",
    resposta: `
      No momento, não aceitamos nenhuma bandeira de Vale Cultura.
    `,
    cadastro: "25/11/2024",
    cliques: "456",
    ordem: "2",
    categoria: "formas-de-pagamento",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
  {
    id: "67e6ecc61d3f9df5cc9db834",
    pergunta: "Como verifico o preço do ingresso?",
    resposta: `
      No menu superior, vá em PROGRAMAÇÃO, em seguida clique em CINEMAS, escolha a unidade Cinesercla desejada e clique no botão VER PREÇO.
    `,
    cadastro: "25/11/2024",
    cliques: "123",
    ordem: "3",
    categoria: "formas-de-pagamento",
    principalDuvida: false,
    ordemPrincipalDuvida: "-",
    ativa: true,
  },
];
