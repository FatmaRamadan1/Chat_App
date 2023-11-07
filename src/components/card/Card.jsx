import React from 'react';
import Styles from './card.module.css';

export default function Card({ size, description, title, profile, bg }) {
    return (
        <div className={Styles.container}>
      {/* Banner  */}
        <div className={Styles.banner}>
            <img src={bg} className={Styles.img} alt="" />
        </div>
        <div className={Styles.profile}>
            {/* Profile Pic  */}
            <div className={Styles.profile_pic}>
                <img src={profile} className={Styles.profile_img} alt="" />
            </div>

            {/* Title  */}

            <p className={Styles.title}>{title}</p>

            {/* Description  */}
            <p className={Styles.description}>
                {description}
            </p>
            {/* Size  */}
            <p className={Styles.size}>
                {size}
            </p>
        </div>
    </div>
    )
}
