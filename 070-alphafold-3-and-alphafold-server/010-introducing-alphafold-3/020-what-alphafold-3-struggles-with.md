---
layout: default
title: 'Lo que AlphaFold 3 tiene dificultades con'
---

# Con qué lucha AlphaFold 3

AlphaFold 3 puede modelar entidades químicamente diferentes como proteínas, pequeñas moléculas e iones metálicos. Por lo tanto, explora un espacio químico mucho más amplio que solo las proteínas. Sin embargo, AlphaFold 3 aún tiene limitaciones.

Una limitación clave de los modelos de predicción de la estructura de proteínas es que generalmente predicen estructuras estáticas como las vistas en el Banco de Datos de Proteínas (PDB) y no capturan el comportamiento dinámico de los sistemas biomoleculares en solución. AlphaFold 3 no es una excepción: predice una sola estructura para una secuencia particular(es). Es posible aumentar la variabilidad de las estructuras predichas modificando la MSA y utilizando múltiples semillas; sin embargo, no hay garantía de que esto produzca estados estructurales adicionales de las moléculas objetivo.

En algunos casos, el estado conformacional modelado puede no ser correcto dado los ligandos especificados y otras entradas. Por ejemplo, las ligasas E3 ubiquitin nativamente adoptan una conformación abierta en un estado apo (sin ligando) y solo se observan en una conformación cerrada cuando están en un estado holo (con ligando). Sin embargo, AlphaFold 3 predice la conformación cerrada para ambos estados holo y apo ([Abramson et al, 2024](https://doi.org/10.1038/s41586-024-07487-w)).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-12.14.06-1024x468.png)

Figura 37: Conformaciones de cereblon y predicciones de AlphaFold 3. Las estructuras de referencia (gris) muestran cereblon en su estado abierto (apo, PDB: [8CVP](https://www.wwpdb.org/pdb?id=pdb_00008cvp); izquierda) y cerrado (holo unido a mezigdomide, PDB: [8D7U](https://www.wwpdb.org/pdb?id=pdb_00008d7u); derecha). Las predicciones de AlphaFold 3 (azul) para ambas conformaciones están consistentemente en el estado cerrado, con 10 muestras superpuestas para la predicción apo. Las líneas discontinuas resaltan la distancia entre los dominios N-terminal Lon protease-like y C-terminal thalidomide-binding.

Aún hay algunos objetivos con los que AlphaFold 3 lucha para modelar. Una clase desafiante es las proteínas huérfanas, que carecen de homólogos conocidos basados en la secuencia, lo que impide que AlphaFold 3 construya MSAs lo suficientemente profundas. En tales casos, una forma de obtener la mayor precisión es generar un gran número de predicciones y clasificarlas. Esto es notablemente efectivo para los complejos anticuerpo-antígeno: las predicciones mejor clasificadas siguen mejorando a medida que se añaden más semillas de modelo, incluso a 1,000 semillas. Sin embargo, este enfoque conlleva costos computacionales.

La arquitectura del modelo actualizada significa que AlphaFold 3 a veces produce categorías de errores que no se vieron en AlphaFold 2. Lo más importante, AlphaFold 3 es un modelo generativo, mientras que AlphaFold 2 no lo era. Como resultado, a veces predice un orden estructural espurio (alucinaciones) en regiones desordenadas. Las regiones alucinadas generalmente se marcan con una muy baja confianza, con puntuaciones pLDDT bien por debajo de 50. Sin embargo, pueden carecer de la apariencia distintiva de cinta que AlphaFold 2 produce en regiones desordenadas, por ejemplo, formando estructuras alfa-helicoidales en su lugar. En ausencia de esta apariencia distintiva, la baja pLDDT es el principal marcador de las partes alucinatorias de la estructura. Ten en cuenta que las alucinaciones son bastante raras (consulta la Figura 1 de Datos Extendidos de [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-13.58.55.png)

Figura 38. Predicción de AlphaFold 3 de un complejo del poro nuclear. Se muestran la estructura real (izquierda) de un complejo del poro nuclear (PDB: [7F60](https://www.wwpdb.org/pdb?id=pdb_00007f60)) con 1,854 residuos no resueltos, junto con las predicciones de AlphaFold-Multimer v.2.3 (centro) y AlphaFold 3 (derecha). Aunque las regiones alucinadas de AlphaFold 3 en áreas desordenadas suelen estar indicadas por puntuaciones de confianza muy bajas, a veces pueden formar estructuras ordenadas (por ejemplo, hélices alfa) en lugar de la apariencia característica de cinta de las predicciones de regiones desordenadas de AlphaFold 2.

AlphaFold 3 no siempre respeta la quiralidad al predecir las conformaciones de pequeñas moléculas. En el banco de pruebas PoseBusters, tiene una tasa de violación de quiralidad del 4.4% ([Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).

AlphaFold 3 puede predecir ocasionalmente átomos superpuestos (en conflicto). Esto a veces se manifiesta como violaciones extremas en proteínas con dos o más cadenas idénticas (homómeros), en las que cadenas enteras se predicen falsamente como superpuestas. Sin embargo, este tipo de error solo se observa raramente en complejos grandes con más de 2,000 tokens.
