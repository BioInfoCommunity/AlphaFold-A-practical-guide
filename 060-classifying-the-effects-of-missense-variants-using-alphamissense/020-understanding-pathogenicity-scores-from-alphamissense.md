---
layout: default
title: 'Entendiendo las puntuaciones de patogenicidad de AlphaMissense'
---

# Entendiendo las puntuaciones de patogenicidad de AlphaMissense

AlphaMissense asigna a cada variante de sustitución de sentido una puntuación entre 0 y 1. Estas indican la probabilidad de que la variante sea patogénica. Por ejemplo, una puntuación de 0.8 sugiere que 8 de cada 10 variantes con esta puntuación probablemente sean patogénicas.

Las puntuaciones de patogenicidad se generan recalculando los datos crudos de AlphaMissense utilizando un modelo de regresión logística entrenado con datos de ClinVar. El objetivo fue generar un solo número para facilitar su interpretación.

Para facilitar aún más la interpretación, las puntuaciones se pueden dividir en tres categorías:

* 0 a 0.34: probablemente benigno
* 0.34 a 0.564: incierto
* 0.564 a 1: probablemente patogénico

Estos umbrales se determinaron utilizando curvas de precisión y recuperación para garantizar una precisión del 90% para las clases patogénicas y benignas. Las variantes que no cumplen con esta precisión se clasifican como ambiguas.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/11/Screenshot-2024-11-22-at-11.36.37.png)

Figura 32. Precisión y recuperación de las predicciones de AlphaMissense en el conjunto de pruebas de ClinVar. Las curvas azules representan la precisión y la recuperación para las variantes etiquetadas como benignas (puntuación de AlphaMissense 0, 0.5), mientras que las curvas rojas representan las variantes etiquetadas como patogénicas (puntuación de AlphaMissense 0.5, 1). Los umbrales de clasificación se establecieron para lograr una precisión del 90% para ambas clasificaciones benignas y patogénicas. Las variantes que no cumplen con este umbral de precisión del 90% se definieron como ambiguas. La línea punteada indica la precisión esperada, calculada como la probabilidad promedio predicha de que una variante sea patogénica o benigna.

## **Aplicaciones de AlphaMissense**

Las puntuaciones de AlphaMissense son valiosas para diseñar e interpretar experimentos relacionados con la función de las proteínas. Ejemplos incluyen los Ensayos Multiplexados para Efectos de Variantes (MAVEs), que exploran los efectos de miles de variantes genéticas en paralelo.

AlphaMissense puede ayudar a elucidar los efectos moleculares de las variantes en la función de las proteínas. Esto puede contribuir al descubrimiento de genes causantes de enfermedades, mejorando la precisión del diagnóstico.

Cuando se utiliza en el contexto de una estructura 3D, AlphaMissense puede proporcionar información sobre regiones funcionales importantes. Para mejorar su visualización, las puntuaciones se han integrado en la Base de Datos AlphaFold para evaluar en el contexto de estructuras predichas para todo el proteoma humano.
