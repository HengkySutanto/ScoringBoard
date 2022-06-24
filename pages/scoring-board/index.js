import { useState } from 'react';
import styles from '../../styles/scoring.module.css'
import { FaCog, FaMinus, FaPlus } from 'react-icons/fa'
import SettingScores from '../../components/SettingScores';

const ScoringBoard = () => {
    const [settings, setSettings] = useState(false)
    const [scoreBlue, setScoreBlue] = useState(0)
    const [scoreRed, setScoreRed] = useState(0)
    const [gamjeumRed, setGamjeumRed] = useState(0)
    const [gamjeumBlue, setGamjeumBlue] = useState(0)

    const RedGamjeums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const BlueGamjeums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className={`${styles.boardWrapper} bg-red-200`}>
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
                                <div className={`${styles.penalties} bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 w-1/5`}>
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
                                    <SettingScores
                                        score={scoreBlue}
                                        setScore={setScoreBlue}
                                    />
                                    // <div className="absolute bottom-0 w-full bg-gray-300 flex opacity-50">
                                    //     <div className='w-1/2 text-center py-3' style={{ borderRight: "solid 2px gray", marginRight: "-2px" }}>
                                    //         <div className={`${styles.settingTitle} font-bold`}>GAMJEUM</div>
                                    //         <div className="min-add flex w-full my-2 text-gray-500">
                                    //             <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                                    //                 onClick={() => gamjeumBlue > 0 && setGamjeumBlue(gamjeumBlue - 1)}
                                    //             ><FaMinus /></div>
                                    //             <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                                    //                 onClick={() => gamjeumBlue < 10 && setGamjeumBlue(gamjeumBlue + 1)}
                                    //             ><FaPlus /></div>
                                    //         </div>
                                    //     </div>
                                    //     <div className='w-1/2 text-center py-3'>
                                    //         <div className={`${styles.settingTitle} font-bold`}>SCORE</div>
                                    //         <div className="min-add flex w-full my-2 text-gray-500">
                                    //             <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                                    //                 onClick={() => scoreBlue > 0 && setScoreBlue(scoreBlue - 1)}
                                    //             ><FaMinus /></div>
                                    //             <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                                    //                 onClick={() => setScoreBlue(scoreBlue + 1)}
                                    //             ><FaPlus /></div>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                }
                            </div>
                            <div className={`${styles.scoreFooter} bg-blue-900 font-semibold px-3 py-2 text-white flex flex-col`}>
                                GAMJEUM:
                                <div className="gamjeumPoint">{gamjeumBlue}</div>
                            </div>
                        </div>




                        <div className={`${styles.timerWrapper} flex flex-col bg-black text-center`}>
                            <div className="title text-white">MATCH</div>
                            <div className={`${styles.timer} my-auto py-3 font-bold bg-yellow-300`}>
                                2:00
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
                                <div className={`${styles.penalties} bg-gradient-to-b from-red-900 via-red-800 to-red-900 w-1/5`}>
                                    <div className="flex flex-wrap w-full py-2">
                                        {RedGamjeums.map((item, index) => (
                                            <div key={index} className={`${styles.gamjum} w-1/2 h-1/5`}>
                                                <div className={`${styles.contentGamjum} ${item <= gamjeumRed ? "bg-orange-400" : "bg-black"}`}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {settings &&
                                    <div className="absolute bottom-0 w-full bg-gray-300 flex opacity-50">
                                        <div className='w-1/2 text-center py-3'>
                                            <div className={`${styles.settingTitle} font-bold`}>SCORE</div>
                                            <div className="min-add flex w-full my-2 text-gray-500">
                                                <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                                                    onClick={() => scoreRed > 0 && setScoreRed(scoreRed - 1)}
                                                ><FaMinus /></div>
                                                <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                                                    onClick={() => setScoreRed(scoreRed + 1)}
                                                ><FaPlus /></div>
                                            </div>
                                        </div>
                                        <div className='w-1/2 text-center py-3' style={{ borderLeft: "solid 2px gray", marginLeft: "-2px" }}>
                                            <div className={`${styles.settingTitle} font-bold`}>GAMJEUM</div>
                                            <div className="min-add flex w-full my-2 text-gray-500">
                                                <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                                                    onClick={() => gamjeumRed > 0 && setGamjeumRed(gamjeumRed - 1)}
                                                ><FaMinus /></div>
                                                <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                                                    onClick={() => gamjeumRed < 10 && setGamjeumRed(gamjeumRed + 1)}
                                                ><FaPlus /></div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className={`${styles.scoreFooter} bg-blue-900 font-semibold px-3 py-2 text-white flex flex-col items-end`}>
                                GAMJEUM:
                                <div className="gamjeumPoint">{gamjeumRed}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoringBoard;