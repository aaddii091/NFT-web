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
// for (i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//   });
// }
