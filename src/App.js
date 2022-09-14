import * as S from './styles'

function App() {
  const arr = ['(', ')', '%', 'AC', 7, 8, 9, '%', 4, 5, 6,'X', 1, 2, 3, '-', 0, '.', '=', '+'];
  
  return (
    <S.Container>
      <S.InputWrap></S.InputWrap>
      <S.BtnContainer>
        {arr.map((str, i)=>(<S.Btn isNum={typeof(str)==='number'} key={i}>{str}</S.Btn>))}
      </S.BtnContainer>
    </S.Container>
  );
}

export default App;
