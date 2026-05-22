---
layout: default
title: "Entradas e saídas AlphaFold2 – Recapitulação"
---

# Entradas e saídas AlphaFold2 – Recapitulação

**A única entrada necessária é a sequência de aminoácidos da sua proteína de interesse. No entanto, você também pode fornecer dados adicionais para orientar a predição estrutural do AlphaFold2. AlphaFold2 irá fornecer a estrutura prevista da proteína, acompanhada por escores de confiança como pLDDT e PAE.**

## **Entradas AlphaFold2**

Para obter uma estrutura prevista para uma proteína, tudo o que você precisa fazer é fornecer à AlphaFold2 sua sequência de aminoácidos. Nenhum outro input é essencial.

No entanto, a qualidade da estrutura prevista depende da qualidade do alinhamento múltiplo de sequências (MSA), que é gerado com base em dados de sequências de proteínas. MSAs construídas com o mecanismo padrão geralmente funcionam muito bem, mas podem haver casos excepcionalmente difíceis (veja a seção “[Pontos fortes e limitações do AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/an-introductory-guide-to-its-strengths-and-limitations/strengths-and-limitations-of-alphafold/)“).

Se você achar que o MSA gerado a partir da sua sequência de proteína alvo não é o ideal, você pode fornecer o seu próprio MSA, gerado com as suas ferramentas preferidas. (Veja a seção “[Personalizando previsões de estrutura do AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/customising-alphafold-structure-predictions/)“).

Alternativamente, você pode orientar a modelagem fornecendo ao AlphaFold2 estruturas de molde a partir de proteínas relacionadas à proteína(s) alvo. Por exemplo, modelos poderiam ser usados para modelar uma proteína em um estado específico (veja a seção “[Personalizando previsões de estrutura AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/customising-alphafold-structure-predictions/)“).

Os parâmetros padrão do AlphaFold2 tendem a funcionar bem para a grande maioria das proteínas. No entanto, para casos difíceis, pode ser benéfico ajustar certos parâmetros. Por exemplo, você pode aumentar o número de reciclagens ou executar várias previsões a partir de diferentes sementes aleatórias (veja a seção “[Personalizando previsões de estrutura AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/customising-alphafold-structure-predictions/)“).

Outros softwares como o ColabFold, que é construído sobre o AlphaFold2, introduzem parâmetros adicionais para controlar o AlphaFold2 (veja a seção “[Predição de estruturas proteicas com ColabFold e AlphaFold Colab](https://www.ebi.ac.uk/training/online/courses/alphafold/accessing-and-predicting-protein-structures-with-alphafold/predicting-protein-structures-with-colabfold-and-alphafold-colab/)“).

## **Saídas AlphaFold2**

A principal saída da rede neural AlphaFold2 é a estrutura prevista da proteína ou complexo proteico. Ele é salvo em dois formatos padrão: PDB e mmCIF.

As coordenadas atômicas são acompanhadas por escores pLDDT, que refletem a confiança local da predição. O pLDDT também é salvo no mesmo arquivo PDB ou mmCIF, no campo de fatores B. Isso significa que você pode usar programas de gráficos moleculares como o PyMOL para codificar por cores a estrutura prevista de acordo com as pontuações do pLDDT (veja as instruções no [FAQ do ColabFold](https://github.com/sokrypton/ColabFold#faq)).

AlphaFold2 também fornece PAE: uma indicação de sua confiança no empacotamento e nas posições relativas dos domínios. O PAE é escrito separadamente como um arquivo JSON e pode ser visualizado como um gráfico PAE.

Para a modelagem de multimers, duas pontuações adicionais são fornecidas. A pTM avalia a precisão da estrutura geral do complexo, enquanto a ipTM mede a precisão das previsões da interface entre as subunidades do complexo proteína-proteína. As pontuações pTM e ipTM são escritas nos arquivos de log e salvas no arquivo JSON de saída ([consulte a documentação](https://github.com/google-deepmind/alphafold/blob/main/README.md)).
