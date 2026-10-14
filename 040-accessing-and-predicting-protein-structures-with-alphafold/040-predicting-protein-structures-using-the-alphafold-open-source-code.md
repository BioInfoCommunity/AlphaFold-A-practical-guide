---
layout: default
title: 'Predecir estructuras de proteínas usando el código de código abierto de AlphaFold2'
---

# Predecir estructuras de proteínas usando el código de código abierto de AlphaFold2

**Instalar el código fuente de AlphaFold2 te da el control total sobre la predicción de estructuras de proteínas. Esta es la forma más poderosa y adaptable de usar AlphaFold2. Sin embargo, el software hace grandes demandas a los servidores y requiere un alto grado de habilidad informática para instalar y ejecutar.**

## **¿Por qué debería instalar el código fuente de AlphaFold2?**

Instalar AlphaFold2 en tu propio servidor o estación de trabajo, usando el código fuente, te da el control total sobre las predicciones de estructuras de proteínas que ejecutas.

Ejecutar AlphaFold2 tú mismo puede ser la mejor opción en varias circunstancias. Estas incluyen: si tu proteína de interés no está en la Base de Datos de Estructuras de Proteínas de AlphaFold (AFDB); si quieres predecir un oligómero; si quieres predecir un complejo proteína-proteína; o si necesitas manipular la MSA y/o las plantillas para una predicción. Estas funcionalidades también están disponibles a través de Colabs, pero usar el código fuente te da tanto control total como salidas completas.

El código fuente de AlphaFold2 se libera bajo la licencia Apache 2.0.

Para decidir si instalar AlphaFold2 es la opción correcta para ti, hazte las siguientes dos preguntas. ¿Crees que puedes seguir con confianza las instrucciones de [README](https://github.com/google-deepmind/alphafold/blob/main/README.md) – o tienes un especialista en TI que pueda hacerlo? ¿Y tienes acceso al hardware necesario? Si la respuesta a ambas es sí, considera la instalación local de AlphaFold2. Si no, te sugerimos que te quedes con [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb), que es suficiente para muchas aplicaciones prácticas.

## **Instalando el código fuente de AlphaFold2**

Todo el código necesario para ejecutar AlphaFold2 se puede encontrar en el [GitHub oficial](https://github.com/google-deepmind/alphafold). Esto también incluye parámetros del modelo, instrucciones de instalación, comandos y un registro de cambios en el [control de versiones del código](https://github.com/google-deepmind/alphafold/releases). Por favor, revisa cuidadosamente el [README](https://github.com/google-deepmind/alphafold/blob/main/README.md).

Para instalar AlphaFold2, necesitarás una máquina con Linux, hasta 3 TB de espacio en disco para bases de datos genéticas y una GPU moderna de NVIDIA. Aunque puedes ejecutar AlphaFold2 sin una GPU, será mucho más lento. El tamaño máximo de las proteínas modeladas o los complejos proteína-proteína se determina solo por la RAM de la GPU disponible; por ejemplo, una sola GPU A100 con 40Gb de RAM puede manejar complejos de hasta ~5,000 residuos.

Ten en cuenta que el código se actualiza regularmente y se lanzan nuevas versiones del modelo.

Si no tienes acceso a dicho hardware, considera ejecutar AlphaFold2 en una máquina virtual (VM) en la nube. Todos los principales proveedores de la nube actualmente soportan AlphaFold2. Proyectos como [NMRBox](https://nmrbox.nmrhub.org/) proporcionan el uso gratuito de AlphaFold2 en sus VMs para usuarios académicos. Además, Google Cloud y Vertex.ai proporcionan soluciones adaptadas y rentables para ejecutar [AlphaFold en la nube](https://cloud.google.com/blog/products/ai-machine-learning/running-alphafold-on-vertexai).

Además, AlphaFold2 requiere acceso local a un gran número de bases de datos genéticas, incluyendo [BFD](https://bfd.mmseqs.com/), [MGnify](https://www.ebi.ac.uk/metagenomics/), [PDB70](http://wwwuser.gwdg.de/~compbiol/data/hhsuite/databases/hhsuite_dbs/), [PDB](https://www.wwpdb.org/), [UniRef30 (FKA UniClust30)](https://uniclust.mmseqs.com/), y [UniRef90](https://www.uniprot.org/help/uniref). De manera similar, AlphaFold-Multimer requiere las bases de datos [PDB SEQRES](https://www.wwpdb.org/documentation/file-format-content/format33/sect3.html#SEQRES) y [UniProt](https://www.uniprot.org/uniprot/). Sin embargo, si es necesario, puedes descargar una versión reducida de las bases de datos. Por favor, sigue las instrucciones detalladas de instalación en el [README](https://github.com/google-deepmind/alphafold/blob/main/README.md), donde se proporciona un script para automatizar la descarga y configuración de las bases de datos.

**Nota:** Tu uso de estas bases de datos está sujeto a sus términos y condiciones y/o disposiciones de licencia. Deberías verificar que puedes cumplir con cualquier restricción o término aplicable antes de usarlas.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/source_code.gif)

Figura 25. El código fuente de AlphaFold2 está libremente disponible, por lo que cualquiera puede instalarlo si tiene un sistema adecuado. Toda la información necesaria está en README.

**Consideraciones para realizar tus primeras predicciones estructurales**

Puedes elegir qué versión del modelo AlphaFold2 ejecutar. Para complejos proteína-proteína, puedes especificar el modelo AlphaFold-Multimer.

Para ejecutar una predicción estructural, solo necesitas proporcionar el nombre de un archivo donde se mantengan las secuencias de tu proteína, o las secuencias de las subunidades en el caso de un complejo proteína-proteína, en formato FASTA. Luego puedes ejecutar AlphaFold2.

Las predicciones estructurales de AlphaFold2 suelen tardar decenas de minutos. Un gran contribuyente al tiempo total es la necesidad de generar alineamientos múltiples de secuencias (MSAs) y buscar plantillas: estos procesos pueden tardar decenas de minutos. Después de esto, la predicción estructural real puede tardar segundos o minutos. Para estructuras de proteínas sin relajar, las predicciones estructurales suelen tardar hasta 5 segundos para una proteína de 100 residuos, y hasta 20 minutos para una proteína de 3,000 residuos. El tiempo total necesario para predecir grandes complejos puede ser de más de una hora.

El flujo de trabajo proporcionado es para ejecutar una predicción estructural a la vez. También hay una opción para ejecutar una serie de predicciones estructurales, enviando una lista de archivos FASTA. Sin embargo, esto no es práctico para predecir estructuras de un proteoma completo que incluye miles de proteínas.

Ten en cuenta que AlphaFold2 utiliza semillas aleatorias para inicializar cada predicción estructural. Normalmente, el proceso de predicción estructural para regiones de alta confianza de una proteína convergerá en la misma solución, independientemente de la semilla utilizada. Sin embargo, en casos difíciles, volver a ejecutar tu predicción con varias semillas diferentes puede proporcionar cierta diversidad en las predicciones estructurales y, en última instancia, mejorar tu predicción estructural final.

También tienes la opción de ejecutar tu estructura final a través de un proceso de relajación utilizando [AMBER](https://github.com/openmm/openmmforcefields). La relajación puede ayudar a resolver raras violaciones estereoquímicas y choques. Sin embargo, suele tardar varios minutos en ejecutarse. En la mayoría de los casos, la salida directa del módulo de estructura es bastante buena incluso sin relajación.

Las salidas de AlphaFold2 se guardarán en un subdirectorio que especifiques. Estas salidas incluyen los MSAs calculados, estructuras sin relajar, estructuras relajadas, estructuras clasificadas, salidas de modelo en bruto, metadatos de predicción estructural y tiempos tomados para cada paso del proceso.
