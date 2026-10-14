---
layout: default
title: 'Fortalezas y limitaciones de AlphaFold 2'
---

# Fortalezas y limitaciones de AlphaFold 2

**Lo que una red neuronal puede y no puede hacer depende en gran medida de los datos utilizados para su entrenamiento. Para entrenar AlphaFold2, solo se utilizaron las partes proteicas de las estructuras del PDB: otras partes como pequeñas moléculas y ácidos nucleicos no se incluyeron en el entrenamiento. Esto significa que hay algunos aspectos de las estructuras que AlphaFold no puede predecir o no puede garantizar la precisión.**

## **Qué puede hacer AlphaFold**

AlphaFold2 se entrenó originalmente en cadenas de proteínas individuales, por lo que es excelente para predecir sus estructuras. Más tarde, una extensión de AlphaFold2 se entrenó específicamente para predecir complejos proteína-proteína: esta versión ahora se conoce como AlphaFold-Multimer ([Evans et al., 2022](https://doi.org/10.1101/2021.10.04.463034)). Puede predecir las estructuras de complejos proteicos que están hechos de varias copias de la misma cadena (homo-multímeros como dímeros y hexámeros) así como aquellos hechos de varias cadenas proteicas diferentes (hetero-multímeros). Para limitaciones específicas, consulta la sección “[Accediendo y prediciendo estructuras proteicas con AlphaFold2](https://www.ebi.ac.uk/training/online/courses/alphafold/accessing-and-predicting-protein-structures-with-alphafold/)”.

Lo más importante es que AlphaFold2 no simplemente replica estructuras proteicas conocidas. Investigadores independientes han demostrado que AlphaFold2 puede predecir estructuras nunca antes vistas en el PDB, es decir, pliegues proteicos novedosos ([Bordin et al., 2023](https://doi.org/10.1038/s42003-023-04488-9); [Barrio-Hernandez et al., 2023](https://doi.org/10.1038/s41586-023-06510-w); [Durairaj et al., 2023](https://doi.org/10.1038/s41586-023-06622-3)).

##### Figura 5. Proteína no caracterizada (AlphaFold ID: [AF-A0A849ZK06-F1](https://alphafold.ebi.ac.uk/entry/A0A849ZK06))

Se predice que es una proteína de unión a ribonucleótidos con una estructura general que se asemeja a un pliegue de proteína quinasa, función molecular predicha por DeepFRI ([Barrio-Hernandez et al., 2023](https://doi.org/10.1038/s41586-023-06510-w))

AlphaFold2 se puede usar para identificar regiones intrínsecamente desordenadas. Naturalmente, el sistema no puede predecir subestructuras desordenadas o dinámicas, ni las estructuras de secuencias que no existen en un solo conjunto de conformación en la naturaleza. Estas regiones son verdaderamente dinámicas y no tienen una estructura fija para predecir. Sin embargo, la métrica de confianza local de AlphaFold2 (pLDDT) muestra una fuerte correlación con el desorden intrínseco, lo que hace de AlphaFold una herramienta de vanguardia para la identificación de las regiones desordenadas ([Tunyasuvunakool et al., 2021](https://doi.org/10.1038/s41586-021-03828-1); [Akdel et al., 2022](https://www.nature.com/articles/s41594-022-00849-w)).

## **Con qué lucha AlphaFold2**

De fábrica, AlphaFold no es sensible a mutaciones puntuales que cambian un solo residuo, debido a la alteración en la secuencia de ADN. Esto se debe a la falta de datos sobre el efecto de las variaciones, combinada con el enfoque de AlphaFold2 en patrones en lugar de calcular fuerzas físicas. Por las mismas razones, AlphaFold2 también es menos preciso para predecir las estructuras asociadas con secuencias altamente variables, como las de moléculas del sistema inmunológico como los anticuerpos.

AlphaFold2 lucha para predecir las estructuras de proteínas “huérfanas” – aquellas con pocos parientes cercanos – ya que funciona derivando relaciones entre secuencias proteicas. Si no hay suficientes secuencias para la comparación, AlphaFold2 a menudo produce predicciones de baja calidad con malas puntuaciones de confianza. Este problema se agrava si las pocas secuencias relacionadas no tienen estructuras conocidas en el PDB. Por otro lado, esta elección metodológica significa que AlphaFold2 a menudo puede predecir la estructura de una proteína, incluso si no hay estructuras relacionadas conocidas en el PDB, siempre y cuando una secuencia tenga miles de parientes.

Proteínas experimentan cambios estructurales cuando realizan sus funciones. Sin embargo, estas diferentes conformaciones solo se describen para una minoría de las proteínas en el PDB. Por defecto, AlphaFold2 no captura tales cambios conformacionales, ya que fue diseñado para predecir estructuras estáticas, es decir, instantáneas estructurales. Sin embargo, los investigadores han encontrado que, aplicando ciertos trucos, se puede forzar a AlphaFold2 a producir una conformación diferente de la proteína (consulta la sección “[Modelado avanzado y aplicaciones de las estructuras de proteínas predichas](https://www.ebi.ac.uk/training/online/courses/alphafold/advanced-modeling-and-applications-of-predicted-protein-structures/)“).

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/PDBe_KB_2.gif)

Figura 6. Una de las limitaciones de AlphaFold es que no tiene en cuenta las moléculas que se unen a las proteínas, lo que puede afectar la estructura tridimensional de la proteína. La hexoquinasa ([Q96Y14](https://www.uniprot.org/uniprotkb/Q96Y14/entry)) adopta conformaciones distintas en presencia (naranja, izquierda) y ausencia (verde, derecha) de azúcar. Notablemente, la predicción de la estructura de AlphaFold coincide con el estado sin azúcar (como se puede ver tanto visualmente como a través del valor RMSD).

ID del PDB unido al azúcar: [2E2Q](https://www.wwpdb.org/pdb?id=pdb_00002e2q)

ID del PDB sin azúcar: [2E2N](https://www.wwpdb.org/pdb?id=pdb_00002e2n)

## **Qué no puede hacer AlphaFold2**

AlphaFold2 no tiene en cuenta otras moléculas que interactúan con las proteínas, como ácidos nucleicos, cofactores de pequeñas moléculas, iones y otros componentes no proteicos. De manera similar, AlphaFold2 no fue diseñado para modelar modificaciones post-traduccionales, ni para modelar estructuras de ácidos nucleicos libres. Sin embargo, AlphaFold2 puede predecir a menudo una forma de una proteína unida a un ligando o ion, incluso en ausencia del ligando/ion real.

AlphaFold2 no tiene en cuenta el plano de la membrana. Por consiguiente, no puede modelar correctamente las orientaciones relativas de los dominios transmembrana y otros dominios de proteínas de membrana. Sin embargo, como se ha señalado, AlphaFold2 alerta a los usuarios sobre incertidumbres asignando una puntuación de baja confianza. Este problema específico generalmente se refleja en la puntuación de error alineado predicho (PAE). (Consulta la sección “[Entradas y Salidas](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/)“).

Tabla con viñetas

| AlphaFold2 predice | AlphaFold2 tiene dificultades para predecir | AlphaFold2 no predice |
| --- | --- | --- |
| * Cadenas de proteínas individuales * Multímeros de proteínas * Complejos de proteínas multisubunidad | * Múltiples conformaciones para la misma secuencia * Efectos de mutaciones puntuales * Interacciones antígeno-anticuerpo | * Complejos proteína-ADN y proteína-ARN * Estructura de ácidos nucleicos * Unión de ligando e ion * Modificaciones post-traduccionales * Plano de membrana para dominios transmembrana |
