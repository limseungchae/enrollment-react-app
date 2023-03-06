import React from "react";
import '../EnrolList.css';
import { DetailsList } from '@fluentui/react/lib/DetailsList';
import { useEffect } from "react";

// 과정 등록 학생 리스트의 컬럼 정의 (이름, 성, 과정, 이메일)
// 현재 컬럼 앞뒤로 수정, 삭제 버튼 추기
const columns = [
    {
        key: 'edit',
        name: "수정",
        fieldName: "edit",
        minWidth: 50,
        isResizable: false
    },
    {
        key: 'fname', name: 'First Name', fieldName: 'fname',
        minWidth: 90, isResizable: false
    },
    {
        key: 'lname', name: 'Last Name', fieldName: 'lname',
        minWidth: 90, isResizable: false
    },
    {
        key: 'program', name: '과정종류', fieldName: 'program',
        minWidth: 90, isResizable: false
    },
    {
        key: 'email', name: '이메일', fieldName: 'email',
        minWidth: 90, isResizable: false
    },
    {
        key: 'delete',
        name: "삭제",
        fieldName: "delete",
        minWidth: 50,
        isResizable: false
    }
];

// 테스트용 데이터 삽입 - 컬럼 정의시 사용했던 fieldName으로 값 초기화
let items = [];

const EnrolList = (props) => {
    // 과정 등록 학생 데이터가 추가될때 마다 UI를 재렌더링하기 위해
    // useEffect 리액트 훅 사용
    // useEffect : 컴퍼넌트 생명주기에 따라 dom 렌더링 처리
    // props 객체에 값이 존재할떄 마다 detailsList에 렌더링해서 화면에 표시
    useEffect(() => {
        const curItemkey = props.studDetails.key;
        if (curItemkey){
            items = [...items,props.studDetails];
            props.setStudDetails({});
        }
    }, [props]);
    return(
        <div className="enrolList">
            <DetailsList items={items} columns={columns}/>
        </div>
    );
};

export default EnrolList;