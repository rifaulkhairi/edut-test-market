import React, { useState } from "react";
import EndExamModal from "@/Components/EndExamModal";
import Timer from "@/Components/Timer";
import { useEffect } from "react";

const DetailSoal = ({ paketsoal, groupedQuestions, tipetestdata }) => {
    const [currentTipeTest, setCurrentTipeTest] = useState("1");

    const [currentQuestionGroup, setCurrentQuestionGroup] = useState(
        groupedQuestions[currentTipeTest]
    );
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(
        Object.keys(groupedQuestions).map((tipetest) => ({
            tipetest: tipetest,
            answer: Array(groupedQuestions[tipetest].length).fill(null),
        }))
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextQuestion = () => {
        if (currentQuestion < currentQuestionGroup.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleChoiceClick = (choice) => {
        setAnswers((prevAnswers) =>
            prevAnswers.map((answerObj) => {
                if (answerObj.tipetest === currentTipeTest) {
                    const updatedAnswers = [...answerObj.answer];
                    updatedAnswers[currentQuestion] = choice; // Fill the specific question with the selected choice
                    return { ...answerObj, answer: updatedAnswers };
                }
                return answerObj;
            })
        );
    };

    const handleEndExamClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmEndExam = () => {
        // Logika untuk mengakhiri ujian bisa ditambahkan di sini
        // console.log("Ujian diakhiri");
        setIsModalOpen(false);
    };

    const goToQuestion = (index) => {
        setCurrentQuestion(index);
    };

    const handleTipeTest = (value, index) => {
        setCurrentTipeTest(value);
        setCurrentQuestionGroup(groupedQuestions[value]);
        setCurrentQuestion(0);
    };

    useEffect(() => {
        // console.log(currentTipeTest);
        // console.log(currentQuestionGroup);
        console.log(answers);
    }, [answers]);

    // console.log(tipetestdata);

    return (
        <div className=" container flex p-4 m-auto ">
            <div className="relative contsoal flex-1 p-10 rounded-xl shadow-xl z-auto">
                <h2 className="font-semibold">
                    Soal Nomor {currentQuestion + 1}
                </h2>
                <h5
                    className="soal my-5"
                    dangerouslySetInnerHTML={{
                        __html: currentQuestionGroup[currentQuestion].question,
                    }}
                ></h5>
                <div className="pilihan h-auto">
                    <ul className="space-y-2">
                        {currentQuestionGroup[currentQuestion].options.map(
                            (choice, index) => (
                                <li
                                    key={choice.Alias}
                                    className={`h-auto w-full p-2 rounded-2xl cursor-pointer ${
                                        answers.find(
                                            (answerObj) =>
                                                answerObj.tipetest ===
                                                currentTipeTest
                                        ).answer[currentQuestion] ===
                                        choice.Alias
                                            ? "bg-blue-500 text-white" // Highlight selected choice
                                            : "bg-blue-gray-100"
                                    }`}
                                    onClick={() =>
                                        handleChoiceClick(choice.Alias)
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: choice.option,
                                    }}
                                ></li>
                            )
                        )}
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
                                disabled={
                                    currentQuestion ===
                                    currentQuestionGroup.length - 1
                                }
                            >
                                Selanjutnya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-30 sisikanan w-autoflex min-w-72 flex-col p-4">
                <Timer
                    initialHours={paketsoal.jam}
                    initialMinutes={paketsoal.menit}
                    initialSeconds={paketsoal.detik}
                    onTimeUp={handleConfirmEndExam}
                />

                <div className="akhiri py-2 bg-secondary text-white m-2 rounded-full cursor-pointer hover:shadow-md flex items-center justify-center font-bold">
                    <button onClick={handleEndExamClick}>AKHIRI UJIAN</button>
                </div>
                <div className="tipe shadow-xl rounded-2xl">
                    <div className="tes m-4 grid gap-1 py-4">
                        <h1 className="font-bold">Pilih Tipe tes</h1>
                        {Object.keys(groupedQuestions).map(
                            (tipetest, index) => (
                                <button
                                    className="twk p-2 bg-tertiary text-xs flex justify-between items-center text-white rounded-lg"
                                    onClick={() =>
                                        handleTipeTest(tipetest, index)
                                    }
                                >
                                    {tipetest}
                                </button>
                            )
                        )}
                    </div>
                </div>
                <div className="daftar p-4 bg-white rounded-2xl shadow-xl">
                    <h1 className="font-bold py-2">Daftar Soal</h1>
                    <div className="bks grid grid-cols-5 gap-1">
                        {Array.from(
                            { length: currentQuestionGroup.length },
                            (_, i) => {
                                const currentAnswerObj = answers.find(
                                    (answerObj) =>
                                        answerObj.tipetest === currentTipeTest
                                );

                                // Get the answer for the current question in the current TipeTest
                                const isAnswered =
                                    currentAnswerObj &&
                                    currentAnswerObj.answer[i] !== null;

                                return (
                                    <button
                                        key={i + 1}
                                        className={`number-div p-2 hover:scale-110 ${
                                            isAnswered
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                        } text-center rounded-md`}
                                        onClick={() => goToQuestion(i)}
                                    >
                                        {i + 1}
                                    </button>
                                );
                            }
                        )}
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
