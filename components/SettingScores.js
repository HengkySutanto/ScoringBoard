import { useState } from 'react';
import styles from '../styles/Scoring.module.css'
import { FaCog, FaMinus, FaPlus } from 'react-icons/fa'

const SettingScores = ({ score, setScore, gamjeum, setGamjeum, blue, red }) => {

    return (
        <>
            <div className='w-1/2 text-center py-3' style={{
                borderRight: blue && "solid 2px gray",
                marginRight: blue && "-2px",
                borderLeft: red && "solid 2px gray",
                marginLeft: red && "-2px"
            }}>
                <div className={`${styles.settingTitle} font-bold`}>GAMJEUM</div>
                <div className="min-add flex w-full my-2 text-gray-500">
                    <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                        onClick={() => gamjeum > 0 && setGamjeum(gamjeum - 1)}
                    ><FaMinus /></div>
                    <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                        onClick={() => gamjeum < 10 && setGamjeum(gamjeum + 1)}
                    ><FaPlus /></div>
                </div>
            </div>
            <div className='w-1/2 text-center py-3'>
                <div className={`${styles.settingTitle} font-bold`}>SCORE</div>
                <div className="min-add flex w-full my-2 text-gray-500">
                    <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                        onClick={() => score > 0 && setScore(score - 1)}
                    ><FaMinus /></div>
                    <div className="min w-1/2 flex justify-center cursor-pointer hover:text-black"
                        onClick={() => setScore(score + 1)}
                    ><FaPlus /></div>
                </div>
            </div>
        </>
    );
};

export default SettingScores;