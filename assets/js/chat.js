// Flow Welcome UI
console.log('Flow Welcome UI initialized');

// Add any interactive functionality here if needed
const inputField = document.querySelector('.input-field');
const sendBtn = document.querySelector('.send-btn');
const mainContent = document.querySelector('.main-content');
const footer = document.querySelector('.footer');

let chatActive = false;

function showChatScreen() {
  // Hide welcome screen
  mainContent.style.display = 'none';
  chatActive = true;
  
  // Create chat container if it doesn't exist
  let chatContainer = document.querySelector('.chat-container');
  if (!chatContainer) {
    chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    mainContent.parentNode.insertBefore(chatContainer, footer);
  }
  chatContainer.style.display = 'flex';
}

function addUserMessage(message) {
  const chatContainer = document.querySelector('.chat-container');
  const messageGroup = document.createElement('div');
  messageGroup.className = 'message-group user-message-group';
  
  const messageBubble = document.createElement('div');
  messageBubble.className = 'message-bubble user-message';
  messageBubble.textContent = message;
  
  messageGroup.appendChild(messageBubble);
  chatContainer.appendChild(messageGroup);
  
  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addBotMessage(message) {
  const chatContainer = document.querySelector('.chat-container');
  const messageGroup = document.createElement('div');
  messageGroup.className = 'message-group bot-message-group';
  
  const avatar = document.createElement('img');
  avatar.src = '../assets/img/avatar.png';
  avatar.alt = 'Ruwi Avatar';
  avatar.className = 'message-avatar';
  
  const messageBubble = document.createElement('div');
  messageBubble.className = 'message-bubble bot-message';
  messageBubble.textContent = message;
  
  messageGroup.appendChild(avatar);
  messageGroup.appendChild(messageBubble);
  chatContainer.appendChild(messageGroup);
  
  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

if (inputField instanceof HTMLInputElement && sendBtn instanceof HTMLButtonElement) {
  sendBtn.addEventListener('click', () => {
    const value = inputField.value.trim();
    if (value) {
      if (!chatActive) {
        showChatScreen();
      }
      
      // Add user message
      addUserMessage(value);
      
      // Simulate bot response
      setTimeout(() => {
        addBotMessage('මොකද මැට්ටො කරන්නෙ?');
      }, 500);
      
      inputField.value = '';
    }
  });

  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
}
