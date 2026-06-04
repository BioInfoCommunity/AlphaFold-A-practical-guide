---
layout: default
title: 'Introdução ao AlphaFold 3'
---

# Introdução ao AlphaFold 3

**Embora o AlphaFold 3 seja baseado nos mesmos princípios gerais do AlphaFold 2, ele possui uma arquitetura substancialmente atualizada. Isso permite que o AlphaFold 3 modele complexos que contêm múltiplas classes de biomoléculas. Esses incluem DNA, RNA, ligantes de pequenas moléculas, íons, modificações pós-traducionais de proteínas e modificações químicas de ácidos nucleicos.**

## Ampliando o escopo do AlphaFold

Macromoléculas biológicas, como proteínas e ácidos nucleicos, raramente atuam isoladamente. Em vez disso, formam grandes complexos para realizar tarefas sofisticadas, como a fotossíntese. Crucialmente, esses complexos frequentemente incluem pequenas moléculas chamadas ligantes e íons ligados. Essas moléculas aprimoram a função do complexo, por exemplo, ajudando a realizar reações químicas ou regulando a atividade das grandes proteínas. Além disso, muitas proteínas e ácidos nucleicos são quimicamente modificados durante seu ciclo natural de vida, por exemplo, por fosforilação ou glicosilação. Tais modificações frequentemente regulam sua função.












##### A estrutura cristalina da β-D-glucosidase de Aspergillus fumigatu (PDB ID: [5FJI](https://www.wwpdb.org/pdb?id=pdb_00005fji)) apresenta extensa N-glicosilação

##### A estrutura cristalina do homodímero NF-κB p52 ligado ao DNA κB P-SELECTIN (PDB ID: [7CLI](https://www.wwpdb.org/pdb?id=pdb_00007cli)) apresenta uma interação crítica entre proteína e DNA

Figura 34. Interações macromoleculares diversas reveladas por estruturas 3D.

Para compreender plenamente as funções celulares, precisamos de estruturas precisas de complexos biológicos completos que incluam todas essas moléculas e modificações.

O AlphaFold 2 tem sido bem-sucedido na predição das estruturas de proteínas e complexos proteína-proteína. Isso sugeriu que seria possível prever com precisão as estruturas de complexos contendo uma gama muito mais ampla de biomoléculas, incluindo ligandos, íons, ácidos nucleicos e resíduos modificados, dentro de um único arcabouço de aprendizado profundo.

Anteriormente, pesquisadores desenvolveram preditores para tipos específicos de interação: por exemplo, o Metal3D prevê as posições de íons metálicos ligados a proteínas ([Durr et al., 2023](https://doi.org/10.1038/s41467-023-37870-6)). Um grupo também desenvolveu um método generalista, independente do AlphaFold, que acomoda ligantes e modificações de aminoácidos ([Krishna et al., 2024](https://doi.org/10.1126/science.adl2528)). No entanto, esses sistemas de aprendizado profundo têm um histórico misto em precisão e frequentemente não se generalizam ([Buttenschoen et al., 2023](https://doi.org/10.1039/D3SC04185A); [Das et al., 2023](https://doi.org/10.1002/prot.26602)).

## AlphaFold 3

AlphaFold 3 foi desenvolvido como uma colaboração entre o [Google DeepMind](https://deepmind.google/) e [Isomorphic Labs](https://www.isomorphiclabs.com/). Ele pode prever com precisão as estruturas de complexos que contêm todos os tipos moleculares presentes no [Protein Data Bank](https://www.ebi.ac.uk/pdbe/), exceto as moléculas de água. AlphaFold 3 trata de complexos de proteínas com DNA, RNA, ligantes de pequenas moléculas e íons; As estruturas podem incluir modificações pós-traducionais de proteínas (incluindo glicosilação) e modificações químicas de ácidos nucleicos.

O AlphaFold 3 também pode prever as estruturas de moléculas individuais, como monômeros proteicos, DNA de fita simples e dupla e cadeias simples de RNA.

AlphaFold 3 representa um avanço significativo na predição da estrutura molecular multimodal. No momento do lançamento, demonstrou desempenho de ponta em uma ampla gama de tipos moleculares, frequentemente superando substancialmente métodos especializados anteriores para tarefas como predição da estrutura proteica, complexos proteína-proteína e, notadamente, interações antígeno-anticorpo. A única exceção é o RNA: o AlphaFold 3, na época de seu lançamento, foi notado por superar todos os sistemas automatizados, mas não tão bom quanto sistemas que envolvem intervenção de especialistas humanos.

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7R6R.mp4)

[7R6R](https://www.wwpdb.org/pdb?id=pdb_00007R6R) – Proteína de ligação ao DNA: A predição do AlphaFold 3 para um complexo molecular apresentando uma proteína (azul) ligada a uma dupla hélice de DNA (rosa) é uma correspondência quase perfeita com a verdadeira estrutura molecular descoberta por meio de experimentos minuciosos (cinza).

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7PNM.mp4)

[7PNM](https://www.wwpdb.org/pdb?id=pdb_00007PNM) – Proteína spike de um vírus do resfriado comum (Coronavírus OC43): A predição estrutural do AlphaFold 3 para uma proteína spike (azul) de um vírus do resfriado ao interagir com anticorpos (turquesa) e açúcares simples (amarelo) corresponde com precisão à estrutura real (cinza). A animação mostra a proteína interagindo com um anticorpo, depois com um açúcar. Avançar nosso conhecimento sobre esses processos do sistema imunológico ajuda a compreender melhor os coronavírus, incluindo a COVID-19, aumentando possibilidades para tratamentos aprimorados.

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7BBV.mp4)

[7BBV](https://www.wwpdb.org/pdb?id=pdb_00007bbv) – Enzima: predição do AlphaFold 3 para um complexo molecular que apresenta uma proteína enzimática (azul), um íon (esfera amarela) e açúcares simples (amarelo), junto com a estrutura verdadeira (cinza). Essa enzima é encontrada em um fungo transmitido pelo solo (Verticillium dahliae) que danifica uma ampla variedade de plantas. Insights sobre como essa enzima interage com as células vegetais podem ajudar os pesquisadores a desenvolver culturas mais saudáveis e resilientes.

## Visão geral dos arquivos de entrada do AlphaFold 3

AlphaFold 3 pode aceitar múltiplas sequências para proteínas, DNA e RNA. Ligantes de moléculas pequenas podem ser especificados usando os códigos do [Chemical Component Dictionary (CCD)](https://www.wwpdb.org/data/ccd). De forma semelhante, íons, glicanos e aminoácidos e nucleotídeos quimicamente modificados também são especificados usando os códigos CCD. No entanto, o AlphaFold Server oferece uma seleção limitada desses ligandos, íons e modificações pós-traducionais (post-translational modifications - PTMs) em comparação com as capacidades completas do modelo subjacente AlphaFold 3.

Assim como o AlphaFold 2, o AlphaFold 3 usa MSA nos bastidores como entrada, mas para cadeias de RNA e proteínas. Além disso, pode ou não utilizar estruturas de moldes proteicos (veja a seção sobre [AlphaFold 2](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)). justar essas entradas pode alterar as previsões de saída, por exemplo, produzindo outro estado estrutural.

O AlphaFold 3 utiliza sementes aleatórias (veja a seção sobre o [AlphaFold 2](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)) para inicializar execuções de predição estrutural. Esses podem ser gerados automaticamente ou explicitamente especificados.

## Como acessar o AlphaFold 3

O código-fonte de inferência do AlphaFold 3 está disponível no [GitHub](https://github.com/google-deepmind/alphafold3) e pode ser instalado localmente, em uma máquina virtual ou no servidor, sujeito aos [termos de uso](https://github.com/google-deepmind/alphafold3/blob/main/WEIGHTS_TERMS_OF_USE.md). Por favor, verifique a seção “[Usando o código-fonte do AlphaFold 3](https://www.ebi.ac.uk/training/online/courses/alphafold/using-the-alphafold-3-source-code/)” ara os requisitos de hardware. Somente pesquisadores afiliados a uma organização não comercial podem solicitar acesso aos parâmetros do modelo AlphaFold3.

O AlphaFold 3 também está disponível através do AlphaFold Server para prever estruturas e interações biomoleculares. O servidor oferece funcionalidade completa do AlphaFold 3 para proteínas e ácidos nucleicos, mas possui certas limitações: por exemplo, ligandos, íons e modificações químicas devem ser selecionados da lista de ligantes e modificações disponíveis (veja a subseção “[AlphaFold Server: Seu portal para o AlphaFold 3](https://www.ebi.ac.uk/training/online/courses/alphafold/alphafold-server-your-gateway-to-alphafold-3/)“).
