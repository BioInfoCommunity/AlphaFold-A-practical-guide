---
layout: default
title: 'Presentando variantes de cambio de sentido y AlphaMissense'
---

# Presentando las variantes de sentido incorrecto y AlphaMissense

Las variantes de sentido incorrecto son el tipo más común de variante genética. Un solo cambio en la secuencia de ADN resulta en la sustitución de un aminoácido por otro en una proteína. Aunque algunas variantes de sentido incorrecto son inofensivas, otras pueden llevar a trastornos genéticos.

AlphaMissense es un sistema de aprendizaje automático que puede categorizar una variante genética de sentido incorrecto como probablemente patogénica (causante de enfermedad) o benigna (efecto limitado). Para clasificar las variantes de sentido incorrecto, Google DeepMind ha creado una nueva herramienta llamada AlphaMissense. Google DeepMind basó AlphaMissense en AlphaFold2, pero lo implementó como un sistema separado.

AlphaMissense ya ha proporcionado predicciones de alta confianza para la mayoría de las variantes de sentido incorrecto humanas ([Cheng et al., 2023](https://doi.org/10.1126/science.adg7492)). Consulta el Aviso [1](https://www.ebi.ac.uk/training/online/courses/alphafold/?page_id=2721&preview=true#:~:text=1.%20Disclaimer%3A%20%E2%80%9CAlphaFold,a%20qualified%20professional.%E2%80%9D)

## **Cómo funciona AlphaMissense**

Para predecir si una variante es patogénica, AlphaMissense combina dos tipos de datos.

El primero es el grado en que el residuo de aminoácido se ha conservado a lo largo de la historia evolutiva. Si un residuo está profundamente conservado, es probable que sea importante para la función de la proteína. Los cambios en tales residuos conservados son más propensos a ser patogénicos.

El segundo factor es el contexto estructural de la variante. Dependiendo de dónde se encuentre un aminoácido dentro de una proteína, es más o menos probable que sea crítico para la función.

El proceso de entrenamiento de AlphaMissense involucró analizar un vasto conjunto de datos de frecuencias de variantes en poblaciones humanas y de primates. Las variantes que se observaron con frecuencia se categorizaron como benignas, mientras que las variantes raras o ausentes se consideraron patogénicas.

Para verificar que AlphaMissense predijo con éxito la patogenicidad de las variantes de sentido incorrecto, se validó contra múltiples puntos de referencia. Estos incluyeron datos anotados de ClinVar, el modelo evolutivo de efecto de variantes (EVE) y los conjuntos de datos MAVE.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/11/alphamissense-1.png)

Figura 31. AlphaMissense supera otros métodos computacionales en la predicción de los efectos de las variantes de sentido incorrecto de ClinVar. Los métodos resaltados en gris se entrenaron directamente en ClinVar; esto llevó a métricas de rendimiento potencialmente infladas, ya que algunas variantes de entrenamiento están incluidas en este conjunto.

1. Aviso: “AlphaFold es una herramienta de investigación y sus salidas tienen diferentes niveles de confianza. La información proporcionada en estos módulos y por AlphaFold (incluida en la Base de Datos AlphaFold) se proporciona de forma gratuita, estrictamente tal como está y sin representación o garantía de ningún tipo. No somos responsables de la precisión, fiabilidad, disponibilidad, efectividad o uso correcto de esta información ni de ningún impacto derivado del uso continuo de dicha información. Si te basas en cualquier información de este tipo, lo haces bajo tu propio riesgo. Estos módulos, AlphaFold y sus salidas no están destinados para, no han sido validados para y no están aprobados para su uso clínico. No debes usar ninguna de esta información para fines clínicos ni basarte en ella para obtener asesoramiento médico u otro asesoramiento profesional. Cualquier contenido relacionado con estos temas se proporciona únicamente con fines informativos y no es un sustituto del asesoramiento de un profesional cualificado.”
