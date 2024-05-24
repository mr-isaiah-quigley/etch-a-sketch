/*
    Etch-a-Sketch
    Copyright 2024 Isaiah Quigley
    Completed as part of the course work for The Odin Project
*/

const container = document.querySelector(".container");

for (let i = 0; i < 16**2; i++) {
    const etchGrid = document.createElement("div");
    etchGrid.classList.add("etchGrid");
    etchGrid.textContent = "test";
    container.appendChild(etchGrid);
}