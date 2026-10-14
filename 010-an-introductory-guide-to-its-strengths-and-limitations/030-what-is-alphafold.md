---
layout: default
title: '¿Qué es AlphaFold?'
---

# ¿Qué es AlphaFold?

**AlphaFold es la contribución de Google DeepMind al problema de larga data de la predicción de la estructura de las proteínas. Predice las estructuras 3D de las proteínas con un alto grado de precisión y ahora es ampliamente utilizado por investigadores.**

## **Qué es AlphaFold**

AlphaFold2 es un sistema de inteligencia artificial (IA) multicomponente que utiliza el aprendizaje automático para predecir la estructura 3D de una proteína basándose en su secuencia primaria de aminoácidos.

El aprendizaje automático es una forma para que una IA aprenda los patrones en un conjunto de datos enorme. Una vez que la IA ha sido entrenada con datos existentes, puede predecir las propiedades de nuevos ejemplos, utilizando los patrones que ha identificado.

AlphaFold2 es un ejemplo de una red neuronal artificial. Es una colección de nodos simulados, conectados por conexiones que pueden fortalecerse o debilitarse. Tales redes pueden ser adeptas al aprendizaje automático. Debido a que la red de AlphaFold contiene múltiples capas de nodos, se le denomina un algoritmo de “aprendizaje profundo”. Consulta el artículo de AlphaFold para la descripción detallada de la arquitectura de la red neuronal ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)) o incluso revisa la implementación exacta en el [código de código abierto](https://github.com/google-deepmind/alphafold).

AlphaFold **no** es una herramienta de modelado por homología: puede operar con éxito sin utilizar ninguna estructura de plantilla e incluso predecir pliegues de proteínas previamente desconocidos.

## **Cómo AlphaFold2 resuelve el problema de la predicción de la estructura**

Los datos de entrenamiento para AlphaFold2 provienen del [Protein Data Bank](https://www.wwpdb.org/) (PDB): una base de datos gratuita que contiene todas las estructuras macromoleculares que han sido determinadas experimentalmente y están disponibles públicamente. Actualmente tiene [más de 215,000 entradas](https://www.ebi.ac.uk/pdbe/). ([Más información sobre el PDB](https://www.ebi.ac.uk/training/online/courses/pdbe-searching-pdb/what-is-pdbe/)).

Los investigadores de Google DeepMind utilizaron estructuras de proteínas del PDB, con sus secuencias correspondientes, para entrenar la red neuronal AlphaFold2.

AlphaFold2 toma la secuencia de aminoácidos de una proteína novedosa y la alinea a las secuencias de otras proteínas similares. Esto identifica secciones de la secuencia que tienden a cambiar juntas en el tiempo evolutivo, y por lo tanto es probable que estén interactuando y, por lo tanto, físicamente cerca en la estructura 3D de la proteína. En unos pocos minutos (o decenas de minutos para proteínas o complejos más grandes), AlphaFold2 presenta una predicción de la estructura 3D de la secuencia. AlphaFold2 puede o no utilizar estructuras de proteínas conocidas como plantillas (para más detalles, consulta las secciones “[Validación e Impacto](https://www.ebi.ac.uk/training/online/courses/alphafold/validation-and-impact/)” y “[Entradas y Salidas](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)“).

Crucialmente, AlphaFold también proporciona métricas de confianza, como pLDDT, pTM y PAE. Si no está seguro de alguna parte de la estructura, te lo indicará en forma de una puntuación de confianza, lo que permite una interpretación crítica (consulta [Sección 3](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/)).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/Diagram.gif)

Figura 3. De Secuencia a Estructura. AlphaFold2 toma la secuencia de la proteína y, en minutos, predice su estructura 3D.

## **Hitos de AlphaFold**

En 2020, AlphaFold2 saltó a los titulares cuando participó y ganó la evaluación bienal de la predicción de estructuras ([CASP14](https://predictioncenter.org/casp14/)). Este experimento desafía a los participantes a predecir las estructuras de objetivos de proteínas no triviales, que han sido resueltas experimentalmente pero aún no están disponibles públicamente. Basándose en las puntuaciones excepcionalmente altas alcanzadas por AlphaFold2, los organizadores de CASP proclamaron que el problema de la predicción de la estructura de las proteínas “[se ha resuelto en gran medida para las proteínas individuales](https://www.predictioncenter.org/casp14/doc/CASP14_press_release.html)”.

AlphaFold2 está disponible como un programa de código abierto. Puedes instalarlo localmente en una estación de trabajo potente o acceder a él como un servicio web a través de [Google Colab](https://colab.google/). Puedes usar los notebooks disponibles gratuitamente [AlphaFold](https://colab.research.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb) o [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb#scrollTo=kOblAo-xetgx) (para más detalles, consulta la sección “[Accediendo y prediciendo estructuras de proteínas con AlphaFold](https://www.ebi.ac.uk/training/online/courses/alphafold/accessing-and-predicting-protein-structures-with-alphafold/)“). También existe una [Base de datos de estructuras de proteínas AlphaFold](https://alphafold.ebi.ac.uk/) disponible gratuitamente, una base de datos de estructuras precalculadas de los monómeros de proteínas para casi todas (~200 millones) las entradas de [UniProt](https://www.uniprot.org/help/about).

Desde el lanzamiento de AlphaFold2 en 2021, ha tenido una adopción rápida y generalizada. El artículo que describe el método había recibido más de 15.000 citas a diciembre de 2023. De manera similar, a partir del invierno de 2023, la Base de datos de estructuras de proteínas AlphaFold (AFDB) había tenido 1,65 millones de visitantes únicos de más de 180 países, y el archivo se había descargado más de 22.000 veces.

![](https://lh7-us.googleusercontent.com/vpgdaTiu9z_0059LYPg16aBlMlLDFWuQnJ5xbLKh3VUzAuya8CxYkvY4vckxEmF0xiA6IEAD9Xmug8e1n6QdrULALU90T9HM43uJ0Ofl5QcaJgG7ghWjIvv_QNkoOsmAJC1nm7ncuQ51bPTgvtZfAyA)

Figura 4. El número de artículos y preimpresiones científicas que citan el artículo clave de AlphaFold2 ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)) cada mes desde su publicación en julio de 2021.

---

## Pon a prueba tus conocimientos

¡Es hora de demostrar tu fuerza con AlphaFold!
