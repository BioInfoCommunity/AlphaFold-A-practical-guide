---
layout: default
title: 'Accessing predicted protein structures in the AlphaFold Database'
---

# Accessing predicted protein structures in the AlphaFold Database

**Users can download many predicted protein structures from the AlphaFold Protein Structure Database (AFDB), without running the AlphaFold algorithm. Each predicted structure comes with valuable metadata and confidence metrics, supporting critical assessment. The database is freely available and can be accessed via multiple routes.**

## **Contents of the AFDB**

Google DeepMind and EMBL-EBI collaboratively developed the [AlphaFold Protein Structure Database (AFDB)](https://alphafold.ebi.ac.uk/). Their aim was to democratise predictions and make them widely available to the scientific community.

As of 2023, the AlphaFold Protein Structure Database (AFDB) hosts over 214 million entries: equivalent to almost the entirety of UniProt. The collection includes protein structures from over 1 million organisms, including model organisms and WHO pathogens of interest.

Users can search by the protein name, UniProt accession number or protein sequence.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/Search_Database.gif)


Figure 21. You can search the AFDB in many ways, including: protein name, gene name, UniProt ID, organism name and amino acid sequence

Every predicted protein structure has a dedicated page. This contains a visualisation of the structure, plus instant access to the pLDDT scores and PAE plot. This allows fast judgement of the prediction quality for the individual structures. The structure page also contains related links and information, including a link to the protein’s UniProt page and information on the protein’s function and structural cluster.

Users can download data from AFDB. The atomic coordinates are available in PDB and mmCIF formats, while PAEs are presented in JSON format.

The data files in the archive are versioned, and previous versions are available via FTP, but the web pages will always display the latest version.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2026/07/Figure-22-1024x576.png)

Figure 22. Timeline of key milestones in the development and use of the AlphaFold Protein Structure Database (AFDB), developed by Google DeepMind and EMBL-EBI in partnership.

<!-- Standout / callout box -->
<div class="af-callout" role="note" aria-label="Further training">
  <div class="af-callout__header">
    <span class="af-callout__icon" aria-hidden="true">📘</span>
    <span class="af-callout__title">
      Further training: Navigating the AlphaFold Database
    </span>
  </div>
  <div class="af-callout__body">
    <p>
      If you would like a practical, step-by-step guide to searching the
      AlphaFold Protein Structure Database (AFDB), interpreting entry pages,
      and ensuring you are accessing the latest model versions, see the
      EMBL-EBI online course:
    </p>
    <p class="af-callout__link">
      <strong>
        <a href="https://www.ebi.ac.uk/training/online/courses/navigating-alphafold-database/"
           target="_blank" rel="noopener noreferrer">
          Navigating the AlphaFold database (Quick tour)
        </a>
      </strong><br>
      https://www.ebi.ac.uk/training/online/courses/navigating-alphafold-database/
    </p>
    <p>
      This companion course focuses on interface navigation and data retrieval,
      complementing the conceptual material covered here.
    </p>
  </div>
</div>
<style>
  .af-callout{
    --af-bg: #f6f8ff;
    --af-border: #d9e1ff;
    --af-accent: #2f55d4;
    --af-text: #1f2937;
    --af-muted: #4b5563;
    background: var(--af-bg);
    border: 1px solid var(--af-border);
    border-left: 6px solid var(--af-accent);
    border-radius: 14px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 8px 24px rgba(0,0,0,0.05);
    color: var(--af-text);
    font: 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  }
  .af-callout__header{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }
  .af-callout__icon{
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: rgba(47,85,212,0.12);
    font-size: 16px;
  }
  .af-callout__title{
    font-weight: 700;
    font-size: 1.05rem;
  }
  .af-callout__body p{
    margin: 0 0 12px 0;
    color: var(--af-muted);
  }
  .af-callout__link{
    background: rgba(47,85,212,0.06);
    padding: 10px 12px;
    border-radius: 8px;
  }
  .af-callout__body a{
    color: var(--af-accent);
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 600;
  }
  .af-callout__body a:hover{
    text-decoration-thickness: 2px;
  }
</style>