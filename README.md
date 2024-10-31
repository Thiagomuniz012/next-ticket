
# Ticket Manager

Esta é uma aplicação de gerenciamento de tickets desenvolvida com **Next.js** e **React** para o front-end, **MongoDB** para o banco de dados e **Tailwind CSS** para estilização. A aplicação permite criar, visualizar, editar e excluir tickets, com informações de título, descrição, categoria, prioridade, status e progresso.

## Funcionalidades

- **Listar Tickets**: Visualize todos os tickets registrados no sistema.
- **Criar Ticket**: Crie novos tickets informando título, descrição, categoria e prioridade.
- **Editar Ticket**: Modifique detalhes dos tickets existentes.
- **Excluir Ticket**: Remova tickets desnecessários ou resolvidos.
- **Filtro por Prioridade e Progresso**: Personalize a exibição de tickets com base no status atual.

## Tecnologias Utilizadas

- **Next.js** - Framework React para desenvolvimento full-stack.
- **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- **MongoDB & Mongoose** - Banco de dados NoSQL e ORM para gerenciamento de dados.
- **Tailwind CSS** - Framework CSS para estilização rápida e responsiva.
- **Font Awesome** - Ícones para interface.

## Estrutura de Arquivos

Abaixo estão alguns dos arquivos principais do projeto:

- **route.js**: Define as rotas da API para operações CRUD com tickets.
- **Ticket.js**: Modelo de dados do MongoDB para os tickets.
- **Components (CartaoTicket, EditarTicket, ExcluirTicket, etc.)**: Componentes React para o front-end da aplicação.
- **Configurações**:
  - **tailwind.config.js**: Configuração do Tailwind CSS.
  - **postcss.config.js**: Configuração do PostCSS.
  - **.eslintrc.json**: Configuração de linting com ESLint.
  - **.gitignore**: Configura arquivos e pastas para serem ignorados pelo Git.

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ticket-manager.git
   cd ticket-manager
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env.local` na raiz do projeto com as variáveis de ambiente:

   ```
   MONGODB_URI=sua_conexao_mongodb
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse a aplicação em `http://localhost:3000`.