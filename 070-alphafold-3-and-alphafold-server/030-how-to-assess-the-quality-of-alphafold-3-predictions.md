---
layout: default
title: 'Como avaliar a qualidade das previsões do AlphaFold 3'
---

# Como avaliar a qualidade das previsões do AlphaFold 3

Todas as estruturas previstas devem ser interpretadas criticamente e à luz dos índices de confiança. O AlphaFold 3 utiliza as mesmas pontuações de confiança do AlphaFold 2, com pequenas modificações. Crucialmente, as pontuações de confiança agora são calculadas para tokens, em vez de para aminoácidos como no AlphaFold 2. O uso de tokens é essencial para permitir que o AlphaFold 3 preveja complexos heterogêneos que incluem vários tipos de moléculas (veja “[Como funciona o AlphaFold 3?](https://www.ebi.ac.uk/training/online/courses/alphafold/introducing-alphafold-3/how-does-alphafold-3-work/)”).

Como o AlphaFold 3 é voltado para complexos, é mais importante considerar aquelas métricas que refletem a confiança das interações previstas. Essas métricas incluem pTM, ipTM, ipTM por pares e PAE para contatos intersubunidades.

As pontuações de confiança AlphaFold 3 para polímeros podem ser substancialmente afetadas pela inclusão (ou remoção) de contextos não poliméricos, como íons ou ligantes estabilizadores. Se estiver investigando algo em um contexto apenas de polímero (por exemplo, interação proteína-proteína), pode ser importante adicionar contexto não polimérico quando apropriado para melhorar os índices de confiança. AlphaFold 2 não possui essa propriedade, pois é treinado e usado apenas com proteínas.

## **Pontuações do pLDDT no AlphaFold 3**

pLDDT é uma estimativa por átomo da confiança do AlphaFold 3 em uma predição estrutural.

Ele utiliza uma escala de 0 a 100, onde valores mais altos indicam maior confiança. Um valor acima de 90 indica alta confiança; um valor abaixo de 50 indica que a parte correspondente da estrutura prevista provavelmente está errada. Isso vale para todos os tipos de moléculas consideradas pelo AlphaFold 3.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-10.51.27.png)

Assim como no AlphaFold 2, a pontuação pLDDT é salva no campo de fatores B do arquivo mmCIF que contém uma estrutura prevista. Isso significa que você pode usar programas de gráficos moleculares como o PyMOL para codificar por cores a estrutura prevista de acordo com as pontuações do pLDDT.

O Servidor AlphaFold exibe estruturas previstas coloridas usando escores pLDDT. Isso é consistente com a codificação por cores usada pelo Banco de Dados AlphaFold.

O AlphaFold 3 fornece escores pLDDT para múltiplos tipos de moléculas, como nucleotídeos e ligandos. Isso contrasta com o AlphaFold 2, que fornece apenas escores de pLDDT para aminoácidos.

Notavelmente, o AlphaFold 3 calcula uma pontuação de pLDDT para cada átomo individual na estrutura. Isso difere do AlphaFold 2, que calcula o pLDDT para cada resíduo de aminoácidos.

O pLDDT tem como objetivo prever uma pontuação LDDT modificada que apenas considera distâncias até polímeros. Para proteínas, o pLDDT é semelhante à métrica lDDT-Cα, mas possui mais granularidade, pois pode variar por átomo, não apenas por resíduo. Para átomos de ligante, a LDDT modificada considera apenas os erros posicionais entre o átomo de ligante e os polímeros: ignora outros átomos de ligante. Para DNA e RNA, o pLDDT usa um raio mais largo de 30 Å em vez dos habituais 15 Å.

## **Pontuações PAE no AlphaFold 3**

O erro alinhado previsto (PAE) é uma medida da confiança do AlphaFold 3 nas posições relativas de dois itens dentro da estrutura prevista.

Valores de PAE mais altos indicam erros previstos maiores e, portanto, menor confiança, assim como no AlphaFold 2. Isso vale para todos os tipos de moléculas que o AlphaFold 3 considera.

O AlphaFold 3 calcula PAE para pares de tokens, em vez de pares de aminoácidos como no AlphaFold 2. Isso permite que o sistema forneça pontuações PAE para todas as moléculas e íons presentes na estrutura.
A PAE é calculada de forma ligeiramente diferente para diferentes tipos de molécula. Para proteínas e ácidos nucleicos, a EAP é medida em relação aos referenciais construídos a partir dos átomos da espinha dorsal dessas macromoléculas. Para pequenas entidades como íons, ligantes e modificações químicas, um referencial é construído para cada átomo a partir de seus vizinhos mais próximos, usando uma molécula em conformação de referência.

Se dois tokens têm uma PAE baixa e pertencem a entidades diferentes, como uma proteína e um ácido nucleico, isso sugere que há uma interação entre essas partes das entidades.

Se você tem interesse em prever interações entre certas moléculas, analisar a PAE entre essas moléculas ou suas partes é útil: valores baixos de PAE sugerem interação entre pelo menos algumas regiões das moléculas, enquanto valores altos de PAE indicam que não há interação detectada. O gráfico PAE vai ajudar você a visualizar isso.

## pTM e ipTM, escores por cadeia e escores por pares

O AlphaFold 3 tem como objetivo modelar complexos macromoleculares contendo diversos componentes, portanto medidas de sua confiança na predição da estrutura geral do complexo são especialmente importantes. Dois valores são fornecidos: pTM e ipTM.

Assim como no AlphaFold 2, o pTM avalia a precisão da estrutura geral do complexo. O pTM agora está disponível para as cadeias individuais, assim como para todo o complexo.

Enquanto isso, a ipTM mede a precisão das previsões de cada entidade individual no contexto de todo o complexo macromolecular. o ipTM também está disponível para todos os pares de entidades dentro do complexo: isso é chamado de ipTM par a par.

Os valores de pTM e ipTM fornecidos pelo AlphaFold 3 devem ser interpretados da mesma forma que os relatados pelo AlphaFold 2. Por exemplo, uma pontuação de ipTM acima de 0,8 indica uma interação prevista com confiança. Para mais detalhes, veja “[Scores de confiança no AlphaFold Multimer](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/confidence-scores-in-alphafold-multimer/)”.

A pTM é menos útil para estruturas pequenas e cadeias curtas. Isso ocorre porque a pontuação TM é muito rigorosa para moléculas menores, então a pTM atribui valores abaixo de 0,05 quando menos de 20 tokens estão envolvidos. Para esses casos, PAE e/ou pLDDT podem indicar mais a precisão da predição.

Uma complicação adicional surge se uma macromolécula alvo contiver grandes regiões desordenadas. Assim como em AlphaFold 2, as regiões desordenadas reduzem tanto as pontuações de pTM quanto de ipTM. Portanto, a estrutura de um complexo com grandes seções desordenadas ainda poderia ser prevista corretamente se pTM estiver abaixo de 0,5 e ipTM estiver abaixo de 0,6. Nesses casos, você deve examinar cuidadosamente o gráfico PAE. Se a PAE entre as partes ordenadas das macromoléculas for baixa, isso sugere possível interação entre essas partes, independentemente das baixas pontuações gerais de pTM e ipTM.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Figure9.png)

Figura 48. A proteína Swi5 é em sua maior parte não estruturada, exceto por seu domínio de ligação ao DNA, previsto com confiança: isso é destacado pelo oval azul na representação estrutural e pelo retângulo azul no gráfico PAE. Apesar das baixas pontuações gerais de pTM e ipTM (0,27 e 0,42, respectivamente), a interação do Swi5 com o DNA do operador é prevista com confiança – conforme julgado pelas partes correspondentes do gráfico PAE, nos retângulos ciano.



---

Aviso: AlphaFold 3 é uma ferramenta de pesquisa e seus resultados apresentam diferentes níveis de confiança. As informações fornecidas nestes módulos e pelo AlphaFold Server são gratuitas, estritamente como estão e sem qualquer tipo de representação ou garantia. Não nos responsabilizamos pela precisão, confiabilidade, disponibilidade, efetividade ou uso correto destas informações ou por qualquer impacto do uso contínuo dessas informações. Se você confiar em qualquer informação desse tipo, faz isso exclusivamente por sua conta e risco. Esses módulos, AlphaFold e seus resultados não são destinados a para, não foram validados e não são aprovados para uso clínico. Você não deve usar nenhuma dessas informações para fins clínicos nem confiar nelas para aconselhamento médico ou profissional. Qualquer conteúdo sobre esses temas é fornecido apenas para fins informativos e não substitui o aconselhamento de um profissional qualificado."
