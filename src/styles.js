import styled from "@emotion/styled";

export const Container = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const BtnContainer = styled.div`
  width: 500px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const InputWrap = styled(Container)`
  justify-content: space-around;
  align-items: flex-end;
  height: 72px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px;
`;

export const Btn = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.isEqual ? "#4285f4" : props.isNum ? "#f1f3f4" : "#dadce0"};
  color: ${(props) => (props.isEqual ? "#fff" : "#202124")};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const FormulaBox = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  overflow: hidden;
  & span {
    float: right;
  }
`;

export const AnswerBox = styled.div`
  color: #70757a;
  font-size: 13px;
`;
