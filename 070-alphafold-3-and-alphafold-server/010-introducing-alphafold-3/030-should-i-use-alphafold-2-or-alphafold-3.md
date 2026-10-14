---
layout: default
title: '¿Deberías usar AlphaFold 2 o AlphaFold 3?'
---

# ¿Debería usar AlphaFold 2 o AlphaFold 3?

En términos de funcionalidad, AlphaFold 3 puede hacer todo lo que AlphaFold 2 puede hacer, y hacerlo mejor. También tiene capacidades adicionales, en particular predecir las estructuras de complejos que contienen múltiples tipos de moléculas.

Sin embargo, hay diferencias en cómo cada modelo ha sido puesto a disposición para su uso. AlphaFold 2 está libremente disponible tanto para uso académico como comercial bajo los términos de la licencia permisiva Apache 2. En contraste, AlphaFold 3 solo está disponible actualmente para uso no comercial, sujeto a [AlphaFold Server Terms of Service](https://alphafoldserver.com/terms), o [AlphaFold Model Parameters terms of use](https://github.com/google-deepmind/alphafold3/blob/main/WEIGHTS_TERMS_OF_USE.md), que incluyen un número de restricciones de uso. En consecuencia, para algunos tipos de proyectos, debes usar AlphaFold 2.

Importantemente, no puedes usar AlphaFold 3 o sus salidas en conexión con cualquier actividad comercial, incluyendo la investigación en nombre de organizaciones comerciales, o para entrenar modelos de aprendizaje automático o tecnología relacionada para la predicción de estructuras biomoleculares similar a AlphaFold Server. Puedes usar AlphaFold 2 para estos propósitos.

Las puntuaciones de confianza de AlphaFold 3 para polímeros pueden verse sustancialmente afectadas por la inclusión (o eliminación) de contexto no polimérico, como iones o ligandos estabilizantes. Si investigas algo en un entorno de solo polímero (por ejemplo, interacción proteína-proteína), puede ser importante agregar contexto no polimérico donde corresponda para mejorar las puntuaciones de confianza. Usar AlphaFold 2 evita esta complejidad, a costa posible de una ligera reducción en la precisión estructural.

Dado que AlphaFold 2 sigue siendo una herramienta valiosa en muchos escenarios de investigación y desarrollo, Google DeepMind continuará apoyándolo.
