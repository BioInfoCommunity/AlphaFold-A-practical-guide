---
layout: default
title: 'Outras ferramentas para verificar a qualidade das estruturas previstas'
---

# Outras ferramentas para verificar a qualidade das estruturas previstas

**Usuários que desejam avaliar melhor a qualidade das estruturas proteicas previstas do AlphaFold2 podem usar uma variedade de ferramentas de código aberto.**

## **Ferramentas de código aberto para avaliação de estruturas previstas**

Uma opção é uma ferramenta geral de validação de biologia estrutural, como o [MolProbity](http://molprobity.biochem.duke.edu/). Esses são usados para diagnosticar a "correção" em modelos 3D de proteínas, ácidos nucleicos ou complexos. Modelos AlphaFold2 geralmente possuem excelente qualidade geométrica em regiões de alta confiança. No entanto, se o MolProbity sinaliza parte da estrutura, você deve examiná-la cuidadosamente.

Para complexos proteína-proteína, ferramentas como o [PISA](https://www.ebi.ac.uk/pdbe/pisa/) cpodem ser usadas para avaliar melhor a qualidade da interface prevista. O software permite verificar detalhes como a área total da superfície enterrada e o número de ligações de hidrogênio na interface, o que, por sua vez, indica se a interface prevista corresponde à realidade ou se é um artefato. Observe que os critérios de validação do PISA podem ter algumas exceções; por exemplo, complexos antígeno-anticorpo fortemente ligados podem ser relatados como fracamente ligados pelo PISA.

O visualizador [PAE](http://www.subtiwiki.uni-goettingen.de/v4/paeViewerDemo) é um servidor web projetado para facilitar a interpretação das pontuações PAE para previsões multiméricas. A visualização destaca as violações e/ou satisfações das restrições de comprimento do reticulador.
