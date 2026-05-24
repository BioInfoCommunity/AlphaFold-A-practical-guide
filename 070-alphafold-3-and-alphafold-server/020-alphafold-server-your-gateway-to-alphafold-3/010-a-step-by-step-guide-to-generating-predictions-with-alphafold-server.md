---
layout: default
title: 'Um guia passo a passo para gerar previsões com o AlphaFold Server'
---

# Um guia passo a passo para gerar previsões com o AlphaFold Server

O AlphaFold Server foi projetado para uso simples e intuitivo. Para uma introdução simples ao fluxo de trabalho, veja o vídeo abaixo.

É fácil e direto especificar entradas do Servidor AlphaFold:

* Para uma proteína, entre a sequência de aminoácidos de uma única letra. Alternativamente, cole o conteúdo de um arquivo FASTA. Se você tem várias proteínas, pode colocar todas as sequências delas em um único arquivo FASTA (veja abaixo). Use apenas códigos padrão de uma letra. Códigos não padronizados como B, J, O, U, X e Z não são suportados.
* Para DNA, insira a sequência de nucleotídeos de uma única letra em notação padrão (5'-3'). Use apenas códigos padrão de uma letra, ou seja, A, C, G e T.
* Para RNA, insira de forma semelhante a sequência de nucleotídeos de uma só letra em notação padrão (5'-3'). Use apenas códigos padrão de uma letra, ou seja, A, C, G e U.
* Para ligandos, íons e modificações pós-traducionais, selecione a entidade desejada da lista. Os códigos de três letras exibidos na interface vêm do Dicionário de Componentes Químicos [Chemical Component Dictionary (CCD)](https://www.wwpdb.org/data/ccd). do Banco Mundial de Dados de Proteínas (Worldwide Protein Data Bank’s).

## Adição de complexos

Se múltiplas cópias de uma entidade estiverem presentes (por exemplo, uma proteína homomultimérica), indique isso definindo o número de cópias no campo correspondente.

Se você estiver modelando um grande complexo, precisará preencher várias sequências. Para fazer isso rapidamente, cole o conteúdo de um arquivo FASTA. Basta abrir um arquivo FASTA contendo suas sequências em qualquer editor de texto, copiar todo o conteúdo e colar na caixa de entrada de texto do AlphaFold Server. O servidor reconhecerá o formato FASTA e preencherá múltiplas entidades automaticamente. Também reconhecerá sequências de proteínas, DNA e RNA e atribuirá o tipo correto de entidade.

O menu de reticências verticais (três pontos) ⋮ no lado direito de cada entidade permite várias opções diferentes, dependendo do tipo de entidade.

## Adicionando modificações

Para proteínas, você pode adicionar modificações pós-traducionais (PTMs). Selecionar a opção "+ PTMs" abrirá uma janela de diálogo exibindo a sequência da cadeia proteica. Clique em um resíduo ao qual deseja adicionar um PTM e escolha uma modificação suportada da lista que aparecer. Você pode adicionar várias modificações a diferentes resíduos, uma de cada vez. Quando terminar, salve as modificações pelo botão correspondente.

Por favor, note que, uma vez que você adiciona um PTM e o salva, não pode editar a sequência de proteína. Para informações detalhadas sobre modelagem da glicosilação de proteínas, veja o [FAP do AlphaFold Server](https://alphafoldserver.com/faq#can-i-model-glycosylated-proteins).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-17.55.28.png)

Figura 41. Uma captura de tela mostrando a janela para adicionar modificações pós-traducionais.

Para cadeias de DNA e RNA, você pode adicionar modificações químicas aos nucleotídeos correspondentes. O procedimento funciona exatamente como descrito acima para proteínas.

O Servidor AlphaFold trata entidades de "DNA" e "RNA" como fitas simples. Isso facilita a adição de modificações químicas, já que as modificações no DNA de fita dupla podem ser diferentes para as duas fitas complementares.

Para modelar DNA de fita dupla, adicione a primeira entidade de DNA e preencha a sequência, seja copiando e colando ou digitando-a. Depois, selecione a opção "+ Complemento reverso" no menu de elipse vertical para adicionar a linha complementar; ele será adicionado como uma entidade de DNA separada.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.53.32.png)

Figura 42. Uma captura de tela mostrando a interface de entrada para definir uma entidade de DNA, incluindo opções para especificar sequência, adicionar modificações ou gerar o complemento reverso.

É possível alterar a ordem das entidades. Basta arrastar as entidades usando os pontos cinza de dois por três ⋮⋮ para a esquerda até encontrar a ordem correta. O AlphaFold Server normalmente segue sua ordem de entrada, então você deve encontrar as entidades na mesma ordem na estrutura modelada e produzir arquivos mmCIF. No entanto, há uma exceção: o padrão mmCIF determina que ligantes e íons devem ser listados por último, então o AlphaFold Server pode reordenar as entradas para colocá-las por último.

Para limpar todos os comandos, basta usar o botão "Limpar" no canto superior direito.

É possível salvar trabalhos de rascunho e modificá-los ou executá-los posteriormente. Se você apertar o botão "Salvar trabalho", o sistema vai pedir o nome da vaga e salvá-lo. Os trabalhos salvos são exibidos no Histórico junto com trabalhos em execução e finalizados, e são marcados pelo ícone correspondente. Para facilitar o acesso, você pode clicar em categorias no topo da lista de Histórico para filtrar certos tipos de tarefas, por exemplo, "Concluído" ou "Rascunho salvo". Salvar o trabalho pode ser útil se você usar sua cota diária de trabalhos: você pode salvar vários empregos e executá-los no dia seguinte, quando a alocação for renovada.

## Submissão de trabalhos

Depois de preparar todos os arquivos de entrada, pressione o botão "Continuar e pré-visualizar o trabalho". O diálogo permite que você especifique um nome de trabalho significativo; Se não fizer, a data e hora atuais serão usadas. Você também pode alternar entre um valor seed definido automaticamente e manualmente para este trabalho (para mais informações sobre seeds, (veja Recursos avançados do AlphaFold Server e a seção de [FAQ](https://alphafoldserver.com/faq#what-are-seeds-and-how-are-they-set) correspondente).

Verifique se todas as entradas estão corretas. Você também pode querer observar o número de trabalhos restantes para melhor planejar seus esforços de modelagem. Por fim, pressione "Confirmar e enviar trabalho". O número de empregos restantes diminuirá em um e o cargo aparecerá na lista de Histórico como um trabalho em andamento.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.13.35.png)

Figura 43. A lista de Histórico, mostrando múltiplos trabalhos no servidor AlphaFold. O de cima está funcionando, os outros já terminaram.

## Resultados

Normalmente, um trabalho termina em poucos minutos. Por exemplo, geralmente leva de 3 a 6 minutos para prever uma estrutura com 1.000 tokens e de 6 a 8 minutos para prever uma estrutura com 3.600 tokens. No entanto, cargas pesadas do servidor podem causar atrasos. Quando um trabalho termina, seu ícone muda e você pode clicar duas vezes para ver os resultados.

O menu de reticências verticais ⋮ à direita de cada trabalho no Histórico permite que você:

* Exclua o trabalho da lista
* Renomear o trabalho
* Para trabalhos finalizados, abra a página de resultados ou baixe as estruturas previstas
* "Clonar e reutilizar" o trabalho. Isso trará todas as entradas de volta para a interface de criação de trabalhos: você pode então re-executar o trabalho como está, ou editá-lo e rodar novamente com modificações (criando um novo trabalho no processo). Isso é útil se você estiver gerando uma série de previsões estruturais semelhantes, por exemplo, a mesma proteína com DNAs diferentes.

Extremamente raro (menos de 0,1% das vagas totais), os trabalhos de modelagem podem falhar. Trabalhos que falharam serão marcados com um ícone específico e clicar no trabalho mostrará exatamente o erro. Reenviar um trabalho geralmente ajuda se o motivo da falha for técnico. Uma possível razão para um trabalho falhar é se a sequência enviada for altamente semelhante a uma sequência de um patógeno viral que foi colocada na lista restrita (para mais detalhes, veja o [FAQ do AlphaFold Server](https://alphafoldserver.com/faq#are-there-any-restrictions-on-the-protein-sequences-that-are-allowed)).

Quando o trabalho estiver concluído, clicar na linha você vai para a página de resultados. A página de resultados mostra:

* Visualização da estrutura por espinha dorsal, colorida por escores pLDDT
* Gráfico PAE
* Pontuação geral do pTM
* Pontuação geral do ipTM se a estrutura for complexa (para mais informações sobre essas métricas de confiança, veja a subseção “[Interpretando resultados do AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/interpreting-results-from-alphafold-server/)“)
* Informações sobre as entradas do trabalho, incluindo o valor da semente aleatória
* Botões "Download" e "Clone e reutilização"
* Um link para fornecer feedback sobre a estrutura

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-17.06.35.png)

Figura 44. Uma página de resultados de exemplo no servidor AlphaFold

Você pode baixar todos os resultados da modelagem em um único arquivo zip. Ele contém coordenadas atômicas das estruturas previstas no formato mmCIF e informações adicionais sobre pontuações de confiança nos arquivos JSON (para mais detalhes sobre as saídas, veja [Interpretando resultados do AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/interpreting-results-from-alphafold-server/)).
