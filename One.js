var rect = document.querySelector("#center");
// // 
// // rect.addEventListener("mousemove", (details) => {
// //     var rectloc = rect.getBoundingClientRect();
// //     var loc = details.clientX - rectloc.left;
// //     var center = rectloc.width / 2;

// //     if (loc < center) {
// //         // Left half, gradient from red to yellow
// //         gsap.to(rect, {
// //             background: `linear-gradient(to right, rgb(255,0,0), rgb(${gsap.utils.mapRange(0, center, 255, 255, loc)}, ${gsap.utils.mapRange(0, center, 255, 255, loc)}, 0))`,
// //             ease: Power4,
// //         });
// //     } else if (loc > center) {
// //         // Right half, gradient from blue to purple
// //         gsap.to(rect, {
// //             background: `linear-gradient(to left, rgb(0,0,255), rgb(128, 0, 128))`,
// //             ease: Power4,
// //         });
// //     }

// //     if (loc === center) {
// //         // Set to white when at the center
// //         gsap.to(rect, {
// //             backgroundColor: "white",
// //             ease: Power4,
// //         });
// //     }
// // });
// // rect.addEventListener("mousemove", (details) => {
// //     var rectloc = rect.getBoundingClientRect();
// //     var loc = details.clientX - rectloc.left;
// //     var center = rectloc.width / 2;

// //     var scaleValue = gsap.utils.mapRange(0, rectloc.width, 1, 1.2, loc); // Scale from 1 to 1.2

// //     gsap.to(rect, {
// //         scale: scaleValue, // Adjust scale
// //         ease: Power4,
// //     });

// //     // Color change and other logic remain as it is
// // });
// // rect.addEventListener("mousemove", (details) => {
// //     var rectloc = rect.getBoundingClientRect();
// //     var loc = details.clientX - rectloc.left;
// //     var center = rectloc.width / 2;

// //     // Create shadow effect as mouse gets closer to the edges
// //     var shadowIntensity = gsap.utils.mapRange(0, rectloc.width, 5, 15, loc); // Range for shadow intensity
// //     gsap.to(rect, {
// //         boxShadow: `0px 4px ${shadowIntensity}px rgba(0, 0, 0, 0.5)`,
// //         ease: Power4,
// //     });

// //     // Continue with the color logic
// });
// rect.addEventListener("mousemove", (details) => {
//     var rectloc = rect.getBoundingClientRect();
//     var loc = details.clientX - rectloc.left;

//     // Create ripple effect
//     const ripple = document.createElement("div");
//     ripple.classList.add("ripple");
//     rect.appendChild(ripple);
    
//     var rippleSize = 50 + (Math.random() * 50); // Random ripple size
//     ripple.style.width = `${rippleSize}px`;
//     ripple.style.height = `${rippleSize}px`;
//     ripple.style.left = `${loc - rippleSize / 2}px`;
//     ripple.style.top = `${rectloc.height / 2 - rippleSize / 2}px`;

//     // Add animation to make the ripple disappear after a few seconds
//     gsap.to(ripple, {
//         opacity: 0,
//         scale: 3,
//         duration: 1.5,
//         onComplete: () => {
//             ripple.remove();
//         }
//     });
// });

// fetch("https://reqres.in/api/users",)
// .then(res => res.json())
// .then(data => console.log(data))


// const num = Math.ceil(Math.random()*10);
// console.log(num)

// const gnum = prompt("Enter a number between 1 to 10");

// if(gnum == num){
//     console.log('Matches')
// }
// else{
//     console.log("Not matched")
// }
const url = "https://random-data-api.com/api/cannabis/random_cannabis";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));

