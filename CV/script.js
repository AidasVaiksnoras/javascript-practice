fetch("https://zany-skitter-caper.glitch.me/experiences")
  .then((response) => response.json())
  .then((experiences) => {
    colectExperiences(experiences);
  });
function colectExperiences(experiences) {
  experiences.forEach((e) => {
    const year = document.createElement("div");
    const description = document.createElement("div");
    const yearContent = document.createElement("div");
    const descriptionContent = document.createElement("p");
    const positionTitle = document.createElement("div");
    const experienceRow = document.createElement("div");
    const experienceBlock = document.querySelector(".experience-block");

    yearContent.textContent = e.startYear + "-" + e.finishYear;
    year.className = "year";
    year.appendChild(yearContent);
    descriptionContent.textContent = e.description;
    description.className = "description";
    description.append(positionTitle, descriptionContent);
    positionTitle.textContent = e.position;
    experienceRow.append(year, description);
    experienceRow.className = "experience-row";
    experienceBlock.append(experienceRow);
  });
}
