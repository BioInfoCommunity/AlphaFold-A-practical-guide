---
layout: default
title: 'Acessando e prevendo estruturas proteicas com AlphaFold 2'
---

# Acessando e prevendo estruturas proteicas com AlphaFold 2

**Os usuários podem baixar muitas estruturas proteicas previstas do Banco de Dados de Estruturas de Proteínas AlphaFold (AlphaFold Protein Structure Database/ AFDB), sem precisar executar o algoritmo AlphaFold. Cada estrutura prevista vem com metadados valiosos e métricas de confiança, apoiando a avaliação crítica. O banco de dados está disponível gratuitamente e pode ser acessado por múltiplas rotas.**

## **Conteúdo do AFDB**

O Google DeepMind e o EMBL-EBI desenvolveram colaborativamente o Banco de Dados de Estrutura de Proteínas AlphaFold ([AlphaFold Protein Structure Database - AFDB)](https://alphafold.ebi.ac.uk/). O objetivo deles era democratizar as previsões e torná-las amplamente acessíveis à comunidade científica.

Em 2023, o Banco de Dados de Estruturas de Proteínas AlphaFold possui mais de 214 milhões de entradas: equivalente a quase toda a UniProt. A coleção inclui estruturas proteicas de mais de 1 milhão de organismos, incluindo organismos modelo e patógenos de interesse da OMS.

Os usuários podem pesquisar pelo nome da proteína, número de acesso UniProt ou sequência proteica.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/Search_Database.gif)


Figura 21. Você pode pesquisar o AFDB de várias maneiras, incluindo: nome da proteína, nome do gene, ID UniProt, nome do organismo e sequência de aminoácidos

Cada estrutura proteica prevista tem uma página dedicada. Este contém uma visualização da estrutura, além de acesso instantâneo às pontuações pLDDT e ao gráfico PAE. Isso permite um julgamento rápido da qualidade da predição para as estruturas individuais. A página de estrutura também contém links e informações relacionadas, incluindo um link para a página UniProt da proteína e informações sobre a função e o agrupamento estrutural da proteína.

Os usuários podem baixar dados do AFDB. As coordenadas atômicas estão disponíveis nos formatos PDB e mmCIF, enquanto as PAEs são apresentadas em formato JSON.

Os arquivos de dados no arquivo são versionados, e versões anteriores estão disponíveis via FTP, mas as páginas web sempre exibirão a versão mais recente.

![](https://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2026/07/Figure-22-1024x576.png)

Figura 22. Linha do tempo dos principais marcos no desenvolvimento e uso do AFDB, desenvolvido pelo Google DeepMind e EMBL-EBI em parceria.


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