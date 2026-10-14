---
layout: default
title: 'AlphaFold2: Una visión general de alto nivel'
---

# AlphaFold2: Una visión general de alto nivel

**Los usuarios que deseen predecir la estructura 3D de una proteína solo necesitan proporcionar su secuencia de aminoácidos. Para analizar esto, AlphaFold2 utiliza un alineamiento múltiple de secuencias (MSA) que combina las secuencias de múltiples proteínas relacionadas. El software genera un conjunto de representaciones de pares que modelan las relaciones entre cada par de residuos de aminoácidos. El software utiliza el MSA para predecir todas las representaciones de pares y, por lo tanto, la estructura 3D de la proteína.**

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/Diagram-1024x576.png)

Figura 13. Visión general de alto nivel de cómo AlphaFold2 predice la estructura de una proteína a partir de su secuencia de aminoácidos.

## **El papel del alineamiento múltiple de secuencias (MSA)**

Desde la perspectiva del usuario, la única entrada que AlphaFold2 necesita es la(s) secuencia(s) de proteína(s). Sin embargo, AlphaFold2 funciona construyendo un alineamiento múltiple de secuencias (MSA), en el que se colocan varias secuencias de proteínas similares una al lado de la otra. El MSA se genera consultando varias bases de datos de secuencias de proteínas con la secuencia de entrada.

La entrada principal para la red neuronal de AlphaFold2 es entonces el MSA. AlphaFold2 utiliza los MSA para comparar y analizar las secuencias de proteínas similares de diferentes organismos. Destaca las similitudes y diferencias, lo que ayuda a comprender las relaciones evolutivas entre las proteínas.

Si dos aminoácidos en una proteína están en contacto cercano, las mutaciones en uno de ellos probablemente serán seguidas por mutaciones del otro. Esto preserva la estructura de la proteína y se conoce como coevolución o covariación. También es cierto lo contrario: si dos regiones de una proteína están cambiando y evolucionando independientemente una de la otra, es probable que no estén en contacto directo ([Benner & Gerloff, 1991](https://doi.org/10.1016/0065-2571(91)90012-B); [Göbel et al., 1994](https://doi.org/10.1002/prot.340180402); [Korber et al., 1993](https://doi.org/10.1073%2Fpnas.90.15.7176); [Taylor & Hatrick, 1994](https://doi.org/10.1093/protein/7.3.341)).

Un MSA de alta calidad es esencial para que AlphaFold2 produzca una predicción precisa de la estructura de la proteína. Un MSA diverso y profundo, con cientos o miles de secuencias en el alineamiento, ayudará a AlphaFold2 a identificar señales de coevolución y utilizarlas para determinar la estructura 3D de la proteína. Por el contrario, un MSA superficial, con solo decenas de secuencias y baja variabilidad entre ellas, es la razón más común para obtener predicciones fallidas, poco confiables e inexactas de AlphaFold2.

## **El papel de las representaciones de pares**

Cuando AlphaFold predice la estructura 3D de una proteína, crea un conjunto de “representaciones de pares”. Cada par de residuos de aminoácidos en la proteína, sin importar cuán distantes estén, se representa por separado. Esto permite que el software codifique las relaciones de coevolución entre ellos en función del MSA. Esta información finalmente se puede interpretar como las posiciones relativas de los residuos de aminoácidos y las distancias entre ellos.

AlphaFold2 utiliza una red neuronal llamada Evoformer. Esta interpreta y actualiza tanto el MSA como las representaciones de pares. El aspecto importante de esta red es el flujo continuo de información entre el MSA y las representaciones de pares. Esto permite razonar sobre las relaciones espaciales y evolutivas, lo que refina la hipótesis estructural.

Si están disponibles, AlphaFold2 puede utilizar estructuras de proteínas suministradas (por ejemplo, estructuras derivadas de experimentos) como plantillas. Sin embargo, AlphaFold2 tiende a ignorar tales plantillas si hay suficiente información proveniente del MSA.

## **¿Cómo obtenemos una estructura?**

El módulo de estructura de AlphaFold2 toma tanto la representación de pares actualizada como la secuencia original (que es la primera fila del MSA actualizado) del Evoformer. El módulo de estructura primero convierte esto en un esqueleto de la estructura 3D. Luego, finaliza el modelado colocando las cadenas laterales de los aminoácidos y refinando sus posiciones.

AlphaFold2 luego realiza un proceso iterativo llamado “reciclaje”. Retroalimenta el MSA, las representaciones de pares y la estructura 3D a la red neuronal, y genera una nueva estructura 3D. Este proceso se repite tres veces, lo que permite a AlphaFold2 mejorar la precisión de la estructura final.

[](https://static-content.springer.com/esm/art%3A10.1038%2Fs41586-021-03819-2/MediaObjects/41586_2021_3819_MOESM4_ESM.mp4)

Este video presenta la trayectoria de la estructura intermedia del objetivo T1044 de CASP14, una ARN polimerasa grande (2180 residuos) y multidominio, predicha por AlphaFold2. Observa las diferentes tasas de plegamiento de los dominios individuales, con algunos plegándose rápidamente y otros requiriendo más tiempo. Observa el proceso de predicción de AlphaFold, ya que recicla sus predicciones para refinar la estructura final ([Jumper et al., 2021](https://www.nature.com/articles/s41586-021-03819-2#Sec20)).

Para obtener más detalles técnicos, consulta la Información Suplementaria en el artículo original de AlphaFold2. Este contiene una descripción detallada de la arquitectura de la red neuronal y el conjunto de entrenamiento ([Jumper et al., 2021](https://doi.org/10.1038/s41586-021-03819-2)).
