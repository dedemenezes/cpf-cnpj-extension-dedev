// Utility function to generate random number
const randomNum = () => Math.floor(Math.random() * 10);

// Calculate verification digit for CPF/CNPJ
const calculateDigit = (partial, weights) => {
  let sum = 0;

  if (Array.isArray(weights)) {
    // For CNPJ with custom weights
    for (let i = 0; i < partial.length; i++) {
      sum += parseInt(partial[i]) * weights[i];
    }
  } else {
    // For CPF with decreasing weights
    let weight = partial.length + 1;
    for (let i = 0; i < partial.length; i++) {
      sum += parseInt(partial[i]) * weight--;
    }
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

// Generate valid CPF
const generateCPF = () => {
  let cpf = "";

  // Generate first 9 digits
  for (let i = 0; i < 9; i++) {
    cpf += randomNum();
  }

  // Calculate verification digits
  const digit1 = calculateDigit(cpf);
  cpf += digit1;

  const digit2 = calculateDigit(cpf);
  cpf += digit2;

  return cpf;
};

// Generate valid CNPJ
const generateCNPJ = () => {
  let cnpj = "";

  // Generate first 12 digits
  for (let i = 0; i < 12; i++) {
    cnpj += randomNum();
  }

  // Weights for verification digits
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const digit1 = calculateDigit(cnpj, weights1);
  cnpj += digit1;

  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const digit2 = calculateDigit(cnpj, weights2);
  cnpj += digit2;

  return cnpj;
};

// Format CPF with dots and dash
const formatCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

// Format CNPJ with dots, slash and dash
const formatCNPJ = (cnpj) => {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};

// Copy text to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Copied to clipboard:", text);
    })
    .catch((err) => {
      console.error("Error copying:", err);
    });
};

// Check if element is editable input
const isEditableInput = (element) => {
  return (
    element.tagName === "INPUT" &&
    (element.type === "text" || element.type === "tel")
  );
};

// Add visual feedback to input
const addVisualFeedback = (element, color = "#4CAF50") => {
  const originalBorder = element.style.border;
  element.style.border = `2px solid ${color}`;
  setTimeout(() => {
    element.style.border = originalBorder;
  }, 500);
};

const showToast = (message) => {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgb(142, 86, 245);
    color: white;
    padding: 12px 20px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 14px
    z-index: 10000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
};

// Dispatch events for framework compatibility (Vue, React, etc)
const dispatchFrameworkEvents = (element) => {
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
};

// Update input value
const updateInputValue = (input, newValue) => {
  input.value = newValue;
};

// Fill input with generated number
const fillInput = (element, formattedNumber, color) => {
  updateInputValue(element, formattedNumber);
  copyToClipboard(formattedNumber);
  dispatchFrameworkEvents(element);
};

// Generate and fill with appropriate document type
const generateAndFill = (element, type) => {
  const number = type === "cpf" ? generateCPF() : generateCNPJ();
  const formatted = type === "cpf" ? formatCPF(number) : formatCNPJ(number);
  const color = type === "cpf" ? "#4CAF50" : "#2196F3";

  fillInput(element, formatted, color);

  addVisualFeedback(element, color);
  showToast(`${type.toUpperCase()} gerado e copiado!`);
};

// Handle context menu messages
const handleContextMenuMessage = (request, sender, sendResponse) => {
  const element = document.activeElement;

  if (!isEditableInput(element)) {
    sendResponse({ success: false, error: "Not an editable input" });
    return;
  }

  if (request.action === "gerarCPF") {
    generateAndFill(element, "cpf");
    sendResponse({ success: true });
  } else if (request.action === "gerarCNPJ") {
    generateAndFill(element, "cnpj");
    sendResponse({ success: true });
  } else {
    sendResponse({ success: false, error: "Unknown action" });
  }
};

// Event listeners

if (typeof document !== "undefined") {
  chrome.runtime.onMessage.addListener(handleContextMenuMessage);
  console.log("CPF/CNPJ Generator Extension loaded!");
}

// Exporta para testes (Node.js/Vitest)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    randomNum,
    generateCPF,
    generateCNPJ,
    formatCPF,
    formatCNPJ,
  };
}
