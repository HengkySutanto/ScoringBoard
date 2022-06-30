import { useEffect, useState } from 'react';
import styles from '../../styles/Scoring.module.css'
import { FaCog, FaMinus, FaPlus } from 'react-icons/fa'
import SettingScores from '../../components/SettingScores';
import ConfirmStop from '../../components/modals/ConfirmStop';
import Gamjeums from '../../components/Gamjeums';
import RoundTimer from '../../components/RoundTimer';
import NextRound from '../../components/modals/NextRound';
import DeclareWinner from '../../components/modals/DeclareWinner';
import DeclaredAsWinner from '../../components/modals/DeclaredAsWinner';

const ScoringBoard = () => {
    const [settings, setSettings] = useState(false)
    const [round, setRound] = useState(1)
    const [scoreBlue, setScoreBlue] = useState(0)
    const [scoreRed, setScoreRed] = useState(0)
    const [gamjeumRed, setGamjeumRed] = useState(0)
    const [gamjeumBlue, setGamjeumBlue] = useState(0)
    const [timeSecond, setTimeSecond] = useState(10)
    const [timeMinute, setTimeMinute] = useState(0)
    const [intervalId, setIntervalId] = useState(false);
    const [confirmStop, setConfirmStop] = useState(false);
    const [showNextRoundModal, setShowNextRoundModal] = useState(false);
    const [showDeclareWinnerModal, setShowDeclareWinnerModal] = useState(false);
    const [declaredAsWinner, setDeclaredAsWinner] = useState("");
    const [showDeclareAsWinnerModal, setShowDeclareAsWinnerModal] = useState(false);

    const gamjeumsCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        if (timeSecond < 0) {
            if (timeMinute > 0) {
                setTimeSecond(59)
                setTimeMinute(prevTimeMinute => prevTimeMinute - 1);
            } else {
                resetTimer()
                if (round < 3) {
                    show_NextRoundModal()
                } else {
                    declareWinner()
                }
            }
        }
    }, [timeSecond])

    useEffect(() => {
        function onKeyup(e) {
            // START/PAUSE TIMER
            if (e.key == " " && !settings) {
                handleClick()
            }

            // OPEN SETTINGS
            if (e.key == "Escape" && !confirmStop) {
                pauseTimer()
                setSettings(prevSettings => !prevSettings)
            }

            // ADD POINTS TO CONTESTANTS
            if (!confirmStop && !settings && intervalId && intervalId !== "pause") {
                // ADD TO BLUE POINTS
                if (e.key.toLowerCase() == "f") {
                    addPoints("blue", 1)
                }
                if (e.key.toLowerCase() == "d") {
                    addPoints("blue", 2)
                }
                if (e.key.toLowerCase() == "s") {
                    addPoints("blue", 3)
                }
                if (e.key.toLowerCase() == "e") {
                    addPoints("blue", 4)
                }

                // ADD TO RED POINTS
                if (e.key.toLowerCase() == "j") {
                    addPoints("red", 1)
                }
                if (e.key.toLowerCase() == "k") {
                    addPoints("red", 2)
                }
                if (e.key.toLowerCase() == "l") {
                    addPoints("red", 3)
                }
                if (e.key.toLowerCase() == "i") {
                    addPoints("red", 4)
                }
            }
        }
        window.addEventListener('keyup', onKeyup)
        return () => window.removeEventListener('keyup', onKeyup)
    }, [intervalId, settings, confirmStop]);

    const openSettings = () => {
        if (!confirmStop) {
            pauseTimer()
            setSettings(prevSettings => !prevSettings)
        }
    }

    const pauseTimer = () => {
        if (intervalId && intervalId !== "pause") {
            clearInterval(intervalId);
            setIntervalId("pause");
        }
    }

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
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        setTimeSecond(30)
        setTimeMinute(1)
        setIntervalId(false);
    }

    const confirmToStop = () => {
        setConfirmStop(true)
    }

    const stopMatch = () => {
        setConfirmStop(false)
        resetMatch()
    }

    const addPoints = (contestant, point) => {
        if (contestant == "blue") {
            setScoreBlue(prevScoreBlue => prevScoreBlue + point)
        }
        if (contestant == "red") {
            setScoreRed(prevScoreRed => prevScoreRed + point)
        }
    }

    const show_NextRoundModal = () => {
        setShowNextRoundModal(true)
    }

    const continueNextRound = () => {
        setRound(prevRound => prevRound + 1)
        setShowNextRoundModal(false)
    }

    const declareWinner = () => {
        setShowDeclareWinnerModal(true)
    }

    const declareAsWinner = (winner) => {
        setShowDeclareAsWinnerModal(true)
        setDeclaredAsWinner(winner)
    }

    const closeDeclareWinnerModal = () => {
        setShowDeclareWinnerModal(false)
        resetMatch()
    }

    const closeDeclareAsWinnerModal = () => {
        setShowDeclareAsWinnerModal(false)
        resetMatch()
    }

    const resetMatch = () => {
        resetTimer()
        setScoreBlue(0)
        setScoreRed(0)
        setGamjeumBlue(0)
        setGamjeumRed(0)
        setRound(1)
    }

    return (
        <div className={`${styles.boardWrapper} bg-black`}>
            <div className={`${styles.board}`}>
                <div className="absolute top-2 right-1 text-white opacity-10 hover:opacity-80 cursor-pointer z-10"
                    onClick={() => openSettings()}
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
                                <div className={`${styles.penalties} bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 w-1/6`}>
                                    <div className="flex flex-wrap w-full py-2">
                                        {gamjeumsCounter.map((item, index) => (
                                            <Gamjeums key={index}
                                                item={item}
                                                gamjeums={gamjeumBlue}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className={`${styles.score} font-bold text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 flex-grow flex justify-center items-center relative`}>
                                    {settings &&
                                        <div className="absolute top-0 w-full text-center text-xl py-3 bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 hover:via-gray-300 hover:to-gray-500 cursor-pointer opacity-40 hover:opacity-80 text-black" onClick={() => declareAsWinner("blue")}>Declare as Winner</div>
                                    }
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

                        <RoundTimer
                            intervalId={intervalId}
                            timeSecond={timeSecond}
                            timeMinute={timeMinute}
                            handleClick={handleClick}
                            confirmToStop={confirmToStop}
                            round={round}
                            declareWinner={declareWinner}
                            settings={settings}
                            resetMatch={resetMatch}
                        />

                        <div className="flex flex-col">
                            <div className={`${styles.scoreWrapper} red flex flex-grow relative`}>
                                <div className={`${styles.score} font-bold text-white bg-gradient-to-r from-red-900 via-red-700 to-red-900 flex-grow flex justify-center items-center relative`}>
                                    {settings &&
                                        <div className="absolute top-0 w-full text-center text-xl py-3 bg-gradient-to-r from-gray-500 via-gray-500 to-gray-500 hover:via-gray-300 hover:to-gray-500 cursor-pointer opacity-40 hover:opacity-80 text-black" onClick={() => declareAsWinner("red")}>Declare as Winner</div>
                                    }
                                    {scoreRed}
                                </div>
                                <div className={`${styles.penalties} bg-gradient-to-b from-gray-900 via-red-900 to-gray-900 w-1/6`}>
                                    <div className="flex flex-wrap w-full py-2">
                                        {gamjeumsCounter.map((item, index) => (
                                            <Gamjeums key={index}
                                                item={item}
                                                gamjeums={gamjeumRed}
                                            />
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
                <ConfirmStop
                    stopMatch={stopMatch}
                    setConfirmStop={setConfirmStop}
                />
            )}
            {showNextRoundModal && (
                <NextRound
                    round={round}
                    // showNextRoundModal={showNextRoundModal}
                    setShowNextRoundModal={setShowNextRoundModal}
                    continueNextRound={continueNextRound}
                />
            )}
            {showDeclareWinnerModal && (
                <DeclareWinner
                    scoreBlue={scoreBlue}
                    scoreRed={scoreRed}
                    gamjeumBlue={gamjeumBlue}
                    gamjeumRed={gamjeumRed}
                    setShowDeclareWinnerModal={setShowDeclareWinnerModal}
                    closeDeclareWinnerModal={closeDeclareWinnerModal}
                />
            )}
            {showDeclareAsWinnerModal && (
                <DeclaredAsWinner
                    declaredAsWInner={declaredAsWinner}
                    setShowDeclareAsWinnerModal={setShowDeclareAsWinnerModal}
                    closeDeclareWinnerModal={closeDeclareAsWinnerModal}
                />
            )}
        </div>
    );
};

export default ScoringBoard;