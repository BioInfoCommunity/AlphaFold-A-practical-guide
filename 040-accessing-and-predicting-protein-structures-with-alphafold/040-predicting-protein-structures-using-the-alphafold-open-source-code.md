---
layout: default
title: 'Prediciendo estructuras de proteínas usando el código de código abierto de AlphaFold2'
---

# Prediciendo estructuras de proteínas usando el código de código abierto de AlphaFold2

**Instalar el código fuente de AlphaFold2 te da control total sobre la predicción de estructuras de proteínas. Esta es la forma más potente y adaptable de usar AlphaFold2. Sin embargo, el software exige mucho a los servidores y requiere un alto grado de habilidad informática para instalarlo y ejecutarlo.**

## **¿Por qué debería instalar el código fuente de AlphaFold2?**

Instalar AlphaFold2 en tu propio servidor o estación de trabajo, usando el código fuente, te da control total sobre las predicciones de estructuras de proteínas que ejecutes.

Ejecutar AlphaFold2 tú mismo puede ser la mejor opción en varias circunstancias. Estas incluyen: si tu proteína de interés no está en la Base de Datos de Estructuras de Proteínas de AlphaFold (AFDB); si quieres predecir un oligómero; si quieres predecir un complejo proteína-proteína; o si necesitas manipular el MSA y/o las plantillas para una predicción. Estas funcionalidades también están disponibles a través de Colabs, pero usar el código fuente te da tanto control total como salidas completas.

El código fuente de AlphaFold2 se publica bajo la licencia Apache 2.0.

Para decidir si instalar AlphaFold2 es la opción correcta para ti, pregúntate lo siguiente. ¿Crees que puedes seguir con confianza las instrucciones de [README](https://github.com/google-deepmind/alphafold/blob/main/README.md) – o tienes un especialista en IT que pueda hacerlo? ¿Y tienes acceso al hardware necesario? Si la respuesta a ambas es sí, considera la instalación local de AlphaFold2. Si no, te sugerimos que te quedes con [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb), que es suficiente para muchas aplicaciones prácticas.

## **Instalando el código fuente de AlphaFold2**

Todo el código necesario para ejecutar AlphaFold2 se puede encontrar en el [GitHub oficial](https://github.com/google-deepmind/alphafold). Esto también incluye los parámetros del modelo, las instrucciones de instalación, los comandos y un registro de los cambios en el [control de versiones](https://github.com/google-deepmind/alphafold/releases). Por favor, revisa cuidadosamente el [README](https://github.com/google-deepmind/alphafold/blob/main/README.md).

Para instalar AlphaFold2, necesitarás una máquina con Linux, hasta 3 TB de espacio en disco para bases de datos genéticas y una GPU NVIDIA moderna. Aunque puedes ejecutar AlphaFold2 sin una GPU, será mucho más lento. El tamaño máximo de las proteínas o complejos proteína-proteína modelados está determinado únicamente por la RAM disponible de la GPU; por ejemplo, una sola A100 GPU con 40Gb de RAM puede manejar complejos de hasta ~5.000 residuos.

Ten en cuenta que el código se actualiza regularmente y se publican nuevas versiones del modelo.

Si no tienes acceso a dicho hardware, considera ejecutar AlphaFold2 en una máquina virtual (VM) en la nube. Todos los principales proveedores de la nube están apoyando actualmente a AlphaFold2. Proyectos como [NMRBox](https://nmrbox.nmrhub.org/) proporcionan el uso gratuito de AlphaFold2 en sus VM para usuarios académicos. Además, Google Cloud y Vertex.ai proporcionan soluciones personalizadas y rentables para ejecutar [AlphaFold en la nube](https://cloud.google.com/blog/products/ai-machine-learning/running-alphafold-on-vertexai).

Adicionalmente, AlphaFold2 requiere acceso local a un gran número de bases de datos genéticas, incluyendo [BFD](https://bfd.mmseqs.com/), [MGnify](https://www.ebi.ac.uk/metagenomics/), [PDB70](http://wwwuser.gwdg.de/~compbiol/data/hhsuite/databases/hhsuite_dbs/), [PDB](https://www.wwpdb.org/), [UniRef30 (antes UniClust30)](https://uniclust.mmseqs.com/), y [UniRef90](https://www.uniprot.org/help/uniref). De manera similar, AlphaFold-Multimer requiere las bases de datos [PDB SEQRES](https://www.wwpdb.org/documentation/file-format-content/format33/sect3.html#SEQRES) y [UniProt](https://www.uniprot.org/uniprot/). Sin embargo, si es necesario, puedes descargar una versión reducida de las bases de datos. Por favor, sigue las instrucciones detalladas de instalación en el [README](https://github.com/google-deepmind/alphafold/blob/main/README.md), donde se proporciona un script para automatizar la descarga y configuración de las bases de datos.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/source_code.gif)

Figura 25. El código fuente de AlphaFold2 está disponible de forma gratuita, por lo que cualquiera puede instalarlo si tiene un sistema adecuado. Toda la información necesaria está en README.

**Consideraciones para ejecutar tus primeras predicciones de estructura**

Puedes elegir qué versión del modelo AlphaFold2 ejecutar. Para complejos proteína-proteína, puedes especificar el modelo AlphaFold-Multimer.

Para ejecutar una predicción de estructura, todo lo que tienes que hacer es proporcionar el nombre de un archivo donde se guarda la secuencia de tu proteína, o las secuencias de las subunidades en el caso de un complejo proteína-proteína, en formato FASTA. Luego, puedes ejecutar AlphaFold2.

Las predicciones de estructura de AlphaFold2 suelen tardar decenas de minutos. Un contribuyente importante al tiempo total es la necesidad de generar alineamientos de secuencias múltiples (MSAs) y buscar plantillas: estos procesos pueden tardar decenas de minutos. Después de esto, la predicción real de la estructura puede tardar segundos o minutos. Para estructuras de proteínas no relajadas, las predicciones de estructura pueden tardar hasta 5 segundos para una proteína de 100 residuos, y hasta 20 minutos para una proteína de 3.000 residuos. El tiempo total necesario para predecir complejos grandes puede superar la hora.

El flujo de trabajo proporcionado es para ejecutar una predicción de estructura a la vez. También existe la opción de ejecutar una serie de predicciones de estructura, enviando una lista de archivos FASTA. Sin embargo, esto no es práctico para predecir estructuras de un proteoma completo que incluya miles de proteínas.

Ten en cuenta que AlphaFold2 utiliza semillas aleatorias para inicializar cada predicción de estructura. Normalmente, el proceso de predicción de estructura para regiones de alta confianza de una proteína convergerá en la misma solución, independientemente de la semilla utilizada. Sin embargo, en casos difíciles, volver a ejecutar tu predicción con varias semillas diferentes puede proporcionar cierta diversidad en las predicciones de estructura y, en última instancia, mejorar tu predicción de estructura final.

También tienes la opción de ejecutar tu estructura final a través de un proceso de relajación utilizando [AMBER](https://github.com/openmm/openmmforcefields). La relajación puede ayudar a resolver violaciones estereoquímicas y colisiones poco frecuentes. Sin embargo, normalmente tarda varios minutos en ejecutarse. En la mayoría de los casos, la salida directa del módulo de estructura es bastante buena incluso sin relajación.

Los resultados de AlphaFold2 se guardarán en un subdirectorio que tú especifiques. Estas salidas incluyen los MSAs calculados, las estructuras no relajadas, las estructuras relajadas, las estructuras clasificadas, las salidas sin procesar del modelo, los metadatos de la predicción de la estructura y los tiempos que tarda cada paso del proceso.

**Nota:** Tu uso de estas bases de datos está sujeto a sus términos y condiciones y/o disposiciones de licencia. Debes comprobar que puedes cumplir con cualquier restricción o término y condición aplicable antes de usarla.
