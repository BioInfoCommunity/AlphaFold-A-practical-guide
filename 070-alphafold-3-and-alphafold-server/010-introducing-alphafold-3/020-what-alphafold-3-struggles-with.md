---
layout: default
title: 'O que AlphaFold 3 tem dificuldade?'
---

# O que AlphaFold 3 tem dificuldade?

O AlphaFold 3 pode modelar quimicamente entidades diferentes, como proteínas, pequenas moléculas e íons metálicos. Portanto, explora um espaço químico muito mais amplo do que apenas proteínas. Ainda assim, AlphaFold 3 ainda tem limitações.

Uma limitação chave dos modelos de predição de estruturas proteicas é que eles normalmente preveem estruturas estáticas, como visto no Banco de Dados de Proteínas (Protein Data Bank/ PDB), e não capturam o comportamento dinâmico dos sistemas biomoleculares em solução. O AlphaFold 3 não é exceção: ele prevê uma única estrutura para uma sequência específica. É possível aumentar a variabilidade das estruturas previstas modificando o MSA e usando múltiplas sementes; No entanto, não há garantia de que isso produza estados estruturais adicionais das moléculas-alvo.

Em alguns casos, o estado conformacional modelado pode não estar correto dado os ligandos e outras entradas especificadas. Por exemplo, as  E3 ubiquitina ligases adotam nativamente uma conformação aberta em estado apo (livre de ligantes) e só são observadas em conformação fechada quando estão em estado holo (ligante). No entanto, AlphaFold 3 prevê a conformação fechada tanto para estados holo quanto apo ([Abramson et al, 2024](https://doi.org/10.1038/s41586-024-07487-w)).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-12.14.06-1024x468.png)

Figura 37: Conformações de Cereblon e previsões do AlphaFold 3. Estruturas de verdade de base (cinza) mostram o cereblon em suas conformações abertas (apo, PDB: [8CVP](https://www.wwpdb.org/pdb?id=pdb_00008cvp); à esquerda) e fechadas (algema à mezigdomida holo PDB: [8D7U](https://www.wwpdb.org/pdb?id=pdb_00008d7u);  à direita). As previsões AlphaFold 3 (azul) para ambas as conformações estão consistentemente no estado fechado, com 10 amostras sobrepostas para a predição apo. As linhas tracejadas destacam a distância entre os domínios de ligação à talidomida N-terminal Lon e C-terminal da talidomida.

Ainda existem alguns alvos que o AlphaFold 3 tem dificuldade em modelar. Uma classe desafiadora são as proteínas órfãs, que não possuem homólogos próximos baseados em sequências conhecidas, impedindo que o AlphaFold 3 construa MSAs suficientemente profundos. Nesses casos, uma forma de obter a maior precisão é gerar um grande número de previsões e ranqueá-las. Isso é notavelmente eficaz para complexos anticorpo–antígeno: as previsões mais bem classificadas continuam melhorando à medida que mais sementes modelo são adicionadas, mesmo com 1.000 sementes. No entanto, essa abordagem gera custos computacionais.

A arquitetura atualizada do modelo significa que o AlphaFold 3 às vezes produz categorias de erro que não foram vistas no AlphaFold 2. Crucialmente, o AlphaFold 3 é um modelo generativo, enquanto o AlphaFold 2 era não generativo. Como resultado, às vezes prevê a ordem estrutural espúria (alucinações) em regiões desordenadas. Regiões alucinadas geralmente são marcadas como muito baixas de confiança, com escores de pLDDT bem abaixo de 50. No entanto, eles podem não apresentar a aparência característica em forma de fita que o AlphaFold 2 produz em regiões desordenadas, por exemplo, formando estruturas alfa-helicoidais. Na ausência dessa aparência característica, o pLDDT baixo é o principal indicador de partes alucinatórias da estrutura. Note que alucinações são bastante raras (ver Extended Data Fig. 1 de [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-13.58.55.png)

Figura 38. predição AlphaFold 3 de um complexo de poros nucleares. Mostrada a estrutura de verdade (à esquerda) de um complexo de poros nucleares (PDB: [7F60](https://www.wwpdb.org/pdb?id=pdb_00007f60)) com 1.854 resíduos não resolvidos, ao lado de previsões do AlphaFold-Multimer v.2.3 (meio) e AlphaFold 3 (direita). Embora as regiões alucinadas do AlphaFold 3 em áreas desordenadas sejam tipicamente indicadas por escores de confiança muito baixos, às vezes podem formar estruturas ordenadas (por exemplo, hélices alfa) em vez da aparência esperada em forma de fita característica das previsões de regiões desordenadas do AlphaFold 2.

O AlphaFold 3 nem sempre respeita a quiralidade ao prever as conformações de pequenas moléculas. No benchmark PoseBusters, ela apresenta uma taxa de violação de quiralidade de 4,4% ([Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).

AlphaFold 3 pode, ocasionalmente, prever átomos sobrepostos (em colisão). Isso às vezes se manifesta como violações extremas em proteínas com duas ou mais cadeias idênticas (homómeros), nas quais cadeias inteiras são falsamente previstas como sobrepostas. No entanto, esse tipo de erro é raramente observado em grandes complexos com mais de 2.000 tokens.
