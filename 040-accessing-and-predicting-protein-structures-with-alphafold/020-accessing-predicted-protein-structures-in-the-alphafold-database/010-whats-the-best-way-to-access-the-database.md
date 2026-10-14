---
layout: default
title: '¿Cuál es la mejor manera de acceder a la base de datos?'
---

# ¿Cuál es la mejor manera de acceder a la base de datos?

Los usuarios pueden acceder a las estructuras predichas y sus métricas de confianza asociadas desde AFDB a través de cuatro canales distintos: directamente desde la página web de AFDB, vía FTP, Google Cloud Public Data o a través del Acceso Programático (API).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/four_ways_to_access.gif)

Figura 23. Cuatro maneras de acceder a las estructuras de proteínas predichas en AFDB. En sentido horario desde la esquina superior izquierda: sitio web, API, BigQuery, descarga FTP.

* Si solo necesitas acceder a AFDB ocasionalmente, usar el sitio web puede ser la mejor opción. El sitio es fácil de usar y no requiere experiencia en codificación.
* Si necesitas descargar grandes conjuntos de datos, como proteomas, [FTP](https://ftp.ebi.ac.uk/pub/databases/alphafold/) probablemente sea tu mejor opción, ya que ofrece escalabilidad.
* Si necesitas personalizar la forma en que accedes a AFDB, puede ser mejor usar Google Big Query o la [API](https://alphafold.ebi.ac.uk/api-docs). Estos enfoques ofrecen más flexibilidad y escalabilidad.
* Si necesitas descargar toda la colección, puedes hacerlo usando [Google Cloud Public Data](https://console.cloud.google.com/marketplace/product/bigquery-public-data/deepmind-alphafold?hl=en-GB).

## **¿Cuándo no es una opción la Base de Datos de Estructuras de Proteínas AlphaFold?**

A pesar de la escala de AFDB, hay algunos casos en los que puede ser necesario usar el algoritmo AlphaFold2 para predecir la estructura de una proteína. Estas situaciones incluyen:

* La proteína de interés está fuera del rango de longitudes incluido en la base de datos. La longitud mínima es de 16 aminoácidos. La máxima es de 2,700 para proteomas y Swiss-Prot (entradas revisadas) y 1,280 para el resto de UniProt. Solo para el proteoma humano, y solo vía FTP, la descarga incluye proteínas más largas segmentadas en fragmentos.
* Estás interesado en oligómeros o complejos proteína-proteína. La base de datos solo incluye estructuras de monómeros, por lo que necesitarías ejecutar el modelado tú mismo.
* La secuencia de la proteína ha sido añadida o de otra manera modificada por UniProt en una versión más reciente.
* La proteína de interés se sabe que tiene múltiples conformaciones. La base de datos solo tendrá una estructura predicha por proteína, por lo que, por definición, no proporciona información sobre diferentes estados conformacionales.
* La proteína de interés proviene de un virus. La base de datos no incluye proteínas virales.
* Necesitas controlar los parámetros de predicción. En particular, la base de datos no archiva MSAs.

Hemos creado una tabla que resume las diferentes maneras de acceder a la Base de Datos de Estructuras de Proteínas AlphaFold (AFDB).

|  | **Característica** |
| --- | --- |
| **Páginas Web** | * La búsqueda se puede realizar en función del nombre de la proteína, el nombre del gen, la accesión de UniProt, el nombre del organismo y la secuencia de aminoácidos * Los usuarios pueden filtrar los resultados en función de la especie y/o el estado de revisión (Swiss-Prot) para identificar eficazmente las proteínas de interés. * Las estructuras se alojan en páginas web individuales. Las páginas de estructuras muestran información básica sobre la proteína (recuperada de UniProt) y tres salidas separadas de AlphaFold. * Las estructuras predichas se visualizan utilizando [Mol\*](https://molstar.org/) y se colorean en función de pLDDT. La visualización incluye un visor de secuencia. * El Error Alineado Predicho (PAE) se puede inspeccionar utilizando la gráfica 2D haciendo clic y arrastrando. Los usuarios pueden resaltar secciones de interés en la estructura. |
| **API** | * Permite a los usuarios acceder a la AFDB de una manera flexible, escalable y fiable. * Herramienta poderosa que se puede utilizar para integrar tareas en otras aplicaciones y flujos de trabajo. Estas incluyen la búsqueda y descarga de estructuras de proteínas y la creación de consultas avanzadas como filtrar entradas en función de criterios como la puntuación pLDDT. * Puede ser complejo de usar, especialmente si no estás familiarizado con la programación. Es importante leer cuidadosamente la documentación de la API y entender los diferentes parámetros de consulta que están disponibles. * Las consultas pueden tardar mucho tiempo en completarse, especialmente si el usuario solicita una gran cantidad de datos. |
| **FTP** | * Protocolo bien establecido que es muy fiable para transferir grandes cantidades de datos. Mejor opción para descargar grandes conjuntos de datos, como todas las proteínas de un organismo en particular. * No es necesario codificar: se puede acceder a través del [área FTP de EMBL-EBI](https://ftp.ebi.ac.uk/pub/databases/alphafold) * Los usuarios pueden acceder a versiones anteriores de la base de datos. Mantenemos un registro de todos los cambios notables realizados en la base de datos, organizados cronológicamente, con los cambios más recientes enumerados primero. Estos se almacenan en el [CHANGELOG](https://ftp.ebi.ac.uk/pub/databases/alphafold/CHANGELOG.txt). * Hasta septiembre de 2023, el área FTP de EMBL-EBI aloja los proteomas de 48 organismos en archivos TAR, que contienen todos los archivos PDB y mmCIF comprimidos disponibles para cada proteoma. PAE no se incluye en las descargas FTP. * Los archivos revisados (Swiss-Prot) se pueden descargar en formatos PDB o mmCIF. * Las proteínas grandes se pueden acceder como fragmentos. * Visita la pestaña [Descargar](https://alphafold.ebi.ac.uk/download) para obtener más información. |
| **Big Query** | * La Base de Datos AlphaFold se aloja en [Google Cloud Public Datasets](https://console.cloud.google.com/marketplace/product/bigquery-public-data/deepmind-alphafold?hl=en-GB). * Se puede descargar sin costo alguno, bajo una licencia CC-BY-4.0. * Para acceder a ella a través de BigQuery, necesitarás una cuenta de Google Cloud y algunos conocimientos básicos de [consultas SQL](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax). * En el nivel gratuito, [Big Query](https://cloud.google.com/bigquery?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-e-dr-1655212&utm_content=text-ad-none-any-DEV_c-CRE_665665924755-ADGP_Hybrid+%7C+BKWS+-+MIX+%7C+Txt_BigQuery-KWID_4375px5px5px78974141321-kwd-63326445px124&utm_term=KW_google+bigquery-ST_google+bigquery&gad_source=1&gclid=CjwKCAiAhJWsBhAaEiwAmrNyq7cdt8zcT4tGP1haU5pxti1hJpHAyW8q-WupPk1Trtf_PIawriiIx7gRoCyW8QAvD_BwE&gclsrc=aw.ds&hl=en) ofrece una cantidad limitada de consultas por mes. Es responsabilidad del usuario llevar un registro del uso de recursos. * Para obtener más información sobre cómo acceder a través de BigQuery, [visita el GitHub de AlphaFold](https://github.com/google-deepmind/alphafold/blob/main/afdb/README.md#bigquery). |

---

## Cómo acceder a través de API, FTP y Big Query

En esta sección, te guiaré a través del acceso a la Base de Datos de Estructuras de Proteínas AlphaFold a través de API y BigQuery.
