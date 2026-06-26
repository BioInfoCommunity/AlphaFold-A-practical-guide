---
layout: default
title: 'Personalizando previsões de estrutura do AlphaFold2'
---

# Personalizando previsões de estrutura do AlphaFold2

**Existem muitas maneiras de personalizar as previsões de estrutura proteica que o AlphaFold realiza. Elas incluem variar o número de reciclagens, customizar o MSA e fornecer uma estrutura de modelos. Esse tipo de personalização pode melhorar o desempenho do AlphaFold2 em estruturas desafiadoras, como proteínas que possuem múltiplas conformações.**

## **Parâmetros disponíveis no ColabFold**

Ao usar o [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb), você pode controlar a versão do modelo AlphaFold2 que utiliza. Escolha o tipo de modelo apropriado para suas previsões, como "monômero" ou uma das versões AlphaFold-Multimer. Recomendamos o uso do AlphaFold2.3 para modelagem de multímeros.

Os parâmetros mais importantes que podem ser alterados são os seguintes:

* Número de reciclagens
* Profundidade do alinhamento múltiplo de sequências (MSA)
* Sementes aleatórias usadas para inicializar previsões
* Se deve fornecer uma estrutura modelo para guiar a predição do AlphaFold
* Cada parâmetro é explicado com mais detalhes nas seguintes subseções.

O ColabFold oferece cenários adicionais que você pode explorar. Para mais informações, confira as
[instruções](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb#scrollTo=UGUBLzB3C6WN).

### **Reciclagem**

O AlphaFold2 recicla suas saídas para refinar suas previsões estruturais (veja a seção “[Uma visão geral de alto nível](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)“).

Você pode aumentar o número de reciclagens para que as previsões estruturais convergem mais de perto. Adicionar mais etapas de reciclagem (normalmente de 3 a 20) é um método eficaz para melhorar a qualidade da predição.

Alternativamente, você pode diminuir o número de reciclagens para acelerar a predição estrutural.

### **Otimizando o alinhamento de múltiplas sequências (MSA)**

A precisão da predição de estrutura do AlphaFold2 depende da qualidade do alinhamento de múltiplas sequências (MSA). Os usuários têm diversas opções para otimizar seu MSA.

Você pode alterar a profundidade do MSA, ou seja, o número de sequências incluídas. No ColabFold, a profundidade do MSA é controlada alterando o parâmetro ‘max\_msa’.

Um MSA mais profundo, com centenas ou milhares de sequências, geralmente leva a uma melhor predição da estrutura da proteína. No entanto, um MSA raso com menos de 100 sequências pode ser útil quando você fornece um modelo estrutural (veja "Usando modelos para guiar previsões estruturais", abaixo).

Alternativamente, você pode fornecer um MSA personalizado para o ColabFold. Qualquer tipo de ferramenta de alinhamento pode ser usada para gerar o MSA.

Ajustar o MSA pode ser particularmente útil para prever as estruturas de diferentes estados conformacionais de uma proteína. Por exemplo, agrupar um MSA por similaridade de sequência pode provocar uma variedade de conformações ([Wayment-Steele et al., 2023](https://doi.org/10.1038/s41586-023-06832-9)). Alternativamente, reduzir a profundidade do MSA por subamostragem estocástica pode gerar modelos precisos de múltiplas conformações ([del Alamo et al, 2022](https://doi.org/10.7554/eLife.75751)).

As configurações ideais de MSA dependerão da proteína. Por isso, talvez você precise ajustar esses parâmetros para obter o melhor resultado.

### **Uso de sementes (seeds) aleatórias para aumentar a qualidade da predição**

lphaFold2 usa sementes aleatórias para inicializar suas previsões estruturais. Você pode controlá-los mudando o parâmetro 'random_seed'. Dessa forma, às vezes você pode guiar o AlphaFold2 para uma predição correta.

Do ponto de vista computacional, usar diferentes sementes aleatórias introduz variabilidade nos resultados da predição estrutural. Ao iniciar previsões de estruturas a partir de vários pontos aleatórios diferentes, o AlphaFold2 pode gerar uma maior diversidade de estruturas.

Normalmente, partes de alta confiança da estrutura convergem para a mesma conformação independentemente da semente aleatória usada. No entanto, partes de baixa confiança podem variar substancialmente.

Por exemplo, quando há poucas ou nenhuma sequência na MSA, o AlphaFold2 terá dificuldade em prever a estrutura da proteína com alta confiança. No entanto, mudar as sementes aleatórias às vezes permite que o AlphaFold2 preveja a estrutura apesar desse obstáculo (embora isso não seja garantido). Adicionar mais reciclagens também pode ajudar nessa situação (veja "Reciclagem", acima).

Além disso, um MSA raso combinado com dropout e sementes aleatórias pode levar o AlphaFold2 a mostrar conformações alternativas e/ou diferentes previsões estruturais.

### **Uso de estruturas modelo para guiar previsões estruturais**

Você pode fornecer modelos estruturais (preferencialmente no formato mmCIF) como modelos para guiar o AlphaFold2 na predição de uma proteína em um estado específico. O modelo funciona como referência, impulsionando a predição do AlphaFold2 para se assemelhar à estrutura que você forneceu.

Você pode fornecer um modelo personalizado. Como alternativa, você pode permitir que o ColabFold pesquise templates no banco de dados [PDB100](https://foldseek.steineggerlab.workers.dev/). Esta é uma versão agrupada do PDB, criada pesquisando estruturas representativas do PDB no Banco de Dados de Estruturas de Proteínas AlphaFold usando o Foldseek.

É importante considerar a profundidade do MSA ao usar templates. Se o sinal coevolutivo do MSA for forte, o AlphaFold2 tende a ignorar estruturas de moldes. Por outro lado, um MSA muito superficial pode resultar em previsões de estruturas de baixa confiança. Portanto, você deve otimizar o valor de profundidade do MSA para encontrar o equilíbrio certo, garantindo tanto que o AlphaFold2 leve o template em conta quanto que o sinal do MSA seja forte o suficiente para permitir uma predição de estrutura confiante.

Aqui você pode encontrar um exemplo curto de como usar o ColabFold.

Para obter protocolos adicionais sobre como usar o ColabFold para predição da estrutura de proteínas, consulte o guia *“Easy and accurate protein structure prediction using ColabFold”* ([Kim et al., 2023](https://doi.org/10.21203/rs.3.pex-2490/v1))
