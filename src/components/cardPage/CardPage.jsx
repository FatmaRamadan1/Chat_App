import React from 'react';
import Styles from './cardpage.module.css';
import Groups from './../groups/Groups';
import Explore from './../explore/Explore';
import Chat from '../chat/Chat';


export default function CardPage() {
    return (
        <div className={Styles.container}>
            <Groups />
            <Explore />
            <div className={Styles.text}>
                <Chat/>
            </div>
        </div>
    )
}
