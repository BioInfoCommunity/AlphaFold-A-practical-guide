---
layout: default
title: 'Cómo acceder a AlphaFold2'
---

# Eligiendo cómo acceder a AlphaFold2

**Hay múltiples maneras de acceder a AlphaFold2, desde simplemente visualizar una estructura de proteína predicha en línea en la Base de Datos de Estructuras de Proteínas AlphaFold, hasta instalar el código fuente y ejecutar tus propias predicciones personalizadas. Debes elegir cuidadosamente, basándote en tus necesidades y los recursos que tengas disponibles.**

## **Un flujo de trabajo común con AlphaFold**2

* Como primer enfoque, puedes comprobar si el monómero de la proteína de interés ya está disponible en la Base de Datos de Estructuras de Proteínas AlphaFold. Si lo está, deberías evaluar la estructura propuesta basándote en las métricas de confianza.
* Si no está disponible, puedes usar un Colab como [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb). Esto te dará un punto de partida para predecir tu proteína. Puedes predecir la forma oligomérica de la proteína, y/o un complejo proteína-proteína y obtener un control extendido sobre las MSAs y las plantillas. Además, [ColabFold batch](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/batch/AlphaFold2_batch.ipynb) está disponible para predecir unos cientos de estructuras de proteínas.
* Por último, si planeas predecir un número considerable de estructuras, considera instalar AlphaFold2 localmente en una estación de trabajo potente con una GPU de última generación. Incluso podrías usar un clúster de computación, por ejemplo, para el cribado de interacciones proteína-proteína. Ten en cuenta que la instalación local puede ser complicada.

**Nota:** Estas herramientas de investigación están disponibles gratuitamente tanto para uso académico como comercial, bajo licencias de código abierto permisivas.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/02/Workflow.png)

Figura 20. Un flujo de trabajo típico con AlphaFold, que muestra cómo predecir una estructura de proteína. El flujo de trabajo comienza con el enfoque computacionalmente menos intensivo, escalando solo si eso no funciona.

Los pros y los contras de las tres formas de acceder a AlphaFold.

|  | VENTAJAS | DESVENTAJAS |
| --- | --- | --- |
| Código fuente de AlphaFold | * Personalización completa de las predicciones de estructura. * Reproducibilidad. * Puede realizar predicciones de estructura a granel. * Proporciona un conjunto completo de salidas, incluyendo MSA. | * Necesita importantes recursos computacionales (GPU de última generación y 3 TB de espacio en disco, idealmente SSD). * Complejidad de los procedimientos de instalación. * Solo en Linux. |
| ColabFold o AlphaFold Colab | * No necesita instalación: utiliza una plataforma en la nube gratuita con acceso a recursos computacionales. * Fácil de usar. * Proporciona datos completos sobre la MSA utilizada. | * Recursos limitados en el modo gratuito. * Se puede actualizar a Colab Pro, pero eso requiere una suscripción. * AlphaFold Colab: Control limitado sobre las configuraciones. |
| Base de Datos de Estructuras de Proteínas AlphaFold (AFDB) | * Accesible gratuitamente. * Los usuarios pueden simplemente buscar una secuencia de proteína y descargar la estructura predicha correspondiente. * Sin tiempos de espera. * Descarga masiva disponible. * Metadatos disponibles. | * La proteína de interés podría faltar. * Solo monómeros. * Solo se alojan estructuras precalculadas. * Los usuarios no pueden ejecutar sus propias predicciones de estructura. * Las MSAs no están disponibles para las predicciones de estructura. |
