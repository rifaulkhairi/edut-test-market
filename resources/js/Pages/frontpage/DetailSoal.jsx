import React, { useState } from 'react';
import EndExamModal from '@/Components/EndExamModal';

const DetailSoal = () => {
  const dataSoal = [
                {
                        question:  "Siapakah nabi terakhir dalam agama Islam?",
                        choices: ["Nabi Musa", "Nabi Isa", "Nabi Muhammad", "Nabi Ibrahim"]
                    },
                    {   question : "Apa nama kitab suci umat Islam?",
                        choices : ["Injil", "Taurat", "Zabur", "Al-Qur'an"]
                    },
                    {
                        question : "Berapa kali umat Islam diwajibkan sholat dalam sehari?",
                        choices : ["3 kali", "4 kali", "5 kali", "6 kali"]
                    },
                    {
                        question : "Puasa di bulan Ramadhan merupakan salah satu dari...",
                        choices : ["Rukun Islam", "Rukun Iman", "Rukun Negara", "Rukun Warga"]
                    },
                    {
                        question : "Kota manakah yang dianggap paling suci dalam Islam?",
                        choices : ["Yerusalem", "Madinah", "Kairo", "Mekkah"]
                    },
                    {
                        question : "Siapakah malaikat yang bertugas menyampaikan wahyu kepada para nabi?",
                        choices : ["Malaikat Jibril", "Malaikat Mikail", "Malaikat Israfil", "Malaikat Munkar"]
                    },
                    {
                        question : "Berapa jumlah juz dalam Al-Qur'an?",
                        choices : ["30 juz", "40 juz", "50 juz", "60 juz"]
                    },
                    {
                        question : "Apa arti dari kata 'Islam'?",
                        choices : ["Keimanan", "Kesucian", "Kedamaian", "Ketakwaan"]
                    },
                    {
                        question : "Haji merupakan rukun Islam yang ke...",
                        choices : ["Satu", "Dua", "Tiga", "Lima"]
                    },
                    {
                        question : "Siapakah yang disebut sebagai 'Khalifah pertama' dalam sejarah Islam?",
                        choices : ["Umar bin Khattab", "Abu Bakar Ash-Shiddiq", "Usman bin Affan", "Ali bin Abi Thalib"]
                }
    // Tambahkan lebih banyak soal sesuai kebutuhan
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(dataSoal.length).fill(null));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextQuestion = () => {
    if (currentQuestion < dataSoal.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleChoiceClick = (choice) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = choice;
    setAnswers(newAnswers);
  };

  const handleEndExamClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmEndExam = () => {
    // Logika untuk mengakhiri ujian bisa ditambahkan di sini
    console.log("Ujian diakhiri");
    setIsModalOpen(false);
  };

  return (
    <div className="container flex p-4 m-auto">
      <div className='contsoal flex-1 p-10 rounded-xl shadow-xl'>
        <h2 className='font-semibold'>Soal Nomor {currentQuestion + 1}</h2>
        <h5 className='soal my-5'>{dataSoal[currentQuestion].question}</h5>
        <div className="pilihan h-auto">
          <ul className="space-y-2">
            {dataSoal[currentQuestion].choices.map((choice, index) => (
              <li
                key={index}
                className={`h-auto w-full p-2 rounded-2xl cursor-pointer ${answers[currentQuestion] === choice ? 'bg-blue-500 text-white' : 'bg-blue-gray-100'}`}
                onClick={() => handleChoiceClick(choice)}
              >
                {choice}
              </li>
            ))}
          </ul>
          <div className="navigasi flex gap-2 mt-4">
            <div className="back bg-secondary text-white w-auto h-auto p-2 rounded-3xl">
              <button onClick={prevQuestion} disabled={currentQuestion === 0}>Sebelumnya</button>
            </div>
            <div className="next bg-secondary text-white w-auto h-auto p-2 rounded-3xl">
              <button onClick={nextQuestion} disabled={currentQuestion === dataSoal.length - 1}>Selanjutnya</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sisikanan w-autoflex flex-col p-4">
        <div className="waktu shadow-lg rounded-2xl">
          <h1 className='font-bold ml-4 mt-2'>Sisa Waktu</h1>
          <div className="waktu grid grid-flow-col p-4 text-white">
            <div className="jam h-14 w-14 bg-tertiary rounded-lg flex items-center justify-center">_</div>
            <div className="menit h-14 w-14 bg-tertiary rounded-lg flex items-center justify-center">_</div>
            <div className="detik h-14 w-14 bg-tertiary rounded-lg flex items-center justify-center">_</div>
          </div>
        </div>
        <div className="akhiri py-2 bg-secondary text-white m-2 rounded-full cursor-pointer hover:shadow-md flex items-center justify-center font-bold">
          <button onClick={handleEndExamClick}>AKHIRI UJIAN</button>
        </div>
        <div className="tipe shadow-xl rounded-2xl">
          <div className="tes m-4 grid gap-1 py-4">
            <h1 className='font-bold'>Pilih Tipe tes</h1>
            <div className="twk p-2 bg-tertiary text-xs flex justify-between items-center text-white rounded-lg">
              Tes Wawasan Kebangsaan
              <div className="persen h-10 w-10 border border-white rounded-full"></div>
            </div>
            <div className="twk p-2 bg-tertiary text-xs flex justify-between items-center text-white rounded-lg">
              Tes Intelegensi Umum
              <div className="persen h-10 w-10 border border-white rounded-full"></div>
            </div>
            <div className="twk p-2 bg-tertiary text-xs flex justify-between items-center text-white rounded-lg">
              Tes Karakteristik Pribadi
              <div className="persen h-10 w-10 border border-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="daftar p-4 bg-white rounded-2xl">
          <h1 className='font-bold py-2'>Daftar Soal</h1>
          <div className="bks grid grid-cols-5 gap-1">
            {Array.from({ length: dataSoal.length }, (_, i) => (
              <button key={i + 1} className="number-div p-2 hover:scale-110 bg-red-500 text-center rounded-md">{i + 1}</button>
            ))}
          </div>
        </div>
      </div>
      <EndExamModal open={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmEndExam} />
    </div>
  );
};

export default DetailSoal;
