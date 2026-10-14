---
layout: default
title: 'AlphaFold Server: tu puerta de entrada a AlphaFold 3'
---

# AlphaFold Server: Tu puerta de entrada a AlphaFold 3

AlphaFold Server es un portal en línea fácil de usar para realizar predicciones estructurales de AlphaFold 3.
AlphaFold Server ejecutará la mayoría de las predicciones estructurales que AlphaFold 3 puede manejar, con algunas limitaciones dictadas por los términos de la licencia. AlphaFold Server también tiene algunas características adicionales para usuarios avanzados.

## Qué puede hacer AlphaFold Server

[AlphaFold Server](https://alphafoldserver.com) es un servicio web impulsado por AlphaFold 3. Puede generar predicciones altamente precisas de las estructuras de complejos biomoleculares que contengan cualquier combinación de proteínas, ADN, ARN, ligandos, iones y modificaciones químicas de proteínas y ácidos nucleicos.

AlphaFold Server está actualmente disponible para uso no comercial para individuos y organizaciones académicas y no comerciales (universidades, organizaciones sin fines de lucro e institutos de investigación, cuerpos educativos y gubernamentales).

Necesitas registrarte usando tu cuenta de Google para usar AlphaFold Server. Sin embargo, el servicio es gratuito y no necesitas instalar ningún software en tu computadora.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.29.09.png)

Figura 39. Una captura de pantalla de la interfaz de usuario de AlphaFold Server. El usuario se está preparando para modelar un complejo proteína-ADN con iones de calcio y sodio.

Puedes usar AlphaFold Server para modelar una estructura compuesta por uno o más de los siguientes tipos de molécula biológica:

* Proteínas
* ADN
* ARN
* Ligandos biológicamente comunes, desde ATP hasta clorofila
* Iones metálicos y cloruro comúnmente encontrados en la biología
* Modificaciones post-traduccionales (PTMs) comunes en la biología de residuos de aminoácidos, desde la fosforilación hasta la citrulina
* Glucosilación de proteínas, incluyendo cadenas de glucanos ramificadas, compuestas de los azúcares más comunes
* Modificaciones químicas comunes del ADN y ARN, como la metilación y la formilación

La estructura modelada puede estar compuesta por múltiples proteínas, ácidos nucleicos, ligandos e iones. Además, cada cadena de proteína y ácido nucleico puede tener cualquier número de modificaciones químicas.

AlphaFold Server intentará modelar todas las interacciones entre todas las moléculas suministradas en la entrada del trabajo. Para obtener la lista completa de los ligandos, iones y modificaciones químicas disponibles, consulta la [AlphaFold Server FAQ](https://alphafoldserver.com/faq#what-biological-molecule-types-can-be-modeled-with-alphafold-server).

AlphaFold Server te permite controlar cómo se utilizan las plantillas estructurales en tus predicciones. Puedes especificar una fecha de corte para las plantillas PDB a utilizar, usar plantillas PDB con la fecha de corte predeterminada o desactivar por completo el uso de plantillas.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.31.38.png)

Figura 40. Una captura de pantalla que muestra la configuración para usar plantillas PDB.

Cada trabajo de modelado está limitado a 5,000 tokens, debido a las altas demandas computacionales de las estructuras más grandes. Un token corresponde a:

* un residuo de aminoácido o un nucleótido,
* un átomo de un ligando, ion o residuo de aminoácido o nucleótido químicamente modificado

La longitud mínima de la secuencia para los macromoléculas es de cuatro aminoácidos o cuatro nucleótidos: esto permite la modelación de complejos con péptidos. No hay límites en la longitud máxima de la secuencia para las cadenas individuales de proteínas y ácidos nucleicos, más allá del límite general de 5,000 tokens.

## Qué no puede hacer AlphaFold Server

AlphaFold Server es solo para uso no comercial, sujeto a los [Términos de Servicio de AlphaFold Server](https://alphafoldserver.com/terms). Las salidas de AlphaFold Server no pueden usarse en herramientas de acoplamiento o filtrado o para entrenar modelos de aprendizaje automático o tecnología relacionada para la predicción de estructuras biomoleculares similares a AlphaFold Server. Sin embargo, puedes publicar, compartir y adaptar la salida de AlphaFold Server de acuerdo con los [Términos de Servicio de AlphaFold Server](https://alphafoldserver.com/terms). Debes proporcionar una notificación clara de que el uso continuo está sujeto a los [Términos de Uso de la Salida de AlphaFold Server](https://alphafoldserver.com/output-terms), y si has hecho alguna modificación a las predicciones.

AlphaFold Server solo soporta los ligandos, iones y modificaciones específicos que están en la lista en las [FAQs](https://alphafoldserver.com/faq#what-biological-molecule-types-can-be-modeled-with-alphafold-server). En particular, AlphaFold Server no es capaz de predecir las posiciones de las moléculas de agua o los átomos de hidrógeno.

AlphaFold Server no es consciente de los planos de la membrana, por lo que las estructuras predichas para las proteínas de membrana no tienen en cuenta el plano de la membrana. Sin embargo, se han reportado casos en los que agregar 50-100 moléculas de ácido graso, como el ácido oleico, a una predicción imita una membrana. Esto incluso puede inducir a AlphaFold Server a predecir la conformación correcta de una proteína de membrana, con los dominios intracelulares y extracelulares adoptando las posiciones correctas.

Cada usuario está limitado a 30 trabajos por día. En el futuro, el equipo planea explorar otros enfoques para la asignación de cuotas, como asignaciones semanales o mensuales. Si no tienes suficiente cuota, puedes guardar tu trabajo y enviarlo cuando tu cuota se renueve (a medianoche, en la zona horaria BST).

Actualmente no es posible personalizar las MSAs o las plantillas, pero el equipo está trabajando en estas características.
Finalmente, AlphaFold Server tiene todas las limitaciones del modelo completo de AlphaFold 3 descrito anteriormente (consulta [Qué dificultades tiene AlphaFold 3](https://www.ebi.ac.uk/training/online/courses/alphafold/introducing-alphafold-3/what-alphafold-3-struggles-with/)).

AlphaFold Server está en desarrollo activo, con muchas más características en la pipeline. Consulta las [notas de actualización de lanzamiento](https://alphafoldserver.com/release-updates) para mantenerte actualizado sobre las últimas mejoras en AlphaFold Server.
