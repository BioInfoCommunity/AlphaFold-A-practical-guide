---
layout: default
title: '¿Deberías usar AlphaFold 2 o AlphaFold 3?'
---

# ¿Debería usar AlphaFold 2 o AlphaFold 3?

En términos de funcionalidad, AlphaFold 3 puede hacer todo lo que AlphaFold 2 puede hacer, y hacerlo mejor. También tiene capacidades adicionales, en particular la predicción de las estructuras de complejos que contienen múltiples tipos de moléculas.

Sin embargo, existen diferencias en la forma en que cada modelo ha sido puesto a disposición para su uso. AlphaFold 2 está disponible de forma gratuita tanto para uso académico como comercial bajo los permisivos términos de la licencia Apache 2. En contraste, AlphaFold 3 actualmente solo está disponible para uso no comercial, sujeto a los [Términos de Servicio de AlphaFold Server](https://alphafoldserver.com/terms), o a los [términos de uso de los Parámetros del Modelo AlphaFold](https://github.com/google-deepmind/alphafold3/blob/main/WEIGHTS_TERMS_OF_USE.md), que incluyen una serie de restricciones de uso. En consecuencia, para algunos tipos de proyectos, debes usar AlphaFold 2.

Es importante que no puedas usar AlphaFold 3 o sus resultados en conexión con ninguna actividad comercial, incluyendo la investigación en nombre de organizaciones comerciales, o para entrenar modelos de aprendizaje automático o tecnología relacionada para la predicción de la estructura biomolecular similar a AlphaFold Server. Eres libre de usar AlphaFold 2 para estos propósitos.

Las puntuaciones de confianza de AlphaFold 3 para polímeros pueden verse afectadas sustancialmente por la inclusión (o eliminación) de un contexto no polimérico, como iones o ligandos estabilizadores. Si investigas algo en un entorno solo de polímeros (por ejemplo, interacción proteína-proteína), puede ser importante agregar un contexto no polimérico donde sea apropiado para mejorar las puntuaciones de confianza. Usar AlphaFold 2 evita esta complejidad, a posible costa de una ligera reducción en la precisión estructural.

Debido a que AlphaFold 2 sigue siendo una herramienta valiosa en muchos escenarios de investigación y desarrollo, Google DeepMind continuará brindándole soporte.
