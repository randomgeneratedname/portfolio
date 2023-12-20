import React, { useState } from 'react'
import Title from '../home/Title'
import { FiSend } from "react-icons/fi";
import axios from "axios";

const Contact = () => {

    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [messages, setMessages] = useState("");

    const [errClientName, setErrClientName] = useState(false);
    const [errEmail, setErrEmail] = useState(false);
    const [errMessages, setErrMessage] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail(false);
    };

    const handleMessages = (e) => {
        setMessages(e.target.value);
        setErrMessage(false);
    };
    const emailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSend = (e) => {
        e.preventDefault();

        if (!clientName) {
            setErrClientName(true);
        }

        if (!email) {
            setErrEmail(true);

        } else {

            if (!emailValidation(email)) {
                setErrEmail(true);
            }
        }

        if (!messages) {
            setErrMessage(true);
        }
        if (!clientName) {
            setErrClientName(true);
        }

        if (clientName && email && emailValidation(email) && messages) {
            axios.post("https://getform.io/f/dc696f9e-54cd-4e35-9ffa-a93d2c0958cd", {
                name: clientName,
                email: email,
                message: messages
            })
            setSuccessMsg(`Hello ${clientName}, Your message has been sent successfully. Thank you for your time!`)
            setClientName("");
            setEmail("");
            setMessages("");
        }
    }

    return (
        <div className="w-full">
            <Title title="Get" subTitle="in Touch" />
            <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
                <div className="w-full lgl:w-1/2">
                    <p className="flex gap-6 justify-between w-full text-2x1 text-[#ccc] py-4 border-b-[1px] border-b-zinc-600">
                        <span className="bg-designColor text-white text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
                            Address
                        </span>
                        Serbia, Nis
                    </p>
                    <p className="flex justify-between w-full text-2x1 text-[#ccc] py-4 border-b-[1px] border-b-zinc-600">
                        <span className="bg-designColor text-white text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
                            Phone
                        </span>
                        +381 606007092
                    </p>
                </div>
                <div className="w-full lgl:w-1/2">
                    <p className="flex justify-between lgl:gap-6 w-full text-2x1 text-[#ccc] py-4 border-b-[1px] border-b-zinc-600">
                        <span className="bg-designColor text-white text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
                            Email
                        </span>
                        viddadev@gmail.com
                    </p>
                    <p className="flex justify-between w-full text-2x1 text-[#ccc] py-4 border-b-[1px] border-b-zinc-600">
                        <span className="bg-designColor text-white text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
                            Job
                        </span>
                        Avaliable
                    </p>
                </div>
            </div>
            <div className="w-full mt-10">
                <Title title="Send" subTitle="Messages" />
                {successMsg ? (
                    <p className="text-center text-base font-titleFont p-20 text-white">
                        {successMsg}
                    </p>
                ) : (
                    <form
                        id="form"
                        action="https://getform.io/f/dc696f9e-54cd-4e35-9ffa-a93d2c0958cd"
                        method="POST"
                        className="p-6 flex flex-col gap-6"
                    >
                        <div className="w-full flex lgl:flex-row gap-4 lgl:gap-10 justify-between">
                            <input
                                onChange={handleName}
                                value={clientName}
                                className={`${errClientName
                                    ? "border-red-600 focus-visible:border-red-600"
                                    : "border-zinc-600 focus-visible:border-zinc-600"
                                    }  w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                                // className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
                                type="text"
                                placeholder="Full Name"
                            />
                            <input
                                onChange={handleEmail}
                                value={email}
                                className={`${errEmail
                                    ? "border-red-600 focus-visible:border-red-600"
                                    : "border-zinc-600 focus-visible:border-zinc-600"
                                    } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                                type="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <textarea
                            onChange={handleMessages}
                            value={messages}
                            className={`${errMessages
                                ? "border-red-600 focus-visible:border-red-600"
                                : "border-zinc-600 focus-visible:border-zinc-600"
                                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
                            placeholder="Your Message"
                            rows="4"
                        ></textarea>
                        <div className="w-full flex justify-end">
                            <button
                                onClick={handleSend}
                                className="text-base w-44 flex justify-end gap-1 text-gray-200 hover:text-designColor duration-200"
                            >
                                Send Message{" "}
                                <span className="mt-1 text-designColor">
                                    <FiSend />
                                </span>
                            </button></div>

                    </form>
                )}
            </div>
        </div>
    )
}

export default Contact