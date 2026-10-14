---
layout: default
title: 'Otras formas de acceder a estructuras de proteínas predichas'
---

# Otras formas de acceder a estructuras de proteínas predichas

**Existen muchas maneras diferentes de acceder a las estructuras de proteínas predichas por AlphaFold2. La Red 3D-Beacons proporciona estructuras macromoleculares estandarizadas de una gran variedad de proveedores, incluyendo AlphaFold2. Además, AlphaFold2 y su base de datos se han integrado en muchos programas utilizados para trabajar con estructuras predichas.**

## **La Red 3D-Beacons**

La [Red 3D-Beacons](https://www.ebi.ac.uk/pdbe/pdbe-kb/3dbeacons/) es una colaboración abierta de proveedores de modelos de estructuras macromoleculares.

Su objetivo es proporcionar coordenadas de modelos estandarizadas y metainformación de todos los recursos de datos contribuyentes en una plataforma unificada. También proporciona acceso programático unificado a modelos de estructuras determinados experimentalmente y predichos. La Red 3D-Beacons reúne a proveedores como: [PDBe](https://www.ebi.ac.uk/pdbe/), [AFDB](https://alphafold.ebi.ac.uk/), [Protein Ensemble Database](https://proteinensemble.org/), [Isoform.io](https://www.isoform.io/), [SWISS-MODEL](https://swissmodel.expasy.org/), [AlphaFill](https://alphafill.eu/), [SASBDB](https://www.sasbdb.org/) y más.

Todos los datos en la Red 3D-Beacons están disponibles de forma gratuita tanto para uso académico como comercial, bajo la licencia Creative Commons Attribution 4.0 (CC-BY 4.0).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/3D_Beacons.gif)

Figura 26. La Red 3D-Beacons es una colaboración abierta de proveedores de estructuras macromoleculares. Puedes comparar estructuras determinadas experimentalmente y predichas de macromoléculas de una variedad de proveedores, incluyendo la Base de Datos AlphaFold.

## **Paquetes de software que soportan el acceso a AlphaFold**2

AlphaFold2 y la Base de Datos de Estructuras de Proteínas AlphaFold (AFDB) se han integrado en programas especializados, utilizados para importar, procesar y trabajar más con estructuras predichas.

Esto significa que, para muchas aplicaciones prácticas, los usuarios no necesitan ejecutar las predicciones de AlphaFold2 manualmente. Ni siquiera necesitas descargar las estructuras de la AFDB. Estos programas especializados ofrecen acceso automatizado a las estructuras de AlphaFold2 como estándar.

Por ejemplo, supón que eres un biólogo estructural experimental interesado en resolver una estructura cristalina por reemplazo molecular. Recomendamos utilizar software automatizado para cristalografía como [MrBUMP](https://doi.org/10.1107/S2059798318003455) del [CCP4 Suite](https://www.ccp4.ac.uk/) ([Agirre et al., 2023](https://doi.org/10.1107/S2059798323003595)). Analizará automáticamente tu secuencia de proteína, obtendrá las estructuras predichas correspondientes de la AFDB y resolverá la estructura. No se requiere intervención del usuario ([Simpkin et al., 2023](https://doi.org/10.1107/S2059798323006289)).

| Software | Funciones de AlphaFold2 soportadas |
| --- | --- |
| [CCP4: Software para Cristalografía de Rayos X Macromolecular](https://www.ccp4.ac.uk/) | * Integra AlphaFold en todo el software relevante, como las canalizaciones de reemplazo molecular * Importación automatizada de modelos AlphaFold * [CCP4 Cloud](https://cloud.ccp4.ac.uk/) puede ejecutar el modelado de AlphaFold ([Simpkin et al., 2023](https://doi.org/10.1107/S2059798323006289)). |
| [CCP-EM](https://www.ccpem.ac.uk/) | * Importación desde la AFDB |
| [ChimeraX](https://www.cgl.ucsf.edu/chimerax/docs/user/commands/alphafold.html) | * Modelado a través de ColabFold * Recuperación desde la AFDB ([ver presentación](https://www.rbvi.ucsf.edu/chimerax/data/alphafold-nov2021/af_sbgrid.html)) * Visualización interactiva de los gráficos de PAE |
| [COOT](https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/) | * Importación desde la AFDB |
| [DALI server](http://ekhidna2.biocenter.helsinki.fi/dali/) | * Búsqueda basada en la estructura sobre AFDB |
| [Foldseek Search Server](https://search.foldseek.com/search) | * Búsqueda basada en la estructura sobre AFDB |
| [Jalview](https://www.jalview.org/) | * Importación desde la AFDB |
| [Mol\* Viewer](https://molstar.org/viewer/) | * Importación desde la AFDB |
| [PHENIX](https://phenix-online.org/) | * Integra AlphaFold en todo el software relevante, como las canalizaciones de reemplazo molecular ([Oeffner et al., 2022)](https://doi.org/10.1107/S2059798322010026) |
| [PyMOL](https://pymol.org/) | * Importación desde la AFDB, coloreado pLDDT para ilustrar regiones de alta y baja confianza |
