---
layout: default
title: 'Otras herramientas para revisar la calidad de las estructuras predichas'
---

# Otras herramientas para verificar la calidad de las estructuras predichas

**Si tú quieres evaluar más a fondo la calidad de las estructuras de proteínas predichas por AlphaFold2, puedes usar una variedad de herramientas de código abierto.**

## **Herramientas de código abierto para evaluar estructuras predichas**

Una opción es una herramienta de validación de biología estructural general como [MolProbity](http://molprobity.biochem.duke.edu/). Estas se utilizan para diagnosticar la “corrección” en modelos 3D de proteínas, ácidos nucleicos o complejos. Los modelos de AlphaFold2 generalmente tienen una excelente calidad geométrica en regiones de alta confianza. Sin embargo, si MolProbity señala alguna parte de la estructura, deberías examinarla cuidadosamente.

Para complejos proteína-proteína, herramientas como [PISA](https://www.ebi.ac.uk/pdbe/pisa/) pueden usarse para evaluar aún más la calidad de la interfaz predicha. El software te permite verificar detalles como el área de superficie enterrada total y el número de enlaces de hidrógeno interfaciales, lo que a su vez da una indicación de si la interfaz predicha corresponde a la realidad o es artificial. Ten en cuenta que los criterios de validación de PISA pueden tener algunas excepciones, por ejemplo, los complejos antígeno-anticuerpo fuertemente unidos podrían informarse como débilmente unidos por PISA.

El [visor de PAE](http://www.subtiwiki.uni-goettingen.de/v4/paeViewerDemo) es un servidor web diseñado para facilitar la interpretación de las puntuaciones de PAE para predicciones multiméricas. La visualización destaca las violaciones y/o satisfacciones de las restricciones de longitud del entrecruzador.
