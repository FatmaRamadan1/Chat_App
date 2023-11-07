import React from 'react';
import Styles from './topic.module.css';

export default function Topic({ title, icon }) {
    return (
        <div className={Styles.container}>
            <button className={Styles.btn}>
                <div className={Styles.text}>{icon}</div>
                <p className={Styles.p}>{title}</p>
            </button>
        </div>
    )
}
