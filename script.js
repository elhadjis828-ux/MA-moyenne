// Fonction pour ajouter une nouvelle ligne de matière
function ajouterMatiere() {
  const container = document.getElementById("form-calculateur").querySelector("fieldset");
    const div = document.createElement("div");
  div.className = "ligne-matiere";

   div.innerHTML = `
    <label>Matière :</label>
    <input type="text" class="nom" placeholder="Nom de la matière">
    <label>Note (/20) :</label>
    <input type="number" class="note" min="0" max="20" step="0.25" placeholder="">
    <label>Coefficient :</label>
    <input type="number" class="coeff" min="0.5" step="0.5" value="1">
  `;

    container.insertBefore(div, container.lastElementChild);
}

// Fonction pour calculer la moyenne
function calculerMoyenne() {
  const notes = document.querySelectorAll(".note");
  const coeffs = document.querySelectorAll(".coeff");

    let sommeNotes = 0;
  let sommeCoeff = 0;

  for (let i = 0; i < notes.length; i++) {
    const note = parseFloat(notes[i].value);
    const coeff = parseFloat(coeffs[i].value);

    if (!isNaN(note) && !isNaN(coeff)) {
      sommeNotes += note * coeff;
      sommeCoeff += coeff;
    }
  }

    const moyenne = sommeCoeff > 0 ? (sommeNotes / sommeCoeff).toFixed(2) : "--";

  document.getElementById("moyenne-finale").textContent = moyenne;
}
