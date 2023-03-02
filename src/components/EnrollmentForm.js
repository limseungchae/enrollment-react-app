import React from "react";
import { useState } from "react";
import '../App.css';

const EnrollmentForm = () => {
    const  [firstName, setFirsName] = useState("");
    const  [lastName, setLastName] = useState("");
    const  [welcomMessage, setwelcomMessage] = useState("");
    const handleSubmit = (e) => {
        setwelcomMessage(`환영합니다. ${firstName} ${lastName}`);
        e.preventDefault(); // submit 기능 전파 중지
    };
    return(
        <div>
        <form className="enrolForm" onSubmit={handleSubmit}>
        <h1>대학생 등록양식</h1>
        <div><label>First Name</label>
            <input type="text" name="fname"
            onBlur={(e) =>
                setFirsName(e.target.value)} /></div>

        <div><label>Last Name</label>
            <input type="text" name="lname"
            onBlur={(e) =>
                setLastName(e.target.value)}/></div>

            <div><button type="submit">등록하기</button></div>
        </form>

            <label id="studentMsg" className="message">
                {welcomMessage}
            </label>
        </div>
    );
};

export default EnrollmentForm;