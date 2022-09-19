import { useState } from "react";
import * as S from "./styles";
import { addValueFunc, caculation } from "./functions";

function App() {
  const [deleteValue, setDeleteValue] = useState("AC");
  const [formula, setFormula] = useState("0");
  const [answer, setAnswer] = useState("");

  const caculatorValue = [
    "(",
    ")",
    "%",
    deleteValue,
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "=",
    "+",
  ];

  // onClick에서 이동 후 문자에 따라 값 처리 및 출력

  const clickEqual = () => {
    if (!Number(formula[formula.length - 1])) {
      if (formula[formula.length - 2] !== "%") {
        return;
      }
    }

    setAnswer(formula + "=");
    setFormula(String(caculation(formula)));
    setDeleteValue("AC");
  };

  const onClickBtn = (value) => {
    // 정답 칸이 비어있는지 확인
    if (answer === "") {
      setAnswer("Ans = 0");
    }
    // 문자 확인

    if (value === "=") {
      clickEqual();
    } else {
      const output = addValueFunc({ formula, answer, value });
      setFormula(output[0]);
      setDeleteValue("CE");

      if (output[1]) {
        setAnswer(output[1]);
      }
    }
  };

  return (
    <S.Container>
      <S.InputWrap>
        <S.AnswerBox>{answer}</S.AnswerBox>
        <S.FormulaBox>
          <span>{formula}</span>
        </S.FormulaBox>
      </S.InputWrap>
      <S.BtnContainer>
        {caculatorValue.map((caculatorMember, i) => (
          <S.Btn
            key={i}
            onClick={() => onClickBtn(caculatorMember)}
            isNum={typeof caculatorMember === "number"}
            isEqual={caculatorMember === "="}
          >
            {caculatorMember}
          </S.Btn>
        ))}
      </S.BtnContainer>
    </S.Container>
  );
}

export default App;
