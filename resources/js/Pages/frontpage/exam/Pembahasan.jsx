import React, { useState } from "react";
import EndExamModal from "@/Components/EndExamModal";
import Timer from "@/Components/Timer";
import { useEffect } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { router } from "@inertiajs/react";

const Pembahasan = ({
    paketsoal,
    groupedQuestions,
    tipetestData,
    percobaanujian,
    groupedAnswers,
}) => {
    const [currentTipeTest, setCurrentTipeTest] = useState("1");

    const [currentQuestionGroup, setCurrentQuestionGroup] = useState(
        groupedQuestions[currentTipeTest]
    );
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(
        Object.keys(groupedQuestions).map((tipetest) => {
            const questionGroup = groupedQuestions[tipetest] || [];
            const answerGroup = groupedAnswers[tipetest] || [];

            const questionsWithAnswers = questionGroup.map(
                (question, index) => {
                    const answerObj = answerGroup.find(
                        (ans) => ans.question_id === question.id
                    );
                    return {
                        id: question.id,
                        answer: answerObj ? answerObj.answer : null,
                    };
                }
            );

            return {
                tipetest: tipetest,
                questions: questionsWithAnswers,
            };
        })
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setCurrentQuestionGroup(groupedQuestions[currentTipeTest] || []);
    }, [currentTipeTest, groupedQuestions]);

    const handleChoiceClick = async (choice, option_id) => {
        setAnswers((prevAnswers) => {
            const newAnswers = prevAnswers.map((answerObj) => {
                if (answerObj.tipetest === currentTipeTest) {
                    const question = currentQuestionGroup[currentQuestion]; // Direct reference to the question

                    if (!question) {
                        console.error("Question is undefined.");
                        return answerObj;
                    }

                    // Update the answer for the specific question
                    const updatedQuestions = answerObj.questions.map((q) =>
                        q.id === question.id ? { ...q, answer: choice } : q
                    );

                    return { ...answerObj, questions: updatedQuestions };
                }
                return answerObj;
            });

            console.log("Updated Answers:", newAnswers);

            saveAnswer(newAnswers, option_id);
            return newAnswers;
        });
    };

    const saveAnswer = async (updatedAnswers, option_id) => {
        // Find the answer object for the current tipetest
        const currentAnswerObj = updatedAnswers.find(
            (answerObj) => answerObj.tipetest === currentTipeTest
        );

        // Find the selected option for the current question
        const selectedQuestion = currentAnswerObj.questions.find(
            (q) => q.id === currentQuestionGroup[currentQuestion].id
        );

        if (selectedQuestion && selectedQuestion.answer != null) {
            try {
                const tipesoal =
                    currentQuestionGroup[currentQuestion].tipe_soal;
                console.log("Tipe Soal:", tipesoal);

                const response = await axios.post("/api/save-answer", {
                    tipesoal: tipesoal,
                    question_id: currentQuestionGroup[currentQuestion].id,
                    answer: selectedQuestion.answer,
                    option_id: option_id,
                    percobaan_id: percobaanujian.id,
                });

                console.log("Jawaban disimpan", response.data);
            } catch (error) {
                console.error("Error menyimpan jawaban", error);
            }
        } else {
            console.error("Selected question or answer is undefined.");
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

        router.post("/endexam", {
            percobaan_id: percobaanujian.id,
            paketsoal_id: percobaanujian.paketsoal_id,
        });
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

    useEffect(() => {
        console.log("hello");
    }, [currentQuestion]);

    const findcurrentanswer = () => {
        let jawaban;
        jawaban = answers
            .filter((answerObj) => answerObj.tipetest === currentTipeTest)[0]
            .questions.filter(
                (ans) => ans.id === currentQuestionGroup[currentQuestion].id
            )[0].answer;

        return jawaban;
    };

    const jawabanBetul = (currentOptions) => {
        const highestNilai = Math.max(
            ...currentOptions.map((option) => option.nilai)
        );

        const highestOptionObject = currentOptions.find(
            (option) => option.nilai === highestNilai
        );

        return highestOptionObject;
    };

    console.log(
        "jwb:",
        jawabanBetul(currentQuestionGroup[currentQuestion].options)
    );

    return (
        <div className="relative">
            <div className="flex w-full absolute h-32 bg-secondary rounded-b-[100px]"></div>
            <div className="max-w-7xl flex m-auto">
                <div>
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
                                {currentQuestionGroup[
                                    currentQuestion
                                ].options.map((choice, index) => {
                                    const isCorrect =
                                        choice.Alias ===
                                        jawabanBetul(
                                            currentQuestionGroup[
                                                currentQuestion
                                            ].options
                                        ).Alias;
                                    const isUserAnswer =
                                        choice.Alias === findcurrentanswer();

                                    return (
                                        <li
                                            key={choice.Alias}
                                            className={`h-auto w-full p-2 rounded-lg cursor-pointer flex items-center gap-x-3 ${
                                                isUserAnswer && isCorrect
                                                    ? "bg-green-700 text-white" // User's correct answer
                                                    : isUserAnswer && !isCorrect
                                                    ? "bg-red-700 text-white" // User's incorrect answer
                                                    : isCorrect
                                                    ? "bg-green-500 text-white" // The correct answer (not chosen by user)
                                                    : "bg-blue-gray-200/30 text-black" // Other choices
                                            }`}
                                        >
                                            <p>
                                                {`${String.fromCharCode(
                                                    97 +
                                                        parseInt(
                                                            choice.Alias,
                                                            10
                                                        )
                                                ).toUpperCase()}.`}
                                            </p>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: choice.option,
                                                }}
                                            ></p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="relative contsoal flex-1 p-10 rounded-xl shadow-xl bg-white mt-4">
                        <h2 className="font-semibold">
                            Pembahasan Soal Nomor {currentQuestion + 1}
                        </h2>
                        {currentTipeTest === "3" ? (
                            <table>
                                <tr className="bg-tertiary/30 rounded-md">
                                    <th className="p-2 border-2 border-tertiary/30">
                                        Opsi
                                    </th>
                                    <th className="p-2 border-2 border-tertiary/30">
                                        Nilai
                                    </th>
                                </tr>
                                {currentQuestionGroup[
                                    currentQuestion
                                ].options.map((option, index) => (
                                    <tr
                                        className={`${
                                            option.Alias ===
                                            jawabanBetul(
                                                currentQuestionGroup[
                                                    currentQuestion
                                                ].options
                                            ).Alias
                                                ? "bg-green-700/40"
                                                : ""
                                        }`}
                                    >
                                        <td className="text-center border-2 border-secondary/30">
                                            {String.fromCharCode(
                                                97 + parseInt(option.Alias, 10)
                                            ).toUpperCase()}
                                        </td>
                                        <td className="text-center border-2 border-secondary/30">
                                            {option.nilai}
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        ) : (
                            <p></p>
                        )}
                        <h5
                            className="soal my-5"
                            dangerouslySetInnerHTML={{
                                __html: currentQuestionGroup[currentQuestion]
                                    .pembahasan,
                            }}
                        ></h5>
                        <div className="mt-10">
                            <span className="px-3 bg-green-600 py-2 rounded-md text-white">
                                {`Jawaban betul ${String.fromCharCode(
                                    97 +
                                        parseInt(
                                            jawabanBetul(
                                                currentQuestionGroup[
                                                    currentQuestion
                                                ].options
                                            ).Alias,
                                            10
                                        )
                                ).toUpperCase()}`}
                            </span>
                        </div>
                        <div className="pilihan h-auto">
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
                </div>
                <div className="relative z-30 sisikanan w-autoflex min-w-72 flex-col pt-0 px-4 pb-4 mt-14">
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

                                    const getAnswerStatus = () => {
                                        if (!currentAnswerObj)
                                            return "unanswered";

                                        const currentjwb =
                                            currentAnswerObj.questions.find(
                                                (ans) =>
                                                    ans.id ===
                                                    currentQuestionGroup[i].id
                                            );

                                        if (
                                            !currentjwb ||
                                            currentjwb.answer === null
                                        ) {
                                            return "unanswered";
                                        }

                                        const correctAnswer = jawabanBetul(
                                            currentQuestionGroup[i].options
                                        ).Alias;

                                        return currentjwb.answer ===
                                            correctAnswer
                                            ? "correct"
                                            : "incorrect";
                                    };

                                    const answerStatus = getAnswerStatus();

                                    return (
                                        <button
                                            key={i + 1}
                                            className={`number-div p-2 hover:scale-105 ${
                                                answerStatus === "correct"
                                                    ? "bg-green-500"
                                                    : answerStatus ===
                                                      "incorrect"
                                                    ? "bg-red-500"
                                                    : "bg-gray-300"
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
export default Pembahasan;
