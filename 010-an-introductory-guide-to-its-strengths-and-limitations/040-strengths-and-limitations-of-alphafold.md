---
layout: default
title: Pontos fortes e limitações do AlphaFold 2
---

# Pontos fortes e limitações do AlphaFold 2

**O que uma rede neural pode ou não pode fazer depende muito dos dados usados para seu treinamento. Para o treinamento do AlphaFold2, apenas as partes proteicas das estruturas do PDB foram usadas: outras partes, como pequenas moléculas e ácidos nucleicos, não foram incluídas no treinamento. Isso significa que há alguns aspectos das estruturas que o AlphaFold não pode prever ou não pode garantir a precisão.**

## **O que o AlphaFold pode fazer**

AlphaFold2 foi originalmente treinado em cadeias proteicas individuais, então é excelente em prever suas estruturas. Mais tarde, uma extensão do AlphaFold2 foi treinada especificamente para prever complexos proteína-proteína: essa versão é agora conhecida como AlphaFold-Multimer ([Evans et al., 2022](https://doi.org/10.1101/2021.10.04.463034)). Ela pode prever as estruturas de complexos proteicos compostos por várias cópias da mesma cadeia (homomultímeros, como dímeros e hexâmeros), bem como aquelas formadas por várias cadeias proteicas diferentes (heteromultímeros). Para limitações específicas, veja a seção “[Acessando e prevendo estruturas proteicas com AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/accessing-and-predicting-protein-structures-with-alphafold/)”.

Crucialmente, o AlphaFold2 não simplesmente replica estruturas proteicas conhecidas. Pesquisadores independentes demonstraram que o AlphaFold2 pode prever estruturas nunca antes vistas no PDB, ou seja, novas dobras proteicas ([Bordin et al., 2023](https://doi.org/10.1038/s42003-023-04488-9); [Barrio-Hernandez et al., 2023](https://doi.org/10.1038/s41586-023-06510-w); [Durairaj et al., 2023](https://doi.org/10.1038/s41586-023-06622-3)).












##### Figura 5. Proteína não caracterizada (AlphaFold ID: [AF-A0A849ZK06-F1](https://alphafold.ebi.ac.uk/entry/A0A849ZK06))

Prevista como uma proteína de ligação a ribonucleotídeos com uma estrutura geral que se assemelha a um dobramento de quinase proteica, função molecular prevista pelo DeepFRI ([Barrio-Hernandez et al., 2023](https://doi.org/10.1038/s41586-023-06510-w))

AlphaFold2 pode ser usado para identificar regiões intrinsecamente desordenadas. Naturalmente, o sistema não pode prever subestruturas desordenadas ou dinâmicas,ou as estruturas de sequências que não existem em uma única conformação definida na natureza. Essas regiões são verdadeiramente dinâmicas e não possuem uma estrutura fixa que possa ser prevista. No entanto, a métrica de confiança local do AlphaFold2 (local confidence metric - pLDDT) apresenta forte correlação com a desordem intrínseca, tornando o AlphaFold uma ferramenta de última geração para identificação das regiões desordenadas ([Tunyasuvunakool et al., 2021](https://doi.org/10.1038/s41586-021-03828-1); [Akdel et al., 2022](https://www.nature.com/articles/s41594-022-00849-w)).

## **O que AlphaFold2 enfrenta**

Por padrão, o AlphaFold não detecta mutações pontuais que modificam apenas um resíduo, em função da alteração na sequência de DNA. Isso se deve à falta de dados sobre o efeito das variações, combinada com o foco do AlphaFold2 em padrões em vez do cálculo das forças físicas. Pelos mesmos motivos, o AlphaFold2 também é menos preciso em prever as estruturas associadas às sequências altamente variáveis, exemplo as de moléculas do sistema imunológico, como anticorpos.

O AlphaFold2 tem dificuldades para prever as estruturas das proteínas "órfãs" – aquelas com poucos parentes próximos – pois trabalha derivando relações entre sequências de proteínas. Se não houver sequências suficientes para comparação, o AlphaFold2 frequentemente produz previsões de baixa qualidade com escores de confiança baixos. Esse problema se agrava se as poucas sequências relacionadas não possuem estruturas conhecidas no PDB. Por outro lado, essa escolha metodológica significa que o AlphaFold2 frequentemente pode prever a estrutura da proteína, mesmo que não existam estruturas relacionadas conhecidas no PDB, desde que uma sequência tenha milhares de parentes/relações.

As proteínas sofrem alterações estruturais quando desempenham suas funções. No entanto, essas diferentes conformações são descritas apenas para uma minoria das proteínas do PDB. Por padrão, o AlphaFold2 não captura tais mudanças conformacionais, pois foi projetado para prever estruturas estáticas, ou seja, snapshots estruturais. No entanto, pesquisadores descobriram que, ao aplicar certos truques, é possível forçar o AlphaFold2 a produzir uma conformação diferente da proteína (veja a seção 
“[Modelagem avançada e aplicações de estruturas proteicas previstas](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/)“).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/PDBe_KB_2.gif)


Figura 6. Uma das limitações do AlphaFold é que ele não tem consciência das moléculas que se ligam às proteínas, o que pode afetar a estrutura 3D da proteína. A hexoquinase ([Q96Y14](https://www.uniprot.org/uniprotkb/Q96Y14/entry)) adota conformações distintas na presença (laranja, esquerda) e ausência (verde, direita) de açúcar. Notavelmente, a predição da estrutura do AlphaFold está alinhada com o estado sem açúcar (como pode ser visto tanto visualmente quanto via valor RMSD).

Sugar-bound PDB ID:[2E2Q](https://www.wwpdb.org/pdb?id=pdb_00002e2q)

Sugar-free PDB ID: [2E2N](https://www.wwpdb.org/pdb?id=pdb_00002e2n)

## **O que o AlphaFold2 não consegue fazer**

AlphaFold2 não tem conhecimento de outras moléculas que interagem com proteínas, como ácidos nucleicos, cofatores de pequenas moléculas, íons e outros componentes não proteicos. Da mesma forma, o AlphaFold2 não foi projetado para modelar modificações pós-traducionais, nem para modelar estruturas de ácidos nucleicos livres. No entanto, o AlphaFold2 frequentemente pode prever uma forma ligada a ligantes ou íons de uma proteína, mesmo na ausência do ligante/íon propriamente dito.

AlphaFold2 não tem conhecimento do plano da membrana. Consequentemente, não consegue modelar corretamente as orientações relativas dos domínios transmembranas e outros domínios proteicos das proteínas membranares. No entanto, como mencionado, o AlphaFold2 alerta os usuários sobre incertezas ao atribuir uma pontuação de confiança baixa. Esse problema específico normalmente se reflete na pontuação de erro alinhado previsto (predicted aligned error - PAE). (Veja a seção “[Entradas e Saídas](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)“).





Tabela com marcadores



| AlphaFold2 predicts | AlphaFold2 struggles to predict | AlphaFold2 doesn’t predict |
| --- | --- | --- |
| * Single protein chains * Protein multimers * Multisubunit protein-protein complexes | * Multiple conformations for the same sequence * Effects of point mutations * Antigen-antibody interactions | * Protein-DNA and protein-RNA complexes * Nucleic acid structure * Ligand and ion binding * Post-translational modifications * Membrane plane for transmembrane domains |
