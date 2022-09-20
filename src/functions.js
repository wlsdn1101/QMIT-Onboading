const sum = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const multiple = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

const percentage = (a) => {
  return a / 100;
};

const checkSign = ({ preNum, sign, postNum }) => {
  const newPreNum = Number(preNum);
  const newPostNum = Number(postNum);

  if (sign === "-") {
    return minus(newPreNum, newPostNum);
  }

  if (sign === "+") {
    return sum(newPreNum, newPostNum);
  }

  if (sign === "*") {
    return multiple(newPreNum, newPostNum);
  }

  if (sign === "/") {
    return division(newPreNum, newPostNum);
  }

  if (sign === "%") {
    return percentage(newPreNum);
  }
};

const changeFormulaValue = (formula, signLocaion = 1) => {
  const newFormula = [...formula];
  const [preNum, sign, postNum] = newFormula.slice(signLocaion - 1);

  newFormula[signLocaion - 1] = checkSign({ preNum, sign, postNum });
  newFormula.splice(signLocaion, 2);

  return newFormula;
};

const indexOfPrioritySign = (formula) => {
  let checkPriority = -1;
  
  if (formula.indexOf("%") > 0) {
    return formula.indexOf("%");
  }

  if (formula.indexOf("*") > 0) {
    checkPriority = formula.indexOf("*");
  }

  if (checkPriority < 0 || checkPriority > formula.indexOf("/")) {
    checkPriority = formula.indexOf("/");
  }

  if (checkPriority === -1) {
    checkPriority = 1;
  }
  return checkPriority;
};

export const caculation = (formula) => {
  let newFormula = formula.split(" ");

  while (newFormula.length !== 1) {
    newFormula = changeFormulaValue(
      newFormula,
      indexOfPrioritySign(newFormula),
    );
  }

  return newFormula[0];
};

// 계산식 삭제 함수
const deleteAll = (formula) => {
  return ["0", `Ans = ${formula}`];
};

const deletePreValue = ({ formula, answer }) => {
  if (formula === 0) {
    return;
  }

  if (formula.slice(0, -1) === "") {
    return ["0", answer];
  }

  return [formula.slice(0, -1), answer];
};

// 식에 숫자, 문자 추가하는 함수
const addChar = ({ formula, answer, value }) => {
  let newAnswer = answer;

  if (answer[answer.length - 1] === "=") {
    newAnswer = `Ans = ${formula}`;
  }

  return [`${formula} ${value} `, newAnswer];
};

const addNumber = ({ formula, answer, value }) => {
  let newFormula = formula;

  if (
    formula[formula.length - 1] === "0" &&
    !Number(formula[formula.length - 2])
  ) {
    newFormula = newFormula.slice(0, -1);
    return [newFormula + value];
  } else if (answer[answer.length - 1] === "=") {
    return [value, `Ans = ${newFormula}`];
  } else {
    return [`${newFormula}${value}`];
  }
};

const checkValueType = ({ formula, answer, value }) => {
  if (typeof value === "number" || value === ".") {
    return addNumber({ formula, answer, value });
  }

  if (typeof value === "string") {
    return addChar({ formula, answer, value });
  }
};

export const addValueFunc = ({ formula, answer, value }) => {
  if (value === "AC") {
    return deleteAll({ formula, answer });
  }

  if (value === "CE") {
    return deletePreValue(formula);
  }
  let [formulaValue, answerValue] = checkValueType({ formula, answer, value });

  return [formulaValue, answerValue];
};
