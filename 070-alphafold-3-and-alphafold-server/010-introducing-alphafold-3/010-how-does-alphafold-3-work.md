---
layout: default
title: '¿Cómo funciona AlphaFold 3?'
---

# ¿Cómo funciona AlphaFold 3?

AlphaFold 3 se basa en principios generales similares a los de AlphaFold 2 (para más información sobre AlphaFold 2, consulta la sección [AlphaFold 2: Una visión general de alto nivel](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/a-high-level-overview/)).

Muchos detalles prácticos siguen siendo los mismos, notablemente el uso de alineaciones múltiples de secuencias (MSAs) como la principal entrada de la red neuronal. Además, la arquitectura general de AlphaFold 3 conserva una estructura familiar, la de AlphaFold 2, donde un gran tronco procesa una representación por pares del complejo químico, que luego se utiliza por un módulo de estructura para generar posiciones atómicas explícitas.

Sin embargo, a pesar de estas similitudes fundamentales, la arquitectura de AlphaFold 3 ha mejorado sustancialmente sobre AlphaFold 2. La nueva arquitectura acomoda estructuras químicas más generales e mejora la eficiencia de los datos en el aprendizaje.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/AFS-Education-Figure-2-240828-r01-1024x265.png)

Figura 35. La arquitectura de AlphaFold 3. Los rectángulos representan módulos de procesamiento, mientras que las flechas muestran el flujo de datos. Amarillo, datos de entrada; azul, activaciones de red abstractas; verde, datos de salida. Las esferas de colores representan coordenadas de átomos físicos.

Por ejemplo, para reducir la cantidad de procesamiento de MSA, AlphaFold 3 reemplaza el Evoformer de AlphaFold 2 con un nuevo módulo Pairformer que tiene un bloque de incrustación de MSA más pequeño y simple. Algunos de los avances de AlphaFold 3, notablemente sus predicciones de rendimiento mejoradas de complejos antígeno-anticuerpo, están directamente relacionados con su menor dependencia de la señal de MSA. Sin embargo, para la predicción de la estructura de proteínas, AlphaFold 3 aún hace un uso intensivo de datos co-evolutivos del MSA.

Crucialmente, AlphaFold 3 predice las coordenadas de átomos individuales dentro de un complejo. Esto es distinto de AlphaFold 2, que predijo las posiciones de los residuos de aminoácidos y sus cadenas laterales. El nuevo enfoque le da a AlphaFold 3 la flexibilidad computacional para abordar diferentes tipos de moléculas.

### Tokenización

Un cambio adicional en AlphaFold 3, en comparación con AlphaFold 2, es cómo el sistema subdivide un complejo. Ambos dividen el complejo de interés en “tokens”. En AlphaFold 2, los tokens corresponden directamente a aminoácidos, reflejando el enfoque estricto del sistema en las estructuras de proteínas. En contraste, AlphaFold 3 está diseñado para modelar eficazmente moléculas químicamente diferentes, desde iones y pequeños ligandos hasta macromoléculas hechas de cientos de aminoácidos o nucleótidos. Un enfoque de un token por átomo para toda la estructura, incluyendo proteínas y ácidos nucleicos, ofrecería la máxima flexibilidad: sin embargo, las limitaciones de memoria necesitan un compromiso.

Por lo tanto, la estrategia de tokenización de AlphaFold 3 equilibra la necesidad de flexibilidad requerida para pequeñas moléculas con la practicidad computacional. Por lo tanto, un token puede corresponder a:

* Un aminoácido estándar en la cadena de proteínas
* Un nucleótido estándar en la cadena de ácidos nucleicos
* Un átomo de un ligando
* Un átomo de un ion
* Un átomo de un residuo de aminoácido o nucleótido químicamente modificado. Para predecir la estructura de un residuo de aminoácido o nucleótido químicamente modificado, AlphaFold 3 tokenizará todo el residuo/nucleótido como átomos. En otras palabras, estos se tratan más como ligandos que como aminoácidos o nucleótidos estándar.

Para entender esto, considera una estructura compuesta por 100 residuos de aminoácidos y un ligando que contiene 20 átomos. AlphaFold 3 representará esta estructura utilizando 100 + 20 = 120 tokens. Esto es importante porque las métricas de confianza como PAE (consulta la subsección “[Interpreting results from AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/interpreting-results-from-alphafold-server/)“) ahora se calculan para tokens en lugar de aminoácidos.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/tokens.png)

Figura 36. Ilustrando la tokenización. Aquí, tres residuos de aminoácidos toman tres tokens para modelar; tres nucleótidos toman tres tokens también, y un ácido cítrico toma 13 tokens, para 13 átomos no hidrógeno en este ligando.

### Difusión

AlphaFold 3 predice las coordenadas atómicas brutas utilizando un módulo de difusión, lo que lo convierte en un modelo de ML “generativo”. Los modelos generativos crean nuevos datos similares a los ejemplos que aprenden: en el caso de AlphaFold 3, estructuras del Protein Data Bank. Esto contrasta con los modelos no generativos como AlphaFold 2, que identifican patrones en los datos existentes.

La difusión es una técnica estándar en el aprendizaje automático. Primero, un conjunto de datos con alta información se distorsiona con diferentes niveles de ruido aleatorio; posteriormente, la red neuronal aprende a restaurarlo a los datos originales. El sistema utiliza una descripción de acondicionamiento para cada ejemplo que debe ser restaurado. Por ejemplo, al generar imágenes, un acondicionamiento típico podría ser una descripción de texto de la imagen final. Durante el entrenamiento, la red aprende a generar datos plausibles para ajustarse a cualquier acondicionamiento dado, dando pasos incrementales desde el ruido puro hasta la salida final.

En AlphaFold 3, el módulo de difusión se entrenó para recibir coordenadas atómicas “ruidosas” y predecir las coordenadas correctas. La información de acondicionamiento es la información de secuencia para la molécula o complejo objetivo.

Para más detalles sobre la mecánica interna de AlphaFold 3, consulta el Material Suplementario del artículo de AlphaFold 3 ([Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).

## Descripción general de las salidas de AlphaFold 3

AlphaFold 3 produce la estructura predicha de una proteína o complejo, devolviendo las coordenadas de todos los átomos en el formato mmCIF. Por defecto, AlphaFold 3 genera cinco estructuras predichas a partir de una sola semilla. Estas se generan muestreando el proceso de difusión cinco veces.

Al igual que con AlphaFold 2, AlphaFold 3 proporciona múltiples métricas de confianza para ayudarte a evaluar críticamente sus predicciones:

* **Predicted LDDT (pLDDT):** las coordenadas atómicas predichas van acompañadas de puntuaciones pLDDT. Estas reflejan la confianza local de AlphaFold 3 en la predicción de la posición de ese átomo en particular.
* **Predicted Aligned Error (PAE) scores y un gráfico PAE:** una indicación de la confianza de AlphaFold en el empaquetamiento y las posiciones relativas de dominios, cadenas moleculares como proteínas y ADN, y otras entidades como ligandos e iones.
* **Predicted TM (pTM) score:** una métrica de un solo valor que refleja la precisión de la estructura predicha en general.
* **Interface-predicted TM (ipTM) score:** mide la precisión de las predicciones de un componente del complejo en relación con los otros componentes del complejo.
* **Per chain pTM y per-chain pair ipTM:** confianza en cadenas individuales o pares de cadenas.
