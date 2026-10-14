---
layout: default
title: 'Puntuaciones de confianza en AlphaFold-Multimer'
---

# Puntuaciones de confianza en AlphaFold-Multimer

AlphaFold-Multimer es una versión especializada del software. Está diseñado para predecir las estructuras de complejos proteicos. AlphaFold-Multimer proporciona dos métricas adicionales para evaluar la precisión de sus predicciones: la puntuación de modelado de plantilla predicho (pTM) y la puntuación de modelado de plantilla predicho de interfaz (ipTM).

Ambas se derivan de una medida llamada la puntuación de modelado de plantilla (TM). Esta mide la precisión de la estructura global de la proteína y es relativamente insensible a las imprecisiones localizadas ([Xu y Zhang, 2010](https://doi.org/10.1093/bioinformatics/btq066)).

pTM es una medida integrada de cómo bien ha predicho AlphaFold-Multimer la estructura general del complejo. Es la puntuación TM predicha para una superposición entre la estructura predicha y la estructura verdadera hipotética. Una puntuación TM por encima de 0.5 significa que el pliegue predicho general para el complejo podría ser similar a la estructura verdadera. Una puntuación TM por debajo de 0.5 significa que la estructura predicha probablemente esté equivocada: la puntuación pTM sigue la misma definición. La puntuación pTM debe interpretarse con cautela. Por ejemplo, imagina una situación donde una de las proteínas que interactúan es más grande y su estructura se predice correctamente, mientras que una proteína asociada más pequeña se predice incorrectamente. La puntuación pTM resultante del complejo podría dominarse por la proteína más grande y mostrar una puntuación pTM por encima de 0.5.

En contraste, ipTM mide la precisión de las posiciones relativas predichas de las subunidades que forman el complejo proteína-proteína. Los valores superiores a 0.8 representan predicciones de alta calidad y confiables, mientras que los valores por debajo de 0.6 sugieren una predicción probablemente fallida. Los valores ipTM entre 0.6 y 0.8 son una zona gris donde las predicciones podrían estar correctas o equivocadas. Estos valores asumen el modelado con múltiples pasos de reciclaje, por lo que el proceso de predicción alcanza un grado de convergencia. En grandes estudios de detección de interacciones proteína-proteína, a menudo se utilizan configuraciones optimizadas para la velocidad de predicción, por ejemplo, muy pocos o ningún paso de reciclaje. En tales casos, se han utilizado umbrales ipTM tan bajos como 0.3 para la detección inicial; sin embargo, es importante que todas las parejas de proteínas con puntuaciones ipTM superiores a 0.3 se sometieran a un examen adicional (por ejemplo, [Weeratunga et al., 2023](https://doi.org/10.1101/2023.02.20.529329)). Las regiones desordenadas y las regiones con una puntuación pLDDT baja pueden afectar negativamente la puntuación ipTM incluso si la estructura del complejo se predice correctamente.

ipTM puede ser más útil para los usuarios que pTM. Esto se debe a que la calidad de la predicción de las posiciones relativas de las subunidades y la calidad de la predicción del complejo completo son altamente interdependientes: si las posiciones relativas de las subunidades son correctas (como se refleja en una puntuación ipTM alta), los usuarios pueden esperar que el complejo completo también sea correcto.

En la práctica, tu confianza general en las predicciones para multimers debe basarse en una combinación de todas las métricas, incluyendo tanto pTM como ipTM, así como pLDDT y PAE.
