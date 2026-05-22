---
layout: default
title: O que é AlphaFold?
---

# O que é AlphaFold?

**AlphaFold é a contribuição do Google DeepMind para o problema de longa data da predição da estrutura das proteínas. Ele prevê as estruturas 3D das proteínas com alto grau de precisão e agora é amplamente utilizado por pesquisadores.**

## **O que é o AlphaFold**


AlphaFold2 é um sistema de IA multicomponente que utiliza aprendizado de máquina para prever a estrutura 3D de uma proteína com base em sua sequência primária de aminoácidos.

Aprendizado de máquina é uma forma de uma IA aprender os padrões em um enorme conjunto de dados. Uma vez que a IA é treinada com dados existentes, ela pode prever as propriedades de novos exemplos, usando os padrões que identificou.

AlphaFold2 é um exemplo de rede neural artificial. É uma coleção de nós simulados, ligados por conexões que podem ser fortalecidas ou enfraquecidas. Essas redes podem ser habilidosas em aprendizado de máquina. Como a rede do AlphaFold contém múltiplas camadas de nós, ela é chamada de algoritmo de "deep learning". Por favor, consulte o artigo do AlphaFold para a descrição detalhada da arquitetura da rede neural ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)) ou até mesmo verifique a implementação exata no código [open source](https://github.com/google-deepmind/alphafold).

O AlphaFold **não** é uma ferramenta de modelagem de homologia: ele pode operar com sucesso sem usar estruturas de molde e até mesmo prever dobras proteicas até então desconhecidas.

## **Como o AlphaFold2 resolve o problema de predição de estrutura**

Os dados de treinamento para AlphaFold2 vieram do [Protein Data Bank](https://www.wwpdb.org/) (PDB): um banco de dados gratuito contendo todas as estruturas macromoleculares que já foram experimentalmente determinadas e publicamente disponíveis. Atualmente, conta com [mais de 215.000 entradas/dados.](https://www.ebi.ac.uk/pdbe/). ([Saiba mais sobre o PDB](https://www.ebi.ac.uk/training/online/courses/pdbe-searching-pdb/what-is-pdbe/)).

Pesquisadores do Google DeepMind usaram estruturas proteicas do PDB, com suas sequências correspondentes, para treinar a rede neural AlphaFold2.

AlphaFold2 pega a sequência de aminoácidos de uma proteína nova e a alinha às sequências de outras proteínas semelhantes. Isso identifica seções da sequência que tendem a mudar juntas ao longo do tempo evolutivo e, portanto, provavelmente estão interagindo e, consequentemente, fisicamente próximas à estrutura 3D da proteína. Em poucos minutos (podendo se estender por dezenas de minutos em proteínas ou complexos maiores), o AlphaFold2 apresenta uma predição da estrutura 3D da sequência. O AlphaFold2 pode ou não usar estrutura(s) de proteínas conhecidas como modelos (para detalhes, veja as seções  “[Validação e Impacto](https://www.ebi.ac.uk/training/online/courses/alphafold/validation-and-impact/)” e “[Entradas e Saídas](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)“).

Fundamentalmente, o AlphaFold também fornece métricas de confiança, como pLDDT, pTM e PAE. Se não tiver certeza sobre alguma parte da estrutura, ele informará isso na forma de uma pontuação de confiança, permitindo a interpretação crítica (veja a [Seção 3](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/)).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/Diagram.gif)


Figura 3. Da Sequência à Estrutura. AlphaFold2 pega a sequência da proteína e, em minutos, prevê sua estrutura 3D

## **Os marcos do AlphaFold**

Em 2020, o AlphaFold2 ganhou destaque ao participar e vencer a, bienal, Avaliação Crítica de predição de Estrutura/ Critical Assessment of Structure Prediction ([CASP14](https://predictioncenter.org/casp14/)).  Este experimento desafia os participantes a prever as estruturas de alvos proteicos não triviais, que foram resolvidas experimentalmente, mas ainda não estão disponíveis publicamente. Com base nas pontuações excepcionalmente altas alcançadas pelo AlphaFold2, os organizadores do CASP proclamaram que o problema da predição da estrutura da proteína “[foi em grande parte resolvido para proteínas individuais](https://www.predictioncenter.org/casp14/doc/CASP14_press_release.html)”.

AlphaFold2 está disponível como um programa de código aberto. Ele pode ser instalado localmente em uma estação de trabalho potente ou acessado como um serviço web via [Google Colab](https://colab.google/). Você pode usar os cadernos gratuitos [AlphaFold](https://colab.research.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb) ou [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb#scrollTo=kOblAo-xetgx) (para detalhes, veja a seção “[Acessando e prevendo estruturas proteicas com AlphaFold](https://www.ebi.ac.uk/training/online/courses/alphafold/accessing-and-predicting-protein-structures-with-alphafold/)“). Há também um [Banco de Dados de Estruturas de Proteínas AlphaFold](https://alphafold.ebi.ac.uk/), disponível gratuitamente, um banco de dados de estruturas pré-calculadas dos monômeros proteicos para quase todas as entrada (~200  milhões) do [UniProt](https://www.uniprot.org/help/about) entries.

Desde o lançamento do AlphaFold2 em 2021, ele teve adoção rápida e ampla. O artigo que descreve o método já havia recebido mais de 15.000 citações até dezembro de 2023. Da mesma forma, no inverno de 2023, o Banco de Dados de Estrutura de Proteínas AlphaFold (AFDB) já havia recebido 1,65 milhão de visitantes únicos de mais de 180 países, e o arquivo já havia sido baixado mais de 22.000 vezes.

![](https://lh7-us.googleusercontent.com/vpgdaTiu9z_0059LYPg16aBlMlLDFWuQnJ5xbLKh3VUzAuya8CxYkvY4vckxEmF0xiA6IEAD9Xmug8e1n6QdrULALU90T9HM43uJ0Ofl5QcaJgG7ghWjIvv_QNkoOsmAJC1nm7ncuQ51bPTgvtZfAyA)

Figura 4. O número de artigos científicos e preprints citando o principal artigo do AlphaFold2 ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)) todos os meses desde sua publicação em julho de 2021.


---

## Test your knowledge

Time to flex your AlphaFold muscles!
