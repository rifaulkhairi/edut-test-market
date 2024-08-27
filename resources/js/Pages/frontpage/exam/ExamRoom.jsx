import React, { useState } from "react";
import EndExamModal from "@/Components/EndExamModal";
import Timer from "@/Components/Timer";
import { useEffect } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ExamRoom = ({
    paketsoal,
    groupedQuestions,
    tipetestData,
    percobaanujian,
}) => {
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
    const handleChoiceClick = async (choice, option_id) => {
        setAnswers((prevAnswers) => {
            const newAnswers = prevAnswers.map((answerObj) => {
                if (answerObj.tipetest === currentTipeTest) {
                    const updatedAnswers = [...answerObj.answer];
                    updatedAnswers[currentQuestion] = choice;
                    return { ...answerObj, answer: updatedAnswers };
                }
                return answerObj;
            });

            // Call saveAnswer after the state is updated
            saveAnswer(newAnswers, option_id);
            return newAnswers; // Ensure the new state is returned
        });
    };

    // Modify saveAnswer to accept the updated answers as a parameter
    const saveAnswer = async (updatedAnswers, option_id) => {
        const selectedoption = updatedAnswers.find(
            (answerObj) => answerObj.tipetest === currentTipeTest
        ).answer[currentQuestion];
        console.log("percobaanujian:", percobaanujian); // Log percobaanujian object
        console.log("percobaan_id:", percobaanujian?.id); // Log percobaan_id
        if (selectedoption != null) {
            try {
                let tipesoal = currentQuestionGroup[currentQuestion].tipe_soal;
                console.log(tipesoal);
                const response = await axios.post("/api/save-answer", {
                    tipesoal: tipesoal,
                    question_id: currentQuestionGroup[currentQuestion].id,
                    answer: selectedoption,
                    option_id: option_id,
                    percobaan_id: percobaanujian[0].id,
                });
                console.log("Jawaban disimpan", response.data);
            } catch (error) {
                console.error("Error menyimpan jawaban", error);
            }
        }
    };

    const nextQuestion = async () => {
        if (currentQuestion < currentQuestionGroup.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleEndExamClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmEndExam = () => {
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
        console.log(answers);
    }, [answers]);

    return (
        <div className="relative">
            <div className="flex w-full absolute h-32 bg-secondary rounded-b-[100px]"></div>
            <div className="max-w-7xl flex m-auto">
                <div className="relative contsoal flex-1 p-10 rounded-xl shadow-xl bg-white mt-14">
                    <h2 className="font-semibold">
                        Soal Nomor {currentQuestion + 1}
                    </h2>
                    <h5
                        className="soal my-5"
                        dangerouslySetInnerHTML={{
                            __html: currentQuestionGroup[currentQuestion]
                                .question,
                        }}
                    ></h5>
                    <div className="pilihan h-auto">
                        <ul className="space-y-2">
                            {currentQuestionGroup[currentQuestion].options.map(
                                (choice, index) => (
                                    <li
                                        key={choice.Alias}
                                        className={`h-auto w-full p-2 rounded-lg cursor-pointer flex items-center gap-x-3 ${
                                            answers.find(
                                                (answerObj) =>
                                                    answerObj.tipetest ===
                                                    currentTipeTest
                                            ).answer[currentQuestion] ===
                                            choice.Alias
                                                ? "bg-secondary text-white"
                                                : "bg-blue-gray-200/30"
                                        }`}
                                        onClick={() =>
                                            handleChoiceClick(
                                                choice.Alias,
                                                choice.id
                                            )
                                        }
                                    >
                                        <p>
                                            {`${String.fromCharCode(
                                                97 + parseInt(choice.Alias, 10)
                                            ).toUpperCase()}.`}
                                        </p>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: choice.option,
                                            }}
                                        ></p>
                                    </li>
                                )
                            )}
                        </ul>
                        <div className="navigasi flex gap-2 mt-20">
                            <div className="">
                                <button
                                    onClick={prevQuestion}
                                    disabled={currentQuestion === 0}
                                    className="h-fit w-fit px-3 rounded-md py-2 flex flex-row items-center gap-x-1 bg-green-800/25 text-gray-900"
                                >
                                    <MdKeyboardDoubleArrowLeft />
                                    Sebelumnya
                                </button>
                            </div>
                            <div className="flex">
                                <button
                                    onClick={nextQuestion}
                                    className="h-fit w-fit px-3 rounded-md py-2 flex flex-row items-center gap-x-1 bg-green-600 text-white"
                                    disabled={
                                        currentQuestion ===
                                        currentQuestionGroup.length - 1
                                    }
                                >
                                    <p>Selanjutnya</p>
                                    <MdKeyboardDoubleArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-30 sisikanan w-autoflex min-w-72 flex-col pt-0 px-4 pb-4 mt-14">
                    <Timer
                        initialHours={paketsoal.jam}
                        initialMinutes={paketsoal.menit}
                        initialSeconds={paketsoal.detik}
                        onTimeUp={handleConfirmEndExam}
                    />

                    <div className="akhiri py-2 bg-yellow-900 text-white m-2 rounded-full cursor-pointer hover:shadow-md flex items-center justify-center font-bold">
                        <button onClick={handleEndExamClick}>
                            AKHIRI UJIAN
                        </button>
                    </div>
                    <div className="tipe shadow-xl rounded-2xl bg-white">
                        <div className="tes m-4 grid gap-1 py-4">
                            <h1 className="font-bold">Pilih Tipe tes</h1>
                            {Object.keys(groupedQuestions).map(
                                (tipetest, index) => (
                                    <button
                                        key={index}
                                        className={`twk p-2 ${
                                            tipetest === currentTipeTest
                                                ? "bg-secondary text-white"
                                                : "bg-blue-gray-200/30 text-gray-900"
                                        } text-md flex justify-between items-center  rounded-lg `}
                                        onClick={() =>
                                            handleTipeTest(tipetest, index)
                                        }
                                    >
                                        {
                                            tipetestData.find(
                                                (item) =>
                                                    item.id ===
                                                    parseInt(tipetest, 10)
                                            ).name
                                        }
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    <div className="daftar p-4 bg-white rounded-2xl shadow-xl">
                        <h1 className="font-bold ">Daftar Soal</h1>
                        <div className="bks grid grid-cols-5 gap-1">
                            {Array.from(
                                { length: currentQuestionGroup.length },
                                (_, i) => {
                                    const currentAnswerObj = answers.find(
                                        (answerObj) =>
                                            answerObj.tipetest ===
                                            currentTipeTest
                                    );
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
        </div>
    );
};
export default ExamRoom;
