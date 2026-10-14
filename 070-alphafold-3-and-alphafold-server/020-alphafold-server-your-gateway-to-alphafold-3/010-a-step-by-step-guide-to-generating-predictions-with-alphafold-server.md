---
layout: default
title: 'Una guía paso a paso para generar predicciones con AlphaFold Server'
---

# Una guía paso a paso para generar predicciones con AlphaFold Server

AlphaFold Server fue diseñado para un uso sencillo e intuitivo. Para una introducción sencilla al flujo de trabajo, consulta el video a continuación.

AlphaFold Server Demo

Es fácil y directo especificar las entradas de AlphaFold Server:

* Para una proteína, introduce la secuencia de aminoácidos en código de una sola letra. Alternativamente, pega el contenido de un archivo FASTA. Si tienes múltiples proteínas, puedes poner todas sus secuencias en un solo archivo FASTA (ver abajo). Usa solo códigos estándar de una sola letra. Los códigos no estándar como B, J, O, U, X y Z no son soportados.
* Para ADN, introduce la secuencia de nucleótidos en código de una sola letra en notación estándar (5’-3’). Usa solo códigos estándar de una sola letra, es decir, A, C, G y T.
* Para ARN, introduce de manera similar la secuencia de nucleótidos en código de una sola letra en notación estándar (5’-3’). Usa solo códigos estándar de una sola letra, es decir, A, C, G y U.
* Para ligandos, iones y modificaciones post-traduccionales, selecciona la entidad deseada de la lista. Los códigos de tres letras mostrados en la interfaz provienen del [Diccionario de Componentes Químicos (CCD)](https://www.wwpdb.org/data/ccd) de la Worldwide Protein Data Bank.

## Añadiendo complejos

Si hay múltiples copias de una entidad (por ejemplo, una proteína homomultimérica), indica esto estableciendo el número de copias en el campo correspondiente.

Si estás modelando un complejo grande, necesitarás rellenar múltiples secuencias. Para hacerlo rápidamente, pega el contenido de un archivo FASTA. Simplemente abre un archivo FASTA que contenga tus secuencias en cualquier editor de texto, copia todo el contenido y pégalo en el cuadro de entrada de texto de AlphaFold Server. El servidor reconocerá el formato FASTA y rellenará múltiples entidades automáticamente. También reconocerá secuencias de proteínas, ADN y ARN y asignará el tipo de entidad correcto.

El menú de puntos suspensivos verticales (tres puntos) ⋮ en el lado derecho de cada entidad permite varias opciones diferentes, dependiendo del tipo de entidad.

## Añadiendo modificaciones

Para proteínas, puedes añadir modificaciones post-traduccionales (PTMs). Seleccionar la opción “+ PTMs” abrirá una ventana de diálogo mostrando la secuencia de la cadena de proteínas. Haz clic en un residuo al que deseas añadir una PTM y elige una modificación soportada de la lista que aparece. Puedes añadir múltiples modificaciones a diferentes residuos uno a uno. Una vez terminado, guarda las modificaciones a través del botón correspondiente.

Ten en cuenta que, una vez que añadas una PTM y la guardes, no podrás editar la secuencia de la proteína. Para obtener información detallada sobre la modelización de la glucosilación de proteínas, consulta la [AlphaFold Server FAQ](https://alphafoldserver.com/faq#can-i-model-glycosylated-proteins).

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-17.55.28.png)

Figura 41. Una captura de pantalla mostrando la ventana para añadir modificaciones post-traduccionales.

Para cadenas de ADN y ARN, puedes añadir modificaciones químicas a los nucleótidos correspondientes. El procedimiento funciona exactamente como se describió anteriormente para proteínas.

AlphaFold Server trata las entidades “ADN” y “ARN” como hebras simples. Esto facilita añadir modificaciones químicas, ya que las modificaciones del ADN de doble hebra podrían ser diferentes para las dos hebras complementarias.

Para modelar ADN de doble cadena, agrega la primera entidad de ADN y completa la secuencia, ya sea copiando y pegando o escribiéndola. Luego selecciona la opción “+ Complemento inverso” del menú de puntos suspensivos verticales para agregar la hebra complementaria; se agregará como una entidad de ADN separada.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-16.53.32.png)

Figura 42. Una captura de pantalla que muestra la interfaz de entrada para definir una entidad de ADN, incluyendo opciones para especificar la secuencia, agregar modificaciones o generar el complemento inverso.

Es posible cambiar el orden de las entidades. Simplemente arrastra las entidades usando los puntos grises de dos por tres ⋮⋮ a su izquierda hasta que obtengas el orden correcto. AlphaFold Server generalmente sigue tu orden de entrada, por lo que deberías encontrar las entidades en el mismo orden en la estructura modelada y los archivos de salida mmCIF. Sin embargo, hay una excepción: el estándar mmCIF establece que los ligandos y los iones deben listarse al final, por lo que AlphaFold Server puede reordenar las entradas para colocarlos al final.

Para borrar todas las entradas, solo usa el botón “Borrar” en la esquina superior derecha.

Es posible guardar trabajos en borrador y modificarlos o ejecutarlos más tarde. Si presionas el botón “Guardar trabajo”, el sistema te pedirá el nombre del trabajo y lo guardará. Los trabajos guardados se muestran en el Historial junto con los trabajos en ejecución y terminados, y están marcados por el icono correspondiente. Para un acceso más fácil, puedes hacer clic en las categorías en la parte superior de la lista de Historial para filtrar ciertos tipos de trabajos, por ejemplo, “Completado” o “Borrador guardado”. Guardar el trabajo puede ser útil si agotas tu cuota diaria de trabajos: puedes guardar varios trabajos y ejecutarlos al día siguiente una vez que se renueve la asignación de trabajos.

## Envío de trabajos

Después de preparar todas las entradas, presiona el botón “Continuar y previsualizar trabajo”. El cuadro de diálogo te permite especificar un nombre de trabajo significativo; si no lo haces, se usará la fecha y hora actuales. También puedes cambiar entre un valor de semilla definido automáticamente y manualmente para este trabajo (para más información sobre las semillas, consulta las Características avanzadas de AlphaFold Server y la correspondiente [sección de preguntas frecuentes](https://alphafoldserver.com/faq#what-are-seeds-and-how-are-they-set)).

Verifica que todas las entradas sean correctas. También puedes querer anotar el número de trabajos restantes para una mejor planificación de tus esfuerzos de modelado. Finalmente, presiona “Confirmar y enviar trabajo”. El número de trabajos restantes disminuirá en uno y el trabajo aparecerá en la lista de Historial como un trabajo en progreso.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.13.35.png)

Figura 43. La lista de Historial, mostrando múltiples trabajos en AlphaFold Server. El de arriba está en ejecución, los otros han terminado.

## Resultados

Normalmente, un trabajo terminará en varios minutos. Por ejemplo, generalmente toma 3-6 minutos predecir una estructura con 1,000 tokens y 6-8 minutos predecir una estructura con 3,600 tokens. Sin embargo, cargas pesadas en el servidor pueden causar retrasos. Cuando un trabajo ha terminado, su icono cambia y puedes hacer doble clic en él para ver los resultados.

El menú de puntos suspensivos verticales ⋮ a la derecha de cada trabajo en el Historial te permite:

* Elimina el trabajo de la lista
* Renombra el trabajo
* Para los trabajos terminados, abre la página de resultados o descarga las estructuras predichas
* “Clona y reutiliza” el trabajo. Esto devolverá todas sus entradas a la interfaz de creación de trabajos: puedes volver a ejecutar el trabajo tal como está, o editarlo y volver a ejecutarlo con modificaciones (creando un nuevo trabajo en el proceso). Esto es útil si estás generando una serie de predicciones de estructuras similares, por ejemplo, la misma proteína con diferentes ADN.

Extremadamente raramente (menos del 0.1% de todas las presentaciones de trabajos), los trabajos de modelado pueden fallar. Los trabajos fallidos se marcarán con un icono específico y hacer clic en el trabajo mostrará el error exacto. Volver a enviar un trabajo a menudo ayudará si la razón del fallo es técnica. Una posible razón para que un trabajo falle es si la secuencia enviada es altamente similar a una secuencia de un patógeno viral que ha sido colocado en la lista restringida (para más detalles consulta [AlphaFold Server FAQ](https://alphafoldserver.com/faq#are-there-any-restrictions-on-the-protein-sequences-that-are-allowed)).

Una vez que el trabajo esté terminado, hacer clic en su fila te llevará a la página de resultados. La página de resultados muestra:

* Visualización de la columna vertebral de la estructura, coloreada por puntuaciones pLDDT
* Gráfico PAE
* Puntuación pTM general
* Puntuación ipTM general si la estructura es un complejo (para más sobre estas métricas de confianza, consulta la subsección “[Interpreting results from AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/interpreting-results-from-alphafold-server/)“)
* Información sobre las entradas del trabajo, incluyendo el valor de la semilla aleatoria
* Botones “Descargar” y “Clona y reutiliza”
* Un enlace para proporcionar comentarios sobre la estructura

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-17.06.35.png)

Figura 44. Una página de resultados de ejemplo en el AlphaFold Server

Puedes descargar todos los resultados de modelado en un solo archivo zip. Contiene las coordenadas atómicas de las estructuras predichas en formato mmCIF y información adicional sobre las puntuaciones de confianza en los archivos JSON (para más detalles sobre las salidas, consulta [Interpreting results from AlphaFold Server](https://www.ebi.ac.uk/training/online/courses/alphafold/interpreting-results-from-alphafold-server/)).
