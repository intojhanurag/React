import React from "react";
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact=()=>{
    return (
        <section className="c-wrapper">

            <div className="paddings innerWidth flexCenter c-container">

                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to Contact us</span>
                    <span className="secondaryText">We always ready to help by providing the best service for you. We believe a good
                        <br /> blace to live can make your life better </span>
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>

                                    </div>
                                    <div className="flexColStart detail">

                                        <span className="primaryText">Call</span>
                                        <span>021 123 145 14</span>
                                    

                                    </div>


                                    <div className="flexCenter button">Call now</div>
                                </div>
                                


                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>

                                    </div>
                                    <div className="flexColStart detail">

                                        <span className="primaryText">Chat</span>
                                        <span>021 123 145 14</span>
                                    

                                    </div>


                                <div className="flexCenter button">Call now</div>
                            </div>
                                


                            </div>

                        </div>

                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>

                                    </div>
                                    <div className="flexColStart detail">

                                        <span className="primaryText">Video Call</span>
                                        <span>021 123 145 14</span>
                                    

                                    </div>


                                    <div className="flexCenter button">Video Call now</div>
                                </div>
                                


                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>

                                    </div>
                                    <div className="flexColStart detail">

                                        <span className="primaryText">Message</span>
                                        <span>021 123 145 14</span>
                                    

                                    </div>


                                <div className="flexCenter button">Messege now</div>
                            </div>
                                


                            </div>

                        </div>

                    </div>
                </div>

                <div className="c-right">
                    <div className="image-container">

                        <img src="./contact.jpg" alt="" />

                    </div>

                </div>

            </div>


        </section>
    )
}

export default Contact