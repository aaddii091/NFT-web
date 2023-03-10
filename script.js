console.log("uagdigaiywdga");
const btn = document.querySelectorAll(".card-btn-s");

btn.forEach((n, i) => {
  //   console.log(`${n.classList} and index is ${i}`);
  n.addEventListener("click", function () {
    const act = document.querySelector(".active");
    act.classList.remove("active");
    n.classList.add("active");
  });
});
