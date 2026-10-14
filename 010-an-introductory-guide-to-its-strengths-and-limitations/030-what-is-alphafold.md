---
layout: default
title: '¿Qué es AlphaFold?'
---

# ¿Qué es AlphaFold?

**AlphaFold es la contribución de Google DeepMind al problema de larga data de la predicción de la estructura de proteínas. Predice las estructuras 3D de proteínas con un alto grado de precisión y ahora es ampliamente utilizado por los investigadores.**

## **Qué es AlphaFold**

AlphaFold2 es un sistema de inteligencia artificial (IA) multicomponente que utiliza el aprendizaje automático para predecir la estructura 3D de una proteína basada en su secuencia primaria de aminoácidos.

El aprendizaje automático es una forma en que una IA puede aprender los patrones en un conjunto de datos enorme. Una vez que la IA ha sido entrenada con datos existentes, puede predecir las propiedades de nuevos ejemplos, utilizando los patrones que ha identificado.

AlphaFold2 es un ejemplo de una red neuronal artificial. Es una colección de nodos simulados, conectados por conexiones que pueden fortalecerse o debilitarse. Estas redes pueden ser muy hábiles en el aprendizaje automático. Como la red de AlphaFold contiene múltiples capas de nodos, se refiere a ella como un algoritmo de "aprendizaje profundo". Consulta el artículo de AlphaFold para una descripción detallada de la arquitectura de la red neuronal ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)) o incluso revisa la implementación exacta en el [código de código abierto](https://github.com/google-deepmind/alphafold).

AlphaFold **no** es una herramienta de modelado por homología: puede operar exitosamente sin usar ninguna estructura de plantilla y hasta predecir pliegues de proteínas previamente desconocidos.

## **Cómo AlphaFold2 resuelve el problema de predicción de estructuras**

Los datos de entrenamiento para AlphaFold2 provienen de la [Protein Data Bank](https://www.wwpdb.org/) (PDB): una base de datos gratuita que contiene todas las estructuras macromoleculares que han sido determinadas experimentalmente y están disponibles públicamente. Actualmente tiene [más de 215,000 entradas](https://www.ebi.ac.uk/pdbe/). ([Aprende más sobre el PDB](https://www.ebi.ac.uk/training/online/courses/pdbe-searching-pdb/what-is-pdbe/)).

Los investigadores de Google DeepMind utilizaron estructuras de proteínas del PDB, con sus secuencias correspondientes, para entrenar la red neuronal de AlphaFold2.

AlphaFold2 toma la secuencia de aminoácidos de una proteína nueva y la alinea con las secuencias de otras proteínas similares. Esto identifica secciones de la secuencia que tienden a cambiar juntas en el tiempo evolutivo y, por lo tanto, es probable que estén interactuando y, por lo tanto, físicamente cercanas en la estructura 3D de la proteína. En cuestión de minutos (o decenas de minutos para proteínas más grandes o complejos), AlphaFold2 presenta una predicción de la estructura 3D de la secuencia. AlphaFold2 puede o no usar estructura(s) de proteína(s) conocida(s) como plantillas (para detalles, consulta las secciones “[Validación e Impacto](https://www.ebi.ac.uk/training/online/courses/alphafold/validation-and-impact/)” y “[Entradas y Salidas](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)”).

Crucialmente, AlphaFold también proporciona métricas de confianza, como pLDDT, pTM y PAE. Si no está seguro sobre alguna parte de la estructura, te lo dirá en forma de una puntuación de confianza, permitiendo una interpretación crítica (consulta la [Sección 3](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/)).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/Diagram.gif)

Figura 3. De Secuencia a Estructura. AlphaFold2 toma la secuencia de la proteína y, en minutos, predice su estructura 3D.

## **Hitos de AlphaFold**

En 2020, AlphaFold2 hizo titulares cuando participó en, y ganó, la evaluación bienal de predicción de estructuras críticas ([CASP14](https://predictioncenter.org/casp14/)). Este experimento desafía a los participantes a predecir las estructuras de proteínas no triviales, que han sido resueltas experimentalmente pero aún no están disponibles públicamente. Basado en las puntuaciones excepcionalmente altas alcanzadas por AlphaFold2, los organizadores de CASP proclamaron que el problema de predicción de estructuras de proteínas "ha sido en gran medida resuelto para proteínas individuales" ([https://www.predictioncenter.org/casp14/doc/CASP14_press_release.html](https://www.predictioncenter.org/casp14/doc/CASP14_press_release.html)).

AlphaFold2 está disponible como un programa de código abierto. Se puede instalar localmente en una estación de trabajo potente o acceder a él como un servicio web a través de [Google Colab](https://colab.google/). Puedes usar los cuadernos disponibles gratuitamente [AlphaFold](https://colab.research.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb) o [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb#scrollTo=kOblAo-xetgx) (para detalles consulta la sección “[Accediendo y predicciendo estructuras de proteínas con AlphaFold](https://www.ebi.ac.uk/training/online/courses/alphafold/accessing-and-predicting-protein-structures-with-alphafold/)”). También hay una base de datos disponible gratuitamente [AlphaFold Protein Structure Database](https://alphafold.ebi.ac.uk/), una base de datos de estructuras precalculadas de los monómeros de proteínas para casi todos (~200 millones) [UniProt](https://www.uniprot.org/help/about) entradas.

Desde el lanzamiento de AlphaFold2 en 2021, ha tenido una adopción rápida y generalizada. El artículo que describe el método había recibido más de 15,000 citas para diciembre de 2023. De manera similar, para el invierno de 2023, la base de datos de estructuras de proteínas AlphaFold (AFDB) había tenido 1.65 millones de visitantes únicos de más de 180 países, y el archivo había sido descargado más de 22,000 veces.

![](https://lh7-us.googleusercontent.com/vpgdaTiu9z_0059LYPg16aBlMlLDFWuQnJ5xbLKh3VUzAuya8CxYkvY4vckxEmF0xiA6IEAD9Xmug8e1n6QdrULALU90T9HM43uJ0Ofl5QcaJgG7ghWjIvv_QNkoOsmAJC1nm7ncuQ51bPTgvtZfAyA)

Figura 4. El número de artículos científicos y preimpresiones que citan el artículo clave de AlphaFold2 ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)) cada mes desde su publicación en julio de 2021.

---

## Pone a prueba tus conocimientos

¡Es hora de flexionar tus músculos de AlphaFold!
