---
layout: default
title: 'Presentando AlphaFold 3'
---

# Presentando AlphaFold 3

**Aunque AlphaFold 3 se basa en los mismos principios generales que AlphaFold 2, tiene una arquitectura sustancialmente actualizada. Esto permite a AlphaFold 3 modelar complejos que contienen múltiples clases de biomoléculas. Estas incluyen ADN, ARN, pequeños ligandos de moléculas, iones, modificaciones post-traduccionales de proteínas y modificaciones químicas de ácidos nucleicos.**

## Ampliando el alcance de AlphaFold

Las macromoléculas biológicas, como las proteínas y los ácidos nucleicos, rara vez trabajan en aislamiento. En su lugar, forman grandes complejos para realizar tareas sofisticadas, como la fotosíntesis. Es crucial que estos complejos a menudo incluyen pequeñas moléculas llamadas ligandos y iones unidos. Estas moléculas mejoran la función del complejo, por ejemplo, ayudando a realizar reacciones químicas o regulando la actividad de las grandes proteínas. Además, muchas proteínas y ácidos nucleicos se modifican químicamente durante su ciclo de vida natural, por ejemplo, a través de la fosforilación o la glicosilación. Estas modificaciones a menudo regulan su función.

##### Estructura cristalina de β-D-glucosidasa de Aspergillus fumigatus (ID PDB: [5FJI](https://www.wwpdb.org/pdb?id=pdb_00005fji)) muestra una extensa N-glicosilación

##### Estructura cristalina del homodímero NF-κB p52 unido a ADN κB de P-Selectin (ID PDB: [7CLI](https://www.wwpdb.org/pdb?id=pdb_00007cli)) muestra una interacción crítica proteína-ADN

Figura 34. Diversas interacciones macromoleculares reveladas por estructuras 3D.

Para comprender completamente las funciones celulares, necesitamos estructuras precisas de complejos biológicos completos que incluyan todas estas moléculas y modificaciones.

AlphaFold 2 ha tenido éxito al predecir las estructuras de proteínas y complejos proteína-proteína. Esto sugirió que podría ser posible predecir con precisión las estructuras de complejos que contienen un rango mucho más amplio de biomoléculas, incluyendo ligandos, iones, ácidos nucleicos y residuos modificados, dentro de un solo marco de aprendizaje profundo.

Previamente, los investigadores han desarrollado predictores para tipos específicos de interacciones: por ejemplo, Metal3D predice las posiciones de los iones metálicos unidos a proteínas ([Durr et al., 2023](https://doi.org/10.1038/s41467-023-37870-6)). Un grupo también ideó un método generalista, independiente de AlphaFold, que acomoda ligandos y modificaciones de aminoácidos ([Krishna et al., 2024](https://doi.org/10.1126/science.adl2528)). Sin embargo, estos sistemas de aprendizaje profundo tienen un registro mixto en precisión y a menudo fallan al generalizar ([Buttenschoen et al., 2023](https://doi.org/10.1039/D3SC04185A); [Das et al., 2023](https://doi.org/10.1002/prot.26602)).

## AlphaFold 3

AlphaFold 3 se desarrolló como una colaboración entre [Google DeepMind](https://deepmind.google/) y [Isomorphic Labs](https://www.isomorphiclabs.com/). Puede predecir con precisión las estructuras de complejos que contienen todos los tipos de moléculas presentes en la [Protein Data Bank](https://www.ebi.ac.uk/pdbe/), excepto las moléculas de agua. AlphaFold 3 maneja complejos de proteínas con ADN, ARN, pequeños ligandos de moléculas e iones; las estructuras pueden incluir modificaciones post-traduccionales de proteínas (incluyendo glicosilación) y modificaciones químicas de ácidos nucleicos.

AlphaFold 3 también puede predecir las estructuras de moléculas individuales como monómeros de proteínas, ADN de una sola y doble cadena y cadenas simples de ARN.

AlphaFold 3 representa un avance significativo en la predicción de estructuras moleculares multimodales. En su lanzamiento, demostró un rendimiento de vanguardia en una amplia gama de tipos de moléculas, a menudo superando sustancialmente a los métodos especializados anteriores para tareas como la predicción de estructuras de proteínas, complejos proteína-proteína y, notablemente, interacciones antígeno-anticuerpo. La única excepción es el ARN: AlphaFold 3, en el momento de su lanzamiento, se notó que superaba a todos los sistemas automatizados pero no tan bueno como los sistemas que involucran intervención de expertos humanos.

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7R6R.mp4)

[7R6R](https://www.wwpdb.org/pdb?id=pdb_00007R6R) – Proteína de unión a ADN: La predicción de AlphaFold 3 para un complejo molecular que presenta una proteína (azul) unida a una doble hélice de ADN (rosa) es una coincidencia casi perfecta con la verdadera estructura molecular descubierta a través de experimentos meticulosos (gris).

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7PNM.mp4)

[7PNM](https://www.wwpdb.org/pdb?id=pdb_00007PNM) – Proteína de pico de un resfriado común (Coronavirus OC43): La predicción estructural de AlphaFold 3 para una proteína de pico (azul) de un virus del resfriado común mientras interactúa con anticuerpos (turquesa) y azúcares simples (amarillo), coincide con la verdadera estructura (gris). La animación muestra la proteína interactuando con un anticuerpo y luego con un azúcar. Avanzar en el conocimiento de tales procesos del sistema inmunológico ayuda a entender mejor los coronavirus, incluidos los COVID-19, abriendo posibilidades para tratamientos mejorados.

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7BBV.mp4)

[7BBV](https://www.wwpdb.org/pdb?id=pdb_00007bbv) – Enzima: La predicción de AlphaFold 3 para un complejo molecular que presenta una proteína enzimática (azul), un ion (esfera amarilla) y azúcares simples (amarillo), junto con la verdadera estructura (gris). Esta enzima se encuentra en un hongo del suelo (Verticillium dahliae) que daña una amplia gama de plantas. Las ideas sobre cómo esta enzima interactúa con las células vegetales podrían ayudar a los investigadores a desarrollar cultivos más saludables y resistentes.

## Descripción general de las entradas de AlphaFold 3

AlphaFold 3 puede aceptar múltiples secuencias para proteínas, ADN y ARN. Los ligandos de pequeñas moléculas pueden especificarse utilizando los códigos del [Diccionario de Componentes Químicos (CCD)](https://www.wwpdb.org/data/ccd). De manera similar, los iones, glicanos y aminoácidos y nucleótidos modificados químicamente también se especifican utilizando los códigos del CCD. Sin embargo, AlphaFold Server ofrece una selección limitada de estos ligandos, iones y modificaciones postraduccionales (PTMs) en comparación con las capacidades completas del modelo subyacente de AlphaFold 3.

Al igual que AlphaFold 2, AlphaFold 3 utiliza MSA en segundo plano como entrada, pero también para cadenas de ARN además de proteínas. Además, puede o no utilizar estructuras de plantillas de proteínas (consulta la sección sobre [AlphaFold 2](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)). Ajustar estas entradas puede cambiar las predicciones de salida, por ejemplo, produciendo otro estado estructural.

AlphaFold 3 utiliza semillas aleatorias (consulta la sección sobre [AlphaFold 2](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)) para inicializar las ejecuciones de predicción de estructuras. Estas pueden ser generadas automáticamente o especificadas explícitamente.

## Cómo acceder a AlphaFold 3

El código fuente de inferencia de AlphaFold 3 está disponible en [GitHub](https://github.com/google-deepmind/alphafold3) y puede instalarse localmente, en una máquina virtual o en el servidor, sujeto a los [términos de uso](https://github.com/google-deepmind/alphafold3/blob/main/WEIGHTS_TERMS_OF_USE.md). Consulta la sección “[Usar el código fuente de AlphaFold 3](https://www.ebi.ac.uk/training/online/courses/alphafold/using-the-alphafold-3-source-code/)” para los requisitos de hardware. Solo los investigadores afiliados a una organización sin fines de lucro pueden solicitar acceso a los parámetros del modelo AlphaFold 3.

AlphaFold 3 también está disponible a través del AlphaFold Server para predecir estructuras y interacciones biomoleculares. El servidor proporciona toda la funcionalidad de AlphaFold 3 para proteínas y ácidos nucleicos, pero tiene ciertas limitaciones: por ejemplo, los ligandos, iones y modificaciones químicas deben seleccionarse de la lista de ligandos y modificaciones disponibles (consulta la subsección “[AlphaFold Server: Tu puerta de entrada a AlphaFold 3](https://www.ebi.ac.uk/training/online/courses/alphafold/alphafold-server-your-gateway-to-alphafold-3/)”).
