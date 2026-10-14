---
layout: default
title: 'Salidas de ColabFold'
---

# Resultados de ColabFold

ColabFold genera archivos PDB que contienen las coordenadas 3D predichas de la proteína o complejo proteico. Estos se pueden analizar con paquetes de software de visualización molecular estándar, como [PyMOL](https://pymol.org) o [Chimera](https://www.cgl.ucsf.edu/chimera/).

Los valores de pLDDT se almacenan en el campo B-factor. Esto significa que puedes usar programas de gráficos moleculares como PyMOL para codificar por colores la estructura predicha según las puntuaciones de pLDDT (por ejemplo, consulta las [Preguntas frecuentes de ColabFold](https://github.com/sokrypton/ColabFold#faq) para obtener las instrucciones).

Para estructuras monoméricas, las predicciones se clasifican por pLDDT, donde ‘rank\_001’ representa la estructura con la mayor confianza. Para complejos proteicos, las predicciones se clasifican por pTM (consulta la sección “[Evaluando las estructuras predichas de AlphaFold2 utilizando puntuaciones de confianza](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/)” para obtener explicaciones de estas métricas de confianza).

ColabFold también proporciona un gráfico de pLDDT (\_plddt.png). Este muestra la puntuación de pLDDT para cada posición de aminoácido. Mientras tanto, los PAE para todos los modelos se almacenan como un único archivo png (\_PAE.png).

El archivo MSA (formato a3m) contiene las secuencias utilizadas por ColabFold en la predicción. Puedes inspeccionar este archivo utilizando tu visor de alineamientos favorito, por ejemplo, [JalView](https://www.jalview.org).

La cobertura y la diversidad del MSA se pueden examinar visualizando el gráfico de cobertura (\_coverage.png). Este gráfico muestra el número de secuencias en el MSA y su identidad con posiciones específicas de aminoácidos. Esto puede proporcionar información sobre la información de secuencia utilizada para la predicción.
