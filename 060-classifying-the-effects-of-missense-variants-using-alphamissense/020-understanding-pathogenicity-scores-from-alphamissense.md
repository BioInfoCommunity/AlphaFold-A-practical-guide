---
layout: default
title: 'Entendendo as pontuações de patogenicidade no AlphaMissense'
---

# Entendendo as pontuações de patogenicidade no AlphaMissense

O AlphaMissense atribui a cada variante missense uma pontuação entre 0 e 1. Esses indicam a probabilidade de a variante ser patogênica. Por exemplo, uma pontuação de 0,8 sugere que 8 de cada 10 variantes com essa pontuação provavelmente são patogênicas.

As pontuações de patogenicidade são geradas reescalando dados brutos do AlphaMissense usando um modelo de regressão logística treinado com dados do ClinVar. O objetivo era gerar um único número para facilitar a interpretação.

Para facilitar ainda mais a interpretação, as pontuações podem ser divididas em três categorias:

* 0 a 0,34: provavelmente benigno
* 0,34 a 0,564: incerto
* 0,564 a 1: provavelmente patogênico

Esses cortes foram determinados usando curvas de precisão e de recordação para garantir 90% de precisão para as classes patogênica e benigna. Variantes que não atendem a essa precisão são classificadas como ambíguas.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/11/Screenshot-2024-11-22-at-11.36.37.png)

Figura 32. Precisão e recordação das previsões do AlphaMissense no conjunto de teste ClinVar. Curvas azuis representam precisão e recordação para variantes rotuladas como benignas (pontuação AlphaMissense 0, 0,5), enquanto curvas vermelhas representam variantes rotuladas como patogênicas (pontuação AlphaMissense 0,5, 1). Os limiares de classificação foram estabelecidos para alcançar 90% de precisão tanto para classificações benignas quanto patogênicas. Variantes que não atingiram esse limite de precisão de 90% foram definidas como ambíguas. A linha pontilhada indica a precisão esperada, calculada como a probabilidade média prevista de uma variante ser patogênica ou benigna.

## **Aplicações do AlphaMissense**

As pontuações AlphaMissense são valiosas para projetar e interpretar experimentos relacionados à função proteica. Exemplos incluem Ensaios Multiplexados para Efeitos Variantes (Multiplexed Assays for Variant Effects/ MAVEs), que exploram os efeitos de milhares de variantes genéticas em paralelo.

O AlphaMissense pode ajudar a elucidar os efeitos moleculares de variantes na função das proteínas. Isso pode contribuir para a descoberta de genes causadores de doenças, melhorando a precisão diagnóstica.

Quando usado no contexto de uma estrutura 3D, o AlphaMissense pode fornecer insights sobre regiões funcionais importantes. Para aprimorar sua visualização, escores foram integrados ao Banco de Dados AlphaFold para avaliar no contexto das estruturas previstas para todo o proteoma humano.
