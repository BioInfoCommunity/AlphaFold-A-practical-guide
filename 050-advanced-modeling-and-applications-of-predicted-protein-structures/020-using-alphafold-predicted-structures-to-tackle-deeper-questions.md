---
layout: default
title: 'Uso de estruturas previstas AlphaFold2 para abordar questões mais profundas'
---

# Uso de estruturas previstas AlphaFold2 para abordar questões mais profundas

**As estruturas previstas pelo AlphaFold2 têm muitos usos, além da biologia estrutural pura. Ao prever as estruturas de proteínas que ainda não foram resolvidas, o AlphaFold2 possibilita a geração de hipóteses sobre as funções e interações dessas proteínas. Além disso, a capacidade de comparar proteínas pela forma nos permite descobrir relações evolutivas profundas. AlphaFold2 não é destinado para, validado ou aprovado para uso clínico – veja o Aviso 1: termos de responsabilidade** [1](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/using-alphafold-predicted-structures-to-tackle-deeper-questions/#:~:text=1.%20Disclaimer%3A%20%E2%80%9CAlphaFold,a%20qualified%20professional.%E2%80%9D).

## **O AlphaFold2 pode ajudar a descobrir as funções e relações evolutivas das proteínas**

A capacidade do AlphaFold2 de prever a estrutura das proteínas pode ser inestimável para identificar a(s) função(ões) que uma proteína desempenha. Também pode ajudar a identificar as relações evolutivas entre proteínas, como a ancestralidade compartilhada.

A abordagem computacional convencional para determinar a função de uma proteína-alvo é buscar proteínas com sequências de aminoácidos semelhantes. A suposição subjacente é que proteínas com sequências semelhantes desempenham funções semelhantes.

No entanto, a busca sequencial às vezes perde boas correspondências. Isso ocorre porque proteínas com estruturas semelhantes, e portanto funções, podem ter sequências de aminoácidos substancialmente diferentes. Em geral, a estrutura proteica é mais conservada do que a sequência de aminoácidos. Como o AlphaFold2 fornece estruturas previstas para proteínas que ainda não foram resolvidas, ele possibilita prever as funções dessas proteínas desconhecidas.

Além disso, a capacidade de comparar proteínas com base em sua estrutura, que é mais conservada, permite que você veja muito mais para trás no tempo evolutivo. Isso permite identificar parentes muito distantes que evoluíram a partir da mesma proteína precursora ([Monzon et al., 2022](https://doi.org/10.1093/bioadv/vbac072)). Em contraste, você provavelmente perderá relações evolutivas mais profundas entre proteínas se focar apenas nas sequências de aminoácidos











##### Figura 27. Exemplo de homólogos potenciais

A proteína humana da membrana epitelial 3 (EMP3) (sólida, [AF-P54852-F1](https://alphafold.ebi.ac.uk/entry/P54852)) compartilha semelhanças surpreendentes com uma proteína desconhecida de *C. elegans* (transparente, [AF-G5EBZ7-F1](https://alphafold.ebi.ac.uk/entry/G5EBZ7)). Essa conexão inesperada, revelada pela abordagem RBSH, sugere funções compartilhadas ou relações evolutivas entre esses organismos aparentemente distantes([Monzon et al., 2022](https://doi.org/10.1093/bioadv/vbac072)).

Programas de busca estrutural como o [Foldseek](https://search.foldseek.com/search) ([van Kempen et al., 2023](https://doi.org/10.1038/s41587-023-01773-0)) facilitam a busca de proteínas com formas 3D semelhantes. Eles fazem isso pesquisando estruturas semelhantes em vários bancos de dados de estruturas proteicas, incluindo AFDB e PDB.

O Foldseek pode ser usado para agrupar proteínas por sua estrutura 3D. Tais clusters estão disponíveis [por meio do AFDB](https://alphafold.ebi.ac.uk/entry/Q5VSL9#:~:text=Structure%20similarity%20cluster), que contém mais de 200 milhões de estruturas proteicas previstas. Agrupar proteínas por sua estrutura é crucial para analisar grupos de proteínas distantemente relacionadas.

Como sempre, você deve lembrar de avaliar criticamente todas as estruturas previstas do AlphaFold2, usando métricas de confiança como pLDDT e PAE (veja a seção “[Avaliando as estruturas previstas do AlphaFold2 usando escores de confiança](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/)“).

## **Mais insights do AlphaFold2 sobre estruturas previstas pelo AlphaFold2**

Estruturas previstas podem ajudar a gerar e testar hipóteses sobre onde e como uma proteína pode interagir com outras proteínas ou moléculas.

Por exemplo, podem ser usados para identificar sítios de ligação ou sítios ativos. Alguns estudos utilizaram com sucesso estruturas previstas por AlphaFold para guiar estudos virtuais de triagem ou acoplamento, identificando ligantes ou inibidores promissores de pequenas moléculas ([Baselious et al., 2023](https://doi.org/10.1016/j.compbiomed.2023.107700); [Liu et al., 2022](https://doi.org/10.1093/bib/bbac365); [Ren et al., 2022](http://DOI	https://doi.org/10.1039/D2SC05709C); [Weng et al., 2022](https://doi.org/10.1155/2022/4629392); [Yang et al., 2022](https://doi.org/10.34133/2022/9781758)). O acoplamento rígido contra estruturas AlphaFold mostrou-se ineficiente ([Wong et al., 2022](https://doi.org/10.15252/msb.202211081)); ainda assim, estudos bem-sucedidos empregaram simulações de acoplamento flexível ou dinâmica molecular ([Baselious et al., 2023](https://doi.org/10.1016/j.compbiomed.2023.107700); [Liu et al., 2022](https://doi.org/10.1093/bib/bbac365); [Weng et al., 2022](https://doi.org/10.1155/2022/4629392); [Zhang et al., 2023](https://doi.org/10.1021/acs.jcim.2c01219))

Essas estruturas previstas também são fundamentais para orientar pesquisas em análise mutacional. Por exemplo, introduzir mutações para alterar a estrutura de um bolsão de ligação, sem conhecer a estrutura da proteína, exigiria muita tentativa e erro. Estruturas previstas pelo AlphaFold poderiam restringir mutações candidatas. Da mesma forma, você pode realizar análises mutacionais das interfaces proteína-proteína depois que estas forem previstas pelo AlphaFold.

O AlphaFold permite a visualização de mutações conhecidas associadas a uma doença no contexto de uma estrutura proteica altamente precisa para pesquisas científicas em estágio inicial

1. Aviso: "AlphaFold é uma ferramenta de pesquisa e seus resultados apresentam diferentes níveis de confiança. As informações fornecidas nesses módulos e pelo AlphaFold (incluindo no Banco de Dados AlphaFold) são fornecidas gratuitamente, estritamente no estado em que estão e sem qualquer tipo de representação ou garantia. Não nos responsabilizamos pela precisão, confiabilidade, disponibilidade, efetividade ou uso correto destas informações ou por qualquer impacto do uso contínuo dessas informações. Se você confiar em qualquer informação desse tipo, faz isso exclusivamente por sua conta e risco. Esses módulos, AlphaFold e seus resultados não são destinados a para, não foram validados e não são aprovados para uso clínico. Você não deve usar nenhuma dessas informações para fins clínicos nem confiar nelas para aconselhamento médico ou profissional. Qualquer conteúdo sobre esses temas é fornecido apenas para fins informativos e não substitui o aconselhamento de um profissional qualificado."
