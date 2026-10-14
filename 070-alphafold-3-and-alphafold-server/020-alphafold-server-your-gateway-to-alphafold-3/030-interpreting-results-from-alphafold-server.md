---
layout: default
title: 'Interpretando los resultados de AlphaFold Server'
---

# Interpretando los resultados de AlphaFold Server

**Junto con las estructuras predichas, AlphaFold 3 proporciona una variedad de métricas de confianza, lo que te permite evaluar la precisión de las predicciones. Las métricas de confianza son similares a las utilizadas por AlphaFold 2.**

Sin embargo, dado que AlphaFold 3 predice las estructuras de complejos multimoleculares, hay factores adicionales a considerar. AlphaFold 3 no está destinado, validado ni aprobado para uso clínico.

## **Resultados proporcionados por AlphaFold Server**

AlphaFold Server produce cinco predicciones por trabajo. (Técnicamente, cinco muestras de difusión por semilla, pero actualmente cada trabajo se ejecuta con una semilla).

La predicción con la mejor puntuación se muestra en la página de resultados. Las estructuras predichas se clasifican utilizando la métrica *ranking\_score*. Esto utiliza dos medidas de confianza en la estructura general (pTM e ipTM), pero también incluye términos que penalizan las colisiones y animan a que las regiones desordenadas no tengan hélices espurias. Estos términos adicionales significan que *ranking\_score* solo debe utilizarse para clasificar estructuras.

Las cinco muestras, junto con sus confianzas asociadas, están disponibles para descargar como un archivo zip. Este contiene:

* Cinco archivos .cif con el nombre **fold\_<job\_name>\_model\_<N>cif**, donde “<N>” es el rango de la estructura predicha. Las estructuras se clasifican de 0 a 4, donde 0 tiene la mayor confianza. Los archivos .cif contienen estructuras predichas en formato mmCIF. Se pueden visualizar en cualquier visor molecular como PyMOL o ChimeraX.
* Cinco archivos .json con el nombre **fold\_<job\_name>\_summary\_confidences\_<N>.json**, donde “<N>” es el rango de la estructura predicha de 0 a 4. Estos archivos .json contienen resúmenes de las métricas de confianza para las predicciones (consulta más abajo para obtener más detalles sobre las métricas de confianza).
* Cinco archivos .json con el nombre **fold\_<job\_name>\_full\_data\_<N>.json**, donde “<N>” es el rango de la estructura predicha de 0 a 4. Estos archivos .json contienen métricas de confianza detalladas, como datos completos de PAE, para las predicciones (consulta más abajo para obtener más información sobre las métricas de confianza).
* Un archivo con el nombre **fold\_<job\_name>\_job\_request.json**. Este contiene las entradas del trabajo de modelado y podría utilizarse para volver a ejecutar el trabajo (para obtener más detalles, consulta “[Uso avanzado de AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-features-of-alphafold-server/)“).
* Un archivo con el nombre **terms\_of\_use.md**. Este es un documento legal que detalla los términos de uso de las predicciones.

JSON es un formato basado en texto, por lo que es legible tanto para humanos como para máquinas. Puedes comprobar los archivos JSON con cualquier editor de texto o utilizar un sistema de programación como Python para leer y visualizar los resultados.

```
{
 "chain_iptm": [
  0.85,
  0.86,
  0.59,
  0.59
 ],
 "chain_pair_iptm": [
  [
   0.82,
   0.9,
   0.83,
   0.83
  ],
  [
   0.9,
   0.82,
   0.83,
   0.84
  ],
  [
   0.83,
   0.83,
   0.03,
   0.1
  ],
  [
   0.83,
   0.84,
   0.1,
   0.03
  ]
 ],
 "chain_pair_pae_min": [
  [
   0.76,
   0.79,
   1.0,
   1.12
  ],
  [
   0.79,
   0.76,
   1.11,
   1.0
  ],
  [
   0.98,
   1.06,
   0.78,
   0.92
  ],
  [
   1.05,
   0.97,
   0.92,
   0.78
  ]
 ],
 "chain_ptm": [
  0.82,
  0.82,
  0.03,
  0.03
 ],
 "fraction_disordered": 0.18,
 "has_clash": 0.0,
 "iptm": 0.91,
 "num_recycles": 10.0,
 "ptm": 0.91,
 "ranking_score": 1.0
}
```

Un ejemplo del contenido de un archivo fold\_\_summary\_confidences\_.json, mostrando múltiples métricas de confianza.

## **Métricas de confianza**

Algunas de las métricas en los archivos JSON son muy directas: por ejemplo, el registro “ptm” contiene la puntuación pTM general. Sin embargo, otras métricas están más dirigidas a usuarios avanzados. Explicaciones completas de las métricas de confianza se proporcionan en las secciones siguientes.

Los archivos JSON con salidas resumidas contienen la siguiente información:

* ***chain\_iptm*:** Un array de [num\_chains] que da la confianza promedio (ipTM) en las interfaces entre cada cadena y todas las demás cadenas. Esto se puede usar para clasificar las estructuras predichas para una cadena específica, cuando te importa dónde se une la cadena al resto del complejo y no sabes qué otras cadenas esperas que interactúen con ella. Este suele ser el caso con los ligandos, cada uno de los cuales el sistema trata como una cadena separada.
* ***chain\_pair\_iptm*:** Un array cuadrado de [num\_chains, num\_chains] que representa las puntuaciones ipTM por pares. El elemento fuera de la diagonal (i, j) del array contiene el ipTM restringido a los tokens de las cadenas i y j. El elemento diagonal (i, i) contiene el pTM restringido a la cadena i. El array se puede usar para clasificar las predicciones de una estructura por la precisión de una interfaz específica entre dos cadenas que sabes que interactúan, por ejemplo, las interacciones anticuerpo-antígeno. Como estos valores se calculan en base a los tokens, esta métrica también abarca moléculas pequeñas y residuos y nucleótidos modificados químicamente.
* ***chain\_pair\_pae\_min***: Un array cuadrado de [num\_chains, num\_chains] de valores PAE. El elemento (i, j) del array contiene el valor PAE más bajo en las filas restringidas a la cadena i y las columnas restringidas a la cadena j. Se ha descubierto que esto se correlaciona con si dos cadenas interactúan o no, por lo que se puede usar para distinguir moléculas que interactúan y que no interactúan. Como estos valores se calculan en base a los tokens, esta métrica también abarca moléculas pequeñas y residuos y nucleótidos modificados químicamente.
* ***chain\_ptm*:** Un array de [num\_chains]. El elemento i contiene el pTM restringido a la cadena i. Esto se puede usar para clasificar las estructuras predichas de cadenas individuales cuando estás más interesado en la estructura de esa cadena, en lugar de sus interacciones entre cadenas.
* ***fraction\_disordered*:** Un escalar en el rango de 0 a 1 que indica qué fracción de la estructura de la predicción está desordenada, según la superficie accesible (consulta [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w) para obtener más detalles).
* ***has\_clash*:** Un Booleano, es decir, un valor sí/no, que indica si la estructura tiene un número significativo de átomos que chocan (más del 50% de una cadena, o una cadena con más de 100 átomos que chocan).
* ***iptm*:** Un escalar en el rango de 0 a 1 que indica la puntuación TM de la interfaz predicha (confianza en las interfaces predichas) para todas las interfaces en la estructura. *num\_recycles*: Un número entero que representa el número total de reciclajes.
* ***ptm*:** Un escalar en el rango de 0 a 1 que indica la puntuación TM predicha para la estructura completa.
* ***ranking\_score*****:** Un escalar que varía de -100 a 1.5 que se puede usar para clasificar las predicciones. Combina *ptm*, *iptm*, *fraction\_disordered* y *has\_clash* en un solo número con la siguiente ecuación:

0.8 × ipTM + 0.2 × pTM + 0.5 × desorden − 100 × tiene\_colisión

Los archivos JSON con salidas completas contienen la siguiente información:

* ***atom\_chain\_ids*:** Un array de [num\_atoms] que indica los IDs de cadena correspondientes a cada átomo en la predicción.
* ***atom\_plddts*:** Un array de [num\_atoms]. El elemento i indica la prueba de diferencia de distancia local predicha (pLDDT) para el átomo i en la predicción.
* ***contact\_probs*:** Un array cuadrado de [num\_tokens, num\_tokens]. El elemento (i, j) indica la probabilidad predicha de que el token i y el token j estén en contacto, donde “en contacto” se define como una distancia máxima de 8Å entre un átomo representativo definido por el sistema para cada token (para más detalles, consulta [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).
* ***pae*:** Un array cuadrado de [num\_tokens, num\_tokens]. El elemento (i, j) indica el error alineado predicho (PAE) en la posición del token j, cuando la predicción se alinea con la verdad fundamental utilizando el marco del token i.
* ***token\_chain\_ids*:** Un array de [num\_tokens] que indica los IDs de cadena correspondientes a cada token en la predicción.
* **token\_res\_ids:** Un array de [num\_res].

Los archivos JSON con salidas completas (**fold\_<job\_name>\_full\_data\_<N>.json**) se pueden usar con herramientas como la última versión de [ChimeraX](https://www.rbvi.ucsf.edu/chimerax/) o [PAE Viewer](https://subtiwiki.uni-goettingen.de/v4/paeViewerDemo). De esta manera, puedes visualizar gráficos PAE dinámicos y hacer coincidir los datos PAE con las estructuras predichas almacenadas en los archivos **fold\_<job\_name>\_model\_<N>.cif**.
