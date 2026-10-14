---
layout: default
title: 'Otras formas de acceder a las estructuras de proteínas predichas'
---

# Otras formas de acceder a las estructuras de proteínas predichas

**Existen muchas maneras diferentes de acceder a las estructuras de proteínas predichas por AlphaFold2. La red 3D-Beacons proporciona estructuras macromoleculares estandarizadas de una variedad de proveedores, incluidos AlphaFold2. Además, AlphaFold2 y su base de datos han sido integrados en muchos programas utilizados para trabajar con estructuras predichas.**

## **La red 3D-Beacons**

La [red 3D-Beacons](https://www.ebi.ac.uk/pdbe/pdbe-kb/3dbeacons/) es una colaboración abierta de proveedores de modelos de estructuras macromoleculares.

Su objetivo es proporcionar coordenadas de modelos estandarizadas y metainformación de todos los recursos de datos contribuyentes en una plataforma unificada. También proporciona acceso programático unificado a modelos de estructuras determinados experimentalmente y predichos. La red 3D-Beacons reúne a proveedores como: [PDBe](https://www.ebi.ac.uk/pdbe/), [AFDB](https://alphafold.ebi.ac.uk/), [Protein Ensemble Database](https://proteinensemble.org/), [Isoform.io](https://www.isoform.io/), [SWISS-MODEL](https://swissmodel.expasy.org/), [AlphaFill](https://alphafill.eu/), [SASBDB](https://www.sasbdb.org/) y más.

Todos los datos de la red 3D-Beacons están disponibles gratuitamente tanto para uso académico como comercial, bajo la licencia Creative Commons Attribution 4.0 (CC-BY 4.0).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/3D_Beacons.gif)

Figura 26. La red 3D-Beacons es una colaboración abierta de proveedores de estructuras macromoleculares. Puedes comparar estructuras determinadas experimentalmente y predichas de macromoléculas de una variedad de proveedores, incluidos la Base de Datos de Proteínas AlphaFold.

## **Paquetes de software que soportan el acceso a AlphaFold2**

AlphaFold2 y la Base de Datos de Estructuras de Proteínas AlphaFold (AFDB) han sido integrados en programas especializados utilizados para importar, procesar y trabajar más con estructuras predichas.

Esto significa que, para muchas aplicaciones prácticas, los usuarios no necesitan ejecutar predicciones de AlphaFold2 manualmente. Ni siquiera necesitas descargar las estructuras de la AFDB. Estos programas especializados ofrecen acceso automatizado a las estructuras de AlphaFold2 como estándar.

Por ejemplo, supongamos que eres un biólogo estructural experimental interesado en resolver una estructura cristalina por reemplazo molecular. Te recomendamos usar software automatizado para cristalografía como [MrBUMP](https://doi.org/10.1107/S2059798318003455) del [CCP4 Suite](https://www.ccp4.ac.uk/) ([Agirre et al., 2023](https://doi.org/10.1107/S2059798323003595)). Analizará automáticamente tu secuencia de proteínas, obtendrá las estructuras predichas correspondientes de la AFDB y resolverá la estructura. No se requiere intervención del usuario ([Simpkin et al., 2023](https://doi.org/10.1107/S2059798323006289)).

| Software | Funciones de AlphaFold2 soportadas |
| --- | --- |
| [CCP4: Software para Cristalografía de Rayos X Macromolecular](https://www.ccp4.ac.uk/) | * Integra AlphaFold en todo el software relevante, como tuberías de reemplazo molecular * Importación automatizada de modelos AlphaFold * [CCP4 Cloud](https://cloud.ccp4.ac.uk/) puede ejecutar modelado AlphaFold ([Simpkin et al., 2023](https://doi.org/10.1107/S2059798323006289)). |
| [CCP-EM](https://www.ccpem.ac.uk/) | * Importar de la AFDB |
| [ChimeraX](https://www.cgl.ucsf.edu/chimerax/docs/user/commands/alphafold.html) | * Modelado a través de ColabFold * Recuperación de la AFDB ([ver presentación](https://www.rbvi.ucsf.edu/chimerax/data/alphafold-nov2021/af_sbgrid.html)) * Visualización interactiva de gráficos PAE |
| [COOT](https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/) | * Importar de la AFDB |
| [Servidor DALI](http://ekhidna2.biocenter.helsinki.fi/dali/) | * Búsqueda basada en estructura sobre AFDB |
| [Servidor de búsqueda Foldseek](https://search.foldseek.com/search) | * Búsqueda basada en estructura sobre AFDB |
| [Jalview](https://www.jalview.org/) | * Importar de la AFDB |
| [Mol\* Viewer](https://molstar.org/viewer/) | * Importar de la AFDB |
| [PHENIX](https://phenix-online.org/) | * Integra AlphaFold en todo el software relevante, como tuberías de reemplazo molecular ([Oeffner et al., 2022)](https://doi.org/10.1107/S2059798322010026) |
| [PyMOL](https://pymol.org/) | * Importar de la AFDB, coloración pLDDT para ilustrar regiones de alta y baja confianza |
