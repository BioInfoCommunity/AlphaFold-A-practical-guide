---
layout: default
title: 'Elige cómo acceder a AlphaFold2'
---

# Cómo acceder a AlphaFold2

**Hay múltiples formas de acceder a AlphaFold2, desde simplemente ver una estructura de proteína predicha en línea en la Base de Datos de Estructuras de Proteínas AlphaFold, hasta instalar el código fuente y realizar predicciones personalizadas tú mismo. Debes elegir con cuidado, basado en tus necesidades y los recursos que tienes disponibles.**

## **Un flujo de trabajo común con AlphaFold2**

* Como un primer enfoque, puedes verificar si el monómero de la proteína de interés ya está disponible en la Base de Datos de Estructuras de Proteínas AlphaFold. Si es así, deberías evaluar la estructura propuesta basada en las métricas de confianza.
* Si no está disponible, puedes usar un Colab como [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb). Esto te dará un punto de partida para predecir tu proteína. Puedes predecir la forma oligomérica de la proteína y/o un complejo proteína-proteína y obtener un control extendido sobre MSAs y plantillas. Además, [ColabFold batch](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/batch/AlphaFold2_batch.ipynb) está disponible para predecir unas pocas cientos de estructuras de proteínas.
* Finalmente, si planeas predecir un número considerable de estructuras, considera instalar AlphaFold2 localmente en una estación de trabajo potente con una GPU de última generación. Incluso podrías usar un clúster computacional, por ejemplo, para la detección de interacciones proteína-proteína. Ten en cuenta que la instalación local puede ser desafiante.

**Nota:** Estas herramientas de investigación están todas disponibles gratuitamente tanto para uso académico como comercial, bajo licencias de código abierto permisivas.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2024/02/Workflow.png)

Figura 20. Un flujo de trabajo típico con AlphaFold, mostrando cómo predecir una estructura de proteína. El flujo de trabajo comienza con el enfoque menos intensivo computacionalmente, escalando solo si eso no funciona.

Las ventajas y desventajas de las tres formas de acceder a AlphaFold.

|  | VENTAJAS | DESVENTAJAS |
| --- | --- | --- |
| Código fuente de AlphaFold | * Personalización completa de las predicciones de estructuras. * Reproducibilidad. * Puede realizar predicciones de estructuras en masa. * Proporciona un conjunto completo de salidas, incluyendo MSA. | * Necesita recursos computacionales importantes (GPU de última generación y 3 TB de espacio en disco, idealmente SSD). * Complejidad de los procedimientos de instalación. * Solo en Linux. |
| ColabFold o AlphaFold Colab | * No se necesita instalación: usa una plataforma basada en la nube gratuita con acceso a recursos computacionales. * Fácil de usar. * Proporciona todos los datos sobre MSA utilizados. | * Recursos limitados en el modo gratuito. * Puedes actualizar a Colab Pro, pero eso requiere una suscripción. * AlphaFold Colab: Control limitado sobre configuraciones. |
| Base de Datos de Estructuras de Proteínas AlphaFold (AFDB) | * Accesible gratuitamente. * Los usuarios pueden simplemente buscar una secuencia de proteínas y descargar la estructura predicha correspondiente. * Sin tiempos de espera. * Descarga en masa disponible. * Metadatos disponibles. | * La proteína de interés podría estar ausente. * Solo monómeros. * Solo se alojan estructuras precomputadas. * Los usuarios no pueden ejecutar sus propias predicciones de estructuras. * MSAs no disponibles para predicciones de estructuras. |
