---
layout: default
title: 'Otras herramientas para verificar la calidad de las estructuras predichas'
---

# Otras herramientas para verificar la calidad de las estructuras predichas

**Los usuarios que deseen evaluar aún más la calidad de las estructuras de proteínas predichas por AlphaFold2 pueden utilizar una variedad de herramientas de código abierto.**

## **Herramientas de código abierto para evaluar estructuras predichas**

Una opción es una herramienta de validación de biología estructural general como [MolProbity](http://molprobity.biochem.duke.edu/). Estas se utilizan para diagnosticar la “correctitud” en modelos 3D de proteínas, ácidos nucleicos o complejos. Los modelos de AlphaFold2 generalmente tienen una excelente calidad geométrica en las regiones de alta confianza. Sin embargo, si MolProbity marca alguna parte de la estructura, debes examinarla cuidadosamente.

Para complejos proteína-proteína, herramientas como [PISA](https://www.ebi.ac.uk/pdbe/pisa/) se pueden utilizar para evaluar aún más la calidad de la interfaz predicha. El software te permite verificar detalles como el área de superficie enterrada total y el número de enlaces de hidrógeno entre interfaces, lo que a su vez da una indicación de si la interfaz predicha corresponde a la realidad o es artificial. Ten en cuenta que los criterios de validación de PISA pueden tener algunas excepciones, por ejemplo, complejos fuertemente unidos de anticuerpo-antígeno podrían ser reportados como débilmente unidos por PISA.

El [PAE viewer](http://www.subtiwiki.uni-goettingen.de/v4/paeViewerDemo) es un servidor web diseñado para facilitar la interpretación de las puntuaciones PAE para predicciones multiméricas. La visualización resalta las violaciones y/o satisfacciones de las restricciones de longitud de los enlaces cruzados.
