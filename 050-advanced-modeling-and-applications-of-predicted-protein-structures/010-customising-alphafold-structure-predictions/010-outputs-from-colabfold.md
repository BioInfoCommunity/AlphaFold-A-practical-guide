---
layout: default
title: 'Salidas de ColabFold'
---

# Salidas de ColabFold

ColabFold genera archivos PDB que contienen las coordenadas 3D predichas de la proteína o complejo proteico. Estos pueden ser analizados con paquetes de software estándar de visualización molecular, como [PyMOL](https://pymol.org) o [Chimera](https://www.cgl.ucsf.edu/chimera/).

Los valores pLDDT se almacenan en el campo B-factor. Esto significa que puedes usar programas de gráficos moleculares como PyMOL para codificar por colores la estructura predicha según las puntuaciones pLDDT (por ejemplo, consulta [ColabFold’s FAQ](https://github.com/sokrypton/ColabFold#faq) para las instrucciones).

Para estructuras de monómeros, las predicciones se clasifican por pLDDT, donde ‘rank\_001’ representa la estructura con mayor confianza. Para complejos proteicos, las predicciones se clasifican por pTM (consulta la sección “[Evaluating AlphaFold2’s predicted structures using confidence scores](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/)” para explicaciones de estas métricas de confianza).

ColabFold también proporciona una gráfica pLDDT (\_plddt.png). Esta muestra la puntuación pLDDT para cada posición de aminoácido. Mientras tanto, las PAEs para todos los modelos se almacenan como un archivo png (\_PAE.png).

El archivo MSA (formato a3m) contiene las secuencias utilizadas por ColabFold en la predicción. Este archivo puede ser inspeccionado usando tu visor de alineación favorito, por ejemplo, [JalView](https://www.jalview.org).

La cobertura y diversidad de la MSA pueden ser examinadas visualizando la gráfica de cobertura (\_coverage.png). Esta gráfica muestra el número de secuencias en la MSA y su identidad con posiciones específicas de aminoácidos. Esto puede proporcionar información sobre la información de secuencia utilizada para la predicción.
