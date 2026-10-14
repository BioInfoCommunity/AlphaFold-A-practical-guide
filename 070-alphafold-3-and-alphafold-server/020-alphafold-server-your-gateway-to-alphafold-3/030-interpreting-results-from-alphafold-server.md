---
layout: default
title: 'Interpretando resultados de AlphaFold Server'
---

# Interpretando los resultados de AlphaFold Server

**Junto con las estructuras predichas, AlphaFold 3 proporciona una variedad de métricas de confianza, lo que te permite evaluar la precisión de las predicciones. Las métricas de confianza son similares a las utilizadas por AlphaFold 2.**

Sin embargo, dado que AlphaFold 3 predice las estructuras de complejos multimoleculares, hay factores adicionales a considerar. AlphaFold 3 no está diseñado, validado ni aprobado para su uso clínico.

## **Salidas proporcionadas por AlphaFold Server**

AlphaFold Server produce cinco predicciones por trabajo. (Técnicamente, cinco muestras de difusión por semilla, pero actualmente cada trabajo ejecuta una semilla.)

La predicción mejor clasificada se muestra en la página de resultados. Las estructuras predichas se clasifican utilizando la métrica *ranking\_score*. Esta utiliza dos medidas de confianza en la estructura general (pTM e ipTM), pero también incluye términos que penalizan las colisiones y fomentan que las regiones desordenadas no tengan hélices espurias. Estos términos adicionales significan que *ranking\_score* solo debe usarse para clasificar estructuras.

Todas las cinco muestras, junto con sus confianzas asociadas, están disponibles para descargar como un archivo zip. Este contiene:

* Cinco archivos .cif nombrados **fold\_<job\_name>\_model\_<N>cif**, donde “<N>” es la clasificación de la estructura predicha. Las estructuras se clasifican de 0 a 4, donde 0 tiene la mayor confianza. Los archivos .cif contienen estructuras predichas en el formato mmCIF. Se pueden ver en cualquier visor molecular como PyMOL o ChimeraX.
* Cinco archivos .json nombrados **fold\_<job\_name>\_summary\_confidences\_<N>.json**, donde “<N>” es la clasificación de la estructura predicha de 0 a 4. Estos archivos .json contienen resúmenes de las métricas de confianza para las predicciones (consulta más detalles sobre las métricas de confianza a continuación).
* Cinco archivos .json nombrados **fold\_<job\_name>\_full\_data\_<N>.json**, donde “<N>” es la clasificación de la estructura predicha de 0 a 4. Estos archivos .json contienen métricas de confianza detalladas, como datos completos de PAE, para las predicciones (consulta más sobre las métricas de confianza a continuación).
* Un archivo nombrado **fold\_<job\_name>\_job\_request.json**. Este contiene las entradas del trabajo de modelado y podría usarse para volver a ejecutar el trabajo (para más detalles, consulta “[Uso avanzado de AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-features-of-alphafold-server/)“).
* Un archivo nombrado **terms\_of\_use.md**. Este es un documento legal que detalla los términos de uso para las predicciones.

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

Algunas de las métricas en los archivos JSON son muy directas: por ejemplo, el registro “ptm” contiene la puntuación pTM general. Sin embargo, algunas otras métricas están más orientadas a usuarios avanzados. Se proporcionan explicaciones completas de las métricas de confianza en secciones posteriores.

Archivos JSON con resúmenes de salida contienen la siguiente información:

* ***chain\_iptm*:** A [num\_chains] array that gives the average confidence (ipTM) in the interfaces between each chain and all other chains. This can be used for ranking predicted structures for a specific chain, when you care about where the chain binds to the rest of the complex and you do not know which other chains you expect it to interact with. This is often the case with ligands, each of which the system treats as a separate chain.
* ***chain\_pair\_iptm*:** A square [num\_chains, num\_chains] array representing pairwise ipTM scores. The off-diagonal element (i, j) of the array contains the ipTM restricted to tokens from chains i and j. The diagonal element (i, i) contains the pTM restricted to chain i. The array can be used for ranking predictions of a structure by the accuracy of a specific interface between two chains that you know interact, e.g. antibody-antigen interactions. As these values are calculated based on tokens, this metric also encompasses small molecules and chemically-modified residues and nucleotides.
* ***chain\_pair\_pae\_min***: A square [num\_chains, num\_chains] array of PAE values. Element (i, j) of the array contains the lowest PAE value across rows restricted to chain i and columns restricted to chain j. This has been found to correlate with whether or not two chains interact, so it can be used to distinguish interacting and non-interacting molecules. As these values are calculated based on tokens, this metric also encompasses small molecules and chemically-modified residues and nucleotides.
* ***c******hain\_ptm*:** A [num\_chains] array. Element i contains the pTM restricted to chain i. This can be used for ranking the predicted structures of individual chains when you are most interested in the structure of that chain, rather than its cross-chain interactions.
* ***fraction\_disordered*:** A scalar in the range 0-1 that indicates what fraction of the prediction structure is disordered, as measured by accessible surface area (see [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w) for details).
* ***has\_clash*:** A Boolean, i.e. a yes/no value, indicating if the structure has a significant number of clashing atoms (more than 50% of a chain, or a chain with more than 100 clashing atoms).
* ***iptm*:** A scalar in the range 0-1 indicating predicted interface TM-score (confidence in the predicted interfaces) for all interfaces in the structure.*num\_recycles: An integer number that represents the total number of recycles.*
* ***ptm*:** A scalar in the range 0-1 indicating the predicted TM-score for the full structure.
* ***ranking\_score*****:** A scalar ranging from -100 to 1.5 that can be used for ranking predictions. It combines *ptm*, *iptm*, *fraction\_disordered* and *has\_clash* into a single number with the following equation:

0.8 × ipTM + 0.2 × pTM + 0.5 × desorden − 100 × tiene\_choque

Los archivos JSON con salidas completas contienen la siguiente información:

* ***atom\_chain\_ids*:** Un array [num\_atoms] que indica los IDs de cadena correspondientes a cada átomo en la predicción.
* ***atom\_plddts*:** Un array [num\_atoms]. El elemento i indica el test de diferencia de distancia local predicho (pLDDT) para el átomo i en la predicción.
* ***contact\_probs*:** Un array cuadrado [num\_tokens, num\_tokens]. El elemento (i, j) indica la probabilidad predicha de que el token i y el token j estén en contacto, donde “en contacto” se define como una distancia máxima de 8Å entre un átomo representativo definido por el sistema para cada token (para detalles, consulta [Abramson et al., 2024](https://doi.org/10.1038/s41586-024-07487-w)).
* ***pae*:** Un array cuadrado [num\_tokens, num\_tokens]. El elemento (i, j) indica el error alineado predicho (PAE) en la posición del token j, cuando la predicción se alinea con la verdad terrenal utilizando el marco del token i.
* ***token\_chain\_ids*:** Un array [num\_tokens] que indica los IDs de cadena correspondientes a cada token en la predicción.
* **token\_res\_ids:** Un array [num\_res].

Los archivos JSON con salidas completas (**fold\_<job\_name>\_full\_data\_<N>.json**) se pueden usar con herramientas como la última versión de [ChimeraX](https://www.rbvi.ucsf.edu/chimerax/) o [PAE Viewer](https://subtiwiki.uni-goettingen.de/v4/paeViewerDemo). De esta manera, puedes visualizar gráficos dinámicos de PAE y hacer coincidir los datos de PAE con las estructuras predichas almacenadas en los archivos **fold\_<job\_name>\_model\_<N>.cif**.
