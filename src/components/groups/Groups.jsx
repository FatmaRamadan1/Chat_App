import React from 'react';
import Styles from './groups.module.css';
import img1 from "../../photos/img1.png";
import img2 from "../../photos/img2.png";
import img3 from "../../photos/img3.png";
import img4 from "../../photos/img4.png";
import dc from "../../photos/dc.png";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";



export default function Groups() {
    // const groups = [img1, img2, img3, img4, img1];
    return (
        <div className={Styles.container}>
            <div className={Styles.groups}>
                <Link to='/'>
                <div className={Styles.discord}>
                <img
                src={dc}
                className={Styles.discord_img} alt=""/>
                </div>
                </Link>
                {/* <div className={Styles.compass}>
                    <AiFillCompass className={Styles.ai_compass} />
                </div> */}
                <div className={Styles.group}>
                    <img className={Styles.img} src={img1} alt=''/>
                    <img className={Styles.img} src={img2} alt=''/>
                    <img className={Styles.img} src={img3} alt=''/>
                    <img className={Styles.img} src={img4} alt=''/>
                </div>
                <div className={Styles.plus}>
                    <FiPlus className={Styles.fi_plus} />
                </div>
            </div>
        </div>
    )
}
