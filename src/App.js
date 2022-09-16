import { useState } from "react";
import * as S from "./styles";

function App() {
  const [formula, setFormula] = useState("0");
  const [answer, setAnswer] = useState("");
  //const [isAllClear, setIsAllClear] = useState("AC");
  const caculatorArr = [
    "(",
    ")",
    "%",
    "AC",
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

  const caculation = () => {
    let formulaArr = formula.split(" ");
    let charLocation;

    while (formulaArr.length !== 1) {
      charLocation = 0;

      // 곱하기, 나누기의 계산 우선순위를 높이기 위한 조건문
      if (formulaArr.indexOf("*") > 0) {
        charLocation = formulaArr.indexOf("*");
      } else if (formulaArr.indexOf("/") > 0) {
        charLocation = formulaArr.indexOf("/");
      }

      if (charLocation !== 0) {
        if (formulaArr[charLocation] === "*") {
          formulaArr[charLocation - 1] =
            Number(formulaArr[charLocation - 1]) *
            Number(formulaArr[charLocation + 1]);
        } else {
          formulaArr[charLocation - 1] =
            Number(formulaArr[charLocation - 1]) /
            Number(formulaArr[charLocation + 1]);
        }
      } else if (formulaArr[1] === "-") {
        formulaArr[0] = Number(formulaArr[0]) - Number(formulaArr[2]);
        charLocation = 1;
      } else if (formulaArr[1] === "+") {
        formulaArr[0] = Number(formulaArr[0]) + Number(formulaArr[2]);
        charLocation = 1;
      }

      formulaArr.splice(charLocation, charLocation + 1);
    }
    return formulaArr[0];
  };

  // onClick에서 이동 후 문자에 따라 값 처리 및 출력
  const charAddFunc = (btnValue) => {
    if (answer[answer.length - 1] === "=") {
      setAnswer(`Ans = ${formula}`);
    }

    setFormula(`${formula} ${btnValue} `);
    //setIsAllClear("CE");
  };

  const numAddFunc = (btnValue) => {
    let stringTmp = formula;
    if (
      formula[formula.length - 1] === "0" &&
      !Number(formula[formula.length - 2])
    ) {
      stringTmp = stringTmp.slice(0, -1);
      setFormula(stringTmp + btnValue);
    } else if (answer[answer.length - 1] === "=") {
      setAnswer("Ans = " + formula);
      setFormula(btnValue);
    } else {
      setFormula(String(stringTmp) + String(btnValue));
    }
  };

  const clickEqual = () => {
    if (!Number(formula[formula.length - 1])) {
      if (formula[formula.length - 2] !== "%") {
        return;
      }
    }

    setAnswer(formula + "=");
    setFormula(String(caculation()));
    //setIsAllClear("AC");
  };

  const onClickBtn = (btnValue) => {
    // 정답 칸이 비어있는지 확인
    if (answer === "") {
      setAnswer("Ans=0");
    }
    // 문자 확인
    if (btnValue === "=") {
      clickEqual();
    } else if (typeof btnValue === "string") {
      charAddFunc(btnValue);
    } else {
      numAddFunc(btnValue);
      //setIsAllClear("CE");
    }
  };
  return (
    <S.Container>
      <S.InputWrap>
        <S.AnswerBox>{answer}</S.AnswerBox>
        <S.FormulaBox>{formula}</S.FormulaBox>
      </S.InputWrap>
      <S.BtnContainer>
        {caculatorArr.map((caculatorMember, i) => (
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
