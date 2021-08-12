const toggleDiv = document.createElement("div");
toggleDiv.className = "flex";
toggleDiv.style.justifyContent = "center";

const toggleLabel = document.createElement("label");
toggleLabel.id = "toggle-label";
toggleLabel.innerText = "Random Flash Cards";
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
