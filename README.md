# Portfólio Angelo Belelli

Um portfólio moderno e responsivo desenvolvido em React com TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- Interface moderna e responsiva
- Navegação suave entre seções
- Formulário de contato funcional com EmailJS
- Galeria de projetos interativa
- Animações e micro-interações
- Design system consistente

## 📧 Configuração do EmailJS

Para que o formulário de contato funcione, você precisa configurar o EmailJS:

### 1. Criar conta no EmailJS
- Acesse [EmailJS](https://www.emailjs.com/)
- Crie uma conta gratuita

### 2. Configurar o serviço de email
- No dashboard, vá em "Email Services"
- Adicione um serviço (Gmail, Outlook, etc.)
- Anote o **Service ID**

### 3. Criar template de email
- Vá em "Email Templates"
- Crie um novo template com as seguintes variáveis:
  ```
  {{from_name}} - Nome do remetente
  {{from_email}} - Email do remetente
  {{phone}} - Telefone do remetente
  {{message}} - Mensagem
  {{to_name}} - Seu nome (Angelo Belelli)
  ```
- Anote o **Template ID**

### 4. Obter Public Key
- Vá em "Account" > "General"
- Copie sua **Public Key**

### 5. Configurar no projeto
Edite o arquivo `src/components/Contact.tsx` e substitua:
```typescript
const serviceId = 'seu_service_id_aqui';
const templateId = 'seu_template_id_aqui';
const publicKey = 'sua_public_key_aqui';
```

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- EmailJS
- Lucide React (ícones)
- Vite

## 📦 Instalação

```bash
npm install
npm run dev
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no Tailwind CSS:
- Roxo: `purple-500` (#8B5CF6)
- Rosa: `pink-500` (#EC4899)
- Fundo: `black` (#000000)

### Conteúdo
- Edite `src/components/Hero.tsx` para alterar informações pessoais
- Modifique `src/components/Projects.tsx` para adicionar seus projetos
- Atualize `src/components/About.tsx` com sua descrição

### Imagens
- Substitua a foto de perfil em `Hero.tsx`
- Adicione imagens dos seus projetos em `Projects.tsx`

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

Para fazer deploy do projeto:

```bash
npm run build
```

Os arquivos de produção estarão na pasta `dist/`.

## 📄 Licença

Este projeto está sob a licença MIT.