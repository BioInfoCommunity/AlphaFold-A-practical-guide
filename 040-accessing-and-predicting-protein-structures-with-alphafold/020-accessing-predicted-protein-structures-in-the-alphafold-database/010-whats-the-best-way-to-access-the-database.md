---
layout: default
title: '¿Cuál es la mejor manera de acceder a la base de datos?'
---

# ¿Cuál es la mejor manera de acceder a la base de datos?

Tú puedes acceder a las estructuras predichas y a sus métricas de confianza asociadas desde AFDB a través de cuatro canales distintos: directamente desde la página web de AFDB, vía FTP, Google Cloud Public Data o a través de Acceso Programático (API).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/four_ways_to_access.gif)

Figura 23. Cuatro maneras de acceder a las estructuras de proteínas predichas en la AFDB. En el sentido de las agujas del reloj desde la esquina superior izquierda: sitio web, API, BigQuery, descarga FTP.

* Si sólo necesitas acceder a AFDB ocasionalmente, usar el sitio web puede ser la mejor opción. El sitio es fácil de usar y no requiere experiencia en programación.
* Si necesitas descargar grandes conjuntos de datos, como proteomas, [FTP](https://ftp.ebi.ac.uk/pub/databases/alphafold/) probablemente sea tu mejor opción ya que ofrece escalabilidad.
* Si necesitas personalizar la forma en que accedes a la AFDB, puede ser mejor usar Google Big Query o la [API](https://alphafold.ebi.ac.uk/api-docs). Estos enfoques ofrecen más flexibilidad y escalabilidad.
* Si necesitas descargar toda la colección, puedes hacerlo usando [Google Cloud Public Data](https://console.cloud.google.com/marketplace/product/bigquery-public-data/deepmind-alphafold?hl=en-GB).

## **¿Cuándo la Base de Datos de Estructuras de Proteínas AlphaFold no es una opción?**

A pesar de la escala de la AFDB, hay algunos casos en los que puede ser necesario usar el algoritmo AlphaFold2 para predecir la estructura de una proteína. Estas situaciones incluyen:

* La proteína de interés está fuera del rango de longitudes incluidas en la base de datos. La longitud mínima es de 16 aminoácidos. La máxima es de 2.700 para proteomas y Swiss-Prot (entradas revisadas) y de 1.280 para el resto de UniProt. Para el proteoma humano solamente, y sólo vía FTP, la descarga incluye proteínas más largas segmentadas en fragmentos.
* Tú estás interesado en oligómeros o complejos proteína-proteína. La base de datos sólo incluye estructuras de monómeros, por lo que tendrías que ejecutar el modelado tú mismo.
* La secuencia de la proteína ha sido añadida o modificada por UniProt en una versión más reciente.
* Se sabe que la proteína de interés tiene múltiples conformaciones. La base de datos sólo tendrá una estructura predicha por proteína, por lo que, por definición, no proporciona información sobre diferentes estados conformacionales.
* La proteína de interés proviene de un virus. La base de datos no incluye proteínas virales.
* Necesitas control sobre los parámetros de predicción. En particular, la base de datos no archiva MSAs.

Hemos creado una tabla que resume las diferentes formas de acceder a la Base de Datos de Estructuras de Proteínas AlphaFold (AFDB).

|  | **Característica** |
| --- | --- |
| **Páginas Web** | * La búsqueda se puede realizar basándose en el nombre de la proteína, el nombre del gen, el acceso UniProt, el nombre del organismo y la secuencia de aminoácidos. * Tú puedes filtrar los resultados basándote en la especie y/o el estado de la revisión (Swiss-Prot) para identificar eficazmente las proteínas de interés. * Las estructuras se alojan en páginas web individuales. Las páginas de estructura muestran información básica sobre la proteína (obtenida de UniProt) y tres salidas separadas de AlphaFold. * Las estructuras predichas se visualizan utilizando [Mol\*](https://molstar.org/) y se colorean según el pLDDT. La visualización incluye un visor de secuencias. * El Error Alineado Predicho (PAE) se puede inspeccionar utilizando el gráfico 2D haciendo clic y arrastrando. Tú puedes resaltar secciones de interés en la estructura. |
| **API** | * Permite a los usuarios acceder a la AFDB de una manera flexible, escalable y fiable. * Herramienta potente que se puede utilizar para integrar tareas en otras aplicaciones y flujos de trabajo. Estos incluyen la búsqueda y descarga de estructuras de proteínas, y la creación de consultas avanzadas como el filtrado de entradas basándose en criterios como la puntuación pLDDT. * Puede ser complejo de usar, especialmente si no estás familiarizado con la programación. Es importante leer cuidadosamente la documentación de la API y comprender los diferentes parámetros de consulta disponibles. * Las consultas pueden tardar mucho tiempo en completarse, especialmente si el usuario está solicitando una gran cantidad de datos. |
| **FTP** | * Protocolo bien establecido que es muy fiable para transferir grandes cantidades de datos. La mejor opción para descargar grandes conjuntos de datos, como todas las proteínas de un organismo en particular. * No necesitas programar: se puede acceder a través del [área FTP de EMBL-EBI](https://ftp.ebi.ac.uk/pub/databases/alphafold) * Tú puedes acceder a versiones anteriores de la base de datos. Mantenemos un registro de todos los cambios notables realizados en la base de datos, organizados cronológicamente, con los cambios más recientes listados primero. Estos se almacenan en el [CHANGELOG](https://ftp.ebi.ac.uk/pub/databases/alphafold/CHANGELOG.txt). * A partir de septiembre de 2023, el área FTP de EMBL-EBI alberga los proteomas de 48 organismos en archivos TAR, que contienen todos los archivos PDB y mmCIF comprimidos disponibles para cada proteoma. El PAE no se incluye en las descargas FTP. * Los archivos revisados (Swiss-Prot) se pueden descargar en formatos PDB o mmCIF. * Las proteínas grandes se pueden acceder como fragmentos. * Visita la pestaña [Descarga](https://alphafold.ebi.ac.uk/download) para obtener más información. |
| **Big Query** | * La Base de Datos AlphaFold se aloja en [Google Cloud Public Datasets](https://console.cloud.google.com/marketplace/product/bigquery-public-data/deepmind-alphafold?hl=en-GB). * Se puede descargar sin coste alguno, bajo una licencia CC-BY-4.0. * Para acceder a ella a través de BigQuery, necesitarás una cuenta de Google Cloud y algunos conocimientos básicos de [consultas SQL](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax). * En el nivel gratuito, [Big Query](https://cloud.google.com/bigquery?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-e-dr-1655212&utm_content=text-ad-none-any-DEV_c-CRE_665665924755-ADGP_Hybrid+%7C+BKWS+-+MIX+%7C+Txt_BigQuery-KWID_4375px5px5px78974141321-kwd-63326445px124&utm_term=KW_google+bigquery-ST_google+bigquery&gad_source=1&gclid=CjwKCAiAhJWsBhAaEiwAmrNyq7cdt8zcT4tGP1haU5pxti1hJpHAyW8q-WupPk1Trtf_PIawriiIx7gRoCyW8QAvD_BwE&gclsrc=aw.ds&hl=en) ofrece una cantidad limitada de consultas por mes. Es responsabilidad del usuario realizar un seguimiento del uso de los recursos. * Para obtener más información sobre cómo acceder a través de BigQuery, [visita el GitHub de AlphaFold](https://github.com/google-deepmind/alphafold/blob/main/afdb/README.md#bigquery). |

---

## Cómo acceder a través de API, FTP y Big Query

En esta sección, te guiaremos a través del acceso a la Base de Datos de Estructura de Proteínas AlphaFold a través de API y BigQuery.
