---
layout: default
title: 'Introdução de variantes missense e AlphaMissense'
---

# Introdução de variantes missense e AlphaMissense

Variantes missense são o tipo mais comum de variante genética. Uma única alteração na sequência de DNA resulta na substituição de um aminoácido por outro em uma proteína. Enquanto algumas variantes do missense são inofensivas, outras podem levar a distúrbios genéticos.

AlphaMissense é um sistema de aprendizado de máquina que pode categorizar uma variante genética missense como provavelmente patogênica (causadora de doenças) ou benigna (efeito limitado). Para classificar variantes missense, o Google DeepMind desenvolveu uma nova ferramenta chamada AlphaMissense. O Google DeepMind baseou o AlphaMissense no AlphaFold2, mas o implementou como um sistema separado.

O AlphaMissense já forneceu previsões de alta confiança para a maioria das variantes humanas de missense ([Cheng et al., 2023](https://doi.org/10.1126/science.adg7492)). Veja o Aviso 1 [1](https://www.ebi.ac.uk/training/online/courses/alphafold/?page_id=2721&preview=true#:~:text=1.%20Disclaimer%3A%20%E2%80%9CAlphaFold,a%20qualified%20professional.%E2%80%9D)

## **Como funciona o AlphaMissense**

Para prever se uma variante é patogênica, o AlphaMissense combina dois tipos de dados.

A primeira é o grau em que o resíduo de aminoácidos foi conservado ao longo da história evolutiva. Se um resíduo for profundamente conservado, ele provavelmente será importante para a função da proteína. Alterações nesses resíduos conservados são mais propensas a serem patogênicas.

O segundo fator é o contexto estrutural da variante. Dependendo de onde um aminoácido está localizado dentro de uma proteína, é mais ou menos provável que ele seja crítico para o funcionamento.

O processo de treinamento do AlphaMissense envolveu a análise de um vasto conjunto de dados de frequências variantes em populações humanas e primatas. Variantes frequentemente observadas foram categorizadas como benignas, enquanto variantes raras ou ausentes foram consideradas patogênicas.

Para verificar se o AlphaMissense previu com sucesso a patogenicidade das variantes missense, ele foi validado com base em múltiplos benchmarks. Esses dados incluíam dados anotados do ClinVar, do modelo evolutivo de Efeito Variante (Evolutionary model of Variant Effect/ EVE) e dos conjuntos de dados MAVE.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/11/alphamissense-1.png)


Figura 31. O AlphaMissense supera outros métodos computacionais para prever os efeitos de variantes missense do ClinVar. Os métodos destacados em cinza foram treinados diretamente no ClinVar; Isso levou a métricas de desempenho potencialmente infladas, já que algumas variantes de treinamento estão incluídas neste conjunto.

1. Aviso: “O AlphaFold é uma ferramenta de pesquisa e seus resultados apresentam diferentes níveis de confiabilidade. As informações fornecidas nestes módulos e pelo AlphaFold (incluindo no Banco de Dados AlphaFold) são fornecidas gratuitamente, estritamente no estado em que se encontram e sem qualquer declaração ou garantia de qualquer tipo. Não nos responsabilizamos pela precisão, confiabilidade, disponibilidade, eficácia ou uso correto dessas informações, nem por qualquer impacto decorrente do uso contínuo das mesmas. Se você confiar em alguma dessas informações, o fará por sua própria conta e risco. Estes módulos, o AlphaFold e seus resultados não se destinam, não foram validados e não são aprovados para uso clínico. Você não deve usar nenhuma dessas informações para fins clínicos nem confiar nelas para aconselhamento médico ou outro tipo de aconselhamento profissional. Qualquer conteúdo referente a esses tópicos é fornecido apenas para fins informativos e não substitui o aconselhamento de um profissional qualificado.”
