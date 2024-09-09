import React, { useState } from "react";
import { BackToHomeButton } from "../components/Buttons";
import QuestionManager from "../components/QuestionManager";

export default function Editor() {

    return (
      <div className="App">
        <h1 className="header">Question Editor</h1>
          <div>
            <QuestionManager />
            <BackToHomeButton />
          </div>
      </div>
    );
  }
