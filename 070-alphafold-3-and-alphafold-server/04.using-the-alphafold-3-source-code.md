---
layout: default
title: 'Usando o código-fonte do AlphaFold 3'
---

# Usando o código-fonte do AlphaFold 3

Instalar o AlphaFold 3 localmente te dá controle total sobre a predição estrutural. Essa é a forma mais potente e adaptável de usar o AlphaFold 3. No entanto, o software requer acesso ao hardware de última geração (ou seja, GPUs com tamanho máximo de RAM) ou a uma máquina virtual e exige um alto grau de habilidade em computador para instalar e executar.

## **Instalação do código-fonte do AlphaFold 3**

O código-fonte do AlphaFold 3 está disponível no [repositório oficial do GitHub](https://github.com/google-deepmind/alphafold3). Este repositório fornece uma implementação do pipeline de inferência AlphaFold 3.

Os parâmetros do modelo devem ser obtidos diretamente do Google, conforme detalhado na seção “[Obtenção dos parâmetros do modelo](https://github.com/google-deepmind/alphafold3?tab=readme-ov-file#obtaining-model-parameters)” no Github.

O AlphaFold 3 requer um ambiente Linux; outros sistemas operacionais não são suportados. A instalação completa requer até 1 TB de espaço em disco para bancos de dados genéticos (o armazenamento SSD é fortemente recomendado). É necessária uma GPU NVIDIA com capacidade de computação 7.0 ou superior. Para estruturas proteicas maiores, GPUs com maior capacidade de memória são recomendadas.

Para referência, entradas com até 5.120 tokens podem caber em um único NVIDIA A100 80 GB ou NVIDIA H100 80 GB. A precisão numérica foi verificada em ambos os tipos de hardware.

AlphaFold 3, assim como AlphaFold 2, requer acesso local a grandes bancos de dados, incluindo PDB, MGnify, UniProt, UniRef90, NT, RFam, RNACentral e uma versão modificada do BFD.

Se você não tem acesso a esse tipo de hardware, uma das possibilidades é usar uma máquina virtual (equipada de acordo com essas especificações) de qualquer provedor de nuvem.

## **Considerações para previsões iniciais de estrutura**

O tempo de execução do pipeline de dados (ou seja, busca por sequências genéticas e busca por template) pode variar significativamente dependendo do tamanho da entrada e do número de sequências homólogas encontradas, bem como do hardware disponível (a velocidade do disco pode influenciar a velocidade da busca genética, em particular).

O AlphaFold 3 pode ser rodado eficientemente em uma única GPU NVIDIA A100 de 80 GB. Essa configuração é bem adequada para previsões de alta produtividade.

Para melhor gerenciamento de recursos, o pipeline pode ser dividido em:

* Estágio de pipeline de dados (intensivo em CPU): Esta parte realiza busca de sequências genéticas e identificação de modelos. A velocidade do disco impacta significativamente o desempenho da busca genética, então recomendamos o uso de um SSD drive.
* Estágio de inferência do modelo (intensivo em GPU): Este estágio prevê a estrutura usando o modelo treinado.

Se você quiser melhorar o desempenho, recomenda-se aumentar a velocidade do disco (por exemplo, aproveitando um sistema de arquivos com RAM), ou aumentar o número de núcleos de CPU disponíveis e adicionar mais paralelização.

Para sequências com MSAs profundos, o uso de RAM pode exceder os recomendados 64 GB.

Por favor, revise cuidadosamente a seção “[Instalação e Execução da Sua Primeira predição](https://github.com/google-deepmind/alphafold3/blob/main/docs/installation.md)” para orientações sobre previsões de instalação e funcionamento. Você também pode rodar o pipeline em etapas para otimizar a utilização dos recursos. Veja a nota sobre [Performance](https://github.com/google-deepmind/alphafold3/blob/main/docs/performance.md).

## Formato de entrada AlphaFold 3

O AlphaFold 3 introduz um formato de entrada flexível baseado em JSON que oferece personalização ampliada. Isso difere do formato AlphaFold Server e permite que os usuários definam conjuntos biomoleculares complexos. Principais recursos incluem:

* Cadeias de proteínas, RNA e DNA, com opções para resíduos modificados.
* Alinhamentos múltiplos de sequências (MSAs) personalizados para proteínas e RNA.
* Modelos estruturais para cadeias proteicas.
* Especificação de ligantes usando códigos do Dicionário de Componentes Químicos/[Chemical Component Dictionary (CCD)](https://www.wwpdb.org/data/ccd) strings SMILES ou entradas definidas pelo usuário no formato mmCIF. O GitHub AlphaFold 3 suporta ligantes personalizados sem restrições.
* Definições de ligação covalente entre entidades.
* Suporte para múltiplas sementes aleatórias para gerar previsões alternativas de estrutura.

## Compatibilidade com JSON de AlphaFold Server

O AlphaFold 3 oferece um conversor em *run\_alphafold.py* que traduz arquivos JSON do AlphaFold Server para o formato AlphaFold 3. Para mais informações, veja “[Arquivos de Entradas do AlphaFold 3](https://github.com/google-deepmind/alphafold3/blob/main/docs/input.md#alphafold-3-input)”. Pontos-chave incluem:

* O conversor atribui identificadores de sequência exclusivos quando necessário.
* Pelo menos uma semente aleatória é necessária para o AlphaFold 3. Se um JSON convertido não a contiver, o conversor atribuirá uma automaticamente.
* O AlphaFold Server trata íons e ligantes separadamente; o AlphaFold 3 trata íons como ligantes.
* Observe que glicanos especificados em JSONs do AlphaFold Server não são suportados na conversão.

## Considerações especiais

Comece com proteínas menores ou alvos bem caracterizados para se familiarizar com o fluxo de trabalho e os parâmetros.

Execute previsões únicas fornecendo um caminho de arquivo JSON ou múltiplas previsões fornecendo um caminho de diretório.

Sua instituição pode já ter instalação central AF3, então você deve consultar os guias locais para saber como operá-lo. Caso contrário, talvez queira entrar em contato com os administradores do sistema para obter ajuda com a instalação do AF3 e considerar fazer uma instalação centralizada para os usuários locais.

Para orientações mais detalhadas, consulte o Arquivo de entrada AlphaFold 3 [README](https://github.com/google-deepmind/alphafold3/blob/main/docs/input.md).
