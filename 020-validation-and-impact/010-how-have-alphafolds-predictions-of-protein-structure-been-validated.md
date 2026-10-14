---
layout: default
title: '¿Cómo se han validado las predicciones de estructura de proteínas de AlphaFold2?'
---

# ¿Cómo se han validado las predicciones de estructura de proteínas de AlphaFold2?

**La capacidad de AlphaFold2 para predecir la estructura de las proteínas se demostró por primera vez cuando triunfó en la evaluación CASP14 de predicciones de estructura. Desde entonces, se ha validado mediante múltiples líneas de evidencia provenientes de experimentos de biología estructural, incluyendo estudios de cristalografía de rayos X, microscopía electrónica criogénica y espectrometría de masas de reticulación.**

## **El éxito de AlphaFold en CASP**

La Evaluación Crítica de la Predicción de Estructuras ([CASP](https://predictioncenter.org/index.cgi)) es una prueba experimental de las predicciones de estructura de proteínas. Se ha llevado a cabo cada dos años desde 1994. La evaluación está abierta a cualquiera.

Los participantes de CASP envían estructuras predichas para proteínas. Las estructuras de las proteínas en cuestión se determinan experimentalmente mediante cristalografía de rayos X, resonancia magnética nuclear (RMN) o microscopía electrónica criogénica (microscopía crioelectrónica). Sin embargo, estas estructuras no se publican hasta que finaliza la evaluación. Las estructuras predichas se comparan entonces con estas estructuras experimentales.

Google DeepMind introdujo las predicciones de estructura de AlphaFold2 en [CASP14](https://predictioncenter.org/casp14/index.cgi) en 2020. El software superó a todos los demás participantes por un amplio margen.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/AF_CASP14.gif)

Figura 7. Las diez entradas con mayor puntuación en CASP14 en 2020, según sus puntuaciones acumuladas en todas las proteínas intentadas. AlphaFold2 fue, con diferencia, el más exitoso.

Anteriormente, la precisión general de la predicción de la estructura, medida por la distancia global a la verdad fundamental (GDT\_TS), solo había alcanzado alrededor del 60. AlphaFold2 obtuvo una puntuación superior al 90. Esta puntuación significaba que las estructuras de proteínas predichas coincidían estrechamente con las estructuras resueltas experimentalmente. Los coordinadores de CASP proclamaron que el problema del plegamiento de proteínas se había “resuelto en gran medida”, al menos para cadenas proteicas únicas.

Google DeepMind introdujo previamente una versión anterior de AlphaFold en [CASP13](https://predictioncenter.org/casp13/) de 2018. Obtuvo el primer lugar, pero por un pequeño margen. Esas predicciones no eran lo suficientemente precisas, por lo que no se consideró que el problema de la predicción de la estructura de las proteínas estuviera resuelto.

![](https://lh7-us.googleusercontent.com/_BkbLSDY5zMIDo4Sza-QXz24DxJ7WHwcmFpm_xOIZIZGuTEiO_ZkgGicn-aIDErGAOlOeFLMELERcPRyamc_SkckEwF1p0jGOkHGcQ8AAoMkjjrRVS56eOWtlmjwsE_os6G-ITrsyU7WVHXAr7SiNbs)

Figura 8. Éxito general en la predicción de la estructura de las proteínas en CASP a lo largo de los años. AlphaFold impulsó mejoras rápidas en 2018 y 2020.

Google DeepMind no participó directamente en [CASP15](https://predictioncenter.org/casp15/index.cgi) en 2022. Sin embargo, todos los mejores participantes utilizaron versiones modificadas o personalizadas de AlphaFold2. Debido a que Google DeepMind publicó el código fuente de AlphaFold, otros investigadores pudieron basarse en él y, en algunos casos, superar el rendimiento de la versión estándar del software ([Elofsson, 2023](https://doi.org/10.1016/j.sbi.2023.102594); [Kryshtafovych et al., 2023](https://onlinelibrary.wiley.com/doi/10.1002/prot.26617)).

![](https://lh7-us.googleusercontent.com/PfuIC2A8rK2wOrPVEnVhJT_2Kp3KHg3QTk20KXc-PdhDfpthIjM_NdTB1yElVEHaGOEYD9HU8KqopwW_8Zj-C9MEaAauhWBbIgS-WBmsrqRL6zRIKlWG1nIgCkLkugfJvCoB1So2FQp_iJTkRMFzK6g)

## **Evidencia posterior de la biología estructural**

En CASP14, AlphaFold2 tuvo éxito en la predicción de las estructuras de docenas de proteínas. Sin embargo, hay millones de proteínas en la naturaleza. Por lo tanto, los experimentadores posteriores han sometido el software a una mayor validación.

Los experimentos de biología estructural demuestran que las estructuras de AlphaFold2 (o las partes bien definidas de las estructuras predichas, como los dominios proteicos) funcionan bien como modelos de búsqueda para el reemplazo molecular en la cristalografía de rayos X ([Barbarin-Bocahu y Graille, 2022](https://doi.org/10.1107/S2059798322002157); [McCoy et al., 2022](https://doi.org/10.1107/S2059798321012122); [Millán et al., 2021](https://doi.org/10.1002/prot.26214)). Esto implica que las estructuras de AlphaFold2 se asemejan estrechamente a las estructuras de cristal de las proteínas.

Las estructuras de AlphaFold2 encajan bien en los mapas de densidad electrónica experimentales de microscopía crioelectrónica ([Chojnowski, 2022](https://doi.org/10.1107/s2059798322005009); [Giri et al., 2023](https://doi.org/10.1016/j.sbi.2023.102536)). Esto sugiere nuevamente una buena coincidencia entre las predicciones de estructura y los datos experimentales.

Las estructuras de AlphaFold2 siguen siendo adecuadas cuando las proteínas están en solución, a diferencia de cuando están cristalizadas. Usar modelos de AlphaFold2 para interpretar datos de resonancia magnética nuclear (RMN) obtenidos en solución sugirió una excelente concordancia en la gran mayoría de los casos ([Fowler y Williamson, 2022](https://doi.org/10.1016/j.str.2022.04.005); [Tejero et al., 2022](https://doi.org/10.3389/fmolb.2022.877000)). Interesantemente, esto indica que los modelos de AlphaFold2 no están tan sesgados hacia la predicción de un estado cristalino, a pesar de que AlphaFold2 se entrenó principalmente con datos derivados de cristales de proteínas.

##### Figura 10. Proteína portadora de acilo especializada

Notablemente, la predicción de AlphaFold (ID de AlphaFold: [AF-Q6N882-F1](https://alphafold.ebi.ac.uk/entry/Q6N882)) demuestra una concordancia más estrecha con la estructura de RMN (verde, ID PDB: [2LPK](https://doi.org/10.2210/pdb2lpk/pdb)) que la estructura de cristalografía de rayos X correspondiente (gris, ID PDB: [3LMO](https://doi.org/10.2210/pdb3lmo/pdb)) ([Tejero et al., 2022](https://doi.org/10.3389/fmolb.2022.877000)).

Los experimentos de espectrometría de masas de reticulación mostraron que la mayoría de las predicciones de estructura de AlphaFold2 eran correctas tanto para cadenas proteicas individuales como para complejos proteína-proteína *in situ* ([Bartolec et al., 2023](https://doi.org/10.1073/pnas.2219418120); [McCafferty et al., 2023](https://doi.org/10.1038/s42003-023-04773-7)).

En conjunto, estos datos validan la precisión de AlphaFold2. También sugieren que los modelos de AlphaFold2 pueden ser útiles para una variedad de aplicaciones de investigación.
