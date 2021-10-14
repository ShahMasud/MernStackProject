import { React, useEffect, useState, Component } from 'react'
import axios from "axios";
const Contact = ({ history }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);

    const submitHandler = async (e) => {

        e.preventDefault()
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.post(
                "/api/contact/",
                {

                    name,
                    email,
                    subject,
                    message,
                },
                config
            );
            alert("Message Send Successfully ")
            history.push("/Contact");



        } catch (error) {
            setMessage(error.response.data.message);
        }
    };
    return (
        <div>
            <div class="ds_wrapper portfolio_heading_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="pagecontent">
                                <div class="ds_pagecontentContent_title">
                                    <h1>
                                        contact us
                                    </h1>
                                </div>
                                <div class="ds_pagecontentContent_breadcrumb">
                                    <p>
                                        <a href="index.html">
                                            Home
                                        </a>»
                                        <span>
                                            contact us
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ds_wrapper  contact_main">
                <div class="container">
                    <div class="row">
                        <div class="contact_page">
                            <div class="col-md-6">
                                <h2 class="block_title">
                                    get in touch
                                </h2>
                                <div class="break clearfix">
                                </div>
                                <form onSubmit={submitHandler}>
                                    <div class="contact_form">
                                        <fieldset>
                                            <label>
                                                your name (required)
                                            </label>
                                            <input type="text" id="uname" value={name} onChange={(e)=>setName(e.target.value)} name="name" class="name" />
                                        </fieldset>
                                        <fieldset>
                                            <label>
                                                your email (required)
                                            </label>
                                            <input type="email" id="umail" value={email} onChange={(e)=>setEmail(e.target.value)}  name="email" class="name" />
                                        </fieldset>
                                        <fieldset>
                                            <label>
                                                subject (required)
                                            </label>
                                            <input type="text" id="subj" value={subject} onChange={(e)=>setSubject(e.target.value)}  name="subject" class="name" />
                                        </fieldset>
                                        <fieldset>
                                            <label>
                                                your message
                                            </label>
                                            <textarea name="your-message" id="msg" value={message} onChange={(e)=>setMessage(e.target.value)}  cols="20" rows="5" class="textarea">
                                            </textarea>
                                        </fieldset>
                                        <fieldset>
                                            <input type="submit" value="Send" name="btn" id="em_submit" class="submit_frm" />
                                        </fieldset>
                                        <p id="err">
                                        </p>
                                    </div>

                                </form>
                            </div>

                            <div class="col-md-6">
                                <h2 class="block_title">
                                    EXTRA INFORMATION
                                </h2>
                                <div class="block_widget">
                                    <div class="widget widget_text">
                                        <div class="text_widget">
                                            <p>
                                                <strong>
                                                    Barber's
                                                </strong> offer various haircuts and beard trimming of all sorts. But our specialty is the proper trimming of your beard. You are in good hands. Barber Saloon is a vintage design barber that focuses
                                                on your beard's best experience.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="widget widget_text">
                                        <div class="text_widget address_widget">
                                            <ul>
                                                <li>
                                                    <i class="fa fa-home">
                                                    </i>BARBER'S SALOON
                                                    <br /> 1000 LJUBLJANA
                                                    <br /> SLOVENIA, EUROPE
                                                </li>
                                                <li>
                                                    <i class="fa fa-phone">
                                                    </i>(+386) 987 654 321
                                                </li>
                                                <li>
                                                    <i class="fa fa-mobile">
                                                    </i>(+386) 40 123 456
                                                </li>
                                                <li>
                                                    <i class="fa fa-envelope">
                                                    </i>info@barbersaloon.com
                                                </li>
                                                <li>
                                                    <i class="fa fa-globe">
                                                    </i>www.barber.com
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="divider clearfix">
            </div>
        </div>
    )
}

export default Contact