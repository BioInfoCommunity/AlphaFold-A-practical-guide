---
layout: default
title: '¿Cómo usan los científicos AlphaFold 2?'
---

# ¿Cómo utilizan los científicos AlphaFold 2?

**AlphaFold2 se ha utilizado en una amplia gama de aplicaciones de investigación, con resultados impresionantes. AlphaFold2 no está pensado como un rival de los métodos experimentales. En cambio, el punto de partida proporcionado por AlphaFold2 está facilitando la determinación experimental de la estructura, ayudando con la interpretación de datos estructurales de baja resolución y acelerando los estudios estructurales. Además, AlphaFold2 puede proporcionar hipótesis comprobables que guíen los experimentos de bioquímica y biología celular.**

## **Biología estructural**

La biología estructural ha sido el campo de investigación más impactado por AlphaFold2. Las estructuras de proteínas predichas se han utilizado para mejorar o completar estructuras experimentales obtenidas mediante técnicas como la cristalografía de rayos X, la criomicroscopía electrónica y la espectroscopía de RMN. Las estructuras de AlphaFold2 han sido fundamentales para los estudios de cristalografía de rayos X, sirviendo como un valioso punto de partida en el proceso (ayudando a resolver el [problema de fase](https://en.wikipedia.org/wiki/Phase_problem) a través del [reemplazo molecular](https://en.wikipedia.org/wiki/Molecular_replacement)).

AlphaFold2 ha permitido a los investigadores describir las estructuras de complejos proteicos muy grandes. Un ejemplo es el complejo del poro nuclear, que recubre el núcleo de las células eucariotas y contiene alrededor de 1000 nucleoporinas de unos 30 tipos. Los análisis que incorporan AlphaFold han resuelto ahora aproximadamente el 90% del complejo del poro nuclear humano ([Mosalaganti et al., 2022](https://doi.org/10.1126/science.abm9506)). De manera similar, AlphaFold2 fue fundamental para resolver la estructura de Mce1, una proteína utilizada por la bacteria de la tuberculosis para obtener nutrientes de las células huésped ([Chen et al., 2023](https://doi.org/10.1038/s41586-023-06366-0)).

##### Figura 12. Complejo del poro nuclear humano (dilatado) (ID PDB: [7R5J](https://www.wwpdb.org/pdb?id=pdb_00007r5j))

Se usó AlphaFold2 para resolver estructuras de proteínas nucleoporinas individuales [(Mosalaganti et al., 2022)](https://doi.org/10.1126/science.abm9506).

Las predicciones de AlphaFold2 han demostrado una gran sinergia con la espectrometría de masas de reticulación (XL-MS). Las estructuras predichas han ayudado a interpretar y comprender las distancias obtenidas con este método. Las distancias de XL-MS, a su vez, proporcionan una validación experimental de los modelos predichos, incluyendo predicciones para complejos proteína-proteína. En un estudio, AlphaFold2 y XL-MS se utilizaron para identificar las estructuras y posiciones de las proteínas intracelulares en las cilias de *Tetrahymena thermophila* ([McCafferty et al., 2023](https://doi.org/10.1038/s42003-023-04773-7)). Un enfoque similar de dos puntas que combina AlphaFold2 y XL-MS reveló interacciones proteína-proteína en células humanas, incluyendo “28.910 pares únicos de residuos capturados en 4.084 proteínas humanas únicas y 2.110 interacciones únicas proteína-proteína” ([Bartolec et al., 2023](https://doi.org/10.1073/pnas.2219418120)).

## **Usar las predicciones de estructura de AlphaFold2 para guiar la biología molecular y celular**

AlphaFold2 está demostrando ser particularmente valioso para guiar los análisis de mutaciones. También está ayudando a los científicos a generar y probar hipótesis sobre dónde y cómo una proteína podría interactuar con otras proteínas o moléculas.

Cuando buscas proteínas que podrían realizar una función deseable, AlphaFold2 tiene un papel que desempeñar en la realización de evaluaciones tempranas y de bajo coste. Uno de estos desafíos es identificar enzimas que puedan degradar el poli(tereftalato de etileno) (PET), un plástico de uso generalizado. Investigadores utilizaron AlphaFold2 para ayudarles a identificar 74 enzimas potenciales degradadoras de PET y a caracterizar su estructura 3D y mecanismos ([Erickson et al., 2022](https://doi.org/10.1038/s41467-022-35237-x)).

Las estructuras predichas por AlphaFold2 se están utilizando para proponer mecanismos de acción de las proteínas, que son cruciales para la investigación biomédica en etapas tempranas. Por ejemplo, las mutaciones en la proteína humana PINK1 causan la enfermedad de Parkinson de inicio temprano autosómico recesivo. Los investigadores utilizaron AlphaFold2 para predecir la estructura de PINK1. Esto proporcionó evidencia de que la proteína humana PINK1 utiliza el mismo mecanismo que la proteína PINK1 de insectos, que está mejor caracterizada tanto estructural como funcionalmente. Las mutaciones humanas patógenas podrían entonces analizarse en el contexto de la estructura de la proteína ([Gan et al., 2021](https://doi.org/10.1038/s41586-021-04340-2)).

También ha demostrado ser posible utilizar AlphaFold2 para predecir las interacciones proteína-proteína, que son centrales para muchas funciones celulares. Un estudio en levaduras identificó 106 ensamblajes de proteínas que eran previamente desconocidos, y otros 806 que no habían sido caracterizados estructuralmente ([Humphreys et al., 2021](https://doi.org/10.1126/science.abm4805)). Otro estudio utilizó AlphaFold-Multimer para identificar el mecanismo de acción del factor de replicación DONSON. Un pequeño cribado *in silico* de interactores de DONSON sugirió que DONSON cataliza el paso final en el ensamblaje de la helicasa replicativa CMG (entrega del cofactor de la helicasa GINS), un modelo que se confirmó utilizando el análisis estructura-función. Este estudio demostró que AlphaFold-Multimer puede identificar nuevas interacciones proteína-proteína relevantes funcionalmente ([Lim et al., 2023](https://doi.org/10.1126/science.adi3448)).

## **Ingeniería y diseño de proteínas**

AlphaFold2 puede ser el punto de partida para la ingeniería y el diseño de proteínas. Un grupo reingenió una “jeringa” molecular, utilizada en la naturaleza por las bacterias, para administrar proteínas terapéuticas a las células humanas. No había información estructural experimental disponible para la “punta” de la jeringa, por lo que se utilizó AlphaFold2 para guiar la ingeniería ([Kreitz et al., 2023](https://doi.org/10.1038/s41586-023-05870-7)).

Otro grupo utilizó AlphaFold2 para “hallucinar” ensamblajes de proteínas simétricos que no existían en la naturaleza. El equipo luego creó diez de estos ensamblajes de proteínas artificiales y demostró que sus estructuras determinadas experimentalmente coincidían con las predichas por AlphaFold2 con una RMSD promedio de 0.6 Å ([Wicky et al., 2022](https://doi.org/10.1126/science.add1964)).

AlphaFold2 también se ha utilizado para validar variantes de proteínas diseñadas. Por ejemplo, un grupo está creando proteínas para capturar energía solar. Diseñaron un maqueta de proteína para recrear una reacción fotosintética compacta y utilizaron AlphaFold2 para verificar su estructura ([Ennist et al., 2022](https://doi.org/10.3389/fmolb.2022.997295)).

---

Para más formas de utilizar las estructuras predichas por AlphaFold2 para ayudar a abordar preguntas biológicas fundamentales, consulta la sección “[Modelado avanzado y aplicaciones de estructuras de proteínas predichas](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/)“.

Profundiza en la ciencia y descubre cómo AlphaFold está transformando la investigación en el blog de Google DeepMind: [AlphaFold: una solución a un gran desafío de 50 años en biología](https://www.deepmind.com/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology).

Mira los videos de esta lista de reproducción para descubrir cómo los científicos están utilizando AlphaFold2 para impulsar su investigación.

Desplegado: Conoce a los científicos que utilizan AlphaFold

## Pon a prueba tus conocimientos
