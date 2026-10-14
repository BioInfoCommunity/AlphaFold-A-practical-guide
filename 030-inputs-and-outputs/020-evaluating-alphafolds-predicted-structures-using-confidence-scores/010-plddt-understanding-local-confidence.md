---
layout: default
title: 'pLDDT: Entendiendo la confianza local'
---

# pLDDT: Entendiendo la confianza local

El test de diferencia de distancia local predicha (pLDDT) es una medida por residuo de la confianza local. Se escala de 0 a 100, con puntuaciones más altas que indican una mayor confianza y, generalmente, una predicción más precisa.

pLDDT mide la confianza en la estructura local, estimando qué tan bien la predicción coincidiría con una estructura experimental. Se basa en el test de diferencia de distancia local Cα ([lDDT-Cα](https://academic.oup.com/bioinformatics/article/29/21/2722/195896?login=true)), que es una puntuación que no depende de la superposición, sino que evalúa la corrección de las distancias locales ([Mariani et al., 2013](https://doi.org/10.1093/bioinformatics/btt473)).

En esta base, un pLDDT superior a 90 se tomaría como la categoría de mayor precisión, en la que tanto la cadena principal como las cadenas laterales se predicen típicamente con alta precisión. En contraste, un pLDDT superior a 70 suele corresponder a una predicción correcta de la cadena principal con un desplazamiento de algunas cadenas laterales.

La puntuación pLDDT puede variar significativamente a lo largo de una cadena de proteína. Esto significa que AlphaFold2 puede tener mucha confianza en la estructura de algunas partes de la proteína, pero menos confianza en otras regiones. Esto te da una indicación de qué partes de la estructura predicha pueden ser fiables y cuáles es poco probable que lo sean ([Guo et al., 2022](https://doi.org/10.1038/s41598-022-14382-9)).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/pLDDT_fixed.gif)

Figura 14. Muestra de pLDDT (test de diferencia de distancia local predicha) para una estructura de proteína predicha. Diferentes colores indican el nivel de confianza de AlphaFold2 en su predicción (consulta la clave).

Hay dos clases de razones por las que AlphaFold2 asignará una baja confianza a una región de una proteína. Puede que esa región sea naturalmente muy flexible o intrínsecamente desordenada, en cuyo caso no tiene ninguna estructura bien definida. Alternativamente, la región puede tener una estructura predecible, pero AlphaFold2 no tiene suficiente información para predecirla con confianza. Ambos escenarios suelen dar lugar a un pLDDT inferior a 50.

Cabe destacar que AlphaFold2 puede tener mucha confianza en la estructura de un dominio globular de una proteína, pero menos confianza en la estructura de los enlaces entre dominios. Esto se debe a que AlphaFold2 tiene más información con la que trabajar al predecir la estructura de los dominios globulares. Estos dominios suelen estar conservados, es decir, han cambiado menos a lo largo del tiempo evolutivo. En contraste, los enlaces son más propensos a ser naturalmente variables, menos estructurados y más flexibles. No hay forma de predecir estructuras específicas para estas regiones naturalmente no estructuradas, por lo que AlphaFold2 asigna a sus predicciones una baja confianza.

La mayoría de las regiones intrínsecamente desordenadas (IDR) siempre están desordenadas. Sin embargo, hay algunas IDR donde la proteína carece de una estructura definida en condiciones fisiológicas en su estado no unido, pero sufre un plegamiento inducido por unión al interactuar con su pareja macromolecular nativa. En estos casos poco comunes, AlphaFold2 muestra una tendencia a predecir el estado plegado con altas puntuaciones pLDDT ([Alderson et al., 2023](https://doi.org/10.1073/pnas.2304302120); [Piovesan et al., 2022](https://doi.org/10.1002/pro.4466)).

Un ejemplo de esto es el factor de iniciación de la traducción eucariota 4E-proteína ligadora 2 (4E-BP2, ID de UniProt: [Q13542](https://www.uniprot.org/uniprotkb/Q13542/entry)). AlphaFold2 predice una estructura helicoidal con alta confianza: en la naturaleza, 4E-BP2 solo adopta esta estructura en su estado ligado (ID PDB: [3AM7](https://www.wwpdb.org/pdb?id=pdb_00003am7)). Ten en cuenta que la estructura ligada se incluyó en el conjunto de entrenamiento de AlphaFold2, por lo que el programa ya la había visto.

##### Factor de iniciación de la traducción eucariota 4E-proteína ligadora 2 (ID de UniProt: [Q13542](https://www.uniprot.org/uniprotkb/Q13542/entry))

AlphaFold predice una conformación helicoidal para 4E-BP2 ([AF-Q13542-F1](https://alphafold.ebi.ac.uk/entry/Q13542)) que se asemeja mucho al estado unido (ID PDB: [3AM7](https://www.wwpdb.org/pdb?id=pdb_00003am7), morado)

Un comportamiento similar ocurre en las IDR que experimentan cambios conformacionales debido a modificaciones postraduccionales. En tales casos, AlphaFold2 tiende a predecir el estado condicionalmente plegado.

Finalmente, es esencial que comprendas que una puntuación alta de pLDDT para todos los dominios de una proteína no significa necesariamente que AlphaFold2 tenga confianza en las posiciones o orientaciones relativas de esos dominios. pLDDT no mide la confianza a esa escala, así que se requiere una métrica diferente.

---

## Pon a prueba tus conocimientos

Aquí tienes un breve ejercicio para ayudarte a evaluar las estructuras de proteínas predichas basándote en sus puntuaciones pLDDT. Veamos qué tan bien puedes interpretar estas puntuaciones y tomar decisiones informadas sobre la fiabilidad del modelo.

¿Qué estructura tiene la mejor puntuación pLDDT?

Visualizador de proteínas

##### Familia de dominios tipo lectina C ([AF-Q8IZS7-F1](https://alphafold.ebi.ac.uk/entry/Q8IZS7))

Puede funcionar mediando las interacciones célula-célula inmunitarias.

##### Antígeno de membrana apical 1 ([AF-Q3S2X4-F1](https://alphafold.ebi.ac.uk/entry/Q3S2X4))

Involucrado en la invasión de eritrocitos por parte del parásito.

##### Acetiltransferasa de clorafenicol ([AF-P36883-F1](https://alphafold.ebi.ac.uk/entry/P36883))

Responsable de la resistencia al antibiótico cloranfenicol.

Muy alto (pLDDT > 90)

Confiable (90 > pLDDT > 70)

Bajo (70 > pLDDT > 50)

Muy bajo (pLDDT < 50)

### Comprueba tus respuestas
