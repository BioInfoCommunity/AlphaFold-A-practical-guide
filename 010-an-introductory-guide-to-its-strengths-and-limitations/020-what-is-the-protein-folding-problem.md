---
layout: default
title: What is the protein folding problem?
---

# प्रोटीन फोल्डिंग समस्या क्या है?

**सैद्धांतिक रूप से, केवल अमीनो एसिड अनुक्रम (sequence) से प्रोटीन की 3D संरचना का पूर्वानुमान लगाना संभव है। हालांकि, संभावित संरचनाओं की विशाल संख्या के कारण यह अत्यंत चुनौतीपूर्ण है। आर्टिफिशियल इंटेलिजेंस (AI) इस समस्या के लिए आदर्श रूप से उपयुक्त है।**

## **Protein folding problem: predicting protein structure from sequence**

The protein folding problem encompasses two interrelated challenges: understanding the process of protein chain folding and accurately predicting a protein’s final folded structure

In 1972 Christian Anfinsen shared the Nobel Prize in Chemistry for proposing that, in its standard physiological environment, a protein’s structure is determined by the sequence of amino acids that make it up. This came to be known as [Anfinsen’s dogma](https://www.science.org/doi/10.1126/science.181.4096.223).

This hypothesis was important, because it suggested we should be able to reliably predict a protein’s structure from its sequence. Decades of research into structural biology have since shown that Anfinsen was largely correct.

## **The computational challenge**

However, it turns out that predicting protein structure from sequence is not so simple. This is because of a second concept called [Levinthal’s paradox](https://doi.org/10.1073/pnas.89.1.20).

In the 1960s, Cyrus Levinthal showed that there is a very large number of possible conformations a protein chain could theoretically adopt. If a protein was to explore them all, it would take an incomprehensible amount of time, comparable with the lifetime of the Universe.

Nevertheless, Anfinsen’s findings inspired a search for an efficient system that could reliably identify the most likely native structure of a protein, based solely on its amino acid sequence. While challenging, this was at least theoretically possible.

## **The role of artificial intelligence**

This is where artificial intelligence comes in. Modern machine learning methods can help identify complex relationships in large datasets, enabling prediction of protein structures.

Crucially, Anfinsen’s dogma implies that predicting the folded state of a protein does not necessarily require an understanding of the folding process. That is, it should be possible to predict the final 3D shape of a protein without predicting the sequence of movements that leads to this shape – sidestepping Levinthal’s paradox.
