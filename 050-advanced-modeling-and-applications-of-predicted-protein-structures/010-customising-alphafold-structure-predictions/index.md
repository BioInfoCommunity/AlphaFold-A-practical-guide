---
layout: default
title: 'Personaliza las predicciones de estructura de AlphaFold2'
---

# Personalizando las predicciones de estructura de AlphaFold2

**Hay muchas maneras de personalizar las predicciones de estructura de proteínas que realiza AlphaFold. Incluyen variar el número de ciclos, personalizar el MSA y suministrar una estructura de plantilla. Estos tipos de personalización pueden mejorar el rendimiento de AlphaFold2 en estructuras desafiantes, como proteínas que tienen múltiples conformaciones.**

## **Parámetros disponibles en ColabFold**

Cuando uses [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb), puedes controlar la versión del modelo AlphaFold2 que utilizas. Elige el tipo de modelo apropiado para tus predicciones, como “monómero” o una de las versiones de AlphaFold-Multimer. Recomendamos usar AlphaFold2.3 para modelar multímeros.

Los parámetros más importantes que se pueden cambiar son los siguientes:

* Número de ciclos
* Profundidad de la alineación múltiple de secuencias (MSA)
* Semillas aleatorias utilizadas para inicializar las predicciones
* Si se debe suministrar una estructura de plantilla para guiar la predicción de AlphaFold

Cada parámetro se explica con más detalle en las siguientes subsecciones.

ColabFold ofrece ajustes adicionales que puedes explorar. Para obtener más información, consulta las [instrucciones](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb#scrollTo=UGUBLzB3C6WN).

### **Reciclaje**

AlphaFold2 recicla sus resultados para refinar sus predicciones de estructura (consulta la sección “[Una visión general de alto nivel](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)“).

Puedes aumentar el número de ciclos para que las predicciones de estructura converjan más estrechamente. Agregar más pasos de reciclaje (normalmente de 3 a 20) es un método eficaz para mejorar la calidad de la predicción.

Alternativamente, puedes disminuir el número de ciclos para acelerar la predicción de la estructura.

### **Optimizando la alineación múltiple de secuencias (MSA)**

La precisión de una predicción de estructura de AlphaFold2 depende de la calidad de la alineación múltiple de secuencias (MSA). Los usuarios tienen varias opciones para optimizar su MSA.

Puedes cambiar la profundidad del MSA, es decir, el número de secuencias incluidas. En ColabFold, la profundidad del MSA se controla cambiando el parámetro ‘max\_msa’.

Un MSA más profundo con cientos o miles de secuencias generalmente conducirá a una mejor predicción de la estructura de la proteína. Sin embargo, un MSA superficial con menos de 100 secuencias podría ser útil cuando proporcionas una plantilla estructural (consulta “Usando plantillas para guiar las predicciones de estructura”, a continuación).

Alternativamente, puedes proporcionar un MSA personalizado a ColabFold. Se puede utilizar cualquier tipo de herramienta de alineación para generar el MSA.

Ajustar el MSA puede ser particularmente útil para predecir las estructuras de diferentes estados conformacionales de una proteína. Por ejemplo, agrupar un MSA por similitud de secuencia puede elicitar una variedad de conformaciones ([Wayment-Steele et al., 2023](https://doi.org/10.1038/s41586-023-06832-9)). Alternativamente, reducir la profundidad del MSA mediante un submuestreo estocástico puede generar modelos precisos de múltiples conformaciones ([del Alamo et al, 2022](https://doi.org/10.7554/eLife.75751)).

La configuración óptima del MSA dependerá de la proteína. Por lo tanto, es posible que debas experimentar con estos parámetros para obtener el mejor resultado.

### **Usando semillas aleatorias para aumentar la calidad de la predicción**

AlphaFold2 utiliza semillas aleatorias para inicializar sus predicciones de estructura. Puedes controlarlas cambiando el parámetro ‘random\_seed’. De esta manera, a veces puedes guiar a AlphaFold2 hacia una predicción correcta.

Desde un punto de vista computacional, usar diferentes semillas aleatorias introduce variabilidad en los resultados de la predicción de la estructura. Al iniciar las predicciones de la estructura desde varios puntos aleatorios diferentes, AlphaFold2 puede generar una mayor diversidad de estructuras.

Normalmente, las partes de alta confianza de la estructura convergerán a la misma conformación independientemente de la semilla aleatoria utilizada. Sin embargo, las partes de baja confianza pueden variar sustancialmente.

Por ejemplo, cuando hay pocas o ninguna secuencia en el MSA, AlphaFold2 tendrá dificultades para predecir la estructura de la proteína con alta confianza. Sin embargo, cambiar las semillas aleatorias a veces permitirá a AlphaFold2 predecir la estructura a pesar de este obstáculo (aunque esto no está garantizado). Añadir más ciclos también puede ayudar en esta situación (consulta “Recycling”, arriba).

Además, un MSA poco profundo combinado con dropout y semillas aleatorias puede llevar a AlphaFold2 a muestrear conformaciones alternativas y/o diferentes predicciones de la estructura.

### **Usar plantillas para guiar las predicciones de la estructura**

Puedes proporcionar modelos de estructura (preferiblemente en formato mmCIF) como plantillas para guiar a AlphaFold2 para predecir una proteína en un estado específico. La plantilla actúa como una referencia, empujando la predicción de AlphaFold2 a que se parezca a la estructura que has proporcionado.

Puedes proporcionar una plantilla personalizada. Alternativamente, puedes dejar que ColabFold busque plantillas en la base de datos [PDB100](https://foldseek.steineggerlab.workers.dev/). Esta es una versión agrupada de PDB, creada buscando estructuras representativas de PDB contra la Base de Datos de Estructuras de Proteínas AlphaFold utilizando Foldseek.

Es importante considerar la profundidad del MSA cuando se utilizan plantillas. Si la señal coevolutiva del MSA es fuerte, AlphaFold2 tiende a ignorar las estructuras de la plantilla. Por otro lado, un MSA demasiado poco profundo puede resultar en predicciones de estructura de baja confianza. Por lo tanto, debes optimizar el valor de la profundidad del MSA para lograr el equilibrio adecuado, asegurando tanto que AlphaFold2 tenga en cuenta la plantilla como que la señal del MSA sea lo suficientemente fuerte como para permitir una predicción de estructura confiable.

Aquí puedes encontrar un breve ejemplo de cómo puedes usar ColabFold.

Para protocolos adicionales sobre el uso de ColabFold para la predicción de la estructura de proteínas, consulta la guía *“Predicción fácil y precisa de la estructura de proteínas usando ColabFold”* ([Kim et al., 2023](https://doi.org/10.21203/rs.3.pex-2490/v1)).
