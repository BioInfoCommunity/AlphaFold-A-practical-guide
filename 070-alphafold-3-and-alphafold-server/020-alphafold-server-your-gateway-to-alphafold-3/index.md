---
layout: default
title: 'Servidor AlphaFold: Seu portal para o AlphaFold 3'
---

# Servidor AlphaFold: Seu portal para o AlphaFold 3

AlphaFold Server é um portal online amigável para fazer previsões de estruturas AlphaFold 3.
O AlphaFold Server executará a maioria das previsões estruturais que o AlphaFold 3 pode lidar, com algumas limitações ditadas pelos termos da licença. O AlphaFold Server também possui alguns recursos adicionais para usuários avançados.


## O que o AlphaFold Server pode fazer

[AlphaFold Server](https://alphafoldserver.com) é um serviço web alimentado pelo AlphaFold 3. Ele pode gerar previsões altamente precisas das estruturas de complexos biomoleculares contendo qualquer combinação de proteínas, DNA, RNA, ligandos, íons e modificações químicas de proteínas e ácidos nucleicos.

O AlphaFold Server está atualmente disponível para uso não comercial para indivíduos e organizações acadêmicas e não comerciais (universidades, organizações sem fins lucrativos e institutos de pesquisa, órgãos educacionais e governamentais).

Você precisa se registrar usando sua conta Google para usar o AlphaFold Server. No entanto, o serviço é gratuito e você não precisa instalar nenhum software no seu computador.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.29.09.png)

Figura 39. Uma captura de tela da interface do usuário do AlphaFold Server. O usuário está se preparando para modelar um complexo proteína-DNA com íons de cálcio e sódio.

Você pode usar o AlphaFold Server para modelar uma estrutura composta por um ou mais dos seguintes tipos de molécula biológica:

* Proteínas
* DNA
* RNA
* Ligantes biologicamente comuns variando de ATP a clorofila
* Íons metálicos e íons de cloro biologicamente comuns
* Modificações pós-traducionais (PTMs) biologicamente comuns de resíduos de aminoácidos, variando desde fosforilação até citrulinização
* Glicosilação proteica, incluindo cadeias ramificadas de glicanos, compostas pela maioria dos açúcares comuns
* Modificações químicas biologicamente comuns de DNA e RNA, como metilação e formilação

A estrutura modelada pode ser composta por múltiplas proteínas, ácidos nucleicos, ligantes e íons. Além disso, cada cadeia de proteína e ácido nucleico pode apresentar qualquer número de modificações químicas.

O Servidor AlphaFold tentará modelar todas as interações entre todas as moléculas fornecidas na entrada do trabalho. Para a lista completa dos ligantes, íons e modificações químicas disponíveis, veja o
[FAQ do AlphaFold Server](https://alphafoldserver.com/faq#what-biological-molecule-types-can-be-modeled-with-alphafold-server).

O AlphaFold Server permite que você controle como os templates estruturais são usados em suas previsões. Você pode especificar uma data de corte para os templates de PDB a serem usados, usar templates de PDB com a data de corte padrão ou desligar completamente o uso de templates.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.31.38.png)

Figura 40. Uma captura de tela mostrando a configuração para usar templates de PDB.

Cada trabalho de modelagem é limitado a 5.000 tokens, devido às altas demandas computacionais de estruturas maiores. Um token corresponde a:

* um resíduo de aminoácido ou um nucleotídeo,
* um átomo de um ligante, íon, resíduo de aminoácido quimicamente modificado ou nucleotídeo

O comprimento mínimo de sequência para as macromoléculas é de quatro aminoácidos ou quatro nucleotídeos: isso permite a modelagem de complexos com peptídeos. Não há limites para o comprimento máximo de sequência para cadeias individuais de proteínas e nucleicas, exceto o limite geral de 5.000 tokens.

## O que o servidor AlphaFold não consegue fazer

O AlphaFold Server é apenas para uso não comercial, sujeito aos [Termos de Serviço do AlphaFold Server](https://alphafoldserver.com/terms). As saídas do AlphaFold Server não podem ser usadas em ferramentas de acoplamento ou triagem, nem para treinar modelos de aprendizado de máquina ou tecnologia relacionada para predição de estrutura biomolecular, semelhante ao AlphaFold Server. No entanto, você pode publicar, compartilhar e adaptar a saída do AlphaFold Server de acordo com os [Termos de Serviço do AlphaFold Server](https://alphafoldserver.com/terms). Você é obrigado a fornecer um aviso claro de que o uso contínuo está sujeito aos [Termos de Uso de Saída do Servidor AlphaFold](https://alphafoldserver.com/output-terms), e se você fez alguma modificação nas previsões.

O AlphaFold Server suporta apenas ligandos, íons e modificações específicas que estão na lista das [FAQs](https://alphafoldserver.com/faq#what-biological-molecule-types-can-be-modeled-with-alphafold-server). Em particular, o AlphaFold Server não é capaz de prever as posições de moléculas de água ou átomos de hidrogênio.

O AlphaFold Server não conhece planos de membrana, então as estruturas previstas para proteínas de membrana não levam em conta o plano de membrana. No entanto, há relatos de que adicionar de 50 a 100 moléculas de ácidos graxos, como ácido oleico, a uma predição imita uma membrana. Isso pode até induzir o AlphaFold Server a prever a conformação correta de uma proteína de membrana, com domínios intracelulares e extracelulares adotando posições corretas.

Cada usuário está limitado a 30 tarefas por dia. No futuro, a equipe planeja explorar outras abordagens para a alocação de cotas, como alocações semanais ou mensais. Se você não tiver cota suficiente, pode salvar seu emprego e enviá-lo quando a cota renovar (à meia-noite, fuso horário BST).

Atualmente, não é possível personalizar MSAs ou templates, mas a equipe está trabalhando nesses recursos.
Por fim, o AlphaFold Server possui todas as limitações do modelo completo do AlphaFold 3 descrito acima (veja [O que o AlphaFold 3 enfrenta](https://www.ebi.ac.uk/training/online/courses/alphafold/introducing-alphafold-3/what-alphafold-3-struggles-with/)).

O AlphaFold Server está em desenvolvimento ativo, com muitos mais recursos em desenvolvimento. Veja as notas de [atualização de lançamento](https://alphafoldserver.com/release-updates) para se manter atualizado sobre as últimas melhorias no AlphaFold Server.
