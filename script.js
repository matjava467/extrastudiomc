function showPage(pageId) {
  let pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function openGift() {
  const rewards = [
    "Cape légendaire 🎭",
    "Skin exclusif 🧑‍🚀",
    "Fond d'écran rare 🌌",
    "Emote spéciale 💃",
    "500 pièces du clicker 💰"
  ];

  let reward = rewards[Math.floor(Math.random() * rewards.length)];
  document.getElementById('giftResult').innerText = "Vous avez gagné : " + reward;

  // Stockage local
  let gifts = JSON.parse(localStorage.getItem("gifts") || "[]");
  gifts.push(reward);
  localStorage.setItem("gifts", JSON.stringify(gifts));
}
