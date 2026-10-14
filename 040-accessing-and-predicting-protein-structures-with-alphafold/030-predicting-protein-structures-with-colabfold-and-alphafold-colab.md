---
layout: default
title: 'Prediciendo estructuras de proteínas con ColabFold y AlphaFold2 Colab'
---

# Prediciendo estructuras de proteínas con ColabFold y AlphaFold2 Colab

**ColabFold y AlphaFold2 Colab te permiten predecir estructuras de proteínas sin instalar y ejecutar el software completo de AlphaFold2. Son buenas opciones si necesitas una forma rápida y sencilla de empezar con AlphaFold2, si solo necesitas predecir unas pocas estructuras, o si no tienes acceso a un recurso informático potente.**

## **ColabFold y AlphaFold2 Colab: Una visión general y comparación**

ColabFold y AlphaFold2 Colab son implementaciones online de AlphaFold2. Todas las operaciones tienen lugar en la nube, por lo que puedes usar el software sin instalarlo en tu propio ordenador. Ambos sistemas se basan en [Colab](https://colab.research.google.com/) (abreviatura de Colaboratory): un sistema que te permite escribir y ejecutar Python en tu navegador.

* El [AlphaFold2 Colab](https://colab.sandbox.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb) es una versión simplificada de AlphaFold2. Solo utiliza una parte del conjunto de datos [BFD](https://bfd.mmseqs.com/) (Big Fantastic Database) y no utiliza estructuras homólogas como plantillas. Como resultado, su precisión es ligeramente inferior a la de la versión completa de AlphaFold2. Los usuarios tampoco pueden personalizar las predicciones de estructura variando los parámetros.
* [ColabFold](https://colab.sandbox.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb) es una implementación comunitaria de un Colab para ejecutar AlphaFold2. Ofrece muchos más parámetros ajustables que AlphaFold2 Colab, como la profundidad del MSA y el número de ciclos. Además, ColabFold utiliza una preparación rápida de MSA a través del servidor [MMseqs2](https://github.com/soedinglab/mmseqs2). También puedes usar un MSA personalizado como entrada y proporcionar plantillas ([Mirdita et al, 2022](https://doi.org/10.1038/s41592-022-01488-1)).

Por lo tanto, recomendamos usar ColabFold porque es más potente que AlphaFold2 Colab. Muchos estudios que utilizaron el modelado de AlphaFold2, publicados en revistas de primer nivel, en realidad utilizaron ColabFold (por ejemplo, [Healy et al., 2023](https://doi.org/10.1016/j.cell.2023.04.003)).

## **Cómo ejecutar ColabFold y AlphaFold2 Colab**

Ambas aplicaciones ofrecen una interfaz sencilla: esencialmente, un formulario para rellenar. Para AlphaFold2 Colab, solo se requiere la secuencia de la proteína. ColabFold también ofrece algunas opciones adicionales. El último paso es ir al menú “Runtime” y elegir “Run all”.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/AlphaFold_Colab_and_ColabFold.gif)

Figura 24. Puedes predecir estructuras de proteínas online usando ColabFold o AlphaFold2 Colab. Estas opciones no requieren que instales el código fuente de AlphaFold2.

Ejecutar los Colabs y generar la predicción puede tardar minutos u horas, dependiendo de la longitud de tu proteína y del tipo de GPU que te asigne Colab.

Para obtener más detalles sobre cómo usar las opciones más avanzadas de ColabFold, consulta el artículo original de ColabFold ([Mirdita et al., 2022](https://doi.org/10.1038/s41592-022-01488-1)), la [documentación](https://github.com/sokrypton/ColabFold) de ColabFold y la sección “[Modelado avanzado y aplicaciones de estructuras de proteínas predichas](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/)“.

Ten en cuenta que los usuarios avanzados con hardware de GPU de última generación pueden configurar un [Colab local](https://github.com/YoshitakaMo/localcolabfold). Esto te permite ejecutar ColabFold, utilizando la potencia de procesamiento de tu propia GPU. Esta podría ser una alternativa más fácil a la configuración de una instalación completa de AlphaFold2 de código abierto.

## **Limitaciones de ColabFold y AlphaFold2 Colab:**

En ambos casos, existen límites en el tamaño de la proteína (medido por el número de residuos de aminoácidos) que se puede predecir. Las restricciones se establecen principalmente por la cantidad de RAM disponible en la GPU gratuita proporcionada por Colab. Existe un máximo de 4.000 residuos para predecir modelos multiméricos. El modelo monomérico tiene un límite de 2.500 residuos.

La plataforma Google Colab que ejecuta tanto ColabFold como AlphaFold2 Colab proporciona a los usuarios una cantidad limitada de recursos computacionales de forma gratuita. Los notebooks de Colab en el nivel gratuito se agotan después de un cierto tiempo. Sin embargo, puedes obtener acceso a un [Google Colab Pro](https://colab.research.google.com/signup) para GPUs.
