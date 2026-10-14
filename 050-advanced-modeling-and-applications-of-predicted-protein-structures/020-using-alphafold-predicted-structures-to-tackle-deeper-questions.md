---
layout: default
title: 'Usando estructuras predichas por AlphaFold2 para abordar preguntas más profundas'
---

# Usando estructuras predichas por AlphaFold2 para abordar preguntas más profundas

**Las estructuras predichas por AlphaFold2 tienen muchos usos, más allá de la biología estructural pura. Al predecir las estructuras de proteínas que aún no se han resuelto, AlphaFold2 permite generar hipótesis sobre las funciones e interacciones de esas proteínas. Además, la capacidad de comparar proteínas por su forma nos permite descubrir relaciones evolutivas profundas. AlphaFold2 no está destinado, validado ni aprobado para uso clínico – consulta el Aviso** [1](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/using-alphafold-predicted-structures-to-tackle-deeper-questions/#:~:text=1.%20Disclaimer%3A%20%E2%80%9CAlphaFold,a%20qualified%20professional.%E2%80%9D).

## **AlphaFold2 puede ayudar a descubrir las funciones y relaciones evolutivas de las proteínas**

La capacidad de AlphaFold2 para predecir la estructura de las proteínas puede ser invaluable para determinar la(s) función(es) que realiza una proteína. También puede ayudar a identificar las relaciones evolutivas entre proteínas, como el ancestro compartido.

El enfoque computacional convencional para determinar la función de una proteína objetivo es buscar proteínas con secuencias de aminoácidos similares. La suposición subyacente es que las proteínas con secuencias similares realizan funciones similares.

Sin embargo, la búsqueda de secuencias a veces pasa por alto buenas coincidencias. Esto se debe a que las proteínas con estructuras similares, y por lo tanto funciones, pueden tener secuencias de aminoácidos sustancialmente diferentes. En general, la estructura de la proteína se conserva más que la secuencia de aminoácidos. Dado que AlphaFold2 proporciona estructuras predichas para proteínas que aún no se han resuelto, hace posible predecir las funciones de estas proteínas desconocidas.

Además, la capacidad de comparar proteínas en función de su estructura, que es más conservada, te permite ver mucho más atrás en el tiempo evolutivo. Esto te permite identificar parientes muy lejanos que evolucionaron a partir de la misma proteína precursor ([Monzon et al., 2022](https://doi.org/10.1093/bioadv/vbac072)). En contraste, es probable que te pierdas relaciones evolutivas más profundas entre proteínas si solo te enfocas en sus secuencias de aminoácidos.

##### Figura 27. Ejemplo de posibles homólogos

La proteína humana epithelial membrane protein 3 (EMP3) (sólido, [AF-P54852-F1](https://alphafold.ebi.ac.uk/entry/P54852)) comparte sorpresivas similitudes con una proteína desconocida de C. elegans (transparente, [AF-G5EBZ7-F1](https://alphafold.ebi.ac.uk/entry/G5EBZ7)). Esta conexión inesperada, revelada por el enfoque RBSH, sugiere posibles funciones compartidas o relaciones evolutivas entre estos organismos aparentemente distantes ([Monzon et al., 2022](https://doi.org/10.1093/bioadv/vbac072)).

Los programas de búsqueda estructural como [Foldseek](https://search.foldseek.com/search) ([van Kempen et al., 2023](https://doi.org/10.1038/s41587-023-01773-0)) facilitan encontrar proteínas con formas 3D similares. Lo hacen buscando estructuras similares en varias bases de datos de estructuras proteicas, incluidas AFDB y PDB.

Foldseek se puede usar para agrupar proteínas por su estructura 3D. Estos grupos están disponibles [a través de AFDB](https://alphafold.ebi.ac.uk/entry/Q5VSL9#:~:text=Structure%20similarity%20cluster), que contiene más de 200 millones de estructuras proteicas predichas. Agrupar proteínas por su estructura es crucial para analizar grupos de proteínas distantes.

Como siempre, debes recordar evaluar críticamente todas las estructuras predichas por AlphaFold2, utilizando métricas de confianza como pLDDT y PAE (consulta la sección “[Evaluando las estructuras predichas por AlphaFold2 usando puntuaciones de confianza](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/)“).

## **Más conocimientos a partir de las estructuras predichas por AlphaFold2**

Las estructuras predichas pueden ayudar a generar y probar hipótesis sobre dónde y cómo una proteína podría interactuar con otras proteínas o moléculas.

Se pueden usar para identificar sitios de unión o sitios activos. Algunos estudios han tenido éxito al usar estructuras predichas por AlphaFold para guiar estudios de cribado virtual o acoplamiento, identificando pequeños ligantes prometedores o inhibidores ([Baselious et al., 2023](https://doi.org/10.1016/j.compbiomed.2023.107700); [Liu et al., 2022](https://doi.org/10.1093/bib/bbac365); [Ren et al., 2022](http://DOI	https://doi.org/10.1039/D2SC05709C); [Weng et al., 2022](https://doi.org/10.1155/2022/4629392); [Yang et al., 2022](https://doi.org/10.34133/2022/9781758)). El acoplamiento rígido contra estructuras de AlphaFold ha demostrado ser ineficiente ([Wong et al., 2022](https://doi.org/10.15252/msb.202211081)); sin embargo, estudios exitosos han empleado acoplamiento flexible o simulaciones de dinámica molecular ([Baselious et al., 2023](https://doi.org/10.1016/j.compbiomed.2023.107700); [Liu et al., 2022](https://doi.org/10.1093/bib/bbac365); [Weng et al., 2022](https://doi.org/10.1155/2022/4629392); [Zhang et al., 2023](https://doi.org/10.1021/acs.jcim.2c01219))

Estas estructuras predichas también son instrumentales para guiar la investigación de análisis mutacional. Por ejemplo, introducir mutaciones para alterar la estructura de un bolsillo de unión, sin conocer la estructura de la proteína, tomaría mucho ensayo y error. Las estructuras predichas por AlphaFold podrían reducir las mutaciones candidatas. De manera similar, puedes realizar análisis mutacionales de interfaces proteína-proteína una vez que estas hayan sido predichas por AlphaFold.

AlphaFold permite la visualización de mutaciones conocidas asociadas con una enfermedad en el contexto de una estructura de proteína altamente precisa para la investigación científica en etapas tempranas.

1. Aviso: “AlphaFold es una herramienta de investigación y sus salidas tienen diferentes niveles de confianza. La información proporcionada en estos módulos y por AlphaFold (incluida en la Base de Datos AlphaFold) se proporciona de forma gratuita, estrictamente tal como está y sin representación o garantía de ningún tipo. No somos responsables de la precisión, fiabilidad, disponibilidad, efectividad o uso correcto de esta información ni de ningún impacto derivado del uso continuo de dicha información. Si te basas en cualquier información de este tipo, lo haces bajo tu propio riesgo. Estos módulos, AlphaFold y sus salidas no están destinados a, no han sido validados para y no están aprobados para su uso clínico. No debes usar ninguna de esta información para fines clínicos ni basarte en ella para obtener asesoramiento médico u otro asesoramiento profesional. Cualquier contenido sobre estos temas se proporciona únicamente con fines informativos y no es un sustituto del asesoramiento de un profesional cualificado.”
