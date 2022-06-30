import styles from '../../styles/Scoring.module.css'

const NextRound = ({ round, setShowNextRoundModal, continueNextRound }) => {
    return (
        <div className={`${styles.modalWrapper} absolute top-0 left-0 right-0 bottom-0 z-20 flex justify-center items-center`}>
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className={`${styles.modalCard} relative bg-white rounded-lg p-4 drop-shadow-2xl`}>
                <div className={`${styles.modalTitle} text-center font-bold text-gray-800`}>ROUND {round} IS OVER!</div>
                <div className={`${styles.modalContent} text-center font-bold text-gray-800`}>GO TO NEXT ROUND?</div>
                <div className='flex justify-center items-center mt-3'>
                    <div className="py-1 px-4 rounded-md bg-red-600  hover:bg-red-700 text-white font-medium mr-3 text-center cursor-pointer" style={{ minWidth: "10vw" }} onClick={() => setShowNextRoundModal(false)}>NO</div>
                    <div className="py-1 px-4 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium mr-3 text-center cursor-pointer" style={{ minWidth: "10vw" }} onClick={() => {
                        continueNextRound()
                    }}>YES</div>
                </div>
            </div>
        </div>
    );
};

export default NextRound;