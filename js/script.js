// Initialize data
let users = []

const courses = [
  {
    id: 1,
    title: "KOMPYUTER SAVODXONLIGI",
    description: "Kompyuter bilan ishlashning asosiy ko'nikmalarini o'rganing",
    image:
      "https://bilgi.uz/upload/iblock/49c/oygn1pbpcjri8pffoa9ctyh8rdpncoda/Kompyuter%20savodxonligi%20kursi%20Fon%20(780x470).png",
    videos: [
      {
        id: 1,
        title: "File kengaytmasini ko'rinadigan qilish",
        videoFile:
          "https://youtu.be/oxTwNHP3lXk?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 2,
        title: "YouTube URL manzilini qanday o'zgartirish mumkin",
        videoFile:
          "https://youtu.be/ZXf-89wlVK0?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 3,
        title: "Windows 11da Ekran kutish vaqtini sozlash",
        videoFile:
          "https://youtu.be/JzDCjNctOb8?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 4,
        title:
          "LightShot Chop etish tugmasi ishlamayotganini qanday tuzatish mumkin",
        videoFile:
          "https://youtu.be/ZXf-89wlVK0?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 5,
        title: "Antivirusni o'chirish",
        videoFile:
          "https://youtu.be/1mVbPSWCtsQ?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 6,
        title: "Bandicam dasturini o'rnatish",
        videoFile:
          "https://youtu.be/e7Kg1kBvjM0?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 7,
        title: "Lightshot matn yoki o'q hajmini qanday kattalashtirish",
        videoFile:
          "https://youtu.be/1n2BUdkkqZU?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 8,
        title: "Google Docs da ishlash",
        videoFile:
          "https://youtu.be/2OSY2hlnq5Y?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 9,
        title: "Movavi Editor ni o'rnatish",
        videoFile:
          "https://youtu.be/7ebDSxAqPmA?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 10,
        title: "Photoshop tilini o'zgartirish",
        videoFile:
          "https://youtu.be/Uuh4h0LDSLg?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 11,
        title: "Word sozlamalarini o'zgartirish",
        videoFile:
          "https://youtu.be/Lu5c-GSAScA?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 12,
        title: "Office Tab dasturi haqida",
        videoFile:
          "https://youtu.be/Lu5c-GSAScA?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 13,
        title: "NOTION dasturini o'rnatish",
        videoFile:
          "https://youtu.be/he7gHT0fVKQ?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 14,
        title: "NOTION - Video kurslarni rejalashtirish",
        videoFile:
          "https://youtu.be/ecUyXK_t548?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 15,
        title: "NOTION - Eslatma yaratish",
        videoFile:
          "https://youtu.be/0en9r8ewtSk?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 16,
        title: "NOTION - Lug'atni kalendar orqali rejalashtirish",
        videoFile:
          "https://youtu.be/OIEkuWfFKjg?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 17,
        title: "Notion orqali checklist yaratish",
        videoFile:
          "https://youtu.be/P4lHPbKJIZ0?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
      {
        id: 18,
        title: "Notion checklist",
        videoFile:
          "https://youtu.be/NeGIaY3pHEc?list=PLjAKRQl2j0eobIchEwhYJh2GyAjXbkYAK",
      },
    ],
  },
  {
    id: 2,
    title: "HTML Asoslari",
    description: "Web sahifalar yaratishning asosiy tili - HTML ni o'rganing",
    image:
      "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
    videos: [
      {
        id: 1,
        title: "HTML asoslari - Kirish",
        videoFile:
          "https://youtu.be/QpW_TETUVro?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 2,
        title: "HTML haqida",
        videoFile: "https://www.youtube.com/watch?v=jqmHTqVHQRs",
      },
      {
        id: 3,
        title: "Web dasturlash",
        videoFile:
          "https://youtu.be/C_R5CJZzvG8?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 4,
        title: "Hujjatni formatlash, tag va ularning atributlari",
        videoFile:
          "https://youtu.be/R68RFFRkzDk?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 5,
        title: "Taglar haqida batafsil.",
        videoFile:
          "https://youtu.be/Q0DeFN-Lj9g?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 6,
        title: "Attributlar haqida batafsil.",
        videoFile:
          "https://youtu.be/LmkuKu_P4oA?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 7,
        title: " HTML hujjatda shajara tushunchasi va izoh",
        videoFile:
          "https://youtu.be/ul3lqZDCEag?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 8,
        title: "Block va inline xususiyatli teglar haqida",
        videoFile:
          "https://youtu.be/gvwnxc0kiag?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 9,
        title: "Kod yozish madaniyati",
        videoFile:
          "https://youtu.be/dRVJn1OjUpQ?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 10,
        title: "HTML hujjatning asosiy strukturasi",
        videoFile:
          "https://youtu.be/15SCOio0foY?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 11,
        title: "Heading, hr, br, pre.",
        videoFile:
          "https://youtu.be/wyIUSNENDrA?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 12,
        title: "HTML hujjatda jadval hosil qilish",
        videoFile:
          "https://youtu.be/qYmaxcYJldk?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 13,
        title:
          "HTML tilining grafika darslarigacha bolgan qismidan foydalanib sahifa tayyorlash",
        videoFile:
          "https://youtu.be/qGFYTjy6Wb4?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 14,
        title: " img, iframe.",
        videoFile:
          "https://youtu.be/qp1X9asWaBQ?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 15,
        title: "Forma yaratish. form va input teglari haqida. 1-qism.",
        videoFile:
          "https://youtu.be/Wc5cEsVH6vo?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 16,
        title:
          "Forma yaratish. input, select, datalist, option teglari haqida. 2-qism.",
        videoFile:
          "https://youtu.be/RHatko24zp0?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
      {
        id: 17,
        title: "audio, video.",
        videoFile:
          "https://youtu.be/oaSQvMxfQUc?list=PLjAKRQl2j0epNBYiCoeJA3CwY90EZamgG",
      },
    ],
  },
  {
    id: 3,
    title: "CSS Dizayn",
    description:
      "Web sahifalarni chiroyli qilish uchun CSS stillarini o'rganing",
    image:
      "https://www.fannavaracademy.com/wp-content/uploads/2018/06/course-css.jpg",
    videos: [
      {
        id: 1,
        title: "CSS | 1. Cssda kod yozish usullari.",
        videoFile:
          "https://youtu.be/4AXdVL6sFaE?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 2,
        title: "CSS | 2. Selektorlar haqida.",
        videoFile:
          "https://youtu.be/FFHnN71ZF3o?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 3,
        title:
          "CSS | 3.font-family, font-style, font-size, color propertylari va absolyut olchov birliklari haqida",
        videoFile:
          "https://youtu.be/AJYZtYzCGKo?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 4,
        title: "CSS | 4. Selectorlar 2-qisim.",
        videoFile:
          "https://youtu.be/EEzqgL1rd_c?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 5,
        title: "CSS | 5. font-weight, line-height, font-family",
        videoFile:
          "https://youtu.be/mfT3uqorKyI?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 6,
        title: "CSS | 6. Pseudo selectorlar haqida",
        videoFile:
          "https://youtu.be/1ZiS2mkMJFQ?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 7,
        title: "CSS | 7. text properties",
        videoFile:
          "https://youtu.be/CkkX8h8McaY?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 8,
        title: "CSS | 8. pseudo classlar",
        videoFile:
          "https://youtu.be/jrnmzahXCxY?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 9,
        title: "CSS | 9. Background color, display",
        videoFile:
          "https://youtu.be/v7DR0R3KWS8?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      {
        id: 10,
        title: "CSS | 10. border, padding, margin",
        videoFile:
          "https://youtu.be/AFqHEW5JjPY?list=PLjAKRQl2j0erwNe9e6oSk4m2qt3KcEFNb",
      },
      { id: 11, title: "", videoFile: "" },
      { id: 12, title: "", videoFile: "" },
      { id: 13, title: "", videoFile: "" },
      { id: 14, title: "", videoFile: "" },
      { id: 15, title: "", videoFile: "" },
      { id: 16, title: "", videoFile: "" },
      { id: 17, title: "", videoFile: "" },
      { id: 18, title: "", videoFile: "" },
      { id: 19, title: "", videoFile: "" },
      { id: 20, title: "", videoFile: "" },
      { id: 21, title: "", videoFile: "" },
      { id: 22, title: "", videoFile: "" },
      { id: 23, title: "", videoFile: "" },
      { id: 24, title: "", videoFile: "" },
      { id: 25, title: "", videoFile: "" },
      { id: 26, title: "", videoFile: "" },
      { id: 27, title: "", videoFile: "" },
      { id: 28, title: "", videoFile: "" },
      { id: 29, title: "", videoFile: "" },
      { id: 30, title: "", videoFile: "" },
      { id: 31, title: "", videoFile: "" },
      { id: 32, title: "", videoFile: "" },
      { id: 33, title: "", videoFile: "" },
      { id: 34, title: "", videoFile: "" },
      { id: 35, title: "", videoFile: "" },
      { id: 36, title: "", videoFile: "" },
      { id: 37, title: "", videoFile: "" },
      { id: 38, title: "", videoFile: "" },
      { id: 39, title: "", videoFile: "" },
      { id: 40, title: "", videoFile: "" },
      { id: 41, title: "", videoFile: "" },
      { id: 42, title: "", videoFile: "" },
      { id: 43, title: "", videoFile: "" },
    ],
  },
  {
    id: 4,
    title: "JavaScript Dasturlash",
    description:
      "Interaktiv web sahifalar yaratish uchun JavaScript ni o'rganing",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    videos: [
      {
        id: 1,
        title: "MERN Stack kursi haqida",
        videoFile:
          "https://youtu.be/yyasmRTnsqI?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 2,
        title: "1-dars. JavaScript modulni samarali tugatish",
        videoFile:
          "https://youtu.be/7wKJ2wj8vPk?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 3,
        title: "2-dars. Ish joyini sozlash",
        videoFile:
          "https://youtu.be/AX3AFc4n_1s?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 4,
        title: "3-dars. Node js ni ornatish",
        videoFile:
          "https://youtu.be/TK_7Q4mTT7s?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 5,
        title: "4-dars. Javascript nima?",
        videoFile:
          "https://youtu.be/EjpJiZViUhE?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 6,
        title: "5-dars Ozgaruvchilar",
        videoFile:
          "https://youtu.be/wx5YU36IqnM?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 7,
        title: "6-dars. Qatiy rejim va u nima?",
        videoFile:
          "https://youtu.be/_HNC2CS9VrE?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 8,
        title: "7-dars. Javascriptdagi malumotlar turlarining tasnifi",
        videoFile:
          "https://youtu.be/y9OOdaKLU3o?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 9,
        title: "8-dars. Foydalanuvchi bilan oddiy muloqot",
        videoFile:
          "https://youtu.be/qbskYCDdsNY?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 10,
        title: "8-dars. Javascriptda foydalanuvchi bilan muloqot",
        videoFile:
          "https://youtu.be/JPXkfrymWD0?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 11,
        title: "9-dars. Interpolatsiya",
        videoFile:
          "https://youtu.be/fYZy93uqk5Q?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 12,
        title: "10-dars. Javascript Operatorlari",
        videoFile:
          "https://youtu.be/lcmEWA0_ABU?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 13,
        title:
          "11-dars Git and GitHub boshlovchilar uchun. #git #github #programming",
        videoFile:
          "https://youtu.be/ai5JZTEoE8M?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 14,
        title: "12-dars. Amaliyot. Ilova yaratishni boshlaymiz",
        videoFile:
          "https://youtu.be/yVknEYclH3Y?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 15,
        title: "13-dars. Shartli operator",
        videoFile:
          "https://youtu.be/KbR53u2vUVE?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 16,
        title: "14-dars. Loops - while, do while and for",
        videoFile:
          "https://youtu.be/DGHlPDMTkrs?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 17,
        title: "14-dars. for in and for of",
        videoFile:
          "https://youtu.be/ZB6pS-AZf0A?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 18,
        title: "15-dars. Amaliyot. Sikl",
        videoFile:
          "https://youtu.be/2NmNh0vNxtk?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 19,
        title: "16-dars. Funksiya",
        videoFile:
          "https://youtu.be/MCwtzmx7rE0?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 20,
        title: "17. Metod va xususiyatlar",
        videoFile:
          "https://youtu.be/hPbKpEpUBa8?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 21,
        title: "18-dars. Amaliyot. Function.",
        videoFile:
          "https://youtu.be/Lfr5WAdFnLg?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 22,
        title: "19-dars. Callback function",
        videoFile:
          "https://youtu.be/QJSp9YaCIj8?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 23,
        title: "20-dars. Obyektlar, destruptizatsiya",
        videoFile:
          "https://youtu.be/a78_nMCpikU?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 24,
        title: "21-dars. Massivlar va psevdo massivlar",
        videoFile:
          "https://youtu.be/y2k4JZVLKXI?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 25,
        title: "35-dars. ClassList",
        videoFile:
          "https://youtu.be/Pfc2d27d9WM?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
    ],
  },
]

// Initialize localStorage
if (!localStorage.getItem("courses")) {
  localStorage.setItem("courses", JSON.stringify(courses))
}
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users))
}

// DOM elements
const loginBtn = document.getElementById("loginBtn")
const userAccount = document.getElementById("userAccount")
const userAccountBtn = document.getElementById("userAccountBtn")
const userDropdown = document.getElementById("userDropdown")
const loginModal = document.getElementById("loginModal")
const editCourseModal = document.getElementById("editCourseModal")
const editVideoModal = document.getElementById("editVideoModal")

// Navigation function
function navigateTo(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"))

  const targetPage = document.getElementById(page + "Page")
  if (targetPage) {
    targetPage.classList.add("active")

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
    })

    const activeLink = document.querySelector(`a[href="#${page}"]`)
    if (activeLink) {
      activeLink.classList.add("active")
    }

    // Load page-specific content
    switch (page) {
      case "home":
        loadFeaturedCourses()
        break
      case "courses":
        loadAllCourses()
        break
      case "courseDetails":
        loadCourseDetails()
        break
      case "admin":
        loadAdminData()
        break
      case "profile":
        loadProfileData()
        break
    }
  }
}

// Authentication functions
function checkLoginStatus() {
  const currentUser = localStorage.getItem("currentUser")
  if (currentUser) {
    const user = JSON.parse(currentUser)
    showUserAccount(user)
  } else {
    showLoginButton()
  }
}

function showUserAccount(user) {
  loginBtn.style.display = "none"
  userAccount.classList.remove("hidden")
  document.getElementById("userDisplayName").textContent =
    user.name || user.email
  document.getElementById("dropdownUserName").textContent =
    user.name || user.email
  document.getElementById("userRole").textContent = user.isAdmin
    ? "Administrator"
    : "Foydalanuvchi"

  if (user.isAdmin) {
    document.getElementById("adminMenuItem").classList.remove("hidden")
    document.getElementById("adminDropdownLink").classList.remove("hidden")
  }
}

function showLoginButton() {
  loginBtn.style.display = "block"
  userAccount.classList.add("hidden")
  document.getElementById("adminMenuItem").classList.add("hidden")
  document.getElementById("adminDropdownLink").classList.add("hidden")
}

// Enhanced course loading functions
function loadFeaturedCourses() {
  const featuredCourses = document.getElementById("featuredCourses")
  const courses = JSON.parse(localStorage.getItem("courses"))

  featuredCourses.innerHTML = ""

  courses.slice(0, 3).forEach((course, index) => {
    const courseCard = createCourseCard(course)
    courseCard.style.animationDelay = `${index * 0.2}s`
    courseCard.classList.add("animate-fade-in")
    featuredCourses.appendChild(courseCard)
  })

  addCourseClickListeners()
}

function loadAllCourses() {
  const allCoursesGrid = document.getElementById("allCoursesGrid")
  const courses = JSON.parse(localStorage.getItem("courses"))

  allCoursesGrid.innerHTML = ""

  courses.forEach((course, index) => {
    const courseCard = createCourseCard(course)
    courseCard.style.animationDelay = `${index * 0.15}s`
    courseCard.classList.add("animate-slide-up")
    allCoursesGrid.appendChild(courseCard)
  })

  addCourseClickListeners()
}

function createCourseCard(course) {
  const courseCard = document.createElement("div")
  courseCard.className =
    "course-card glass rounded-3xl overflow-hidden transition-all border border-gray-700"
  courseCard.innerHTML = `
                <div class="course-image-container h-56 bg-gradient-to-br from-dark-lighter to-dark flex justify-center items-center p-6 border-b border-gray-700 relative">
                    <img src="${course.image}" alt="${course.title}" class="h-36 w-36 object-contain rounded-2xl floating-element">
                    <div class="absolute top-4 right-4 category-badge px-3 py-1 rounded-full text-xs">
                        <i class="fas fa-star mr-1"></i>Popular
                    </div>
                </div>
                <div class="p-8">
                    <h3 class="text-2xl font-bold mb-4 text-primary">${course.title}</h3>
                    <p class="text-gray-300 mb-6 h-20 overflow-hidden leading-relaxed">${course.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center text-gray-400">
                            <i class="fas fa-video mr-2 text-primary"></i>
                            <span class="font-semibold">${course.videos.length} video</span>
                        </div>
                        <a href="#courseDetails" data-id="${course.id}" class="course-link btn-primary px-6 py-3 rounded-xl inline-flex items-center font-bold transition-all group">
                            <i class="fas fa-play mr-2 group-hover:scale-110 transition-transform"></i>
                            Ko'rish
                        </a>
                    </div>
                </div>
            `
  return courseCard
}

function addCourseClickListeners() {
  document.querySelectorAll(".course-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const courseId = this.getAttribute("data-id")
      localStorage.setItem("currentCourseId", courseId)
      navigateTo("courseDetails")
    })
  })
}

function loadCourseDetails() {
  const courseContent = document.getElementById("courseContent")
  const courseId = parseInt(localStorage.getItem("currentCourseId"))
  const courses = JSON.parse(localStorage.getItem("courses"))
  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    courseContent.innerHTML =
      '<div class="text-red-500 text-center py-10 text-xl">Kurs topilmadi!</div>'
    return
  }

  // Enhanced course header
  courseContent.innerHTML = `
                <div class="flex flex-col lg:flex-row items-center mb-10 glass rounded-3xl p-10 border border-gray-700 animate-fade-in">
                    <div class="w-40 h-40 mb-8 lg:mb-0 lg:mr-10 bg-gradient-to-br from-dark-lighter to-dark rounded-3xl flex justify-center items-center border border-gray-700 floating-element">
                        <img src="${course.image}" alt="${course.title}" class="w-32 h-32 object-contain rounded-2xl">
                    </div>
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-black mb-6 text-primary neon-text">
                            ${course.title}
                        </h1>
                        <p class="text-gray-300 text-xl mb-6 leading-relaxed">${course.description}</p>
                        <div class="flex flex-wrap justify-center lg:justify-start gap-6">
                            <div class="flex items-center text-gray-400">
                                <i class="fas fa-video mr-3 text-primary text-xl"></i>
                                <span class="text-lg font-semibold">${course.videos.length} video darslik</span>
                            </div>
                            <div class="flex items-center text-gray-400">
                                <i class="fas fa-clock mr-3 text-primary text-xl"></i>
                                <span class="text-lg font-semibold">Bepul</span>
                            </div>
                            <div class="flex items-center text-gray-400">
                                <i class="fas fa-certificate mr-3 text-primary text-xl"></i>
                                <span class="text-lg font-semibold">Sertifikat</span>
                            </div>
                        </div>
                    </div>
                </div>
            `

  const currentUser = localStorage.getItem("currentUser")

  if (!currentUser) {
    // Enhanced login required message
    const loginRequired = document.createElement("div")
    loginRequired.className =
      "text-center py-20 px-10 glass rounded-3xl mt-10 border border-gray-700 animate-scale-in"
    loginRequired.innerHTML = `
                    <div class="mb-8">
                        <i class="fas fa-lock text-primary text-8xl mb-6 floating-element"></i>
                        <h2 class="text-4xl font-black mb-6 neon-text">Kursni ko'rish uchun tizimga kiring</h2>
                        <p class="text-gray-300 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">Video darsliklarni ko'rish uchun ro'yxatdan o'ting yoki tizimga kiring</p>
                    </div>
                    <button id="courseLoginBtn" class="btn-primary px-12 py-5 rounded-xl font-bold transition-all inline-flex items-center text-xl">
                        <i class="fas fa-sign-in-alt mr-3"></i>
                        Kirish / Ro'yxatdan o'tish
                    </button>
                `
    courseContent.appendChild(loginRequired)

    document
      .getElementById("courseLoginBtn")
      .addEventListener("click", function () {
        loginModal.style.display = "block"
      })
  } else {
    // Enhanced course content for logged in users
    const courseContainer = document.createElement("div")
    courseContainer.className =
      "flex flex-col xl:flex-row gap-10 animate-slide-up"

    // Enhanced video player section
    const videoPlayerSection = document.createElement("div")
    videoPlayerSection.className = "w-full xl:w-2/3"
    videoPlayerSection.innerHTML = `
                    <div class="glass rounded-3xl overflow-hidden border border-gray-700">
                        <div class="video-player">
                            <div id="courseVideoPlayer" class="flex items-center justify-center bg-gradient-to-br from-dark-lighter to-dark">
                                <div class="text-center">
                                    <i class="fas fa-play-circle text-primary text-8xl mb-6 floating-element"></i>
                                    <p class="text-gray-400 text-xl">Video tanlang</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-8">
                            <h2 id="currentVideoTitle" class="text-3xl font-bold mb-4 neon-text">${
                              course.videos[0]?.title || "Video tanlang"
                            }</h2>
                            <div class="flex justify-between items-center">
                                <p class="text-gray-400 text-lg">${
                                  course.title
                                }</p>
                                <div class="flex space-x-6">
                                    <button class="text-gray-400 hover:text-primary transition-all hover:scale-110">
                                        <i class="fas fa-thumbs-up text-xl"></i>
                                    </button>
                                    <button class="text-gray-400 hover:text-primary transition-all hover:scale-110">
                                        <i class="fas fa-share text-xl"></i>
                                    </button>
                                    <button class="text-gray-400 hover:text-primary transition-all hover:scale-110">
                                        <i class="fas fa-bookmark text-xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `

    // Enhanced video list section
    const videoListSection = document.createElement("div")
    videoListSection.className = "w-full xl:w-1/3"
    videoListSection.innerHTML = `
                    <div class="glass rounded-3xl h-full border border-gray-700">
                        <div class="p-8 border-b border-gray-700">
                            <h3 class="text-2xl font-bold flex items-center neon-text">
                                <i class="fas fa-list-play mr-4 text-primary"></i>
                                Video Darsliklar
                            </h3>
                        </div>
                        <div class="video-list-container overflow-y-auto" style="max-height: 700px;">
                            <ul id="courseVideoList" class="divide-y divide-gray-700">
                                ${course.videos
                                  .map(
                                    (video, index) => `
                                    <li class="video-list-item p-6 cursor-pointer transition-all ${
                                      index === 0 ? "active" : ""
                                    }" data-video="${
                                      video.videoFile
                                    }" data-title="${video.title}">
                                        <div class="flex items-start">
                                            <div class="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 floating-element">
                                                <i class="fas fa-play text-primary text-lg"></i>
                                            </div>
                                            <div class="flex-1">
                                                <h4 class="font-bold mb-2 text-lg">${
                                                  video.title
                                                }</h4>
                                                <p class="text-gray-400">Video ${
                                                  index + 1
                                                }</p>
                                                <div class="flex items-center mt-2">
                                                    <span class="category-badge px-2 py-1 rounded text-xs">HD</span>
                                                    <span class="text-gray-500 text-xs ml-2">• 5 min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                `
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                `

    courseContainer.appendChild(videoPlayerSection)
    courseContainer.appendChild(videoListSection)
    courseContent.appendChild(courseContainer)

    // Load first video
    if (course.videos.length > 0) {
      loadVideoPlayer(course.videos[0].videoFile, course.videos[0].title)
    }

    // Add enhanced video list click listeners
    document.querySelectorAll(".video-list-item").forEach((item) => {
      item.addEventListener("click", function () {
        const videoUrl = this.getAttribute("data-video")
        const videoTitle = this.getAttribute("data-title")

        document
          .querySelectorAll(".video-list-item")
          .forEach((item) => item.classList.remove("active"))
        this.classList.add("active")

        loadVideoPlayer(videoUrl, videoTitle)
        document.getElementById("currentVideoTitle").textContent = videoTitle
      })
    })
  }
}

function loadVideoPlayer(videoUrl, videoTitle) {
  const player = document.getElementById("courseVideoPlayer")
  let embedCode = ""

  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    const videoId = extractYouTubeId(videoUrl)
    if (videoId) {
      embedCode = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen class="w-full h-full rounded-2xl"></iframe>`
    }
  } else if (videoUrl.includes("vimeo.com")) {
    const videoId = extractVimeoId(videoUrl)
    if (videoId) {
      embedCode = `<iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1" frameborder="0" allowfullscreen class="w-full h-full rounded-2xl"></iframe>`
    }
  } else {
    embedCode = `<video controls autoplay class="w-full h-full rounded-2xl"><source src="${videoUrl}" type="video/mp4">Video yuklanmadi.</video>`
  }

  player.innerHTML = embedCode
}

function extractYouTubeId(url) {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

function extractVimeoId(url) {
  const regex =
    /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/
  const match = url.match(regex)
  return match ? match[3] : null
}

// Enhanced profile functions
function loadProfileData() {
  const currentUser = localStorage.getItem("currentUser")
  if (!currentUser) {
    navigateTo("home")
    return
  }

  const user = JSON.parse(currentUser)
  document.getElementById("profileUserName").textContent =
    user.name || user.email
  document.getElementById("profileUserRole").textContent = user.isAdmin
    ? "Administrator"
    : "Foydalanuvchi"
  document.getElementById("profileName").value = user.name || ""
  document.getElementById("profileEmail").value = user.email
  document.getElementById("profileBio").value = user.bio || ""
}

// Enhanced admin functions
function loadAdminData() {
  const courses = JSON.parse(localStorage.getItem("courses"))
  const users = JSON.parse(localStorage.getItem("users"))

  document.getElementById("totalCourses").textContent = courses.length
  document.getElementById("totalVideos").textContent = courses.reduce(
    (total, course) => total + course.videos.length,
    0
  )
  document.getElementById("totalUsers").textContent = users.length

  loadRecentCourses()
  loadAdminCourses()
  loadAdminVideos()
  loadAdminUsers()
  loadCourseOptions()
}

function loadRecentCourses() {
  const container = document.getElementById("recentCourses")
  const courses = JSON.parse(localStorage.getItem("courses"))

  container.innerHTML = ""

  courses.slice(-3).forEach((course, index) => {
    const courseItem = document.createElement("div")
    courseItem.className =
      "flex items-center justify-between p-6 glass rounded-2xl mb-6 border border-gray-700 animate-fade-in"
    courseItem.style.animationDelay = `${index * 0.1}s`
    courseItem.innerHTML = `
                    <div class="flex items-center">
                        <img src="${course.image}" alt="${course.title}" class="w-20 h-20 rounded-2xl mr-6 object-cover floating-element">
                        <div>
                            <h3 class="font-bold text-primary text-lg">${course.title}</h3>
                            <p class="text-gray-400">${course.videos.length} video</p>
                        </div>
                    </div>
                    <span class="category-badge px-4 py-2 rounded-full font-bold">Yangi</span>
                `
    container.appendChild(courseItem)
  })
}

function loadAdminCourses() {
  const container = document.getElementById("adminCourses")
  const courses = JSON.parse(localStorage.getItem("courses"))

  container.innerHTML = ""

  courses.forEach((course, index) => {
    const courseItem = document.createElement("div")
    courseItem.className =
      "flex items-center justify-between p-6 glass rounded-2xl mb-6 border border-gray-700 animate-slide-up"
    courseItem.style.animationDelay = `${index * 0.1}s`
    courseItem.innerHTML = `
                    <div class="flex items-center">
                        <img src="${course.image}" alt="${course.title}" class="w-24 h-24 rounded-2xl mr-6 object-cover floating-element">
                        <div>
                            <h3 class="font-bold text-primary text-xl">${course.title}</h3>
                            <p class="text-gray-400 mb-2 leading-relaxed">${course.description}</p>
                            <p class="text-primary font-semibold">${course.videos.length} video</p>
                        </div>
                    </div>
                    <div class="flex space-x-3">
                        <button onclick="editCourse(${course.id})" class="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-bold transition-all hover:scale-105">
                            <i class="fas fa-edit mr-2"></i>Tahrirlash
                        </button>
                        <button onclick="deleteCourse(${course.id})" class="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-bold transition-all hover:scale-105">
                            <i class="fas fa-trash mr-2"></i>O'chirish
                        </button>
                    </div>
                `
    container.appendChild(courseItem)
  })
}

function loadAdminVideos() {
  const container = document.getElementById("allVideos")
  const courses = JSON.parse(localStorage.getItem("courses"))

  container.innerHTML = ""

  let videoIndex = 0
  courses.forEach((course) => {
    course.videos.forEach((video) => {
      const videoItem = document.createElement("div")
      videoItem.className =
        "flex items-center justify-between p-6 glass rounded-2xl mb-6 border border-gray-700 animate-fade-in"
      videoItem.style.animationDelay = `${videoIndex * 0.05}s`
      videoItem.innerHTML = `
                        <div class="flex items-center">
                            <div class="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6 floating-element">
                                <i class="fas fa-play text-primary text-2xl"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">${video.title}</h3>
                                <p class="text-gray-400">${course.title}</p>
                                <p class="text-gray-500 text-sm truncate max-w-xs">${video.videoFile}</p>
                            </div>
                        </div>
                        <div class="flex space-x-3">
                            <button onclick="playVideo('${video.videoFile}', '${video.title}', '${course.title}')" class="btn-primary px-4 py-3 rounded-xl font-bold">
                                <i class="fas fa-play mr-2"></i>Ko'rish
                            </button>
                            <button onclick="editVideo(${course.id}, ${video.id})" class="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl font-bold transition-all hover:scale-105">
                                <i class="fas fa-edit mr-2"></i>Tahrirlash
                            </button>
                            <button onclick="deleteVideo(${course.id}, ${video.id})" class="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl font-bold transition-all hover:scale-105">
                                <i class="fas fa-trash mr-2"></i>O'chirish
                            </button>
                        </div>
                    `
      container.appendChild(videoItem)
      videoIndex++
    })
  })
}

function loadAdminUsers() {
  const container = document.getElementById("allUsers")
  const users = JSON.parse(localStorage.getItem("users"))

  container.innerHTML = ""

  users.forEach((user, index) => {
    const userItem = document.createElement("div")
    userItem.className =
      "flex items-center justify-between p-6 glass rounded-2xl mb-6 border border-gray-700 animate-slide-up"
    userItem.style.animationDelay = `${index * 0.1}s`
    userItem.innerHTML = `
                    <div class="flex items-center">
                        <div class="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6 floating-element">
                            <i class="fas fa-user text-primary text-2xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">${
                              user.name || user.email
                            }</h3>
                            <p class="text-gray-400">${user.email}</p>
                            <p class="text-primary font-semibold">${
                              user.isAdmin ? "Administrator" : "Foydalanuvchi"
                            }</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="text-green-400 font-bold flex items-center category-badge px-4 py-2 rounded-full">
                            <i class="fas fa-circle text-xs mr-2"></i>Faol
                        </span>
                    </div>
                `
    container.appendChild(userItem)
  })
}

function loadCourseOptions() {
  const select = document.getElementById("videoCourse")
  const courses = JSON.parse(localStorage.getItem("courses"))

  select.innerHTML = '<option value="">Kursni tanlang</option>'

  courses.forEach((course) => {
    const option = document.createElement("option")
    option.value = course.id
    option.textContent = course.title
    select.appendChild(option)
  })
}

// Enhanced video player modal function
function playVideo(videoUrl, videoTitle, courseTitle) {
  const modal = document.getElementById("videoPlayerModal")
  const player = document.getElementById("mainVideoPlayer")
  const titleElement = document.getElementById("videoPlayerTitle")
  const courseElement = document.getElementById("videoPlayerCourse")

  titleElement.textContent = videoTitle
  courseElement.textContent = courseTitle

  let embedCode = ""

  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    const videoId = extractYouTubeId(videoUrl)
    if (videoId) {
      embedCode = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen class="w-full h-full rounded-2xl"></iframe>`
    }
  } else if (videoUrl.includes("vimeo.com")) {
    const videoId = extractVimeoId(videoUrl)
    if (videoId) {
      embedCode = `<iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1" frameborder="0" allowfullscreen class="w-full h-full rounded-2xl"></iframe>`
    }
  } else {
    embedCode = `<video controls autoplay class="w-full h-full rounded-2xl"><source src="${videoUrl}" type="video/mp4">Video yuklanmadi.</video>`
  }

  player.innerHTML = embedCode
  modal.classList.remove("hidden")
}

// Enhanced CRUD functions
function editCourse(courseId) {
  const courses = JSON.parse(localStorage.getItem("courses"))
  const course = courses.find((c) => c.id === courseId)

  if (course) {
    document.getElementById("editCourseId").value = course.id
    document.getElementById("editCourseTitle").value = course.title
    document.getElementById("editCourseImage").value = course.image
    document.getElementById("editCourseDescription").value = course.description

    editCourseModal.style.display = "block"
  }
}

function editVideo(courseId, videoId) {
  const courses = JSON.parse(localStorage.getItem("courses"))
  const course = courses.find((c) => c.id === courseId)

  if (course) {
    const video = course.videos.find((v) => v.id === videoId)

    if (video) {
      document.getElementById("editVideoCourseId").value = courseId
      document.getElementById("editVideoId").value = videoId
      document.getElementById("editVideoTitle").value = video.title
      document.getElementById("editVideoFile").value = video.videoFile

      editVideoModal.style.display = "block"
    }
  }
}

function deleteCourse(courseId) {
  if (confirm("Kursni o'chirishga ishonchingiz komilmi?")) {
    let courses = JSON.parse(localStorage.getItem("courses"))
    courses = courses.filter((c) => c.id !== courseId)
    localStorage.setItem("courses", JSON.stringify(courses))
    loadAdminData()
  }
}

function deleteVideo(courseId, videoId) {
  if (confirm("Videoni o'chirishga ishonchingiz komilmi?")) {
    const courses = JSON.parse(localStorage.getItem("courses"))
    const courseIndex = courses.findIndex((c) => c.id === courseId)

    if (courseIndex !== -1) {
      courses[courseIndex].videos = courses[courseIndex].videos.filter(
        (v) => v.id !== videoId
      )
      localStorage.setItem("courses", JSON.stringify(courses))
      loadAdminData()
    }
  }
}

// Enhanced Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus()
  navigateTo("home")

  // Enhanced navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const page = this.getAttribute("href").substring(1)
      navigateTo(page)
    })
  })

  // Enhanced login button
  loginBtn.addEventListener("click", function () {
    loginModal.style.display = "block"
  })

  // Enhanced user dropdown
  userAccountBtn.addEventListener("click", function () {
    userDropdown.classList.toggle("active")
  })

  // Close dropdowns
  document.addEventListener("click", function (e) {
    if (
      !userAccountBtn.contains(e.target) &&
      !userDropdown.contains(e.target)
    ) {
      userDropdown.classList.remove("active")
    }
  })

  // Enhanced logout
  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("currentUser")
    checkLoginStatus()
    navigateTo("home")
    userDropdown.classList.remove("active")
  })

  // Enhanced modal close buttons
  document.querySelectorAll(".close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      this.closest(".fixed").style.display = "none"
    })
  })

  document.querySelector(".close-video").addEventListener("click", function () {
    document.getElementById("videoPlayerModal").classList.add("hidden")
  })

  // Enhanced tab switching
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")

      document.querySelectorAll(".tab").forEach((t) => {
        t.classList.remove("active", "border-primary", "text-primary")
      })

      this.classList.add("active", "border-primary", "text-primary")

      document.querySelectorAll(".form-container").forEach((container) => {
        container.classList.remove("active")
      })

      document.getElementById(tabName + "Form").classList.add("active")
    })
  })

  // Enhanced admin tab switching
  document.querySelectorAll(".admin-tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")

      document.querySelectorAll(".admin-tab").forEach((t) => {
        t.classList.remove("active")
      })

      this.classList.add("active")

      document.querySelectorAll(".admin-content").forEach((content) => {
        content.classList.add("hidden")
      })

      document.getElementById(tabName).classList.remove("hidden")

      if (tabName === "videos") {
        loadCourseOptions()
      }
    })
  })

  // Enhanced forms
  document
    .getElementById("loginFormElement")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const email = document.getElementById("loginEmail").value
      const password = document.getElementById("loginPassword").value

      const users = JSON.parse(localStorage.getItem("users"))
      const user = users.find(
        (u) => u.email === email && u.password === password
      )

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user))
        showUserAccount(user)
        loginModal.style.display = "none"
        this.reset()
      } else {
        alert("Email yoki parol noto'g'ri!")
      }
    })

  document
    .getElementById("registerFormElement")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const email = document.getElementById("registerEmail").value
      const password = document.getElementById("registerPassword").value
      const confirmPassword = document.getElementById("confirmPassword").value

      if (password !== confirmPassword) {
        alert("Parollar mos kelmaydi!")
        return
      }

      const users = JSON.parse(localStorage.getItem("users"))

      if (users.find((u) => u.email === email)) {
        alert("Bu email allaqachon ro'yxatdan o'tgan!")
        return
      }

      const newUser = {
        email: email,
        password: password,
        isAdmin: false,
        name: "",
      }

      users.push(newUser)
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(newUser))

      showUserAccount(newUser)
      loginModal.style.display = "none"
      this.reset()
    })

  document
    .getElementById("addCourseForm")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const title = document.getElementById("courseTitle").value
      const image = document.getElementById("courseImage").value
      const description = document.getElementById("courseDescription").value

      const courses = JSON.parse(localStorage.getItem("courses"))
      const newCourse = {
        id: Date.now(),
        title: title,
        image: image,
        description: description,
        videos: [],
      }

      courses.push(newCourse)
      localStorage.setItem("courses", JSON.stringify(courses))

      this.reset()
      loadAdminData()
      alert("Kurs muvaffaqiyatli qo'shildi!")
    })

  document
    .getElementById("addVideoForm")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const courseId = parseInt(document.getElementById("videoCourse").value)
      const title = document.getElementById("videoTitle").value
      const videoUrl = document.getElementById("videoFile").value

      if (!courseId) {
        alert("Kursni tanlang!")
        return
      }

      const courses = JSON.parse(localStorage.getItem("courses"))
      const courseIndex = courses.findIndex((c) => c.id === courseId)

      if (courseIndex !== -1) {
        const newVideo = {
          id: Date.now(),
          title: title,
          videoFile: videoUrl,
        }

        courses[courseIndex].videos.push(newVideo)
        localStorage.setItem("courses", JSON.stringify(courses))

        this.reset()
        loadAdminData()
        alert("Video muvaffaqiyatli qo'shildi!")
      }
    })

  document
    .getElementById("editCourseForm")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const courseId = parseInt(document.getElementById("editCourseId").value)
      const title = document.getElementById("editCourseTitle").value
      const image = document.getElementById("editCourseImage").value
      const description = document.getElementById("editCourseDescription").value

      const courses = JSON.parse(localStorage.getItem("courses"))
      const courseIndex = courses.findIndex((c) => c.id === courseId)

      if (courseIndex !== -1) {
        courses[courseIndex].title = title
        courses[courseIndex].image = image
        courses[courseIndex].description = description

        localStorage.setItem("courses", JSON.stringify(courses))

        editCourseModal.style.display = "none"
        loadAdminData()
        alert("Kurs muvaffaqiyatli yangilandi!")
      }
    })

  document
    .getElementById("editVideoForm")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const courseId = parseInt(
        document.getElementById("editVideoCourseId").value
      )
      const videoId = parseInt(document.getElementById("editVideoId").value)
      const title = document.getElementById("editVideoTitle").value
      const videoUrl = document.getElementById("editVideoFile").value

      const courses = JSON.parse(localStorage.getItem("courses"))
      const courseIndex = courses.findIndex((c) => c.id === courseId)

      if (courseIndex !== -1) {
        const videoIndex = courses[courseIndex].videos.findIndex(
          (v) => v.id === videoId
        )

        if (videoIndex !== -1) {
          courses[courseIndex].videos[videoIndex].title = title
          if (videoUrl) {
            courses[courseIndex].videos[videoIndex].videoFile = videoUrl
          }

          localStorage.setItem("courses", JSON.stringify(courses))

          editVideoModal.style.display = "none"
          loadAdminData()
          alert("Video muvaffaqiyatli yangilandi!")
        }
      }
    })

  document
    .getElementById("profileForm")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const name = document.getElementById("profileName").value
      const bio = document.getElementById("profileBio").value

      const currentUser = JSON.parse(localStorage.getItem("currentUser"))
      currentUser.name = name
      currentUser.bio = bio

      const users = JSON.parse(localStorage.getItem("users"))
      const userIndex = users.findIndex((u) => u.email === currentUser.email)
      if (userIndex !== -1) {
        users[userIndex] = currentUser
        localStorage.setItem("users", JSON.stringify(users))
      }

      localStorage.setItem("currentUser", JSON.stringify(currentUser))
      showUserAccount(currentUser)
      alert("Profil muvaffaqiyatli yangilandi!")
    })
})

// Add this to your existing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const sidebar = document.getElementById("sidebar")
  const sidebarOverlay = document.getElementById("sidebarOverlay")

  function openSidebar() {
    sidebar.classList.remove("-translate-x-full")
    sidebarOverlay.classList.remove("hidden")
    sidebarOverlay.classList.add("block")
    sidebar.style.zIndex = "50"
  }
  function closeSidebar() {
    sidebar.classList.add("-translate-x-full")
    sidebarOverlay.classList.add("hidden")
    sidebarOverlay.classList.remove("block")
    sidebar.style.zIndex = "10"
  }

  mobileMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation()
    openSidebar()
  })

  sidebarOverlay.addEventListener("click", function () {
    closeSidebar()
  })

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      sidebar.classList.remove("-translate-x-full")
      sidebarOverlay.classList.add("hidden")
    } else {
      closeSidebar()
    }
  })
})
