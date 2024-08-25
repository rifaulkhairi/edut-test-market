import React, { useEffect, useState } from "react";

const Timer = ({
    initialHours = 0,
    initialMinutes = 0,
    initialSeconds = 0,
    onTimeUp,
}) => {
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else if (hours > 0) {
                    setHours(hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                } else {
                    clearInterval(countdown);
                    onTimeUp();
                }
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [hours, minutes, seconds, onTimeUp]);

    return (
        <div className="waktu shadow-lg rounded-2xl bg-white pt-4">
            <h1 className="font-bold ml-4">Sisa Waktu</h1>
            <div className="waktu grid grid-flow-col pb-4 pt-1 px-4 text-white gap-x-3">
                <div className="jam h-14 w-20 bg-tertiary rounded-lg flex items-center justify-center flex-col">
                    <p className="font-bold text-xl">{hours}</p>
                    <p>Jam</p>
                </div>
                <div className="menit h-14 w-20 bg-tertiary rounded-lg flex items-center justify-center flex-col">
                    <p className="font-bold text-xl">{minutes}</p>
                    <p>Menit</p>
                </div>
                <div className="detik h-14 w-20 bg-tertiary rounded-lg flex items-center justify-center flex-col">
                    <p className="font-bold text-xl">{seconds}</p>
                    <p>Detik</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
