---
layout: default
title: 'Características avanzadas de AlphaFold Server'
---

# Funciones avanzadas de AlphaFold Server

AlphaFold Server se diseñó principalmente como una herramienta fácil de usar. El objetivo es desbloquear el modelado de biomoléculas para biólogos, incluso aquellos sin experiencia en métodos computacionales.

Sin embargo, AlphaFold Server proporciona opciones y posibilidades de automatización adicionales para usuarios más avanzados.

## Envío de trabajos mediante JSON

Puedes especificar un trabajo de AlphaFold Server utilizando un archivo JSON, en lugar de la interfaz web visual estándar. Esto podría utilizarse para generar trabajos automáticamente, por ejemplo, para el cribado computacional de interacciones proteína-proteína.

Puedes importar múltiples trabajos borrador subiendo archivos JSON con hasta 100 trabajos por archivo. Sin embargo, ten en cuenta que solo se permiten hasta 500 borradores guardados en tu Historial.

Para crear un archivo JSON, consulta esta [documentación y ejemplos](https://github.com/google-deepmind/alphafold/blob/main/server/README.md). Sin embargo, no tienes que empezar desde cero. Dentro de cada archivo zip con resultados de modelado, descargado de AlphaFold Server, encontrarás un archivo JSON llamado **fold\_<job\_name>\_job\_request.json.** Este contiene todas las entradas del trabajo que se especificaron a través de la interfaz web. Estos archivos ofrecen un punto de partida conveniente para generar nuevos trabajos: son fácilmente editables en editores de texto estándar o en un sistema de programación como los notebooks de Google Colab.

Una vez que tu archivo JSON esté preparado, haz clic en el botón ‘Upload JSON’ para subirlo. Los trabajos importados aparecerán como borradores guardados en tu historial de trabajos y puedes hacer clic en tus trabajos para editarlos o ejecutarlos aún más. Ten en cuenta que la ejecución de trabajos especificados a través de archivos JSON utilizará tu cuota de trabajos exactamente de la misma manera que los trabajos normales especificados a través de la interfaz web.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-17.10.52.png)

Figura 43. Una captura de pantalla para mostrar el cuadro de diálogo para subir entradas JSON.

## Muestreo de múltiples semillas

En comparación con sistemas más antiguos, AlphaFold 3 a menudo produce predicciones estructurales más precisas para objetivos difíciles como complejos antígeno-anticuerpo. Sin embargo, lograr la máxima precisión a menudo requiere un muestreo exhaustivo del espacio latente, es decir, la generación y posterior clasificación de numerosas predicciones utilizando diferentes semillas aleatorias. En tales casos, hemos visto que las predicciones mejoran incluso hasta 1,000 semillas. Sin embargo, 20 semillas suelen ser suficientes para obtener una predicción de confianza y precisión razonables.

Actualmente, AlphaFold Server ejecuta solo una semilla para cada trabajo. Si quieres muestrear múltiples semillas, debes ejecutar múltiples trabajos idénticos y comparar sus puntuaciones de confianza (como pTM/ipTM general) para elegir el mejor. Esto se puede hacer fácilmente utilizando la clonación de trabajos.

Selecciona la opción “Clone and reuse” (Clonar y reutilizar) en el menú de puntos suspensivos verticales de un trabajo en Historial para llevarlo al editor de trabajos, luego envía el trabajo tantas veces como desees sin realizar ningún cambio. Asegúrate de que la opción de semilla en el diálogo “Confirm and submit job” (Confirmar y enviar trabajo) esté configurada en “Auto”. Alternativamente, si eliges especificar las semillas manualmente, establece diferentes semillas para cada repetición del trabajo.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.29.22.png)

Figura 46. El diálogo “Confirm and submit job” (Confirmar y enviar trabajo), donde puedes editar el valor de la semilla. La opción predeterminada recomendada es utilizar semillas aleatorias generadas automáticamente, como se muestra aquí.

## Reproducción de trabajos

En la investigación científica, a menudo es importante reproducir trabajos o trabajos ejecutados por otra persona, incluidos los resultados publicados. Puedes hacerlo fácilmente en AlphaFold Server.

Ejecutar el modelo con la misma semilla y entrada idéntica dará como resultado estructuras predichas idénticas o muy similares.

El valor exacto de la semilla para el trabajo reproducido se muestra en la página de Resultados y también se guarda en el archivo **fold\_<job\_name>\_job\_request.json** (disponible en el archivo zip para descargar). De manera similar, si quieres permitir que otros reproduzcan tus resultados de modelado, la forma más fácil es compartir el archivo **fold\_<job\_name>\_job\_request.json**: contiene toda la información necesaria para la reproducción y se puede enviar directamente a AlphaFold Server a través del botón ‘Upload JSON’.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.33.38.png)

Figura 44. Una página de resultados de ejemplo en AlphaFold Server
