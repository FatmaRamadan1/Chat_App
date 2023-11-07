import React from 'react';
import Styles from './explore.module.css';
import Topic from "../topic/Topic";
import { AiFillCompass } from "react-icons/ai";
import { GiConsoleController } from "react-icons/gi";


export default function Explore() {
    const topics = [
        { title: "Home", icon: <AiFillCompass /> },
        { title: "Gaming", icon: <GiConsoleController /> },
    ];
    return (
        <div className={Styles.container}>
            <div className={Styles.contain}>
                <p className={Styles.title}>Conversa</p>
                <div className={Styles.topic}>
                    {topics.map((topic) => (
                        <Topic title={topic.title} icon={topic.icon}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
