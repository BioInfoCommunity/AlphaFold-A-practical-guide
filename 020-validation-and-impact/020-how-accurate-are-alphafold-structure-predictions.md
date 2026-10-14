---
layout: default
title: '¿Qué tan precisas son las predicciones estructurales de AlphaFold 2?'
---

# ¿Qué tan precisas son las predicciones estructurales de AlphaFold 2?

**Las regiones de alta confianza de las predicciones estructurales de AlphaFold2 suelen estar muy cerca de las estructuras experimentales y, por lo tanto, son muy útiles para diseñar experimentos posteriores. Sin embargo, las regiones de baja confianza pueden desviarse sustancialmente. AlphaFold2 acierta la plegadura y la mayoría de las posiciones de las cadenas laterales, pero si estás interesado en las características que requieren precisión atómica, como entender los detalles finos de la catalización, AlphaFold2 puede que no pueda cumplir con tales requisitos.**

## **Medir la precisión usando RMSD**

Los biólogos estructurales han analizado extensamente la coincidencia entre las predicciones estructurales de AlphaFold2 y las estructuras de proteínas derivadas experimentalmente. La coincidencia entre AlphaFold y el experimento se puede comparar con la coincidencia entre diferentes estructuras experimentales para la misma proteína, siendo esta última una línea de base.

Para comparar las estructuras predichas y experimentales, los investigadores utilizan la desviación cuadrática media de la raíz (RMSD). Esta es una medida de la distancia promedio (o desviación) entre átomos correspondientes cuando se superponen dos estructuras similares. Un RMSD menor significa una mejor coincidencia. Dos estructuras idénticas tendrían un RMSD de 0 Ångströms (Å). Un RMSD mayor a 2-3 Å sugiere que las estructuras son sustancialmente diferentes.

La mediana del RMSD entre diferentes estructuras experimentales de la misma proteína es de 0.6 Å, mientras que es de 1 Å para los modelos de AlphaFold y las estructuras experimentales. Esto es una muy buena coincidencia e indica que los pliegues generales predichos por AlphaFold2 suelen ser correctos.

Además, para las partes de alta confianza de las predicciones estructurales de AlphaFold (explicadas más adelante en [“Entradas y Salidas”](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)), la mediana del RMSD es de 0.6 Å: al mismo nivel que las estructuras experimentales. Sin embargo, para las partes de baja confianza puede llegar a 2 Å y más. Esto significa que las regiones de baja confianza de las predicciones estructurales de AlphaFold2 pueden desviarse sustancialmente de las estructuras experimentales ([Terwilliger et al., 2023](https://doi.org/10.1038/s41592-023-02087-4)).

De las cadenas laterales predichas por AlphaFold2, el 7% no son compatibles con los datos experimentales. Sin embargo, el 93% de las cadenas laterales están aproximadamente correctas y el 80% muestran un ajuste perfecto. Los datos análogos para las estructuras experimentales dan el 98% de las cadenas laterales aproximadamente correctas y el 94% con un ajuste perfecto ([Terwilliger et al., 2023](https://doi.org/10.1038/s41592-023-02087-4)). En general, AlphaFold2 acierta la mayoría de las cadenas laterales, pero es marginalmente menos confiable que las estructuras experimentales. Ten en cuenta que esta estadística no se puede extender a los segmentos de proteínas desordenadas y partes de la estructura modeladas con baja confianza. Las conformaciones de las cadenas laterales de los aminoácidos en las regiones desordenadas y de baja confianza son mayormente aleatorias.

##### Figura 11. Fenilalanina hidroxilasa

Aunque el alineamiento estructural general es evidente, varias cadenas laterales (las estructuras más pequeñas y ramificadas que se extienden desde el esqueleto principal de la proteína) en el modelo de AlphaFold ([AF-Q818B4-F1](https://alphafold.ebi.ac.uk/entry/Q818B4)) están posicionadas incorrectamente en comparación con las del modelo depositado (gris, ID PDB: [7VGM](https://doi.org/10.2210/pdb7VGM/pdb))

Las regiones de baja confianza de una estructura predicha a menudo corresponden a regiones intrínsecamente desordenadas. Sin embargo, a veces puede indicar que AlphaFold2 no tiene suficiente información para predecir esta estructura con confianza.

Un problema surge al predecir las estructuras de proteínas que contienen varios dominios conectados por enlaces flexibles. Es probable que tales dominios no tengan posiciones relativas bien definidas, incluso en las células, o solo adopten posiciones bien definidas en el contexto de un complejo proteína-proteína grande. En estos casos, AlphaFold2 predecirá las estructuras de los dominios individuales con precisión y confianza, pero las posiciones relativas de los dominios serán esencialmente aleatorias, reflejando su comportamiento en la vida real. Esto se reflejará en malas puntuaciones en otra métrica de confianza llamada error alineado predicho (PAE) (consulta la sección “[Entradas y Salidas](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)“). Sería imprudente sacar cualquier conclusión biológica de las posiciones relativas predichas de tales dominios.

Esto es especialmente cierto para las proteínas de membrana: AlphaFold2 no es consciente del plano de la membrana, por lo que puede asignar dominios a posiciones que en la realidad chocarían con la membrana. Nuevamente, la incertidumbre en las orientaciones de los dominios generalmente se refleja en el PAE cuando se visualiza como un gráfico.
