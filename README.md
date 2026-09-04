# Indexa - Agenda de Contatos em Angular

Este projeto foi desenvolvido utilizando a versão moderna do **Angular** (componentes *standalone* e controle de fluxo `@for`), com o objetivo de exibir e filtrar uma lista alfabética de contatos a partir de uma fonte de dados em JSON.

---

## 🚀 Tecnologias Utilizadas

* **Angular 17+**: Framework principal com uso de componentes *standalone* e novas diretivas de controle de fluxo.
* **TypeScript**: Tipagem estática para garantia da estrutura dos dados.
* **HTML5 & CSS3**: Estruturação semântica e estilização customizada.
* **JSON**: Armazenamento estático da base de dados dos contatos (`agenda.json`).

---

## 📁 Estrutura do Projeto

```text
indexa/
├── public/
│   ├── logo.png
│   └── banner.png
├── src/
│   ├── app/
│   │   ├── componentes/
│   │   │   ├── cabecalho/       # Componente do cabeçalho da aplicação
│   │   │   ├── container/       # Componente contêiner principal com <ng-content>
│   │   │   ├── contato/         # Componente para exibição individual do contato
│   │   │   └── separador/       # Componente agrupador por letra inicial
│   │   ├── agenda.json          # Fonte de dados em formato JSON
│   │   ├── app.component.html   # Template principal com os loops @for
│   │   ├── app.component.ts     # Lógica de filtragem e importação de componentes
│   │   └── app.component.css    # Estilos globais/locais do App
│   ├── main.ts                  # Ponto de entrada do Angular
│   └── styles.css               # Estilos globais
└── angular.json                 # Configurações do CLI e assets públicos
⚙️ Funcionalidades
Leitura Dinâmica de JSON: Importação e tipagem da lista de contatos diretamente de um arquivo .json local.

Agrupamento por Alfabeto: Iteração do alfabeto (a-z) renderizando seções demarcadas para cada letra inicial com contatos existentes.

Projeção de Conteúdo (<ng-content>): Encapsulamento de layouts reutilizáveis através dos componentes Container e Separador.

🔧 Como Executar o Projeto
Pré-requisitos
Node.js instalado na máquina.

Angular CLI instalado globalmente ou acessível via npx.

Passo a Passo
Clone ou Baixe o repositório:

Bash
git clone <url-do-repositorio>
cd indexa
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
ng serve
Acesse a aplicação:
Abra o navegador e acesse http://localhost:4200/.