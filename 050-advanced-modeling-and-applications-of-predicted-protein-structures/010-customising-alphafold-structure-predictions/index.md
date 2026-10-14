---
layout: default
title: 'Personalizando predicciones estructurales de AlphaFold2'
---

# Personalizando las predicciones de estructuras de AlphaFold2

**Hay muchas maneras de personalizar las predicciones de estructuras de proteínas que realiza AlphaFold. Incluyen variar el número de reciclajes, personalizar la MSA y proporcionar una estructura de plantilla. Estos tipos de personalización pueden mejorar el rendimiento de AlphaFold2 en estructuras desafiantes, como proteínas que tienen múltiples conformaciones.**

## **Parámetros disponibles en ColabFold**

Al usar [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb), puedes controlar la versión del modelo AlphaFold2 que usas. Elige el tipo de modelo adecuado para tus predicciones, como “monómero” o una de las versiones AlphaFold-Multimer. Recomendamos usar AlphaFold2.3 para modelar multimers.

Los parámetros más importantes que se pueden cambiar son los siguientes:

* Número de reciclajes
* Profundidad del alineamiento múltiple de secuencias (MSA)
* Semillas aleatorias utilizadas para inicializar las predicciones
* Si proporcionar una estructura de plantilla para guiar la predicción de AlphaFold

Cada parámetro se explica con más detalle en las siguientes subsecciones.

ColabFold ofrece configuraciones adicionales que puedes explorar. Para obtener más información, consulta las [instrucciones](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb#scrollTo=UGUBLzB3C6WN).

### **Reciclaje**

AlphaFold2 recicla sus salidas para refinar sus predicciones de estructuras (consulta la sección “[Una visión general de alto nivel](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)“).

Puedes aumentar el número de reciclajes para que las predicciones de estructuras converjan más de cerca. Añadir más pasos de reciclaje (normalmente de 3 a 20) es un método efectivo para mejorar la calidad de la predicción.

Alternativamente, puedes disminuir el número de reciclajes para acelerar la predicción de la estructura.

### **Optimizando el alineamiento múltiple de secuencias (MSA)**

La precisión de una predicción de estructura de AlphaFold2 depende de la calidad del alineamiento múltiple de secuencias (MSA). Los usuarios tienen varias opciones para optimizar su MSA.

Puedes cambiar la profundidad de la MSA, es decir, el número de secuencias incluidas. En ColabFold, la profundidad de la MSA se controla cambiando el parámetro ‘max\_msa’.

Una MSA más profunda con cientos o miles de secuencias generalmente llevará a una mejor predicción de la estructura de la proteína. Sin embargo, una MSA superficial con menos de 100 secuencias podría ser útil cuando proporcionas una plantilla estructural (consulta “Usando plantillas para guiar las predicciones de estructuras”, a continuación).

Alternativamente, puedes proporcionar una MSA personalizada a ColabFold. Cualquier tipo de herramienta de alineamiento puede usarse para generar la MSA.

Ajustar la MSA puede ser particularmente útil para predecir las estructuras de diferentes estados conformacionales de una proteína. Por ejemplo, agrupar una MSA por similitud de secuencia puede revelar una gama de conformaciones ([Wayment-Steele et al., 2023](https://doi.org/10.1038/s41586-023-06832-9)). Alternativamente, reducir la profundidad de la MSA mediante la subsamplificación estocástica puede generar modelos precisos de múltiples conformaciones ([del Alamo et al, 2022](https://doi.org/10.7554/eLife.75751)).

La configuración óptima de la MSA dependerá de la proteína. Por lo tanto, es posible que necesites jugar con estos parámetros para obtener la mejor salida.

### **Usando semillas aleatorias para aumentar la calidad de la predicción**

AlphaFold2 usa semillas aleatorias para inicializar sus predicciones de estructuras. Puedes controlarlas cambiando el parámetro ‘random\_seed’. De esta manera, a veces puedes guiar a AlphaFold2 hacia una predicción correcta.

Desde un punto de vista computacional, usar diferentes semillas aleatorias introduce variabilidad en los resultados de la predicción de estructuras. Al iniciar las predicciones de estructuras desde varios puntos aleatorios diferentes, AlphaFold2 puede generar una mayor diversidad de estructuras.

Normalmente, las partes de alta confianza de la estructura convergerán a la misma conformación independientemente de la semilla aleatoria utilizada. Sin embargo, las partes de baja confianza pueden variar sustancialmente.

Por ejemplo, cuando hay pocas o ninguna secuencia en la MSA, AlphaFold2 tendrá dificultades para predecir la estructura de la proteína con alta confianza. Sin embargo, cambiar las semillas aleatorias a veces permitirá a AlphaFold2 predecir la estructura a pesar de este obstáculo (aunque esto no está garantizado). Añadir más reciclajes también puede ayudar en esta situación (consulta “Reciclaje”, arriba).

Además, una MSA superficial combinada con dropout y semillas aleatorias puede llevar a AlphaFold2 a muestrear conformaciones alternativas y/o diferentes predicciones de estructura.

### **Usar plantillas para guiar las predicciones de estructuras**

Puedes proporcionar modelos de estructura (preferiblemente en formato mmCIF) como plantillas para guiar a AlphaFold2 a predecir una proteína en un estado específico. La plantilla actúa como una referencia, guiando la predicción de AlphaFold2 para que se asemeje a la estructura que has proporcionado.

Puedes proporcionar una plantilla personalizada. Alternativamente, puedes dejar que ColabFold busque plantillas en la base de datos [PDB100](https://foldseek.steineggerlab.workers.dev/). Esta es una versión agrupada de PDB, creada buscando estructuras representativas de PDB contra la Base de Datos de Estructuras de Proteínas AlphaFold usando Foldseek.

Es importante considerar la profundidad de la MSA al usar plantillas. Si la señal coevolutiva de la MSA es fuerte, AlphaFold2 tiende a ignorar las estructuras de la plantilla. Por otro lado, una MSA demasiado superficial puede resultar en predicciones de estructura de baja confianza. Por lo tanto, debes optimizar el valor de profundidad de la MSA para encontrar el equilibrio adecuado, asegurando tanto que AlphaFold2 tenga en cuenta la plantilla como que la señal de la MSA sea lo suficientemente fuerte para permitir una predicción de estructura confiable.

Aquí puedes encontrar un ejemplo corto sobre cómo puedes usar ColabFold.

Para protocolos adicionales sobre el uso de ColabFold para la predicción de estructuras de proteínas, consulta la guía *“Easy and accurate protein structure prediction using ColabFold”* ([Kim et al., 2023](https://doi.org/10.21203/rs.3.pex-2490/v1)).
