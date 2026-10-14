---
layout: default
title: 'Mejoras a AlphaFold2 de la comunidad científica'
---

# Mejoras a AlphaFold2 por parte de la comunidad científica

**Desde la publicación del código fuente de AlphaFold2, los investigadores han estado ampliando sus capacidades. De esta manera, han logrado avances en problemas que la versión original de AlphaFold2 no estaba entrenada para resolver.**

## **Prediciendo la estructura de las proteínas del sistema inmunitario**

La versión original de AlphaFold2 tuvo dificultades para predecir las estructuras de muchas proteínas del sistema inmunitario, como los anticuerpos y los receptores de células T. Estas moléculas cambian rápidamente en el tiempo evolutivo, lo que las hace especialmente difíciles de analizar.

Grupos de investigación han adaptado partes de AlphaFold2 y AlphaFold-Multimer para construir versiones específicas de anticuerpos de AlphaFold2. Estos paquetes de software predicen las estructuras de los anticuerpos con mucha más precisión que AlphaFold2 ([Abanades et al., 2023](https://doi.org/10.1038/s42003-023-04927-7); [Peng et al., 2023](https://doi.org/10.1101/2023.04.20.537598); [Ruffolo et al., 2023](https://doi.org/10.1038/s41467-023-38063-x)).

Otros grupos han adaptado AlphaFold2 para predecir las estructuras de los receptores de células T. Estos son componentes cruciales del sistema inmunitario adaptativo que reconocen y eliminan patógenos extraños y células anormales. Lo hacen uniéndose a las proteínas del complejo mayor de histocompatibilidad (CMH) en el exterior de las células diana. Ahora, los investigadores están utilizando versiones modificadas de AlphaFold2 para predecir las interacciones de los receptores de células T y los CMH, y los complejos que forman ([Abanades et al., 2023](https://doi.org/10.1038/s42003-023-04927-7); [Yin et al., 2023](https://doi.org/10.1093/nar/gkad356); [Mikhaylov et al., 2023](https://doi.org/10.1101/2023.03.06.531396); [Bradley, 2023](https://doi.org/10.7554/eLife.82813)).

## **Prediciendo las estructuras de las proteínas transmembrana**

AlphaFold2 no es consciente del plano de la membrana, por lo que no puede predecir de forma fiable cómo las interacciones con las membranas afectan a las estructuras de las proteínas. Sin embargo, los investigadores han encontrado formas de abordar este problema.

Múltiples equipos han analizado estructuras de la Base de Datos de Estructuras de Proteínas de AlphaFold y han identificado sus dominios transmembrana. Estas proteínas transmembrana se han recopilado en bases de datos, lo que permite a los investigadores visualizar las posiciones más probables de los planos de la membrana ([Dobson et al., 2022](https://doi.org/10.1093/nar/gkac928); [Pei et al., 2023](https://doi.org/10.1093/database/baad008); [Lomize et al., 2022](https://doi.org/10.1002/pro.4318)).

## **Agilizando las predicciones de interacción proteína-proteína**

AlphaFold-Multimer es capaz de predecir las interacciones proteína-proteína y de modelar las estructuras de complejos más grandes. Sin embargo, el proceso requiere una cantidad considerable de tiempo de cálculo y no tiene en cuenta los datos experimentales previos.

Para ayudar a este proceso, los investigadores desarrollaron un paquete de Python llamado [AlphaPulldown](https://www.embl-hamburg.de/AlphaPulldown/). El software reduce el tiempo de cálculo necesario para buscar interacciones proteína-proteína y para modelar complejos grandes. También mejora las predicciones de interacción proteína-proteína añadiendo otras funcionalidades, incluyendo una línea de análisis para evaluar las interfaces predichas con múltiples puntuaciones, un cuaderno interactivo de Jupyter que facilita el análisis simultáneo de múltiples modelos, y soporte para plantillas multiméricas personalizadas y modelado basado en enlaces cruzados ofrecido a través del programa AlphaLink ([Stahl et al., 2023](https://www.nature.com/articles/s41587-023-01704-z)).

## **Añadiendo ligandos y cofactores**

AlphaFold2 predice las estructuras de las proteínas con alta precisión. A menudo puede predecir una forma de proteína unida a un ligando o ion, incluso en ausencia del ligando/ion real. Esto se debe a que AlphaFold2 vio tales conformaciones de proteínas unidas a ligandos o iones durante el entrenamiento y ha aprendido estos patrones.

Sin embargo, las estructuras predichas no incluyen moléculas pequeñas como ligandos y cofactores. Estos son a menudo esenciales para la función de la proteína.

Para abordar esta necesidad, los investigadores han desarrollado un método llamado AlphaFill. Este ‘trasplanta’ automáticamente ligandos faltantes en las estructuras predichas. AlphaFill lo hace comparando la secuencia y la estructura de la proteína objetivo con otras proteínas, cuyas estructuras han sido determinadas experimentalmente – incluyendo ligandos. Esta comparación permite a AlphaFill identificar ligandos adecuados y colocarlos correctamente ([Hekkelman et al., 2022](https://doi.org/10.1038/s41592-022-01685-y)).

AlphaFill está disponible en dos formatos. Primero, está disponible en línea como una [base de datos](https://alphafill.eu/): esta contiene las estructuras de la Base de Datos de Estructuras Proteicas de AlphaFold (AFDB), con ligandos trasplantados añadidos siempre que fue posible. Segundo, para aquellos que necesiten añadir moléculas pequeñas a estructuras personalizadas usando AlphaFill, el [servidor web](https://alphafill.eu/) puede trasplantar ligandos faltantes en estructuras proteicas predichas de AlphaFold2.
