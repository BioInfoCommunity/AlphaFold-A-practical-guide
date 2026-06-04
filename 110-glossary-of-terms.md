---
layout: default
title: 'Glossário de termos'
---

# Glossário de termos

Este glossário foca em termos específicos para AlphaFold e dobramento de proteínas. Para um conjunto mais amplo de termos usados em biologia de proteínas e biologia estrutural, recomendamos o extenso [glossário do Protein Data Bank](https://www.rcsb.org/docs/general-help/glossary).

* **Banco de Dados de Estruturas de Proteínas AlphaFold (AFDB)**: um banco de dados com mais de 214 milhões de estruturas de proteínas previstas pelo AlphaFold, criado em colaboração pelo Google DeepMind e EMBL-EBI.
* **Aminoácido**: uma pequena molécula à base de carbono que serve como bloco de construção de proteínas. Cada aminoácido contém um grupo amino básico, um grupo carboxila ácido e uma cadeia lateral de hidrogênio ou orgânica ligada ao átomo de carbono central.
* **BigQuery**: o data warehouse empresarial sem servidor e econômico do Google, que funciona em várias nuvens e se adapta à escala dos seus dados.
* **Avaliação Crítica de Predição de Estrutura (CASP)**: um teste experimental de predições de estrutura de proteínas, realizado a cada dois anos desde 1994.
* **Cofator**: um composto químico não proteico ou íon metálico necessário para a atividade de uma enzima.

* **Colab**: abreviação de Colaboratory. Um sistema que permite escrever e executar código Python no seu navegador. * **ColabFold**: uma implementação comunitária do Colab para executar o AlphaFold e outras ferramentas como o RoseTTAFold.
* **Complexo**: uma grande estrutura molecular composta por duas ou mais moléculas, como várias proteínas, proteína(s) com ligante ou proteína(s) com ácido nucleico. Um complexo composto inteiramente de proteínas pode ser chamado de multímero.
* **Espectrometria de massa com reticulação (XL-MS)**: uma técnica experimental para identificar regiões estruturais próximas dentro de uma proteína. Uma proteína alvo é misturada com reagentes que formam ligações covalentes com ela. A proteína é então digerida e as partes interagentes são identificadas usando espectrometria de massa.
* **Microscopia eletrônica criogênica (cryo-ME)**: microscopia eletrônica realizada em uma temperatura muito baixa. Ela permite que os pesquisadores examinem grandes estruturas e complexos biomoleculares em estados próximos aos fisiológicos.
* **Evoformer**: a rede neural no núcleo do AlphaFold.
* **Distância global da verdade fundamental (GDT_TS)**: uma medida da precisão de uma estrutura proteica prevista em comparação com a estrutura determinada experimentalmente. Essa pontuação é usada pelo CASP. As pontuações variam de 0 (totalmente impreciso) a 100 (precisão perfeita).
* **Proteína intrinsecamente desordenada (IDP)**: uma proteína que naturalmente não possui uma estrutura 3D fixa, mas exibe um alto grau de flexibilidade. Algumas proteínas possuem regiões intrinsecamente desordenadas (IDRs) que se encontram ao lado de regiões altamente estruturadas.
* **Modelagem de modelo predito de interface (ipTM)**: uma medida da precisão da estrutura prevista de um multímero, usada pelo AlphaFold-Multimer. Ela mede a precisão da interface prevista entre as subunidades do complexo proteína-proteína.
* **Ligante**: uma molécula que se liga especificamente a outra molécula, como uma proteína ou um ácido nucleico, para formar um complexo. Um ligante geralmente é uma molécula pequena, mas pode ser uma proteína.
* **Variante missense**: o tipo mais comum de variante genética. Uma variante missense é uma única alteração na sequência de DNA, resultando na substituição de um aminoácido por outro em uma proteína.
* **Multímero**: um complexo composto inteiramente de proteínas.
* **Alinhamento de múltiplas sequências (MSA)**: um conjunto de dados no qual múltiplas sequências de proteínas semelhantes e/ou relacionadas são alinhadas por regiões idênticas ou semelhantes. O AlphaFold usa MSAs para prever as estruturas de novas proteínas.
* **Erro de alinhamento previsto (PAE)**: uma medida da confiança do AlphaFold na posição relativa de dois resíduos dentro de uma estrutura proteica prevista. É definido como o erro posicional esperado no resíduo X, medido em Ångströms (Å), se as estruturas prevista e real fossem alinhadas no resíduo Y. É efetivamente uma medida da confiança do AlphaFold de que os domínios da proteína estão bem compactados e que o posicionamento relativo dos domínios na estrutura prevista está correto.
* **Representação de pares**: uma representação de cada par de resíduos de aminoácidos em uma proteína. As representações de pares codificam informações sobre as relações evolutivas entre cada par de aminoácidos, que podem ser interpretadas como informações posicionais.
* **Peptídeo**: uma cadeia única de aminoácidos unidos por ligações peptídicas. Comparados às proteínas, os peptídeos podem ser bastante curtos e sempre consistem em apenas uma cadeia.
* **Banco de Dados de Proteínas (PDB)**: um banco de dados gratuito contendo todas as estruturas macromoleculares que já foram determinadas experimentalmente e publicadas. Seu arquivo principal contém coordenadas atômicas 3D de modelos estruturais de proteínas, além de DNA e RNA. Também inclui complexos dessas moléculas com metais e pequenas moléculas, além de dados experimentais e metadados relacionados.
* **Banco de dados PDB100**: uma versão agrupada do PDB. Foi criado pesquisando cada estrutura representativa no PDB em relação ao Banco de Dados AlphaFold, usando o Foldseek.
* **Teste de diferença de distância local prevista (pLDDT)**: uma métrica usada pelo AlphaFold para estimar a confiança local, no nível de resíduos de aminoácidos individuais, em uma estrutura de proteína prevista. É escalonado de 0 a 100, com pontuações mais altas indicando maior confiança.
* **Proteína**: uma grande molécula biológica composta por uma ou mais longas cadeias de aminoácidos unidas por ligações peptídicas.
* **Pontuação de modelagem de modelo prevista (pTM)**: uma medida integrada de quão bem o AlphaFold-Multimer previu a estrutura de um complexo. É a pontuação de modelagem de modelo (TM) prevista para uma sobreposição entre a estrutura prevista e a estrutura verdadeira hipotética. As pontuações pTM variam entre 0 e 1: uma pontuação acima de 0,5 significa que a dobra prevista geral para o complexo será semelhante à estrutura verdadeira.
* **Semente aleatória**: um número gerado aleatoriamente usado para inicializar as previsões de estrutura do AlphaFold.
* **Reciclagem**: no contexto do AlphaFold, a etapa final normal na previsão de uma estrutura. O AlphaFold pega suas saídas iniciais e as submete novamente ao processo de previsão de estrutura. Os usuários podem variar o número de vezes que o software recicla os dados: em alguns casos, mais reciclagens podem gerar previsões melhores.
* **Relaxamento**: uma etapa final opcional na previsão da estrutura de proteínas. O relaxamento envolve fazer pequenas alterações na estrutura prevista, usando o método do gradiente descendente no campo de força AMBER. O relaxamento pode ajudar a resolver violações e colisões estereoquímicas raras, fazendo pequenos ajustes na estrutura.
* **Resíduo**: um aminoácido que foi incorporado a uma cadeia peptídica para formar uma proteína. Três átomos, equivalentes a uma molécula de água, são removidos da molécula de aminoácido nesse processo.
* **Desvio quadrático médio (RMSD)**: uma medida da distância média ponderada (ou desvio) entre átomos correspondentes quando duas estruturas semelhantes são sobrepostas. Um RMSD menor significa uma melhor correspondência. Duas estruturas idênticas teriam um RMSD de 0 Ångströms (Å). Um RMSD maior que 2-3 Å sugere que as estruturas são substancialmente diferentes.
* **Modelo**: uma estrutura de proteína que pode ser fornecida a softwares de modelagem, incluindo o AlphaFold, para auxiliar na predição de uma nova estrutura.
* **UniProt:** um banco de dados gratuito de sequências de proteínas e anotações funcionais, contendo informações sobre a função biológica de proteínas derivadas da literatura científica.
* **Cristalografia de raios X**: um método experimental usado para determinar as estruturas tridimensionais detalhadas de moléculas, incluindo proteínas. O processo exige que um feixe de raios X incida sobre um cristal da molécula em estudo. Os raios serão dispersos em um padrão característico que permite calcular a forma da molécula.
