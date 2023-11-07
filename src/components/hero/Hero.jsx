import React from 'react';
import Styles from './hero.module.css';
import hero from "../../photos/hero2.webp";
import { FiSearch } from "react-icons/fi";



export default function Hero() {
    return (
        <div className={Styles.container}>
            <div className={Styles.background}>
                <img
                src={hero}
                className={Styles.background_img} alt=""/>
            </div>
            <div className={Styles.overlay}></div>
            <div className={Styles.search}>
                <p className={Styles.search_p}>
                    Find your community on Discord
                </p>
                <p className={Styles.search_text}>
                    From gaming, to music, to study, there's a place for you.
                </p>
                <div className={Styles.input}>
                <input
                    type="search "
                    placeholder="Explore servers"
                    className={Styles.input_search}
                />
                <FiSearch className={Styles.fisearch} />
                </div>
            </div>
        </div>
    )
}
