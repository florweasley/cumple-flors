const stepName = document.getElementById("step-name");
const stepInfo = document.getElementById("step-info");
const stepRsvp = document.getElementById("step-rsvp");

const startBtn = document.getElementById("startBtn");
const confirmBtn = document.getElementById("confirmBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const guestNameInput = document.getElementById("guestName");
const welcome = document.getElementById("welcome");
const extra = document.getElementById("extra");

function goTo(step) {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("active");
  });
  step.classList.add("active");
}

startBtn.addEventListener("click", () => {
  const name = guestNameInput.value.trim();
  if (!name) return;

  welcome.textContent = `Hola ${name} 💛`;
  goTo(stepInfo);
});

confirmBtn.addEventListener("click", () => {
  goTo(stepRsvp);
});

yesBtn.addEventListener("click", () => {
  extra.innerHTML = `
    <p>Qué alegría 🥹</p>
    <label>
      ¿Venís con alguien?
      <input type="text" placeholder="Nombre">
    </label>
    <p>Nos vemos prontito 💃✨</p>
  `;
});

noBtn.addEventListener("click", () => {
  extra.innerHTML = `
    <p>No pasa nada 💛</p>
    <p>Nos vemos otro día.</p>
  `;
});
