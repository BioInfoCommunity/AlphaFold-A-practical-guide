---
layout: default
title: 'Con qué tiene problemas AlphaFold 3'
---

# Con qué tiene dificultades AlphaFold 3

AlphaFold 3 puede modelar entidades químicamente diferentes como proteínas, moléculas pequeñas e iones metálicos. Por lo tanto, explora un espacio químico mucho más amplio que solo proteínas. No obstante, AlphaFold 3 todavía tiene limitaciones.

Una limitación clave de los modelos de predicción de la estructura de proteínas es que típicamente predicen estructuras estáticas como las que se ven en el Protein Data Bank (PDB), y no capturan el comportamiento dinámico de los sistemas biomoleculares en solución. AlphaFold 3 no es una excepción: predice una única estructura para una secuencia(s) particular. Es posible aumentar la variabilidad de las estructuras predichas modificando el MSA y utilizando múltiples semillas; sin embargo, no hay garantía de que esto produzca estados estructurales adicionales de las moléculas objetivo.

En algunos casos, el estado conformacional modelado puede no ser correcto dado los ligandos y otras entradas especificadas. Por ejemplo, las ligasas de ubiquitina E3 adoptan nativamente una conformación abierta en un estado apo (libre de ligandos) y solo se observan en una conformación cerrada cuando están en un estado holo (ligado al ligando). No obstante, AlphaFold 3 predice la conformación cerrada tanto para los estados holo como apo ([Abramson et al, 2024](https://doi.org/10.1038/s41586-024-07487-w)).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-12.14.06-1024x468.png)

Figura 37: Conformaciones de cereblona y predicciones de AlphaFold 3. Las estructuras de referencia (gris) muestran la cereblona en sus conformaciones abierta (apo, PDB: [8CVP](https://www.wwpdb.org/pdb?id=pdb_00008cvp); izquierda) y cerrada (holo ligada a mezigdomida, PDB: [8D7U](https://www.wwpdb.org/pdb?id=pdb_00008d7u); derecha). Las predicciones de AlphaFold 3 (azul) para ambas conformaciones están consistentemente en el estado cerrado, con 10 muestras superpuestas para la predicción apo. Las líneas discontinuas resaltan la distancia entre los dominios Lon proteasa-like N-terminal y de unión a talidomida C-terminal.

Todavía hay algunos objetivos con los que AlphaFold 3 tiene dificultades para modelar. Una clase desafiante son las proteínas huérfanas, que carecen de homólogos basados en la secuencia conocidos, lo que impide que AlphaFold 3 construya MSAs suficientemente profundos. En tales casos, una forma de obtener la mayor precisión es generar un gran número de predicciones y clasificarlas. Esto es notablemente efectivo para los complejos anticuerpo-antígeno: las predicciones de mayor rango siguen mejorando a medida que se agregan más semillas de modelo, incluso en 1,000 semillas. Sin embargo, este enfoque conlleva costos computacionales.

La arquitectura de modelo actualizada significa que AlphaFold 3 a veces produce categorías de error que no se vieron en AlphaFold 2. Crucialmente, AlphaFold 3 es un modelo generativo, mientras que AlphaFold 2 era no generativo. Como resultado, a veces predice un orden estructural espurio (alucinaciones) en regiones desordenadas. Las regiones alucinadas generalmente se marcan como de muy baja confianza, con puntajes pLDDT muy por debajo de 50. Sin embargo, pueden carecer de la apariencia similar a una cinta que AlphaFold 2 produce en regiones desordenadas, por ejemplo, formando estructuras alfa-helicoidales en su lugar. En ausencia de esta apariencia reveladora, el bajo pLDDT es el principal marcador de las partes alucinatorias de la estructura. Ten en cuenta que las alucinaciones son bastante raras (ver la Figura de Datos Extendidos 1 de [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-13.58.55.png)

Figura 38. Predicción del complejo del poro nuclear con AlphaFold 3. Se muestra la estructura real (izquierda) de un complejo del poro nuclear (PDB: [7F60](https://www.wwpdb.org/pdb?id=pdb_00007f60)) con 1.854 residuos no resueltos, junto con las predicciones de AlphaFold-Multimer v.2.3 (medio) y AlphaFold 3 (derecha). Mientras que las regiones alucinadas de AlphaFold 3 en áreas desordenadas se indican típicamente por puntuaciones de confianza muy bajas, a veces pueden formar estructuras ordenadas (por ejemplo, alfa-hélices) en lugar de la apariencia similar a una cinta característica de las predicciones de regiones desordenadas de AlphaFold 2.

AlphaFold 3 no siempre respeta la quiralidad al predecir las conformaciones de moléculas pequeñas. En el *benchmark* PoseBusters, tiene una tasa de violación de la quiralidad del 4,4% ([Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).

AlphaFold 3 puede predecir ocasionalmente átomos superpuestos (que chocan). Esto a veces se manifiesta como violaciones extremas en proteínas con dos o más cadenas idénticas (homómeros), en las que se predice falsamente que cadenas enteras se superponen. Sin embargo, este tipo de error solo se observa raramente en complejos grandes con más de 2.000 *tokens*.
