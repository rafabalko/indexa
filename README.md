# Indexa - Agenda de Contatos em Angular

Este projeto foi desenvolvido utilizando a versão moderna do **Angular** (componentes **standalone** e controle de fluxo `@for`), com o objetivo de exibir e filtrar uma lista alfabética de contatos a partir de uma fonte de dados em JSON.

---

## 🚀 Tecnologias Utilizadas

- **Angular 17+**: Framework principal, utilizando componentes *standalone* e as novas diretivas de controle de fluxo.
- **TypeScript**: Utilizado para tipagem estática e garantia da estrutura dos dados.
- **HTML5 & CSS3**: Utilizados para estruturação semântica e estilização customizada.
- **JSON**: Utilizado para armazenamento estático da base de dados dos contatos (`agenda.json`).

---

## 📁 Estrutura do Projeto

```text
indexa/
│
├── public/
│   ├── logo.png
│   └── banner.png
│
├── src/
│   ├── app/
│   │   ├── componentes/
│   │   │   ├── cabecalho/       # Componente do cabeçalho da aplicação
│   │   │   ├── container/       # Componente contêiner principal com <ng-content>
│   │   │   ├── contato/         # Componente para exibição individual do contato
│   │   │   └── separador/       # Componente agrupador por letra inicial
│   │   │
│   │   ├── agenda.json          # Fonte de dados em formato JSON
│   │   ├── app.component.html   # Template principal com os loops @for
│   │   ├── app.component.ts     # Lógica de filtragem e importação de componentes
│   │   └── app.component.css    # Estilos do componente principal
│   │
│   ├── main.ts                  # Ponto de entrada do Angular
│   └── styles.css               # Estilos globais
│
└── angular.json                 # Configurações do Angular CLI e assets públicos
## ⚙️ Funcionalidades

### 📋 Leitura Dinâmica de JSON

O projeto realiza a importação da lista de contatos diretamente de um arquivo JSON local (`agenda.json`).

Os dados são tipados utilizando **TypeScript**, garantindo maior organização e segurança durante o desenvolvimento.

### 🔤 Agrupamento por Alfabeto

Os contatos são organizados alfabeticamente de acordo com a primeira letra do nome.

O projeto percorre o alfabeto de **A a Z** e renderiza apenas as letras que possuem contatos cadastrados.

### 🧩 Componentização

A aplicação utiliza componentes **standalone** do Angular para dividir a interface em partes reutilizáveis:

- `Cabecalho`
- `Container`
- `Contato`
- `Separador`

Essa abordagem facilita a manutenção e organização do código.

### 📦 Projeção de Conteúdo com `<ng-content>`

O projeto utiliza **projeção de conteúdo** através do `<ng-content>`, permitindo criar layouts reutilizáveis.

Os componentes `Container` e `Separador` podem receber conteúdo dinamicamente de outros componentes.

### 🔎 Filtragem de Contatos

A aplicação permite trabalhar com a lista de contatos de forma dinâmica, facilitando a localização e organização dos registros.

---

## 🔧 Como Executar o Projeto

### 📌 Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- **Node.js**
- **Angular CLI**, instalado globalmente ou acessível através do `npx`.

---

### 1. 📥 Clone ou Baixe o Repositório

Clone o repositório utilizando o Git:

```bash
git clone <url-do-repositorio>
```

Depois, entre na pasta do projeto:

```bash
cd indexa
```

---

### 2. 📦 Instale as Dependências

Execute o comando:

```bash
npm install
```

Esse comando instala todas as dependências necessárias para executar o projeto.

---

### 3. ▶️ Inicie o Servidor de Desenvolvimento

Execute:

```bash
ng serve
```

Após iniciar o servidor, o Angular disponibilizará a aplicação localmente.

---

### 4. 🌐 Acesse a Aplicação

Abra o navegador e acesse:

```text
http://localhost:4200/
```

---

## 🖥️ Visualização

Após iniciar o servidor, a aplicação **Indexa** será executada no navegador e exibirá a agenda de contatos organizada alfabeticamente.

---

## 📚 Conceitos Utilizados

Durante o desenvolvimento do projeto foram utilizados conceitos importantes do Angular e TypeScript, como:

- Componentes **Standalone**
- **TypeScript**
- Interpolação de dados
- `@for`
- Componentização
- Projeção de conteúdo com `<ng-content>`
- Importação de arquivos JSON
- Tipagem de dados
- Organização alfabética
- HTML semântico
- CSS personalizado

---

## 👨‍💻 Projeto

**Indexa - Agenda de Contatos**

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento web utilizando Angular.