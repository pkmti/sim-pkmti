import { useState, useEffect } from "react";
import { InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function Toast({ id, content }) {
    const toastEl = document.getElementById(id);

    const time = 300;
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            if (remainingTime > 0) {
                setRemainingTime((prevTime) => prevTime - 1);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [remainingTime]);

    const closeToast = () => {
        if (toastEl) toastEl.remove();
    };

    const progress = ((time - remainingTime) / time) * 100;

    if (progress == 100) closeToast();

    return (
        <div
            id={id}
            className="toast lg:toast-top lg:toast-end toast-bottom toast-center z-50"
        >
            <div role="alert" className="alert alert-info">
                <InformationCircleIcon className="h-6 w-6 hidden lg:block" />

                <div className="me-10">
                    <h3 className="font-bold text-left">Informasi</h3>
                    <div className="text-xs text-left">{content}</div>
                    <progress
                        className="progress w-56 progress-secondary"
                        value={progress}
                        max="100"
                    ></progress>
                </div>

                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5"
                    onClick={() => closeToast()}
                >
                    <XCircleIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}
