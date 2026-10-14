---
layout: default
title: 'Puntuaciones de confianza en AlphaFold-Multimer'
---

# Puntuaciones de confianza en AlphaFold-Multimer

AlphaFold-Multimer es una versión especializada del software. Está diseñado para predecir las estructuras de complejos de proteínas. AlphaFold-Multimer proporciona dos métricas adicionales para evaluar la precisión de sus predicciones: la puntuación de modelado de plantilla (pTM) y la puntuación de modelado de plantilla de la interfaz (ipTM).

Ambas se derivan de una medida llamada la puntuación de modelado de plantilla (TM). Esta mide la precisión de la estructura global de la proteína y es relativamente insensible a las imprecisiones localizadas ([Xu y Zhang, 2010](https://doi.org/10.1093/bioinformatics/btq066)).

pTM es una medida integrada de qué tan bien AlphaFold-Multimer ha predicho la estructura general del complejo. Es la puntuación TM predicha para una superposición entre la estructura predicha y la estructura verdadera hipotética. Una puntuación TM superior a 0.5 significa que el pliegue predicho general para el complejo podría ser similar a la estructura verdadera. Una puntuación TM inferior a 0.5 significa que la estructura predicha es probablemente incorrecta: la puntuación pTM sigue la misma definición. Debes interpretar la puntuación pTM con precaución. Por ejemplo, imagina una situación en la que una de las proteínas que interactúan es más grande y su estructura se predice correctamente, mientras que una proteína asociada más pequeña se predice incorrectamente. La puntuación pTM resultante del complejo podría estar dominada por la proteína más grande y mostrar una puntuación pTM superior a 0.5.

En contraste, ipTM mide la precisión de las posiciones relativas predichas de las subunidades que forman el complejo proteína-proteína. Los valores superiores a 0.8 representan predicciones de alta calidad y confianza, mientras que los valores inferiores a 0.6 sugieren una predicción fallida. Los valores de ipTM entre 0.6 y 0.8 son una zona gris donde las predicciones podrían ser correctas o incorrectas. Estos valores asumen el modelado con múltiples pasos de reciclaje, por lo que el proceso de predicción alcanza un grado de convergencia. En estudios a gran escala para interacciones proteína-proteína, a menudo se utilizan configuraciones optimizadas para la velocidad de predicción, por ejemplo, muy pocos o ningún paso de reciclaje. En tales casos, se han utilizado umbrales de ipTM tan bajos como 0.3 para el cribado inicial; sin embargo, es importante destacar que todos los pares de proteínas con puntuaciones ipTM superiores a 0.3 fueron luego sometidos a un examen adicional (por ejemplo, [Weeratunga et al., 2023](https://doi.org/10.1101/2023.02.20.529329)). Las regiones desordenadas y las regiones con una puntuación pLDDT baja pueden afectar negativamente la puntuación ipTM, incluso si la estructura del complejo se predice correctamente.

ipTM puede ser más útil para ti que pTM. Esto se debe a que la calidad de la predicción de las posiciones relativas de las subunidades y la calidad de la predicción del complejo completo son altamente interdependientes: si las posiciones relativas de las subunidades son correctas (como se refleja en una puntuación ipTM alta), puedes esperar que el complejo completo también sea correcto.

En la práctica, tu confianza general en las predicciones para multimers debe basarse en una combinación de todas las métricas, incluyendo tanto pTM como ipTM, así como pLDDT y PAE.
