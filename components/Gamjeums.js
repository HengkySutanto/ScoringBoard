import styles from '../styles/Scoring.module.css'

const Gamjeums = ({ item, gamjeums }) => {
    return (
        <div className={`${styles.gamjum} w-1/2 h-1/5`}>
            <div className={`${styles.contentGamjum} ${item <= gamjeums ? "bg-orange-400" : "bg-black"}`}></div>
        </div>
    );
};

export default Gamjeums;