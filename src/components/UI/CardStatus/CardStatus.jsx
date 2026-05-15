import Styles from "./CardStatus.module.css";

export default function CardStatus() {
    return (
        <>
            <div className={`${Styles.cardStatus} d-flex align-items-center`}>
                <div className={`${Styles.icon} w-100 d-flex align-items-center justify-content-center`}>
                    <i class="fa-solid fa-building"></i>
                </div>

                <div className={`${Styles.info} w-100 d-flex flex-column align-items-center gap-2`}>
                    <span className={`${Styles.counter}`}>30</span>
                    <span className={`${Styles.title}`}>Project</span>
                </div>
            </div>
        </>
    );
}
