import React from "react";
import { Navigate, useParams } from "react-router-dom"
import USER from "./user";

const SkillDetail = () => {
    const {skillList} = USER
    const {skill} = useParams()
    if(!skillList.find(item => item.skill === skill)){
        return <Navigate to='/404'/>
    }
    
    return (
        <>
            <h1>Skill: {skillList.find(item => item.skill === skill).skill}</h1>
        </>
    )
}

export default SkillDetail