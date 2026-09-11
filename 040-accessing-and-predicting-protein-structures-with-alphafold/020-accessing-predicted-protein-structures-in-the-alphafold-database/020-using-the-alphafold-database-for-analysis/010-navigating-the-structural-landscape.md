---
layout: default
title: 'Explorando o panorama estrutural'
---

# Explorando o panorama estrutural

## Agrupamento por similaridade estrutural

O AFDB agora incorpora informações sobre proteínas estruturalmente semelhantes, facilitando a exploração do universo proteico e a compreensão das relações entre diferentes proteínas. Esse recurso baseia-se no conceito de agrupamento (*clustering*), fornecendo insights valiosos sobre a similaridade de proteínas e as relações evolutivas.

### **Compreendendo o Agrupamento do AFDB**

O processo de agrupamento no AFDB envolve duas etapas principais:

1. **Agrupamento baseado em sequências (AFDB50/MMseqs2):** A etapa inicial utiliza o [MMseqs2](https://github.com/soedinglab/MMseqs2),uma ferramenta rápida e sensível de busca e agrupamento de sequências proteicas ([Steinegger et al., 2017](https://doi.org/10.1038/nbt.3988)), para agrupar as 214 milhões de sequências de proteínas do UniProtKB presentes no AFDB com base na similaridade de sequência. Isso gera um conjunto reduzido de agrupamentos, cada um representado pela proteína com a maior pontuação média de pLDDT.
2. **Agrupamento baseado em estrutura (AFDB/Foldseek):** As proteínas representativas da primeira etapa são então agrupadas novamente utilizando o [Foldseek](https://github.com/steineggerlab/foldseek), uma ferramenta poderosa projetada para a comparação rápida e sensível de estruturas proteicas ([van Kempen et al., 2023](https://doi.org/10.1038/s41587-023-01773-0)). O Foldseek identifica similaridades nas formas 3D das proteínas, garantindo que as proteínas dentro de um mesmo agrupamento compartilhem não apenas similaridade de sequência, mas também semelhança estrutural.

### **Como acessar os membros do cluster no AFDB**

Na página de cada proteína no AFDB, você encontrará uma tabela listando os membros do seu cluster. Essa tabela fornece links para as páginas de outras proteínas do mesmo cluster, permitindo comparar rapidamente suas estruturas e explorar possíveis relações funcionais.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/11/Screenshot-2024-11-22-at-13.16.44-1024x715.png)


Figura 28. O banco de dados AlphaFold apresenta previsões de proteínas estruturalmente semelhantes em agrupamentos na parte inferior das páginas de previsão, como esta para a  [D435](https://alphafold.ebi.ac.uk/entry/D435)  proveniente de bactérias não cultivadas. Você pode explorar esses agrupamentos utilizando dois métodos diferentes: AFDB50/MMseqs2 ou AFDB/Foldseek. Para auxiliar na análise dessas previsões, é possível filtrá-las e ordená-las de acordo com suas necessidades.

### **Por que os membros de um cluster são úteis?**

Explorar os membros de um cluster pode fornecer insights valiosos:

* **Relações evolutivas:** Proteínas agrupadas no mesmo cluster podem compartilhar uma origem evolutiva comum, mesmo que suas sequências tenham divergido significativamente.
* **Semelhanças funcionais:** A semelhança estrutural frequentemente implica semelhança funcional. Examinar os membros de um cluster pode ajudar a prever a função de proteínas não caracterizadas.
* **Conexões inesperadas:** O agrupamento pode revelar semelhanças estruturais inesperadas entre proteínas de espécies diferentes ou com funções distintas.

---

## **Busca baseada em estrutura no banco de dados AlphaFold utilizando o Foldseek**

A busca baseada em estrutura concentra-se em identificar semelhanças entre estruturas 3D de proteínas, em vez de suas sequências. Essa abordagem é fundamental para compreender proteínas que apresentam baixa semelhança de sequência, mas características estruturais conservadas, o que frequentemente indica relações funcionais ou evolutivas.

### **Como o Foldseek funciona**

O Foldseek alcança sua eficiência ao simplificar estruturas 3D em uma representação linear e unidimensional, utilizando seu exclusivo "alfabeto 3Di". Essa abordagem captura interações locais fundamentais na estrutura da proteína por meio de uma matriz de substituição 3Di pré-treinada. A representação linear resultante permite que o Foldseek utilize o MMseqs2 para realizar varreduras rápidas em grandes bancos de dados e identificar correspondências estruturais.

### **Integração do Foldseek ao Banco de Dados AlphaFold**

O Foldseek está perfeitamente integrado ao site do AFDB. Basta pesquisar a proteína de seu interesse, navegar até a seção "Similar structures" (Estruturas similares) e iniciar uma busca baseada em estrutura comparando-a com modelos previstos agrupados no AFDB (AFDB50) e com estruturas determinadas experimentalmente provenientes do Protein Data Bank (PDB).

A coleção do PDB é atualizada semanalmente para incorporar as mais recentes inclusões do Worldwide Protein Data Bank, garantindo que você sempre tenha acesso às entradas mais atuais para suas pesquisas.

Os resultados são apresentados de forma clara e podem ser filtrados e classificados para ajudar você a encontrar as correspondências mais relevantes. É possível alinhar proteínas selecionadas à sua sequência de consulta (*query*) para avaliar a qualidade da correspondência. As opções de visualização incluem alternar entre a coloração da cadeia completa e a coloração baseada no pLDDT da sequência de consulta. Os resultados são apresentados de forma clara e podem ser filtrados e classificados.

![AlphaMissense no AFDB](https://github.com/paulynamagana/AFDB_notebooks/blob/main/Presentation3.gif?raw=true)


Figura 29. Banco de dados AlphaFold mostrando a integração com o Foldseek para [D435.](https://alphafold.ebi.ac.uk/entry/A0A1Y0BDV9)

Cada resultado inclui um valor E, que indica a significância estatística da correspondência estrutural. Valores E mais baixos sugerem um grau de semelhança mais elevado. A sobreposição estrutural é acompanhada por um valor de desvio quadrático médio ( root-mean-square deviation - RMSD), que destaca a distância média entre átomos correspondentes nas estruturas alinhadas. Você também pode baixar as estruturas alinhadas para análises posteriores.

### **O que o Foldseek pode revelar?**

O Foldseek pode revelar semelhanças surpreendentes entre proteínas que evoluíram de forma independente, lançando luz sobre sua ancestralidade compartilhada ou evolução convergente.

Finding a structural match to a protein with a known function can provide clues about the function of an unknown protein.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/11/Screenshot-2024-11-22-at-13.10.01.png)


Figure 30. Foldseek revealed a surprising structural similarity between [DNA replication ATP-dependent helicase/nuclease DNA2](https://alphafold.ebi.ac.uk/entry/P51530), a protein involved in DNA repair in humans, and Cas4 (PDB ID: [8D3M](https://www.ebi.ac.uk/pdbe/entry/pdb/8d3m)), a protein involved in bacterial immune systems. Despite having very different sequences, they share a common structural core, suggesting a distant evolutionary relationship.
