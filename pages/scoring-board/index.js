import styles from '../../styles/scoring.module.css'

const ScoringBoard = () => {
    return (
        <div className={`${styles.boardWrapper} bg-red-200`}>
            <div className={`${styles.board}`}>
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
                            <div className={`${styles.scoreWrapper} blue flex flex-grow`}>
                                <div className={`${styles.penalties} bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 w-1/5`}>
                                    <div className="flex flex-wrap w-full py-2">
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-orange-400`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-orange-400`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-orange-400`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.score} font-bold text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 flex-grow flex justify-center items-center`}>
                                    100
                                </div>
                            </div>
                            <div className={`${styles.scoreFooter} bg-blue-900 font-semibold px-3 py-2 text-white flex flex-col`}>
                                GAMJEUM:
                                <div className="gamjeumPoint">3</div>
                            </div>
                        </div>




                        <div className={`${styles.timer} bg-black text-white text-center`}>asd</div>


                        <div className="flex flex-col">
                            <div className={`${styles.scoreWrapper} red flex flex-grow`}>
                                <div className={`${styles.score} font-bold text-white bg-gradient-to-r from-red-900 via-red-700 to-red-900 flex-grow flex justify-center items-center`}>
                                    100
                                </div>
                                <div className={`${styles.penalties} bg-gradient-to-b from-red-900 via-red-800 to-red-900 w-1/5`}>
                                    <div className="flex flex-wrap w-full py-2">
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-orange-400`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-orange-400`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-orange-400`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
                                            <div className={`${styles.contentGamjum} bg-black`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.scoreFooter} bg-blue-900 font-semibold px-3 py-2 text-white flex flex-col items-end`}>
                                GAMJEUM:
                                <div className="gamjeumPoint">3</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoringBoard;