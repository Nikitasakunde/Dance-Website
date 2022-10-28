// const imagecontainerE1 = document.querySelector(".image-container");

// const prev = document.getElementById("btnPrev");
// const next = document.getElementById("btnNext");
// let x = 0;
// let timer;

// prev.addEventListener("click" , ()=>{
//     x = x + 45;
//     clearTimeout(timer);
//     updateGallery();
// });

// next.addEventListener("click" , ()=>{
//     x = x - 45;
//     clearTimeout(timer);
//     updateGallery();
// });

// function updateGallery() {
//     imagecontainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;
//     timer = setTimeout(()=>{
//         x = x-45;
//         updateGallery();
//     },3000);

// };
// updateGallery();