const topics = [
  {
    id: "folha-caracteristicas",
    title: "Características da folha de cálculo",
    menuTitle: "Características",
    cardTitle: "Folha de cálculo: características",
    area: "Folha de cálculo",
    intro: "Reconhecer a folha de cálculo como ferramenta para organizar, calcular, analisar e apresentar dados.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    gammaUrl: "https://folha-de-calculo-066dcg6.gamma.site/",
    url: "conteudos/folha-caracteristicas.html"
  },
  {
    id: "folha-vantagens-desvantagens",
    title: "Vantagens e desvantagens",
    menuTitle: "Vantagens e desvantagens",
    cardTitle: "Vantagens e desvantagens da folha de cálculo",
    area: "Folha de cálculo",
    intro: "Identificar pontos fortes e limitações da folha de cálculo em diferentes contextos de utilização.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    gammaUrl: "https://vantagens-e-desvantagens-kq1blbj.gamma.site/",
    url: "conteudos/folha-vantagens-desvantagens.html"
  },
  {
    id: "folha-criacao-edicao",
    title: "Criação, gravação e edição",
    menuTitle: "Criação e edição",
    cardTitle: "Criar, gravar e editar uma folha de cálculo",
    area: "Folha de cálculo",
    intro: "Executar operações básicas de criação, gravação e edição numa folha de cálculo.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    gammaUrl: "https://criacao-gravacao-edicao-l9yfsfb.gamma.site/",
    url: "conteudos/folha-criacao-edicao.html"
  },
  {
    id: "folha-formatacao",
    title: "Formatação",
    menuTitle: "Formatação",
    cardTitle: "Formatar uma folha de cálculo",
    area: "Folha de cálculo",
    intro: "Aplicar formatos para tornar os dados mais claros, organizados e fáceis de interpretar.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    gammaUrl: "https://formatacao-folha-calculo-kkb69ad.gamma.site/",
    url: "conteudos/folha-formatacao.html"
  },
  {
    id: "folha-graficos",
    title: "Gráficos",
    menuTitle: "Gráficos",
    cardTitle: "Gráficos com modelos predefinidos",
    area: "Folha de cálculo",
    intro: "Criar gráficos simples com recurso a modelos predefinidos.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    gammaUrl: "https://graficos-modelos-pre-ug575tz.gamma.site/",
    url: "conteudos/folha-graficos.html"
  },
  {
    id: "folha-internet",
    title: "Preparação para a Internet",
    menuTitle: "Internet",
    cardTitle: "Preparar conteúdos para a Internet",
    area: "Folha de cálculo",
    intro: "Preparar dados de uma folha de cálculo para consulta, partilha ou publicação em contexto digital.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    gammaUrl: "https://preparacao-conteudos-tnin64b.gamma.site/",
    url: "conteudos/folha-internet.html"
  },
  {
    id: "bd-caracteristicas",
    title: "Características da base de dados",
    menuTitle: "Características",
    cardTitle: "Base de dados: características",
    area: "Base de dados",
    intro: "Reconhecer a base de dados como estrutura organizada para armazenar e consultar informação.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    url: "conteudos/bd-caracteristicas.html"
  },
  {
    id: "bd-vantagens-desvantagens",
    title: "Vantagens e desvantagens",
    menuTitle: "Vantagens e desvantagens",
    cardTitle: "Vantagens e desvantagens da base de dados",
    area: "Base de dados",
    intro: "Identificar benefícios e limitações da utilização de bases de dados.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    url: "conteudos/bd-vantagens-desvantagens.html"
  },
  {
    id: "bd-funcionamento",
    title: "Modo de funcionamento",
    menuTitle: "Funcionamento",
    cardTitle: "Modo de funcionamento de uma base de dados",
    area: "Base de dados",
    intro: "Compreender, de forma simples, como os dados são guardados, ligados e consultados.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    url: "conteudos/bd-funcionamento.html"
  },
  {
    id: "bd-componentes",
    title: "Componentes",
    menuTitle: "Componentes",
    cardTitle: "Componentes de uma base de dados",
    area: "Base de dados",
    intro: "Identificar tabelas, registos, campos e relações simples entre dados.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    url: "conteudos/bd-componentes.html"
  },
  {
    id: "bd-manutencao",
    title: "Manutenção",
    menuTitle: "Manutenção",
    cardTitle: "Manutenção de bases de dados",
    area: "Base de dados",
    intro: "Reconhecer cuidados básicos de atualização, organização, segurança e consistência dos dados.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    url: "conteudos/bd-manutencao.html"
  },
  {
    id: "bd-internet",
    title: "Publicação na Internet",
    menuTitle: "Internet",
    cardTitle: "Publicar conteúdos para a Internet",
    area: "Base de dados",
    intro: "Compreender formas simples de disponibilizar conteúdos de uma base de dados em contexto digital.",
    image: "../assets/img/ufcd3776-hero-background-v2.png",
    url: "conteudos/bd-internet.html"
  }
];

const contentMenuGroups = [
  {
    title: "Folha de cálculo",
    theme: "representation",
    children: topics.filter((topic) => topic.id.startsWith("folha-")).map((topic) => ({ topicId: topic.id }))
  },
  {
    title: "Base de dados",
    theme: "database",
    children: topics.filter((topic) => topic.id.startsWith("bd-")).map((topic) => ({ topicId: topic.id }))
  }
];

const DEFAULT_APPS_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwTZTbLAY7RLR8RSbX3ogc6WT1J8DJZdgDRq_FUD055ByJm2eXvJ8zYzKIGSb1RYxAjaw/exec";
const DEFAULT_APPS_SCRIPT_SPREADSHEET_ID = "1-gQGEHiLdQDwOGjGQbl6chxHS1zpX8rA7uebkXlTVOY";
const APPS_SCRIPT_WEB_APP_URL = window.UFCD3776_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_WEB_APP_URL;
const APPS_SCRIPT_SPREADSHEET_ID = window.UFCD3776_SPREADSHEET_ID || DEFAULT_APPS_SCRIPT_SPREADSHEET_ID;

const activities = [
  {
    id: "controlo-teams",
    title: "Partilha de ecrã",
    menuTitle: "Partilha de ecrã",
    intro: "Tabela simples para acompanhar quantas vezes cada formando já partilhou o ecrã nas reuniões Teams.",
    url: "atividades/controlo-teams.html"
  },
  {
    id: "brainstorming",
    title: "Brainstorming",
    intro: "Atividade inicial para recolher ideias, expectativas e conhecimentos prévios antes de aprofundar os conteúdos.",
    url: "atividades/brainstorming.html",
    focus: "Exploração inicial",
    duration: "30 a 45 minutos",
    product: "Mapa inicial com expectativas, dúvidas e conhecimentos prévios sobre folha de cálculo e base de dados.",
    mentimeterUrl: "https://www.mentimeter.com/app/presentation/al7sia3yob24c2156d2jkjtohr32r1tf/embed",
    participationUrl: "https://www.menti.com/alg8jd96qvty",
    qrCode: "assets/img/mentimeter_qr_code.png",
    steps: [
      {
        title: "Apresentação da UFCD",
        text: "Identificar o objetivo, a duração e a organização geral da formação."
      },
      {
        title: "Expectativas dos formandos",
        text: "Recolher ideias sobre o que cada pessoa espera aprender ou melhorar."
      },
      {
        title: "Conhecimentos prévios",
        text: "Perceber experiências anteriores com folha de cálculo e bases de dados."
      },
      {
        title: "Mapa inicial de temas",
        text: "Organizar contributos em torno de folha de cálculo, base de dados e publicação de conteúdos."
      },
      {
        title: "Síntese e próximos passos",
        text: "Registar conclusões iniciais e preparar a passagem para os primeiros conteúdos."
      }
    ],
    evidence: [
      "Lista de ideias recolhidas",
      "Dúvidas iniciais identificadas",
      "Temas que exigem maior acompanhamento"
    ]
  },
  {
    id: "tarefas-grupo",
    title: "Tarefas de Grupo",
    intro: "Em cada atividade diária, a tarefa de grupo serve para aplicar conteúdos de folha de cálculo e base de dados em pequenos grupos.",
    url: "atividades/tarefas-grupo.html",
    focus: "Tarefa de grupo",
    duration: "A definir pelo formador",
    product: "Produção de grupo relacionada com organização, análise, estruturação ou apresentação de dados.",
    steps: [
      {
        title: "Organização do grupo",
        text: "Distribuir funções simples: recolha de dados, registo, revisão e apresentação."
      },
      {
        title: "Tarefa de folha de cálculo",
        text: "Criar, editar, formatar ou representar dados, de acordo com o conteúdo trabalhado."
      },
      {
        title: "Tarefa de base de dados",
        text: "Identificar componentes, organização, funcionamento ou manutenção de uma base de dados."
      },
      {
        title: "Preparação da apresentação",
        text: "Organizar a explicação do processo seguido e das decisões tomadas pelo grupo."
      },
      {
        title: "Partilha e revisão",
        text: "Apresentar a tarefa realizada, ouvir comentários e ajustar o produto final quando necessário."
      }
    ],
    evidence: [
      "Ficheiro ou registo produzido pelo grupo",
      "Breve síntese das decisões tomadas",
      "Participação dos elementos do grupo"
    ]
  },
  {
    id: "tarefas-individuais",
    title: "Tarefas Individuais",
    intro: "Em cada atividade diária, a tarefa individual serve para consolidar a aprendizagem e produzir evidências da tarefa realizada.",
    url: "atividades/tarefas-individuais.html",
    focus: "Tarefa individual",
    duration: "A definir pelo formador",
    product: "Evidência individual relacionada com os conteúdos de folha de cálculo, base de dados ou publicação de conteúdos.",
    steps: [
      {
        title: "Leitura da tarefa",
        text: "Confirmar o objetivo, os dados a utilizar e o resultado esperado."
      },
      {
        title: "Execução prática",
        text: "Aplicar procedimentos de criação, edição, formatação, organização ou manutenção de dados."
      },
      {
        title: "Verificação",
        text: "Rever se o ficheiro, registo ou resposta cumpre o pedido da tarefa."
      },
      {
        title: "Síntese individual",
        text: "Registar dificuldades, soluções encontradas e aspetos a melhorar."
      }
    ],
    evidence: [
      "Ficheiro ou resposta individual",
      "Registo das etapas realizadas",
      "Síntese curta da aprendizagem"
    ]
  }
];

const evaluations = [
  {
    id: "avaliacao-diagnostica",
    title: "Avaliação Diagnóstica",
    menuTitle: "Diagnóstica",
    intro: "Espaço preparado para avaliação inicial dos conhecimentos sobre folha de cálculo e base de dados.",
    url: "atividades/avaliacao-diagnostica.html",
    children: ["resultados-diagnostica"],
    embedUrl: "https://avaliacoes-formacao.netlify.app/ufcd-3776/00-diagnostico.html",
    embedTitle: "Avaliação Diagnóstica"
  },
  {
    id: "resultados-diagnostica",
    parentId: "avaliacao-diagnostica",
    title: "Resultados da Avaliação Diagnóstica",
    menuTitle: "Resultados",
    intro: "Relatório com a leitura global das respostas recolhidas na avaliação diagnóstica.",
    url: "atividades/resultados-diagnostica.html"
  },
  {
    id: "avaliacao-formativa",
    title: "Avaliação Formativa",
    menuTitle: "Formativa",
    intro: "Espaço preparado para acompanhar a aprendizagem ao longo da UFCD.",
    url: "atividades/avaliacao-formativa.html"
  },
  {
    id: "autoavaliacao-final",
    title: "Autoavaliação Final",
    menuTitle: "Autoavaliação",
    intro: "Espaço preparado para reflexão final sobre competências adquiridas.",
    url: "atividades/autoavaliacao-final.html"
  },
  {
    id: "avaliacao-entre-pares",
    title: "Avaliação Entre Pares",
    menuTitle: "Entre Pares",
    intro: "Espaço preparado para avaliação entre pares.",
    url: "atividades/avaliacao-entre-pares.html"
  },
  {
    id: "avaliacao-formacao",
    title: "Avaliação da Formação",
    menuTitle: "Formação",
    intro: "Espaço preparado para avaliação da formação.",
    url: "atividades/avaliacao-formacao.html"
  }
];

const groupTasks = [
  {
    title: "Características de uma folha de cálculo",
    topic: "Folha de cálculo: características",
    url: "conteudos/folha-caracteristicas.html",
    intro: "Reconhecer a folha de cálculo como ferramenta de organização, cálculo, análise e apresentação de dados.",
    words: [
      ["Folha de cálculo", "Grupo Sala 1"],
      ["Célula", "Grupo Sala 2"],
      ["Linha", "Grupo Sala 3"],
      ["Coluna", "Grupo Sala 4"],
      ["Dados", "Grupo Sala 5"],
      ["Fórmula", "Grupo Sala 6"]
    ]
  },
  {
    title: "Construir e formatar informação",
    topic: "Criar, gravar, editar e formatar uma folha de cálculo",
    url: "conteudos/folha-criacao-edicao.html",
    intro: "Compreender operações básicas de criação, gravação, edição e formatação numa folha de cálculo.",
    words: [
      ["Livro", "Grupo Sala 1"],
      ["Folha", "Grupo Sala 2"],
      ["Gravar", "Grupo Sala 3"],
      ["Editar", "Grupo Sala 4"],
      ["Formatação", "Grupo Sala 5"],
      ["Formato numérico", "Grupo Sala 6"]
    ]
  },
  {
    title: "Interpretar dados e gráficos",
    topic: "Vantagens, desvantagens e gráficos com modelos predefinidos",
    url: "conteudos/folha-graficos.html",
    intro: "Analisar dados e compreender representações gráficas simples.",
    words: [
      ["Vantagem", "Grupo Sala 1"],
      ["Limitação", "Grupo Sala 2"],
      ["Erro", "Grupo Sala 3"],
      ["Gráfico", "Grupo Sala 4"],
      ["Legenda", "Grupo Sala 5"],
      ["Série de dados", "Grupo Sala 6"]
    ]
  },
  {
    title: "Compreender a estrutura de uma base de dados",
    topic: "Base de dados: características, funcionamento e componentes",
    url: "conteudos/bd-caracteristicas.html",
    intro: "Identificar os principais elementos de organização de uma base de dados.",
    words: [
      ["Base de dados", "Grupo Sala 1"],
      ["Tabela", "Grupo Sala 2"],
      ["Campo", "Grupo Sala 3"],
      ["Registo", "Grupo Sala 4"],
      ["Consulta", "Grupo Sala 5"],
      ["Dado", "Grupo Sala 6"]
    ]
  },
  {
    title: "Organizar e manter conteúdos",
    topic: "Organização, manutenção e publicação de conteúdos",
    url: "conteudos/bd-manutencao.html",
    intro: "Compreender a importância da organização, atualização e publicação de informação digital.",
    words: [
      ["Organização", "Grupo Sala 1"],
      ["Manutenção", "Grupo Sala 2"],
      ["Atualização", "Grupo Sala 3"],
      ["Consistência", "Grupo Sala 4"],
      ["Publicação", "Grupo Sala 5"],
      ["Partilha", "Grupo Sala 6"]
    ]
  }
];

const glossaryUrl = "https://fad.iefp.pt/mod/glossary/view.php?id=394701";

const individualTasks = [
  {
    topic: "Folha de cálculo: características",
    url: "conteudos/folha-caracteristicas.html",
    forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=52665",
    title: "Criar uma tabela simples na folha pessoal",
    intro: "Reconhecer a estrutura básica de uma folha de cálculo e iniciar o trabalho individual no Google Sheets.",
    evidence: "Resposta no fórum Moodle e folha pessoal criada no ficheiro partilhado.",
    prompts: [
      "Criar, no ficheiro partilhado, uma folha de cálculo com o teu nome.",
      "Nessa folha, criar uma tabela simples relacionada com a formação.",
      "A tabela deve ter pelo menos 3 colunas, 3 linhas preenchidas e um título.",
      "No fórum, escrever um curto parágrafo sobre as tuas expectativas para a formação."
    ]
  },
  {
    topic: "Criar, gravar, editar e formatar uma folha de cálculo",
    url: "conteudos/folha-criacao-edicao.html",
    forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=52666",
    title: "Editar e formatar dados no ficheiro partilhado",
    intro: "Aplicar operações básicas de edição e formatação numa folha de cálculo.",
    evidence: "Resposta breve no fórum Moodle e ficheiro anexado antes de submeter.",
    prompts: [
      "Criar uma nova folha na mesma tabela de cálculo.",
      "Editar ou acrescentar informação à tabela.",
      "Aplicar formatação simples: cabeçalho em destaque, largura das colunas ajustada, limites na tabela e alinhamento adequado.",
      "No tópico do fórum, escrever uma breve resposta sobre o que fizeste."
    ]
  },
  {
    topic: "Vantagens, desvantagens e gráficos com modelos predefinidos",
    url: "conteudos/folha-graficos.html",
    forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=52667",
    title: "Representar dados através de um gráfico simples",
    intro: "Criar uma representação gráfica simples a partir de dados organizados.",
    evidence: "Resposta breve no fórum Moodle sobre o que o gráfico permite perceber.",
    prompts: [
      "Adaptar ou completar a tabela criada para permitir a criação de um gráfico.",
      "Inserir um gráfico simples com base nos dados.",
      "Escolher um modelo adequado ao tipo de informação.",
      "Confirmar se o gráfico tem título e é fácil de interpretar."
    ]
  },
  {
    topic: "Base de dados: características, funcionamento e componentes",
    url: "conteudos/bd-caracteristicas.html",
    forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=52668",
    title: "Identificar campos e registos",
    intro: "Relacionar a estrutura de uma folha de cálculo com a organização básica de uma base de dados.",
    evidence: "Resposta no fórum Moodle explicando a diferença entre campo, registo e dado.",
    prompts: [
      "Observar a tabela criada na tua folha de cálculo.",
      "Confirmar se a primeira linha da tabela apresenta nomes claros para as colunas.",
      "Identificar uma coluna que funciona como campo, uma linha que funciona como registo e um dado concreto registado numa célula.",
      "Se tiveres Microsoft Access instalado, importar ou abrir a tabela no Access com orientação do formador.",
      "Se não tiveres Microsoft Access instalado, realizar a identificação diretamente na folha de cálculo.",
      "Melhorar a organização dos dados, se necessário."
    ]
  },
  {
    topic: "Organização, manutenção e publicação de conteúdos",
    url: "conteudos/bd-manutencao.html",
    forumUrl: "https://fad.iefp.pt/mod/forum/discuss.php?d=52669",
    title: "Rever a folha criada e fazer a reflexão final",
    intro: "Consolidar o trabalho realizado ao longo da UFCD e refletir sobre a aprendizagem.",
    evidence: "Reflexão final curta no fórum Moodle.",
    prompts: [
      "Rever a folha de cálculo criada ao longo dos 5 dias.",
      "Corrigir erros, melhorar a organização e verificar se a informação está clara.",
      "Confirmar se a tabela e o gráfico estão bem apresentados.",
      "No fórum Moodle, escrever uma reflexão final curta: o que aprendeste, o que foi mais fácil, o que foi mais difícil e de que forma poderás aplicar estes conhecimentos."
    ]
  }
];

const resources = [
  {
    id: "manual",
    title: "Manual",
    intro: "Manual da UFCD 3776 em PDF para consulta e descarregamento.",
    url: "recursos/manual.html",
    pdfUrl: "assets/pdfs/Manual Ufcd 3776.pdf"
  },
  {
    id: "folha-calculo",
    title: "Microsoft Excel",
    intro: "Suporte oficial da Microsoft para aprender e consultar funcionalidades do Excel.",
    externalUrl: "https://support.microsoft.com/pt-pt/excel",
    url: "recursos/folha-calculo.html",
    children: ["excel-ficheiros", "assistente-folha-calculo"]
  },
  {
    id: "excel-ficheiros",
    parentId: "folha-calculo",
    title: "Ficheiros",
    intro: "Ficheiros de apoio à prática com folha de cálculo, organizados pela ordem de disponibilização.",
    url: "recursos/excel-ficheiros.html",
    downloadFiles: [
      {
        id: "bem-vindo-excel",
        title: "Bem-vindo ao Excel",
        description: "Ficheiro introdutório para exploração inicial da folha de cálculo.",
        path: "assets/ficheiros/excel/Bem vindo ao Excel.xlsx"
      },
      {
        id: "tutorial-formulas",
        title: "Tutorial de Fórmulas",
        description: "Apoio à utilização de fórmulas simples e operações básicas.",
        path: "assets/ficheiros/excel/Tutorial de Fórmulas.xlsx"
      },
      {
        id: "sugestoes-graficos",
        title: "10 sugestões para gráficos",
        description: "Exemplos para representar dados através de gráficos.",
        path: "assets/ficheiros/excel/10 sugestões para gráficos.xlsx"
      },
      {
        id: "graficos-circulares",
        title: "Tutorial: para além dos gráficos circulares",
        description: "Apoio à escolha e leitura de diferentes tipos de gráficos.",
        path: "assets/ficheiros/excel/Tutorial Para além dos gráficos circulares.xlsx"
      },
      {
        id: "tabela-dinamica",
        title: "Tutorial de Tabela Dinâmica",
        description: "Apoio à organização e análise de dados com tabela dinâmica.",
        path: "assets/ficheiros/excel/Tutorial de Tabela Dinâmica.xlsx"
      }
    ]
  },
  {
    id: "assistente-folha-calculo",
    parentId: "folha-calculo",
    title: "Assistente GPT",
    menuTitle: "GPT",
    intro: "Apoio orientado para colocar dúvidas, rever procedimentos e pedir ajuda durante o estudo da folha de cálculo.",
    url: "recursos/assistente-folha-calculo.html",
    menuIcon: "assets/img/assistente-gpt.png",
    gptUrl: "https://chatgpt.com/g/g-68fb60e069748191baa5d607b926b5e0-instrutor-de-folha-de-calculo"
  },
  {
    id: "base-dados",
    title: "Microsoft Access",
    intro: "Suporte oficial da Microsoft para aprender e consultar funcionalidades do Access.",
    externalUrl: "https://support.microsoft.com/pt-pt/access",
    url: "recursos/base-dados.html"
  }
];

const mainMenuItems = [
  { key: "inicio", label: "Início" },
  { key: "objetivos", label: "Objetivos" },
  { key: "metodologia", label: "Metodologia" },
  { key: "conteudos", label: "Conteúdos" },
  { key: "atividades", label: "Atividades" },
  { key: "avaliacao", label: "Avaliação" },
  { key: "recursos", label: "Recursos" }
];

const siteVisibility = {
  menuPrincipal: Object.fromEntries(mainMenuItems.map((item) => [item.key, true])),
  conteudos: Object.fromEntries(topics.map((topic) => [topic.id, false])),
  atividades: Object.fromEntries(activities.map((activity) => [activity.id, true])),
  avaliacao: Object.fromEntries(evaluations.map((evaluation) => [evaluation.id, true])),
  recursos: Object.fromEntries(resources.map((resource) => [resource.id, true])),
  ficheirosExcel: Object.fromEntries(resources.flatMap((resource) => resource.downloadFiles || []).map((file) => [file.id, true])),
  assistentesGpt: Object.fromEntries(resources.filter((resource) => resource.gptUrl).map((resource) => [resource.id, true])),
  tarefasGrupo: Object.fromEntries(groupTasks.map((task) => [task.title, true])),
  tarefasIndividuais: Object.fromEntries(individualTasks.map((task) => [task.title, true]))
};

const siteVisibilitySections = {
  menuPrincipal: true,
  conteudos: true,
  atividades: true,
  avaliacao: true,
  recursos: true,
  ficheirosExcel: true,
  assistentesGpt: true,
  tarefasGrupo: true,
  tarefasIndividuais: true
};

const siteVisibilitySectionMeta = {
  menuPrincipal: { secao: "menu_principal", chave: "secao-menu-principal", titulo: "Menu principal", tipo: "secao", ordem: 1 },
  conteudos: { secao: "conteudos", chave: "secao-conteudos", titulo: "Conteúdos", tipo: "secao", ordem: 10 },
  atividades: { secao: "atividades", chave: "secao-atividades", titulo: "Atividades", tipo: "secao", ordem: 20 },
  avaliacao: { secao: "avaliacao", chave: "secao-avaliacao", titulo: "Avaliação", tipo: "secao", ordem: 30 },
  recursos: { secao: "recursos", chave: "secao-recursos", titulo: "Recursos", tipo: "secao", ordem: 40 },
  ficheirosExcel: { secao: "ficheiros_excel", chave: "secao-ficheiros-excel", titulo: "Ficheiros Excel", tipo: "secao", ordem: 45 },
  assistentesGpt: { secao: "assistentes_gpt", chave: "secao-assistentes-gpt", titulo: "Assistentes GPT", tipo: "secao", ordem: 48 },
  tarefasGrupo: { secao: "tarefas_grupo", chave: "secao-tarefas-grupo", titulo: "Tarefas de grupo", tipo: "secao", ordem: 50 },
  tarefasIndividuais: { secao: "tarefas_individuais", chave: "secao-tarefas-individuais", titulo: "Tarefas individuais", tipo: "secao", ordem: 60 }
};

const SITE_VISIBILITY_STORAGE_KEY = "ufcd3776-site-visibility-v1";
let siteVisibilityRemoteLoaded = false;
let siteVisibilityRemoteLoading = null;

function getBasePath() {
  const path = window.location.pathname;
  return path.includes("/conteudos/") || path.includes("/atividades/") || path.includes("/recursos/") ? "../" : "";
}

function topicById(id) {
  return topics.find((topic) => topic.id === id);
}

function isSectionVisible(section) {
  return siteVisibilitySections[section] !== false;
}

function isItemVisible(section, key) {
  return isSectionVisible(section) && siteVisibility[section]?.[key] !== false;
}

function criarItemVisibilidade(secao, chave, titulo, url, tipo, nivel, visivel, ordem) {
  return {
    secao,
    chave,
    titulo,
    url: url || "",
    tipo,
    nivel,
    visivel: visivel !== false,
    ordem
  };
}

function obterConstituicaoVisibilidadeSite() {
  const itens = [];
  const adicionarSecao = (section) => {
    const meta = siteVisibilitySectionMeta[section];
    itens.push(criarItemVisibilidade(meta.secao, meta.chave, meta.titulo, "", meta.tipo, "secao", siteVisibilitySections[section], meta.ordem));
  };
  const adicionarItem = (section, key, titulo, url, tipo, ordem) => {
    const meta = siteVisibilitySectionMeta[section];
    itens.push(criarItemVisibilidade(meta.secao, key, titulo, url, tipo, "item", siteVisibility[section]?.[key.replace(/^(menu|conteudo|atividade|avaliacao|recurso|ficheiro-excel|assistente-gpt|tarefa-grupo|tarefa-individual)-/, "")], ordem));
  };

  adicionarSecao("menuPrincipal");
  mainMenuItems.forEach((item, index) => adicionarItem("menuPrincipal", `menu-${item.key}`, item.label, item.key === "inicio" ? "index.html#inicio" : `index.html#${item.key}`, "menu", 2 + index));

  adicionarSecao("conteudos");
  topics.forEach((topic, index) => adicionarItem("conteudos", `conteudo-${topic.id}`, topic.cardTitle || topic.title, topic.url, "conteudo", 11 + index));

  adicionarSecao("atividades");
  activities.forEach((activity, index) => adicionarItem("atividades", `atividade-${activity.id}`, activity.menuTitle || activity.title, activity.url, "atividade", 21 + index));

  adicionarSecao("avaliacao");
  evaluations.forEach((evaluation, index) => adicionarItem("avaliacao", `avaliacao-${evaluation.id}`, evaluation.menuTitle || evaluation.title, evaluation.url, "avaliacao", 31 + index));

  adicionarSecao("recursos");
  resources.forEach((resource, index) => adicionarItem("recursos", `recurso-${resource.id}`, resource.title, resource.url, "recurso", 41 + index));

  adicionarSecao("ficheirosExcel");
  resources.flatMap((resource) => resource.downloadFiles || []).forEach((file, index) => adicionarItem("ficheirosExcel", `ficheiro-excel-${file.id}`, file.title, file.path, "ficheiro_excel", 45.1 + index));

  adicionarSecao("assistentesGpt");
  resources.filter((resource) => resource.gptUrl).forEach((resource, index) => adicionarItem("assistentesGpt", `assistente-gpt-${resource.id}`, resource.title, resource.gptUrl, "assistente_gpt", 48.1 + index));

  adicionarSecao("tarefasGrupo");
  groupTasks.forEach((task, index) => adicionarItem("tarefasGrupo", `tarefa-grupo-${task.title}`, task.title, "atividades/tarefas-grupo.html", "tarefa_grupo", 51 + index));

  adicionarSecao("tarefasIndividuais");
  individualTasks.forEach((task, index) => adicionarItem("tarefasIndividuais", `tarefa-individual-${task.title}`, task.title, "atividades/tarefas-individuais.html", "tarefa_individual", 61 + index));

  return itens;
}

function criarMapaVisibilidadePlano() {
  return Object.fromEntries(obterConstituicaoVisibilidadeSite().map((item) => [item.chave, item.visivel !== false]));
}

function obterSecaoIndexPorSubmenu() {
  return {
    "submenu-conteudos": "conteudos",
    "submenu-atividades": "atividades",
    "submenu-avaliacao": "avaliacao",
    "submenu-recursos": "recursos"
  };
}

function abrirSubmenuPrincipal(submenuId) {
  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.setAttribute("aria-expanded", String(button.getAttribute("aria-controls") === submenuId));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId);
  });
}

function abrirMenuPeloHashDoIndex() {
  if (document.body.dataset.page !== "home") return;

  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const submenuId = Object.entries(obterSecaoIndexPorSubmenu())
    .find(([, sectionId]) => sectionId === hash)?.[0];

  if (submenuId) abrirSubmenuPrincipal(submenuId);
}

function setupMenu() {
  const homeSectionBySubmenu = obterSecaoIndexPorSubmenu();

  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.remove("open");
  });

  document.querySelectorAll(".nav-parent").forEach((button) => {
    button.addEventListener("click", () => {
      const submenuId = button.getAttribute("aria-controls");

      if (document.body.dataset.page !== "home" && homeSectionBySubmenu[submenuId]) {
        window.location.href = `${getBasePath()}index.html#${homeSectionBySubmenu[submenuId]}`;
        return;
      }

      const submenu = document.getElementById(submenuId);
      if (submenu) abrirSubmenuPrincipal(submenuId);

      if (document.body.dataset.page === "home" && homeSectionBySubmenu[submenuId]) {
        const section = document.getElementById(homeSectionBySubmenu[submenuId]);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${homeSectionBySubmenu[submenuId]}`);
      }
    });
  });

  const toggle = document.querySelector(".menu-toggle");
  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function manterMenuAtivoAberto() {
  const topicId = document.body.dataset.topic || "";
  const activityId = document.body.dataset.activity || "";
  const resourceId = document.body.dataset.resource || "";
  let submenuId = "";
  let activeUrl = "";

  if (topicId) {
    const topic = topicById(topicId);
    submenuId = "submenu-conteudos";
    activeUrl = topic?.url || "";
  } else if (activityId) {
    const evaluation = evaluations.find((item) => item.id === activityId);
    const activity = activities.find((item) => item.id === activityId);
    submenuId = evaluation ? "submenu-avaliacao" : "submenu-atividades";
    activeUrl = (evaluation || activity)?.url || "";
  } else if (resourceId) {
    const resource = resources.find((item) => item.id === resourceId);
    submenuId = "submenu-recursos";
    activeUrl = resource?.url || "";
  }

  if (!submenuId) return;

  document.querySelectorAll(".nav-parent").forEach((button) => {
    const active = button.getAttribute("aria-controls") === submenuId;
    button.setAttribute("aria-expanded", String(active));
  });

  document.querySelectorAll(".submenu").forEach((submenu) => {
    submenu.classList.toggle("open", submenu.id === submenuId);
  });

  if (activeUrl) {
    document.querySelectorAll(`#${submenuId} a`).forEach((link) => {
      link.classList.toggle("active", Boolean(link.getAttribute("href")?.endsWith(activeUrl)));
    });
  }

  if (topicId) {
    document.querySelectorAll("#submenu-conteudos .submenu-heading").forEach((button) => {
      const children = button.nextElementSibling;
      const hasActiveTopic = Boolean(children?.querySelector(`a[href$="${activeUrl}"]`));
      button.setAttribute("aria-expanded", String(hasActiveTopic));
      if (children) children.hidden = !hasActiveTopic;
    });
  }
}

function renderContentMenus() {
  const menus = document.querySelectorAll("#submenu-conteudos");
  menus.forEach((menu) => {
    if (!isSectionVisible("conteudos")) {
      menu.innerHTML = "";
      return;
    }

    menu.innerHTML = contentMenuGroups.map((group) => {
      return `
      <button class="submenu-heading submenu-heading-${group.theme}" type="button" aria-expanded="false">
        <span>${group.title}</span>
        <b aria-hidden="true">▾</b>
      </button>
      <div class="submenu-group-children" hidden>
        ${group.children.map((child) => {
          const topic = topicById(child.topicId);
          return topic ? `<a href="${getBasePath()}${topic.url}">${topic.menuTitle || topic.title}</a>` : "";
        }).join("")}
      </div>
    `;
    }).join("");
  });

  document.querySelectorAll(".submenu-heading").forEach((button) => {
    button.addEventListener("click", () => {
      const children = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".submenu-heading").forEach((otherButton) => {
        if (otherButton === button) return;
        otherButton.setAttribute("aria-expanded", "false");
        if (otherButton.nextElementSibling) otherButton.nextElementSibling.hidden = true;
      });
      button.setAttribute("aria-expanded", String(!expanded));
      if (children) children.hidden = expanded;
    });
  });
}

function renderActivityMenus() {
  document.querySelectorAll(".activity-submenu").forEach((menu) => {
    if (!isSectionVisible("atividades")) {
      menu.innerHTML = "";
      return;
    }

    menu.innerHTML = activities.filter((activity) => isItemVisible("atividades", activity.id)).map((activity) => `
      <a href="${getBasePath()}${activity.url}">${activity.menuTitle || activity.title}</a>
    `).join("");
  });
}

function renderEvaluationMenus() {
  document.querySelectorAll(".evaluation-submenu").forEach((menu) => {
    if (!isSectionVisible("avaliacao")) {
      menu.innerHTML = "";
      return;
    }

    const currentEvaluation = document.body.dataset.activity || "";
    menu.innerHTML = evaluations
      .filter((evaluation) => !evaluation.parentId && isItemVisible("avaliacao", evaluation.id))
      .map((evaluation) => {
        const children = evaluations.filter((child) => child.parentId === evaluation.id && isItemVisible("avaliacao", child.id));
        const isActive = currentEvaluation === evaluation.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${currentEvaluation === child.id ? "active" : ""}">${child.menuTitle || child.title}</a>
        `).join("");

        if (!children.length) {
          return `<a href="${getBasePath()}${evaluation.url}" class="${isActive ? "active" : ""}">${evaluation.menuTitle || evaluation.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${evaluation.url}" class="${isActive ? "active" : ""}">${evaluation.menuTitle || evaluation.title}</a>
          <div class="submenu-group-children evaluation-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}

function renderResourceMenus() {
  document.querySelectorAll(".resource-submenu").forEach((menu) => {
    if (!isSectionVisible("recursos")) {
      menu.innerHTML = "";
      return;
    }

    const currentResource = document.body.dataset.resource || "";
    menu.innerHTML = resources
      .filter((resource) => !resource.parentId && isItemVisible("recursos", resource.id))
      .map((resource) => {
        const children = resources.filter((child) => {
          if (child.parentId !== resource.id || !isItemVisible("recursos", child.id)) return false;
          if (child.gptUrl && !isItemVisible("assistentesGpt", child.id)) return false;
          return true;
        });
        const isActive = currentResource === resource.id;
        const childLinks = children.map((child) => `
          <a href="${getBasePath()}${child.url}" class="${child.menuIcon ? "submenu-icon-link" : ""} ${currentResource === child.id ? "active" : ""}">
            ${child.menuIcon ? `<img src="${getBasePath()}${child.menuIcon}" alt="" aria-hidden="true">` : ""}
            <span>${child.menuTitle || child.title}</span>
          </a>
        `).join("");

        if (!children.length) {
          return `<a href="${getBasePath()}${resource.url}" class="${isActive ? "active" : ""}">${resource.title}</a>`;
        }

        return `
          <a href="${getBasePath()}${resource.url}" class="${isActive ? "active" : ""}">${resource.title}</a>
          <div class="submenu-group-children resource-child-links">
            ${childLinks}
          </div>
        `;
      }).join("");
  });
}

function renderHomeCards() {
  const grid = document.getElementById("home-content-grid");
  if (!grid) return;

  grid.innerHTML = topics.map((topic) => `
    <article class="content-card ${topic.id.startsWith("bd-") ? "database-card" : "spreadsheet-card"}">
      <a href="${topic.url}">
        <span>${topic.area}</span>
        <h3>${topic.cardTitle}</h3>
        <p>${topic.intro}</p>
      </a>
    </article>
  `).join("");
}

function renderConteudosIndex() {
  const grid = document.getElementById("conteudos-index-grid");
  if (!grid) return;

  grid.innerHTML = contentMenuGroups.map((group) => `
    <article class="card group-task-card">
      <p class="eyebrow">${group.title}</p>
      <div class="resource-list">
        ${group.children.map((child) => {
          const topic = topicById(child.topicId);
          return topic ? `
            <article class="card">
              <h3><a href="${topic.url}">${topic.title}</a></h3>
              <p>${topic.intro}</p>
            </article>
          ` : "";
        }).join("")}
      </div>
    </article>
  `).join("");
}

function setupFloatingActions() {
  document.querySelectorAll("[data-action='top']").forEach((button) => {
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });
  document.querySelectorAll("[data-action='print']").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });
}

function setupModals() {
  const closeModal = (modal) => {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modalOpen);
      if (!modal) return;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      modal.querySelector("[data-modal-close]")?.focus();
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest("[data-modal-close]")) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".modal-backdrop:not([hidden])").forEach(closeModal);
  });
}

function getControlState() {
  try {
    return JSON.parse(localStorage.getItem("ufcd3776-control-state")) || {};
  } catch {
    return {};
  }
}

function saveControlState(state) {
  localStorage.setItem("ufcd3776-control-state", JSON.stringify(state));
}

function carregarVisibilidadeDoSite() {
  try {
    aplicarVisibilidadeDoSite(JSON.parse(localStorage.getItem(SITE_VISIBILITY_STORAGE_KEY) || "{}"));
  } catch {
    // Mantém a configuração inicial quando o browser não permite ler localStorage.
  }
}

function aplicarVisibilidadeDoSite(saved) {
  Object.entries(saved || {}).forEach(([section, values]) => {
    if (section === "secoes" && values) {
      Object.entries(values).forEach(([key, value]) => {
        if (key in siteVisibilitySections && typeof value === "boolean") {
          siteVisibilitySections[key] = value;
        }
      });
      return;
    }

    if (!siteVisibility[section] || !values) return;
    Object.entries(values).forEach(([key, value]) => {
      if (key in siteVisibility[section] && typeof value === "boolean") {
        siteVisibility[section][key] = value;
      }
    });
  });
}

function aplicarItemVisibilidadeRemota(item) {
  if (!item || typeof item.visivel !== "boolean") return;

  const chave = String(item.chave || "");
  const metaEntry = Object.entries(siteVisibilitySectionMeta).find(([, meta]) => meta.chave === chave);
  if (metaEntry) {
    siteVisibilitySections[metaEntry[0]] = item.visivel;
    return;
  }

  const mappings = [
    { prefix: "menu-", section: "menuPrincipal" },
    { prefix: "conteudo-", section: "conteudos" },
    { prefix: "atividade-", section: "atividades" },
    { prefix: "avaliacao-", section: "avaliacao" },
    { prefix: "recurso-", section: "recursos" },
    { prefix: "ficheiro-excel-", section: "ficheirosExcel" },
    { prefix: "assistente-gpt-", section: "assistentesGpt" },
    { prefix: "tarefa-grupo-", section: "tarefasGrupo" },
    { prefix: "tarefa-individual-", section: "tarefasIndividuais" }
  ];

  const mapping = mappings.find((candidate) => chave.startsWith(candidate.prefix));
  if (!mapping) return;

  const key = chave.slice(mapping.prefix.length);
  if (siteVisibility[mapping.section] && key in siteVisibility[mapping.section]) {
    siteVisibility[mapping.section][key] = item.visivel;
  }
}

function aplicarItensVisibilidadeRemota(itens) {
  if (!Array.isArray(itens)) return;
  itens.forEach(aplicarItemVisibilidadeRemota);
}

function atualizarSuperficiesVisiveisDoSite() {
  renderContentMenus();
  renderActivityMenus();
  renderEvaluationMenus();
  renderResourceMenus();
  renderHomeCards();
  renderConteudosIndex();

  if (document.getElementById("topic-root")) {
    renderTopicPage();
  }

  if (document.getElementById("activity-root")) {
    renderActivityPage();
  }

  if (document.getElementById("resource-root")) {
    renderResourcePage();
  }

  manterMenuAtivoAberto();
  abrirMenuPeloHashDoIndex();
}

function guardarVisibilidadeDoSite() {
  try {
    localStorage.setItem(SITE_VISIBILITY_STORAGE_KEY, JSON.stringify({
      secoes: siteVisibilitySections,
      ...siteVisibility
    }));
  } catch {
    // A página continua funcional mesmo que não seja possível guardar no browser.
  }
}

window.addEventListener("storage", (event) => {
  if (event.key !== SITE_VISIBILITY_STORAGE_KEY || !event.newValue) return;

  try {
    aplicarVisibilidadeDoSite(JSON.parse(event.newValue));
    atualizarSuperficiesVisiveisDoSite();
  } catch {
    // Mantém o estado atual se a alteração recebida não puder ser lida.
  }
});

async function carregarVisibilidadeRemotaDoSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) return false;
  if (siteVisibilityRemoteLoaded) return true;
  if (siteVisibilityRemoteLoading) return siteVisibilityRemoteLoading;

  siteVisibilityRemoteLoading = obterJsonAppsScript({ acao: "visibilidade_site" })
    .then((dados) => {
      if (dados?.sucesso && Array.isArray(dados.itens)) {
        aplicarItensVisibilidadeRemota(dados.itens);
        guardarVisibilidadeDoSite();
        siteVisibilityRemoteLoaded = true;
        return true;
      }

      if (dados?.sucesso && dados.visibilidade) {
        aplicarVisibilidadeDoSite(dados.visibilidade);
        guardarVisibilidadeDoSite();
        siteVisibilityRemoteLoaded = true;
        return true;
      }
      siteVisibilityRemoteLoaded = true;
      return false;
    })
    .catch(() => {
      siteVisibilityRemoteLoaded = true;
      return false;
    })
    .finally(() => {
      siteVisibilityRemoteLoading = null;
    });

  return siteVisibilityRemoteLoading;
}

async function guardarVisibilidadeRemotaDoSite() {
  if (!APPS_SCRIPT_WEB_APP_URL) return;

  try {
    const dados = new URLSearchParams();
    dados.set("acao", "guardar_visibilidade_site");
    dados.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
    dados.set("constituicao", JSON.stringify(obterConstituicaoVisibilidadeSite()));
    dados.set("visibilidade", JSON.stringify(criarMapaVisibilidadePlano()));

    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: dados
    });
  } catch {
    // Mantém a versão local se a ligação remota falhar.
  }
}

function renderSiteVisibilityControls() {
  const renderGroup = (title, section, items) => `
    <details class="site-control-group">
      <summary>
        <span>${title}</span>
        <small>${items.length} itens</small>
      </summary>
      <div class="site-control-options">
        ${items.map((item) => {
          const checked = siteVisibility[section][item.key] !== false ? "checked" : "";
          return `
            <label class="site-control-option">
              <input type="checkbox" data-visibility-control data-section="${section}" data-key="${escapeHtml(item.key)}" ${checked}>
              <span>${escapeHtml(item.label)}</span>
            </label>
          `;
        }).join("")}
      </div>
    </details>
  `;

  const contentItems = topics.map((topic) => ({ key: topic.id, label: topic.cardTitle }));
  const menuItems = mainMenuItems.map((item) => ({ key: item.key, label: item.label }));
  const activityItems = activities.map((activity) => ({ key: activity.id, label: activity.menuTitle || activity.title }));
  const evaluationItems = evaluations.map((evaluation) => ({ key: evaluation.id, label: evaluation.menuTitle || evaluation.title }));
  const resourceItems = resources.map((resource) => ({ key: resource.id, label: resource.title }));
  const excelFileItems = resources.flatMap((resource) => resource.downloadFiles || []).map((file) => ({ key: file.id, label: file.title }));
  const gptItems = resources.filter((resource) => resource.gptUrl).map((resource) => ({ key: resource.id, label: resource.title }));
  const groupItems = groupTasks.map((task) => ({ key: task.title, label: task.title }));
  const individualItems = individualTasks.map((task) => ({ key: task.title, label: task.title }));

  return `
    <div class="card site-control-card">
      <div class="site-control-heading">
        <div>
          <p class="eyebrow">Disponibilização gradual</p>
          <h2>Materiais visíveis</h2>
        </div>
        <div>
          <p>Ativa apenas os conteúdos e tarefas que devem ficar disponíveis em cada momento da UFCD.</p>
          <button class="small-button" type="button" data-action="save-site-visibility">Guardar na Apps Script</button>
        </div>
      </div>
      <div class="site-control-grid">
        ${renderGroup("Menu principal", "menuPrincipal", menuItems)}
        ${renderGroup("Conteúdos", "conteudos", contentItems)}
        ${renderGroup("Atividades", "atividades", activityItems)}
        ${renderGroup("Avaliação", "avaliacao", evaluationItems)}
        ${renderGroup("Recursos", "recursos", resourceItems)}
        ${renderGroup("Ficheiros Excel", "ficheirosExcel", excelFileItems)}
        ${renderGroup("Assistentes GPT", "assistentesGpt", gptItems)}
        ${renderGroup("Tarefas de Grupo", "tarefasGrupo", groupItems)}
        ${renderGroup("Tarefas Individuais", "tarefasIndividuais", individualItems)}
      </div>
      <div class="site-control-actions">
        <button class="small-button" type="button" data-action="save-site-visibility">Guardar na Apps Script</button>
      </div>
      <p class="teams-control-status" data-site-control-status>Alterações guardadas neste browser.</p>
    </div>
  `;
}

function atualizarControlosVisibilidadeDoSite(root) {
  root.querySelectorAll("[data-visibility-control]").forEach((input) => {
    const section = input.dataset.section;
    const key = input.dataset.key;
    if (siteVisibility[section] && key in siteVisibility[section]) {
      input.checked = siteVisibility[section][key] !== false;
    }
  });
}

function renderTeamsControl(root, options = {}) {
  const compact = Boolean(options.compact);
  const publicView = Boolean(options.publicView);

  root.innerHTML = `
    <section class="section task-page-section teams-control-section ${compact ? "compact-page-section" : ""}">
      <div class="section-inner">
        <details class="teams-page-accordion" open>
          <summary>
            <span class="teams-accordion-copy">
              <span class="eyebrow">Teams</span>
              <strong>Partilha de ecrã</strong>
              <small>Tabela simples para acompanhar quantas vezes cada formando já partilhou o ecrã nas reuniões Teams.</small>
            </span>
          </summary>

          <div class="teams-accordion-body">
            <div class="teams-control-layout teams-control-layout-simple">
              <article class="card teams-summary-card">
                <p class="eyebrow">Resumo</p>
                <div class="teams-summary-grid">
                  <span><strong data-teams-total>0</strong><em>Total</em></span>
                  <span><strong data-teams-done>0</strong><em>Já partilharam</em></span>
                  <span><strong data-teams-missing>0</strong><em>Ainda sem partilha</em></span>
                </div>
                <p class="teams-config-note" data-teams-config-note></p>
                <p class="teams-control-status" data-teams-status></p>
              </article>
            </div>

            <div class="card teams-table-card">
              <div class="teams-table-heading">
                <div>
                  <p class="eyebrow">Mapa</p>
                  <h2>Formandos</h2>
                </div>
                ${publicView ? "" : `<label class="teams-toggle">
                  <input type="checkbox" data-action="teams-show-inactive">
                  <span>Mostrar desativados</span>
                </label>`}
              </div>
              <div class="teams-table-wrap">
                <table class="teams-control-table ${publicView ? "teams-public-table" : ""}">
                  <thead>
                    <tr>
                      <th>Nome do formando</th>
                      <th>N.º de partilhas</th>
                      <th>Último registo</th>
                      ${publicView ? "" : "<th>Estado</th>"}
                      ${publicView ? "" : "<th>Partilhas</th>"}
                    </tr>
                  </thead>
                  <tbody data-teams-table-body>
                    <tr><td colspan="${publicView ? "3" : "5"}">Ainda não existem formandos carregados.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </details>

        ${publicView ? "" : `
          <details class="teams-page-accordion site-control-accordion">
            <summary>
              <span class="teams-accordion-copy">
                <span class="eyebrow">Gestão de materiais</span>
                <strong>Controlo do Site</strong>
                <small>Ativa ou desativa conteúdos, tarefas de grupo e tarefas individuais.</small>
              </span>
            </summary>
            <div class="teams-accordion-body">
              ${renderSiteVisibilityControls()}
            </div>
          </details>
        `}
      </div>
    </section>
  `;

  root.dataset.teamsPublicView = publicView ? "true" : "false";
  setupTeamsAccordions(root);
  setupTeamsControl(root);
}

function setupTeamsAccordions(root) {
  const accordions = [...root.querySelectorAll(".teams-page-accordion")];
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    accordion.addEventListener("toggle", () => {
      if (!accordion.open) return;
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.open = false;
        }
      });
    });
  });
}

async function setupTeamsControl(root) {
  const status = root.querySelector("[data-teams-status]");
  const configNote = root.querySelector("[data-teams-config-note]");
  const controlStatus = root.querySelector("[data-site-control-status]");

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (configNote) {
      configNote.textContent = "Ligação ao Apps Script ainda não configurada. A página está pronta, mas precisa do URL da Web App para carregar formandos e guardar partilhas.";
    }
    if (status) {
      status.textContent = "Configura o URL da Web App do Apps Script em APPS_SCRIPT_WEB_APP_URL.";
    }
  }

  if (controlStatus) controlStatus.textContent = "A carregar visibilidade do site...";
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite();
  atualizarControlosVisibilidadeDoSite(root);
  if (controlStatus) {
    controlStatus.textContent = visibilidadeRemotaOk
      ? "Visibilidade carregada da configuração central."
      : "Alterações guardadas neste browser. A configuração central ainda não respondeu.";
  }

  await carregarDadosTeams(root);

  if (APPS_SCRIPT_WEB_APP_URL) {
    window.setInterval(() => carregarDadosTeams(root), 30000);
  }

  root.addEventListener("click", async (event) => {
    const saveVisibilityButton = event.target.closest('[data-action="save-site-visibility"]');
    if (saveVisibilityButton) {
      const controlStatus = root.querySelector("[data-site-control-status]");
      if (controlStatus) controlStatus.textContent = "A enviar constituição do site para a Apps Script...";
      guardarVisibilidadeDoSite();
      await guardarVisibilidadeRemotaDoSite();
      if (controlStatus) {
        controlStatus.textContent = `Pedido enviado para a Apps Script: ${obterConstituicaoVisibilidadeSite().length} itens. Confirma a folha Visibilidade_Site.`;
      }
      return;
    }

    const button = event.target.closest("[data-teams-action]");
    if (!button) return;
    await registarAcaoPartilhaEcra(root, button.dataset.nome || "", button.dataset.teamsAction || "incrementar");
  });

  root.addEventListener("change", (event) => {
    if (event.target.matches('[data-action="teams-show-inactive"]')) {
      root.dataset.showInactiveTeams = event.target.checked ? "true" : "false";
      carregarDadosTeams(root);
      return;
    }

    if (event.target.matches("[data-visibility-control]")) {
      const section = event.target.dataset.section;
      const key = event.target.dataset.key;
      if (siteVisibility[section] && key in siteVisibility[section]) {
        siteVisibility[section][key] = event.target.checked;
        guardarVisibilidadeDoSite();
        guardarVisibilidadeRemotaDoSite();
        const controlStatus = root.querySelector("[data-site-control-status]");
        if (controlStatus) controlStatus.textContent = "Visibilidade atualizada. As páginas abertas do site recebem a alteração; se necessário, recarrega a página para confirmar.";
      }
    }
  });
}

async function carregarDadosTeams(root) {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    preencherTabelaTeams(root, [], []);
    atualizarResumoTeams(root, [], []);
    return;
  }

  const status = root.querySelector("[data-teams-status]");

  try {
    const [formandos, registos] = await Promise.all([
      obterJsonAppsScript({ acao: "formandos" }),
      obterJsonAppsScript({ acao: "registos", questionario: "Partilha de ecrã" })
    ]);

    preencherTabelaTeams(root, formandos.formandos || [], registos.registos || []);
    atualizarResumoTeams(root, registos.registos || [], formandos.formandos || []);

    if (status) status.textContent = "Dados carregados.";
  } catch (erro) {
    if (status) status.textContent = "Não foi possível carregar dados do Apps Script.";
  }
}

function preencherTabelaTeams(root, formandos, registos) {
  const tbody = root.querySelector("[data-teams-table-body]");
  if (!tbody) return;

  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const publicView = root.dataset.teamsPublicView === "true";
  const mostrarDesativados = root.dataset.showInactiveTeams === "true";
  const nomesVisiveis = nomes.filter((nome) => mostrarDesativados || estado[nome]?.ativo !== false);
  const colspan = publicView ? 3 : 5;

  if (!nomesVisiveis.length) {
    tbody.innerHTML = `<tr><td colspan="${colspan}">Ainda não existem formandos carregados.</td></tr>`;
    return;
  }

  const maxPartilhas = Math.max(...nomesVisiveis.map((nome) => estado[nome]?.total || 0), 0);

  tbody.innerHTML = nomesVisiveis.map((nome) => {
    const dados = estado[nome] || { total: 0, ultimo: "", ativo: true };
    const ativo = dados.ativo !== false;
    const total = dados.total || 0;
    const percentagem = maxPartilhas > 0 ? Math.max((total / maxPartilhas) * 100, 6) : 0;
    const barClass = total === 0 ? "is-zero" : total === maxPartilhas ? "is-max" : "is-mid";
    return `
    <tr class="${ativo ? "" : "teams-row-inactive"}">
      <td>${escapeHtml(nome)}</td>
      <td>
        <div class="teams-share-meter ${barClass}" style="--share-level: ${percentagem}%">
          <strong>${total > 0 ? total : ""}</strong>
          <span aria-hidden="true"></span>
        </div>
      </td>
      <td>${escapeHtml(formatarDataTeams(dados.ultimo || ""))}</td>
      ${publicView ? "" : `
      <td>
        <div class="teams-state-actions">
          <button class="small-button teams-status-button teams-activate-button" type="button" data-teams-action="ativar" data-nome="${escapeHtml(nome)}" ${ativo ? "disabled" : ""}>Ativar</button>
          <button class="small-button teams-status-button teams-deactivate-button" type="button" data-teams-action="desativar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"}>Desativar</button>
        </div>
      </td>
      `}
      ${publicView ? "" : `<td>
        <div class="teams-actions">
          <button class="small-button teams-count-button teams-plus-button" type="button" data-teams-action="incrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Adicionar partilha de ${escapeHtml(nome)}">+</button>
          <button class="small-button teams-count-button teams-minus-button" type="button" data-teams-action="decrementar" data-nome="${escapeHtml(nome)}" ${ativo ? "" : "disabled"} aria-label="Remover uma partilha de ${escapeHtml(nome)}">-</button>
        </div>
      </td>`}
    </tr>
  `;
  }).join("");
}

function atualizarResumoTeams(root, registos, formandos = []) {
  const nomes = obterNomesTeams(formandos, registos);
  const estado = calcularEstadoPartilhaTeams(registos);
  const nomesAtivos = nomes.filter((nome) => estado[nome]?.ativo !== false);
  const apresentaram = nomesAtivos.filter((nome) => (estado[nome]?.total || 0) > 0);

  const total = nomesAtivos.length;
  const done = apresentaram.length;
  const missing = Math.max(total - done, 0);

  const totalEl = root.querySelector("[data-teams-total]");
  const doneEl = root.querySelector("[data-teams-done]");
  const missingEl = root.querySelector("[data-teams-missing]");

  if (totalEl) totalEl.textContent = String(total);
  if (doneEl) doneEl.textContent = String(done);
  if (missingEl) missingEl.textContent = String(missing);
}

function obterNomesTeams(formandos, registos) {
  const nomes = new Set(formandos.filter(Boolean));
  registos.forEach((registo) => {
    if (registo["Nome do formando"]) nomes.add(registo["Nome do formando"]);
  });
  return Array.from(nomes).sort((a, b) => a.localeCompare(b, "pt-PT"));
}

function normalizarAcaoTeams(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function calcularEstadoPartilhaTeams(registos) {
  return registos.reduce((acc, registo) => {
    const nome = registo["Nome do formando"];
    if (!nome) return acc;

    if (!acc[nome]) {
      acc[nome] = { total: 0, ultimo: "", ativo: true };
    }

    const acao = normalizarAcaoTeams(registo["Ação"] || registo.Acao || registo["Acção"] || registo["Partilha de ecrã"]);

    if (acao === "desativar" || acao === "desativado") {
      acc[nome].ativo = false;
    } else if (acao === "ativar" || acao === "ativo") {
      acc[nome].ativo = true;
    } else if (acao === "decrementar" || acao === "remover" || acao === "removida" || acao === "removido" || acao === "nao" || acao === "não" || acao === "-1") {
      acc[nome].total = Math.max((acc[nome].total || 0) - 1, 0);
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    } else if (acao === "" || acao === "sim" || acao === "incrementar" || acao === "+1") {
      acc[nome].total += 1;
      acc[nome].ultimo = registo["Data da reunião"] || registo.Data || acc[nome].ultimo;
    }

    return acc;
  }, {});
}

async function registarAcaoPartilhaEcra(root, nome, acao) {
  const status = root.querySelector("[data-teams-status]");

  if (!nome) {
    if (status) status.textContent = "Não foi possível identificar o formando.";
    return;
  }

  if (!APPS_SCRIPT_WEB_APP_URL) {
    if (status) status.textContent = "Não foi possível guardar: falta configurar o URL do Apps Script.";
    return;
  }

  try {
    await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        spreadsheet_id: APPS_SCRIPT_SPREADSHEET_ID,
        questionario: "Partilha de ecrã",
        respostas: {
          "Nome do formando": nome,
          "Data da reunião": new Date().toISOString().slice(0, 10),
          "Partilha de ecrã": obterValorPartilhaTeams(acao),
          "Ação": acao
        }
      }),
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });

    if (status) status.textContent = mensagemAcaoPartilhaTeams(nome, acao);
    await aguardar(1200);
    await carregarDadosTeams(root);
  } catch (erro) {
    if (status) status.textContent = "Não foi possível guardar a alteração.";
  }
}

function mensagemAcaoPartilhaTeams(nome, acao) {
  if (acao === "decrementar") return `Foi removida uma partilha de ${nome}.`;
  if (acao === "desativar") return `${nome} foi desativado da lista.`;
  if (acao === "ativar") return `${nome} voltou à lista ativa.`;
  return `Partilha registada para ${nome}.`;
}

function obterValorPartilhaTeams(acao) {
  if (acao === "decrementar") return "Removida";
  if (acao === "desativar") return "Desativar";
  if (acao === "ativar") return "Ativar";
  return "Sim";
}

function formatarDataTeams(valor) {
  const texto = String(valor || "").trim();
  if (!texto) return "";

  if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
    const [ano, mes, dia] = texto.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  const data = new Date(texto);
  if (!Number.isNaN(data.getTime())) {
    return data.toLocaleDateString("pt-PT");
  }

  return texto.split("T")[0] || texto;
}

function aguardar(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function obterJsonAppsScript(params) {
  const url = new URL(APPS_SCRIPT_WEB_APP_URL);
  if (APPS_SCRIPT_SPREADSHEET_ID) {
    url.searchParams.set("spreadsheet_id", APPS_SCRIPT_SPREADSHEET_ID);
  }
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return obterJsonp(url.toString());
}

function obterJsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = `ufcd3776Callback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const separator = url.includes("?") ? "&" : "?";

    window[callbackName] = (dados) => {
      delete window[callbackName];
      script.remove();
      resolve(dados);
    };

    script.onerror = () => {
      delete window[callbackName];
      script.remove();
      reject(new Error("Não foi possível carregar dados do Apps Script."));
    };

    script.src = `${url}${separator}callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTopicPage() {
  const root = document.getElementById("topic-root");
  if (!root) return;

  const topic = topicById(document.body.dataset.topic) || topics[0];
  const gammaDisponivel = Boolean(topic.gammaUrl && isItemVisible("conteudos", topic.id));
  document.title = `UFCD 3776 | ${topic.title}`;
  document.querySelectorAll("#submenu-conteudos a").forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(topic.url);
    link.classList.toggle("active", Boolean(active));
  });

  if (gammaDisponivel) {
    root.innerHTML = `
      <section class="gamma-section content-gamma-full" aria-label="${topic.cardTitle}">
        <iframe class="gamma-frame gamma-content-frame" src="${topic.gammaUrl}" title="${topic.cardTitle}" loading="lazy" allowfullscreen="allowfullscreen"></iframe>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="hero content-hero no-image-hero">
      <div class="hero-content">
        <h1>${topic.cardTitle}</h1>
        <p>${topic.intro}</p>
      </div>
    </section>

    <section class="section">
      <div class="lesson-layout">
        <div class="lesson-stack">
          <article class="card placeholder-note">
            <h2>Conteúdo para disponibilização</h2>
            <p>Esta página está integrada na estrutura do site e será disponibilizada de acordo com o controlo definido pelo formador.</p>
          </article>
          <article class="card">
            <h2>1. Enquadramento</h2>
            <p>Espaço reservado para explicar o tema com linguagem simples e exemplos ligados à utilização prática de aplicações de folha de cálculo ou base de dados.</p>
          </article>
          <article class="card">
            <h2>2. Exemplo orientado</h2>
            <p>Espaço reservado para uma demonstração passo a passo, adequada ao nível introdutório da UFCD.</p>
          </article>
          <article class="card activity-card">
            <p class="eyebrow">Atividade</p>
            <h2>Experimenta</h2>
            <p>Espaço reservado para uma tarefa curta que permita aplicar este conteúdo.</p>
          </article>
        </div>
        <aside class="card aside-box">
          <h3>Nesta página</h3>
          <ul class="clean-list">
            <li>Enquadramento</li>
            <li>Exemplo orientado</li>
            <li>Atividade</li>
            <li>Síntese</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderActivityPage() {
  const root = document.getElementById("activity-root");
  if (!root) return;

  const activity = activities.find((item) => item.id === document.body.dataset.activity)
    || evaluations.find((item) => item.id === document.body.dataset.activity)
    || activities[0];
  const isEvaluation = evaluations.some((item) => item.id === activity.id);
  document.title = `UFCD 3776 | ${activity.title}`;

  const activeSubmenu = document.getElementById(isEvaluation ? "submenu-avaliacao" : "submenu-atividades");
  activeSubmenu?.querySelectorAll("a").forEach((link) => {
    const active = link.getAttribute("href")?.endsWith(activity.url);
    link.classList.toggle("active", Boolean(active));
  });

  if (activity.id === "controlo-teams") {
    renderTeamsControl(root, {
      compact: document.body.dataset.depth === "embed",
      publicView: document.body.dataset.depth !== "embed"
    });
    return;
  }

  if (activity.id === "tarefas-grupo") {
    const overviewItems = [
      "A formação está organizada em 5 dias, com 5 horas por dia.",
      "Abrir o harmónio correspondente ao tema tratado no dia.",
      "Cada sala trabalha apenas a palavra que lhe está atribuída.",
      "Explicar o significado por palavras próprias.",
      "Acrescentar um exemplo simples quando fizer sentido.",
      "Registar o contributo no glossário colaborativo."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <details class="task-overview-card">
            <summary>
              <span class="task-module-copy">
                <strong>Glossário colaborativo</strong>
                <small>Todos os dias se acrescentam novos termos, definições e exemplos para construir uma base comum de vocabulário técnico.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">TG</span>
            </summary>
            <div class="task-module-body">
              <p>Nesta atividade vamos construir, ao longo dos 5 dias da UFCD, um glossário colaborativo.</p>
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </details>

          <div class="task-module-list">
            ${groupTasks.filter((task) => isItemVisible("tarefasGrupo", task.title)).map((task, index) => `
              <details class="task-module-card">
                <summary>
                  <span class="task-module-copy">
                    <strong>${task.title || task.topic}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">TG ${index + 1}</span>
                </summary>

                <div class="task-module-body">
                  <p>Tema associado: ${task.topic}.</p>
                  <p>Cada termo deve ser trabalhado com uma definição clara, linguagem acessível e, sempre que possível, um exemplo simples.</p>

                  <div class="task-block">
                    <strong>Palavras a trabalhar</strong>
                    <div class="word-list">
                      ${task.words.map(([word, group]) => `<span><strong>${word}</strong> ${group}</span>`).join("")}
                    </div>
                  </div>

                  <div class="embed-fallback resource-action-row align-right">
                    <a class="small-button" href="${getBasePath()}${task.url}">Ver conteúdo do dia</a>
                    <a class="small-button orange" href="${glossaryUrl}" target="_blank" rel="noopener">Abrir glossário</a>
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (activity.id === "tarefas-individuais") {
    const overviewItems = [
      "A formação está organizada em 5 dias, com 5 horas por dia.",
      "Abrir o harmónio correspondente ao tema tratado no dia.",
      "Realizar uma tarefa individual curta e prática.",
      "Partilhar uma imagem ou captura de ecrã como evidência.",
      "Registar apenas uma reflexão breve quando for pedido."
    ];

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <details class="task-overview-card">
            <summary>
              <span class="task-module-copy">
                <strong>Tarefas Individuais</strong>
                <small>Em cada um dos 5 dias há uma tarefa individual prática para consolidar a aprendizagem e registar evidências.</small>
              </span>
              <span class="task-module-mark" aria-hidden="true">TI</span>
            </summary>
            <div class="task-module-body">
              <p>Nesta área ficam organizadas as 5 tarefas individuais associadas às atividades diárias da UFCD 3776.</p>
              <ul class="moodle-like-list">
                ${overviewItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </details>

          <div class="task-module-list">
            ${individualTasks.filter((task) => isItemVisible("tarefasIndividuais", task.title)).map((task, index) => `
              <details class="task-module-card">
                <summary>
                  <span class="task-module-copy">
                    <strong>${task.title}</strong>
                    <small>${task.intro}</small>
                  </span>
                  <span class="task-module-mark" aria-hidden="true">TI ${index + 1}</span>
                </summary>

                <div class="task-module-body">
                  <p>Tema associado: ${task.topic}.</p>

                  <div class="task-block">
                    <strong>Orientações</strong>
                    <ul class="clean-list task-prompt-list">
                      ${task.prompts.map((prompt) => `<li>${prompt}</li>`).join("")}
                    </ul>
                  </div>

                  <div class="embed-fallback resource-action-row align-right">
                    <a class="small-button" href="${getBasePath()}${task.url}">Ver conteúdo do dia</a>
                    ${task.forumUrl ? `<a class="small-button orange" href="${task.forumUrl}" target="_blank" rel="noopener">Abrir tarefa</a>` : ""}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (!isEvaluation) {
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Atividades</p>
            <h1>${activity.title}</h1>
            <p class="lead">${activity.intro}</p>
          </div>

          <div class="activity-meta-grid">
            <article class="card activity-meta-card">
              <p class="eyebrow">Foco</p>
              <h3>${activity.focus}</h3>
            </article>
            <article class="card activity-meta-card">
              <p class="eyebrow">Duração</p>
              <h3>${activity.duration}</h3>
            </article>
          </div>

          <details class="card group-task-card task-details-card">
            <summary>
              <span>
                <h3>Etapas da atividade</h3>
                <p>Consulta a sequência proposta para esta atividade diária.</p>
              </span>
              <span class="accordion-icon" aria-hidden="true"></span>
            </summary>
            <ol class="agenda-list">
              ${activity.steps.map((step) => `
                <li><strong>${step.title}</strong><span>${step.text}</span></li>
              `).join("")}
            </ol>
          </details>

          <div class="activity-output-grid">
            <article class="card activity-card">
              <p class="eyebrow">Produto esperado</p>
              <h3>Resultado da atividade</h3>
              <p>${activity.product}</p>
            </article>

            <article class="card">
              <p class="eyebrow">Evidências</p>
              <h3>Registos a guardar</h3>
              <ul class="clean-list">
                ${activity.evidence.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          </div>

          ${activity.mentimeterUrl ? `
            <section class="embedded-page-shell mentimeter-embed-block" aria-label="Mentimeter - ${activity.title}">
              <div class="mentimeter-frame-wrap">
                <iframe
                  class="mentimeter-frame"
                  sandbox="allow-popups allow-scripts allow-same-origin allow-presentation"
                  allowfullscreen="true"
                  allowtransparency="true"
                  frameborder="0"
                  src="${activity.mentimeterUrl}"
                  title="Mentimeter - Brainstorming UFCD 3776"></iframe>
              </div>
              <div class="embed-fallback">
                <a class="small-button" href="${activity.mentimeterUrl}">Abrir apresentação</a>
                ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}">Participar</a>` : ""}
                ${activity.qrCode ? `<button class="small-button" type="button" data-modal-open="mentimeter-qr-modal">Mostrar QR Code</button>` : ""}
              </div>
              ${activity.qrCode ? `
                <div class="modal-backdrop qr-modal-backdrop" id="mentimeter-qr-modal" hidden>
                  <div class="modal qr-modal" role="dialog" aria-modal="true" aria-labelledby="mentimeter-qr-title">
                    <button class="modal-close" type="button" data-modal-close aria-label="Fechar janela">&times;</button>
                    <h2 id="mentimeter-qr-title">Participar no brainstorming</h2>
                    <p>Usa o QR Code para aceder à nuvem de palavras no telemóvel.</p>
                    <img src="${getBasePath()}${activity.qrCode}" alt="QR Code para participar no Mentimeter">
                    ${activity.participationUrl ? `<a class="small-button orange" href="${activity.participationUrl}">Abrir ligação de participação</a>` : ""}
                  </div>
                </div>
              ` : ""}
            </section>
          ` : ""}
        </div>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="section task-page-section">
      <div class="section-inner">
        <div class="section-heading task-page-heading">
          <p class="eyebrow">${isEvaluation ? "Avaliação" : "Atividades"}</p>
          <h1>${activity.title}</h1>
          <p class="lead">${activity.intro}</p>
        </div>
        ${activity.embedUrl ? `
          <article class="card embedded-evaluation-card">
            <div class="embedded-resource">
              <iframe
                class="external-frame evaluation-frame"
                src="${activity.embedUrl}"
                width="100%"
                height="900"
                style="border:0;"
                loading="lazy"
                title="${activity.embedTitle || activity.title}"></iframe>
            </div>
          </article>
        ` : `
          <article class="card group-task-card">
            <p class="eyebrow">A preparar</p>
            <h3>Espaço reservado</h3>
            <p>Esta página está pronta para receber instruções, critérios, ficheiros de apoio ou formulários associados à atividade.</p>
          </article>
        `}
      </div>
    </section>
  `;
}

function renderResourcePage() {
  const root = document.getElementById("resource-root");
  if (!root) return;

  const resource = resources.find((item) => item.id === document.body.dataset.resource) || resources[0];
  document.title = `UFCD 3776 | ${resource.title}`;

  if (resource.gptUrl) {
    if (!isItemVisible("assistentesGpt", resource.id)) {
      root.innerHTML = `
        <section class="section task-page-section">
          <div class="section-inner">
            <article class="card group-task-card">
              <p class="eyebrow">Recurso</p>
              <h1>${resource.title}</h1>
              <p>Este assistente ainda não está disponível.</p>
            </article>
          </div>
        </section>
      `;
      return;
    }

    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1 class="resource-title-with-icon">
              <a href="${resource.gptUrl}" target="_blank" rel="noopener">
                ${resource.menuIcon ? `<img src="${getBasePath()}${resource.menuIcon}" alt="" aria-hidden="true">` : ""}
                <span>${resource.title}</span>
              </a>
            </h1>
            <p class="lead">Este assistente serve para apoiar o estudo da folha de cálculo, ajudando a esclarecer dúvidas, rever procedimentos e orientar a realização das tarefas.</p>
          </div>

          <div class="resource-list">
            <article class="card group-task-card">
              <p class="eyebrow">Como utilizar</p>
              <h3>Antes de abrir o assistente</h3>
              <ul class="clean-list task-prompt-list">
                <li>Identifica o conteúdo ou atividade em que estás a trabalhar.</li>
                <li>Escreve a tua dúvida de forma clara e concreta.</li>
                <li>Indica o que já tentaste fazer ou compreender.</li>
                <li>Pede explicações passo a passo sempre que precisares.</li>
              </ul>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Boas práticas</p>
              <h3>Usa como apoio à aprendizagem</h3>
              <p>O assistente deve ajudar a pensar, rever e melhorar respostas. Não deve substituir o teu trabalho: usa as sugestões para compreender melhor os procedimentos e depois constrói a tua própria resposta.</p>
            </article>

            <article class="card group-task-card">
              <p class="eyebrow">Acesso</p>
              <h3>Abrir assistente</h3>
              <p>O assistente abre numa nova aba do navegador. Poderá ser necessário iniciar sessão no ChatGPT.</p>
              <div class="embed-fallback resource-action-row align-right">
                <a class="small-button" href="${resource.gptUrl}" target="_blank" rel="noopener">Abrir assistente</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (resource.pdfUrl) {
    const pdfUrl = `${getBasePath()}${resource.pdfUrl}`;
    root.innerHTML = `
      <section class="pdf-reader-shell" aria-label="Leitor do manual em PDF">
        <iframe class="pdf-frame native-pdf-frame" src="${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1" title="Manual da UFCD 3776"></iframe>
        <div class="pdf-fallback">
          <a class="small-button" href="${pdfUrl}">Abrir PDF</a>
          <a class="small-button orange" href="${pdfUrl}" download>Descarregar PDF</a>
        </div>
      </section>
    `;
    return;
  }

  if (resource.downloadFiles) {
    const visibleFiles = resource.downloadFiles.filter((file) => isItemVisible("ficheirosExcel", file.id));
    root.innerHTML = `
      <section class="section task-page-section">
        <div class="section-inner">
          <div class="section-heading task-page-heading">
            <p class="eyebrow">Recursos</p>
            <h1>${resource.title}</h1>
            <p class="lead">${resource.intro}</p>
          </div>

          <div class="download-resource-list">
            ${visibleFiles.length ? visibleFiles.map((file, index) => {
              const fileUrl = `${getBasePath()}${file.path}`;
              return `
                <article class="card download-resource-card">
                  <span class="download-resource-number">${index + 1}</span>
                  <div>
                    <h3>${file.title}</h3>
                    <p>${file.description}</p>
                  </div>
                  <a class="small-button" href="${fileUrl}" download>Descarregar ficheiro</a>
                </article>
              `;
            }).join("") : `
              <article class="card group-task-card">
                <p class="eyebrow">Ficheiros</p>
                <h3>A disponibilizar</h3>
                <p>Os ficheiros serão disponibilizados gradualmente pelo formador.</p>
              </article>
            `}
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (resource.externalUrl) {
    root.innerHTML = `
      <section class="embedded-page-shell resource-full-page-shell" aria-label="${resource.title}">
        <iframe class="external-frame full-page-frame resource-full-page-frame" src="${resource.externalUrl}" title="${resource.title}" loading="lazy"></iframe>
      </section>
    `;
    return;
  }

  root.innerHTML = `
    <section class="section task-page-section">
      <div class="section-inner">
        <div class="section-heading task-page-heading">
          <p class="eyebrow">Recursos</p>
          <h1>${resource.title}</h1>
          <p class="lead">${resource.intro}</p>
        </div>
        <article class="card group-task-card">
          <p class="eyebrow">A preparar</p>
          <h3>Espaço reservado</h3>
          <p>Este espaço ficará ligado aos materiais de apoio reais da UFCD 3776.</p>
        </article>
      </div>
    </section>
  `;
}

function renderStandaloneTeamsControlPage() {
  const root = document.getElementById("teams-control-root");
  if (!root) return;

  document.title = "UFCD 3776 | Partilha de ecrã";
  renderTeamsControl(root, { compact: false, publicView: false });
}

async function inicializarVisibilidadeRemotaDoSite() {
  const visibilidadeRemotaOk = await carregarVisibilidadeRemotaDoSite();
  if (!visibilidadeRemotaOk) return;

  atualizarSuperficiesVisiveisDoSite();

  const teamsRoot = document.getElementById("activity-root") || document.getElementById("teams-control-root");
  if (teamsRoot) {
    atualizarControlosVisibilidadeDoSite(teamsRoot);
  }
}

carregarVisibilidadeDoSite();
renderContentMenus();
renderActivityMenus();
renderEvaluationMenus();
renderResourceMenus();
setupMenu();
setupFloatingActions();
renderHomeCards();
renderConteudosIndex();
renderTopicPage();
renderActivityPage();
renderResourcePage();
renderStandaloneTeamsControlPage();
setupModals();
manterMenuAtivoAberto();
abrirMenuPeloHashDoIndex();
inicializarVisibilidadeRemotaDoSite();
