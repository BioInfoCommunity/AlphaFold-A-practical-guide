# ¿Qué es AlphaFold?

<b>AlphaFold es la contribución de Google DeepMind al problema de la predicción de la estructura de las proteínas. Predice la estructura 3D de proteínas con un alto grado de precisión y es ampliamente usado por los investigadores en la actualidad.</b>

AlphaFold2 es un sistema de inteligencia artificial (IA) de múltiples componentes que usa el aprendizaje automático para predecir la estructura 3D de una proteína basándose en su secuencia de aminoácidos.
El aprendizaje automático es una forma en que una IA puede aprender patrones en un conjunto de datos de gran magnitud. Una vez que la IA ha sido entrenada a partir de datos existentes, puede predecir las propiedades de nuevos ejemplos, usando los patrones que ha identificado.
AlphaFold2 es un ejemplo de una red neuronal artificial. Es una colección de nodos simulados, unidos por conexiones que pueden ser fortalecidas o debilitadas. Estas redes pueden ser expertas en el aprendizaje automático. Como la red de AlphaFold contiene muchas capas de nodos, se la conoce como un algoritmo de aprendizaje profundo. Consulta el artículo sobre AlphaFold para obtener una descripción detallada de la arquitectura de la red neuronal [(Jumper et al., 2021)](https://doi.org/10.1038/s41586-021-03819-2) o incluso comprueba la implementación exacta en el [código fuente abierto](https://github.com/google-deepmind/alphafold).

AlphaFold <b>no</b> es una herramienta de modelado por homología: puede operar de manera exitosa sin necesidad de estructuras modelo y es capaz de predecir pliegues de proteínas nunca antes observados.

## Cómo hace AlphaFold para resolver el problema de la predicción de la estructura

Los datos para entrenar AlphaFold2 provienen del Banco de Datos de Proteínas (PDB por sus siglas en inglés): una base de datos gratuita que contiene todas las estructuras macromoleculares que han sido determinadas experimentalmente y son de dominio público. Actualmente, tiene más de [215,000 entradas](https://www.ebi.ac.uk/pdbe/). [Aprende más sobre PDB](https://www.ebi.ac.uk/training/online/courses/pdbe-searching-pdb/what-is-pdbe/).

Los investigadores de Google DeepMind usaron las estructuras proteicas de PDB, con sus secuencias correspondientes, para entrenar la red neuronal de AlphaFold2.

AlphaFold2 toma la secuencia de aminoácidos de una proteína nueva y la alinea a las secuencias de otras proteínas similares. Esto permite identificar regiones de la secuencia que tienden a variar de manera conjunta a lo largo de la evolución y que, por lo tanto, probablemente interactúan entre sí y se encuentran físicamente próximas en la estructura 3D de la proteína. En pocos minutos (o decenas de minutos en el caso de proteínas o complejos de mayor tamaño), AlphaFold2 presenta una predicción de la estructura 3D de la secuencia. AlphaFold2 puede o no usar estructuras de proteínas conocidas como modelo (para más detalles, ve a las secciones “Validación e Impacto” y “Entradas y salidas”).

Fundamentalmente, AlphaFold también proporciona métricas de confianza, como pLDDT, pTM y PAE. Si no tiene certezas de alguna parte de la estructura, te lo indicará a través de la puntuación de confianza, lo que permite una interpretación crítica (revisa la sección 3).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/Diagram.gif)
**Figura 3.** De la secuencia a la estructura. AlphaFold2 toma la secuencia de la proteína y, en cuestión de minutos, predice su estructura 3D


## Los logros de AlphaFold

En el año 2020, AlphaFold2 apareció en las noticias cuando participó y ganó la CASP14 (Evaluación Crítica de la Predicción de Estructuras), de carácter bienal. Este experimento desafía a los participantes a predecir las estructuras de proteínas no triviales, que hayan sido resueltas experimentalmente, pero no estén disponibles al público todavía. Basándose en los puntajes excepcionalmente altos alcanzados por AlphaFold2, los organizadores proclamaron que el problema de la predicción de las estructuras de proteínas “había sido en gran medida resuelto para proteínas individuales”.

AlphaFold está disponible como un programa de código abierto. Puede ser instalado localmente en una estación de trabajo potente, o puedes acceder a él como un servicio web a través de [Google Colab](https://colab.google/). Puedes usar los cuadernos interactivos (notebooks) AlphaFold o [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb), disponibles de forma gratuita (para más detalles visita la sección “Acceso y predicción de estructuras proteicas con AlphaFold 2”. También hay una base de datos de acceso gratuito, llamada AlphaFold Protein Structure Database (AFDB), con estructuras pre-calculadas para los monómeros de casi todas (~200 millones) las proteínas con entradas en UniProt.

Desde el lanzamiento de AlphaFold2 en 2021, se ha visto una adopción rápida y extendida. El artículo que describe el método ha recibido más de 15.000 citas a diciembre de 2023. De la misma manera, AFDB ha recibido 1.65 millones de visitantes únicos de más de 180 países, y el archivo ha sido descargado más de 22.000 veces.

![](https://lh7-us.googleusercontent.com/vpgdaTiu9z_0059LYPg16aBlMlLDFWuQnJ5xbLKh3VUzAuya8CxYkvY4vckxEmF0xiA6IEAD9Xmug8e1n6QdrULALU90T9HM43uJ0Ofl5QcaJgG7ghWjIvv_QNkoOsmAJC1nm7ncuQ51bPTgvtZfAyA)
**Figura 4.** Cantidad de artículos científicos y preprints que citan el artículo clave sobre AlphaFold2 (Jumper et al., 2021) por mes desde su publicación en julio de 2021.
