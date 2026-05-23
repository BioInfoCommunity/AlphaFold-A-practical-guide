---
layout: default
title: 'Como funciona o AlphaFold 3?'
---

# Como funciona o AlphaFold 3?

AlphaFold 3 é construído sobre princípios gerais semelhantes aos AlphaFold 2 (para mais informações sobre AlphaFold 2, veja a seçã [AlphaFold 2: Uma visão geral de alto nível](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)).

Muitos detalhes práticos permanecem iguais, notadamente o uso de múltiplos alinhamentos de sequência (MSAs) como principal entrada da rede neural. Além disso, a arquitetura geral do AlphaFold 3 mantém uma estrutura familiar, a do AlphaFold 2, onde um grande tronco processa uma representação em par a par do complexo químico, que é então usada por um módulo estrutural para gerar posições atômicas explícitas.

No entanto, apesar dessas semelhanças fundamentais, a arquitetura do AlphaFold 3 melhorou substancialmente em relação ao AlphaFold 2. A nova arquitetura acomoda estruturas químicas mais gerais e melhora a eficiência dos dados no aprendizado.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/AFS-Education-Figure-2-240828-r01-1024x265.png)

Figura 35. A arquitetura do AlphaFold 3. Retângulos representam módulos de processamento, enquanto setas mostram o fluxo de dados. Amarelo, dados de entrada; ativações de rede azul e abstratas; Verde, dados de saída. As esferas coloridas representam coordenadas físicas dos átomos.

Por exemplo, para reduzir a quantidade de processamento MSA, o AlphaFold 3 substitui o Evoformer do AlphaFold 2 por um novo módulo Pairformer que possui um bloco de embedding MSA menor e mais simples. Alguns dos avanços do AlphaFold 3, notadamente suas previsões de desempenho aprimorado dos complexos antígeno-anticorpo, estão diretamente relacionados à sua menor dependência do sinal MSA. No entanto, para a predição da estrutura das proteínas, o AlphaFold 3 ainda faz uso intensivo de dados coevolutivos do MSA.

Crucialmente, o AlphaFold 3 prevê as coordenadas de átomos individuais dentro de um complexo. Isso é diferente do AlphaFold 2, que previu as posições dos resíduos de aminoácidos e suas cadeias laterais. A nova abordagem oferece ao AlphaFold 3 flexibilidade computacional para lidar com diferentes tipos de moléculas.

### Tokenização

Outra mudança no AlphaFold 3, em comparação com o AlphaFold 2, é como o sistema subdivide um complexo. Ambos dividem o complexo de interesse em "tokens". No AlphaFold 2, os tokens correspondem diretamente a aminoácidos, refletindo o foco estrito do sistema nas estruturas proteicas. Em contraste, o AlphaFold 3 foi projetado para modelar efetivamente moléculas quimicamente diferentes, variando desde íons e ligantes de pequenas moléculas até macromoléculas compostas por centenas de aminoácidos ou nucleotídeos. Uma abordagem de um token por átomo para toda a estrutura, incluindo proteínas e ácidos nucleicos, ofereceria a máxima flexibilidade: no entanto, restrições de memória exigem um compromisso.

Assim, a estratégia de tokenização do AlphaFold 3 equilibra a necessidade de flexibilidade necessária para moléculas pequenas com a praticidade computacional. Portanto, um token pode corresponder a:

* Um aminoácido padrão na cadeia proteica
* Um nucleotídeo padrão na cadeia de ácidos nucleicos
* Um átomo de um ligante
* Um átomo de um íon
* Um átomo de um resíduo de aminoácido quimicamente modificado ou nucleotídeo. Para prever a estrutura de um resíduo de aminoácidos ou nucleotídeos quimicamente modificados, o AlphaFold 3 tokenizará todo o resíduo/nucleotídeo como átomos. Em outras palavras, esses são tratados mais como ligantes do que como aminoácidos ou nucleotídeos padrão.


Para entender isso, considere uma estrutura composta por 100 resíduos de aminoácidos e um ligante contendo 20 átomos. AlphaFold 3 representará essa estrutura usando 100 + 20 = 120 tokens. Isso é importante porque métricas de confiança como PAE (veja a subseção “[Interpretando resultados do AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/interpreting-results-from-alphafold-server/)“) agora são calculadas para tokens em vez de aminoácidos.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/tokens.png)

Figura 36. Ilustrando tokenização. Aqui, três resíduos de aminoácidos exigem três tokens para modelar; Três nucleotídeos também recebem três tokens, e um ácido cítrico recebe 13 tokens, para 13 átomos não hidrogênios nesse ligante.

### Difusão

O AlphaFold 3 prevê coordenadas brutas dos átomos usando um módulo de difusão, tornando-se um modelo de ML "generativo". Modelos generativos criam novos dados semelhantes aos exemplos que aprendem: no caso do AlphaFold 3, estruturas do Banco de Dados de Proteínas. Isso contrasta com modelos não generativos como o AlphaFold 2, que identificam padrões nos dados existentes.

Difusão é uma técnica padrão em aprendizado de máquina. Primeiro, um conjunto de dados de alta informação é distorcido por níveis variados de ruído aleatório; Subsequentemente, a rede neural aprende a restaurá-la aos dados originais. O sistema utiliza uma descrição condicional para cada exemplo que deve ser restaurado. Por exemplo, ao gerar imagens, um condicionamento típico pode ser uma descrição em texto da imagem final. Durante o treinamento, a rede aprende a gerar dados plausíveis para se adequar a qualquer condicionamento, avançando incrementalmente do ruído puro para a saída final.

No AlphaFold 3, o módulo de difusão foi treinado para receber coordenadas atômicas "ruidosas" e prever as coordenadas corretas. A informação de condicionamento é a informação da sequência para a molécula ou complexo alvo.

Para mais detalhes sobre a mecânica interna do AlphaFold 3, veja o Material Suplementar ao artigo do AlphaFold 3
 ([Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).

## Visão geral das saídas do AlphaFold 3

AlphaFold 3 apresenta a estrutura prevista de uma proteína ou complexo, retornando as coordenadas de todos os átomos no formato mmCIF. Por padrão, o AlphaFold 3 produz cinco estruturas previstas a partir de uma única semente. Essas são geradas amostrando o processo de difusão cinco vezes.

Assim como o AlphaFold 2, o AlphaFold 3 fornece múltiplas métricas de confiança para ajudar você a avaliar criticamente suas previsões:


* **LDDT prevista (pLDDT):** coordenadas atômicas previstas são acompanhadas por escores de pLDDT. Esses refletem a confiança local do AlphaFold 3 na predição da posição daquele átomo em particular.
* **Escores de Erro Alinhado Previsto (PAE) e um gráfico PAE:** uma indicação da confiança do AlphaFold no empacotamento e nas posições relativas de domínios, cadeias moleculares como proteínas e DNA, e outras entidades como ligantes e íons.
* **Pontuação TM prevista (pTM):**: uma métrica de valor único que reflete a precisão da estrutura geral prevista.
* **Pontuação TM prevista por interface (ipTM)** mede a precisão das previsões de um componente do complexo em relação aos outros componentes do complexo.
* **PTM por cadeia e par por cadeia ipTM:** confiança em cadeias individuais ou pares de cadeias.

---
