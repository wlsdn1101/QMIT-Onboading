import * as S from './styles'

function App() {
  const CACULATOR_STR = ['(', ')', '%', 'AC', 7, 8, 9, '%', 4, 5, 6,'X', 1, 2, 3, '-', 0, '.', '=', '+'];
  
  return (
    <S.Container>
      <S.InputWrap></S.InputWrap>
      <S.BtnContainer>
        {CACULATOR_STR.map((caculatorMember, i)=>(<S.Btn isNum={typeof(caculatorMember)==='number'} key={i}>{caculatorMember}</S.Btn>))}
      </S.BtnContainer>
    </S.Container>
  );
}

export default App;
