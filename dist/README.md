# Extensão Gerador de CPF/CNPJ para Chrome

Esta extensão gera automaticamente CPF ou CNPJ válidos quando você clica em campos de formulário identificados como CPF ou CNPJ.

## Funcionalidades

- ✅ Detecta automaticamente campos de CPF e CNPJ por label, placeholder, name ou id
- ✅ Gera CPF/CNPJ válidos com dígitos verificadores corretos
- ✅ Preenche automaticamente o campo ao clicar
- ✅ Copia o valor para o clipboard
- ✅ Formata os números corretamente (###.###.###-## para CPF e ##.###.###/####-## para CNPJ)
- ✅ Feedback visual ao gerar (borda verde para CPF, azul para CNPJ)

## Como instalar

1. Abra o Chrome e digite `chrome://extensions/` na barra de endereços
2. Ative o "Modo do desenvolvedor" no canto superior direito
3. Clique em "Carregar sem compactação"
4. Selecione a pasta `cpf-cnpj-generator`
5. A extensão estará instalada e ativa!

## Como usar

1. Navegue até qualquer página com formulário que tenha campos de CPF ou CNPJ
2. Clique no campo de input
3. Um prompt de confirmação aparecerá perguntando se você deseja gerar o CPF/CNPJ
4. Se você clicar em "OK", a extensão irá:
   - Gerar automaticamente um CPF ou CNPJ válido
   - Preencher o campo
   - Copiar o valor para seu clipboard
   - Mostrar uma borda colorida (verde para CPF, azul para CNPJ)
5. Se você clicar em "Cancelar", nada acontece e você pode digitar manualmente

## Detecção de campos

A extensão identifica campos de CPF/CNPJ procurando pelas palavras "cpf" ou "cnpj" em:
- Label associada ao input
- Atributo placeholder
- Atributo name
- Atributo id

## Observações

- Os CPF e CNPJ gerados são **válidos** (passam na validação de dígitos verificadores)
- São gerados localmente no seu navegador (não usa API externa)
- Funciona em qualquer site
- Não armazena nenhuma informação

## Estrutura dos arquivos

```
cpf-cnpj-generator/
├── manifest.json    # Configuração da extensão
├── content.js       # Script principal
├── icon16.png       # Ícone 16x16
├── icon48.png       # Ícone 48x48
├── icon128.png      # Ícone 128x128
└── README.md        # Este arquivo
```

## Tecnologias

- JavaScript puro (Vanilla JS)
- Chrome Extension Manifest V3
- Clipboard API

---

Desenvolvido para facilitar testes em formulários que exigem CPF/CNPJ.
