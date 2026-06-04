---
layout: default
title: 'Devo usar AlphaFold 2 ou AlphaFold 3?'
---

# Devo usar AlphaFold 2 ou AlphaFold 3?

Em termos de funcionalidade, o AlphaFold 3 pode fazer tudo o que o AlphaFold 2 faz, e ainda melhor. Também possui capacidades adicionais, em particular na predição das estruturas de complexos que contêm múltiplos tipos de moléculas.

No entanto, há diferenças na forma como cada modelo foi disponibilizado para uso. O AlphaFold 2 está disponível gratuitamente para uso acadêmico e comercial sob os termos permissivos da licença Apache 2. Em contraste, o AlphaFold 3 está atualmente disponível apenas para uso não comercial, sujeito aos [Termos de Serviço do Servidor AlphaFold](https://alphafoldserver.com/terms), ou [Parâmetros do Modelo AlphaFold dos termos de uso](https://github.com/google-deepmind/alphafold3/blob/main/WEIGHTS_TERMS_OF_USE.md), que incluem várias restrições de uso. Consequentemente, para alguns tipos de projetos, você deve usar o AlphaFold 2.

Importante, você não pode usar o AlphaFold 3 ou seus resultados em conexão com qualquer atividade comercial, incluindo pesquisas para organizações comerciais, ou para treinar modelos de aprendizado de máquina ou tecnologia relacionada para predição de estrutura biomolecular, semelhante ao AlphaFold Server. Você está livre para usar o AlphaFold 2 para esses propósitos.

As pontuações de confiança AlphaFold 3 para polímeros podem ser substancialmente afetadas pela inclusão (ou remoção) de contextos não poliméricos, como íons ou ligantes estabilizadores. Se estiver investigando algo em um contexto apenas de polímero (por exemplo, interação proteína-proteína), pode ser importante adicionar contexto não polimérico quando apropriado para melhorar os índices de confiança. O uso do AlphaFold 2 evita essa complexidade, ao custo possível de uma precisão estrutural ligeiramente reduzida.

Como o AlphaFold 2 continua sendo uma ferramenta valiosa em muitos cenários de pesquisa e desenvolvimento, o Google DeepMind continuará a apoiá-lo.
