---
layout: default
title: 'Saídas do ColabFold'
---

# Saídas do ColabFold

O ColabFold gera arquivos PDB contendo as coordenadas 3D previstas da proteína ou complexo proteico. Esses podem ser analisados com pacotes padrão de software de visualização molecular, como [PyMOL](https://pymol.org) ou [Chimera](https://www.cgl.ucsf.edu/chimera/).

Os valores de pLDDT são armazenados no campo do fator B (B-factor field). Isso significa que você pode usar programas de gráficos moleculares como o PyMOL para codificar por cores a estrutura prevista de acordo com as pontuações do pLDDT (por exemplo, veja as instruções do [FAQ do ColabFold](https://github.com/sokrypton/ColabFold#faq)).

Para estruturas de monômeros, as previsões são classificadas por pLDDT, onde ‘rank\_001’ representa a estrutura com maior confiança. Para complexos proteicos, as previsões são classificadas por pTM (veja a seção “[Avaliando as estruturas previstas do AlphaFold2 usando escores de confiança](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/)” para explicações dessas métricas de confiança).

O ColabFold também fornece um gráfico pLDDT (\_plddt.png).  Isso mostra a pontuação de pLDDT para cada posição de aminoácido. Enquanto isso, os PAEs de todos os modelos são armazenados como um único arquivo png  (\_PAE.png).

O arquivo MSA (formato a3m) contém as sequências usadas pelo ColabFold na predição. Esse arquivo pode ser inspecionado usando seu visualizador de alinhamento favorito, por exemplo, [JalView](https://www.jalview.org).

A cobertura e diversidade dos MSA podem ser examinadas visualizando o gráfico de cobertura  (\_coverage.png). Este gráfico mostra o número de sequências no MSA e sua identidade em relação a posições específicas de aminoácidos. Isso pode fornecer insights sobre as informações de sequência usadas para a predição.
