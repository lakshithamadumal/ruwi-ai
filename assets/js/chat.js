// Flow Welcome UI
console.log('Flow Welcome UI initialized');

// Add any interactive functionality here if needed
const inputField = document.querySelector('.input-field');
const sendBtn = document.querySelector('.send-btn');

if (inputField instanceof HTMLInputElement && sendBtn instanceof HTMLButtonElement) {
  sendBtn.addEventListener('click', () => {
    const value = inputField.value.trim();
    if (value) {
      console.log('User asked:', value);
      // Add your logic here
      inputField.value = '';
    }
  });

  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
}
