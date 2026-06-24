---
layout: default
title: 'Recursos avançados do AlphaFold Server'
---

# Recursos avançados do AlphaFold Server

O AlphaFold Server foi projetado, primordialmente, como uma ferramenta de fácil utilização. O objetivo é tornar a modelagem de biomoléculas acessível a biólogos, inclusive àqueles sem experiência em métodos computacionais.

No entanto, o AlphaFold Server oferece opções adicionais e possibilidades de automação para usuários mais avançados.

## Envio de tarefas via JSON

Você pode definir uma tarefa para o AlphaFold Server usando um arquivo JSON, em vez de utilizar a interface web visual padrão. Isso permite gerar tarefas automaticamente — por exemplo, para a triagem computacional de interações proteína-proteína.

É possível importar várias tarefas em rascunho enviando arquivos JSON que contenham até 100 tarefas cada. No entanto, observe que há um limite de 500 rascunhos salvos no seu Histórico.

Para criar um arquivo JSON, consulte esta [documentação e os exemplos](https://github.com/google-deepmind/alphafold/blob/main/server/README.md). Contudo, não é necessário começar do zero. Dentro de cada arquivo ZIP com resultados de modelagem baixado do AlphaFold Server, você encontrará um arquivo JSON chamado **fold\_<job\_name>\_job\_request.json**. Ele contém todos os parâmetros de entrada da tarefa que foram especificados por meio da interface web. Esses arquivos oferecem um ponto de partida conveniente para gerar novas tarefas: são facilmente editáveis ​​em editores de texto padrão ou em ambientes de programação, como notebooks do Google Colab.

Assim que o arquivo JSON estiver pronto, clique no botão "Upload JSON" para enviá-lo. As tarefas importadas aparecerão como rascunhos salvos no seu histórico; você poderá clicar nelas para editá-las ou executá-las. Observe que a execução de tarefas definidas via arquivos JSON consumirá sua cota de tarefas exatamente da mesma forma que as tarefas comuns definidas pela interface web.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-24-at-17.10.52.png)

Figura 43. Captura de tela mostrando a janela de diálogo para o upload de entradas em formato JSON.

## Amostragem com múltiplas sementes (seeds)

Em comparação com sistemas anteriores, o AlphaFold 3 frequentemente produz previsões estruturais mais precisas para alvos desafiadores, como complexos antígeno-anticorpo. No entanto, alcançar a máxima precisão muitas vezes exige uma amostragem extensiva do espaço latente — isto é, a geração e a subsequente classificação de inúmeras previsões utilizando diferentes sementes aleatórias. Nesses casos, observamos melhorias nas previsões mesmo ao utilizar até 1.000 sementes. Contudo, 20 sementes geralmente bastam para obter uma previsão com nível razoável de confiança e precisão.

Atualmente, o AlphaFold Server executa apenas uma semente por tarefa. Se você deseja realizar uma amostragem com múltiplas sementes, deve executar várias tarefas idênticas e comparar suas pontuações de confiança (como o pTM/ipTM global) para selecionar a melhor. Isso pode ser feito facilmente utilizando a função de clonagem de tarefas.

Selecione a opção "Clone and reuse" (Clonar e reutilizar) no menu de três pontos verticais de uma tarefa no Histórico para levá-la ao editor de tarefas; em seguida, envie a tarefa quantas vezes desejar, sem realizar alterações. Certifique-se de que a opção de semente na janela de diálogo "Confirm and submit job" (Confirmar e enviar tarefa) esteja definida como "Auto". Alternativamente, caso opte por especificar as sementes manualmente, defina sementes diferentes para cada repetição da tarefa.

![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.29.22.png)

Figura 46. A caixa de diálogo "Confirmar e enviar tarefa" (Confirm and submit job), onde é possível editar o valor da semente (seed). A opção padrão recomendada é utilizar sementes aleatórias geradas automaticamente, conforme mostrado aqui.

## Reprodução de tarefas

Na pesquisa científica, é frequentemente importante reproduzir tarefas executadas anteriormente ou tarefas realizadas por outra pessoa, incluindo resultados publicados. Você pode fazer isso facilmente no AlphaFold Server.

Executar o modelo com a mesma semente e dados de entrada idênticos resultará em estruturas previstas idênticas ou altamente semelhantes.

O valor exato da semente (*seed*) para o trabalho reproduzido é exibido na página de resultados e também é salvo no arquivo **fold\_<job\_name>\_job\_request.json**(disponível no arquivo zip para download). Da mesma forma, se você quiser permitir que outras pessoas reproduzam seus resultados de modelagem, a maneira mais fácil é compartilhar o arquivo **fold\_<job\_name>\_job\_request.json**: ele contém todas as informações necessárias para a reprodução e pode ser enviado diretamente ao AlphaFold Server por meio do botão "Upload JSON".


![](http://www.ebi.ac.uk/training/online/courses/alphafold/wp-content/uploads/sites/259/2025/06/Screenshot-2025-06-25-at-18.33.38.png)

Figura 44. Exemplo de página de resultados no AlphaFold Server
