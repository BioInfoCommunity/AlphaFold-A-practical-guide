---
layout: default
title: 'Escolhendo como acessar o AlphaFold2'
---

# Escolhendo como acessar o AlphaFold2

**Existem várias formas de acessar o AlphaFold2, desde simplesmente visualizar uma estrutura proteica prevista online no Banco de Dados de Estruturas de Proteínas AlphaFold, até instalar o código-fonte e rodar previsões personalizadas por conta própria. Você deve escolher com critério, com base nas suas necessidades e nos recursos disponíveis.**

## **Um fluxo de trabalho comum com o AlphaFold2**

* Como abordagem inicial, você pode verificar se o monômero da proteína de interesse já está disponível no Banco de Dados de Estrutura de Proteínas AlphaFold (AlphaFold Protein Structure Database). Se for, você deve avaliar a estrutura proposta com base nas métricas de confiança.
* Se não estiver disponível, você pode usar um Colab como o [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb). Isso vai te dar um ponto de partida para prever sua proteína. Você pode prever a forma oligomérica da proteína e/ou um complexo proteína-proteína e obter controle ampliado sobre MSAs e moldes. Além disso, o lote [ColabFold batch](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/batch/AlphaFold2_batch.ipynb) está disponível para prever algumas centenas de estruturas proteicas.
* Por fim, se você pretende prever um número considerável de estruturas, considere instalar o AlphaFold2 localmente em uma estação de trabalho potente com uma GPU de última geração. Você pode até usar um cluster computacional, por exemplo, para triagem de interação proteína-proteína. Por favor, note que a instalação local pode ser desafiadora.

**Nota:​​** Essas ferramentas de pesquisa estão todas disponíveis gratuitamente tanto para uso acadêmico quanto comercial, sob licenças permissivas de código aberto.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/02/Workflow.png)

Figura 20. Um fluxo de trabalho típico com AlphaFold, mostrando como prever a estrutura de uma proteína. O fluxo de trabalho começa com a abordagem menos intensiva computacionalmente, só aumentando se isso não funcionar.

Os prós e contras das três formas de acessar o AlphaFold.

|  | PRÓS | CONTRAS |
| --- | --- | --- |
| Código-fonte AlphaFold | * Personalização completa das previsões estruturais. * Reprodutibilidade. * Pode realizar previsões estruturais em massa. * Fornece um conjunto completo de saídas, incluindo MSA. | * Precisa de grandes recursos computacionais (GPU de última geração e 3 TB de espaço em disco, idealmente SSD). * Complexidade dos procedimentos de instalação. * Só no Linux. |
| ColabFold ou AlphaFold Colab | * NNão precisa de instalação: usa uma plataforma gratuita baseada em nuvem com acesso a recursos computacionais. * Fácil de usar. * Fornece dados completos sobre MSA usados. | * Recursos limitados no modo livre. * Dá para fazer upgrade para o Colab Pro, mas isso exige assinatura. * AlphaFold Colab: Controle limitado sobre as configurações. |
| Banco de Dados de Estrutura de Proteínas AlphaFold (AlphaFold Protein Structure Database - AFDB) | * Acesso livre. * Os usuários podem simplesmente buscar uma sequência de proteína e baixar a estrutura prevista correspondente. * Sem tempos de espera. * Download em massa disponível. * Metadados disponíveis. | * Pode estar faltando proteína de interesse. * Só monômeros. * Apenas estruturas pré-computadas são hospedadas. * Os usuários não podem rodar suas próprias previsões estruturais. * MSAs não estão disponíveis para previsões de estrutura. |
