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
export const InputWrap = styled.div`
  width: 500px;
  height: 72px;
  border: 1px solid #dadce0;
  border-radius: 8px;
`
export const Btn = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 4px;
  background-color: ${props=>props.isNum ? '#f1f3f4' : '#dadce0'};
  color: #202124;
  display: flex;
  justify-content: center;
  align-items:center;
`;
