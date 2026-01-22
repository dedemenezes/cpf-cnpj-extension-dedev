// Listener para os comandos de teclado
chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      if (command === "generate-cpf") {
        chrome.tabs.sendMessage(tabs[0].id, { action: "gerarCPF" });
      } else if (command === "generate-cnpj") {
        chrome.tabs.sendMessage(tabs[0].id, { action: "gerarCNPJ" });
      }
    }
  });
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "gerarCPF",
    title: "Gerar CPF",
    contexts: ["editable"],
  });
  chrome.contextMenus.create({
    id: "gerarCNPJ",
    title: "Gerar CNPJ",
    contexts: ["editable"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "gerarCPF" || info.menuItemId === "gerarCNPJ") {
    chrome.tabs.sendMessage(tab.id, { action: info.menuItemId });
  }
});
