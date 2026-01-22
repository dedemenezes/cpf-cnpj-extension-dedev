# 🇧🇷 Gerador de CPF/CNPJ - Extensão Chrome

> **Ferramenta interna para geração rápida de CPF/CNPJ válidos em formulários (APENAS PARA TESTES)**

Esta extensão facilita o preenchimento de formulários durante testes, gerando CPF ou CNPJ válidos através do menu de contexto (botão direito).

---

## ✨ Funcionalidades

- ✅ **Gera CPF/CNPJ válidos** com dígitos verificadores corretos
- ✅ **Menu de contexto** - ative com botão direito do mouse
- ✅ **Preenche automaticamente** o campo selecionado
- ✅ **Copia para clipboard** automaticamente
- ✅ **Formata corretamente** (###.###.###-## para CPF e ##.###.###/####-## para CNPJ)
- ✅ **Feedback visual** - borda colorida (verde para CPF, azul para CNPJ)
- ✅ **Notificação toast** - confirma geração com mensagem roxa
- ✅ **Compatível com frameworks** - funciona com Vue, React, Angular
- ✅ **100% local** - não usa API externa, não armazena dados

---

## 📥 Como Instalar

### Passo 1: Baixar a Extensão

- Baixe o arquivo `cpf-cnpj-extension-v1.0.0.zip`
- Extraia o conteúdo para uma pasta no seu computador

### Passo 2: Abrir Extensões do Chrome

1. Abra o **Google Chrome**
2. Digite na barra de endereços: `chrome://extensions/`
3. Pressione **Enter**

### Passo 3: Ativar Modo Desenvolvedor

1. No canto **superior direito**, encontre **"Modo do desenvolvedor"**
2. **Ative** o botão (deve ficar azul)

### Passo 4: Carregar a Extensão

1. Clique em **"Carregar sem compactação"**
2. Selecione a **pasta extraída** do ZIP
3. Clique em **"Selecionar pasta"**

### Passo 5: Pronto! ✅

A extensão "Gerador de CPF/CNPJ" aparecerá na sua lista de extensões instaladas.

---

## 🎯 Como Usar

### Método: Menu de Contexto (Botão Direito)

1. Acesse qualquer site com formulário
2. **Clique com o botão direito** dentro de um campo de texto
3. No menu que aparecer, selecione:
   - **"Gerar CPF"** ou
   - **"Gerar CNPJ"**
4. A extensão irá:
   - ✅ Gerar um número válido
   - ✅ Preencher o campo
   - ✅ Copiar para área de transferência
   - ✅ Mostrar borda colorida no campo
   - ✅ Exibir notificação de confirmação

**Dica:** Funciona em qualquer campo de texto, não precisa ser identificado como CPF/CNPJ!

---

## 💡 Detalhes Técnicos

### Como a extensão detecta campos CPF/CNPJ

A extensão procura pelas palavras "cpf" ou "cnpj" em:

- Label associada ao input
- Atributo `placeholder`
- Atributo `name`
- Atributo `id`

### Validação

- Os números gerados passam em **todas as validações** de dígitos verificadores
- São **aleatórios e fictícios** - não representam pessoas reais
- Gerados **localmente** no navegador

### Compatibilidade

- Funciona em **qualquer site**
- Compatível com **formulários dinâmicos** (Vue, React, Angular)
- Dispara eventos `input` e `change` para frameworks

---

## ⚠️ Avisos Importantes

### ✅ Pode usar em:

- Ambientes de **desenvolvimento**
- Ambientes de **teste/homologação**
- Preenchimento rápido de **formulários de teste**

### ❌ NÃO use em:

- Sistemas de **produção**
- Cadastros com **dados reais**
- Qualquer situação que envolva **clientes reais**

### 🔒 Segurança

- Não armazena nenhuma informação
- Não envia dados para servidores externos
- Não tem acesso a dados sensíveis
- Código 100% aberto e auditável

---

## ❓ Perguntas Frequentes

**P: Funciona em qualquer site?**  
R: Sim! Funciona em qualquer campo de texto editável.

**P: Os números são válidos?**  
R: Sim, passam na validação de dígitos verificadores, mas são fictícios.

**P: Precisa de internet?**  
R: Não! Tudo funciona localmente no navegador.

**P: Como desinstalar?**  
R: Vá em `chrome://extensions/`, encontre a extensão e clique em "Remover".

**P: A extensão guarda meus dados?**  
R: Não! Nenhuma informação é armazenada.

---

## 🆘 Problemas Comuns

**Extensão não aparece instalada**

- Verifique se selecionou a pasta correta
- Confirme que "Modo desenvolvedor" está ativado

**Menu não aparece ao clicar com botão direito**

- Verifique se clicou dentro de um campo de texto
- Recarregue a página (F5)

**Campo não é preenchido**

- Certifique-se de que o campo está focado
- Alguns campos com proteção especial podem não funcionar

---

## 📦 Estrutura dos Arquivos

```
cpf-cnpj-extension/
├── manifest.json      # Configuração da extensão
├── background.js      # Service worker (menu de contexto)
├── content.js         # Script principal (geração e preenchimento)
├── icon16.png         # Ícone 16x16
├── icon48.png         # Ícone 48x48
├── icon128.png        # Ícone 128x128
└── README.md          # Este arquivo
```

---

## 🛠️ Tecnologias

- JavaScript ES6+ (Vanilla JS)
- Chrome Extension Manifest V3
- APIs utilizadas:
  - Clipboard API
  - Context Menus API
  - Content Scripts

---

## 📝 Changelog

### v1.0.0 (Janeiro 2024)

- 🎉 Lançamento inicial
- ✅ Geração via menu de contexto (botão direito)
- ✅ Feedback visual com toast e borda colorida
- ✅ Cópia automática para clipboard
- ✅ Suporte a frameworks modernos

---

## 🤝 Suporte

Problemas ou dúvidas?

- 💬 Slack: `@andremenezes`
- 📧 Email: `andre.menezes@capim.com.br`
- 🐛 Issues: [GitHub Issues](https://github.com/dedemenezes/cpf-cnpj-extension-dedev/issues)

---

<div align="center">

**Desenvolvido com ❤️ para facilitar testes**

Versão 1.0.0 | Janeiro 2026

</div>
