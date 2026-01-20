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
