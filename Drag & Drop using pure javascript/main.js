const btn = document.getElementById("btn");
const input = document.getElementById("inputTask");
const boxes = document.querySelectorAll(".box");

let draggedItem = null;

// Add new task
btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const newItem = document.createElement("p");
    newItem.className = "item";
    newItem.draggable = true;
    newItem.textContent = input.value;
    boxes[0].appendChild(newItem);
    input.value = "";
    dragItem();
  }
});

function dragItem() {
  const items = document.querySelectorAll(".item");
  console.log(items);
  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      console.log("drag start");
      draggedItem = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", () => {
      console.log("drag end");
      item.style.opacity = "1";
    });

    boxes.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.style.background = "#090";
        box.style.color = "#fff";
      });

      box.addEventListener("dragleave", () => {
        box.style.background = "#fff";
        box.style.color = "#000";
      });

      box.addEventListener("drop", () => {
        box.append(draggedItem);
        box.style.background = "#fff";
        box.style.color = "#000";
      });
    });
  });
}
