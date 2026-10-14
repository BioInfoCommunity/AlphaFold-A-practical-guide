---
layout: default
title: 'Mejoras a AlphaFold2 de la comunidad científica más amplia'
---

# Mejoras a AlphaFold2 de la comunidad científica más amplia

**Desde que se liberó el código fuente de AlphaFold2, los investigadores han estado ampliando las capacidades de AlphaFold2. De esta manera, los investigadores han avanzado en problemas que la versión original de AlphaFold2 no estaba entrenada para resolver.**

## **Predecir la estructura de proteínas del sistema inmunológico**

La versión original de AlphaFold2 tenía dificultades para predecir las estructuras de muchas proteínas del sistema inmunológico, como los anticuerpos y los receptores de células T. Estas moléculas cambian rápidamente en el tiempo evolutivo, lo que las hace especialmente difíciles de analizar.

Los grupos de investigación han adaptado partes de AlphaFold2 y AlphaFold-Multimer para construir versiones específicas de anticuerpos de AlphaFold2. Estos paquetes de software predicen las estructuras de anticuerpos con mucha más precisión que AlphaFold2 ([Abanades et al., 2023](https://doi.org/10.1038/s42003-023-04927-7); [Peng et al., 2023](https://doi.org/10.1101/2023.04.20.537598); [Ruffolo et al., 2023](https://doi.org/10.1038/s41467-023-38063-x)).

Otros grupos han adaptado AlphaFold2 para predecir las estructuras de los receptores de células T. Estos son componentes cruciales del sistema inmunológico adaptativo que reconocen y eliminan patógenos extraños y células anómalas. Lo hacen uniéndose a las proteínas del complejo mayor de histocompatibilidad (MHC) en el exterior de las células objetivo. Los investigadores ahora están utilizando versiones modificadas de AlphaFold2 para predecir las interacciones de los receptores de células T y MHC, y los complejos que forman ([Abanades et al., 2023](https://doi.org/10.1038/s42003-023-04927-7); [Yin et al., 2023](https://doi.org/10.1093/nar/gkad356); [Mikhaylov et al., 2023](https://doi.org/10.1101/2023.03.06.531396); [Bradley, 2023](https://doi.org/10.7554/eLife.82813)).

## **Predecir las estructuras de proteínas transmembrana**

AlphaFold2 no es consciente del plano de la membrana, por lo que no puede predecir de manera fiable cómo las estructuras de proteínas se ven afectadas por las interacciones con las membranas. Sin embargo, los investigadores han encontrado formas de abordar este problema.

Varios equipos han analizado estructuras de la Base de Datos de Estructuras de Proteínas AlphaFold y han identificado sus dominios transmembrana. Estas proteínas transmembrana se han recopilado en bases de datos, permitiendo a los investigadores visualizar las posiciones más probables de los planos de la membrana ([Dobson et al., 2022](https://doi.org/10.1093/nar/gkac928); [Pei et al., 2023](https://doi.org/10.1093/database/baad008); [Lomize et al., 2022](https://doi.org/10.1002/pro.4318)).

## **Simplificar las predicciones de interacción proteína-proteína**

AlphaFold-Multimer es capaz de predecir interacciones proteína-proteína y de modelar las estructuras de complejos más grandes. Sin embargo, el proceso requiere una cantidad considerable de tiempo de computación y no tiene en cuenta los datos experimentales previos.

Para facilitar este proceso, los investigadores desarrollaron un paquete de Python llamado [AlphaPulldown](https://www.embl-hamburg.de/AlphaPulldown/). El software reduce el tiempo de computación necesario para seleccionar interacciones proteína-proteína y para el modelado de grandes complejos. También mejora las predicciones de interacción proteína-proteína al agregar otras funcionalidades, incluyendo una línea de análisis para evaluar interfaces predichas con múltiples puntuaciones, una libreta interactiva de Jupyter que facilita el análisis simultáneo de múltiples modelos, y soporte para plantillas multiméricas personalizadas y modelado basado en enlaces cruzados ofrecido a través del programa AlphaLink ([Stahl et al., 2023](https://www.nature.com/articles/s41587-023-01704-z)).

## **Añadir ligandos y cofactores**

AlphaFold2 predice estructuras de proteínas con alta precisión. A menudo predice una forma de proteína unida a un ligando o ion, incluso en ausencia del ligando/ion real. Esto se debe a que AlphaFold2 vio tales conformaciones de proteínas unidas a ligando o ion durante el entrenamiento y ha aprendido estos patrones.

Sin embargo, las estructuras predichas no incluyen pequeñas moléculas como ligandos y cofactores. Estos son a menudo esenciales para la función de la proteína.

Para abordar esta necesidad, los investigadores han desarrollado un método llamado AlphaFill. Este método ‘transplanta’ automáticamente los ligandos faltantes en las estructuras predichas. AlphaFill hace esto comparando la secuencia y la estructura de la proteína objetivo con otras proteínas, cuyas estructuras han sido determinadas por experimentos, incluyendo los ligandos. Esta comparación permite a AlphaFill identificar ligandos adecuados y colocarlos correctamente ([Hekkelman et al., 2022](https://doi.org/10.1038/s41592-022-01685-y)).

AlphaFill está disponible en dos formas. Primero, está en línea como una [base de datos](https://alphafill.eu/): esta contiene las estructuras de la Base de Datos de Estructuras de Proteínas AlphaFold (AFDB), con ligandos transplantados añadidos donde fue posible. Segundo, para quienes necesitan añadir pequeñas moléculas a estructuras personalizadas usando AlphaFill, el [servidor web](https://alphafill.eu/) puede transplantar los ligandos faltantes en las estructuras de proteínas predichas por AlphaFold2.
