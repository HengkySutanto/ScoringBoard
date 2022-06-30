import styles from '../styles/Scoring.module.css'

const RoundTimer = ({ intervalId, timeSecond, timeMinute, handleClick, confirmToStop, round, settings, resetMatch }) => {
    return (
        <div className={`${styles.timerWrapper} flex flex-col bg-black text-center`}>
            <div className={`${styles.timerTitle} ${settings && "bg-gray-700 hover:bg-gray-500 cursor-pointer font-medium hover:font-bold"} text-white py-1 mb-2`} onClick={() => settings && resetMatch()}>{settings ? "RESET" : "MATCH"}</div>
            <div className={`${styles.startStop} opacity-0 hover:opacity-100 text-white flex justify-center`}>
                <div className={`${intervalId && intervalId == "pause" ? "bg-blue-900" : "bg-green-900"} start w-1/2 grow cursor-pointer`} onClick={handleClick}>
                    {intervalId ? intervalId !== "pause" ? "PAUSE" : "RESUME" : "START"}
                </div>
                {intervalId && intervalId == "pause" ?
                    <div className="stop w-1/2 bg-orange-700 cursor-pointer" onClick={confirmToStop}>STOP</div>
                    : null}
            </div>
            <div className={`${styles.timer} mt-5 mb-auto py-3 font-bold bg-yellow-300`}>
                {timeMinute > 0 && timeMinute + ":"}{timeSecond == 60 ? "00" : timeSecond < 10 ? "0" + timeSecond : timeSecond}
            </div>
            <div className={`${styles.round} mt-3 mb-5 text-white`}>
                <div className={`${styles.roundTitle} text-white`}>ROUND</div>
                <div className={`${styles.roundNumber} text-white`}>{round}</div>
            </div>
        </div>
    );
};

export default RoundTimer;