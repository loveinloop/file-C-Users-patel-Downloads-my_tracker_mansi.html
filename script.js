const quotes = [
  "Keep your head in the clouds and your heart in the code ☁️",
  "You are made of magic, lavender, and light 🌸",
  "Every sunrise brings new possibilities 🌅",
  "Even the smallest stars shine in the darkest skies ✨",
  "Grow through what you go through 🌷"
];

document.getElementById("quoteBtn").addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
});
