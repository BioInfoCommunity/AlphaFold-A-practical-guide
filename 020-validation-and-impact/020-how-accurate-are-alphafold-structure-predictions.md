---
layout: default
title: '¿Qué tan precisas son las predicciones de estructura de AlphaFold 2?'
---

# ¿Qué tan precisas son las predicciones de estructura de AlphaFold 2?

**Las regiones de alta confianza de las predicciones de estructura de AlphaFold2 suelen estar muy cerca de las estructuras experimentales, y por lo tanto son muy útiles para diseñar experimentos posteriores. Sin embargo, las regiones de baja confianza pueden desviarse sustancialmente. AlphaFold2 acierta con el plegamiento y la mayoría de las posiciones de las cadenas laterales, pero si te interesan las características que requieren precisión atómica, como comprender los detalles finos de la catálisis, es posible que AlphaFold2 no pueda cumplir con dichos requisitos.**

## **Medición de la precisión utilizando RMSD**

Los biólogos estructurales han analizado extensamente la concordancia entre las predicciones de estructura de AlphaFold2 y las estructuras de proteínas derivadas experimentalmente. La concordancia entre AlphaFold y el experimento se puede comparar con la concordancia entre diferentes estructuras experimentales para la misma proteína, siendo esta última una línea de base.

Para comparar las estructuras predichas y experimentales, los investigadores utilizan la desviación cuadrática media (RMSD). Esta es una medida de la distancia promedio (o desviación) entre átomos correspondientes cuando dos estructuras similares se superponen. Un RMSD más pequeño significa una mejor concordancia. Dos estructuras idénticas tendrían un RMSD de 0 Ångströms (Å). Un RMSD mayor a 2-3 Å sugiere que las estructuras son sustancialmente diferentes.

La mediana de RMSD entre diferentes estructuras experimentales de la misma proteína es de 0.6 Å, mientras que es de 1 Å para los modelos de AlphaFold y las estructuras experimentales. Esta es una muy buena concordancia e indica que los plegamientos generales predichos por AlphaFold2 suelen ser correctos.

Además, para las partes de alta confianza de las predicciones de estructura de AlphaFold (explicado más adelante en [“Inputs and Outputs”](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)), la mediana de RMSD es de 0.6 Å: a la par con las estructuras experimentales. Sin embargo, para las partes de baja confianza, puede subir hasta 2 Å o más. Esto significa que las regiones de baja confianza de las predicciones de estructura de AlphaFold2 pueden desviarse sustancialmente de las estructuras experimentales ([Terwilliger et al., 2023](https://doi.org/10.1038/s41592-023-02087-4)).

Del 7% de las cadenas laterales predichas por AlphaFold2 no son compatibles con los datos experimentales. No obstante, el 93% de las cadenas laterales son aproximadamente correctas, y el 80% muestran un ajuste perfecto. Datos análogos para las estructuras experimentales dan un 98% de las cadenas laterales siendo aproximadamente correctas y un 94% siendo de ajuste perfecto ([Terwilliger et al., 2023](https://doi.org/10.1038/s41592-023-02087-4)). En general, AlphaFold2 acierta con la gran mayoría de las cadenas laterales, pero es ligeramente menos fiable que las estructuras experimentales. Ten en cuenta que esta estadística no se puede extender a los segmentos de proteína desordenados y a las partes de la estructura modeladas con baja confianza. Las conformaciones de las cadenas laterales de los aminoácidos en las regiones desordenadas y de baja confianza son en su mayoría aleatorias.

##### Figura 11. Fenilalanina hidroxilasa

Si bien la alineación estructural general es evidente, varias cadenas laterales (las estructuras más pequeñas y ramificadas que se extienden desde la columna vertebral principal de la proteína) en el modelo de AlphaFold ([AF-Q818B4-F1](https://alphafold.ebi.ac.uk/entry/Q818B4)) están posicionadas incorrectamente en comparación con las del modelo depositado (gris, ID PDB: [7VGM](https://doi.org/10.2210/pdb7VGM/pdb))

Las regiones de baja confianza de una estructura predicha a menudo corresponden a regiones intrínsecamente desordenadas. Sin embargo, a veces puede indicar que AlphaFold2 no tiene suficiente información para predecir esta estructura con confianza.

Un problema surge al predecir las estructuras de proteínas que contienen varios dominios conectados por enlaces flexibles. Es probable que estos dominios no tengan posiciones relativas bien definidas, ni siquiera en las células, o que solo adopten posiciones bien definidas en el contexto de un gran complejo proteína-proteína. En estos casos, AlphaFold2 predecirá las estructuras de los dominios individuales con precisión y confianza, pero las posiciones relativas de los dominios serán esencialmente aleatorias, reflejando su comportamiento en la vida real. Esto se reflejará en puntuaciones bajas en otra métrica de confianza llamada error alineado predicho (PAE) (consulta la sección “[Inputs and Outputs](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)“). Sería imprudente extraer conclusiones biológicas de las posiciones relativas predichas de tales dominios.

Esto es especialmente cierto para las proteínas de membrana: AlphaFold2 no es consciente del plano de la membrana, por lo que puede asignar dominios a posiciones que en realidad chocarían con la membrana. De nuevo, la incertidumbre en las orientaciones de los dominios suele reflejarse en el PAE cuando se visualiza como un gráfico.
