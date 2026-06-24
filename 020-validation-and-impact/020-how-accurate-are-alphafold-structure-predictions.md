---
layout: default
title: Quão precisas são as previsões de estrutura do AlphaFold 2?
---

# Quão precisas são as previsões de estrutura do AlphaFold 2?

**Regiões de alta confiança das previsões de estruturas AlphaFold2 geralmente são muito próximas das estruturas experimentais e, portanto, muito úteis no projeto de experimentos downstream. No entanto, regiões de baixa confiança podem apresentar desvios substanciais. O AlphaFold2 acerta o dobramento e a maioria das posições das cadeias laterais, mas, para características que exigem precisão atômica, como compreender os detalhes finos da catálise, o AlphaFold2 pode não atender a tais requisitos.**

## **Medição de precisão usando RMSD**

Biólogos estruturais analisaram extensivamente a correspondência entre as previsões de estruturas do AlphaFold2 e as estruturas de proteínas derivadas experimentalmente. A correspondência do experimento AlphaFold pode ser comparada à correspondência entre diferentes estruturas experimentais para a mesma proteína, esta última servindo como linha de base.

Para comparar estruturas previstas e experimentais, os pesquisadores utilizam o desvio quadrático médio (RMSD). Isso é uma medida da distância média (ou desvio) entre átomos correspondentes quando duas estruturas semelhantes são sobrepostas. Um RMSD menor significa uma correspondência melhor. Duas estruturas idênticas teriam um RMSD de 0 Ångströms (Å). Um RMSD maior que 2-3 Å sugere que as estruturas são substancialmente diferentes.

A mediana RMSD entre diferentes estruturas experimentais da mesma proteína é 0,6 Å, enquanto é 1 Å para os modelos AlphaFold e estruturas experimentais. Essa é uma correspondência muito boa e indica que as dobras gerais previstas pelo AlphaFold2 geralmente estão corretas.

Além disso, para partes de alta confiança das previsões de estrutura AlphaFold (explicadas mais adiante em [“Entradas e Saídas”](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)), a mediana RMSD é 0,6 Å: equivalente às estruturas experimentais. No entanto, para peças de baixa confiança, pode chegar até 2 Å ou mais. Isso significa que regiões de baixa confiança das previsões de estruturas AlphaFold2 podem apresentar desvios substanciais das estruturas experimentais ([Terwilliger et al., 2023](https://doi.org/10.1038/s41592-023-02087-4)).

Das cadeias laterais previstas pelo AlphaFold2, 7% não são compatíveis com os dados experimentais. No entanto, 93% das cadeias laterais estão aproximadamente corretas, e 80% apresentam um encaixe perfeito. Dados análogos para as estruturas experimentais indicam que 98% das cadeias laterais são aproximadamente corretas e 94% são perfeitas ([Terwilliger et al., 2023](https://doi.org/10.1038/s41592-023-02087-4)). No geral, o AlphaFold2 acerta na grande maioria das cadeias laterais, mas é marginalmente menos confiável do que estruturas experimentais. Por favor, note que essa estatística não pode ser estendida aos segmentos e partes desordenadas da proteína modelados com baixa confiança. As conformações das cadeias laterais de aminoácidos nas regiões desordenadas e de baixa confiança são em sua maioria aleatórias.












##### Figure 11. Fenilalanina hidroxilase.

Embora o alinhamento estrutural geral seja evidente, várias cadeias laterais (as estruturas menores e ramificadas que se estendem a partir da principal espinha dorsal da proteína) no modelo AlphaFold ([AF-Q818B4-F1](https://alphafold.ebi.ac.uk/entry/Q818B4)) estão posicionadas incorretamente em comparação com as do modelo depositado (cinza, PDB ID: [7VGM](https://doi.org/10.2210/pdb7VGM/pdb))

Regiões de baixa confiança de uma estrutura prevista frequentemente correspondem a regiões intrinsecamente desordenadas. No entanto, às vezes isso pode indicar que o AlphaFold2 não possui informações suficientes para prever essa estrutura com confiança.

Um problema pode surgir ao prever as estruturas de proteínas que contêm vários domínios conectados por ligações flexíveis. Tais domínios provavelmente não possuem posições relativas bem definidas, mesmo nas células, ou podem apenas adotar posições bem definidas no contexto de um grande complexo proteína-proteína. Nesses casos, o AlphaFold2 prevê as estruturas dos domínios individuais com precisão e confiança, mas as posições relativas dos domínios serão essencialmente aleatórias – refletindo seu comportamento na vida real. Isso será refletido em notas baixas em outra métrica de confiança chamada erro alinhado previsto (predicted aligned error/PAE) (veja a seção “[Entradas e Saídas](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)“). Seria imprudente tirar quaisquer conclusões biológicas a partir das posições relativas previstas desses domínios.

Isso é especialmente verdadeiro para proteínas de membrana: AlphaFold2 não tem informações do plano da membrana, então pode atribuir domínios a posições que, na realidade, colidiriam com a membrana. Novamente, a incerteza nas orientações dos domínios geralmente se reflete na PAE quando visualizada como um gráfico.
