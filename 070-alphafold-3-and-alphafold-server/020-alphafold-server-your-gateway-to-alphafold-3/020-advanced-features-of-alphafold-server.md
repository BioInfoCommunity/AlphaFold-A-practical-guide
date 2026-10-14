---
layout: default
title: 'Características avanzadas del servidor AlphaFold'
---

# Características avanzadas del AlphaFold Server

AlphaFold Server se diseñó principalmente como una herramienta fácil de usar. El objetivo es desbloquear el modelado de biomoléculas para los biólogos, incluidos aquellos sin experiencia en métodos computacionales.

Sin embargo, AlphaFold Server sí proporciona opciones adicionales y posibilidades de automatización para usuarios más avanzados.

## Envío de trabajos en formato JSON

Puedes especificar un trabajo de AlphaFold Server usando un archivo JSON, en lugar de la interfaz web visual estándar. Esto podría usarse para generar trabajos automáticamente, por ejemplo, para el cribado computacional de interacciones proteína-proteína.

Puedes importar múltiples trabajos borradores subiendo archivos JSON con hasta 100 trabajos por archivo. Sin embargo, ten en cuenta que solo se te permite hasta 500 borradores guardados en tu Historial.

Para crear un archivo JSON, consulta esta [documentación y ejemplos](https://github.com/google-deepmind/alphafold/blob/main/server/README.md). Sin embargo, no necesitas empezar de cero. Dentro de cada archivo zip con resultados de modelado, descargado del AlphaFold Server, encontrarás un archivo JSON llamado **fold\_<job\_name>\_job\_request.json.** Este contiene todas las entradas del trabajo que se especificaron a través de la interfaz web. Estos archivos ofrecen un punto de partida conveniente para generar nuevos trabajos: son fácilmente editables en editores de texto estándar o en un sistema de programación como Google Colab notebooks.

Una vez que tu archivo JSON esté preparado, haz clic en el botón ‘Subir JSON’ para subirlo. Los trabajos importados aparecerán como borradores guardados en tu historial de trabajos y puedes hacer clic en tus trabajos para editarlos o ejecutarlos. Ten en cuenta que ejecutar trabajos especificados a través de archivos JSON utilizará tu cuota de trabajos de la misma manera que los trabajos normales especificados a través de la interfaz web.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-17.10.52.png)

Figura 43. Una captura de pantalla para mostrar la ventana de diálogo para subir entradas JSON.

## Muestreo de múltiples semillas

En comparación con sistemas más antiguos, AlphaFold 3 a menudo produce predicciones estructurales más precisas para objetivos tan difíciles como los complejos antígeno-anticuerpo. Sin embargo, lograr la mayor precisión a menudo requiere un muestreo extenso del espacio latente, es decir, la generación y posterior clasificación de numerosas predicciones usando diferentes semillas aleatorias. En tales casos, hemos visto que las predicciones mejoran incluso hasta 1,000 semillas. Sin embargo, 20 semillas suelen ser suficientes para obtener una predicción de confianza y precisión razonables.

Actualmente, AlphaFold Server ejecuta solo una semilla para cada trabajo. Si deseas muestrear múltiples semillas, debes ejecutar múltiples trabajos idénticos y comparar sus puntuaciones de confianza (como pTM/ipTM general) para elegir la mejor. Esto se hace fácilmente usando la clonación de trabajos.

Selecciona la opción “Clonar y reutilizar” en el menú de puntos suspensivos verticales de un trabajo en el Historial para llevarlo al editor de trabajos, luego envía el trabajo tantas veces como desees sin hacer ningún cambio. Asegúrate de que la opción de semilla en el diálogo “Confirmar y enviar trabajo” esté configurada en “Auto”. Alternativamente, si eliges especificar las semillas manualmente, establece diferentes semillas para cada repetición del trabajo.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.29.22.png)

Figura 46. El diálogo “Confirmar y enviar trabajo”, donde puedes editar el valor de la semilla. La opción predeterminada recomendada es usar semillas aleatorias generadas automáticamente, como se muestra aquí.

## Reproducción de trabajos

En la investigación científica es a menudo importante reproducir trabajos previamente ejecutados o ejecutados por otra persona, incluyendo resultados publicados. Puedes hacerlo fácilmente en AlphaFold Server.

Ejecutar el modelo con la misma semilla y la misma entrada dará como resultado estructuras predichas idénticas o muy similares.

El valor exacto de la semilla para el trabajo reproducido se muestra en la página de Resultados y también se guarda en el archivo **fold\_<job\_name>\_job\_request.json** (disponible en el archivo zip para descargar). De manera similar, si quieres permitir que otros reproduzcan tus resultados de modelado, la manera más fácil es compartir el archivo **fold\_<job\_name>\_job\_request.json**: contiene toda la información necesaria para la reproducción y puede ser enviado directamente a AlphaFold Server a través del botón ‘Upload JSON’.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.33.38.png)

Figura 44. Una página de resultados de ejemplo en AlphaFold Server
