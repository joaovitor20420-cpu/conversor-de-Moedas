# 💸 Conversor de Moedas

Interface front-end moderna (HTML5 & CSS3 puro) desenvolvida sob medida para a criação da sua lógica em JavaScript.

---

## 📁 Estrutura de Arquivos

```text
Conversor de moedas/
├── assets/
│   ├── logo.svg              # Logo moderna do topo da aplicação
│   ├── brasil.svg            # Bandeira do Brasil em círculo
│   ├── estados-unidos.svg    # Bandeira dos EUA em círculo
│   ├── euro.svg              # Bandeira da União Europeia em círculo
│   └── arrow.svg             # Seta indicativa para baixo
├── index.html                # Estrutura semântica e acessível
├── style.css                 # Estilos visuais, tela de celular e design system
├── scripts.js                # Arquivo com mapa de IDs e guia pronto para você programar
└── README.md                 # Documentação do projeto
```

---

## 🎯 Elementos e IDs para o seu JavaScript

Para você manipular o DOM no seu `scripts.js`, utilize os seguintes IDs:

| Elemento | Seletor / ID | Descrição |
| :--- | :--- | :--- |
| **Botão Converter** | `#convert-button` | Botão que dispara o cálculo da conversão no evento `click`. |
| **Select Moeda Destino** | `#currency-select` | Select com opções `dolar` e `euro` no evento `change`. |
| **Input do Valor** | `#input-currency-value` | Campo onde o usuário digita a quantia em reais (`.value`). |
| **Valor Digitado (Real)** | `#currency-value-to-convert` | `<p>` que exibirá o valor formatado em Real (`R$ ...`). |
| **Valor Convertido** | `#currency-value` | `<p>` que exibirá o valor convertido em Dólar ou Euro. |
| **Nome da Moeda** | `#currency-name` | `<span>` com o nome da moeda ("Dólar Americano" ou "Euro"). |
| **Bandeira da Moeda** | `#currency-img` | `<img>` que alterna entre `assets/estados-unidos.svg` e `assets/euro.svg`. |

---

## 🚀 Como Executar

Basta abrir o arquivo [index.html](file:///c:/Users/joaov/Desktop/Projetos/Conversor%20de%20moedas/index.html) diretamente no seu navegador de preferência (Google Chrome, Edge, Firefox, etc.) ou via extensão Live Server no editor.
