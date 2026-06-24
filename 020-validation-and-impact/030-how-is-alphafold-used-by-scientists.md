---
layout: default
title: Como o AlphaFold 2 é usado por cientistas?
---

# Como o AlphaFold 2 é usado por cientistas?

**O AlphaFold2 tem sido utilizado em uma ampla gama de aplicações de pesquisa, com resultados impressionantes. AlphaFold2 não foi concebido como um rival dos métodos experimentais. Em vez disso, o ponto de partida fornecido pelo AlphaFold2 é facilitar a determinação experimental da estrutura, auxiliar na interpretação de dados estruturais de baixa resolução e acelerar estudos estruturais. Além disso, o AlphaFold2 pode fornecer hipóteses testáveis que orientam experimentos bioquímicos e de biologia celular.**

## **Biologia estrutural**

A biologia estrutural tem sido o campo de pesquisa mais impactado pelo AlphaFold2. Estruturas proteicas previstas foram usadas para aprimorar ou preencher estruturas experimentais obtidas por técnicas como cristalografia de raios X, crio-EM e espectroscopia de RMN. Estruturas do AlphaFold2 foram fundamentais para estudos de cristalografia de raios X, servindo como um ponto de partida valioso no processo (ajudando a resolver o [problema de fase](https://en.wikipedia.org/wiki/Phase_problem) por meio da [substituição molecular](https://en.wikipedia.org/wiki/Molecular_replacement)).

AlphaFold2 permitiu que pesquisadores descrevessem as estruturas de complexos proteicos muito grandes. Um exemplo é o complexo de poros nucleares, que reveste o núcleo das células eucarióticas e contém cerca de 1000 proteínas nucleoporinas de cerca de 30 tipos. Análises que incorporam AlphaFold já resolveram cerca de 90% do complexo de poros nucleares humanos ([Mosalaganti et al., 2022](https://doi.org/10.1126/science.abm9506)). De forma semelhante, o AlphaFold2 foi fundamental na resolução da estrutura do Mce1, uma proteína usada pela bactéria da tuberculose para extrair nutrientes das células hospedeiras([Chen et al., 2023](https://doi.org/10.1038/s41586-023-06366-0)).












##### Figura 12. Complexo de poros nucleares humanos (dilatado) (PDB ID: [7R5J](https://www.wwpdb.org/pdb?id=pdb_00007r5j))

AlphaFold2 foi usado para resolver estruturas de proteínas individuais de nucleoporinas [(Mosalaganti et al., 2022)](https://doi.org/10.1126/science.abm9506).

As previsões do AlphaFold2 demonstraram grande sinergia com a espectrometria de massa de reticulação cruzada (cross-linking mass-spectrometry - XL-MS).  Estruturas previstas ajudaram a interpretar e dar sentido às distâncias obtidas com esse método. As distâncias XL-MS, por sua vez, fornecem validação experimental dos modelos previstos, incluindo previsões para complexos proteína-proteína. Em um estudo, AlphaFold2 e XL-MS foram usados para identificar as estruturas e posições de proteínas intracelulares nos cílios de *Tetrahymena thermophila* ([McCafferty et al., 2023](https://doi.org/10.1038/s42003-023-04773-7)). Uma abordagem semelhante de duas frentes, combinando AlphaFold2 e XL-MS, revelou interações proteína-proteína em células humanas, incluindo "28.910 pares únicos de resíduos capturados em 4.084 proteínas humanas únicas e 2.110 interações únicas proteína-proteína" ([Bartolec et al., 2023](https://doi.org/10.1073/pnas.2219418120)).

## **Uso de previsões estruturais do AlphaFold2 para orientar a biologia molecular e celular**

O AlphaFold2 está se mostrando particularmente valioso para orientar análises mutacionais. Também está ajudando os cientistas a gerar e testar hipóteses sobre onde e como uma proteína pode interagir com outras proteínas ou moléculas.

Ao buscar proteínas que possam desempenhar uma função desejável, o AlphaFold2 tem um papel na realização de avaliações precoces e de baixo custo. Um desses desafios é identificar enzimas capazes de decompor o poli(etilene tereftalato) (PET), um plástico amplamente utilizado. Pesquisadores usaram AlphaFold2 para ajudá-los a identificar 74 potenciais enzimas degradadoras de PET e para caracterizar sua estrutura e mecanismos 3D ([Erickson et al., 2022](https://doi.org/10.1038/s41467-022-35237-x)).

Estruturas previstas pelo AlphaFold2 estão sendo usadas para propor mecanismos de ação proteica, cruciais para pesquisas biomédicas em estágio inicial. Por exemplo, mutações na proteína humana PINK1 causam a doença de Parkinson autossômica recessiva precoce. Pesquisadores usaram o AlphaFold2 para prever a estrutura do PINK1. Isso forneceu evidências de que o PINK1 humano utiliza o mesmo mecanismo do inseto PINK1, que é melhor caracterizado tanto estrutural quanto funcionalmente. As mutações patogênicas humanas poderiam então ser analisadas no contexto da estrutura da proteína ([Gan et al., 2021](https://doi.org/10.1038/s41586-021-04340-2)).

Também se mostrou possível usar AlphaFold2 para prever interações proteína-proteína, que são centrais para muitas funções celulares. Um estudo em leveduras identificou 106 conjuntos proteicos que eram desconhecidos anteriormente, e outros 806 que não haviam sido caracterizados estruturalmente ([Humphreys et al., 2021](https://doi.org/10.1126/science.abm4805)). Outro estudo utilizou o AlphaFold-Multimer para identificar o mecanismo de ação do fator de replicação DONSON. Uma pequena tela in silico para interatores DONSON sugeriu que o DONSON catalisa a etapa final na montagem da helicase replicativa CMG (entrega do cofator helicase GINS), um modelo que foi confirmado usando análise estrutura-função. Este estudo mostrou que o AlphaFold-Multimer pode identificar novas interações proteína-proteína funcionalmente relevantes ([Lim et al., 2023](https://doi.org/10.1126/science.adi3448)).

## **Engenharia de proteínas e design**

AlphaFold2 pode ser o ponto de partida para engenharia e design de proteínas. Um grupo reengenheirou uma "seringa" molecular, usada na natureza por bactérias, para entregar proteínas terapêuticas às células humanas. Não havia informações estruturais experimentais disponíveis para a "ponta" da seringa, então o AlphaFold2 foi usado para orientar a engenharia ([Kreitz et al., 2023](https://doi.org/10.1038/s41586-023-05870-7)).

Outro grupo usou AlphaFold2 para "alucinar" conjuntos proteicos simétricos que não existiam na natureza. A equipe então criou dez dessas assemblagens proteicas artificiais e mostrou que suas estruturas experimentalmente determinadas correspondiam às previstas pelo AlphaFold2 com uma média de RMSD de 0,6 Å ([Wicky et al., 2022](https://doi.org/10.1126/science.add1964)).

AlphaFold2 também tem sido usado para validar variantes modificadas de proteínas. Por exemplo, um grupo está criando proteínas para capturar energia solar. Eles projetaram uma maquete proteica para recriar uma reação fotossintética compacta e usaram AlphaFold2 para verificar sua estrutura ([Ennist et al., 2022](https://doi.org/10.3389/fmolb.2022.997295)).

---

Para mais formas de usar estruturas previstas AlphaFold2 para ajudar a abordar questões biológicas fundamentais, veja a seção “[Modelagem avançada e aplicações de estruturas proteicas previstas](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/)“.

Mergulhe mais fundo na ciência e veja como o AlphaFold está transformando pesquisas no blog do Google DeepMind: AlphaFold: [uma solução para um grande desafio de 50 anos na biologia](https://www.deepmind.com/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology).

Assista aos vídeos desta playlist para descobrir como os cientistas estão usando o AlphaFold2 para impulsionar suas pesquisas.


Unfolded: Meet the scientists using AlphaFold

## Test your knowledge
