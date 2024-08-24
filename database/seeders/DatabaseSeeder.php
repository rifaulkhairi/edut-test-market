<?php

namespace Database\Seeders;

use App\Models\Option;
use App\Models\PaketSoal;
use App\Models\Penilaian;
use App\Models\Question;
use App\Models\TipeTest;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        DB::table('users')->delete();

        $users = [
            ['name' => 'admin', 'email' => 'admin@gmail.com', 'userType' => 'admin'],
            ['name' => 'editor', 'email' => 'editor@gmail.com', 'userType' => 'editor'],
            ['name' => 'user1', 'email' => 'user1@gmail.com'],
            ['name' => 'user2', 'email' => 'user2@gmail.com'],

        ];
        foreach ($users as $user) {
            User::factory()->create($user);
        }

        $typeTests = [
            ['name' => 'Test Inteligensi Umum'],
            ['name' => 'Test Wawasan Kebangsaan'],
            ['name' => 'Test Karakteristik Pribadi '],
        ];

        PaketSoal::factory(2)->create();
        foreach ($typeTests as $typeTest) {
            TipeTest::factory()->create($typeTest);
        }

        $penilaian = [
            ['created_by' => "user1@gmail.com"],
            ['created_by' => "user2@gmail.com"]
        ];
        foreach ($penilaian as $item) {
            Penilaian::factory()->create($item);
        }

        $datasoal = [
            [
                'question' => 'Jika pantai di daerah X ramai dikunjungi wisatawan, perekonomian masyarakat daerah tersebut meningkat. Jika ekosistem di pantai daerah X tidak dijaga dengan baik, hasil tangkapan nelayan daerah tersebut akan tercemar. Saat ini perekonomian masyarakat daerah X tidak mengalami peningkatan atau hasil tangkapan nelayan daerah X tidak tercemar. Simpulan yang tepat adalah ...',
                'paketsoal_id' => 1,
                'tipetest_id' => 1,
                'created_by' => 'admin@gmail.com',
                'tipe_soal' => 'pg',
                'pembahasan' => 'pembahasan',
                'choices' => [
                    [
                        'option' => 'pantai daerah x belum ramai dikunjungi wisatawan, tetapi ekosistem pantai di daerah tersebut tidak dijaga dengan baik',
                        'nilai' => 0,
                        'Alias' => '0'
                    ],
                    [
                        'option' => 'pantai daerah x ramai dikunjungi wisatawan, tetapi ekosistem pantai di daerah tersebut tidak dijaga dengan baik',
                        'nilai' => 0,
                        'Alias' => '1'
                    ],
                    [
                        'option' => 'ekosistem pantai didaerah tersebut dijaga dengan baik karena belum ramai dikunjungi wisatawan',
                        'nilai' => 0,
                        'Alias' => '2'
                    ],
                    [
                        'option' => 'Pantai daerah x tidak ramai dikunjungi wisatawan atau ekosistem di pantai daerah tersebut dijaga dengan baik',
                        'nilai' => 5,
                        'Alias' => '3'
                    ],
                    [
                        'option' => 'pantai x belum ramai dikunjungi wisatawan atau ekosistem di pantai tersebut tidak dijaga dengan baik',
                        'nilai' => 0,
                        'Alias' => '4'
                    ],
                ]
            ],
            [
                'question' => 'Dalam sebuah pertandingan bola basket, Naufal harus mendribbel bola ke beberapa pemain agar dapat menyarangkan bola ke ring lawan. Di dekat ring ada Fajar, Naufal bisa mendribble ke Saiful dan Angga. Saiful bisa mendribble ke Jati dan Gilang, sedangkan Angga bisa mendribble ke Gilang dan Rafiq. Gilang bisa mendribble ke Rafiq, tetapi tidak ke Jati. Rafiq tidak bisa mendribble ke Fajar, sedangkan Jati bisa mendribble ke Fajar sehingga Fajar dapat melakukan shot ke arah ring lawan. Ada berapa alternatif jalur yang bisa ditempuh agar bola dapat sampai dari Naufal ke Fajar?',
                'paketsoal_id' => 1,
                'tipetest_id' => 1,
                'created_by' => 'admin@gmail.com',
                'tipe_soal' => 'pg',
                'pembahasan' => 'pembahasan',
                'choices' => [
                    [
                        'option' => '0 cara',
                        'nilai' => 0,
                        'Alias' => '0'
                    ],
                    [
                        'option' => '1 cara',
                        'nilai' => 5,
                        'Alias' => '1'
                    ],
                    [
                        'option' => '2 cara',
                        'nilai' => 0,
                        'Alias' => '2'
                    ],
                    [
                        'option' => '3 cara',
                        'nilai' => 0,
                        'Alias' => '3'
                    ],
                    [
                        'option' => '4 cara',
                        'nilai' => 0,
                        'Alias' => '4'
                    ],
                ]
            ],

            [
                'question' => 'Era digital memberikan peluang dan tantangan bagi nasionalisme, termasuk penyebaran propaganda yang dapat memecah belah bangsa melalui disinformasi. Tantangan utama nasionalisme dalam era digital adalah...',
                'paketsoal_id' => 1,
                'tipetest_id' => 2,
                'created_by' => 'admin@gmail.com',
                'tipe_soal' => 'pg',
                'pembahasan' => 'Tantangan utama nasionalisme dalam era digital yang dijelaskan dalam narasi adalah penyebaran propaganda yang dapat memecah belah bangsa melalui disinformasi. Dari pilihan jawaban yang diberikan, pilihan yang paling tepat adalah C. Penyebaran informasi yang bias dan disinformasi yang dapat mempengaruhi persepsi publik. Pilihan ini secara langsung berkaitan dengan masalah utama yang disebutkan dalam narasi, yaitu penyebaran propaganda yang dapat memecah belah bangsa melalui informasi yang menyesatkan. Disinformasi dan informasi yang bias dapat menciptakan ketidakpercayaan di antara warga negara dan merusak rasa persatuan, sehingga sangat relevan dengan tantangan nasionalisme yang dijelaskan',
                'choices' => [
                    [
                        'option' => 'Integrasi budaya asing melalui platform digital yang semakin kuat',
                        'nilai' => 0,
                        'Alias' => '0'
                    ],
                    [
                        'option' => 'Kurangnya kesadaran masyarakat akan pentingnya nilai-nilai Kebangsaan',
                        'nilai' => 0,
                        'Alias' => '1'
                    ],
                    [
                        'option' => 'Penyebaran informasi yang bias dan disinformasi yang dapat mempengaruhi persepsi publik',
                        'nilai' => 5,
                        'Alias' => '2'
                    ],
                    [
                        'option' => 'akses tak terbatas terhadap berbagai sumber informasi global yang mempengaruhi identitas nasional',
                        'nilai' => 0,
                        'Alias' => '3'
                    ],
                    [
                        'option' => 'rendahnya efektivitas pengawasan pemerintah dalam mengendalikan konten di media sosial',
                        'nilai' => 0,
                        'Alias' => '4'
                    ],
                ]
            ],
            [
                'question' => 'Tumbuhnya perasaan kedaerahan dan kesukuan yang berlebihan akan menjadi tantangan dalam keberagaman di masyarakat yang dapat mengancam keutuhan kehidupan berbangsa dan bernegara. Maka di antara upaya yang dapat dilakukan untuk meningkatkan kerukunan pemeluk agama, suku dan kelompok sosial lainnya dapat ditempuh melalui cara...',
                'paketsoal_id' => 1,
                'tipetest_id' => 2,
                'created_by' => 'admin@gmail.com',
                'tipe_soal' => 'pg',
                'pembahasan' => 'Upaya yang dapat dilakukan untuk meningkatkan kerukunan pemeluk agama, suku dan kelompok sosial lainnya dapat ditempuh melalui cara berdialog dan bekerja sama dengan prinsip toleransi, kebersamaan dan kesetaraan.',
                'choices' => [
                    [
                        'option' => 'Menghormati perbedaan kepercayaan dan kerukunan umat beragama',
                        'nilai' => 0,
                        'Alias' => '0'
                    ],
                    [
                        'option' => 'Menjaga kebudayaan dan kekayaan alam, serta keutuhan khazanah bangsa indonesia',
                        'nilai' => 0,
                        'Alias' => '1'
                    ],
                    [
                        'option' => 'Berdialog dan bekerja sama dengan prinsip toleransi, kebersamaan dan kesetaraan',
                        'nilai' => 5,
                        'Alias' => '2'
                    ],
                    [
                        'option' => 'Mensyukuri keberagaman dan khazanah budaya bangsa sebagai tuhan yang maha esa',
                        'nilai' => 0,
                        'Alias' => '3'
                    ],
                    [
                        'option' => 'Bangga dan menjaga kutuhan keberagaman yang dimiliki bangsa indonesia',
                        'nilai' => 0,
                        'Alias' => '4'
                    ],
                ]
            ],
            [
                'question' => 'Anda adalah seorang guru di sebuah sekolah yang beragam agama dan kepercayaan. Untuk meningkatkan pemahaman peserta didik terhadap perbedaan agama dan kepercayaan, tindakan terbaik yang dapat Anda lakukan adalah … (anti radikalisme)',
                'paketsoal_id' => 1,
                'tipetest_id' => 3,
                'created_by' => 'admin@gmail.com',
                'tipe_soal' => 'pg',
                'pembahasan' => 'Untuk meningkatkan pemahaman peserta didik terhadap perbedaan agama dan kepercayaan, tindakan terbaik yang dapat dilakukan oleh seorang guru adalah membuat tugas kelompok dengan anggota yang memiliki agama atau kepercayaan yang berbeda. Hal ini mendorong kolaborasi, pemahaman, dan toleransi antar peserta didik. Melakukan kunjungan ke berbagai tempat ibadah juga merupakan langkah yang efektif untuk memperkenalkan peserta didik dengan praktik-praktik agama yang berbeda secara langsung. Mengabaikan perbedaan agama dan kepercayaan dalam pembelajaran dapat mengurangi pemahaman dan penghargaan terhadap keberagaman. Larangan diskusi tentang agama di kelas juga dapat membatasi kesempatan peserta didik untuk belajar tentang perbedaan agama dan kepercayaan dengan cara yang konstruktif. Terakhir, melakukan penilaian berdasarkan agama atau kepercayaan dapat menyebabkan ketidakadilan dan diskriminasi. Oleh karena itu, penting untuk menciptakan lingkungan belajar yang inklusif, mendukung kolaborasi, dan memperkenalkan peserta didik dengan perbedaan agama dan kepercayaan dengan cara yang positif dan informatif.',
                'choices' => [
                    [
                        'option' => 'Mengabaikan perbedaan agama dan kepercayaan dalam pembelajaran dan fokus pada materi pelajaran utama',
                        'nilai' => 3,
                        'Alias' => '0'
                    ],
                    [
                        'option' => 'Melarang diskusi tentang agama di kelas untuk menghindari konflik antar peserta didik',
                        'nilai' => 2,
                        'Alias' => '1'
                    ],
                    [
                        'option' => 'Melakukan kunjungan ke berbagai tempat ibadah untuk memperkenalkan peserta didik dengna praktik-praktik agama yang berbeda',
                        'nilai' => 4,
                        'Alias' => '2'
                    ],
                    [
                        'option' => 'Membuat tugas kelompok dengan anggota yang memiliki agama atau kepercayaan yang berbeda untuk mendorong kolaborasi dan pemahaman',
                        'nilai' => 5,
                        'Alias' => '3'
                    ],
                    [
                        'option' => 'Melakukan penilaian terhadap peserta didik berdasarkan agama atau kepercayaan yang dianut',
                        'nilai' => 1,
                        'Alias' => '4'
                    ],
                ]
            ],
            [
                'question' => 'Anda adalah seorang pengusaha yang ingin meningkatkan keterampilan manajerial dalam mengelola bisnis Anda. Tindakan anda adalah … (profesionalisme)',
                'paketsoal_id' => 1,
                'tipetest_id' => 3,
                'created_by' => 'admin@gmail.com',
                'tipe_soal' => 'pg',
                'pembahasan' => 'Untuk meningkatkan keterampilan manajerial dalam mengelola bisnis, langkah terbaik yang dapat diambil adalah menyusun rencana pembelajaran dan mengikuti program pengembangan kepemimpinan. Ini memberikan kesempatan untuk memperluas pengetahuan dan keterampilan manajerial Anda secara sistematis. Selain itu, menyewa seorang mentor bisnis yang berpengalaman dapat memberikan bimbingan dan wawasan berharga dalam pengembangan keterampilan manajerial. Menghadiri seminar atau konferensi bisnis yang membahas topik terkini juga dapat membantu Anda memperbarui pengetahuan Anda tentang praktik manajemen terbaru. Mengamati dan belajar dari praktik manajemen yang sukses di perusahaan lain dalam industri yang sama juga dapat memberikan inspirasi dan ide baru. Namun, mengandalkan hanya pada pengalaman dan insting Anda tanpa mencari pengetahuan baru dalam manajemen dapat membatasi perkembangan Anda sebagai seorang pengusaha yang efektif.',
                'choices' => [
                    [
                        'option' => 'Menyusun rencana pembelajaran dan mengikuti program pengembangan kepemimpinan',
                        'nilai' => 5,
                        'Alias' => '0'
                    ],
                    [
                        'option' => 'Menghadiri seminar atau konferensi bisnis yang membahas topik manajemen terkini',
                        'nilai' => 4,
                        'Alias' => '1'
                    ],
                    [
                        'option' => 'Menyewa seorang mentor bisnis yang dapat membimbing anda dalam mengembangkan keterampilan manajerila',
                        'nilai' => 3,
                        'Alias' => '2'
                    ],
                    [
                        'option' => 'Mengamati dan belajar dari praktik manajemen yang sukses di perusahaan lain dalam industri yang sama',
                        'nilai' => 2,
                        'Alias' => '3'
                    ],
                    [
                        'option' => 'mengandalkan pengalaman dan insting anda tanpa mencari pengetahuan baru dalam manajemen',
                        'nilai' => 1,
                        'Alias' => '4'
                    ],
                ]
            ],
        ];

        foreach ($datasoal as $soal) {
            $data = [];
            $data['question'] = $soal['question'];
            $data['paketsoal_id'] = $soal['paketsoal_id'];
            $data['tipetest_id'] = $soal['tipetest_id'];
            $data['created_by'] = $soal['created_by'];
            $data['pembahasan'] = $soal['pembahasan'];

            $savedsoal = Question::create($data);
            foreach ($soal['choices'] as $choice) {
                $datachoice = [];
                $datachoice['option'] = $choice['option'];
                $datachoice['nilai'] = $choice['nilai'];
                $datachoice['Alias'] = $choice['Alias'];
                $datachoice['question_id'] = $savedsoal->id;

                Option::create($datachoice);
            }
        }
    }
}
