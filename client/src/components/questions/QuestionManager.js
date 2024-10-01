import React, { useState } from "react";
import AddQuestion from "./AddQuestion";
import QuestionList from "../../models/QuestionList";

export default function QuestionManager() {
    const [list, setList] = useState([]);

    return (
        <div>
            <AddQuestion list={list} setList={setList} />
            <QuestionList list={list} />
        </div>
    )
}