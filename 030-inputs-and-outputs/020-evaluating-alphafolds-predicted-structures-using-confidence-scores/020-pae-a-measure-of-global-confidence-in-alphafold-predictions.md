---
layout: default
title: 'PAE: Uma medida de confiança global nas previsões do AlphaFold2'
---

# PAE: Uma medida de confiança global nas previsões do AlphaFold2

O erro de alinhamento previsto (Predicted aligned error - PAE) é uma medida de quão confiante o AlphaFold2 está na posição relativa de dois resíduos dentro da estrutura prevista. O PAE corresponde ao erro posicional esperado no resíduo X, expresso em Ångströms (Å), considerando o alinhamento entre a estrutura predita e a estrutura experimental no resíduo Y

Portanto, a PAE é efetivamente uma medida de quão confiante o AlphaFold2 está de que os domínios estão bem empacotados e que a posição relativa dos domínios na estrutura prevista está correta.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/alphafold.gif)

Figura 16. Um gráfico amostral PAE (Predicted Aligned Error) mostrando regiões de alta confiança (verde escuro) e baixa confiança (verde claro) para a estrutura prevista da proteína de transporte ferroso B (AlphaFold ID: [AF-Q12XU1-F1](https://alphafold.ebi.ac.uk/entry/Q12XU1)).

Uma pontuação PAE baixa entre dois resíduos de dois domínios diferentes significa baixo erro previsto. Isso, por sua vez, significa que o AlphaFold2 está confiante na posição desses resíduos. Por outro lado, uma pontuação PAE alta significa que o AlphaFold2 não está confiante em sua posição relativa.

Ignorar a pontuação PAE pode levar a uma má interpretação da posição relativa dos domínios ([Guo et al., 2022](https://doi.org/10.1038/s41598-022-14382-9)). Um exemplo é o mediador da proteína 1 do ponto de verificação de danos ao DNA (AlphaFold ID: [AF-Q14676-F1](https://alphafold.ebi.ac.uk/entry/Q14676)). Seus dois domínios parecem estar próximos no espaço, mas a PAE indica que as posições desses domínios são essencialmente aleatórias.












![Descrição da imagem](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/Screenshot-2024-01-08-at-11.24.21.png)

##### Figura 17. Mediador do dano ao DNA proteína de checkpoint 1. 

Explore a visualização interativa PAE diretamente no Banco de Dados de Estrutura de Proteínas ([AF-Q14676-F1](https://alphafold.ebi.ac.uk/entry/Q14676))

A PAE pode ser visualizada como um gráfico PAE fácil de interpretar. Cada estrutura proteica prevista no Banco de Dados de Estruturas de Proteínas AlphaFold (AFDB) é acompanhada por um gráfico PAE. O gráfico é um gráfico 2D, com os resíduos proteicos correndo ao longo dos eixos. Em cada quadrado, o tom de verde indica o erro de distância esperado em Ångströms (Å) para um par de resíduos. Uma peça verde escura indica uma boa predição (baixo erro), enquanto uma peça verde clara indica uma predição ruim (alto erro).

O gráfico PAE sempre terá uma linha diagonal verde escura indo do canto superior esquerdo para o canto inferior direito. Isso representa resíduos sendo alinhados contra si mesmos, onde a confiança é sempre alta por definição, então não é informativo e pode ser ignorado. As informações biologicamente relevantes, em termos de orientações relativas, estão contidas nas regiões afastadas da diagonal.

Se você estiver visualizando o gráfico PAE no AFDB, pode selecionar uma região do gráfico. O AFDB destaca a região ou regiões em questão na estrutura 3D, para que você possa examinar a relação entre a sequência, o segmento correspondente do gráfico PAE e a estrutura.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/pae-plddt.gif)


---

## Teste seu conhecimento

Nesta seção, você verá uma série de estruturas para você interpretar, focando no PAE. Você pode então comparar sua interpretação do PAE com a nossa. Interprete o PAE e compare suas conclusões com as nossas. Lembre-se de que você pode usar o gráfico PAE interativo no Banco de Dados de Estrutura de Proteínas AlphaFold.












![Descrição da imagem](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/Q9NRI5.png)

##### Proteína 1 interrompida na esquizofrenia ([AF-Q9NRI5-F1](https://alphafold.ebi.ac.uk/entry/Q9NRI5))

Envolvido na regulação de múltiplos aspectos da neurogênese embrionária e adulta

![Descrição da imagem](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/P9WNQ7.png)

##### Proteína do sistema de secreção ESX-1 EccD1 ([AF-P9WNQ7-F1](https://alphafold.ebi.ac.uk/entry/P9WNQ7))

Componente do sistema de secreção ESX-1 tipo VII, que transporta ativamente vários fatores de virulência para as células hospedeiras durante o curso da infecção

![Descrição da imagem](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/O15121.png)

##### Delta(4)-desaturase de esfingolípidos DES1 ([AF-O15121-F1](https://alphafold.ebi.ac.uk/entry/O15121))

 Foi associado à leucodistrofia. No entanto, nenhuma informação estrutural ou de modelo para essa proteína está disponível.

### Verifica sua resposta

---

## Integração das pontuações pLLDT e PAE

Embora pLDDT e PAE meçam a confiança em diferentes aspectos da estrutura prevista, em alguns casos podem estar fortemente correlacionados. Por exemplo, um segmento proteico desordenado previsto com pLDDT baixo provavelmente também terá uma EAP grande. Isso ocorre porque sua posição em relação às outras partes da proteína não é bem definida. No entanto, o pLDDT não mostra se os domínios proteicos estão posicionados com confiança uns em relação aos outros, enquanto a PAE mostra exatamente isso.

As pontuações PAE devem sempre ser interpretadas em conjunto com outras pontuações de confiança, como a pLDDT.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/exportin-pae-plddt.gif)
