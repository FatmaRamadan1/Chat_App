import React from 'react';
import Styles from './featured.module.css';
import picture2 from "../../photos/lmfao.jpg";
import Card from "../card/Card";
import bg2 from "../../photos/bg02.jpg";
import bg3 from "../../photos/bg03.jpg";
import bg4 from "../../photos/bg04.jpg";
import { Link } from "react-router-dom";

export default function Featured() {
    const cards = [
            {
                bg: bg2,
                profile: picture2,
                title: "Fire Emblem Heroes",
                description:
                    "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
                size: <p>85,532 Online &#x2022; 232,061 Members</p>,
            },
            {
                bg: bg3,
                profile: picture2,
                title: "Fire Emblem Heroes",
                description:
                    "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
                size: <p>85,532 Online &#x2022; 232,061 Members</p>,
            },
            {
                bg: bg4,
                profile: picture2,
                title: "Fire Emblem Heroes",
                description:
                    "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
                size: <p>85,532 Online &#x2022; 232,061 Members</p>,
            },
            {
                bg: bg2,
                profile: picture2,
                title: "Fire Emblem Heroes",
                description:
                "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
                size: <p>85,532 Online &#x2022; 232,061 Members</p>,
            },
            {
                bg: bg3,
                profile: picture2,
                title: "Fire Emblem Heroes",
                description:
                    "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
                size: <p>85,532 Online &#x2022; 232,061 Members</p>,
            },

    ];
    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <p className={Styles.text_p}>Featured Servers</p>
                <p className={Styles.P}>
                    Some awesome Discords we think you'd love
                </p>
            </div>

            <div className={Styles.card}>
                {cards.map((card) => (
                <Link to="/card">
                    <Card
                    bg={card.bg}
                    profile={card.profile}
                    title={card.title}
                    description={card.description}
                    size={card.size}
                    key={card.description}
                    />{" "}
                </Link>
                ))}
            </div>
        </div>

    )
}
