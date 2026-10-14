---
layout: default
title: 'Glossario de términos'
---

# Glosario de términos

This glossary focuses on terms that are specific to AlphaFold and protein folding. For a wider set of terms used in protein biology and structural biology, we recommend the Protein Data Bank’s extensive [glossary](https://www.rcsb.org/docs/general-help/glossary).

* **AlphaFold Protein Structure Database (AFDB)**: una base de datos de más de 214 millones de estructuras de proteínas predichas por AlphaFold, creada colaborativamente por Google DeepMind y EMBL-EBI.
* **Aminoácido**: una pequeña molécula basada en carbono que sirve como bloque de construcción de las proteínas. Cada aminoácido contiene un grupo amino básico, un grupo carboxilo ácido y una cadena lateral de hidrógeno o orgánica unida al átomo de carbono central.
* **BigQuery**: el almacén de datos empresarial sin servidor y rentable de Google que funciona en la nube y escala con tus datos.
* **Critical Assessment of Structure Prediction (CASP)**: una prueba experimental de predicciones de estructuras de proteínas, que se ha llevado a cabo cada dos años desde 1994.
* **Cofactor**: un compuesto químico o ion metálico no proteico requerido para la actividad de una enzima.
* **Colab**: abreviatura de Colaboratorio. Un sistema que te permite escribir y ejecutar Python en tu navegador.
* **ColabFold**: una implementación comunitaria de un Colab para ejecutar AlphaFold y otras herramientas como RoseTTAFold.
* **Complejo**: una gran estructura molecular compuesta por dos o más moléculas, como varias proteínas, proteína(s) con ligando o proteína(s) con ácido nucleico. Un complejo compuesto únicamente de proteínas puede llamarse multímero.
* **Espectrometría de masa de reticulación (XL-MS)**: una técnica experimental para identificar regiones estructurales próximas dentro de una proteína. Una proteína objetivo se mezcla con reactivos que forman enlaces covalentes con ella. La proteína se digiere y las partes interaccionantes se identifican usando espectrometría de masa.
* **Microscopía electrónica criogénica (cryo-EM)**: microscopía electrónica realizada a una temperatura muy baja. Permite a los investigadores examinar grandes estructuras biomoleculares y complejos en estados casi fisiológicos.
* **Evoformer**: la red neuronal en el corazón de AlphaFold.
* **Distancia global desde la verdad terrenal (GDT\_TS)**: una medida de la precisión de una estructura de proteína predicha en comparación con la estructura determinada experimentalmente. Esta puntuación se usa en CASP. Las puntuaciones van de 0 (totalmente inexacta) a 100 (precisión perfecta).
* **Proteína intrínsecamente desordenada (IDP)**: una proteína que naturalmente no tiene una estructura tridimensional fija, sino que muestra un alto grado de flexibilidad. Algunas proteínas tienen regiones intrínsecamente desordenadas (IDRs) que se sitúan junto a regiones altamente estructuradas.
* **Modelado de plantilla de interfaz predicha (ipTM)**: una medida de la precisión de la estructura predicha de un multímero, usada por AlphaFold-Multimer. Mide la precisión de la interfaz predicha entre las subunidades del complejo proteína-proteína.
* **Ligando**: una molécula que se une específicamente a otra molécula, como una proteína o ácido nucleico, para formar un complejo. Un ligando suele ser una pequeña molécula, pero puede ser una proteína.
* **Missense**: el tipo más común de variante genética. Una variante missense es un cambio único en la secuencia de ADN, resultando en la sustitución de un aminoácido por otro en una proteína.
* **Multímero**: un complejo compuesto únicamente de proteínas.
* **Alineamiento múltiple de secuencias (MSA)**: un conjunto de datos en el que se alinean múltiples secuencias de proteínas similares y/o relacionadas por regiones idénticas o similares. AlphaFold usa MSAs para predecir las estructuras de proteínas novedosas.
* **Error alineado predicho (PAE)**: una medida de cuán confiado es AlphaFold en la posición relativa de dos residuos dentro de una estructura de proteína predicha. Se define como el error posicional esperado en el residuo X, medido en Ångströms (Å), si las estructuras predicha y real se alinean en el residuo Y. Es efectivamente una medida de cuán confiado es AlphaFold en que los dominios de la proteína estén bien empaquetados y que la colocación relativa de los dominios en la estructura predicha sea correcta.
* **Representación de pares**: una representación de cada par de residuos de aminoácidos en una proteína. Las representaciones de pares codifican información sobre las relaciones evolutivas entre cada par de aminoácidos, que finalmente se pueden interpretar como información posicional.
* **Péptido**: una sola cadena de aminoácidos unidos por enlaces péptidos. En comparación con las proteínas, los péptidos pueden ser bastante cortos y siempre consisten en una sola cadena.
* **Banco de Datos de Proteínas (PDB)**: una base de datos gratuita que contiene todas las estructuras macromoleculares que alguna vez se han determinado experimentalmente y publicado. Su archivo principal contiene coordenadas atómicas tridimensionales de modelos estructurales de proteínas, más ADN y ARN. También incluye complejos de estas moléculas con metales y pequeñas moléculas, más datos experimentales y metadatos relacionados.
* **Base de datos PDB100**: una versión agrupada del PDB. Se creó buscando cada estructura representativa en el PDB contra la Base de Datos AlphaFold, usando Foldseek.
* **Prueba de diferencia de distancia local predicha (pLDDT)**: una métrica usada por AlphaFold para estimar la confianza local, a nivel de residuos de aminoácidos individuales, en una estructura de proteína predicha. Se escala de 0 a 100, con puntuaciones más altas indicando mayor confianza.
* **Proteína**: una gran molécula biológica compuesta por una o más largas cadenas de aminoácidos unidas por enlaces péptidos.
* **Puntuación de modelado de plantilla predicha (pTM)**: una medida integrada de cuán bien ha predicho AlphaFold-Multimer la estructura de un complejo. Es la puntuación de modelado de plantilla (TM) predicha para una superposición entre la estructura predicha y la estructura verdadera hipotética. Las puntuaciones pTM varían entre 0 y 1: una puntuación superior a 0.5 significa que el pliegue predicho general para el complejo será similar a la estructura verdadera.
* **Semilla aleatoria**: un número generado aleatoriamente usado para inicializar las predicciones de estructura de AlphaFold.
* **Reciclaje**: en el contexto de AlphaFold, el paso final normal en predecir una estructura. AlphaFold toma sus salidas iniciales y las vuelve a pasar por el proceso de predicción de estructura. Puedes variar el número de veces que el software recicla los datos: en algunos casos, más reciclajes pueden dar mejores predicciones.
* **Relajación**: un paso final opcional en la predicción de estructuras de proteínas. Relajar implica hacer pequeños cambios en la estructura predicha, usando descenso de gradiente en el campo de fuerza AMBER. La relajación puede ayudar a resolver raras violaciones estereoquímicas y choques haciendo pequeños ajustes a la estructura.
* **Residuo**: un aminoácido que ha sido incorporado en una cadena péptida para formar una proteína. Tres átomos, equivalentes a una molécula de agua, se eliminan de la molécula de aminoácido en este proceso.
* **Desviación cuadrática media de la raíz (RMSD)**: una medida de la distancia media ponderada (o desviación) entre átomos correspondientes cuando se superponen dos estructuras similares. Una RMSD más pequeña significa una mejor coincidencia. Dos estructuras idénticas tendrían una RMSD de 0 Ångströms (Å). Una RMSD mayor que 2-3 Å sugiere que las estructuras son sustancialmente diferentes.
* **Plantilla**: una estructura de proteína que se puede suministrar a software de modelado, incluido AlphaFold, para ayudar a guiar la predicción de una estructura novedosa.
* **UniProt**: una base de datos gratuita de secuencias de proteínas y anotación funcional, contiene la función biológica de las proteínas que se deriva de la literatura de investigación.
* **Cristalografía de rayos X**: un método experimental usado para determinar las estructuras tridimensionales detalladas de moléculas, incluyendo proteínas. Requiere iluminar un cristal de la molécula estudiada con un haz de rayos X. Los rayos se dispersarán en un patrón distintivo que permite calcular la forma de la molécula.
