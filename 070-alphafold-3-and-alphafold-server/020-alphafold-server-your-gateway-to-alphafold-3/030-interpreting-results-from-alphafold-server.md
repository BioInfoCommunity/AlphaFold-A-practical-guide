---
layout: default
title: 'Interpretando resultados do AlphaFold Server'
---

# Interpretando resultados do AlphaFold Server

**Além das estruturas previstas, o AlphaFold 3 fornece uma variedade de métricas de confiança, permitindo que você avalie a precisão das previsões. As métricas de confiança são semelhantes às usadas pelo AlphaFold 2.**

No entanto, como o AlphaFold 3 prevê as estruturas dos complexos multimoleculares, há fatores adicionais a serem considerados. O AlphaFold 3 não é destinado, validado ou aprovado para uso clínico.

## **Saídas fornecidas pelo AlphaFold Server**

O AlphaFold Server produz cinco previsões por tarefa. (Tecnicamente, cinco amostras de difusão por semente, mas atualmente cada trabalho executa uma semente.)

A predição mais bem colocada é exibida na página de resultados. Estruturas previstas são classificadas usando a métrica ranking_score. Isso utiliza duas medidas de confiança na estrutura geral (pTM e ipTM), mas também inclui termos que penalizam os conflitos e incentivam regiões desordenadas a não terem hélices espúrias. Esses termos extras significam ranking_score devem ser usados apenas para estruturas de ranking.

Todos os cinco exemplos, junto com suas confidências associadas, estão disponíveis para download em um arquivo zip. Este contém:

* Cinco arquivos .cif chamados **fold\_<job\_name>\_model\_<N>cif**, onde “<N>” é o posto da estrutura prevista. As estruturas são classificadas de 0 a 4, onde 0 tem a maior confiança. Os arquivos .cif contêm estruturas previstas no formato mmCIF. Eles podem ser visualizados em qualquer visualizador molecular, como PyMOL ou ChimeraX.
* Cinco arquivos .json chamados **fold\_<job\_name>\_summary\_confidences\_<N>.json**, onde "<N>" é a hierarquia da estrutura prevista de 0 a 4. Esses arquivos .json contêm resumos das métricas de confiança das previsões (veja abaixo para mais detalhes sobre métricas de confiança).
* Cinco arquivos .json chamados **fold\_<job\_name>\_full\_data\_<N>.json**, onde "<N>" é o posto da estrutura prevista de 0 a 4. Esses arquivos .json contêm métricas detalhadas de confiança, como dados PAE completos, para as previsões (veja abaixo para mais informações sobre métricas de confiança).
* Um arquivo chamado **fold\_<job\_name>\_job\_request.json**. Este contém as entradas do trabalho de modelagem e pode ser usado para reexecutar o trabalho (para mais detalhes, veja “[Uso avançado do AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-features-of-alphafold-server/)“).
* Um arquivo chamado **terms\_of\_use.md**. Este é um documento legal detalhando os termos de uso das previsões.

JSON é um formato baseado em texto, portanto é legível tanto por humanos quanto por máquinas. Você pode verificar arquivos JSON com qualquer editor de texto, ou usar um sistema de programação como Python para ler e visualizar resultados.

```
{
 "chain_iptm": [
  0.85,
  0.86,
  0.59,
  0.59
 ],
 "chain_pair_iptm": [
  [
   0.82,
   0.9,
   0.83,
   0.83
  ],
  [
   0.9,
   0.82,
   0.83,
   0.84
  ],
  [
   0.83,
   0.83,
   0.03,
   0.1
  ],
  [
   0.83,
   0.84,
   0.1,
   0.03
  ]
 ],
 "chain_pair_pae_min": [
  [
   0.76,
   0.79,
   1.0,
   1.12
  ],
  [
   0.79,
   0.76,
   1.11,
   1.0
  ],
  [
   0.98,
   1.06,
   0.78,
   0.92
  ],
  [
   1.05,
   0.97,
   0.92,
   0.78
  ]
 ],
 "chain_ptm": [
  0.82,
  0.82,
  0.03,
  0.03
 ],
 "fraction_disordered": 0.18,
 "has_clash": 0.0,
 "iptm": 0.91,
 "num_recycles": 10.0,
 "ptm": 0.91,
 "ranking_score": 1.0
}
```

Um exemplo do conteúdo de um arquivo  fold\_\_summary\_confidences\_.json, mostrando múltiplas métricas de confiança.

## **Métricas de confiança**

Algumas métricas nos arquivos JSON são muito diretas: por exemplo, o registro "ptm" contém a pontuação total do pTM. No entanto, algumas outras métricas são mais direcionadas a usuários avançados. Explicações completas das métricas de confiança são fornecidas nas seções seguintes.

Arquivos JSON com resultados resumidos contêm as seguintes informações:

* ***chain\_iptm*:** Um array [num\_chains] que fornece a confiança média (ipTM) nas interfaces entre cada cadeia e todas as outras cadeias. Isso pode ser usado para classificar estruturas previstas para uma cadeia específica, quando você se importa com onde a cadeia se liga ao restante do complexo e não sabe com quais outras cadeias espera que ela interaja. Isso ocorre frequentemente com ligantes, cada um dos quais o sistema trata como uma cadeia separada.
* ***chain\_pair\_iptm*:** Um array quadrado [num\_chains, num\_chains] representando pontuações ipTM par a par. O elemento fora da diagonal (i, j) do array contém o ipTM restrito a tokens das cadeias i e j. O elemento diagonal (i, i) contém o pTM restrito à cadeia i. O array pode ser usado para classificar previsões de uma estrutura pela precisão de uma interface específica entre duas cadeias que você sabe que interagem, por exemplo, interações anticorpo-antígeno. Como esses valores são calculados com base em tokens, essa métrica também abrange pequenas moléculas e resíduos e nucleotídeos quimicamente modificados.
* ***chain\_pair\_pae\_min***:  Um array quadrado [num\_chains, num\_chains] dos valores PAE. O elemento (i, j) do array contém o menor valor de PAE entre linhas restritas à cadeia i e colunas restritas à cadeia j. Isso foi encontrado correlacionado com a interação entre duas cadeias, podendo ser usado para distinguir moléculas interagindo e não interagindo. Como esses valores são calculados com base em tokens, essa métrica também abrange pequenas moléculas e resíduos e nucleotídeos quimicamente modificados.
* ***c******hain\_ptm*:** Uma matriz [num\_chains]. O elemento i contém a pTM restrita à cadeia i. Isso pode ser usado para classificar as estruturas previstas de cadeias individuais quando você está mais interessado na estrutura daquela cadeia, em vez de suas interações entre cadeias.
* ***fraction\_disordered*:**  Um escalar na faixa de 0-1 que indica qual fração da estrutura de predição está desordenada, conforme medida pela área de superfície acessível (veja [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w) para detalhes).
* ***has\_clash*:** Um booleano, ou seja, um valor sim/não, indicando se a estrutura possui um número significativo de átomos em conflito (mais de 50% de uma cadeia, ou uma cadeia com mais de 100 átomos em conflito).
* ***iptm*:** Um escalar na faixa 0-1 indicando a TM-score (confiança nas interfaces previstas) para todas as interfaces da estrutura. *num\_recycles:Um número inteiro que representa o número total de reciclagens..*
* ***ptm*:** Um escalar na faixa de 0-1 indicando a pontuação TM prevista para a estrutura completa.
* ***ranking\_score*****:** Um escalar que varia de -100 a 1,5 e que pode ser usado para previsões de ranking. Ele combina *ptm*, *iptm*, *fraction\_disordered* and *has\_clash* em um único número com a seguinte equação:

0.8 × ipTM + 0.2 × pTM + 0.5 × disorder − 100 × has\_clash

Arquivos JSON com saídas completas contêm as seguintes informações:

* ***atom\_chain\_ids*:** Um array [num\_atoms] indicando os IDs de cadeia correspondentes a cada átomo na predição.
* ***atom\_plddts*:** Uma matriz [num\_atoms]. O elemento i indica o teste de diferença de distância local previsto (pLDDT) para o átomo i na predição.
* ***contact\_probs*:** Uma matriz quadrada [num\_tokens, num\_tokens].  O elemento (i, j) indica a probabilidade prevista de que o token i e o token j estejam em contato, onde "em contato" é definido como uma distância máxima de 8Å entre um átomo representativo definido pelo sistema para cada token (para detalhes, veja  [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).
* ***pae*:** Uma matriz quadrada [num\_tokens, num\_tokens]. O elemento (i, j) indica o erro de alinhamento previsto (PAE) na posição do token j, quando a predição está alinhada à verdade fundamental usando o referencial do token i.
* ***token\_chain\_ids*:** Um array  [num\_tokens] indicando os IDs da cadeia correspondentes a cada token na predição.
* **token\_res\_ids:** um array [num\_res].

Arquivos JSON com saídas completas (**fold\_<job\_name>\_full\_data\_<N>.json**) podem ser usados com ferramentas como a versão mais recente do [ChimeraX](https://www.rbvi.ucsf.edu/chimerax/) ou [PAE Viewer](https://subtiwiki.uni-goettingen.de/v4/paeViewerDemo). Dessa forma, você pode visualizar gráficos PAE dinâmicos e comparar dados PAE com estruturas previstas armazenadas nos arquivos **fold\_<job\_name>\_model\_<N>.cif** files.
