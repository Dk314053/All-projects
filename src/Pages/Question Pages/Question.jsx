import React, { useState } from "react";

function Question({ qna, handleSubmit }) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="main-container" style={{ width: "70%", margin: "auto" }}>
      <h4 className="head4">
        <span className="questin">Question:</span> {qna.question}
      </h4>
      {qna.image && <img src={qna.image} width={300} height={200} />}

      <h4>1. {qna.option1}</h4>
      <h4>2. {qna.option2}</h4>
      <h4>3. {qna.option3}</h4>
      <h4>4. {qna.option4}</h4>
      <input
        className="contrl"
        type="number"
        placeholder="Enter Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button
        className="btn "
        onClick={() => handleSubmit(qna.id, answer)}
      >
        Next
      </button>
    </div>
  );
}

export default Question;
