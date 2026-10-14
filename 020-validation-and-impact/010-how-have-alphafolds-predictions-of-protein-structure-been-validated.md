---
layout: default
title: '¿Cómo se han validado las predicciones de estructura de proteínas de AlphaFold2?'
---

# ¿Cómo se han validado las predicciones de estructura de proteínas de AlphaFold2?

**La capacidad de AlphaFold2 para predecir la estructura de proteínas se demostró por primera vez cuando triunfó en la evaluación de predicciones de estructura de CASP14. Desde entonces, ha sido validado por múltiples líneas de evidencia de experimentos de biología estructural, incluidos estudios de cristalografía de rayos X, microscopía electrónica criogénica y espectrometría de masa de enlaces cruzados.**

## **Éxito de AlphaFold en CASP**

La Evaluación Crítica de Predicción de Estructura ([CASP](https://predictioncenter.org/index.cgi)) es una prueba experimental de predicciones de estructura de proteínas. Se ha llevado a cabo cada dos años desde 1994. La evaluación está abierta a cualquiera.

Los participantes de CASP envían estructuras predichas para proteínas. Las estructuras de las proteínas en cuestión se determinan experimentalmente, por cristalografía de rayos X, resonancia magnética nuclear (RMN) o microscopía electrónica criogénica (cryo-EM). Sin embargo, estas estructuras no se liberan al público hasta que finaliza la evaluación. Luego, las estructuras predichas se comparan con estas estructuras experimentales.

Google DeepMind envió predicciones de estructuras de AlphaFold2 a [CASP14](https://predictioncenter.org/casp14/index.cgi) en 2020. El software superó a todos los demás participantes por un amplio margen.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/AF_CASP14.gif)

Figura 7. Las diez entradas con mayor puntuación en CASP14 en 2020, basadas en sus puntuaciones acumuladas para todas las proteínas intentadas. AlphaFold2 fue, con diferencia, el más exitoso.

Previamente, la precisión general de la predicción de estructuras, medida por la distancia global de la verdad de referencia (GDT\_TS), solo había alcanzado aproximadamente 60. AlphaFold2 obtuvo más de 90. Esta puntuación significó que las estructuras de proteínas predichas coincidían estrechamente con las estructuras resueltas experimentalmente. Los coordinadores de CASP proclamaron que el problema del plegamiento de proteínas había sido “largamente resuelto”, al menos para cadenas de proteínas individuales.

Google DeepMind participó anteriormente con una versión anterior de AlphaFold en [CASP13](https://predictioncenter.org/casp13/) de 2018. Ocupó el primer lugar, pero por un pequeño margen. Esas predicciones no fueron lo suficientemente precisas, por lo que el problema de la predicción de estructuras de proteínas no se consideró resuelto.

![](https://lh7-us.googleusercontent.com/_BkbLSDY5zMIDo4Sza-QXz24DxJ7WHwcmFpm_xOIZIZGuTEiO_ZkgGicn-aIDErGAOlOeFLMELERcPRyamc_SkckEwF1p0jGOkHGcQ8AAoMkjjrRVS56eOWtlmjwsE_os6G-ITrsyU7WVHXAr7SiNbs)

Figura 8. Éxito general en la predicción de estructuras de proteínas en CASP a lo largo de los años. AlphaFold impulsó mejoras rápidas en 2018 y 2020.

Google DeepMind no participó directamente en [CASP15](https://predictioncenter.org/casp15/index.cgi) en 2022. Sin embargo, todos los mejores participantes utilizaron versiones modificadas o personalizadas de AlphaFold2. Como Google DeepMind liberó el código fuente de AlphaFold, otros investigadores pudieron construir sobre él y, en algunos casos, superar la versión estándar del software ([Elofsson, 2023](https://doi.org/10.1016/j.sbi.2023.102594); [Kryshtafovych et al., 2023](https://onlinelibrary.wiley.com/doi/10.1002/prot.26617)).

![](https://lh7-us.googleusercontent.com/PfuIC2A8rK2wOrPVEnVhJT_2Kp3KHg3QTk20KXc-PdhDfpthIjM_NdTB1yElVEHaGOEYD9HU8KqopwW_8Zj-C9MEaAauhWBbIgS-WBmsrqRL6zRIKlWG1nIgCkLkugfJvCoB1So2FQp_iJTkRMFzK6g)

## **Evidencia posterior de biología estructural**

En CASP14, AlphaFold2 tuvo éxito al predecir las estructuras de docenas de proteínas. Sin embargo, hay millones de proteínas en la naturaleza. Por lo tanto, los experimentadores posteriores han sometido el software a una mayor validación.

Los experimentos de biología estructural demuestran que las estructuras de AlphaFold2 (o partes bien definidas de las estructuras predichas, como los dominios de proteínas) funcionan bien como modelos de búsqueda para el reemplazo molecular en cristalografía de rayos X ([Barbarin-Bocahu y Graille, 2022](https://doi.org/10.1107/S2059798322002157); [McCoy et al., 2022](https://doi.org/10.1107/S2059798321012122); [Millán et al., 2021](https://doi.org/10.1002/prot.26214)). Esto implica que las estructuras de AlphaFold2 se asemejan estrechamente a las estructuras de cristales de proteínas.

Las estructuras de AlphaFold2 se ajustan bien a los mapas de densidad electrónica experimental de cryo-EM ([Chojnowski, 2022](https://doi.org/10.1107/s2059798322005009); [Giri et al., 2023](https://doi.org/10.1016/j.sbi.2023.102536)). Esto sugiere nuevamente una buena coincidencia entre las predicciones de estructuras y los datos experimentales.

Las estructuras de AlphaFold2 siguen siendo un buen ajuste cuando las proteínas están en solución, en lugar de cristalizadas. Usar modelos de AlphaFold2 para interpretar datos de resonancia magnética nuclear (RMN) obtenidos en solución sugirió un excelente ajuste en la vasta mayoría de los casos ([Fowler y Williamson, 2022](https://doi.org/10.1016/j.str.2022.04.005); [Tejero et al., 2022](https://doi.org/10.3389/fmolb.2022.877000)). Interesantemente, esto indica que los modelos de AlphaFold2 no están tan sesgados hacia predecir un estado cristalino, a pesar de que AlphaFold2 principalmente ha sido entrenado con datos derivados de cristales de proteínas.

##### Figura 10. Proteína portadora de acilo especializada

Notablemente, la predicción de AlphaFold (AlphaFold ID: [AF-Q6N882-F1](https://alphafold.ebi.ac.uk/entry/Q6N882)) demuestra un mejor ajuste con la estructura de RMN (verde, PDB ID: [2LPK](https://doi.org/10.2210/pdb2lpk/pdb)) que con la estructura de cristal de rayos X correspondiente (gris, PDB ID: [3LMO](https://doi.org/10.2210/pdb3lmo/pdb)) ([Tejero et al., 2022](https://doi.org/10.3389/fmolb.2022.877000))

Los experimentos de espectrometría de masa de enlaces cruzados mostraron que la mayoría de las predicciones de estructuras de AlphaFold2 eran correctas tanto para cadenas de proteínas individuales como para complejos proteína-proteína *in situ* ([Bartolec et al., 2023](https://doi.org/10.1073/pnas.2219418120); [McCafferty et al., 2023](https://doi.org/10.1038/s42003-023-04773-7)).

En conjunto, estos datos validan la precisión de AlphaFold2. También sugieren que los modelos de AlphaFold2 pueden ser útiles para una variedad de aplicaciones de investigación.
