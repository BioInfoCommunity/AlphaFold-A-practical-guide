---
layout: default
title: 'Melhorias no AlphaFold2 da comunidade científica mais ampla'
---

# Melhorias no AlphaFold2 da comunidade científica mais ampla

**Desde a liberação aberta do código-fonte do AlphaFold2, pesquisadores vêm ampliando as capacidades do AlphaFold2. Dessa forma, os pesquisadores avançaram em problemas que a versão original do AlphaFold2 não foi treinada para resolver.**

## **Predição da estrutura das proteínas do sistema imunológico**

A versão original do AlphaFold2 teve dificuldades para prever as estruturas de muitas proteínas do sistema imunológico, como anticorpos e receptores de células T. Tais moléculas mudam rapidamente ao longo do tempo evolutivo, tornando-as especialmente difíceis de analisar.

Grupos de pesquisa adaptaram partes do AlphaFold2 e do AlphaFold-Multimer para construir versões específicas de anticorpos do AlphaFold2. Esses pacotes de software preveem estruturas de anticorpos com muito mais precisão do que o AlphaFold2
([Abanades et al., 2023](https://doi.org/10.1038/s42003-023-04927-7); [Peng et al., 2023](https://doi.org/10.1101/2023.04.20.537598); [Ruffolo et al., 2023](https://doi.org/10.1038/s41467-023-38063-x)).

Outros grupos adaptaram o AlphaFold2 para prever as estruturas dos receptores de células T. Esses são componentes cruciais do sistema imunológico adaptativo que reconhecem e eliminam patógenos estranhos e células anormais. Eles fazem isso ligando-se a proteínas do complexo maior de histocompatibilidade (MHC) na parte externa das células-alvo. Pesquisadores agora estão usando versões modificadas do AlphaFold2 para prever as interações entre receptores de células T e MHCs, e os complexos que eles formam ([Abanades et al., 2023](https://doi.org/10.1038/s42003-023-04927-7); [Yin et al., 2023](https://doi.org/10.1093/nar/gkad356); [Mikhaylov et al., 2023](https://doi.org/10.1101/2023.03.06.531396); [Bradley, 2023](https://doi.org/10.7554/eLife.82813)).

## **Predição das estruturas das proteínas transmembrana**

AlphaFold2 não conhece o plano da membrana, portanto não pode prever de forma confiável como as estruturas proteicas são afetadas pelas interações com as membranas. No entanto, pesquisadores encontraram maneiras de enfrentar esse problema.

Diversas equipes analisaram estruturas do Banco de Dados de Estruturas de Proteínas AlphaFold e identificaram seus domínios transmembranares. Essas proteínas transmembranas foram reunidas em bancos de dados, permitindo aos pesquisadores visualizar as posições mais prováveis dos planos de membrana ([Dobson et al., 2022](https://doi.org/10.1093/nar/gkac928); [Pei et al., 2023](https://doi.org/10.1093/database/baad008); [Lomize et al., 2022](https://doi.org/10.1002/pro.4318)).

## **Otimização das previsões da interação proteína-proteína**

O AlphaFold-Multimer é capaz de prever interações proteína-proteína e de modelar as estruturas de complexos maiores. No entanto, o processo requer considerável tempo de computação e não leva em consideração dados experimentais prévios.

Para auxiliar nesse processo, pesquisadores desenvolveram um pacote em Python chamado [AlphaPulldown](https://www.embl-hamburg.de/AlphaPulldown/). O software reduz o tempo computacional necessário para rastrear interações proteína-proteína e para modelagem de grandes complexos. Também melhora as previsões de interação proteína-proteína ao adicionar outras funcionalidades, incluindo um pipeline de análise para avaliar interfaces previstas com múltiplos escores, um notebook Jupyter interativo que facilita a análise simultânea de múltiplos modelos, e suporte a templates multiméricos personalizados e modelagem baseada em crosslink oferecidos pelo programa AlphaLink ([Stahl et al., 2023](https://www.nature.com/articles/s41587-023-01704-z)).

## **Adição de ligantes e cofatores**

AlphaFold2 prevê estruturas proteicas com alta precisão. Ele frequentemente pode prever uma forma ligada a ligantes ou íons de uma proteína, mesmo na ausência do ligante/íon propriamente dito. Isso ocorre porque o AlphaFold2 observou essas conformações ligantes ou íons de proteínas durante o treinamento e aprendeu esses padrões.

No entanto, as estruturas previstas não incluem pequenas moléculas como ligantes e cofatores. Essas características são frequentemente essenciais para a função da proteína.

Para atender a essa necessidade, pesquisadores desenvolveram um método chamado AlphaFill. Ela automaticamente 'transplanta' ligantes ausentes para as estruturas previstas. O AlphaFill faz isso comparando a sequência e a estrutura da proteína alvo com outras proteínas, cujas estruturas foram determinadas por experimento – incluindo ligantes. Essa comparação permite que o AlphaFill identifique ligantes adequados e os posicione corretamente ([Hekkelman et al., 2022](https://doi.org/10.1038/s41592-022-01685-y)).

O AlphaFill está disponível em duas formas. Primeiro, está online como um [banco de dado](https://alphafill.eu/): com ligantes transplantados adicionados sempre que isso foi possível. Segundo, para quem precisa adicionar pequenas moléculas a estruturas personalizadas usando o AlphaFill, o [web server](https://alphafill.eu/) pode transplantar ligantes ausentes para estruturas proteicas previstas do AlphaFold2.
