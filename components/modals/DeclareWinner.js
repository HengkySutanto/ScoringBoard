import styles from '../../styles/Scoring.module.css'

const DeclareWinner = ({ scoreBlue, scoreRed, gamjeumBlue, gamjeumRed, setShowDeclareWinnerModal, closeDeclareWinnerModal }) => {
    return (
        <div className={`${styles.modalWrapper} absolute top-0 left-0 right-0 bottom-0 z-20 flex justify-center items-center`}>
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className={`${styles.modalCard} ${scoreBlue > scoreRed ? "bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900" : scoreBlue < scoreRed ? "bg-gradient-to-b from-red-900 via-red-700 to-red-900" : "bg-gradient-to-b from-green-900 via-green-700 to-green-900"} relative text-white rounded-3xl border border-4 border-gray-300 p-4 drop-shadow-2xl`}>
                <div className={`${styles.modalTitleWinner} text-center font-bold`}>{scoreBlue > scoreRed ? "BLUE" : "RED"}</div>
                <div className={`${styles.modalContentWinner} text-center font-bold`}>WINNER</div>
                <div className='flex justify-center items-center mt-8'>
                    <div className="py-1 px-4 rounded-md bg-red-600  hover:bg-red-700 text-white font-medium mr-3 text-center cursor-pointer" style={{ minWidth: "10vw" }} onClick={() => setShowDeclareWinnerModal(false)}>CANCEL</div>
                    <div className="py-1 px-4 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium mr-3 text-center cursor-pointer" style={{ minWidth: "10vw" }} onClick={() => {
                        closeDeclareWinnerModal()
                    }}>OK</div>
                </div>
            </div>
        </div>
    );
};

export default DeclareWinner;