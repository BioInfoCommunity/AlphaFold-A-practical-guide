---
layout: default
title: 'AlphaFold2 entradas y salidas &#8211; Resumen'
---

# Entradas y salidas de AlphaFold2 &#8211; Resumen

**La única entrada requerida es la secuencia de aminoácidos de tu proteína de interés. Sin embargo, también puedes proporcionar datos adicionales para guiar la predicción de la estructura de AlphaFold2. AlphaFold2 producirá la estructura predicha de la proteína, acompañada de puntuaciones de confianza como pLDDT y PAE.**

## **Entradas de AlphaFold2**

Para obtener una estructura predicha para una proteína, solo necesitas proporcionar a AlphaFold2 su secuencia de aminoácidos. No se requieren otras entradas.

Sin embargo, la calidad de la estructura predicha depende de la calidad del alineamiento múltiple de secuencias (MSA), que se genera en función de los datos de secuencia de proteínas. Los MSAs construidos con el mecanismo predeterminado suelen funcionar bastante bien, pero podría haber casos excepcionalmente difíciles (consulta la sección “[Fortalezas y limitaciones de AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/an-introductory-guide-to-its-strengths-and-limitations/strengths-and-limitations-of-alphafold/)“).

Si crees que el MSA generado a partir de la secuencia de tu proteína objetivo no es óptimo, puedes proporcionar tu propio MSA, generado con tus herramientas favoritas (consulta la sección “[Personalizar predicciones de estructuras de AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/customising-alphafold-structure-predictions/)“).

Alternativamente, puedes guiar el modelado proporcionando a AlphaFold2 estructuras de plantilla de proteína(s) relacionadas con la proteína objetivo. Por ejemplo, las plantillas podrían usarse para modelar una proteína en un estado particular (consulta la sección “[Personalizar predicciones de estructuras de AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/customising-alphafold-structure-predictions/)“).

Los parámetros predeterminados de AlphaFold2 tienden a funcionar bien para la mayoría de las proteínas. Sin embargo, para casos difíciles, podría ser beneficioso ajustar ciertos parámetros. Por ejemplo, podrías aumentar el número de reciclajes o realizar varias predicciones comenzando desde diferentes semillas aleatorias (consulta la sección “[Personalizar predicciones de estructuras de AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/customising-alphafold-structure-predictions/)“).

Otros programas como ColabFold, que se construye sobre AlphaFold2, introducen parámetros adicionales para controlar AlphaFold2 (consulta la sección “[Predecir estructuras de proteínas con ColabFold y AlphaFold Colab](https://www.ebi.ac.uk/training/online/courses/alphafold/accessing-and-predicting-protein-structures-with-alphafold/predicting-protein-structures-with-colabfold-and-alphafold-colab/)“).

## **Salidas de AlphaFold2**

La salida principal de la red neuronal de AlphaFold2 es la estructura predicha de la proteína o complejo proteico. Se guarda en dos formatos estándar: PDB y mmCIF.

Las coordenadas atómicas van acompañadas de puntuaciones pLDDT, que reflejan la confianza local de la predicción. pLDDT también se guarda en el mismo archivo PDB o mmCIF, en el campo de factores B. Esto significa que puedes usar programas de gráficos moleculares como PyMOL para codificar por colores la estructura predicha según las puntuaciones pLDDT (consulta el [FAQ de ColabFold](https://github.com/sokrypton/ColabFold#faq) para las instrucciones).

AlphaFold2 también proporciona PAE: una indicación de su confianza en el empaquetamiento y las posiciones relativas de los dominios. PAE se escribe por separado como un archivo JSON y se puede visualizar como un gráfico PAE.

Para el modelado de multimers, se proporcionan dos puntuaciones adicionales. pTM evalúa la precisión de la estructura general del complejo, mientras que ipTM mide la precisión de las predicciones de la interfaz entre las subunidades del complejo proteína-proteína. Las puntuaciones pTM e ipTM se escriben en los archivos de registro y se guardan en el archivo JSON de salida ([consulta la documentación](https://github.com/google-deepmind/alphafold/blob/main/README.md)).
