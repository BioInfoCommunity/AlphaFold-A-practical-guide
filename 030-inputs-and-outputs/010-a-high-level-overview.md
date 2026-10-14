---
layout: default
title: 'AlphaFold2: Una visión general de alto nivel'
---

# AlphaFold2: Una visión general de alto nivel

**Los usuarios que deseen predecir la estructura tridimensional de una proteína solo necesitan proporcionar su secuencia de aminoácidos. Para analizar esto, AlphaFold2 utiliza una alineación múltiple de secuencias (MSA) que combina las secuencias de múltiples proteínas relacionadas. El software genera un conjunto de representaciones de pares que modelan las relaciones entre cada par de residuos de aminoácidos. El software utiliza la MSA para predecir todas las representaciones de pares y, por lo tanto, la estructura tridimensional de la proteína.**

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/Diagram-1024x576.png)

Figura 13. Visión general de alto nivel de cómo AlphaFold2 predice la estructura de una proteína a partir de su secuencia de aminoácidos.

## **El papel de la alineación múltiple de secuencias (MSA)**

Desde la perspectiva del usuario, la única entrada que necesita AlphaFold2 es la(s) secuencia(s) de proteínas. Sin embargo, AlphaFold2 funciona construyendo una alineación múltiple de secuencias (MSA), en la que se colocan varias secuencias de proteínas similares una al lado de la otra. La MSA se genera consultando varias bases de datos de secuencias de proteínas con la secuencia de entrada.

La entrada principal para la red neuronal de AlphaFold2 es entonces la MSA. AlphaFold2 utiliza MSAs para comparar y analizar las secuencias de proteínas similares de diferentes organismos. Resalta similitudes y diferencias, lo que ayuda a entender las relaciones evolutivas entre las proteínas.

Si dos aminoácidos en una proteína están en contacto cercano, las mutaciones en uno de ellos probablemente serán seguidas por mutaciones del otro. Esto preserva la estructura de la proteína y se conoce como coevolución o covariación. Lo contrario también es cierto: si dos regiones de una proteína están cambiando y evolucionando de manera independiente entre sí, es probable que no estén en contacto directo ([Benner & Gerloff, 1991](https://doi.org/10.1016/0065-2571(91)90012-B); [Göbel et al., 1994](https://doi.org/10.1002/prot.340180402); [Korber et al., 1993](https://doi.org/10.1073%2Fpnas.90.15.7176); [Taylor & Hatrick, 1994](https://doi.org/10.1093/protein/7.3.341)).

Una MSA de alta calidad es esencial para que AlphaFold2 produzca una predicción precisa de la estructura de la proteína. Una MSA diversa y profunda, con cientos o miles de secuencias en la alineación, ayudará a AlphaFold2 a identificar señales coevolutivas y usarlas para determinar la estructura tridimensional de la proteína. Por el contrario, una MSA superficial, con solo decenas de secuencias y baja variabilidad entre ellas, es la razón más común para fallos, predicciones no confiables e inexactas de AlphaFold2.

## **El papel de las representaciones de pares**

Cuando AlphaFold predice la estructura tridimensional de una proteína, crea un conjunto de "representaciones de pares". Cada par de residuos de aminoácidos en la proteína, sin importar cuán distantes estén, se representa por separado. Esto permite que el software codifique las relaciones coevolutivas entre ellos en función de la MSA. Esta información puede interpretarse finalmente como las posiciones relativas de los residuos de aminoácidos y las distancias entre ellos.

AlphaFold2 utiliza una red neuronal llamada Evoformer. Esta interpreta y actualiza tanto la MSA como las representaciones de pares. El aspecto importante de esta red es el flujo continuo de información entre la MSA y las representaciones de pares. Esto permite razonar sobre las relaciones espaciales y evolutivas, lo que refina la hipótesis estructural.

Si están disponibles, AlphaFold2 puede utilizar estructuras de proteínas suministradas (por ejemplo, estructuras derivadas de experimentos) como plantillas. Sin embargo, AlphaFold2 tiende a ignorar tales plantillas si hay suficiente información proveniente de la MSA.

## **¿Cómo obtenemos una estructura?**

El módulo de estructura de AlphaFold2 toma tanto la representación de pares actualizada como la secuencia original (que es la primera fila de la MSA actualizada) del Evoformer. El módulo de estructura primero convierte esto en una columna vertebral de la estructura 3D. Luego, completa el modelado colocando las cadenas laterales de los aminoácidos y refinando sus posiciones.

AlphaFold2 luego realiza un proceso iterativo llamado “reciclaje”. Alimenta la MSA, las representaciones de pares y la estructura 3D de nuevo a la red neuronal y genera una nueva estructura 3D. Este proceso se repite tres veces, permitiendo a AlphaFold2 mejorar la precisión de la estructura final.

[](https://static-content.springer.com/esm/art%3A10.1038%2Fs41586-021-03819-2/MediaObjects/41586_2021_3819_MOESM4_ESM.mp4)

Este video presenta la trayectoria de la estructura intermedia del objetivo CASP14 T1044, una gran (2180 residuos) y multi-dominio ARN polimerasa, predicha por AlphaFold2. Observa las tasas de plegamiento diferenciales de los dominios individuales, con algunos plegándose rápidamente y otros requiriendo más tiempo. Mira el proceso de predicción de AlphaFold, mientras recicla sus predicciones para refinar la estructura final ([Jumper et al., 2021](https://www.nature.com/articles/s41586-021-03819-2#Sec20)).

Para obtener más detalles técnicos, consulta la Información Suplementaria en el artículo original de AlphaFold2. Esto contiene una descripción detallada de la arquitectura de la red neuronal y el conjunto de entrenamiento ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)).
