---
layout: default
title: 'Pontuações de confiança no AlphaFold-Multimer'
---

# Pontuações de confiança no AlphaFold-Multimer

AlphaFold-Multimer é uma versão especializada do software. Ele foi projetado para prever as estruturas dos complexos proteicos. O AlphaFold-Multimer fornece duas métricas adicionais para avaliar a precisão de suas previsões: a pontuação de modelagem de modelo preditivo (predicted template modellin - pTM) e a pontuação de modelagem de modelo preditivo de interface (interface predicted template modelling - ipTM).

Ambos são derivados de uma medida chamada pontuação de modelagem de modelo (template modelling - TM). Isso mede a precisão da estrutura global da proteína e é relativamente insensível a imprecisões localizadas ([Xu and Zhang, 2010](https://doi.org/10.1093/bioinformatics/btq066)).

A pTM é uma medida integrada de quão bem o AlphaFold-Multimer previu a estrutura geral do complexo. É a pontuação TM prevista para uma superposição entre a estrutura prevista e a estrutura verdadeira hipotética. Uma pontuação TM acima de 0,5 significa que a dobra prevista geral para o complexo pode ser semelhante à estrutura verdadeira. Uma pontuação TM abaixo de 0,5 significa que a estrutura prevista provavelmente está errada: a pontuação pTM segue a mesma definição. A pontuação de pTM deve ser interpretada com cautela. Por exemplo, imagine uma situação em que uma das proteínas interagentes seja maior e sua estrutura seja prevista corretamente, enquanto uma proteína parceira menor seja prevista incorretamente. O escore pTM resultante do complexo poderia ser dominado pela proteína maior e apresentar um escore pTM acima de 0,5.

Em contraste, a ipTM mede a precisão das posições relativas previstas das subunidades que formam o complexo proteína-proteína. Valores acima de 0,8 representam previsões confiantes de alta qualidade, enquanto valores abaixo de 0,6 sugerem provável falha na predição. Valores de ipTM entre 0,6 e 0,8 são uma zona cinzenta onde as previsões podem estar corretas ou erradas. Esses valores assumem modelagem com múltiplas etapas de reciclagem, de modo que o processo de predição atinge um certo grau de convergência. Em triagens em grande escala para interações proteína-proteína, frequentemente são usadas configurações otimizadas para a velocidade de predição, por exemplo, pouquíssimas ou nenhuma etapa de reciclagem. Nesses casos, limiares de ipTM tão baixos quanto 0,3 foram usados para triagem inicial; importante, porém, todos os pares de proteínas com pontuações de IPTM superiores a 0,3 foram então submetidos a exames adicionais (por exemplo, [Weeratunga et al., 2023](https://doi.org/10.1101/2023.02.20.529329)).  Regiões desordenadas e regiões com baixa pontuação de pLDDT podem impactar negativamente a pontuação ipTM mesmo que a estrutura do complexo seja prevista corretamente.

O ipTM pode ser mais útil para os usuários do que o pTM. Isso ocorre porque a qualidade da predição das posições relativas das subunidades e a qualidade da predição do complexo todo são altamente interdependentes: se as posições relativas das subunidades estiverem corretas (como refletido em uma pontuação alta de ipTM), os usuários podem esperar que todo o complexo também esteja correto.

Na prática, sua confiança geral nas previsões para multimers deve ser baseada em uma combinação de todas as métricas, incluindo tanto pTM quanto ipTM, bem como pLDDT e PAE.
