---
layout: default
title: 'PAE: Una medida de confianza global en las predicciones de AlphaFold2'
---

# PAE: Una medida de confianza global en las predicciones de AlphaFold2

El error alineado predicho (PAE) es una medida de la confianza de AlphaFold2 en la posición relativa de dos residuos dentro de la estructura predicha. PAE se define como el error posicional esperado en el residuo X, medido en Ångströms (Å), si las estructuras predicha y real se alinearan en el residuo Y.

Por lo tanto, PAE es efectivamente una medida de la confianza de AlphaFold2 en que los dominios están bien empaquetados y que la colocación relativa de los dominios en la estructura predicha es correcta.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/alphafold.gif)

Figura 16. Un ejemplo de gráfico de PAE (Error Alineado Predicho), que muestra regiones de alta confianza (verde oscuro) y baja confianza (verde pálido) para la estructura predicha de la proteína transportadora de hierro ferroso B (ID de AlphaFold: [AF-Q12XU1-F1](https://alphafold.ebi.ac.uk/entry/Q12XU1)).

Una puntuación de PAE baja entre dos residuos de dos dominios diferentes significa un error predicho bajo. Esto a su vez significa que AlphaFold2 confía en la posición de estos residuos. Por el contrario, una puntuación de PAE alta significa que AlphaFold2 no confía en su posición relativa.

Ignorar la puntuación de PAE puede llevar a una mala interpretación de la posición relativa de los dominios ([Guo et al., 2022](https://doi.org/10.1038/s41598-022-14382-9)). Un ejemplo es el mediador de la proteína de control de daños en el ADN 1 (ID de AlphaFold: [AF-Q14676-F1](https://alphafold.ebi.ac.uk/entry/Q14676)). Sus dos dominios parecen estar cerca en el espacio, pero el PAE indica que las posiciones de estos dominios son esencialmente aleatorias.

![Descripción de la imagen](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/Screenshot-2024-01-08-at-11.24.21.png)

##### Figura 17. Mediador de la proteína de control de daños en el ADN 1

Explora la visualización interactiva de PAE (Error Alineado Predicho) directamente en la Base de Datos de Estructuras de Proteínas de AlphaFold ([AF-Q14676-F1](https://alphafold.ebi.ac.uk/entry/Q14676))

El PAE se puede visualizar como un gráfico de PAE fácil de interpretar. Cada estructura de proteína predicha en la Base de Datos de Estructuras de Proteínas de AlphaFold (AFDB) se acompaña de un gráfico de PAE. El gráfico es un gráfico 2D, con los residuos de la proteína a lo largo de los ejes. En cada cuadrado, el tono de verde indica el error de distancia esperado en Ångströms (Å) para un par de residuos. Una baldosa verde oscuro designa una buena predicción (bajo error), mientras que una baldosa verde claro indica una mala predicción (alto error).

El gráfico de PAE siempre tendrá una línea diagonal verde oscuro que vaya de arriba a la izquierda a abajo a la derecha. Esto representa los residuos que se alinean consigo mismos, donde la confianza es siempre alta por definición, por lo que no es informativo y se puede ignorar. La información biológicamente relevante, en términos de orientaciones relativas, se contiene en las regiones alejadas de la diagonal.

Si estás viendo el gráfico de PAE en la AFDB, puedes seleccionar una región del gráfico. La AFDB resaltará la región o regiones en cuestión en la estructura 3D, para que puedas examinar la relación entre la secuencia, el segmento correspondiente del gráfico de PAE y la estructura.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/pae-plddt.gif)

---

## Pon a prueba tus conocimientos

En esta sección verás una serie de estructuras para que tú las interpretes, centrándote en el Error Alineado Predicho (PAE). Después puedes comprobar tu interpretación del PAE con la nuestra. Interpreta el Error Alineado Predicho (PAE) y compara tus conclusiones con las nuestras. Recuerda que puedes usar el gráfico interactivo de PAE en la Base de Datos de Estructuras de Proteínas AlphaFold.

![Descripción de la imagen](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/Q9NRI5.png)

##### Proteína disrupcionada en la esquizofrenia 1 ([AF-Q9NRI5-F1](https://alphafold.ebi.ac.uk/entry/Q9NRI5))

Involucrada en la regulación de múltiples aspectos de la neurogénesis embrionaria y adulta.

![Descripción de la imagen](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/P9WNQ7.png)

##### Proteína EccD1 del sistema de secreción ESX-1 ([AF-P9WNQ7-F1](https://alphafold.ebi.ac.uk/entry/P9WNQ7))

Componente del sistema de secreción tipo VII ESX-1, que transporta activamente varios factores de virulencia a las células huésped durante el curso de la infección.

![Descripción de la imagen](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/01/O15121.png)

##### Desaturasa delta(4)-esfingolípidos DES1 ([AF-O15121-F1](https://alphafold.ebi.ac.uk/entry/O15121))

Se ha relacionado con la leucodistrofia. Sin embargo, no hay información estructural o de modelo disponible para esta proteína.

### Comprueba tus respuestas

---

## Integrando las puntuaciones pLLDT y PAE

Aunque pLDDT y PAE miden la confianza en diferentes aspectos de la estructura predicha, en algunos casos pueden estar fuertemente correlacionados. Por ejemplo, un segmento de proteína desordenado predicho con un pLDDT bajo probablemente también tendrá un PAE grande. Esto se debe a que su posición relativa a otras partes de la proteína no está bien definida. Sin embargo, pLDDT no muestra si los dominios de la proteína están posicionados con confianza entre sí, mientras que PAE muestra exactamente esto.

Las puntuaciones de PAE siempre deben interpretarse en conjunto con otras puntuaciones de confianza como pLDDT.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/exportin-pae-plddt.gif)
