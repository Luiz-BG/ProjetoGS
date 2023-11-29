<a name="readme-top"></a>
# 📱App Global Solution


O App Global Solution é um aplicativo criado com o objetivo de facilitar a assistencia médica no setor de saúde, projeto do terceiro ano da FIAP.

## 📲Conteúdo

O MaasApp é um App desenvolvido com React Native. Esse aplicativo auxilia cidadões em registrar atividade física feitas pelo usuário durante o dia inteiro

## 💻Funcionalidades do Projeto

- [x] Registro
   - O app irá simular um compartilhamento do registro de atividades físicas feitas pelo usuário para um doutor que pediu tais exercícios

## 🚀Tecnologias Utilizadas

1. React Native
<p align="right">(<a href="#readme-top">Topo</a>)</p>

## 👨🏼‍💻Responsável pelo projeto
Luiz Eduardo Brito Gomes **RM: _89304_**
<p align="right">(<a href="#readme-top">Topo</a>)</p>

## ⚙️Instalação e utilização

## Técnicas de gerenciamento de memória

- [x] Gerenciamento de estado de componente
    - O aplicativo utiliza o gancho useState do React para gerenciar o estado da lista de tarefas e os itens de tarefa individuais. Essa abordagem garante que apenas os componentes necessários sejam renderizados novamente quando o estado mudar, minimizando rerenderizações desnecessárias e uso de memória.
      
- [x] Estruturas de dados imutáveis
     - O aplicativo utiliza estruturas de dados imutáveis, especificamente matrizes, para representar a lista de tarefas e itens de tarefas individuais. Estruturas de dados imutáveis ​​evitam mutações acidentais de estado, o que pode levar a vazamentos de memória.

- [x] Limpeza de memória
     - A função completeTask remove o item de tarefa concluído da lista de tarefas, separando-o da matriz. Isso garante que a memória ocupada pelo item de tarefa concluído seja liberada.

- [x] Visualização para evitar teclado
      - O componente KeyboardAvoidingView envolve o campo de entrada e o botão de adição, garantindo que os componentes da IU não sejam obscurecidos pelo teclado quando ele for aberto. Isso evita a necessidade de novas renderizações e uso de memória desnecessários.

- [x] Métodos de ciclo de vida
      - O aplicativo utiliza métodos de ciclo de vida do React, como componentDidMount e componentWillUnmount, para executar quaisquer tarefas de limpeza ou ouvintes de eventos necessários. Isso garante que os recursos sejam liberados adequadamente quando os componentes forem desmontados.


```sh
1- Execute os seguintes comandos no CMD de seu computador
Get-ExecutionPolicy
Set-ExecutionPolicy Bypass -Scope Process -Force
Iex((New-ObjectSystem.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol =
[System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
2- Execute este também para instalar o node
choco install -y nodejs.install jdk8
3- Instale o Android Studio
https://bit.ly/3dAGcx5
4- Crie uma variável android no seu sistema
5- Insira mais este comando para completar
npm install -g react-native-cli
6- Para instalar um emulador android, faça o passo a passo recomendado oficialmente
https://docs.expo.dev/workflow/android-studio-emulator/
```
<p align="right">(<a href="#readme-top">Topo</a>)</p>

## ✏️Feedback
Críticas serão essenciais nesse tipo de projeto que visa ser facilmente acolhido para a maior parte da população brasileira, de crianças a idosos, de todos os lugares.
<p align="right">(<a href="#readme-top">Topo</a>)</p>
