import React from "react";
import { useState } from "react";
import { MdEdit, MdDelete } from 'react-icons/md';
import '../App.css';

const EnrollmentForm = (props) => {
    // 폼에 입력한 이름/성/이메일을 기억하기 위해 state형 변수 선언
    // onBlur 이벤트 발생시 입력한 이름/성/이메일을
    // firsName, lastName, emil변수에 저장
    const [firstName, setFirsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    // state형 변수에 저장된 이름/성을 환영메세지로 출력하기 위해 선언
    const [welcomMessage, setwelcomMessage] = useState("");
    const [msgStyle, setMsgStyle] = useState("redOne");

    // 등록/수저 버튼 정의
    const [btnValue, setBtbnValue] = useState("등록하기");
    const [studKey, setStudKey] = useState(0);

    const handleEdit = (key, program) => {
        // 수정할 학생정보를 폼에 표시
        handleFormInput(firstName, lastName, email);

        // 참가 프로그램 라디오 버튼에 표시
        props.setReSelectProgram(program);

        setStudKey(key);
        setBtbnValue('수정하기');
    }

    // '등록하기' 버튼 클릭시 이름/성을 환영메세지로 만들어
    // 폼 아래쪽에 표시
    const handleSubmit = (e) => {
        let msg = '더이상 참가할 수 없어요!';
        setMsgStyle('redOne');
        if (props.currentSeat -1 >= 0) {
            // props로 전달받은 setUpdateSeats 함수 를 이용해서
            // 상위 컴퍼넌트의 seats 변수를 조작함
            props.setUpdateSeats(props.currentSeat - 1); // 참여가능 인원수 감소
            setMsgStyle('message');
            msg = `환영합니다. ${firstName} ${lastName} 님!!\n` +
                `${email} 로 등록관련 정보를 발송해드렸습니다`;

            // 등록완료된 학생정보에 사용할 key 생성
            const rndKey = Math.floor(1000+ Math.random() * 9000);

            // 학생정보 등록시 rndKey를
            // 학생정보 수정시 studKey를 사용하도록 함
            const key = btnValue === '등록하기' ? rndKey : studKey;

            // 생성한 key와 등록완료된 학생정보를 props에 저장
            let stud = {
                key: key, fname: firstName, lname: lastName,
                program: props.chosenProgram, email: email,
                edit: <MdEdit className="actionIcon"
                onClick={() => handleEdit(key, props.chosenProgram)}/>,

                // 삭제 아이콘 클릭시 삭제 대사 학생정보의 키를 넘김
                delete: <MdDelete className="actionIcon"
                onClick={() => props.handleItemSelection('delete',rndKey)}/>
            }
            props.setStudDetails(stud);
        }
        setwelcomMessage(msg);
        e.preventDefault(); // submit 기능 전파 중지

    };
    const handleInputChange = (setInput, e) => {
        setInput(e.target.value);
    };

    const handleFormInput = (fname, lname, email) => {
        setFirsName(fname);
        setLastName(lname);
        setEmail(email);

    };

    // 취소하기 버튼 클릭시
    // 폼에 입력된 데이터 제거, 버튼 글자 바꿈
    const handleCancel = (e) => {
        handleFormInput('','','');

        setBtbnValue('등록하기');
        e.preventDefault();
    };

    return(
        <div>
            <div className="enrolContainer">
            <form className="enrolForm">
                <ul className="ulEnrol">
                    <li>
                        <label htmlFor="FirstName"></label>
                        <input type="text" id="FirsName"
                        name="firsName" className="inputFields"
                        placeholder="First Name" value={firstName}
                        onChange={e => handleInputChange(setFirsName,e)}/>
                    </li>
                    <li>
                        <label htmlFor="LastName"></label>
                        <input type="text" id="LastName"
                               name="lastName" className="inputFields"
                               placeholder="Last Name" value={lastName}
                               onChange={e => handleInputChange(setLastName,e)}/>
                    </li>
                    <li>
                        <label htmlFor="Email"></label>
                        <input type="text" id="LastName"
                               name="email" className="inputFields"
                               placeholder="Eamil" value={email}
                               onChange={e => handleInputChange(setEmail,e)}/>
                    </li>

                    <li id="center-btn">
                        <button type="submit" id="btnEnrol" className="btn"
                                name="enrol" onClick={handleSubmit}>
                            {btnValue}</button>
                        <button type="submit" id="btnCancel" className="btn"
                                name="cancel" onClick={handleSubmit}>
                            취소하기</button>
                    </li>
                    <li className="message">
                        <label id="studentMsg" className={msgStyle}>
                            {welcomMessage}
                        </label>
                    </li>

                </ul>
            </form>
            </div>
        </div>
    );
};

export default EnrollmentForm;