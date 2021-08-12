export const createToggleButton = () => {
  const toggleDiv = document.createElement("div");
  toggleDiv.className = "flex pb-3 pt-2";
  toggleDiv.style.justifyContent = "center";

  const toggleLabel = document.createElement("label");
  toggleLabel.id = "toggle-label";
  toggleLabel.innerText = "Play Sound";
  toggleLabel.style.marginRight = "10px";
  toggleDiv.appendChild(toggleLabel);

  const toggleButton = document.createElement("label");
  toggleButton.className = "switch";

  const toggleInput = document.createElement("input");
  toggleInput.id = "toggle-input";
  toggleInput.type = "checkbox";
  toggleButton.appendChild(toggleInput);

  const toggleSpan = document.createElement("span");
  toggleSpan.className = "slider round";
  toggleButton.appendChild(toggleSpan);

  toggleDiv.appendChild(toggleButton);

  return toggleDiv;
};
