# ¿Cómo se han validado las predicciones de la estructura de las proteínas de AlphaFold 2?
La capacidad de AlphaFold2 para predecir la estructura de las proteínas quedó demostrada por primera vez cuando triunfó en la evaluación CASP14 de predicciones estructurales. Desde entonces ha sido validada por múltiples líneas de evidencia procedentes de experimentos de biología estructural, incluyendo estudios de cristalografía de rayos X, microscopía electrónica criogénica y espectrometría de masas con entrecruzamiento químico.

## El éxito de AlphaFold en CASP
La Evaluación Crítica de la Predicción de Estructuras (CASP, por sus siglas en inglés) es una prueba experimental de predicciones de estructuras de proteínas. Se realiza cada dos años desde 1994. La evaluación está abierta a todo el mundo.
Quienes participan en el CASP envían predicciones de estructuras de proteínas. Las proteínas en cuestión tienen sus estructuras determinadas experimentalmente mediante cristalografía de rayos X, resonancia magnética nuclear (RMN) o microscopía electrónica criogénica (cryo-EM). Sin embargo, estas estructuras no se hacen públicas hasta que finaliza la evaluación. Las estructuras predichas se comparan entonces con estas estructuras experimentales.
Google DeepMind introdujo las predicciones de estructuras de AlphaFold2 en CASP14, en 2020. El software superó a todos los demás participantes por un amplio margen.



Figura 7. Las diez participaciones con mayor puntuación en CASP14 en 2020, en función de sus puntuaciones acumuladas en todas las proteínas intentadas. AlphaFold2 fue, con diferencia, la más exitosa.

Anteriormente, la precisión global de la predicción de estructuras, medida por la distancia global respecto a la estructura real (GDT_TS), solo había alcanzado un valor de 60 aproximadamente. AlphaFold2 superó los 90 puntos. Esta puntuación significaba que las estructuras proteicas predichas coincidían estrechamente con las estructuras resueltas experimentalmente. Los coordinadores del CASP proclamaron que el problema del plegamiento de proteínas había quedado “resuelto en gran medida”, al menos para las cadenas de una sola proteína.
Google DeepMind había presentado una versión anterior de AlphaFold en el CASP13 de 2018. Consiguió el primer puesto, pero por un pequeño margen. Esas predicciones no fueron lo suficientemente precisas, por lo que el problema de predicción de la estructura de proteínas no se consideró resuelto.

Figura 8. Éxito general en la predicción de estructuras proteicas en los distintos CASP a lo largo de los años. AlphaFold impulsó mejoras rápidas en 2018 y 2020.

GoogleDeepMind no participó directamente en CASP15 en 2022. Sin embargo, los mejores resultados usaron versiones modificadas o personalizadas de AlphaFold2. Debido a que Google DeepMind liberó el código fuente de AlphaFold, otros investigadores pudieron construir sobre él y, en algunos casos, mejorar el rendimiento de la versión estándar del software (Elofsson, 2023; Kryshtafovych et al., 2023).

Figura 9. Las entradas con mayor puntuación en CASP15 en 2022. Todos los participantes mejor posicionados utilizaron alguna versión de AlphaFold2 en sus predicciones.

## Evidencia posterior desde la biología estructural

En CASP14, AlphaFold2 logró predecir correctamente las estructuras de decenas de proteínas. Sin embargo, en la naturaleza existen millones de proteínas. Por ello, posteriormente investigadores han sometido al software a validaciones experimentales adicionales.
Experimentos de biología estructural demostraron que las estructuras generadas por AlphaFold2 (o partes bien definidas de las estructuras predichas, como los dominios proteicos) funcionan bien como modelos de búsqueda para el reemplazo molecular en cristalografía de rayos X (Barbarin-Bocahu and Graille, 2022; McCoy et al., 2022; Millán et al., 2021). Esto implica que las estructuras predichas por AlphaFold2 se asemejan estrechamente a las estructuras cristalinas reales.

Las estructuras de AlphaFold2 también encajan bien en los mapas de densidad electrónica obtenidos mediante cryo-EM (Chojnowski, 2022; Giri et al., 2023), lo que indica nuevamente una buena concordancia entre las predicciones estructurales y los datos experimentales.
Las estructuras predichas por AlphaFold2 continúan mostrando un buen ajuste incluso cuando las proteínas están en solución, en lugar de estar cristalizadas. El uso de modelos de AlphaFold2 para interpretar datos de RMN obtenidos en solución mostró una excelente concordancia en la gran mayoría de los casos (Fowler and Williamson, 2022; Tejero et al., 2022). Curiosamente, esto indica que los modelos de AlphaFold2 no están sesgados hacia la predicción del estado cristalino, a pesar de que el modelo fue entrenado principalmente con datos derivados de proteínas cristalizadas.

Figura 10. Proteína especializada en transporte de acilo. Notablemente, la predicción de AlphaFold (AlphaFold ID: AF-Q6N882-F1) muestra una mayor correlación con la estructura generada con RMN (verde, PDB ID: 2LPK) que con la correspondiente generada por cristalografía de rayos X (gris, PDB ID: 3LMO) (Tejero et al., 2022).

Experimentos de espectrometría de masas con entrecruzamiento químico mostraron que la mayoría de las predicciones de AlphaFold2 fueron correctas tanto para las cadenas individuales de proteínas como para los complejos proteína-proteína en su contexto natural (Bartolec et al., 2023; McCafferty et al., 2023).
En conjunto, estos datos validan la precisión de AlphaFold2. También sugieren que los modelos de AlphaFold pueden ser útiles en una gran variedad de aplicaciones.
