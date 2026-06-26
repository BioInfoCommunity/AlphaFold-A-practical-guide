---
layout: default
title: 'Predição de estruturas proteicas com ColabFold e AlphaFold2 Colab'
---

# Predição de estruturas proteicas com ColabFold e AlphaFold2 Colab

**ColabFold e AlphaFold2 Colab permitem que você preveja estruturas de proteínas sem precisar instalar e rodar o software completo do AlphaFold2. São boas opções se você precisa de uma forma rápida e fácil de começar com o AlphaFold2, se só precisa prever algumas estruturas, ou se não tem acesso a um recurso computacional poderoso.**

## **ColabFold e AlphaFold2 Colab: Uma visão geral e comparação**

ColabFold e AlphaFold2 Colab são implementações online do AlphaFold2. Todas as operações acontecem na nuvem, então você pode usar o software sem ter que instalá-lo no seu próprio computador. Ambos os sistemas são baseados em [Colab](https://colab.research.google.com/) (abreviação de Colaboratory): um sistema que permite escrever e executar Python no seu navegador.

* O [AlphaFold2 Colab](https://colab.sandbox.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb) é uma versão simplificada do AlphaFold2. Ele usa apenas uma parte do conjunto de dados [BFD](https://bfd.mmseqs.com/) (Big Fantastic Database) e não utiliza estruturas homólogas como modelos. Como resultado, sua precisão é marginalmente inferior à da versão completa do AlphaFold2. Os usuários também não podem personalizar as previsões estruturais variando os parâmetros.
* [ColabFold](https://colab.sandbox.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb) é uma implementação comunitária de um Colab para rodar o AlphaFold2. Ele oferece muito mais parâmetros ajustáveis do que o AlphaFold2 Colab, como a profundidade do MSA e o número de reciclagens. Além disso, o ColabFold utiliza preparação rápida de MSA via servidor [MMseqs2](https://github.com/soedinglab/mmseqs2). Você também pode usar um MSA personalizado como modelos de entrada e suprimento ([Mirdita et al, 2022](https://doi.org/10.1038/s41592-022-01488-1)).

Por isso, recomendamos o uso do ColabFold porque ele é mais potente que o AlphaFold2 Colab. Muitos estudos que usaram modelagem AlphaFold2, publicados em periódicos de alto nível, na verdade utilizaram ColabFold (e.g. [Healy et al., 2023](https://doi.org/10.1016/j.cell.2023.04.003)).

## **Como executar ColabFold e AlphaFold2 Colab**

Ambos os aplicativos oferecem uma interface simples: basicamente, um formulário para preencher. Para o AlphaFold2 Colab, apenas a sequência proteica é necessária. O ColabFold também oferece algumas opções adicionais. O passo final é ir ao menu "Runtime" e escolher “Run all".

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/AlphaFold_Colab_and_ColabFold.gif)


Figura 24. Você pode prever estruturas de proteínas online usando ColabFold ou AlphaFold2 Colab. Essas opções não exigem que você instale o código-fonte do AlphaFold2.

Rodar os Colabs e gerar a predição pode levar minutos a horas, dependendo do comprimento da sua proteína e do tipo de GPU que o Colab atribuiu a você.

Para detalhes sobre o uso das opções mais avançadas do ColabFold, consulte o artigo original do ColabFold ([Mirdita et al., 2022](https://doi.org/10.1038/s41592-022-01488-1)), [a documentação do ColabFold](https://github.com/sokrypton/ColabFold), e a seção “[Modelagem avançada e aplicações de estruturas proteicas previstas](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/)“.

Por favor, note que usuários avançados com hardware de GPU de ponta podem configurar um [Colab local](https://github.com/YoshitakaMo/localcolabfold). Isso permite que você execute o ColabFold, utilizando o poder de processamento da sua própria GPU. Isso pode ser uma alternativa mais fácil a configurar uma instalação completa de código aberto do AlphaFold2.

## **Limitações do ColabFold e do AlphaFold2 Colab:**

Em ambos os casos, há limites no tamanho da proteína (medidos pelo número de resíduos de aminoácidos) que podem ser previstos. As restrições são definidas principalmente pela quantidade de RAM disponível na GPU gratuita fornecida pela Colab. Há um máximo de 4.000 resíduos para prever modelos de multômeros. O modelo de monômero tem um limite de 2.500 resíduos.

A plataforma Google Colab, que roda tanto o ColabFold quanto o AlphaFold2 Colab, oferece aos usuários uma quantidade limitada de recursos computacionais gratuitamente. Os cadernos do Colab no nível gratuito ficam em tempo após um certo tempo. No entanto, você pode acessar o [Google Colab Pro](https://colab.research.google.com/signup) para mais GPUs.
