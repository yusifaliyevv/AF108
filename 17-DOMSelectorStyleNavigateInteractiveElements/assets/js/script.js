// TASK 1 

// 1.1 Card uzerinde navigate ederek butun datalari bir objecte yigaraq consola yazdirin.Productu wishliste elave edirsiz
// ona gore heart clasina sahib olan div-den yola cixacaqsiniz.Her iki usulla ilk olaraq elementler uzerinde kecid ederek
// elave edeceksiniz daha sonra closest istfade ederek.

// let card = document.querySelectorAll('.card');

// card.forEach(card => {
//     let image = card.querySelector('img').src;
//     let title = card.querySelector('.cardTitle').textContent;
//     let text = card.querySelector('.cardText').textContent;
//     let price = card.querySelector('.cardPrice').textContent;

//     let product = {
//         image,
//         title,
//         text,
//         price
//     };

//     console.log("navigate ile:", product);
// });



// let heart = document.querySelectorAll('.heart');

// heart.forEach(heart => {
//     let card = heart.closest('.card');
//     let image = card.querySelector('img').src;
//     let title = card.querySelector('.cardTitle').textContent;
//     let text = card.querySelector('.cardText').textContent;
//     let price = card.querySelector('.cardPrice').textContent;

//     let product = {
//         image,
//         title,
//         text,
//         price
//     };

//     console.log("closest ile:", product);
// });



// 1.2 stilleri card elementlerine verin.

// let card = document.querySelector(".card");

// card.style.margin = "50px";
// card.style.width = "300px";
// card.style.border = "1px solid black";
// card.style.padding = "10px";


// let heart = card.querySelector(".heart");
// heart.style.display = "inline-flex";
// heart.style.alignItems = "center";
// heart.style.justifyContent = "center";
// heart.style.width = "30px";
// heart.style.height = "30px";
// heart.style.borderRadius = "50%";
// heart.style.backgroundColor = "silver";
// heart.style.position = "absolute";
// heart.style.top = "15px";
// heart.style.right = "15px";
// heart.style.cursor = "pointer";


// let imageWrapper = card.querySelector(".image");
// imageWrapper.style.width = "100%";
// imageWrapper.style.height = "300px";
// imageWrapper.style.position = "relative";


// let img = card.querySelector("img");
// img.style.width = "100%";
// img.style.height = "100%";
// img.style.borderRadius = "10px";


// let content = card.querySelector(".cardContent");
// content.style.display = "flex";
// content.style.flexDirection = "column";
// content.style.alignItems = "center";
// content.style.gap = "10px";
// content.style.marginTop = "20px";
// content.style.color = "burlywood";


// let price = card.querySelector(".cardPrice");
// price.style.display = "inline-block";
// price.style.padding = "5px";
// price.style.borderRadius = "5px";
// price.style.backgroundColor = "rgb(95, 94, 91)";


// let button = card.querySelector(".shopBtn");
// button.style.width = "100%";
// button.style.padding = "10px";
// button.style.backgroundColor = "skyblue";
// button.style.border = "none";
// button.style.cursor = "pointer";
// button.style.color = "white";
// button.style.textTransform = "uppercase";
// button.style.borderRadius = "5px";
// button.style.fontWeight = "bold";



// 1.3 Card elementlerini tek-tek secib contentlerini deyisin.Content serbestdir Her kes ucun.

// let firstCard = document.querySelectorAll(".card")[0];

// firstCard.querySelector(".cardTitle").textContent = "men t-shirt";
// firstCard.querySelector(".cardText").textContent = "Everyday comfort in a classic fit. Soft, breathable, and durable.";
// firstCard.querySelector(".cardPrice").textContent = "30AZN";
// firstCard.querySelector("img").src = "https://picsum.photos/200/300";





// TASK 2 Asagida sekilde verilen card-ı js-de interactive elements istifade ederek hazirlamaq(stiller js-de verilecek).

// document.body.style.margin = "0";
// document.body.style.backgroundColor = "#f5f5f5";
// document.body.style.fontFamily = "Arial, sans-serif";


// let div = document.createElement("div");
// div.style.maxWidth = "450px";
// div.style.margin = "60px auto";
// div.style.overflow = "hidden";
// div.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
// div.style.backgroundColor = "#fff";
// div.style.border = "1px solid #ccc";
// div.style.borderRadius = "12px";


// let image = document.createElement("img");
// image.src = "https://picsum.photos/300/200";
// image.style.width = "100%";
// image.style.height = "auto";


// let content = document.createElement("div");
// content.style.padding = "20px";


// let title = document.createElement("div");
// title.textContent = "DETACHED HOUSE - 5Y OLD";
// title.style.fontSize = "15px";
// title.style.color = "#666";
// title.style.marginBottom = "10px";
// title.style.fontWeight = "bold";


// let price = document.createElement("div");
// price.textContent = "$750,000";
// price.style.fontSize = "25px";
// price.style.marginBottom = "10px";


// let address = document.createElement("div");
// address.textContent = "742 Evergreen Terrace";
// address.style.color = "#777";
// address.style.fontSize = "15px";
// address.style.marginBottom = "15px";
// address.style.fontWeight = "bold";


// let features = document.createElement("div");
// features.style.display = "flex";
// features.style.justifyContent = "space-between";
// features.style.fontSize = "15px";
// features.style.marginBottom = "15px";


// let bed = document.createElement("div");
// let bedIcon = document.createElement("span");
// let bedCount = document.createElement("span");

// bedCount.textContent = "3";
// bedCount.style.fontWeight = "bold";


// let bedText = document.createElement("span");
// bedText.textContent = " Bedrooms";
// bedText.style.color = "#666";
// bedText.style.fontWeight = "bold";

// bed.appendChild(bedIcon);
// bed.appendChild(bedCount);
// bed.appendChild(bedText);



// let bath = document.createElement("div");
// let bathIcon = document.createElement("span");
// let bathCount = document.createElement("span");

// bathCount.textContent = "2";
// bathCount.style.fontWeight = "bold";


// let bathText = document.createElement("span");
// bathText.textContent = " Bathrooms";
// bathText.style.color = "#666";
// bathText.style.fontWeight = "bold";

// bath.appendChild(bathIcon);
// bath.appendChild(bathCount);
// bath.appendChild(bathText);


// features.appendChild(bed);
// features.appendChild(bath);



// let realtorSection = document.createElement("div");
// realtorSection.style.backgroundColor = "#eef7ff";
// realtorSection.style.padding = "15px";
// realtorSection.style.borderTop = "1px solid #ddd";

// let realtorLabel = document.createElement("div");
// realtorLabel.textContent = "REALTOR";
// realtorLabel.style.fontSize = "15px";
// realtorLabel.style.fontWeight = "bold";
// realtorLabel.style.color = "grey";
// realtorLabel.style.marginBottom = "10px";

// let realtorRow = document.createElement("div");
// realtorRow.style.display = "flex";
// realtorRow.style.alignItems = "center";
// realtorRow.style.gap = "10px";

// let avatar = document.createElement("img");
// avatar.src = "./assets/images/client.png.webp";
// avatar.style.width = "50px";
// avatar.style.height = "50px";
// avatar.style.borderRadius = "50%";

// let realtorInfo = document.createElement("div");

// let realtorName = document.createElement("div");
// realtorName.textContent = "Tiffany Heffner";
// realtorName.style.fontWeight = "bold";
// realtorName.style.marginBottom = "5px";

// let phoneNumber = document.createElement("div");
// phoneNumber.textContent = "(555) 555-4321";
// phoneNumber.style.color = "grey";
// phoneNumber.style.fontSize = "15px";

// realtorInfo.appendChild(realtorName);
// realtorInfo.appendChild(phoneNumber);

// realtorRow.appendChild(avatar);
// realtorRow.appendChild(realtorInfo);

// realtorSection.appendChild(realtorLabel);
// realtorSection.appendChild(realtorRow);

// content.appendChild(title);
// content.appendChild(price);
// content.appendChild(address);
// content.appendChild(features);

// div.appendChild(image);
// div.appendChild(content);
// div.appendChild(realtorSection);

// document.body.appendChild(div);