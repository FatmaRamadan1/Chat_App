import React from 'react';
import Styles from './chat.module.css';


export default function Chat() {
    return (
        <div className="container-fluid ">
            <div className={Styles.card +" "+ "mx-auto"} >
                <div className="card-header bg-transparent">
                    <div className="navbar navbar-expand p-0">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <a href="#!" className={Styles.nav_link}>
                                <div
                                    className="position-relative"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                    border: "2px solid #e84118",
                                    padding: 2
                                    }}
                                >
                                    <img
                                    src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                                    className="img-fluid rounded-circle"
                                    alt=""
                                    />
                                    <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                    <span className="visually-hidden">New alerts</span>
                                    </span>
                                </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#!" className="nav-link text-light">
                                Nelh
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="card-body p-4" style={{ height: 500, overflow: "auto" }}>
            <div className="d-flex align-items-baseline mb-4">
            <div className={Styles.avatar + " " + "position-relative "}>
                <img
                    src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                    className="img-fluid rounded-circle"
                    alt=""
                />
            </div>
            <div className="pe-2">
                <div>
                    <div className={Styles.card +" "+ Styles.card_text + "  " + " d-inline-block p-2 px-3 m-1"}>
                        Hi helh, are you available to chat?
                    </div>
                </div>
                <div>
                    <div className="small">01:10PM</div>
                </div>
            </div>
            </div>
            <div className="d-flex align-items-baseline text-end justify-content-end mb-4">
                <div className="pe-2">
                    <div>
                        <div className={Styles.card +" "+ Styles.card_text + "  " +  "d-inline-block p-2 px-3 m-1"}>
                        Sure
                        </div>
                    </div>
                    <div>
                        <div className={Styles.card +" "+ Styles.card_text + "  " +  "d-inline-block p-2 px-3 m-1"}>
                        Let me know when you're available?
                        </div>
                    </div>
                    <div>
                        <div className="small">01:13PM</div>
                    </div>
                </div>
                <div className={Styles.avatar + " " + "position-relative "}    >
                    <img
                        src="https://nextbootstrap.netlify.app/assets/images/profiles/2.jpg"
                        className="img-fluid rounded-circle"
                        alt=""
                    />
                </div>
            </div>
            <div className="d-flex align-items-baseline mb-4">
                <div className={Styles.avatar + " " + "position-relative "} >
                    <img
                        src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                        className="img-fluid rounded-circle"
                        alt=""
                    />
                </div>
            </div>
            <div className="pe-2">
                <div>
                    <div className={Styles.card +" "+ Styles.card_text + "  " + "d-inline-block p-2 px-3 m-1"}>
                        3:00pm??
                    </div>
                </div>
                <div>
                    <div className="small">Edited - 01:13PM</div>
                </div>
            </div>
            </div>
            <div className="d-flex align-items-baseline text-end justify-content-end mb-4">
                    <div className="pe-2">
                        <div>
                            <div className={Styles.card +" "+ Styles.card_text + "  " +  "d-inline-block p-2 px-3 m-1"}>
                                Cool
                            </div>
                        </div>
                    <div>   
                        </div>
                    </div>
                    <div className={Styles.avatar + " " + "position-relative "} >
                    <img
                        src="https://nextbootstrap.netlify.app/assets/images/profiles/2.jpg"
                        className="img-fluid rounded-circle"
                        alt=""
                    />
                    </div>
            </div>
            </div>
            <div className={Styles.card_footer + " " + " position-absolute  bottom-0 m-0 p-1 overflow-auto" }>
                <div className="input-group">
                    <div className="input-group-text bg-transparent border-0">
                        <button className="btn btn-393943 text-light">
                            <i className="fas fa-paperclip" />
                        </button>
                    </div>
                    <input
                        type="text"
                        className={Styles.form_control + " " + " border-0 "}
                        placeholder="Write a message... "
                    />
                    <div className="input-group-text bg-transparent border-0">
                        <button className="btn btn-393943 text-light">
                            <i className="fas fa-smile" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
