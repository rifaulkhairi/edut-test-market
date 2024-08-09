import React, { useState } from "react";
import EndExamModal from "@/Components/EndExamModal";
import Timer from "@/Components/Timer";

const DetailSoal = ({ soal }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(soal.length).fill(null));
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextQuestion = () => {
        if (currentQuestion < soal.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleChoiceClick = (choice, index) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = choice;
        console.log(newAnswers[index]);
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

    const goToQuestion = (index) => {
        setCurrentQuestion(index);
    };

    return (
        <div className="container flex p-4 m-auto">
            <div className="contsoal flex-1 p-10 rounded-xl shadow-xl">
                <h2 className="font-semibold">
                    Soal Nomor {currentQuestion + 1}
                </h2>
                <h5 className="soal my-5">{soal[currentQuestion].question}</h5>
                <div className="pilihan h-auto">
                    <ul className="space-y-2">
                        {soal[currentQuestion].choices.map((choice, index) => (
                            <li
                                key={index}
                                className={`h-auto w-full p-2 rounded-2xl cursor-pointer ${
                                    answers[currentQuestion] === choice
                                        ? "bg-blue-500 text-white"
                                        : "bg-blue-gray-100"
                                }`}
                                onClick={() => handleChoiceClick(choice, index)}
                            >
                                {choice}
                            </li>
                        ))}
                    </ul>
                    <div className="navigasi flex gap-2 mt-4">
                        <div className="back bg-secondary text-white w-auto h-auto p-2 rounded-3xl">
                            <button
                                onClick={prevQuestion}
                                disabled={currentQuestion === 0}
                            >
                                Sebelumnya
                            </button>
                        </div>
                        <div className="next bg-secondary text-white w-auto h-auto p-2 rounded-3xl">
                            <button
                                onClick={nextQuestion}
                                disabled={currentQuestion === soal.length - 1}
                            >
                                Selanjutnya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sisikanan w-autoflex flex-col p-4">
                <Timer
                    initialHours={0}
                    initialMinutes={1}
                    initialSeconds={1}
                    onTimeUp={handleConfirmEndExam}
                />

                <div className="akhiri py-2 bg-secondary text-white m-2 rounded-full cursor-pointer hover:shadow-md flex items-center justify-center font-bold">
                    <button onClick={handleEndExamClick}>AKHIRI UJIAN</button>
                </div>
                <div className="tipe shadow-xl rounded-2xl">
                    <div className="tes m-4 grid gap-1 py-4">
                        <h1 className="font-bold">Pilih Tipe tes</h1>
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
                <div className="daftar p-4 bg-white rounded-2xl shadow-xl">
                    <h1 className="font-bold py-2">Daftar Soal</h1>
                    <div className="bks grid grid-cols-5 gap-1">
                        {Array.from({ length: soal.length }, (_, i) => (
                            <button
                                key={i + 1}
                                className={`number-div p-2 hover:scale-110 ${
                                    answers[i] !== null
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                } text-center rounded-md`}
                                onClick={() => goToQuestion(i)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <EndExamModal
                open={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmEndExam}
            />
        </div>
    );
};

export default DetailSoal;
