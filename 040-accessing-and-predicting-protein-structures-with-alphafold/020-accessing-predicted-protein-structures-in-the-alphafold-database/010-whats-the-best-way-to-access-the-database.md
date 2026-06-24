---
layout: default
title: 'Qual é a melhor maneira de acessar o banco de dados?'
---

# Qual é a melhor maneira de acessar o banco de dados?

Os usuários podem acessar as estruturas previstas e suas métricas de confiança associadas do AFDB por meio de quatro canais distintos: diretamente pela página web do AFDB, via FTP, Google Cloud Public Data ou via Acesso Programático (Programmatic Access - API).

<img width="1152" height="648" alt="quatro_jeitos_acessar" src="https://github.com/user-attachments/assets/8f686950-5fb8-4aab-821c-240dfc8ee410" />


Figura 23. Quatro maneiras de acessar estruturas proteicas previstas na AFDB. No sentido horário a partir do canto superior esquerdo: site, API, BigQuery, download FTP.

* Se você só precisa acessar o AFDB ocasionalmente, usar o site pode ser a melhor opção. O site é fácil de usar e não exige nenhuma experiência em programação.
* Se você precisar baixar grandes conjuntos de dados, como proteomas, [FTP](https://ftp.ebi.ac.uk/pub/databases/alphafold/) provavelmente será sua melhor opção, pois oferece escalabilidade.
* Se você precisar personalizar a forma como acessa o AFDB, talvez seja melhor usar o Google Big Query ou a [API](https://alphafold.ebi.ac.uk/api-docs). TEssas abordagens oferecem mais flexibilidade e escalabilidade.
* Se precisar baixar toda a coleção, pode fazer isso usando os [Dados Públicos do Google Cloud](https://console.cloud.google.com/marketplace/product/bigquery-public-data/deepmind-alphafold?hl=en-GB).

## **Quando o Banco de Dados de Estruturas de Proteínas AlphaFold deixa de ser uma opção?**

Apesar da escala da AFDB, há alguns casos em que pode ser necessário usar o algoritmo AlphaFold2 para prever a estrutura de uma proteína. Essas situações incluem:

* A proteína de interesse está fora da faixa de comprimentos incluída no banco de dados. O comprimento mínimo é de 16 aminoácidos. O máximo é de 2.700 para proteomas e Swiss-Prot (entradas revisadas) e 1.280 para o restante do UniProt. Para o proteoma humano, e somente via FTP, o download inclui proteínas mais longas segmentadas em fragmentos.
* Você se interessa por oligômeros ou complexos proteína-proteína. O banco de dados inclui apenas estruturas de monômeros, então você precisaria rodar a modelagem por conta própria.
* A sequência proteica foi adicionada ou modificada de alguma forma pelo UniProt em uma versão mais recente.
* Sabe-se que a proteína de interesse possui múltiplas conformações. O banco de dados terá apenas uma estrutura prevista por proteína, portanto, por definição, não fornece informações sobre diferentes estados conformacionais.
* A proteína de interesse vem de um vírus. O banco de dados não inclui proteínas virais.
* Você precisa de controle sobre os parâmetros de predição. Em particular, o banco de dados não arquiva MSAs.


Criamos uma tabela resumindo as diferentes formas de acessar o Banco de Dados de Estrutura de Proteínas AlphaFold (AFDB).

|  | **Característica** |
| --- | --- |
| **Páginas da Web/ Web Pages** | * A busca pode ser feita com base no nome da proteína, nome do gene, acesso ao UniProt, nome do organismo e sequência de aminoácidos * Os usuários podem filtrar os resultados com base na espécie e/ou status de revisão (Swiss-Prot) para identificar efetivamente proteínas de interesse. * As estruturas são hospedadas em páginas web individuais. As páginas de estrutura mostram informações básicas sobre a proteína (retiradas do UniProt) e três saídas separadas do AlphaFold. * Estruturas previstas são visualizadas usando [Mol\*](https://molstar.org/) e coloridas com base no pLDDT. A visualização inclui um visualizador de sequências. * O Erro de Alinhamento Previsto (PAE) pode ser inspecionado usando o gráfico 2D clicando e arrastando. Os usuários podem destacar seções de interesse na estrutura. |
| **API** | * Permite que os usuários acessem o AFDB de forma flexível, escalável e confiável. * Ferramenta poderosa que pode ser usada para integrar tarefas a outras aplicações e fluxos de trabalho. Isso inclui buscar e baixar estruturas de proteínas, além de criar consultas avançadas como filtrar entradas com base em critérios como a pontuação pLDDT. * Pode ser complexo de usar, especialmente se você não está familiarizado com programação. É importante ler cuidadosamente a documentação da API e entender os diferentes parâmetros de consulta disponíveis. * Consultas podem demorar bastante para serem concluídas, especialmente se o usuário estiver solicitando uma grande quantidade de dados.|
| **FTP** | * Protocolo bem estabelecido e muito confiável para transferir grandes quantidades de dados. Melhor opção para baixar grandes conjuntos de dados, como todas as proteínas de um organismo específico. * Não precisa codificar: pode ser acessada pela [área FTP do EMBL-EBI](https://ftp.ebi.ac.uk/pub/databases/alphafold) * Os usuários podem acessar versões anteriores do banco de dados. Mantemos um registro de todas as alterações notáveis feitas no banco de dados, organizado cronologicamente, com as mudanças mais recentes listadas em primeiro lugar. Esses são armazenados no [CHANGELOG](https://ftp.ebi.ac.uk/pub/databases/alphafold/CHANGELOG.txt). * Em setembro de 2023, a área FTP do EMBL-EBI hospedava os proteomas de 48 organismos em arquivos TAR, contendo todos os arquivos PDB e mmCIF comprimidos disponíveis para cada proteoma. O PAE não está incluído nos downloads FTP. * Arquivos revisados (Swiss-Prot) podem ser baixados nos formatos PDB ou mmCIF. * Proteínas grandes podem ser acessadas como fragmentos. * Visite a aba [Download](https://alphafold.ebi.ac.uk/download)  para mais informações. |
| **Big Query** | * O Banco de Dados AlphaFold é hospedado nos [Conjuntos de Dados Públicos do Google Cloud](https://console.cloud.google.com/marketplace/product/bigquery-public-data/deepmind-alphafold?hl=en-GB). * Pode ser baixado gratuitamente, sob uma licença CC-BY-4.0. * Para acessá-lo pelo BigQuery, você precisará de uma conta Google Cloud e algum conhecimento básico de [consultas SQL](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax). * No nível gratuito, o [Big Query](https://cloud.google.com/bigquery?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-e-dr-1655212&utm_content=text-ad-none-any-DEV_c-CRE_665665924755-ADGP_Hybrid+%7C+BKWS+-+MIX+%7C+Txt_BigQuery-KWID_4375px5px5px78974141321-kwd-63326445px124&utm_term=KW_google+bigquery-ST_google+bigquery&gad_source=1&gclid=CjwKCAiAhJWsBhAaEiwAmrNyq7cdt8zcT4tGP1haU5pxti1hJpHAyW8q-WupPk1Trtf_PIawriiIx7gRoCyW8QAvD_BwE&gclsrc=aw.ds&hl=en) offers a oferece uma quantidade limitada de consultas por mês. É responsabilidade do usuário acompanhar o uso dos recursos. * Para mais informações sobre como acessar pelo BigQuery, [visite o GitHub do AlphaFold](https://github.com/google-deepmind/alphafold/blob/main/afdb/README.md#bigquery). |

---

## Como acessar via API, FTP e Big Query

Nesta seção, vamos guiá-lo no acesso ao Banco de Dados de Estruturas de Proteínas AlphaFold via API e BigQuery.
