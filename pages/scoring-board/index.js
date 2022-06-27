import { useEffect, useState } from 'react';
import styles from '../../styles/Scoring.module.css'
import { FaCog, FaMinus, FaPlus } from 'react-icons/fa'
import SettingScores from '../../components/SettingScores';

const ScoringBoard = () => {
    const [settings, setSettings] = useState(false)
    const [scoreBlue, setScoreBlue] = useState(0)
    const [scoreRed, setScoreRed] = useState(0)
    const [gamjeumRed, setGamjeumRed] = useState(0)
    const [gamjeumBlue, setGamjeumBlue] = useState(0)
    const [timeSecond, setTimeSecond] = useState(30)
    const [timeMinute, setTimeMinute] = useState(1)
    const [intervalId, setIntervalId] = useState(false);
    const [confirmStop, setConfirmStop] = useState(false);
    const [loading, setLoading] = useState(true);

    const RedGamjeums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const BlueGamjeums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        if (timeSecond < 0) {
            if (timeMinute > 0) {
                setTimeSecond(59)
                setTimeMinute(prevTimeMinute => prevTimeMinute - 1);
            } else {
                resetTimer()
            }
        }
    }, [timeSecond])
    console.log("setting",settings)
    useEffect(() => {
        function onKeyup(e) {
            console.log("testeer", e.key, settings)
            if (e.key == " " && !settings) {
                console.log("space", settings)
                handleClick() 
            }
            if (e.key == "Escape") {
                if (intervalId && intervalId !== "pause") {
                    clearInterval(intervalId);
                    setIntervalId("pause");
                }
                setSettings(prevSettings => !prevSettings)
            }
        }
        window.addEventListener('keyup', onKeyup)
        return () => window.removeEventListener('keyup', onKeyup)
    }, [intervalId, settings]);

    const handleClick = () => {
        if (intervalId && intervalId !== "pause") {
            clearInterval(intervalId);
            setIntervalId("pause");
            return;
        }

        const newIntervalId = setInterval(() => {
            setTimeSecond(prevTimeSecond => prevTimeSecond - 1);
        }, 1000);
        setIntervalId(newIntervalId);
        setLoading(false)
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        setTimeSecond(60)
        setTimeMinute(2)
        setIntervalId(false);
    }

    const confirmToStop = () => {
        setConfirmStop(true)
    }

    const stopMatch = () => {
        setConfirmStop(false)
        resetTimer()
        setScoreBlue(0)
        setScoreRed(0)
        setGamjeumBlue(0)
        setGamjeumRed(0)
    }

    return (
        <div className={`${styles.boardWrapper} bg-black`}>
            <div className={`${styles.board}`}>
                <div className="absolute top-2 right-1 text-white opacity-10 hover:opacity-80 cursor-pointer z-10"
                    onClick={() => setSettings(!settings)}
                >
                    <FaCog className={`${styles.cogIcon}`} />
                </div>
                <div className={`${styles.content} bg-blue-200 flex-col`}>
                    <div className={`${styles.classCategory} bg-black text-white font-bold text-center`}>
                        U-58
                    </div>
                    <div className="contestants flex w-100">
                        <div className={`${styles.contestant} blue w-1/2 bg-blue-900 text-white uppercase font-bold`}>
                            <div className={`${styles.contingent} text-center`}>China</div>
                            <div className={`${styles.name} text-center`}>Hengky</div>
                        </div>
                        <div className={`${styles.contestant} red w-1/2 bg-red-800 text-white uppercase font-bold`}>
                            <div className={`${styles.contingent} text-center`}>Thailand</div>
                            <div className={`${styles.name} text-center`}>Ryuichi</div>
                        </div>
                    </div>
                    <div className={`${styles.scores} flex-grow flex w-100`}>
                        <div className="flex flex-col">
                            <div className={`${styles.scoreWrapper} blue flex flex-grow relative`}>
                                <div className={`${styles.penalties} bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 w-1/5`}>
                                    <div className="flex flex-wrap w-full py-2">
                                        {RedGamjeums.map((item, index) => (
                                            <div key={index} className={`${styles.gamjum} w-1/2 h-1/5`}>
                                                <div className={`${styles.contentGamjum} ${item <= gamjeumBlue ? "bg-orange-400" : "bg-black"}`}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`${styles.score} font-bold text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 flex-grow flex justify-center items-center`}>
                                    {scoreBlue}
                                </div>
                                {settings &&
                                    <div className="absolute bottom-0 w-full bg-gray-300 flex opacity-50 select-none">
                                        <SettingScores
                                            blue
                                            score={scoreBlue}
                                            setScore={setScoreBlue}
                                            gamjeum={gamjeumBlue}
                                            setGamjeum={setGamjeumBlue}
                                        />
                                    </div>
                                }
                            </div>
                            <div className={`${styles.scoreFooter} bg-blue-900 font-semibold px-3 py-2 text-white flex flex-col`}>
                                GAMJEUM:
                                <div className="gamjeumPoint">{gamjeumBlue}</div>
                            </div>
                        </div>




                        <div className={`${styles.timerWrapper} flex flex-col bg-black text-center`}>
                            <div className={`${styles.timerTitle} text-white mt-3`}>MATCH</div>
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
                                <div className={`${styles.roundNumber} text-white`}>1</div>
                            </div>
                        </div>



                        <div className="flex flex-col">
                            <div className={`${styles.scoreWrapper} red flex flex-grow relative`}>
                                <div className={`${styles.score} font-bold text-white bg-gradient-to-r from-red-900 via-red-700 to-red-900 flex-grow flex justify-center items-center`}>
                                    {scoreRed}
                                </div>
                                <div className={`${styles.penalties} bg-gradient-to-b from-gray-900 via-red-900 to-gray-900 w-1/5`}>
                                    <div className="flex flex-wrap w-full py-2">
                                        {RedGamjeums.map((item, index) => (
                                            <div key={index} className={`${styles.gamjum} w-1/2 h-1/5`}>
                                                <div className={`${styles.contentGamjum} ${item <= gamjeumRed ? "bg-orange-400" : "bg-black"}`}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {settings &&
                                    <div className="absolute bottom-0 w-full bg-gray-300 flex flex-row-reverse opacity-50 select-none">
                                        <SettingScores
                                            red
                                            score={scoreRed}
                                            setScore={setScoreRed}
                                            gamjeum={gamjeumRed}
                                            setGamjeum={setGamjeumRed}
                                        />
                                    </div>
                                }
                            </div>
                            <div className={`${styles.scoreFooter} bg-red-900 font-semibold px-3 py-2 text-white flex flex-col items-end`}>
                                GAMJEUM:
                                <div className="gamjeumPoint">{gamjeumRed}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {confirmStop && (
                <div className={`${styles.modalWrapper} absolute top-0 left-0 right-0 bottom-0 z-20 flex justify-center items-center`}>
                    <div className="absolute w-full h-full bg-black opacity-50"></div>
                    <div className={`${styles.modalCard} relative bg-white rounded-lg p-4 drop-shadow-2xl`}>
                        <div className={`${styles.modalTitle} text-center font-bold text-gray-800`}>STOP/RESET GAME</div>
                        <div className={`${styles.modalContent} text-center font-bold text-gray-800`}>Are you sure you want to STOP the match?</div>
                        <div className='flex justify-center items-center mt-3'>
                            <div className="py-1 px-4 rounded-md bg-red-600 text-white font-medium mr-3 text-center" style={{ width: "10vw" }} onClick={() => setConfirmStop(false)}>NO</div>
                            <div className="py-1 px-4 rounded-md bg-green-600 text-white font-medium mr-3 text-center" style={{ width: "10vw" }} onClick={() => {
                                stopMatch()
                            }}>YES</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScoringBoard;