---
layout: default
title: 'Outras formas de acessar estruturas proteicas previstas'
---

# Outras formas de acessar estruturas proteicas previstas

**Existem muitas maneiras diferentes de acessar estruturas proteicas previstas pelo AlphaFold2. A Rede 3D-Beacons (3D-Beacons Network) fornece estruturas macromoleculares padronizadas de diversos provedores, incluindo o AlphaFold2. Além disso, o AlphaFold2 e seu banco de dados foram integrados a muitos softwares usados para trabalhar com estruturas previstas.**

## **Redes 3D-Beacons**

As [redes 3D-Beacons](https://www.ebi.ac.uk/pdbe/pdbe-kb/3dbeacons/) é uma colaboração aberta entre provedores de modelos de estrutura macromolecular.

O objetivo é fornecer coordenadas padronizadas do modelo e meta-informações de todos os recursos de dados contribuintes em uma plataforma unificada. Também fornece acesso programático unificado a modelos estruturais experimentalmente determinados e previstos. A Rede 3D-Beacons reúne provedores incluindo: [PDBe](https://www.ebi.ac.uk/pdbe/), [AFDB](https://alphafold.ebi.ac.uk/), [Protein Ensemble Database](https://proteinensemble.org/), [Isoform.io](https://www.isoform.io/), [SWISS-MODEL](https://swissmodel.expasy.org/), [AlphaFill](https://alphafill.eu/), [SASBDB](https://www.sasbdb.org/) e mais.

Todos os dados da Rede 3D-Beacons estão disponíveis gratuitamente tanto para uso acadêmico quanto comercial, sob a licença Creative Commons Attribution 4.0 (CC-BY 4.0) licence.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/3D_Beacons.gif)


Figura 26. A Rede de 3D-Beacons é uma colaboração aberta de provedores de estruturas macromoleculares. Você pode comparar estruturas de macromoléculas determinadas e previstas experimentalmente de diversos provedores, incluindo o AlphaFold Database.

## **Pacotes de software que suportam acesso ao AlphaFold2**

AlphaFold2 e o Banco de Dados de Estruturas de Proteínas AlphaFold (AlphaFold Protein Structure Database - AFDB) foram integrados a softwares especializados, usados para importação, processamento e trabalho adicional com estruturas previstas.

Isso significa que, para muitas aplicações práticas, os usuários não precisam rodar previsões do AlphaFold2 manualmente. Você nem precisa baixar as estruturas do AFDB. Esses programas especializados oferecem acesso automatizado às estruturas AlphaFold2 como padrão.

Por exemplo, suponha que você seja um biólogo estrutural experimental interessado em resolver uma estrutura cristalina por meio de substituição molecular. Recomendamos o uso de softwares automatizados para cristalografia, como o [MrBUMP](https://doi.org/10.1107/S2059798318003455) da [Suite CCP4](https://www.ccp4.ac.uk/) ([Agirre et al., 2023](https://doi.org/10.1107/S2059798323003595)). Ele analisará automaticamente sua sequência proteica, buscará as estruturas previstas correspondentes do AFDB e resolverá a estrutura. Nenhuma intervenção do usuário é necessária ([Simpkin et al., 2023](https://doi.org/10.1107/S2059798323006289)).








| Software/ Ferramenta | Funções AlphaFold2 suportadas |
| --- | --- |
| [CCP4: Software for Macromolecular X-Ray Crystallography](https://www.ccp4.ac.uk/) | * Integra o AlphaFold em todos os softwares relevantes, como pipelines de substituição molecular * Importação automatizada de modelos AlphaFold * O [CCP4 Cloud](https://cloud.ccp4.ac.uk/) pode rodar modelagem AlphaFold ([Simpkin et al., 2023](https://doi.org/10.1107/S2059798323006289)). |
| [CCP-EM](https://www.ccpem.ac.uk/) | * Importação do AFDB |
| [ChimeraX](https://www.cgl.ucsf.edu/chimerax/docs/user/commands/alphafold.html) | * Modelagem via ColabFold * Recuperação do AFDB ([ver apresentação](https://www.rbvi.ucsf.edu/chimerax/data/alphafold-nov2021/af_sbgrid.html)) * Visualização interativa dos gráficos PAE |
| [COOT](https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/) | * Importação do AFDB |
| [DALI server](http://ekhidna2.biocenter.helsinki.fi/dali/) | * Busca baseada em estrutura sobre AFDB |
| [Foldseek Search Server](https://search.foldseek.com/search) | * Busca baseada em estrutura sobre AFDB |
| [Jalview](https://www.jalview.org/) | * Importação do AFDB |
| [Mol\* Viewer](https://molstar.org/viewer/) | * Importação do AFDB |
| [PHENIX](https://phenix-online.org/) | * Integra o AlphaFold em todos os softwares relevantes, como pipelines de substituição molecular ([Oeffner et al., 2022)](https://doi.org/10.1107/S2059798322010026) |
| [PyMOL](https://pymol.org/) | * Importação do AFDB, coloração pLDDT para ilustrar regiões de alta e baixa confiança |
