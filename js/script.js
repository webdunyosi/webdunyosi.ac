// Initialize data
let users = []
let currentUser = null // Global variable for current user

// Faol o'quvchilar ma'lumotlari
const activeStudents = [
  {
    name: "Dustmurodov Akmal", // o'quvchi ismi
    avatar: "../images/students/DustmurodovAkmal.png", // o'quvchi rasmi
    attendance: 88, // yo'qlama foizi
    taskScore: 100, // vazifalar uchun ball
    projectScore: 100, // loyihalar uchun ball
    completedTasks: 9, // bajarilgan vazifalar soni
    startedAt: "01.05.2025", // kursni boshlagan sana
    courses: ["html", "css", "tailwind", "javascript"], // Tugallangan kurslar
  },
  {
    name: "Dustov Eldor", // o'quvchi ismi
    avatar: "../images/students/DustovEldor.jpg", // o'quvchi rasmi
    attendance: 100, // yo'qlama foizi
    taskScore: 11, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 1, // bajarilgan vazifalar soni
    startedAt: "08.09.2025", // kursni boshlagan sana
    courses: ["html", "css"], // Tugallangan kurslar
  },
  {
    name: "Abdalov Sanat", // o'quvchi ismi
    avatar: "../images/students/AbdalovSanat.png", // o'quvchi rasmi
    attendance: 100, // yo'qlama foizi
    taskScore: 50, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 6, // bajarilgan vazifalar soni
    startedAt: "08.09.2025", // kursni boshlagan sana
    courses: ["html", "css"], // Tugallangan kurslar
  },
  {
    name: "Mamarayimov Nemat", // o'quvchi ismi
    avatar: "../images/students/MamarayimovNemat.png", // o'quvchi rasmi
    attendance: 100, // yo'qlama foizi
    taskScore: 100, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 9, // bajarilgan vazifalar soni
    startedAt: "04.08.2025", // kursni boshlagan sana
    courses: ["html", "css"], // Tugallangan kurslar
  },
  {
    name: "Mavlonova Marjona", // o'quvchi ismi
    avatar: "../images/students/MavlonovaMarjona.png", // o'quvchi rasmi
    attendance: 63, // yo'qlama foizi
    taskScore: 22, // vazifalar uchun ball
    projectScore: 100, // loyihalar uchun ball
    completedTasks: 2, // bajarilgan vazifalar soni
    startedAt: "01.05.2025", // kursni boshlagan sana
    courses: ["html", "css", "tailwind", "javascript"], // Tugallangan kurslar
  },
  {
    name: "Axbutayev Muhammadali", // o'quvchi ismi
    avatar: "../images/students/AxbutayevMuhammadali.png", // o'quvchi rasmi
    attendance: 93, // yo'qlama foizi
    taskScore: 89, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 8, // bajarilgan vazifalar soni
    startedAt: "28.08.2025", // kursni boshlagan sana
    courses: ["html", "css"], // Tugallangan kurslar
  },
  {
    name: "Raxmonqulov Ozodbek", // o'quvchi ismi
    avatar: "../images/students/RaxmonqulovOzodbek.png", // o'quvchi rasmi
    attendance: 100, // yo'qlama foizi
    taskScore: 100, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 4, // bajarilgan vazifalar soni
    startedAt: "06.09.2025", // kursni boshlagan sana
    courses: ["html"], // Tugallangan kurslar
  },
  {
    name: "Aslonov Jahongir", // o'quvchi ismi
    avatar: "../images/students/AslonovJahongir.png", // o'quvchi rasmi
    attendance: 100, // yo'qlama foizi
    taskScore: 100, // vazifalar uchun ball
    projectScore: 50, // loyihalar uchun ball
    completedTasks: 11, // bajarilgan vazifalar soni
    startedAt: "11.08.2025", // kursni boshlagan sana
    courses: ["html", "css"], // Tugallangan kurslar
  },
  {
    name: "Sharipov Zafar", // o'quvchi ismi
    avatar: "../images/students/SharipovZafar.JPG", // o'quvchi rasmi
    attendance: 71, // yo'qlama foizi
    taskScore: 90, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 9, // bajarilgan vazifalar soni
    startedAt: "19.08.2025", // kursni boshlagan sana
    courses: ["html", "css"], // Tugallangan kurslar
  },
  {
    name: "Burxonov Behruz", // o'quvchi ismi
    avatar: "../images/students/BurxonovBehruz.png", // o'quvchi rasmi
    attendance: 100, // yo'qlama foizi
    taskScore: 83, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 8, // bajarilgan vazifalar soni
    startedAt: "19.08.2025", // kursni boshlagan sana
    courses: ["html", "css", "tailwind", "javascript"], // Tugallangan kurslar
  },
  {
    name: "Temirbekov Ahadjon", // o'quvchi ismi
    avatar: "../images/students/TemirbekovAhadjon.png", // o'quvchi rasmi
    attendance: 56, // yo'qlama foizi
    taskScore: 80, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 8, // bajarilgan vazifalar soni
    startedAt: "19.08.2025", // kursni boshlagan sana
    courses: ["html", "css"], // Tugallangan kurslar
  },
  {
    name: "Muzaffarov Jasur", // o'quvchi ismi
    avatar: "../images/students/MuzaffarovJasur.png", // o'quvchi rasmi
    attendance: 100, // yo'qlama foizi
    taskScore: 44, // vazifalar uchun ball
    projectScore: 100, // loyihalar uchun ball
    completedTasks: 4, // bajarilgan vazifalar soni
    startedAt: "01.06.2025", // kursni boshlagan sana
    courses: ["html", "css", "tailwind", "javascript"], // Tugallangan kurslar
  },
  {
    name: "Saydaliyev Salohiddin", // o'quvchi ismi
    avatar: "../images/students/SaydaliyevSalohiddin.png", // o'quvchi rasmi
    attendance: 97, // yo'qlama foizi
    taskScore: 100, // vazifalar uchun ball
    projectScore: 0, // loyihalar uchun ball
    completedTasks: 8, // bajarilgan vazifalar soni
    startedAt: "01.07.2025", // kursni boshlagan sana
    courses: ["html", "css", "tailwind", "javascript"], // Tugallangan kurslar
  },
  {
    name: "Mardiyev Yahyo", // o'quvchi ismi
    avatar: "../images/students/MardiyevYahyo.png", // o'quvchi rasmi
    attendance: 97, // yo'qlama foizi
    taskScore: 100, // vazifalar uchun ball
    projectScore: 100, // loyihalar uchun ball
    completedTasks: 10, // bajarilgan vazifalar soni
    startedAt: "01.06.2029", // kursni boshlagan sana
    courses: ["html", "css", "tailwind", "javascript"], // Tugallangan kurslar
  },
]

// Recalculate totalScore automatically from attendance, taskScore, projectScore
function computeStudentsTotalScores() {
  activeStudents.forEach((student) => {
    const attendance = Number(student.attendance) || 0
    const task = Number(student.taskScore) || 0
    const project = Number(student.projectScore) || 0
    const average = (attendance + task + project) / 3
    student.totalScore = Math.round(average * 10) / 10

    // Assign level automatically based on totalScore
    if (student.totalScore >= 80) {
      student.level = "excellent"
    } else if (student.totalScore >= 60) {
      student.level = "good"
    } else if (student.totalScore >= 40) {
      student.level = "average"
    } else {
      student.level = "low"
    }
  })

  // Calculate rankings based on totalScore
  const sortedStudents = [...activeStudents].sort(
    (a, b) => b.totalScore - a.totalScore
  )
  sortedStudents.forEach((student, index) => {
    student.rank = index + 1
  })
}

// Compute scores on initialization
computeStudentsTotalScores()

// Yangi Videolar (2025)
const newVideos = [
  // HTML NEW 2025
  {
    id: 1,
    title: "HTML NEW 2025",
    description: "Web sahifalar yaratishning asosiy tili - HTML ni o'rganing",
    image: "../images/html.jpg",
    videos: [
      {
        id: 1,
        title: "Yangi boshlovchilar uchun",
        videoFile: "https://youtu.be/E0gwAOier80",
      },
      {
        id: 2,
        title: "Faol o'quvchilar bo'limi haqida",
        videoFile: "https://youtu.be/-MlnCH-rZLs",
      },
      {
        id: 3,
        title: "1-dars. HTML asoslari - Kirish",
        videoFile: "https://youtu.be/stkPk65Sthk",
      },
      {
        id: 4,
        title: "2-dars. Img, div, komentariya",
        videoFile: "https://youtu.be/vhhwnIn7x-Y",
      },
      {
        id: 5,
        title: "3-dars. Anchor, Iframe",
        videoFile: "https://youtu.be/WxADzZG-AsI",
      },
      {
        id: 6,
        title: "4-dars. Form",
        videoFile: "https://youtu.be/NDbsi_pTnVw",
      },
    ],
  },
  // CSS NEW 2025
  {
    id: 2,
    title: "CSS NEW 2025",
    description:
      "Web sahifalarni chiroyli qilish uchun CSS stillarini o'rganing",
    image: "../images/css.jpg",
    videos: [
      {
        id: 1,
        title:
          "1-dars. Css kirish, Css ulash, Color, Selectorlar, Hover, Nth-child",
        videoFile: "https://youtu.be/Cwazxwe8EXc",
      },
      {
        id: 2,
        title: "2-dars. Text propertylari",
        videoFile: "https://youtu.be/xyhk6zIXB-M",
      },
      {
        id: 3,
        title: "3-dars. Background-color, Display",
        videoFile: "https://youtu.be/gU2pMuKKEuE",
      },
      {
        id: 4,
        title: "4-dars. Width, Height, Border",
        videoFile: "https://youtu.be/Cg1mVfRQIGE",
      },
      {
        id: 5,
        title: "5-dars.  Padding, Margin, Border-radius",
        videoFile: "https://youtu.be/Z50UCstYRfM",
      },
      {
        id: 6,
        title: "6-dars. Background-img, Gradient",
        videoFile: "https://youtu.be/zwbZ7n6teVA",
      },
      {
        id: 7,
        title: "7-dars. Flex box. 1-qism",
        videoFile: "https://youtu.be/gf08BsANT30",
      },
      {
        id: 8,
        title: "8-dars. Flex box. 2-qism",
        videoFile: "https://youtu.be/0frBcO7T_Qg",
      },
      {
        id: 9,
        title: "9-dars. Responsive, :root",
        videoFile: "https://youtu.be/q9vULhEkovI",
      },
      {
        id: 10,
        title: "10-dars. box-shadow, Object-fit, Boxicons",
        videoFile: "https://youtu.be/CTft-qAuiOI",
      },
      {
        id: 11,
        title: "11-dars. position, overflow",
        videoFile: "https://youtu.be/5B4Q1uBV904",
      },
      {
        id: 12,
        title: "12-dars.Backdrop-filterd, sticky, z-index",
        videoFile: "https://youtu.be/U6lDfArUsqQ",
      },
      {
        id: 13,
        title: "13-dars. 2D Transform",
        videoFile: "https://youtu.be/1f_xMsUsWdA",
      },
      {
        id: 14,
        title: "14-dars. Animation",
        videoFile: "https://youtu.be/TeYUlI1tUsc",
      },
      {
        id: 15,
        title: "15-dars. Grid",
        videoFile: "https://youtu.be/tzwhtnsCQN4",
      },
    ],
  },
  // TAILWINDCSS NEW 2025
  {
    id: 3,
    title: "TAILWINDCSS NEW 2025",
    description:
      "Tez va zamonaviy web dizayn uchun Tailwind CSS frameworkini o'rganing",
    image: "../images/tailwind.png",
    videos: [
      {
        id: 1,
        title: "1-dars. TailwindCss, Color, Hover",
        videoFile: "https://youtu.be/mrSys5opVyM",
      },
    ],
  },
]

// Eski Videolar
const oldVideos = [
  // KOMPYUTER SAVODXONLIGI
  {
    id: 3,
    title: "KOMPYUTER SAVODXONLIGI",
    description: "Kompyuter bilan ishlashning asosiy ko'nikmalarini o'rganing",
    image: "../images/savodxonlik.png",
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
  // HTML Asoslari
  {
    id: 4,
    title: "HTML Asoslari",
    description: "Web sahifalar yaratishning asosiy tili - HTML ni o'rganing",
    image: "../images/html.jpg",
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
  // CSS Dizayn
  {
    id: 5,
    title: "CSS Dizayn",
    description:
      "Web sahifalarni chiroyli qilish uchun CSS stillarini o'rganing",
    image: "../images/css.jpg",
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
      {
        id: 11,
        title: "16-dars. Flexbox haqida.",
        videoFile: "https://youtu.be/BStVx2twbIo?si=EhByps7i26PBNI-s",
      },
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
  // JavaScript Dasturlash
  {
    id: 6,
    title: "JavaScript Dasturlash",
    description:
      "Interaktiv web sahifalar yaratish uchun JavaScript ni o'rganing",
    image: "../images/js.png",
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
          "https://youtu.be/DGHZuDHn2rs?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
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
          "https://youtu.be/MCwtzQz7rE0?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
      },
      {
        id: 20,
        title: "17. Metod va xususiyatlar",
        videoFile:
          "https://youtu.be/hPb7KpEpUBa?list=PLjAKRQl2j0epVcnrkqmYsbGV254hGnuJu",
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
  // React Dasturlash
  {
    id: 7,
    title: "React Dasturlash",
    description:
      "Zamonaviy web ilovalar yaratish uchun React kutubxonasini o'rganing",
    image: "../images/react.webp",
    videos: [
      {
        id: 1,
        title: "Reactga kirish",
        videoFile: "https://youtu.be/bMknfKXIFA8",
      },
      {
        id: 2,
        title: "React komponentlar va JSX",
        videoFile: "https://youtu.be/Ke90Tje7VS0",
      },
      {
        id: 3,
        title: "Props va State tushunchasi",
        videoFile: "https://youtu.be/6ThXsUwLWvc",
      },
      {
        id: 4,
        title: "useState va useEffect hooklari",
        videoFile: "https://youtu.be/dpw9EHDh2bM",
      },
      {
        id: 5,
        title: "React Router bilan navigatsiya",
        videoFile: "https://youtu.be/Law7wfdg_ls",
      },
      {
        id: 6,
        title: "Formalar va controlled komponentlar",
        videoFile: "https://youtu.be/0ZJgIjIuY7U",
      },
      {
        id: 7,
        title: "API bilan ishlash (fetch, axios)",
        videoFile: "https://youtu.be/5W_q7RQE8xE",
      },
      {
        id: 8,
        title: "React Context va prop drilling",
        videoFile: "https://youtu.be/35lXWvCuM8o",
      },
      {
        id: 9,
        title: "Custom hookslar yaratish",
        videoFile: "https://youtu.be/6ThXsUwLWvc",
      },
      {
        id: 10,
        title: "React bilan loyihani yakunlash",
        videoFile: "https://youtu.be/Tn6-PIqc4UM",
      },
    ],
  },
]

// Vazifalar kurslari
const assignments = [
  // CSS VAZIFALAR
  {
    id: 1,
    title: "CSS VAZIFALAR",
    description: "CSS vazifalarini shu yerga joylab boraman.",
    image: "../images/css-vazifalar.png",
    videos: [
      {
        id: 1,
        title: "Vazifani qayerdan topish kerak?",
        videoFile: "https://youtu.be/PlZPhopUb0w",
      },
      {
        id: 2,
        title: "CSS 1-dars vazifalari",
        videoFile: "https://youtu.be/wsV-8gbd2KM",
      },
      {
        id: 3,
        title: "CSS 2-dars. Uyga vazifa - EaTurkish",
        videoFile: "https://youtu.be/qMXiR8wvclI",
      },
      {
        id: 4,
        title: "CSS 3-dars. Uyga vazifa. Restaurants",
        videoFile: "https://youtu.be/xlt6KwAOAFI",
      },
      {
        id: 5,
        title: "CSS 4-dars. Uyga vazifa",
        videoFile: "https://youtu.be/s7yhYyRI6IQ",
      },
      {
        id: 6,
        title: "CSS 5-dars. Uyga vazifa. Max Way",
        videoFile: "https://youtu.be/gFzZdlXfTUc",
      },
      {
        id: 7,
        title: "6-dars. Uyga vazifa. Amid",
        videoFile: "https://youtu.be/caLAMR0yDzg",
      },
    ],
  },
  // REACTJS VAZIFALAR
  {
    id: 2,
    title: "REACTJS VAZIFALAR",
    description: "ReactJS darslari uchun uyga vazifalar",
    image: "../images/rj.jpg",
    videos: [
      {
        id: 1,
        title: "4-dars. Props, Distruptizatsiya, map, React Developer Tools",
        videoFile: "https://youtu.be/croIMV8jAvY",
      },
    ],
  },
]

// Savollar kurslari
const questions = [
  // CSS SAVOLLAR
  {
    id: 1,
    title: "CSS SAVOLLAR",
    description: "CSS bo'yicha o'quvchilar bergan savollar va javoblar",
    image: "../images/question.webp",
    videos: [
      {
        id: 1,
        title: "Qanday qilib saytdan orqa fon rasmini olish mumkin?",
        videoFile: "https://youtu.be/Obp5LvqEzZM",
      },
      {
        id: 2,
        title: "Qanday qilib ikki xil rangni birlashtirish mumkin?",
        videoFile: "https://youtu.be/R99Zh4pEq80",
      },
    ],
  }
]

// Barcha video darslar (yangi + eski)
const videoLessons = [...newVideos, ...oldVideos]

// Barcha kurslar (video darslar + vazifalar + savollar)
const courses = [...videoLessons, ...assignments, ...questions]

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
      case "students":
        loadStudentsData()
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
  if (currentUser) {
    showUserAccount(currentUser)
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

  featuredCourses.innerHTML = ""

  courses.slice(0, 3).forEach((course, index) => {
    const courseCard = createCourseCard(course, "featured")
    courseCard.style.animationDelay = `${index * 0.2}s`
    courseCard.classList.add("animate-fade-in")
    featuredCourses.appendChild(courseCard)
  })

  addCourseClickListeners()
}

function loadAllCourses() {
  loadNewVideos()
  loadOldVideos()
  loadAssignments()
  loadQuestions()
}

function loadNewVideos() {
  const newVideosGrid = document.getElementById("newVideosGrid")

  newVideosGrid.innerHTML = ""

  newVideos.forEach((course, index) => {
    const courseCard = createCourseCard(course, "new")
    courseCard.style.animationDelay = `${index * 0.15}s`
    courseCard.classList.add("animate-slide-up")
    const linkEl = courseCard.querySelector("a.course-link")
    if (linkEl) linkEl.setAttribute("data-group", "new")
    newVideosGrid.appendChild(courseCard)
  })

  addCourseClickListeners()
}

function loadOldVideos() {
  const oldVideosGrid = document.getElementById("oldVideosGrid")

  oldVideosGrid.innerHTML = ""

  oldVideos.forEach((course, index) => {
    const courseCard = createCourseCard(course, "old")
    courseCard.style.animationDelay = `${index * 0.15}s`
    courseCard.classList.add("animate-slide-up")
    const linkEl = courseCard.querySelector("a.course-link")
    if (linkEl) linkEl.setAttribute("data-group", "old")
    oldVideosGrid.appendChild(courseCard)
  })

  addCourseClickListeners()
}

function loadAssignments() {
  const assignmentsGrid = document.getElementById("assignmentsGrid")

  assignmentsGrid.innerHTML = ""

  assignments.forEach((course, index) => {
    const courseCard = createCourseCard(course, "assignments")
    courseCard.style.animationDelay = `${index * 0.15}s`
    courseCard.classList.add("animate-slide-up")
    const linkEl = courseCard.querySelector("a.course-link")
    if (linkEl) linkEl.setAttribute("data-group", "assignments")
    assignmentsGrid.appendChild(courseCard)
  })

  addCourseClickListeners()
}

function loadQuestions() {
  const questionsGrid = document.getElementById("questionsGrid")

  questionsGrid.innerHTML = ""

  questions.forEach((course, index) => {
    const courseCard = createCourseCard(course, "questions")
    courseCard.style.animationDelay = `${index * 0.15}s`
    courseCard.classList.add("animate-slide-up")
    const linkEl = courseCard.querySelector("a.course-link")
    if (linkEl) linkEl.setAttribute("data-group", "questions")
    questionsGrid.appendChild(courseCard)
  })

  addCourseClickListeners()
}

function createCourseCard(course, category = "featured") {
  const courseCard = document.createElement("div")
  courseCard.className =
    "course-card glass rounded-3xl overflow-hidden transition-all border border-gray-700"

  // Category badge content based on category
  const getCategoryBadge = (category) => {
    switch (category) {
      case "new":
        return '<i class="fas fa-star mr-1"></i>Yangi'
      case "old":
        return '<i class="fas fa-clock mr-1"></i>Eski'
      case "assignments":
        return '<i class="fas fa-tasks mr-1"></i>Vazifa'
      case "questions":
        return '<i class="fas fa-question-circle mr-1"></i>Savol'
      default:
        return '<i class="fas fa-star mr-1"></i>Popular'
    }
  }

  courseCard.innerHTML = `
    <div class="course-image-container h-48 bg-gradient-to-br from-dark-lighter to-dark flex justify-center items-center border-b border-gray-700 relative">
        <img src="${course.image}" alt="${
    course.title
  }" class="object-contain floating-element">
        <div class="absolute top-3 right-3 category-badge px-2 py-1 rounded-full text-xs">
            ${getCategoryBadge(category)}
        </div>
    </div>
    <div class="p-5">
        <h3 class="text-xl font-bold mb-3 text-primary">${course.title}</h3>
        <p class="text-gray-300 mb-4 h-16 overflow-hidden leading-relaxed text-sm">${
          course.description
        }</p>
        <div class="flex justify-between items-center">
            <div class="flex items-center text-gray-400">
                <i class="fas fa-video mr-2 text-primary"></i>
                <span class="font-semibold text-sm">${
                  course.videos.length
                } video</span>
            </div>
            <a href="#courseDetails" data-id="${
              course.id
            }" class="course-link btn-primary px-4 py-2 rounded-lg inline-flex items-center font-bold transition-all group text-sm">
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
      const courseGroup = this.getAttribute("data-group") || null
      currentCourseId = courseId // Store current course ID in global variable
      window.currentCourseGroup = courseGroup
      navigateTo("courseDetails")
    })
  })
}

let currentCourseId = null // Global variable to store current course ID

function loadCourseDetails() {
  const courseContent = document.getElementById("courseContent")
  const courseId = parseInt(currentCourseId)
  const group = window.currentCourseGroup || null
  let sourceList = courses
  if (group === "new") sourceList = newVideos
  else if (group === "old") sourceList = oldVideos
  else if (group === "assignments") sourceList = assignments
  else if (group === "questions") sourceList = questions

  const course = sourceList.find((c) => c.id === courseId)

  if (!course) {
    courseContent.innerHTML =
      '<div class="text-red-500 text-center py-10 text-xl">Kurs topilmadi!</div>'
    return
  }

  // Enhanced course header
  courseContent.innerHTML = `
    <div class="flex flex-col lg:flex-row items-center mb-6 glass rounded-2xl p-6 border border-gray-700 animate-fade-in">
      <div class="w-24 h-24 mb-4 lg:mb-0 lg:mr-6 bg-gradient-to-br from-dark-lighter to-dark rounded-2xl flex justify-center items-center border border-gray-700 floating-element">
        <img src="${course.image}" alt="${course.title}" class="w-20 h-20 object-contain rounded-xl">
      </div>
      <div class="text-center lg:text-left">
        <h1 class="text-3xl font-black mb-4 text-primary neon-text">
          ${course.title}
        </h1>
        <p class="text-gray-300 text-lg mb-4 leading-relaxed">${course.description}</p>
        <div class="flex flex-wrap justify-center lg:justify-start gap-4">
          <div class="flex items-center text-gray-400">
            <i class="fas fa-video mr-2 text-primary"></i>
            <span class="font-semibold">${course.videos.length} video</span>
          </div>
          <div class="flex items-center text-gray-400">
            <i class="fas fa-clock mr-2 text-primary"></i>
            <span class="font-semibold">Bepul</span>
          </div>
          <div class="flex items-center text-gray-400">
            <i class="fas fa-certificate mr-2 text-primary"></i>
            <span class="font-semibold">Sertifikat</span>
          </div>
        </div>
      </div>
    </div>
  `

  // Foydalanuvchi tekshiruvisiz har doim video va ro'yxat chiqadi
  const courseContainer = document.createElement("div")
  courseContainer.className = "flex flex-col xl:flex-row gap-6 animate-slide-up"

  // Video player section - optimized for more space
  const videoPlayerSection = document.createElement("div")
  videoPlayerSection.className = "w-full xl:w-3/4"
  videoPlayerSection.innerHTML = `
    <div class="glass rounded-2xl overflow-hidden border border-gray-700">
      <div class="video-player">
        <div id="courseVideoPlayer" class="flex items-center justify-center bg-gradient-to-br from-dark-lighter to-dark">
          <div class="text-center">
            <i class="fas fa-play-circle text-primary text-6xl mb-4 floating-element"></i>
            <p class="text-gray-400 text-lg">Video tanlang</p>
          </div>
        </div>
      </div>
      <div class="p-6">
        <h2 id="currentVideoTitle" class="text-2xl font-bold mb-3 neon-text">${
          course.videos[0]?.title || "Video tanlang"
        }</h2>
        <div class="flex justify-between items-center">
          <a href="https://docs.google.com/spreadsheets/d/159vyoIidvK4XFzySgxTkneMgOG_IYRWGF0cI5fgYQM0/edit?gid=0#gid=0" target="_blank" class="text-gray-400">${
            course.title
          }</a>
          <div class="flex space-x-4">
            <button class="text-gray-400 hover:text-primary transition-all hover:scale-110">
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button class="text-gray-400 hover:text-primary transition-all hover:scale-110">
              <i class="fas fa-share"></i>
            </button>
            <button class="text-gray-400 hover:text-primary transition-all hover:scale-110">
              <i class="fas fa-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `

  // Video list section - compact sidebar
  const videoListSection = document.createElement("div")
  videoListSection.className = "w-full xl:w-1/4"
  videoListSection.innerHTML = `
    <div class="glass rounded-2xl h-full border border-gray-700">
      <div class="p-4 border-b border-gray-700">
        <h3 class="text-lg font-bold flex items-center neon-text">
          <i class="fas fa-list-play mr-2 text-primary"></i>
          Darsliklar
        </h3>
      </div>
      <div class="video-list-container overflow-y-auto" style="max-height: 600px;">
        <ul id="courseVideoList" class="divide-y divide-gray-700">
          ${course.videos
            .map(
              (video, index) => `
              <li class="video-list-item p-4 cursor-pointer transition-all ${
                index === 0 ? "active" : ""
              }" data-video="${video.videoFile}" data-title="${video.title}">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 floating-element">
                    <i class="fas fa-play text-primary"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-bold mb-1 text-sm leading-tight">${
                      video.title
                    }</h4>
                    <div class="flex items-center mt-1">
                      <span class="text-xs text-gray-500">${
                        index + 1
                      } • 5 min</span>
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

  // Video list click listeners
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

// Enhanced students functions
function loadStudentsData() {
  loadStudentsStatistics()
  loadStudentsList()
  addStudentTabListeners()
}

function loadStudentsStatistics() {
  const totalStudents = activeStudents.length
  const averageScore =
    activeStudents.reduce((sum, student) => sum + student.totalScore, 0) /
    totalStudents
  const averageAttendance =
    activeStudents.reduce((sum, student) => sum + student.attendance, 0) /
    totalStudents

  document.getElementById("totalActiveStudents").textContent = totalStudents
  document.getElementById("averageScore").textContent = Math.round(averageScore)
  document.getElementById("averageAttendance").textContent =
    Math.round(averageAttendance) + "%"
}

function loadStudentsList(filter = "all") {
  const studentsList = document.getElementById("studentsList")
  studentsList.innerHTML = ""

  let filteredStudents = activeStudents

  if (filter !== "all") {
    filteredStudents = activeStudents.filter(
      (student) => student.level === filter
    )
  }

  // Sort by total score descending
  filteredStudents.sort((a, b) => b.totalScore - a.totalScore)

  filteredStudents.forEach((student, index) => {
    const studentCard = createStudentCard(student, index)
    studentsList.appendChild(studentCard)
  })
}

// Helper: map course names to icon
function getCourseIcon(courseName) {
  const name = String(courseName || "").toLowerCase()
  if (name.includes("html")) {
    return { src: "../images/icons/html.webp", alt: "HTML" }
  }
  if (name.includes("css")) {
    return { src: "../images/icons/css.webp", alt: "CSS" }
  }
  if (name.includes("tailwind")) {
    return { src: "../images/icons/tw.png", alt: "Tailwind CSS" }
  }
  if (name.includes("javascript")) {
    return { src: "../images/icons/js.png", alt: "JavaScript" }
  }
  if (name.includes("react")) {
    return { src: "../images/icons/rj.png", alt: "React" }
  }
  return null
}

function createStudentCard(student, index) {
  const studentCard = document.createElement("div")
  studentCard.className = "student-card glass animate-fade-in"
  studentCard.style.animationDelay = `${index * 0.1}s`
  studentCard.setAttribute("data-rank", student.rank)

  const levelText = {
    excellent: "A'lo",
    good: "Yaxshi",
    average: "Qoniqarli",
    low: "Past",
  }

  const levelColor = {
    excellent: "excellent",
    good: "good",
    average: "average",
    low: "low",
  }

  // Medal icons for top 3 positions
  const getMedalIcon = (rank) => {
    if (rank === 1)
      return '<i class="fas fa-medal text-yellow-400 text-lg"></i>'
    if (rank === 2) return '<i class="fas fa-medal text-gray-300 text-lg"></i>'
    if (rank === 3)
      return '<i class="fas fa-medal text-orange-400 text-lg"></i>'
    return ""
  }

  // Rank display
  const getRankDisplay = (rank) => {
    if (rank <= 3) {
      return `
        <div class="rank-medal-container">
          ${getMedalIcon(rank)}
          <span class="rank-number">${rank}</span>
        </div>
      `
    }
    return `<div class="rank-number-only">${rank}</div>`
  }

  studentCard.innerHTML = `
    <div class="student-header">
      <div class="student-level-badge ${levelColor[student.level]}">
        ${levelText[student.level]}
      </div>
      <div class="student-rank">
        ${getRankDisplay(student.rank)}
      </div>
    </div>
    
    <div class="flex items-center mb-6 student-info-section">
      <img src="${student.avatar}" alt="${
    student.name
  }" class="student-avatar mr-4">
      <div class="flex-1 student-name-container">
        <h3 class="text-xl font-bold text-primary mb-1">${student.name}</h3>
        <div class="last-active">
          <i class="fas fa-calendar-alt"></i>
          <span>${
            student.startedAt || "Boshlanish sanasi ko'rsatilmagan"
          }</span>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-semibold text-gray-300">Umumiy natija</span>
        <span class="text-lg font-bold text-primary">${
          student.totalScore
        }%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${
          student.totalScore
        }%; background: linear-gradient(90deg, #00ff88, #00cc6a);"></div>
      </div>
    </div>

    <div class="student-stats">
      <div class="stat-item">
        <div class="stat-value">${student.attendance}%</div>
        <div class="stat-label">Yo'qlama natijasi</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${student.taskScore}%</div>
        <div class="stat-label">Vazifalar</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${student.projectScore}%</div>
        <div class="stat-label">Loyihalar</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${student.completedTasks}</div>
        <div class="stat-label">Bajarilgan vazifalar</div>
      </div>
    </div>

    

    <div>
      <h4 class="text-sm font-semibold text-gray-300 mb-2">Tugallangan Kurslar</h4>
      <div class="course-tags flex items-center flex-wrap gap-3">
        ${student.courses
          .map((course) => {
            const icon = getCourseIcon(course)
            return icon
              ? `<img src="${icon.src}" alt="${icon.alt}" title="${icon.alt}" class="w-8 h-8 object-contain">`
              : `<span class="course-tag">${course}</span>`
          })
          .join("")}
      </div>
    </div>
  `

  return studentCard
}

function addStudentTabListeners() {
  document.querySelectorAll(".student-tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")

      document.querySelectorAll(".student-tab").forEach((t) => {
        t.classList.remove("active")
      })

      this.classList.add("active")

      loadStudentsList(tabName)
    })
  })
}

// Enhanced profile functions
function loadProfileData() {
  if (!currentUser) {
    navigateTo("home")
    return
  }

  document.getElementById("profileUserName").textContent =
    currentUser.name || currentUser.email
  document.getElementById("profileUserRole").textContent = currentUser.isAdmin
    ? "Administrator"
    : "Foydalanuvchi"
  document.getElementById("profileName").value = currentUser.name || ""
  document.getElementById("profileEmail").value = currentUser.email
  document.getElementById("profileBio").value = currentUser.bio || ""
}

// Enhanced admin functions
function loadAdminData() {
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
    const index = courses.findIndex((c) => c.id === courseId)
    if (index !== -1) {
      courses.splice(index, 1)
      loadAdminData()
    }
  }
}

function deleteVideo(courseId, videoId) {
  if (confirm("Videoni o'chirishga ishonchingiz komilmi?")) {
    const course = courses.find((c) => c.id === courseId)
    if (course) {
      const videoIndex = course.videos.findIndex((v) => v.id === videoId)
      if (videoIndex !== -1) {
        course.videos.splice(videoIndex, 1)
        loadAdminData()
      }
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
    if (loginModal) {
      loginModal.style.display = "block"
    }
  })

  // Enhanced user dropdown
  if (userAccountBtn) {
    userAccountBtn.addEventListener("click", function () {
      if (userDropdown) {
        userDropdown.classList.toggle("active")
      }
    })
  }

  // Close dropdowns
  document.addEventListener("click", function (e) {
    if (userAccountBtn && userDropdown) {
      if (
        !userAccountBtn.contains(e.target) &&
        !userDropdown.contains(e.target)
      ) {
        userDropdown.classList.remove("active")
      }
    }
  })

  // Enhanced logout
  document.getElementById("logoutBtn").addEventListener("click", function () {
    currentUser = null
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

  // Course tab switching
  document.querySelectorAll(".course-tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")

      document.querySelectorAll(".course-tab").forEach((t) => {
        t.classList.remove("active")
      })

      this.classList.add("active")

      document.querySelectorAll(".course-content").forEach((content) => {
        content.classList.add("hidden")
      })

      document.getElementById(tabName).classList.remove("hidden")
    })
  })

  // Enhanced forms
  const loginFormEl = document.getElementById("loginFormElement")
  if (loginFormEl) {
    loginFormEl.addEventListener("submit", function (e) {
      e.preventDefault()

      const email = document.getElementById("loginEmail").value
      const password = document.getElementById("loginPassword").value

      const user = users.find(
        (u) => u.email === email && u.password === password
      )

      if (user) {
        currentUser = user
        showUserAccount(user)
        if (loginModal) loginModal.style.display = "none"
        this.reset()
      } else {
        alert("Email yoki parol noto'g'ri!")
      }
    })
  }

  const registerFormEl = document.getElementById("registerFormElement")
  if (registerFormEl) {
    registerFormEl.addEventListener("submit", function (e) {
      e.preventDefault()

      const email = document.getElementById("registerEmail").value
      const password = document.getElementById("registerPassword").value
      const confirmPassword = document.getElementById("confirmPassword").value

      if (password !== confirmPassword) {
        alert("Parollar mos kelmaydi!")
        return
      }

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
      currentUser = newUser
      showUserAccount(newUser)
      if (loginModal) loginModal.style.display = "none"
      this.reset()
    })
  }

  document
    .getElementById("addCourseForm")
    .addEventListener("submit", function (e) {
      e.preventDefault()

      const title = document.getElementById("courseTitle").value
      const image = document.getElementById("courseImage").value
      const description = document.getElementById("courseDescription").value

      const newCourse = {
        id: Date.now(),
        title: title,
        image: image,
        description: description,
        videos: [],
      }

      courses.push(newCourse)
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

      const course = courses.find((c) => c.id === courseId)
      if (course) {
        const newVideo = {
          id: Date.now(),
          title: title,
          videoFile: videoUrl,
        }

        course.videos.push(newVideo)
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

      const course = courses.find((c) => c.id === courseId)
      if (course) {
        course.title = title
        course.image = image
        course.description = description

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

      const course = courses.find((c) => c.id === courseId)
      if (course) {
        const video = course.videos.find((v) => v.id === videoId)
        if (video) {
          video.title = title
          if (videoUrl) {
            video.videoFile = videoUrl
          }

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

      if (currentUser) {
        currentUser.name = name
        currentUser.bio = bio

        const userIndex = users.findIndex((u) => u.email === currentUser.email)
        if (userIndex !== -1) {
          users[userIndex] = currentUser
        }

        showUserAccount(currentUser)
        alert("Profil muvaffaqiyatli yangilandi!")
      }
    })

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
    if (window.innerWidth >= 1280) {
      sidebar.classList.remove("-translate-x-full")
      sidebarOverlay.classList.add("hidden")
    } else {
      closeSidebar()
    }
  })
})
