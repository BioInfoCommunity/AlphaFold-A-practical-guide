---
layout: default
title: 'AlphaFold2: Uma visão geral em alto nível'
---

# AlphaFold2: Uma visão geral em alto nível

**Usuários que desejam prever a estrutura 3D de uma proteína só precisam fornecer sua sequência de aminoácidos. Para analisar isso, o AlphaFold2 utiliza um alinhamento de múltiplas sequências (multiple sequence alignment - MSA) que combina as sequências de múltiplas proteínas relacionadas. O software gera um conjunto de representações de pares que modelam as relações entre cada par de resíduos de aminoácidos. O software utiliza o MSA para prever todas as representações de pares e, assim, a estrutura 3D da proteína.**

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/Diagram-1024x576.png)


Figura 13. Visão geral de alto nível de como o AlphaFold2 prevê a estrutura de uma proteína a partir de sua sequência de aminoácidos.

## **O papel do alinhamento múltiplo de sequências (MSA)**

Do ponto de vista do usuário, a única entrada que o AlphaFold2 precisa é a(s) sequência(s) de proteínas. No entanto, o AlphaFold2 funciona construindo um alinhamento de múltiplas sequências (multiple sequence alignment - MSA), no qual múltiplas sequências proteicas semelhantes são colocadas lado a lado. A MSA é gerada consultando vários bancos de dados de sequências proteicas com a sequência de entrada.

A entrada principal para a rede neural do AlphaFold2 é a MSA. AlphaFold2 utiliza MSAs para comparar e analisar sequências de proteínas semelhantes de diferentes organismos. Ele destaca semelhanças e diferenças, o que ajuda a entender as relações evolutivas entre as proteínas.

Se dois aminoácidos de uma proteína estiverem em contato próximo, mutações em um deles provavelmente serão seguidas por mutações no outro. Isso preserva a estrutura da proteína e é conhecido como coevolução ou covariação. O oposto também é verdadeiro: se duas regiões de uma proteína estão mudando e evoluindo independentemente uma da outra, é provável que elas não estejam em contato direto ([Benner & Gerloff, 1991](https://doi.org/10.1016/0065-2571(91)90012-B); [Göbel et al., 1994](https://doi.org/10.1002/prot.340180402); [Korber et al., 1993](https://doi.org/10.1073%2Fpnas.90.15.7176); [Taylor & Hatrick, 1994](https://doi.org/10.1093/protein/7.3.341)).

Um MSA de alta qualidade é essencial para que o AlphaFold2 produza uma predição precisa da estrutura da proteína. Um MSA diverso e profundo, com centenas ou milhares de sequências no alinhamento, ajudará o AlphaFold2 a identificar sinais coevolutivos e usá-los para determinar a estrutura 3D da proteína. Por outro lado, um MSA raso, com apenas dezenas de sequências e baixa variabilidade entre elas, é a razão mais comum para previsões falhadas, pouco confiantes e imprecisas do AlphaFold2.

## **O papel das representações de pares**

Quando o AlphaFold prevê a estrutura 3D de uma proteína, ele cria um conjunto de "representações de pares". Cada par de resíduos de aminoácidos na proteína, por mais distantes que sejam, é representado separadamente. Isso permite que o software codifique as relações coevolutivas entre eles com base no MSA. Essas informações podem ser interpretadas, em última análise, como as posições relativas dos resíduos de aminoácidos e as distâncias entre eles.

AlphaFold2 utiliza uma rede neural chamada Evoformer. Isso interpreta e atualiza tanto a MSA quanto às representações do par. O aspecto importante desta rede é o fluxo contínuo de informações entre o MSA e as representações de pares. Isso permite raciocinar sobre relações espaciais e evolutivas, o que refina a hipótese estrutural.

Se disponível, o AlphaFold2 pode usar estruturas proteicas fornecidas (por exemplo, estruturas derivadas de experimentos) como modelos. No entanto, o AlphaFold2 tende a ignorar esses modelos se houver informações suficientes vindas do MSA.

## **Como conseguimos uma estrutura?**

quanto a sequência original (que é a primeira linha do MSA atualizado) do Evoformer. O módulo de estrutura primeiro transforma isso em uma espinha dorsal da estrutura 3D. Em seguida, finaliza a modelagem posicionando as cadeias laterais dos aminoácidos e refinando suas posições.

O AlphaFold2 então realiza um processo iterativo chamado "reciclagem". O sistema envia o MSA, às representações de pares e a estrutura 3D de volta à rede neural, e gera uma nova estrutura 3D. Esse processo é repetido três vezes, permitindo que o AlphaFold2 melhore a precisão da estrutura final.

[](https://static-content.springer.com/esm/art%3A10.1038%2Fs41586-021-03819-2/MediaObjects/41586_2021_3819_MOESM4_ESM.mp4)


Este vídeo apresenta a trajetória estrutural intermediária do alvo CASP14 T1044, uma RNA polimerase grande (2180 resíduos) e multidomínio, prevista pelo AlphaFold2. Observe as taxas diferenciais de dobramento de domínios individuais, com alguns dobrando rapidamente e outros exigindo mais tempo. Observe o processo de predição do AlphaFold, enquanto ele recicla suas previsões para refinar a estrutura final ([Jumper et al., 2021](https://www.nature.com/articles/s41586-021-03819-2#Sec20)).

Para detalhes técnicos adicionais, consulte as Informações Suplementares no artigo original do AlphaFold2. Este contém uma descrição detalhada da arquitetura da rede neural e do conjunto de treinamento ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)).
