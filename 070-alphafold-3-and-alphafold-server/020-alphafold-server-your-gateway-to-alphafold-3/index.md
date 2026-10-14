---
layout: default
title: 'AlphaFold Server: Tu acceso a AlphaFold 3'
---

# AlphaFold Server: Tu puerta de entrada a AlphaFold 3

AlphaFold Server es un portal online fácil de usar para realizar predicciones de estructura con AlphaFold 3.
AlphaFold Server ejecutará la mayoría de las predicciones estructurales que AlphaFold 3 puede manejar, con algunas limitaciones dictadas por los términos de la licencia. AlphaFold Server también tiene algunas características adicionales para usuarios avanzados.

## Lo que AlphaFold Server puede hacer

[AlphaFold Server](https://alphafoldserver.com) es un servicio web impulsado por AlphaFold 3. Puede generar predicciones altamente precisas de las estructuras de complejos biomoleculares que contienen cualquier combinación de proteínas, ADN, ARN, ligandos, iones y modificaciones químicas de proteínas y ácidos nucleicos.

Actualmente, AlphaFold Server está disponible para uso no comercial para individuos y organizaciones académicas y sin fines de lucro (universidades, organizaciones sin fines de lucro e institutos de investigación, organismos educativos y gubernamentales).

Necesitas registrarte usando tu cuenta de Google para usar AlphaFold Server. Sin embargo, el servicio es gratuito y no necesitas instalar ningún software en tu ordenador.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.29.09.png)

Figura 39. Una captura de pantalla de la interfaz de usuario de AlphaFold Server. El usuario se está preparando para modelar un complejo proteína-ADN con iones calcio y sodio.

Puedes usar AlphaFold Server para modelar una estructura que conste de uno o más de los siguientes tipos de biomoléculas:

* Proteínas
* ADN
* ARN
* Ligandos biológicamente comunes que van desde el ATP hasta la clorofila
* Iones metálicos y iones cloruro biológicamente comunes
* Modificaciones postraduccionales (PTM) biológicamente comunes de residuos de aminoácidos, que van desde la fosforilación hasta la citrulinación
* Glicosilación de proteínas, incluyendo cadenas de glucanos ramificadas, compuestas por los azúcares más comunes
* Modificaciones químicas biológicamente comunes de ADN y ARN, como la metilación y la formilación

La estructura modelada puede estar compuesta por múltiples proteínas, ácidos nucleicos, ligandos e iones. Además, cada cadena de proteína y ácido nucleico puede tener cualquier número de modificaciones químicas.

AlphaFold Server intentará modelar todas las interacciones entre todas las moléculas suministradas en la entrada del trabajo. Para la lista completa de ligandos, iones y modificaciones químicas disponibles, consulta las [Preguntas frecuentes de AlphaFold Server](https://alphafoldserver.com/faq#what-biological-molecule-types-can-be-modeled-with-alphafold-server).

AlphaFold Server te permite controlar cómo se utilizan las plantillas estructurales en tus predicciones. Puedes especificar una fecha de corte para las plantillas PDB que se utilizarán, utilizar plantillas PDB con la fecha de corte predeterminada o desactivar el uso de plantillas por completo.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.31.38.png)

Figura 40. Una captura de pantalla que muestra la configuración para usar plantillas PDB.

Cada trabajo de modelado está limitado a 5.000 tokens, debido a las altas demandas computacionales de estructuras más grandes. Un token corresponde a:

* un residuo de aminoácido o un nucleótido,
* un átomo de un ligando, ion o residuo de aminoácido o nucleótido modificado químicamente

La longitud mínima de secuencia para las macromoléculas es de cuatro aminoácidos o cuatro nucleótidos: esto permite modelar complejos con péptidos. No hay límites en la longitud máxima de secuencia para las cadenas individuales de proteínas y ácidos nucleicos, aparte del límite general de 5.000 tokens.

## Lo que AlphaFold Server no puede hacer

AlphaFold Server es solo para uso no comercial, sujeto a los [Términos de Servicio de AlphaFold Server](https://alphafoldserver.com/terms). Los resultados de AlphaFold Server no pueden utilizarse en herramientas de acoplamiento o cribado, o para entrenar modelos de aprendizaje automático o tecnología relacionada para la predicción de la estructura biomolecular similar a AlphaFold Server. Sin embargo, puedes publicar, compartir y adaptar los resultados de AlphaFold Server de acuerdo con los [Términos de Servicio de AlphaFold Server](https://alphafoldserver.com/terms). Debes proporcionar un aviso claro de que el uso continuo está sujeto a los [Términos de Uso de los Resultados de AlphaFold Server](https://alphafoldserver.com/output-terms), y si has realizado alguna modificación a las predicciones.

AlphaFold Server solo admite los ligandos, iones y modificaciones específicos que están en la lista en las [Preguntas Frecuentes](https://alphafoldserver.com/faq#what-biological-molecule-types-can-be-modeled-with-alphafold-server). En particular, AlphaFold Server no es capaz de predecir las posiciones de las moléculas de agua o los átomos de hidrógeno.

AlphaFold Server no tiene en cuenta los planos de membrana, por lo que las estructuras predichas para las proteínas de membrana no tienen en cuenta el plano de la membrana. Sin embargo, ha habido informes de que agregar de 50 a 100 moléculas de ácidos grasos, como el ácido oleico, a una predicción imita una membrana. Esto incluso puede inducir a AlphaFold Server a predecir la conformación correcta de una proteína de membrana, con los dominios intracelulares y extracelulares adoptando posiciones correctas.

Cada usuario está limitado a 30 trabajos por día. En el futuro, el equipo planea explorar otros enfoques para la asignación de cuotas, como asignaciones semanales o mensuales. Si no tienes suficiente cuota, puedes guardar tu trabajo y enviarlo cuando se actualice tu cuota (a medianoche, hora de verano británica).

Actualmente no es posible personalizar los MSA o las plantillas, pero el equipo está trabajando en estas funciones.
Finalmente, AlphaFold Server tiene todas las limitaciones del modelo completo AlphaFold 3 descrito anteriormente (consulta [Con qué tiene dificultades AlphaFold 3](https://www.ebi.ac.uk/training/online/courses/alphafold/introducing-alphafold-3/what-alphafold-3-struggles-with/)).

AlphaFold Server está en desarrollo activo, con muchas más funciones en camino. Consulta las [notas de actualización de la versión](https://alphafoldserver.com/release-updates) para mantenerte actualizado sobre las últimas mejoras en AlphaFold Server.
