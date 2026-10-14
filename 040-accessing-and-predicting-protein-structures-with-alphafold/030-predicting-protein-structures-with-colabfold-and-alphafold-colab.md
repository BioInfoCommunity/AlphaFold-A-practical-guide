---
layout: default
title: 'Predecir estructuras de proteínas con ColabFold y AlphaFold2 Colab'
---

# Predecir estructuras de proteínas con ColabFold y AlphaFold2 Colab

**ColabFold y AlphaFold2 Colab te permiten predecir estructuras de proteínas sin instalar y ejecutar el software completo de AlphaFold2. Son buenas opciones si necesitas una manera rápida y fácil de empezar con AlphaFold2, si solo necesitas predecir unas pocas estructuras, o si no tienes acceso a un recurso de computación potente.**

## **ColabFold y AlphaFold2 Colab: Una visión general y comparación**

ColabFold y AlphaFold2 Colab son implementaciones en línea de AlphaFold2. Todas las operaciones se realizan en la nube, por lo que puedes usar el software sin instalarlo en tu propia computadora. Ambos sistemas se basan en [Colab](https://colab.research.google.com/) (abreviatura de Colaboratorio): un sistema que te permite escribir y ejecutar Python en tu navegador.

* El [AlphaFold2 Colab](https://colab.sandbox.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb) es una versión simplificada de AlphaFold2. Solo utiliza una parte del conjunto de datos [BFD](https://bfd.mmseqs.com/) (Big Fantastic Database) y no utiliza estructuras homólogas como plantillas. Como resultado, su precisión es ligeramente menor que la versión completa de AlphaFold2. Los usuarios tampoco pueden personalizar las predicciones de estructuras variando los parámetros.
* [ColabFold](https://colab.sandbox.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb) es una implementación comunitaria de un Colab para ejecutar AlphaFold2. Ofrece muchos más parámetros ajustables que AlphaFold2 Colab, como la profundidad de la MSA y el número de reciclajes. Además, ColabFold utiliza una preparación rápida de MSA a través del servidor [MMseqs2](https://github.com/soedinglab/mmseqs2). También puedes usar una MSA personalizada como entrada y proporcionar plantillas ([Mirdita et al, 2022](https://doi.org/10.1038/s41592-022-01488-1)).

Por lo tanto, te recomendamos usar ColabFold porque es más potente que AlphaFold2 Colab. Muchos estudios que utilizaron el modelado de AlphaFold2, publicados en revistas de primer nivel, en realidad utilizaron ColabFold (por ejemplo, [Healy et al., 2023](https://doi.org/10.1016/j.cell.2023.04.003)).

## **Cómo ejecutar ColabFold y AlphaFold2 Colab**

Ambas aplicaciones ofrecen una interfaz sencilla: esencialmente, un formulario para llenar. Para AlphaFold2 Colab, solo se requiere la secuencia de proteínas. ColabFold también ofrece algunas opciones adicionales. El paso final es ir al menú “Runtime” y elegir “Run all”.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/AlphaFold_Colab_and_ColabFold.gif)

Figura 24. Puedes predecir estructuras de proteínas en línea usando ColabFold o AlphaFold2 Colab. Estas opciones no requieren que instales el código fuente de AlphaFold2.

Ejecutar los Colabs y generar la predicción puede llevar minutos a horas, dependiendo de la longitud de tu proteína y del tipo de GPU asignado por Colab.

Para obtener detalles sobre el uso de las opciones más avanzadas de ColabFold, consulta el artículo original de ColabFold ([Mirdita et al., 2022](https://doi.org/10.1038/s41592-022-01488-1)), la [documentación de ColabFold](https://github.com/sokrypton/ColabFold), y la sección “[Modelado avanzado y aplicaciones de estructuras de proteínas predichas](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/)”.

Ten en cuenta que los usuarios avanzados con hardware de GPU de vanguardia pueden configurar un [local Colab](https://github.com/YoshitakaMo/localcolabfold). Esto te permite ejecutar ColabFold, utilizando el poder de procesamiento de tu propia GPU. Esto podría ser una alternativa más fácil a configurar una instalación completa de AlphaFold2 de código abierto.

## **Limitaciones de ColabFold y AlphaFold2 Colab:**

En ambos casos, hay límites en el tamaño de la proteína (medido por el número de residuos de aminoácidos) que se puede predecir. Las restricciones se establecen principalmente por la cantidad de RAM disponible en la GPU gratuita proporcionada por Colab. Hay un máximo de 4,000 residuos para predecir modelos de multimero. El modelo de monómero tiene un límite de 2,500 residuos.

La plataforma Google Colab que ejecuta tanto ColabFold como AlphaFold2 Colab proporciona a los usuarios una cantidad limitada de recursos computacionales de forma gratuita. Los cuadernos de Colab en el nivel gratuito se agotan después de un cierto tiempo. Sin embargo, puedes obtener acceso a un [Google Colab Pro](https://colab.research.google.com/signup) para GPUs.
