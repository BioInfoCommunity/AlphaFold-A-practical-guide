---
layout: default
title: 'Cómo generar predicciones con AlphaFold Server: una guía paso a paso'
---

# Una guía paso a paso para generar predicciones con AlphaFold Server

AlphaFold Server fue diseñado para un uso sencillo e intuitivo. Para una introducción simple al flujo de trabajo, consulta el vídeo a continuación.

AlphaFold Server Demo

Es fácil y directo especificar las entradas de AlphaFold Server:

* Para una proteína, introduce la secuencia de aminoácidos de una sola letra. Alternativamente, pega el contenido de un archivo FASTA. Si tienes múltiples proteínas, puedes poner todas sus secuencias en un solo archivo FASTA (consulta abajo). Utiliza solo códigos estándar de una sola letra. No se admiten códigos no estándar como B, J, O, U, X y Z.
* Para ADN, introduce la secuencia de nucleótidos de una sola letra en notación estándar (5’-3’). Utiliza solo códigos estándar de una sola letra, es decir, A, C, G y T.
* Para ARN, de manera similar, introduce la secuencia de nucleótidos de una sola letra en notación estándar (5’-3’). Utiliza solo códigos estándar de una sola letra, es decir, A, C, G y U.
* Para ligandos, iones y modificaciones postraduccionales, selecciona la entidad deseada de la lista. Los códigos de tres letras que se muestran en la interfaz provienen del [Diccionario de Componentes Químicos (CCD)](https://www.wwpdb.org/data/ccd) del Banco Mundial de Datos de Proteínas (Worldwide Protein Data Bank).

## Añadiendo complejos

Si están presentes múltiples copias de una entidad (por ejemplo, una proteína homotetramérica), indícalo estableciendo el número de copias en el campo correspondiente.

Si estás modelando un complejo grande, necesitarás rellenar múltiples secuencias. Para hacerlo rápidamente, pega el contenido de un archivo FASTA. Simplemente abre un archivo FASTA que contenga tus secuencias en cualquier editor de texto, copia todo el contenido y pégalo en la caja de entrada de texto de AlphaFold Server. El Servidor reconocerá el formato FASTA y rellenará múltiples entidades automáticamente. También reconocerá secuencias de proteínas, ADN y ARN y asignará el tipo de entidad correcto.

El menú de elipsis vertical (tres puntos) ⋮ en el lado derecho de cada entidad permite varias opciones diferentes, dependiendo del tipo de entidad.

## Añadiendo modificaciones

Para proteínas, puedes añadir modificaciones postraduccionales (PTMs). Seleccionar la opción “+ PTMs” abrirá una ventana de diálogo que mostrará la secuencia de la cadena proteica. Haz clic en un residuo al que deseas añadir una PTM y elige una modificación compatible de la lista que aparece. Puedes añadir múltiples modificaciones a diferentes residuos uno a la vez. Una vez terminado, guarda las modificaciones mediante el botón correspondiente.

Ten en cuenta que, una vez que añades una PTM y la guardas, no puedes editar la secuencia de la proteína. Para obtener información detallada sobre el modelado de la glicosilación de proteínas, consulta las [Preguntas Frecuentes de AlphaFold Server](https://alphafoldserver.com/faq#can-i-model-glycosylated-proteins).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-17.55.28.png)

Figura 41. Una captura de pantalla que muestra la ventana para añadir modificaciones postraduccionales.

Para las cadenas de ADN y ARN, puedes añadir modificaciones químicas a los nucleótidos correspondientes. El procedimiento funciona exactamente como se describe anteriormente para las proteínas.

AlphaFold Server trata las entidades “ADN” y “ARN” como hebras simples. Esto facilita la adición de modificaciones químicas, ya que las modificaciones del ADN de doble hebra podrían ser diferentes para las dos hebras complementarias.

Para modelar el ADN de doble cadena, añade la primera entidad de ADN y completa la secuencia, ya sea copiándola y pegándola o escribiéndola. Luego, selecciona la opción “+ Complemento inverso” del menú de los tres puntos verticales ⋮⋮ para añadir la cadena complementaria; se añadirá como una entidad de ADN separada.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.53.32.png)

Figura 42. Una captura de pantalla que muestra la interfaz de entrada para definir una entidad de ADN, incluyendo opciones para especificar la secuencia, añadir modificaciones o generar el complemento inverso.

Es posible cambiar el orden de las entidades. Simplemente arrastra las entidades usando los tres puntos grises ⋮⋮ a su izquierda hasta que obtengas el orden correcto. AlphaFold Server normalmente se adhiere a tu orden de entrada, por lo que deberías encontrar las entidades en el mismo orden en la estructura modelada y en los archivos mmCIF de salida. Sin embargo, hay una excepción: el estándar mmCIF dicta que los ligandos y los iones deben aparecer al final, por lo que AlphaFold Server puede reordenar las entradas para ponerlos al final.

Para borrar todas las entradas, simplemente usa el botón “Clear” (“Borrar”) en la esquina superior derecha.

Es posible guardar trabajos en borrador y modificarlos o ejecutarlos más tarde. Si pulsas el botón “Save job” (“Guardar trabajo”), el sistema te pedirá el nombre del trabajo y lo guardará. Los trabajos guardados se muestran en History (“Historial”) junto con los trabajos en curso y los finalizados, y están marcados con el icono correspondiente. Para un acceso más fácil, puedes hacer clic en las categorías en la parte superior de la lista de History para filtrar por ciertos tipos de trabajos, por ejemplo, “Completed” (“Completados”) o “Saved draft” (“Borrador guardado”). Guardar el trabajo puede ser útil si te quedas sin tu cuota diaria de trabajos: puedes guardar varios trabajos y ejecutarlos al día siguiente una vez que se renueve la asignación de trabajos.

## Envío de trabajos

Después de haber preparado todas las entradas, pulsa el botón “Continue and preview job” (“Continuar y previsualizar trabajo”). El diálogo te permite especificar un nombre de trabajo significativo; si no lo haces, se utilizará la fecha y la hora actuales. También puedes cambiar entre un valor de semilla definido automáticamente y uno definido manualmente para este trabajo (para más información sobre las semillas, consulta las características avanzadas de AlphaFold Server y la sección de [FAQ](https://alphafoldserver.com/faq#what-are-seeds-and-how-are-they-set)) correspondiente).

Comprueba que todas las entradas son correctas. También puedes querer anotar el número de trabajos restantes para una mejor planificación de tus esfuerzos de modelado. Finalmente, pulsa “Confirm and submit job” (“Confirmar y enviar trabajo”). El número de trabajos restantes disminuirá en uno y el trabajo aparecerá en la lista de History como un trabajo en progreso.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.13.35.png)

Figura 43. La lista de History, mostrando múltiples trabajos en AlphaFold Server. El primero está en curso, los demás han finalizado.

## Resultados

Normalmente, un trabajo se completará en varios minutos. Por ejemplo, suele tardar entre 3 y 6 minutos en predecir una estructura con 1.000 tokens y entre 6 y 8 minutos en predecir una estructura con 3.600 tokens. Sin embargo, una carga pesada del servidor puede causar retrasos. Cuando un trabajo ha finalizado, su icono cambia y puedes hacer doble clic en él para ver los resultados.

El menú de los tres puntos verticales ⋮ a la derecha de cada trabajo en History te permite:

* Eliminar el trabajo de la lista
* Renombrar el trabajo
* Para trabajos finalizados, abre la página de resultados o descarga las estructuras predichas
* “Clona y reutiliza” el trabajo. Esto traerá todas sus entradas de nuevo a la interfaz de creación del trabajo: puedes entonces volver a ejecutar el trabajo tal cual, o editarlo y volver a ejecutarlo con modificaciones (creando un nuevo trabajo en el proceso). Esto es útil si estás generando una serie de predicciones de estructura similares, por ejemplo, la misma proteína con diferentes ADNs.

Extremadamente raramente (menos del 0.1% de todas las envíos de trabajos), los trabajos de modelado pueden fallar. Los trabajos fallidos se marcarán con un icono específico y al hacer clic en el trabajo se mostrará el error exacto. Volver a enviar un trabajo a menudo ayuda si la razón del fallo es técnica. Una posible razón para que falle un trabajo es si la secuencia enviada es muy similar a una secuencia de un patógeno viral que ha sido colocado en la lista restringida (para más detalles, consulta [AlphaFold Server FAQ](https://alphafoldserver.com/faq#are-there-any-restrictions-on-the-protein-sequences-that-are-allowed)).

Una vez que el trabajo esté finalizado, hacer clic en su fila te llevará a la página de resultados. La página de resultados muestra:

* Visualización de la cadena principal de la estructura, coloreada por las puntuaciones pLDDT
* Gráfico PAE
* Puntuación pTM general
* Puntuación ipTM general si la estructura es un complejo (para más información sobre estas métricas de confianza, consulta la subsección “[Interpreting results from AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/interpreting-results-from-alphafold-server/)“)
* Información sobre las entradas del trabajo, incluido el valor de la semilla aleatoria
* Botones “Descargar” y “Clonar y reutilizar”
* Un enlace para proporcionar comentarios sobre la estructura

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-17.06.35.png)

Figura 44. Una página de resultados de ejemplo en el AlphaFold Server

Puedes descargar todos los resultados del modelado en un único archivo zip. Contiene las coordenadas atómicas de las estructuras predichas en formato mmCIF e información adicional sobre las puntuaciones de confianza en los archivos JSON (para más detalles sobre las salidas, consulta [Interpreting results from AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/interpreting-results-from-alphafold-server/)).
