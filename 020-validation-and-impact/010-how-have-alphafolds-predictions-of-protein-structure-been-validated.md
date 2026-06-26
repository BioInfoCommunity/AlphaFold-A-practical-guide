---
layout: default
title: Como as previsões do AlphaFold2 sobre a estrutura das proteínas foram validadas?
---

# Como as previsões do AlphaFold2 sobre a estrutura das proteínas foram validadas?

**A capacidade do AlphaFold2 de prever a estrutura das proteínas foi demonstrada pela primeira vez quando triunfou na avaliação CASP14 das previsões estruturais. Desde então, ela foi validada por múltiplas linhas de evidência de experimentos de biologia estrutural, incluindo estudos de cristalografia de raios X, microscopia eletrônica criogênica e espectrometria de massa de reticulação.**

## **O sucesso do AlphaFold no CASP**

A Avaliação Crítica da predição de Estrutura (Critical Assessment of Structure Prediction - [CASP](https://predictioncenter.org/index.cgi)) é um teste experimental de previsões de estrutura de proteínas. Ele é realizado a cada dois anos desde 1994. A avaliação está aberta a todas.

Os participantes do CASP submetem estruturas previstas para proteínas. As proteínas em questão têm suas estruturas determinadas por experimento, cristalografia de raios X, ressonância magnética nuclear (RMN) ou microscopia eletrônica criogênica (cryogenic electron microscopy - cryo-EM). No entanto, essas estruturas não são divulgadas ao público até o término da avaliação. As estruturas previstas são então comparadas com essas estruturas experimentais.

O Google DeepMind inseriu previsões estruturais do AlphaFold2 no [CASP14](https://predictioncenter.org/casp14/index.cgi) em 2020. O software superou todos os outros participantes por uma grande margem.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/AF_CASP14.gif)

Figura 7. As dez entradas com maior pontuação no CASP14 em 2020, baseadas em suas pontuações acumuladas em todas as proteínas tentadas. AlphaFold2 foi, de longe, o mais bem-sucedido.

Anteriormente, a precisão geral da predição estrutural, medida pela distância global da verdade de terren (GDT\_TS), havia alcançado apenas cerca de 60. AlphaFold2 teve mais de 90. Essa pontuação significava que as estruturas proteicas previstas correspondiam de perto às estruturas resolvidas experimentalmente. Os coordenadores do CASP proclamaram que o problema do dobramento de proteínas havia sido "amplamente resolvido", pelo menos para cadeias de proteínas individuais

O Google DeepMind já havia participado de uma versão anterior do AlphaFold no [CASP13](https://predictioncenter.org/casp13/) de 2018. Ficou em primeiro lugar, mas por uma margem pequena. Essas previsões não foram suficientemente precisas, então o problema da predição da estrutura da proteína não foi considerado resolvido.

![](https://lh7-us.googleusercontent.com/_BkbLSDY5zMIDo4Sza-QXz24DxJ7WHwcmFpm_xOIZIZGuTEiO_ZkgGicn-aIDErGAOlOeFLMELERcPRyamc_SkckEwF1p0jGOkHGcQ8AAoMkjjrRVS56eOWtlmjwsE_os6G-ITrsyU7WVHXAr7SiNbs)

Figura 8. Sucesso geral na predição da estrutura de proteínas em CASPs ao longo dos anos. O AlphaFold impulsionou melhorias rápidas em 2018 e 2020.

O Google DeepMind não participou diretamente do [CASP15](https://predictioncenter.org/casp15/index.cgi) em 2022. No entanto, todos os melhores performers usaram versões modificadas ou personalizadas do AlphaFold2. Como o Google DeepMind liberou o código-fonte do AlphaFold, outros pesquisadores conseguiram construir sobre ele e, em alguns casos, superar a versão padrão do software ([Elofsson, 2023](https://doi.org/10.1016/j.sbi.2023.102594); [Kryshtafovych et al., 2023](https://onlinelibrary.wiley.com/doi/10.1002/prot.26617)).

![](https://lh7-us.googleusercontent.com/PfuIC2A8rK2wOrPVEnVhJT_2Kp3KHg3QTk20KXc-PdhDfpthIjM_NdTB1yElVEHaGOEYD9HU8KqopwW_8Zj-C9MEaAauhWBbIgS-WBmsrqRL6zRIKlWG1nIgCkLkugfJvCoB1So2FQp_iJTkRMFzK6g)

## **Evidências subsequentes da biologia estrutural**

Em CASP14, AlphaFold2 obteve sucesso ao prever as estruturas de dezenas de proteínas. No entanto, existem milhões de proteínas na natureza. Por isso, pesquisadores experimentalistas subsequentes submeteram o software a validação adicional.

Experimentos de biologia estrutural demonstram que as estruturas AlphaFold2 (ou partes bem definidas das estruturas previstas, como domínios proteicos) funcionam bem como modelos de busca para substituição molecular em cristalografia de raios X ([Barbarin-Bocahu and Graille, 2022](https://doi.org/10.1107/S2059798322002157); [McCoy et al., 2022](https://doi.org/10.1107/S2059798321012122); [Millán et al., 2021](https://doi.org/10.1002/prot.26214)). Isso implica que as estruturas AlphaFold2 se assemelham muito às estruturas cristalinas de proteínas.

As estruturas AlphaFold2 se encaixam bem em mapas experimentais de densidade eletrônica cryo-EM ([Chojnowski, 2022](https://doi.org/10.1107/s2059798322005009); [Giri et al., 2023](https://doi.org/10.1016/j.sbi.2023.102536)). Isso novamente sugere uma boa correspondência entre as previsões estruturais e os dados experimentais.

As estruturas AlphaFold2 ainda se encaixam bem quando as proteínas estão em solução, ao contrário de cristalizadas. O uso de modelos AlphaFold2 para interpretar dados de ressonância magnética nuclear (RMN) obtidos em solução sugeriu um excelente ajuste na grande maioria dos casos ([Fowler and Williamson, 2022](https://doi.org/10.1016/j.str.2022.04.005); [Tejero et al., 2022](https://doi.org/10.3389/fmolb.2022.877000)). Curiosamente, isso indica que os modelos AlphaFold2 não são tão tendenciosos para prever um estado cristalino, apesar de o AlphaFold2 ter sido treinado principalmente com dados derivados de cristais de proteína.












##### Figura 10. Proteína especializada de proteína transportadora de acilo

Notavelmente, a predição do AlphaFold  (AlphaFold ID: [AF-Q6N882-F1](https://alphafold.ebi.ac.uk/entry/Q6N882)) demonstra uma correspondência mais próxima à estrutura da RMN (verde, PDB ID: [2LPK](https://doi.org/10.2210/pdb2lpk/pdb)) o que à estrutura cristalina correspondente de raios X (cinza, PDB ID: [3LMO](https://doi.org/10.2210/pdb3lmo/pdb)) ([Tejero et al., 2022](https://doi.org/10.3389/fmolb.2022.877000))

Experimentos de espectrometria de massa de reticulação mostraram que a maioria das previsões estruturais do AlphaFold2 estava correta tanto para cadeias proteicas individuais quanto para complexos proteína-proteína *in situ* ([Bartolec et al., 2023](https://doi.org/10.1073/pnas.2219418120); [McCafferty et al., 2023](https://doi.org/10.1038/s42003-023-04773-7)).

Juntos, esses dados validam a precisão do AlphaFold2. Eles também sugerem que os modelos AlphaFold2 podem ser úteis para uma variedade de aplicações de pesquisa.
