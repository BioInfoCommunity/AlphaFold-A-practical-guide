---
layout: default
title: 'Presentando variantes con cambio de sentido y AlphaMissense'
---

# Introduciendo variantes con cambio de sentido y AlphaMissense

Las variantes con cambio de sentido son el tipo más común de variante genética. Un único cambio en la secuencia de ADN resulta en la sustitución de un aminoácido por otro en una proteína. Si bien algunas variantes con cambio de sentido son inofensivas, otras pueden conducir a trastornos genéticos.

AlphaMissense es un sistema de aprendizaje automático que puede categorizar una variante genética con cambio de sentido como probablemente patógena (causante de enfermedad) o benigna (efecto limitado). Para clasificar las variantes con cambio de sentido, Google DeepMind ha creado una nueva herramienta llamada AlphaMissense. Google DeepMind basó AlphaMissense en AlphaFold2, pero lo implementó como un sistema independiente.

AlphaMissense ya ha proporcionado predicciones de alta confianza para la mayoría de las variantes con cambio de sentido humanas ([Cheng et al., 2023](https://doi.org/10.1126/science.adg7492)). Consulta el Descargo de responsabilidad [1](https://www.ebi.ac.uk/training/online/courses/alphafold/?page_id=2721&preview=true#:~:text=1.%20Disclaimer%3A%20%E2%80%9CAlphaFold,a%20qualified%20professional.%E2%80%9D)

## **Cómo funciona AlphaMissense**

Para predecir si una variante es patógena, AlphaMissense combina dos tipos de datos.

El primero es el grado en que el residuo de aminoácido se ha conservado a lo largo de la historia evolutiva. Si un residuo está profundamente conservado, es probable que sea importante para la función de la proteína. Los cambios en dichos residuos conservados son más propensos a ser patógenos.

El segundo factor es el contexto estructural de la variante. Dependiendo de dónde se encuentre un aminoácido dentro de una proteína, es más o menos probable que sea crítico para la función.

El proceso de entrenamiento de AlphaMissense implicó el análisis de un vasto conjunto de datos de frecuencias de variantes en poblaciones humanas y de primates. Las variantes que se observaron con frecuencia se categorizaron como benignas, mientras que las variantes raras o ausentes se consideraron patógenas.

Para verificar que AlphaMissense predijo con éxito la patogenicidad de las variantes con cambio de sentido, se validó frente a múltiples puntos de referencia. Estos incluyeron datos anotados de ClinVar, el modelo evolutivo del efecto de la variante (EVE) y los conjuntos de datos MAVE.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/11/alphamissense-1.png)

Figura 31. AlphaMissense supera a otros métodos computacionales en la predicción de los efectos de las variantes con cambio de sentido de ClinVar. Los métodos resaltados en gris se entrenaron directamente en ClinVar; esto condujo a métricas de rendimiento potencialmente infladas, ya que algunas variantes de entrenamiento se incluyen en este conjunto.

1. Descargo de responsabilidad: “AlphaFold es una herramienta de investigación y sus resultados tienen diferentes niveles de confianza. La información proporcionada en estos módulos y por AlphaFold (incluida en la Base de datos AlphaFold) se proporciona de forma gratuita, tal cual y sin ninguna representación o garantía de ningún tipo. No somos responsables de la exactitud, fiabilidad, disponibilidad, eficacia o uso correcto de esta información o de cualquier impacto derivado del uso continuo de dicha información. Si confías en dicha información, lo haces únicamente bajo tu propio riesgo. Estos módulos, AlphaFold y sus resultados no están destinados al uso clínico, no se han validado para ello y no están aprobados para su uso clínico. No debes utilizar esta información con fines clínicos ni confiar en ella para obtener asesoramiento médico o profesional. Cualquier contenido relacionado con estos temas se proporciona únicamente con fines informativos y no sustituye el asesoramiento de un profesional cualificado.”
