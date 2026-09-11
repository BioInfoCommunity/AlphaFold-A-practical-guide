---
layout: default
title: 'Previsão de estruturas de proteínas usando o código-fonte de código aberto do AlphaFold2'
---

# Previsão de estruturas de proteínas usando o código-fonte de código aberto do AlphaFold2

**A instalação do código-fonte do AlphaFold2 oferece controle total sobre a previsão de estruturas de proteínas. Essa é a maneira mais poderosa e adaptável de utilizar o AlphaFold2. No entanto, o software exige recursos computacionais consideráveis ​​dos servidores e requer um alto nível de conhecimento técnico em informática para sua instalação e execução.**

## **Por que instalar o código-fonte do AlphaFold2?**

Instalar o AlphaFold2 em seu próprio servidor ou estação de trabalho, utilizando o código-fonte, proporciona controle total sobre as previsões de estruturas de proteínas que você realiza.

Executar o AlphaFold2 por conta própria pode ser a melhor opção em diversas situações. Entre elas: se a proteína de seu interesse não constar no Banco de Dados de Estruturas de Proteínas do AlphaFold (AlphaFold Protein Structure Database - AFDB); se você desejar prever um oligômero; se quiser prever um complexo proteína-proteína; ou se precisar manipular o MSA (alinhamento múltiplo de sequências) e/ou os modelos para uma previsão. Essas funcionalidades também estão disponíveis via Colabs, mas o uso do código-fonte oferece controle total e resultados mais abrangentes.

O código-fonte do AlphaFold2 é disponibilizado sob a licença Apache 2.0.

Para decidir se instalar o AlphaFold2 é a opção certa para você, faça a si mesmo as duas perguntas a seguir. Você acredita que consegue seguir com segurança as instruções do [README](https://github.com/google-deepmind/alphafold/blob/main/README.md) ou pode contar com um especialista em TI que possa fazê-lo? E você tem acesso ao hardware necessário? Se a resposta para ambas for sim, considere a instalação local do AlphaFold2. Caso contrário, sugerimos utilizar o [ColabFold](https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb), que é suficiente para muitas aplicações práticas.

## **Instalando o código-fonte do AlphaFold2**

Todo o código necessário para executar o AlphaFold2 pode ser encontrado no [GitHub oficial](https://github.com/google-deepmind/alphafold). Isso também inclui parâmetros do modelo, instruções de instalação, comandos e o histórico de alterações no [versionamento do código](https://github.com/google-deepmind/alphafold/releases). Por favor, leia atentamente o [README](https://github.com/google-deepmind/alphafold/blob/main/README.md).

Para instalar o AlphaFold2, você precisará de uma máquina com Linux, até 3 TB de espaço em disco para bancos de dados genéticos e uma GPU NVIDIA moderna. Embora seja possível executar o AlphaFold2 sem uma GPU, o processo será muito mais lento. O tamanho máximo das proteínas ou complexos proteína-proteína modelados é determinado apenas pela memória RAM da GPU disponível; por exemplo, uma única GPU A100 com 40 GB de RAM consegue processar complexos de até ~5.000 resíduos.

Observe que o código é atualizado regularmente e novas versões do modelo são lançadas.

Se você não tiver acesso a esse hardware, considere executar o AlphaFold2 em uma máquina virtual (VM) na nuvem. Todos os principais provedores de nuvem oferecem suporte ao AlphaFold2 atualmente. Projetos como o [NMRBox](https://nmrbox.nmrhub.org/) disponibilizam o uso gratuito do AlphaFold2 em suas VMs para usuários acadêmicos. Além disso, o Google Cloud e o Vertex.ai oferecem soluções personalizadas e de bom custo-benefício para executar o [AlphaFold na nuvem](https://cloud.google.com/blog/products/ai-machine-learning/running-alphafold-on-vertexai).

Adicionalmente, o AlphaFold2 requer acesso local a um grande número de bancos de dados genéticos, incluindo [BFD](https://bfd.mmseqs.com/), [MGnify](https://www.ebi.ac.uk/metagenomics/), [PDB70](http://wwwuser.gwdg.de/~compbiol/data/hhsuite/databases/hhsuite_dbs/), [PDB](https://www.wwpdb.org/), [UniRef30 (anteriormente UniClust30)](https://uniclust.mmseqs.com/) e [UniRef90](https://www.uniprot.org/help/uniref). Da mesma forma, o AlphaFold-Multimer requer os bancos de dados [PDB SEQRES](https://www.wwpdb.org/documentation/file-format-content/format33/sect3.html#SEQRES) e [UniProt](https://www.uniprot.org/uniprot/). No entanto, se necessário, é possível baixar uma versão reduzida dos bancos de dados. Siga as instruções detalhadas de instalação presentes no [README](https://github.com/google-deepmind/alphafold/blob/main/README.md), onde é disponibilizado um script para automatizar o download e a configuração dos bancos de dados.

**Nota:** O uso dessas bases de dados está sujeito aos seus termos e condições e/ou às disposições de licenciamento. Você deve verificar se consegue cumprir quaisquer restrições ou termos e condições aplicáveis ​​antes de utilizá-las.

![](https://ftp.ebi.ac.uk/pub/training/2024/On-demand/source_code.gif)


Figura 25. O código-fonte do AlphaFold2 está disponível gratuitamente, permitindo que qualquer pessoa o instale, desde que possua um sistema adequado. Todas as informações necessárias encontram-se no arquivo README.

**Considerações para realizar suas primeiras previsões de estrutura**

Você pode escolher qual versão do modelo AlphaFold2 deseja executar. Para complexos proteína-proteína, é possível especificar o modelo AlphaFold-Multimer.

Para realizar uma previsão de estrutura, basta fornecer o nome de um arquivo contendo a sequência da sua proteína — ou as sequências das subunidades, no caso de um complexo proteína-proteína — no formato FASTA. Em seguida, você pode executar o AlphaFold2.

As previsões de estrutura do AlphaFold2 geralmente levam dezenas de minutos. Um fator que contribui significativamente para o tempo total é a necessidade de gerar alinhamentos de múltiplas sequências (MSAs) e buscar modelos de referência (*templates*): esses processos podem levar dezenas de minutos. Após essa etapa, a previsão da estrutura em si pode levar segundos ou minutos. Para estruturas proteicas não relaxadas, a previsão pode levar tipicamente até 5 segundos para uma proteína de 100 resíduos e até 20 minutos para uma proteína de 3.000 resíduos. O tempo total necessário para prever grandes complexos pode ultrapassar uma hora.

O fluxo de trabalho fornecido destina-se à execução de uma previsão de estrutura por vez. Existe também a opção de realizar uma série de previsões enviando uma lista de arquivos FASTA. No entanto, essa abordagem não é prática para prever as estruturas de um proteoma inteiro que inclua milhares de proteínas.

Lembre-se de que o AlphaFold2 utiliza sementes aleatórias (random seeds) para inicializar cada previsão de estrutura. Normalmente, o processo de previsão para regiões de alta confiança de uma proteína converge para a mesma solução, independentemente da semente utilizada. Contudo, em casos complexos, repetir a previsão com diferentes sementes pode gerar certa diversidade nos resultados e, em última análise, melhorar a previsão final da estrutura.

Você também tem a opção de submeter sua estrutura final a um processo de relaxamento utilizando o [AMBER](https://github.com/openmm/openmmforcefields). O relaxamento pode ajudar a corrigir eventuais violações estereoquímicas e colisões (clashes). No entanto, esse processo geralmente leva alguns minutos para ser executado. Na maioria dos casos, o resultado direto do módulo de estrutura é bastante satisfatório, mesmo sem o relaxamento.

Os resultados do AlphaFold2 serão salvos em um subdiretório especificado por você. Esses resultados incluem os MSAs calculados, as estruturas não relaxadas, as estruturas relaxadas, as estruturas classificadas, os dados brutos do modelo, os metadados da previsão de estrutura e os tempos de execução de cada etapa do processo.
