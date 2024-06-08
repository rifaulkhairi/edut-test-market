<?php

namespace App\Models;

class DataSoal
{

    public static function find($id)
    {
        $paketSoal = [
            [
                'id' => 1,
                'soal' => [
                    [
                        "question" => "Siapakah nabi terakhir dalam agama Islam?",
                        "choices" => ["Nabi Musa", "Nabi Isa", "Nabi Muhammad", "Nabi Ibrahim"]
                    ],
                    [
                        "question" => "Apa nama kitab suci umat Islam?",
                        "choices" => ["Injil", "Taurat", "Zabur", "Al-Qur'an"]
                    ],
                    [
                        "question" => "Berapa kali umat Islam diwajibkan sholat dalam sehari?",
                        "choices" => ["3 kali", "4 kali", "5 kali", "6 kali"]
                    ],
                    [
                        "question" => "Puasa di bulan Ramadhan merupakan salah satu dari...",
                        "choices" => ["Rukun Islam", "Rukun Iman", "Rukun Negara", "Rukun Warga"]
                    ],
                    [
                        "question" => "Kota manakah yang dianggap paling suci dalam Islam?",
                        "choices" => ["Yerusalem", "Madinah", "Kairo", "Mekkah"]
                    ],
                    [
                        "question" => "Siapakah malaikat yang bertugas menyampaikan wahyu kepada para nabi?",
                        "choices" => ["Malaikat Jibril", "Malaikat Mikail", "Malaikat Israfil", "Malaikat Munkar"]
                    ],
                    [
                        "question" => "Berapa jumlah juz dalam Al-Qur'an?",
                        "choices" => ["30 juz", "40 juz", "50 juz", "60 juz"]
                    ],
                    [
                        "question" => "Apa arti dari kata 'Islam'?",
                        "choices" => ["Keimanan", "Kesucian", "Kedamaian", "Ketakwaan"]
                    ],
                    [
                        "question" => "Haji merupakan rukun Islam yang ke...",
                        "choices" => ["Satu", "Dua", "Tiga", "Lima"]
                    ],
                    [
                        "question" => "Siapakah yang disebut sebagai 'Khalifah pertama' dalam sejarah Islam?",
                        "choices" => ["Umar bin Khattab", "Abu Bakar Ash-Shiddiq", "Usman bin Affan", "Ali bin Abi Thalib"]
                    ]
                ]

            ],
            [
                'id' => 2,
                'soal' => [
                    [
                        "question" => "Siapakah proklamator kemerdekaan Indonesia?",
                        "choices" => ["Soekarno dan Hatta", "Soekarno dan Sjahrir", "Hatta dan Sjahrir", "Sukarno dan Kartosuwiryo"]
                    ],
                    [
                        "question" => "Pada tanggal berapa Indonesia memproklamasikan kemerdekaannya?",
                        "choices" => ["17 Agustus 1945", "20 Mei 1908", "28 Oktober 1928", "1 Juni 1945"]
                    ],
                    [
                        "question" => "Di manakah teks proklamasi kemerdekaan Indonesia dibacakan?",
                        "choices" => ["Istana Merdeka", "Rumah Soekarno", "Lapangan Banteng", "Jalan Pegangsaan Timur No. 56"]
                    ],
                    [
                        "question" => "Apa nama organisasi pergerakan nasional yang didirikan pada tahun 1908?",
                        "choices" => ["Sarekat Islam", "Indische Partij", "Budi Utomo", "Partai Nasional Indonesia"]
                    ],
                    [
                        "question" => "Siapakah yang menulis teks Sumpah Pemuda pada tahun 1928?",
                        "choices" => ["Mohammad Yamin", "Soekarno", "Hatta", "Sutan Sjahrir"]
                    ],
                    [
                        "question" => "Kapan Pancasila pertama kali diperkenalkan sebagai dasar negara?",
                        "choices" => ["17 Agustus 1945", "1 Juni 1945", "18 Agustus 1945", "20 Mei 1945"]
                    ],
                    [
                        "question" => "Siapa pemimpin PETA yang terkenal dengan pemberontakannya di Blitar tahun 1945?",
                        "choices" => ["Sudirman", "Suharto", "Sukarno", "Soepriyadi"]
                    ],
                    [
                        "question" => "Perjanjian Linggarjati ditandatangani pada tahun...",
                        "choices" => ["1946", "1947", "1948", "1949"]
                    ],
                    [
                        "question" => "Siapakah presiden Indonesia yang kedua?",
                        "choices" => ["BJ Habibie", "Sukarno", "Suharto", "Megawati"]
                    ],
                    [
                        "question" => "Kapan Indonesia menjadi anggota Perserikatan Bangsa-Bangsa (PBB)?",
                        "choices" => ["1950", "1955", "1960", "1965"]
                    ],
                    [
                        "question" => "Dimana pertempuran besar antara pemuda Indonesia dan tentara Sekutu terjadi pada November 1945?",
                        "choices" => ["Bandung", "Surabaya", "Jakarta", "Yogyakarta"]
                    ],
                    [
                        "question" => "Apa nama operasi militer untuk mengatasi pemberontakan di Aceh pada tahun 2003?",
                        "choices" => ["Operasi Seroja", "Operasi Trisula", "Operasi Rencong", "Operasi Wibawa"]
                    ],
                    [
                        "question" => "Siapakah penulis buku 'Indonesia Menggugat'?",
                        "choices" => ["Mohammad Hatta", "Sutan Sjahrir", "Tan Malaka", "Soekarno"]
                    ],
                    [
                        "question" => "Apa nama perjanjian yang mengakhiri Konfrontasi Indonesia-Malaysia?",
                        "choices" => ["Perjanjian Bangkok", "Perjanjian Manila", "Perjanjian London", "Perjanjian Jakarta"]
                    ],
                    [
                        "question" => "Kapan reformasi Indonesia yang mengakhiri pemerintahan Orde Baru terjadi?",
                        "choices" => ["1996", "1997", "1998", "1999"]
                    ],
                    [
                        "question" => "Siapakah pemimpin G30S/PKI?",
                        "choices" => ["Aidit", "Sukarno", "Suharto", "Yani"]
                    ],
                    [
                        "question" => "Apa nama kabinet pertama setelah kemerdekaan Indonesia?",
                        "choices" => ["Kabinet Sjahrir", "Kabinet Hatta", "Kabinet Amir", "Kabinet Natsir"]
                    ],
                    [
                        "question" => "Dimana konferensi Asia-Afrika pertama diadakan pada tahun 1955?",
                        "choices" => ["Jakarta", "Bandung", "Bogor", "Denpasar"]
                    ],
                    [
                        "question" => "Siapa yang dikenal sebagai Bapak Koperasi Indonesia?",
                        "choices" => ["Soekarno", "Hatta", "Sjahrir", "Tan Malaka"]
                    ],
                    [
                        "question" => "Apa nama kerajaan Hindu terbesar di Indonesia?",
                        "choices" => ["Majapahit", "Sriwijaya", "Mataram", "Kutai"]
                    ]
                ]

            ],
            [
                'id' => 3,
                'soal' => [
                    [
                        "question" => "Berapakah hasil dari 7 + 5?",
                        "choices" => ["10", "11", "12", "13"]
                    ],
                    [
                        "question" => "Berapakah hasil dari 9 x 6?",
                        "choices" => ["42", "52", "54", "56"]
                    ],
                    [
                        "question" => "Berapakah hasil dari 25 ÷ 5?",
                        "choices" => ["4", "5", "6", "7"]
                    ],
                    [
                        "question" => "Jika sebuah segitiga memiliki panjang alas 10 cm dan tinggi 5 cm, berapakah luasnya?",
                        "choices" => ["20 cm²", "25 cm²", "30 cm²", "35 cm²"]
                    ],
                    [
                        "question" => "Berapakah hasil dari 2^3?",
                        "choices" => ["6", "7", "8", "9"]
                    ],
                    [
                        "question" => "Jika x = 5, berapakah hasil dari 3x + 2?",
                        "choices" => ["15", "16", "17", "18"]
                    ],
                    [
                        "question" => "Berapakah hasil dari akar kuadrat dari 81?",
                        "choices" => ["7", "8", "9", "10"]
                    ],
                    [
                        "question" => "Jika sebuah lingkaran memiliki jari-jari 7 cm, berapakah kelilingnya? (gunakan π = 22/7)",
                        "choices" => ["22 cm", "44 cm", "66 cm", "88 cm"]
                    ],
                    [
                        "question" => "Berapakah nilai dari sin 30°?",
                        "choices" => ["0.5", "0.6", "0.7", "0.8"]
                    ],
                    [
                        "question" => "Jika y = 2 dan z = 3, berapakah hasil dari yz + y + z?",
                        "choices" => ["10", "11", "12", "13"]
                    ],
                    [
                        "question" => "Berapakah hasil dari 15% dari 200?",
                        "choices" => ["25", "30", "35", "40"]
                    ],
                    [
                        "question" => "Jika 2a + 3 = 11, berapakah nilai dari a?",
                        "choices" => ["3", "4", "5", "6"]
                    ],
                    [
                        "question" => "Berapakah hasil dari 7! (7 faktorial)?",
                        "choices" => ["5040", "40320", "362880", "720"]
                    ],
                    [
                        "question" => "Jika sebuah persegi memiliki panjang sisi 4 cm, berapakah kelilingnya?",
                        "choices" => ["12 cm", "16 cm", "20 cm", "24 cm"]
                    ],
                    [
                        "question" => "Berapakah hasil dari 3/4 + 2/4?",
                        "choices" => ["1", "1 1/4", "1 1/2", "2"]
                    ]
                ]

            ],
            [
                'id' => 4,
                'soal' => [
                    [
                        "question" => "Apa tujuan utama dari pemanasan sebelum melakukan aktivitas fisik?",
                        "choices" => ["Meningkatkan fleksibilitas", "Meningkatkan kecepatan", "Mengurangi risiko cedera", "Meningkatkan kekuatan"]
                    ],
                    [
                        "question" => "Berapakah jumlah pemain dalam satu tim sepak bola?",
                        "choices" => ["9 pemain", "10 pemain", "11 pemain", "12 pemain"]
                    ],
                    [
                        "question" => "Olahraga lari jarak jauh termasuk dalam kategori...",
                        "choices" => ["Aerobik", "Anaerobik", "Isometrik", "Isotonik"]
                    ],
                    [
                        "question" => "Di manakah letak otot biceps?",
                        "choices" => ["Lengan atas", "Lengan bawah", "Paha", "Betis"]
                    ],
                    [
                        "question" => "Dalam permainan bulu tangkis, pukulan yang digunakan untuk memulai permainan disebut...",
                        "choices" => ["Smash", "Drop shot", "Lob", "Servis"]
                    ],
                    [
                        "question" => "Apa nama latihan yang melibatkan rentetan gerakan cepat dan tiba-tiba untuk meningkatkan kekuatan otot?",
                        "choices" => ["Plyometrics", "Isometrics", "Pilates", "Yoga"]
                    ],
                    [
                        "question" => "Berapakah panjang lapangan bola voli standar internasional?",
                        "choices" => ["16 meter", "18 meter", "20 meter", "22 meter"]
                    ],
                    [
                        "question" => "Salah satu teknik dasar dalam berenang gaya bebas adalah...",
                        "choices" => ["Tangan lurus", "Tangan mengepal", "Kaki lurus", "Kaki menekuk"]
                    ],
                    [
                        "question" => "Olahraga mana yang biasanya dimainkan di lapangan berukuran 23,77 meter x 10,97 meter untuk ganda?",
                        "choices" => ["Bulu tangkis", "Tenis", "Voli", "Basket"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan VO2 max?",
                        "choices" => ["Jumlah maksimum oksigen yang dapat digunakan selama latihan intens", "Jumlah maksimum karbon dioksida yang dihasilkan selama latihan intens", "Kecepatan lari maksimal", "Jumlah kalori yang terbakar selama latihan"]
                    ]
                ]

            ],
            [
                'id' => 5,
                'soal' => [
                    [
                        "question" => "Apa fungsi utama dari klorofil dalam tumbuhan?",
                        "choices" => ["Fotosintesis", "Respirasi", "Transpirasi", "Reproduksi"]
                    ],
                    [
                        "question" => "Di manakah letak DNA dalam sel eukariotik?",
                        "choices" => ["Sitoplasma", "Nukleus", "Ribosom", "Mitokondria"]
                    ],
                    [
                        "question" => "Apa nama proses pembelahan sel yang menghasilkan dua sel anak identik?",
                        "choices" => ["Meiosis", "Mitosis", "Fusi", "Fragmentasi"]
                    ],
                    [
                        "question" => "Apa jenis biomolekul yang berfungsi sebagai sumber energi utama bagi sel?",
                        "choices" => ["Protein", "Karbohidrat", "Lipid", "Asam Nukleat"]
                    ],
                    [
                        "question" => "Apa nama jaringan yang mengangkut air dan mineral dari akar ke seluruh bagian tumbuhan?",
                        "choices" => ["Floem", "Xilem", "Kambium", "Epidermis"]
                    ],
                    [
                        "question" => "Apa nama organ pada manusia yang berfungsi menyaring darah dan menghasilkan urine?",
                        "choices" => ["Hati", "Ginjal", "Jantung", "Paru-paru"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan simbiosis mutualisme?",
                        "choices" => ["Hubungan di mana satu organisme diuntungkan dan yang lain dirugikan", "Hubungan di mana kedua organisme diuntungkan", "Hubungan di mana satu organisme diuntungkan dan yang lain tidak terpengaruh", "Hubungan di mana kedua organisme dirugikan"]
                    ],
                    [
                        "question" => "Apa yang terjadi pada proses respirasi seluler?",
                        "choices" => ["Produksi oksigen", "Produksi glukosa", "Pembakaran glukosa untuk menghasilkan energi", "Pembentukan klorofil"]
                    ]
                ]

            ],
            [
                'id' => 6,
                'soal' => [
                    [
                        "question" => "Apa yang dimaksud dengan globalisasi?",
                        "choices" => ["Proses peningkatan interaksi dan interdependensi antar negara", "Proses isolasi suatu negara", "Proses penurunan ekonomi global", "Proses peningkatan populasi dunia"]
                    ],
                    [
                        "question" => "Siapa yang dikenal sebagai Bapak Sosiologi?",
                        "choices" => ["Karl Marx", "Emile Durkheim", "Max Weber", "Auguste Comte"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan budaya?",
                        "choices" => ["Warisan fisik dari masa lalu", "Kumpulan adat istiadat, nilai, dan norma yang dimiliki suatu kelompok", "Pengelolaan sumber daya alam", "Teknologi dan inovasi"]
                    ],
                    [
                        "question" => "Apa tujuan utama dari lembaga sosial?",
                        "choices" => ["Menghasilkan keuntungan ekonomi", "Menjaga ketertiban dan stabilitas dalam masyarakat", "Menyediakan layanan kesehatan", "Mengembangkan teknologi"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan stratifikasi sosial?",
                        "choices" => ["Pembagian masyarakat ke dalam kelas-kelas sosial yang berbeda", "Proses pendidikan dalam masyarakat", "Perpindahan penduduk dari satu tempat ke tempat lain", "Pengelolaan sumber daya alam"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan urbanisasi?",
                        "choices" => ["Perpindahan penduduk dari kota ke desa", "Perpindahan penduduk dari desa ke kota", "Proses pembangunan di pedesaan", "Proses industrialisasi"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan norma sosial?",
                        "choices" => ["Aturan tidak tertulis yang mengatur perilaku dalam masyarakat", "Undang-undang negara", "Konstitusi negara", "Prosedur formal dalam organisasi"]
                    ],
                    [
                        "question" => "Apa tujuan utama dari penelitian sosial?",
                        "choices" => ["Menguji hipotesis ilmiah", "Menghasilkan keuntungan ekonomi", "Meningkatkan populasi penduduk", "Mengembangkan teknologi baru"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan interaksi sosial?",
                        "choices" => ["Hubungan timbal balik antara individu atau kelompok", "Proses perpindahan penduduk", "Pengelolaan sumber daya alam", "Peningkatan populasi penduduk"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan konflik sosial?",
                        "choices" => ["Ketegangan dan pertentangan antar kelompok atau individu dalam masyarakat", "Kerjasama antar kelompok dalam masyarakat", "Proses pembelajaran dalam masyarakat", "Pembangunan ekonomi masyarakat"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan mobilitas sosial?",
                        "choices" => ["Perpindahan individu atau kelompok dari satu status sosial ke status sosial lain", "Proses pendidikan dalam masyarakat", "Pembagian kerja dalam masyarakat", "Pengelolaan sumber daya alam"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan sosiologi?",
                        "choices" => ["Ilmu yang mempelajari perilaku sosial manusia dan kelompok", "Ilmu yang mempelajari gejala alam", "Ilmu yang mempelajari perekonomian", "Ilmu yang mempelajari teknologi"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan etnografi?",
                        "choices" => ["Studi tentang budaya dan masyarakat manusia", "Studi tentang gejala alam", "Studi tentang perekonomian", "Studi tentang politik"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan kapitalisme?",
                        "choices" => ["Sistem ekonomi di mana produksi dan distribusi barang dan jasa dimiliki dan dioperasikan untuk keuntungan pribadi", "Sistem ekonomi di mana produksi dan distribusi barang dan jasa dikendalikan oleh negara", "Sistem ekonomi di mana semua sumber daya alam dimiliki bersama", "Sistem ekonomi di mana semua barang dan jasa diberikan secara gratis"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan demokrasi?",
                        "choices" => ["Sistem pemerintahan di mana kekuasaan berada di tangan rakyat", "Sistem pemerintahan di mana kekuasaan berada di tangan satu orang", "Sistem pemerintahan di mana kekuasaan berada di tangan sekelompok elit", "Sistem pemerintahan di mana kekuasaan berada di tangan militer"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan sosialisme?",
                        "choices" => ["Sistem ekonomi di mana produksi dan distribusi barang dan jasa dikendalikan oleh negara untuk kesejahteraan bersama", "Sistem ekonomi di mana produksi dan distribusi barang dan jasa dimiliki dan dioperasikan untuk keuntungan pribadi", "Sistem ekonomi di mana semua barang dan jasa diberikan secara gratis", "Sistem ekonomi di mana semua sumber daya alam dimiliki bersama"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan diskriminasi?",
                        "choices" => ["Perlakuan tidak adil terhadap seseorang atau kelompok berdasarkan karakteristik tertentu seperti ras, agama, atau gender", "Proses pembelajaran dalam masyarakat", "Pengelolaan sumber daya alam", "Peningkatan populasi penduduk"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan integrasi sosial?",
                        "choices" => ["Proses penyatuan berbagai kelompok dalam masyarakat menjadi satu kesatuan yang utuh", "Proses perpindahan penduduk", "Pembagian kerja dalam masyarakat", "Pengelolaan sumber daya alam"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan diferensiasi sosial?",
                        "choices" => ["Proses pembagian masyarakat ke dalam kelompok-kelompok berdasarkan perbedaan tertentu seperti pekerjaan, agama, atau etnis", "Proses pendidikan dalam masyarakat", "Perpindahan penduduk dari satu tempat ke tempat lain", "Pengelolaan sumber daya alam"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan perubahan sosial?",
                        "choices" => ["Perubahan dalam struktur dan fungsi masyarakat dari waktu ke waktu", "Proses pendidikan dalam masyarakat", "Perpindahan penduduk dari satu tempat ke tempat lain", "Pengelolaan sumber daya alam"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan sosialisasi?",
                        "choices" => ["Proses belajar dan penyesuaian individu terhadap norma, nilai, dan peran dalam masyarakat", "Proses pembelajaran dalam institusi pendidikan", "Proses perpindahan penduduk dari satu tempat ke tempat lain", "Proses pengelolaan sumber daya alam"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan urbanisasi?",
                        "choices" => ["Perpindahan penduduk dari desa ke kota", "Perpindahan penduduk dari kota ke desa", "Proses pembangunan di pedesaan", "Proses industrialisasi"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan kebudayaan?",
                        "choices" => ["Kumpulan adat istiadat, nilai, dan norma yang dimiliki suatu kelompok", "Pengelolaan sumber daya alam", "Teknologi dan inovasi", "Warisan fisik dari masa lalu"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan masyarakat?",
                        "choices" => ["Sekelompok individu yang hidup bersama dalam suatu wilayah dan berbagi budaya yang sama", "Kumpulan sumber daya alam", "Sekelompok individu yang bekerja dalam bidang yang sama", "Sekelompok individu yang memiliki tingkat pendidikan yang sama"]
                    ],
                    [
                        "question" => "Apa yang dimaksud dengan sosiologi?",
                        "choices" => ["Ilmu yang mempelajari perilaku sosial manusia dan kelompok", "Ilmu yang mempelajari gejala alam", "Ilmu yang mempelajari perekonomian", "Ilmu yang mempelajari teknologi"]
                    ]
                ]

            ]
        ];
        foreach ($paketSoal as $soal) {
            if ($soal['id'] == $id) {
                return $soal;
            }
        }
        return null;
    }
}
