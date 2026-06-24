---
layout: default
title: 'pLDDT: Compreendendo a confiança local'
---

# pLDDT: Compreendendo a confiança local

O teste de diferença local de distância previsto (predicted local distance difference test/pLDDT) é uma medida por resíduo da confiança local. Ele é escalado de 0 a 100, com pontuações mais altas indicando maior confiança e geralmente uma predição mais precisa.

A pLDDT mede a confiança na estrutura local, avaliando em que medida a predição estaria de acordo com uma estrutura obtida experimentalmente. Ele é baseado no teste de diferença de distância local Cα (local distance difference test [lDDT-Cα](https://academic.oup.com/bioinformatics/article/29/21/2722/195896?login=true)), que é uma pontuação que não depende da superposição, mas avalia a correção das distâncias locais ([Mariani et al., 2013](https://doi.org/10.1093/bioinformatics/btt473)).

Com base nisso, um pLDDT acima de 90 seria considerado a categoria de maior precisão, na qual tanto a cadeia dorsal quanto a cadeia lateral são tipicamente previstas com alta precisão. Em contraste, um pLDDT acima de 70 geralmente corresponde a uma predição correta da espinha dorsal com deslocamento de algumas cadeias laterais.

A pontuação de pLDDT pode variar significativamente ao longo de uma cadeia proteica. Isso significa que o AlphaFold2 pode ter muita confiança na estrutura de algumas partes da proteína, mas menos confiante em outras regiões. Isso dá aos usuários uma indicação de quais partes da estrutura prevista podem ser confiáveis e quais são improváveis ([Guo et al., 2022](https://doi.org/10.1038/s41598-022-14382-9)).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/pLDDT_fixed.gif)


Figura 14. Amostra pLDDT (Teste de Diferença Local de Distância previsto/predicted Local Distance Difference Test) para uma estrutura proteica prevista. Cores diferentes indicam o nível de confiança do AlphaFold2 em sua predição (ver legenda).

Existem duas classes de razões pelas quais o AlphaFold2 atribui baixa confiança a uma região de uma proteína. Pode ser que essa região seja naturalmente altamente flexível ou intrinsecamente desordenada, caso em que não possua nenhuma estrutura bem definida. Alternativamente, a região pode ter uma estrutura previsível, mas o AlphaFold2 não possui informações suficientes para prevê-la com confiança. Ambos os cenários normalmente geram um pLDDT abaixo de 50.

Notavelmente, o AlphaFold2 pode estar muito confiante na estrutura de um domínio globular de uma proteína, mas menos confiante na estrutura dos ligadores entre domínios. Isso ocorre porque o AlphaFold2 tem mais informações para trabalhar ao prever a estrutura dos domínios globulares. Esses domínios são tipicamente conservados, ou seja, mudaram menos ao longo do tempo evolutivo. Em contraste, os conectores têm mais probabilidade de serem naturalmente variáveis, menos estruturados e mais flexíveis. Não há como prever estruturas específicas para regiões naturalmente não estruturadas, então o AlphaFold2 atribui às suas previsões uma confiança baixa.

A maioria das regiões intrinsecamente desordenadas (intrinsically disordered regions - IDRs) é sempre desordenada. No entanto, existem algumas IDRs em que a proteína não possui uma estrutura definida sob condições fisiológicas em seu estado não ligado, mas passa por dobramento induzido pela ligação ao interagir com seu parceiro macromolecular nativo. Nesses casos incomuns, o AlphaFold2 mostra uma tendência a prever o estado dobrado com altas pontuações de pLDDT ([Alderson et al., 2023](https://doi.org/10.1073/pnas.2304302120); [Piovesan et al., 2022](https://doi.org/10.1002/pro.4466)).

Um exemplo disso é a proteína de iniciação de tradução eucariótica 4E (4E-BP2, UniProt ID: [Q13542](https://www.uniprot.org/uniprotkb/Q13542/entry)). AlphaFold2 prevê uma estrutura helicoidal com alta confiança: na natureza, 4E-BP2 adota essa estrutura apenas em seu estado ligado (PDB ID: [3AM7](https://www.wwpdb.org/pdb?id=pdb_00003am7)). Note que a estrutura vinculada estava incluída no conjunto de treinamento do AlphaFold2, então o programa já havia visto isso anteriormente.











#####  Proteína 2 de ligação ao fator de iniciação da tradução eucariótica 4E (Uniprot ID: [Q13542](https://www.uniprot.org/uniprotkb/Q13542/entry))

O AlphaFold prevê uma conformação helicoidal para 4E-BP2 ([AF-Q13542-F1](https://alphafold.ebi.ac.uk/entry/Q13542)) que se assemelha muito ao estado ligado (PDB ID: [3AM7](https://www.wwpdb.org/pdb?id=pdb_00003am7), purple)

Um comportamento semelhante ocorre em IDRs que passam por mudanças conformacionais devido a modificações pós-traducionais. Nesses casos, o AlphaFold2 tende a prever o estado condicionalmente dobrado.

Por fim, é essencial entender que uma pontuação alta de pLDDT para todos os domínios de uma proteína não significa necessariamente que o AlphaFold2 confie nas posições ou orientações relativas desses domínios. O pLDDT não mede confiança em escalas tão grandes, então uma métrica diferente é necessária.


---

## Teste seu conhecimento

Aqui está um exercício curto para ajudar você a avaliar as estruturas proteicas previstas com base nas pontuações de pLDDT delas. Vamos ver quão bem você consegue interpretar essas pontuações e tomar decisões informadas sobre a confiabilidade do modelo.

Qual estrutura tem a melhor pontuação em pLDDT?







Visualizador de Proteínas



##### Família de domínios tipo lectina C ([AF-Q8IZS7-F1](https://alphafold.ebi.ac.uk/entry/Q8IZS7))

Pode funcionar na mediação de interações célula-célula imunes

##### Antígeno 1 da membrana apical ([AF-Q3S2X4-F1](https://alphafold.ebi.ac.uk/entry/Q3S2X4))

Envolvido na invasão de eritrócitos por parasitas

##### Cloranfenicol acetiltransferase ([AF-P36883-F1](https://alphafold.ebi.ac.uk/entry/P36883))

Responsável pela resistência ao antibiótico cloranfenicol

Muito alta (pLDDT > 90)

Confiável (90 > pLDDT > 70)

Baixo (70 > pLDDT > 50)

Muito baixo (pLDDT < 50)

### Confira suas respostas
