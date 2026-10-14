---
layout: default
title: 'Presentamos AlphaFold 3'
---

# Presentando AlphaFold 3

**Aunque AlphaFold 3 se basa en los mismos principios generales que AlphaFold 2, tiene una arquitectura sustancialmente actualizada. Esto permite a AlphaFold 3 modelar complejos que contienen múltiples clases de biomoléculas. Estas incluyen ADN, ARN, ligandos de moléculas pequeñas, iones, modificaciones postraduccionales de proteínas y modificaciones químicas de ácidos nucleicos.**

## Ampliando el alcance de AlphaFold

Las macromoléculas biológicas, como las proteínas y los ácidos nucleicos, rara vez funcionan de forma aislada. En cambio, forman complejos grandes para realizar tareas sofisticadas, como la fotosíntesis. Crucialmente, estos complejos a menudo incluyen moléculas pequeñas llamadas ligandos e iones unidos. Estas moléculas mejoran la función del complejo, por ejemplo, ayudando a realizar reacciones químicas o regulando la actividad de las proteínas grandes. Además, muchas proteínas y ácidos nucleicos se modifican químicamente durante su ciclo de vida natural, por ejemplo, mediante la fosforilación o la glicosilación. Estas modificaciones a menudo regulan su función.

##### Estructura cristalina de β-D-glucosidasa de *Aspergillus fumigatus* (ID PDB: [5FJI](https://www.wwpdb.org/pdb?id=pdb_00005fji)) muestra una extensa N-glicosilación

##### Estructura cristalina del homodímero NF-κB p52 unido al ADN P-Selectin κB (ID PDB: [7CLI](https://www.wwpdb.org/pdb?id=pdb_00007cli)) muestra una interacción crítica proteína-ADN

Figura 34. Diversas interacciones macromoleculares reveladas por estructuras 3D.

Para comprender completamente las funciones celulares, necesitamos estructuras precisas de complejos biológicos completos que incluyan todas estas moléculas y modificaciones.

AlphaFold 2 ha tenido éxito en la predicción de las estructuras de proteínas y complejos proteína-proteína. Esto sugirió que podría ser posible predecir con precisión las estructuras de complejos que contienen una gama mucho más amplia de biomoléculas, incluidos ligandos, iones, ácidos nucleicos y residuos modificados, dentro de un único marco de aprendizaje profundo.

Anteriormente, los investigadores han desarrollado predictores para tipos de interacción específicos: por ejemplo, Metal3D predice las posiciones de los iones metálicos unidos a las proteínas ([Durr et al., 2023](https://doi.org/10.1038/s41467-023-37870-6)). Un grupo también ideó un método generalista, independiente de AlphaFold, que acomoda ligandos y modificaciones de aminoácidos ([Krishna et al., 2024](https://doi.org/10.1126/science.adl2528)). Sin embargo, estos sistemas de aprendizaje profundo tienen un historial mixto en cuanto a precisión y, a menudo, no logran generalizar ([Buttenschoen et al., 2023](https://doi.org/10.1039/D3SC04185A); [Das et al., 2023](https://doi.org/10.1002/prot.26602)).

## AlphaFold 3

AlphaFold 3 se desarrolló como una colaboración entre [Google DeepMind](https://deepmind.google/) y [Isomorphic Labs](https://www.isomorphiclabs.com/). Puede predecir con precisión las estructuras de complejos que contienen todos los tipos de moléculas presentes en el [Protein Data Bank](https://www.ebi.ac.uk/pdbe/), excepto las moléculas de agua. AlphaFold 3 maneja complejos de proteína con ADN, ARN, ligandos de moléculas pequeñas e iones; las estructuras pueden incluir modificaciones postraduccionales de proteínas (incluida la glicosilación) y modificaciones químicas de ácidos nucleicos.

AlphaFold 3 también puede predecir las estructuras de moléculas individuales, como monómeros de proteínas, ADN de cadena simple y doble, y cadenas simples de ARN.

AlphaFold 3 representa un avance significativo en la predicción de estructuras moleculares multimodales. En su lanzamiento, demostró un rendimiento de última generación en una amplia gama de tipos de moléculas, a menudo superando sustancialmente a los métodos especializados anteriores para tareas como la predicción de la estructura de proteínas, los complejos proteína-proteína y, notablemente, las interacciones antígeno-anticuerpo. La única excepción es el ARN: AlphaFold 3, en el momento de su lanzamiento, se señaló que superaba a todos los sistemas automatizados, pero no era tan bueno como los sistemas que involucran la intervención de expertos humanos.

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7R6R.mp4)

[7R6R](https://www.wwpdb.org/pdb?id=pdb_00007R6R) – Proteína de unión al ADN: la predicción de AlphaFold 3 para un complejo molecular que presenta una proteína (azul) unida a una doble hélice de ADN (rosa) coincide casi a la perfección con la verdadera estructura molecular descubierta mediante experimentos minuciosos (gris).

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7PNM.mp4)

[7PNM](https://www.wwpdb.org/pdb?id=pdb_00007PNM) – Proteína Spike de un coronavirus común (Coronavirus OC43): la predicción estructural de AlphaFold 3 para una proteína spike (azul) de un virus del resfriado al interactuar con anticuerpos (turquesa) y azúcares simples (amarillo), coincide con precisión con la verdadera estructura (gris). La animación muestra la proteína interactuando con un anticuerpo y luego con un azúcar. Avanzar en nuestro conocimiento de estos procesos del sistema inmunitario ayuda a comprender mejor los coronavirus, incluido el COVID-19, y abre posibilidades para mejorar los tratamientos.

[
](https://storage.googleapis.com/gweb-uniblog-publish-prod/original_videos/AFS-anim-7BBV.mp4)

[7BBV](https://www.wwpdb.org/pdb?id=pdb_00007bbv) – Enzima: la predicción de AlphaFold 3 para un complejo molecular que presenta una proteína enzimática (azul), un ion (esfera amarilla) y azúcares simples (amarillo), junto con la verdadera estructura (gris). Esta enzima se encuentra en un hongo del suelo (Verticillium dahliae) que daña una amplia gama de plantas. Obtener información sobre cómo esta enzima interactúa con las células vegetales podría ayudar a los investigadores a desarrollar cultivos más saludables y resistentes.

## Descripción general de las entradas de AlphaFold 3

AlphaFold 3 puede aceptar múltiples secuencias para proteínas, ADN y ARN. Los ligandos de moléculas pequeñas se pueden especificar utilizando los códigos del [Diccionario de Componentes Químicos (CCD)](https://www.wwpdb.org/data/ccd). De manera similar, los iones, los glicanos y los aminoácidos y nucleótidos modificados químicamente también se especifican utilizando los códigos del CCD. Sin embargo, AlphaFold Server ofrece una selección limitada de estos ligandos, iones y modificaciones postraduccionales (PTMs) en comparación con las capacidades completas del modelo AlphaFold 3 subyacente.

Al igual que con AlphaFold 2, AlphaFold 3 utiliza MSA en segundo plano como entrada, pero para cadenas de ARN así como para proteínas. Además, puede o no utilizar estructuras de plantilla de proteínas (consulta la sección sobre [AlphaFold 2](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)). Ajustar estas entradas puede cambiar las predicciones de salida, por ejemplo, produciendo otro estado estructural.

AlphaFold 3 utiliza semillas aleatorias (consulta la sección sobre [AlphaFold 2](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)) para inicializar las ejecuciones de predicción de la estructura. Estas pueden generarse automáticamente o especificarse explícitamente.

## Cómo acceder a AlphaFold 3

El código fuente de inferencia de AlphaFold 3 está disponible en [GitHub](https://github.com/google-deepmind/alphafold3) y se puede instalar localmente, en una máquina virtual o en el servidor, sujeto a los [términos de uso](https://github.com/google-deepmind/alphafold3/blob/main/WEIGHTS_TERMS_OF_USE.md). Consulta la sección “[Uso del código fuente de AlphaFold 3](https://www.ebi.ac.uk/training/online/courses/alphafold/using-the-alphafold-3-source-code/)” para conocer los requisitos de hardware. Solo los investigadores afiliados a una organización no comercial pueden solicitar acceso a los parámetros del modelo AlphaFold3.

AlphaFold 3 también está disponible a través de AlphaFold Server para predecir estructuras y interacciones biomoleculares. El Servidor proporciona la funcionalidad completa de AlphaFold 3 para proteínas y ácidos nucleicos, pero tiene ciertas limitaciones: por ejemplo, los ligandos, los iones y las modificaciones químicas deben seleccionarse de la lista de ligandos y modificaciones disponibles (consulta la subsección “[AlphaFold Server: tu puerta de entrada a AlphaFold 3](https://www.ebi.ac.uk/training/online/courses/alphafold/alphafold-server-your-gateway-to-alphafold-3/)“).
