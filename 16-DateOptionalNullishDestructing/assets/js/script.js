// TASK 1 Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın

// function saataUygunMesaj (){
//     let saat = new Date().getHours();

//     let bildiris = (saat >= 6 && saat < 12) ? "siz seher daxil olmusunuz" : (saat >= 12 && saat < 18) ? "siz gunorta daxil olmusunuz" : (saat >= 18 && saat < 23) ? "siz axsam daxil olmusunuz" : "siz gece daxil olmusunuz (artiq yatmag vaxtidir)";
//     alert(bildiris);
// }
// saataUygunMesaj();





// TASK 2 Object Destructing istifadə edərək employee  obyektindən name, department və contact (email, phone, emergencyContact sahələri daxil olmaqla)
//məlumatlarını əldə edin. Həmçinin emergencyContact-də name və relation məlumatı əldə edin.

// const employee = {
//     name: "Farid Ali",
//     department: "Engineering",
//     contact: {
//       email: "farid.ali@example.com",
//       phone: "555-1234",
//       emergencyContact: {
//         name: "Far For",
//         relation: "Spouse"
//       }
//     }
//   };

// function employeeData({name, department, contact: {email, phone, emergencyContact: {name: emergencyContactName, relation: emergencyRelation}}}){
//     console.log("name:", name);
//     console.log("department:", department);
//     console.log("email:", email);
//     console.log("phone:", phone);
//     console.log("emergencyContactName:", emergencyContactName);
//     console.log("emergencyRelation:", emergencyRelation);
// }
// employeeData(employee);





// TASK 3

// const apiResponse = [
//     {
//       id: 1,
//       title: "JavaScript əsasları",
//       author: "Səid Məmmədov",
//       stats: [2500, 150, 30]    
//     //[oxunma, bəyənmə, şərhlər]
//     },
//     {
//       id: 2,
//       title: "Array Destructuring",
//       author: "Leyla Əliyeva",
//       stats: [1800, 220, 45]
//     },
//     {
//       id: 3,
//       title: "Müasir JavaScript",
//       author: "Tural Həsənli",
//       stats: [3200, 380, 70]
//     }
// ];

// function meqaleData(index){
//     let {title, author, stats} = apiResponse[index];
//     let [oxunma, beyenme, sherh] = stats;
//     console.log(`meqale: ${title}, muellif: ${author}, ${oxunma} oxunma, ${beyenme} beyenme, ${sherh} serh`);
// }
// meqaleData(1);





// TASK 4

// function renderUserProfile(userData){
//     return {
//         username: userData?.user?.username ?? "Qonaq",
//         avatar: userData?.user?.profile?.avatar ?? "/default-avatar.png",
//         bio: userData?.user?.profile?.bio ?? "Məlumat yoxdur",
//         email: userData?.user?.contact?.email ?? "təyin edilməyib",
//         premium: userData?.user?.account?.premium ?? false
//     };
// }
  
//   console.log(renderUserProfile({
//     user: {
//       username: "tahir2023",
//       profile: {
//         avatar: "/users/tahir.jpg",
//         bio: "JavaScript developer",
//       },
//       contact: {
//         email: "tahir@example.com"
//       },
//       account: {
//         premium: true
//       }
//     }
//   }));
  
//   console.log(renderUserProfile({
//     user: {
//       username: "aynur",
//       profile: {
//         bio: ""
//       },
//       contact: {}
//     }
//   }));
  
//   console.log(renderUserProfile({
//     user: {
//       username: null
//     }
//   }));
  
//   console.log(renderUserProfile({}));
  