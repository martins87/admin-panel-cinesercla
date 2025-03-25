import { Pergunta } from "../types/Pergunta";

export const perguntasFrequentes: Pergunta[] = [
  {
    id: "3c8c6911-3d67-48f3-8efa-9b66c30139f8",
    pergunta: "Como funciona a venda de ingressos na bilheteria?",
    resposta:
      "A venda de ingressos na bilheteria funciona 30 minutos antes da sessão e até 10 minutos após o início da sessão. Após esse tempo, o nosso sistema é programado para encerrar as vendas automaticamente e iniciar a comercialização de bilhetes para próxima sessão do dia.",
    cadastro: "25/11/2024",
    cliques: "1087",
    ordem: "1",
    categoria: "ingressos",
    ativa: true,
  },
  {
    id: "7cac3ce9-3f93-4257-9ef6-3cfe38ca142c",
    pergunta: "Como funciona a venda de ingresso na Web?",
    resposta:
      "O serviço de venda de ingressos na web é de inteira responsabilidade da empresa INGRESSO PLUS, a qual cobra uma taxa de serviço pela venda. As regras e forma de utilização estão disponiveis no campo ATENDIMENTO do link abaixo: www.ingressoplus.com.br/site/",
    cadastro: "25/11/2024",
    cliques: "345",
    ordem: "2",
    categoria: "ingressos",
    ativa: true,
  },
  {
    id: "91a91933-c890-45c7-98ad-ab874f19d493",
    pergunta: "Posso alterar o horário do filme comprado?",
    resposta:
      "Não é permitido alterar o horário do filme comprado. Deverá solicitar o estorno e efetuar uma nova compra. Estorno de ingressos comprados na web => através de um e-mail enviado a ingressos@ingressoplus.com.br Estorno de ingressos comprados na bilheteria e ATM => presencialmente no cinema",
    cadastro: "25/11/2024",
    cliques: "152",
    ordem: "3",
    categoria: "ingressos",
    ativa: true,
  },
  {
    id: "b6e162a4-6434-4f78-97d7-15a971a3a1ad",
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
    ativa: true,
  },
  {
    id: "20fbc8da-87be-4383-9ac6-375acb18538b",
    pergunta: "Quem tem direito a meia-entrada?",
    resposta: `
      Estudantes, idosos, pessoas com deficiência (incluindo seu acompanhante) e jovens de 15 a 29 anos comprovadamente carentes.
      Mais informações: http://www.cinesercla.com.br/Home/Leis
    `,
    cadastro: "25/11/2024",
    cliques: "1087",
    ordem: "1",
    categoria: "meia-entrada",
    ativa: true,
  },
  {
    id: "adfad8b8-475d-4384-86ce-56e892731a9f",
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
    ativa: true,
  },
  {
    id: "c4b32f4b-e128-4dde-8611-efd5864bee59",
    pergunta: "Por que um filme é lançado em uma unidade e em outra não?",
    resposta: `
      Os lançamentos de filmes nos cinemas são definidos pelas distribuidoras e não pelos exibidores. Com base em estratégias e planejamentos, as distribuidoras escolhem as cidades e locais para lançarem seus filmes.
    `,
    cadastro: "25/11/2024",
    cliques: "1087",
    ordem: "1",
    categoria: "filmes-e-sessoes",
    ativa: true,
  },
  {
    id: "1ece8927-1e95-4dc6-b6ec-5d1c1b6773bc",
    pergunta: "Por que há mais sessões dubladas na programação?",
    resposta: `
      A maioria do público que frequenta a Rede Cinesercla tem preferência por filmes dublados. 
    `,
    cadastro: "25/11/2024",
    cliques: "345",
    ordem: "2",
    categoria: "filmes-e-sessoes",
    ativa: true,
  },
  {
    id: "ba1d57a1-af82-4c01-863b-a37026174181",
    pergunta:
      "Por que a data de lançamento de um filme é alterada repentinamente?",
    resposta: `
      São as distribuidoras quem determinam as datas de lançamento de seus filmes. Portanto, são elas quem também alteram as datas de estreia, muitas vezes, sem prévio aviso. Confira em nossa seção EM BREVE e fique ligado nas próximas atrações.
    `,
    cadastro: "25/11/2024",
    cliques: "152",
    ordem: "3",
    categoria: "filmes-e-sessoes",
    ativa: true,
  },
  {
    id: "cdb97c54-90ce-4ed6-9f29-fabc5892a652",
    pergunta: "Por quanto tempo um filme fica em cartaz?",
    resposta: `
      Não sabemos por quanto tempo um filme ficará em cartaz. Isso depende de diversos fatores, entre eles, a demanda e novos lançamentos. Para que um novo filme entre em cartaz, um outro deverá sair. Essa troca de filmes você pode acompanhar toda quinta-feira, data em que a programação é atualizada e será válida até quarta-feira na semana seguinte.
    `,
    cadastro: "25/11/2024",
    cliques: "965",
    ordem: "4",
    categoria: "filmes-e-sessoes",
    ativa: true,
  },
  {
    id: "8a007d84-c713-4ce7-8c3b-44c0ecfda31c",
    pergunta:
      "Por que a programação da unidade que frequento foi alterada sem prévio aviso?",
    resposta: `
      Infelizmente, imprevistos acontecem e isso pode provocar cancelamentos de ingresso e mudanças na programação. Como temos acordos comerciais com as distribuidoras ou quando há uma grande demanda por um longa, mudanças na programação são feitas sem prévio aviso para que determinado filme não deixe de ser exibido.
    `,
    cadastro: "25/11/2024",
    cliques: "152",
    ordem: "5",
    categoria: "filmes-e-sessoes",
    ativa: true,
  },
  {
    id: "19c3dcb4-0f09-4db4-bae7-7fd547e91a36",
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
    ativa: true,
  },
  {
    id: "721836bd-422b-44c3-816b-8392d21412ef",
    pergunta: "Criança até 2 anos de idade paga ingresso?",
    resposta: `
      Apesar de não haver legislação que garanta aos bebês a gratuidade, na Rede Cinesercla, criança até 2 anos de idade (2 anos, 11 meses e 30 dias) não paga entrada desde que assista ao filme sentada no colo do responsável. Limitado a uma criança com entrada gratuita por responsável. Crianças que já completaram 3 anos pagam meia entrada.
    `,
    cadastro: "25/11/2024",
    cliques: "152",
    ordem: "7",
    categoria: "filmes-e-sessoes",
    ativa: true,
  },
  {
    id: "bb3966e7-fef5-4fec-ad4f-678ebce24abf",
    pergunta: "Qual o valor dos ingressos corporativos?",
    resposta: `
      Temos valores e ingressos diferenciados para cada unidade. Caso tenha interesse, informe a unidade e solicite os valores pelo e-mail: marketing@cinesercla.com.br 
    `,
    cadastro: "25/11/2024",
    cliques: "955",
    ordem: "1",
    categoria: "promocoes-e-beneficios",
    ativa: true,
  },
  {
    id: "14fb43c7-db60-40ff-9439-28a11dac9a0e",
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
    ativa: true,
  },
  {
    id: "fa0e4882-4edf-4456-b19b-c09b1a17c3cb",
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
    ativa: true,
  },
  {
    id: "f2b1f47a-3b9d-4e68-abef-56c36657f2ef",
    pergunta: "Os óculos 3D são higienizados?",
    resposta: `
      Sim, todos os óculos 3D usados por clientes após as sessões são higienizados. Seguimos o procedimento de limpeza recomendado pelo fabricante dos óculos. A higienização é realizada por uma máquina especial que utilza água filtrada em alta temperatura e um produto específico que ajuda na remoção de sujeiras. O mesmo equipamento realiza a secagem deixando os óculos higienizados e prontos para serem reutilizado por outros clientes.
    `,
    cadastro: "25/11/2024",
    cliques: "435",
    ordem: "2",
    categoria: "salas-e-tecnologias",
    ativa: true,
  },
  {
    id: "e3666474-e4af-4531-87c8-5b28cd976504",
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
    ativa: true,
  },
  {
    id: "8c4f2da2-b84e-424b-884a-7b956147abbe",
    pergunta: "O Cinesercla aceita Vale Cultura?",
    resposta: `
      No momento, não aceitamos nenhuma bandeira de Vale Cultura.
    `,
    cadastro: "25/11/2024",
    cliques: "456",
    ordem: "2",
    categoria: "formas-de-pagamento",
    ativa: true,
  },
  {
    id: "34f4f9ae-1129-417a-b6df-b201ad687dd2",
    pergunta: "Como verifico o preço do ingresso?",
    resposta: `
      No menu superior, vá em PROGRAMAÇÃO, em seguida clique em CINEMAS, escolha a unidade Cinesercla desejada e clique no botão VER PREÇO.
    `,
    cadastro: "25/11/2024",
    cliques: "123",
    ordem: "3",
    categoria: "formas-de-pagamento",
    ativa: true,
  },
];
