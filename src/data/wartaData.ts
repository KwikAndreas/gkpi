export interface RenunganData {
  id: string;
  title: string;
  scriptureRef: string;
  scriptureText: string;
  author: string;
  authorRole: string;
  content: string[];
  reflectionQuestion: string;
  publishedAt: string;
  dateFormatted: string;
}

export interface LiturgyItem {
  no: number;
  part: string;
  element: string;
  stance: string;
  detail: string;
}

export interface PenatalayanRole {
  role: string;
  ku1: string;
  ku2: string;
}

export interface WartaData {
  id: string;
  edition: string;
  date: string;
  theme: string;
  themeChinese: string;
  scripture: string;
  speakerKU1_2: string;
  speakerKU1_2Chinese: string;
  translatorKU2: string;
  translatorKU2Chinese: string;
  pdfUrl: string;
  summary: string;
  announcements: {
    title: string;
    items: string[];
  }[];
  liturgy: LiturgyItem[];
  nextWeek: {
    date: string;
    theme: string;
    scripture: string;
    penatalayan: PenatalayanRole[];
  };
  prayerMeetings: {
    day: string;
    time: string;
    type: "Onsite" | "Online";
    locationOrLink: string;
  }[];
  persembahan: {
    bank: string;
    accountNumber: string;
    accountName: string;
  };
}

export const latestRenungan: RenunganData = {
  id: "renungan-2026-09-06",
  title: "Berpacu Melawan Kuda: Jangan Menyerah dalam Panggilan Tuhan",
  scriptureRef: "Yeremia 12:5-6",
  scriptureText:
    "\"Jika engkau telah berlari dengan orang berjalan kaki, dan engkau telah dilelahkan, bagaimanakah engkau hendak berpacu melawan kuda? Dan jika di negeri yang damai engkau tidak merasa tenteram, apakah yang akan engkau perbuat di hutan belukar sungai Yordan? Sebab saudara-saudaramu dan kaum keluargamu, mereka sendiri juga berbuat khianat terhadap engkau; mereka juga bersama-sama di belakangmu. Janganlah percaya kepada mereka, sekalipun mereka berkata manis kepadamu!\"",
  author: "Ev. Abraham Tonapa, M. Th.",
  authorRole: "Evangelis GKPI Kartini",
  content: [
    "Pertanyaan di atas diajukan oleh Allah kepada nabi Yeremia yang ingin menyerah dalam pelayanannya akibat beratnya tantangan dan penolakan yang dihadapi pada saat itu. Namun Allah mengingatkan bahwa jika ia menyerah saat menghadapi tantangan awal, ia pasti tidak akan sanggup menghadapi tantangan yang jauh lebih besar lagi di masa depan, yaitu ketika dikhianati bahkan oleh kaum keluarganya sendiri.",
    "Dalam perjalanan hidup mengikut Kristus, kita pun sering kali terdorong untuk merasa lelah, kecewa, dan ingin menyerah karena beratnya beban hidup, gesekan pelayanan, atau persoalan keluarga. Namun firman Tuhan menantang kita: Allah tidak melatih iman kita hanya untuk berjalan santai di zona nyaman, melainkan memperlengkapi kita agar memiliki ketahanan rohani untuk berpacu melewati setiap musim ujian.",
  ],
  reflectionQuestion:
    "Karena itu, maukah Anda meminta pertolongan Yesus yang telah menanggung tantangan terbesar yaitu kematian di kayu salib, sehingga kita beroleh kekuatan ilahi untuk tetap setia dan berkemenangan di dalam Tuhan?",
  publishedAt: "2026-09-06",
  dateFormatted: "Minggu, 6 September 2026",
};

export const latestWarta: WartaData = {
  id: "warta-no-2744",
  edition: "No. 2744",
  date: "Minggu, 6 September 2026",
  theme: "Amanat Agung Dan Pemuridan",
  themeChinese: "大使命与门徒训练",
  scripture: "Matius 28:19, 20",
  speakerKU1_2: "Pdt. Em. Natan Hidayat",
  speakerKU1_2Chinese: "许新福牧师",
  translatorKU2: "Pdt. Tahir Andris",
  translatorKU2Chinese: "戴诗宗牧师",
  pdfUrl: "/warta/warta-jemaat-6-september-2026.pdf",
  summary:
    "Warta Jemaat edisi 6 September 2026 memuat pelayanan Firman Tuhan dan Sakramen Perjamuan Kudus oleh Pdt. Em. Natan Hidayat, susunan Liturgi Kebaktian Umum I & II, pengumuman Rapat Majelis Periode XXIX, jadwal penatalayan kebaktian minggu depan (13 September), serta persekutuan doa dan pelayanan kategorial.",
  announcements: [
    {
      title: "Ucapan Terima Kasih & Pelayanan Firman",
      items: [
        "Terima kasih kepada Pdt. Em. Natan Hidayat yang menyampaikan Firman Tuhan dalam KU 1 & KU 2.",
        "Terima kasih kepada Pdt. Tahir Andris yang telah menerjemahkan pemberitaan Firman Tuhan di KU 2 (Indonesia ke Mandarin).",
        "Terima kasih kepada Paduan Suara Gracia yang telah melayani dalam KU 1 & 2 serta segenap penatalayan ibadah. Tuhan Yesus memberkati.",
      ],
    },
    {
      title: "Sakramen Perjamuan Kudus",
      items: [
        "Pada hari ini dilaksanakan Sakramen Perjamuan Kudus yang dipimpin oleh Pdt. Em. Natan Hidayat dalam Kebaktian Umum 1 & 2.",
        "Pelayan Perjamuan Kudus KU 1: Pnt. Christine, Pnt. Yuliana Lukman, Pnt. Yos Kinesa Lie, Ev. Abraham Tonapa.",
        "Pelayan Perjamuan Kudus KU 2: GI. Aning Indarso, Pnt. Supardi, Dkn. Victor Sayaso, Pnt. Wenny Handoko.",
        "Minggu ini persembahan diadakan dua kali: Persembahan Rutin dan Persembahan Diakonia.",
      ],
    },
    {
      title: "Rapat Majelis Periode XXIX",
      items: [
        "Rapat Majelis periode XXIX akan diadakan pada hari Minggu, 13 September 2026 Pk. 13.00 WIB secara tatap muka / on-site.",
        "Mengundang seluruh Penatua dan Hamba Tuhan GKPI Jemaat Kartini serta GKPI Bajem Griya Permata untuk hadir tepat waktu.",
      ],
    },
    {
      title: "Fasilitas Ruang Bayi (Baby Room)",
      items: [
        "Bagi jemaat yang membawa bayi atau balita, tersedia fasilitas Ruang Khusus Bayi (Baby Room) di Lantai 2M gedung gereja.",
      ],
    },
  ],
  liturgy: [
    { no: 1, part: "Panggilan", element: "Saat Teduh", stance: "D/坐 (Duduk)", detail: "Doa pribadi jemaat" },
    { no: 2, part: "Panggilan", element: "Votum", stance: "B/立 (Berdiri)", detail: "Mazmur 124:8" },
    { no: 3, part: "Panggilan", element: "Nyanyian Pujian", stance: "B/立 (Berdiri)", detail: "KPPK 15 'Kupuji-Mu Tuhan'" },
    { no: 4, part: "Panggilan", element: "Pengakuan Iman Rasuli", stance: "B/立 (Berdiri)", detail: "Bersama seluruh jemaat" },
    { no: 5, part: "Pembaharuan Kerohanian", element: "Ayat Pengakuan Dosa", stance: "B/立 (Berdiri)", detail: "1 Yohanes 1:9" },
    { no: 6, part: "Pembaharuan Kerohanian", element: "Doa Pengakuan Dosa & Syafaat", stance: "B/立 (Berdiri)", detail: "Dipimpin oleh Liturgis" },
    { no: 7, part: "Pembaharuan Kerohanian", element: "Nyanyian Respon", stance: "D/坐 (Duduk)", detail: "Lagu: 'Jadi Seperti-Mu'" },
    { no: 8, part: "Pembaharuan Kerohanian", element: "Bacaan Bertanggapan", stance: "D/坐 (Duduk)", detail: "Sepuluh Hukum Allah" },
    { no: 9, part: "Pengucapan Syukur", element: "Ayat Persembahan", stance: "D/坐 (Duduk)", detail: "1 Tawarikh 16:29" },
    { no: 10, part: "Pengucapan Syukur", element: "Persembahan & Doa Syukur", stance: "D/坐 - B/立", detail: "Lagu: 'Kupersembahkan Hidupku'" },
    { no: 11, part: "Pengucapan Syukur", element: "Persembahan Pujian", stance: "D/坐 (Duduk)", detail: "Paduan Suara Gracia" },
    { no: 12, part: "Pemberitaan Firman", element: "Ayat Mas & Khotbah", stance: "D/坐 (Duduk)", detail: "Matius 28:19-20 ('Amanat Agung Dan Pemuridan')" },
    { no: 13, part: "Pengutusan", element: "Doxology & Doa Berkat", stance: "B/立 (Berdiri)", detail: "Doxology (KPK 425) & Berkat Tuhan" },
  ],
  nextWeek: {
    date: "Minggu, 13 September 2026",
    theme: "Menjadi Satu Dalam Bermisi",
    scripture: "Yohanes 17:21, Filipi 1:27",
    penatalayan: [
      { role: "Pengkhotbah", ku1: "GI. Daniel Indarso", ku2: "GI. Daniel Indarso" },
      { role: "Penerjemah", ku1: "-", ku2: "Sdr. Hendra Wijaya Arif" },
      { role: "Liturgis", ku1: "Sdri. Metta", ku2: "GI. Aning Indarso" },
      { role: "Singers", ku1: "Sdr. Indrawan Leonardi, Sdri. May Lie", ku2: "Pnt. Robby Tan, Sdri. Metta" },
      { role: "Pianis", ku1: "Sdr. Joseph Ongkowijoyo", ku2: "Pnt. Musa Yossudarso" },
      { role: "Kolektan & Penyambut", ku1: "Sdr. Ho Pit Siong, Sdr. Arwie, Dkn. Victor Sayaso", ku2: "Sdri. Yanti, Sdri. Herly, Sdri. Lie Chen" },
    ],
  },
  prayerMeetings: [
    {
      day: "Kamis",
      time: "19.00 - 20.00 WIB",
      type: "Onsite",
      locationOrLink: "Ruang Kebaktian Lt. 2, Gedung GKPI No. 10",
    },
    {
      day: "Sabtu",
      time: "07.00 - 07.30 WIB",
      type: "Online",
      locationOrLink: "Zoom ID: 832 2563 4113 (Passcode: onlinegkpi)",
    },
  ],
  persembahan: {
    bank: "BCA (Bank Central Asia)",
    accountNumber: "001 373 1150",
    accountName: "Yayasan GKPI Kartini",
  },
};
