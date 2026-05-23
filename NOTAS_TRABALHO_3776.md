# Notas de trabalho - UFCD 3776

Este ficheiro serve para ir acumulando decisões, pedidos e próximos passos, para não ser necessário enviar tudo um a um em cada momento da produção.

## Decisões de base

- O site da UFCD 3776 deve seguir a estrutura-base da UFCD 9950.
- A cor estrutural/neutra do site é azul.
- Folha de cálculo deve usar verdes.
- Base de dados deve usar laranjas.
- As páginas de conteúdo não devem ter imagens grandes quando a capa não usa imagem.
- Nas capas das páginas de conteúdo, retirar linhas redundantes como "UFCD 3776 · área".
- Usar sempre linguagem alinhada com o referencial, sem acrescentar conteúdos fora dele.

## Linguagem das atividades

- Não usar "trabalho" nem "exercício" como designação principal.
- A formação tem 25 horas, organizada em 5 dias de 5 horas.
- Cada dia deve ter uma atividade.
- Cada atividade diária deve incluir:
  - uma tarefa de grupo;
  - uma tarefa individual.
- As páginas de Tarefas de Grupo e Tarefas Individuais devem apresentar 5 entradas, uma por dia/tema.
- A área de atividades deve ser comum e reutilizável em UFCDs/UCs.

## Brainstorming

- Página preparada.
- Mentimeter incorporado.
- QR Code guardado em `assets/img/mentimeter_qr_code.png`.
- QR Code deve abrir em janela pequena junto ao canto inferior do bloco do Mentimeter.

## Tarefas de Grupo

- As tarefas de grupo devem seguir o modelo da UFCD 9950.
- A página deve funcionar como glossário colaborativo.
- Enunciados atualizados a partir do documento `Tarefas Grupo Ufcd Folha Calculo.docx`.
- Deve existir um harmónio por dia/tema.
- Devem existir 5 harmónios, alinhados com os 5 dias da formação.
- Em cada dia, cada sala trabalha apenas uma palavra atribuída.
- Não mostrar todas as salas com todas as palavras em simultâneo.
- O título de cada harmónio deve corresponder ao tema tratado nesse dia.
- Já existe uma primeira sequência de dias/temas criada em `assets/app.js`.
- Link real do glossário FAD: `https://fad.iefp.pt/mod/glossary/view.php?id=394701`.
- Termos atualizados a partir do documento fornecido.
- Os títulos dos harmónios não devem incluir "Dia 1", "Dia 2", etc.; devem ficar apenas com o tema.

## Página de controlo

- O controlo interno não deve ficar acessível pelo site.
- No site deve aparecer apenas `Partilha de ecrã`, como na UFCD 9950.
- Página pública criada em `atividades/controlo-teams.html`.
- Versão para incorporar/formador criada em `atividades/incorporar/controlo-teams.html`.
- A página pública controla apenas as partilhas de ecrã.
- A versão incorporada foi alinhada com a estrutura da UFCD 9950: usa `teams-control-root`, carrega `assets/config.js` e é renderizada por uma função autónoma no `app.js`.
- Controlo das partilhas de ecrã colocado no mesmo modelo da UFCD 9950:
  - página pública mostra a tabela de formandos sem botões;
  - versão `atividades/incorporar/controlo-teams.html` fica preparada para registar partilhas;
  - versão incorporada tem dois harmónios como a UFCD 9950: `Partilha de ecrã` e `Controlo do Site`;
  - o `Controlo do Site` fica preparado com todos os pontos do menu: menu principal, conteúdos, atividades, avaliação, recursos, tarefas de grupo e tarefas individuais;
  - tabela com nome do formando, número de partilhas, último registo, estado e ações;
  - usa a Web App da UFCD 9950 e o ficheiro de resultados das avaliações da UFCD 3776: `1-gQGEHiLdQDwOGjGQbl6chxHS1zpX8rA7uebkXlTVOY`.
- Pode evoluir para lista nominal de formandos quando essa lista estiver disponível.

## Tarefas Individuais

- Criada primeira versão das Tarefas Individuais em `assets/app.js`.
- A página segue o modelo de harmónios da UFCD 9950.
- Enunciados atualizados a partir do documento `Tarefas Individuais Ufcd Folha Calculo.docx`.
- Devem existir 5 tarefas individuais, alinhadas com os 5 dias da formação.
- As tarefas individuais devem ser mais práticas e curtas.
- A lógica preferida é:
  - usar um ficheiro de folha de cálculo partilhado pelo formador;
  - realizar uma ação concreta no ficheiro;
  - partilhar uma imagem ou captura de ecrã como evidência;
  - escrever apenas uma reflexão curta e direta.
- Cada tarefa individual deve mostrar a evidência a entregar num bloco separado, para ficar claro e direto.
- No 1.º dia, a reflexão é sobre expectativas: "o que esperas desta UFCD?"
- Na última tarefa, a reflexão final compara se a UFCD correspondeu às expectativas e em que medida.
- Links reais dos fóruns Moodle já acrescentados às 5 tarefas individuais:
  - Fórum geral das Tarefas Individuais: `https://fad.iefp.pt/mod/forum/view.php?id=394698`
  - TI 1: `https://fad.iefp.pt/mod/forum/discuss.php?d=52665`
  - TI 2: `https://fad.iefp.pt/mod/forum/discuss.php?d=52666`
  - TI 3: `https://fad.iefp.pt/mod/forum/discuss.php?d=52667`
  - TI 4: `https://fad.iefp.pt/mod/forum/discuss.php?d=52668`
  - TI 5: `https://fad.iefp.pt/mod/forum/discuss.php?d=52669`

## Próximos passos

1. Confirmar os links reais para substituir em `moodle.html`:
   - Padlet incorporado já atualizado: `https://padlet.com/embed/rtfi7zkz0pn3cyvj`;
   - Página de apoio Moodle já atualizada: `https://fad.iefp.pt/mod/page/view.php?id=394695`;
   - Site público Netlify já atualizado: `https://splendorous-paprenjak-ef70f0.netlify.app/`.
2. Conteúdos Gamma já associados:
   - `Folha de cálculo: características`: `https://folha-de-calculo-066dcg6.gamma.site/`;
   - `Vantagens e desvantagens da folha de cálculo`: `https://vantagens-e-desvantagens-kq1blbj.gamma.site/`.
   - `Criar, gravar e editar uma folha de cálculo`: `https://criacao-gravacao-edicao-l9yfsfb.gamma.site/`.
   - As páginas de conteúdos aparecem sempre no menu e no percurso de aprendizagem.
   - Quando um conteúdo com Gamma associado é ativado no controlo, o Gamma ocupa a página inteira da área principal desse submenu.
   - Quando ainda não está ativado no controlo, a página mostra `Conteúdo para disponibilização`.
   - Nas páginas de conteúdos, o grupo ativo do menu abre automaticamente; clicar em `Conteúdos` volta ao percurso de aprendizagem no `index.html#conteudos`.
3. Voltar ao controlo do site, especialmente à versão `atividades/incorporar/controlo-teams.html`.
4. Preparar o controlo gradual das tarefas disponibilizadas pelo formador.
5. Depois avançar para os restantes conteúdos da UFCD 3776.
