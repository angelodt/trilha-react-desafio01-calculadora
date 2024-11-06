import Button from './components/Button';
import Input from './components/Input';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const enableLog = true;
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState("");
  const [memoryNumber, setMemoryNumber] = useState(0);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation();
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  const handleExecuteOperation = () => {
    if (enableLog) console.log('handleExecuteOperation', firstNumber, operation, currentNumber);
    
      let res = 0;
      switch(operation) {
        case '+':
          res = Number(firstNumber) + Number(currentNumber);          
          break;
        case '-':
          res = Number(firstNumber) - Number(currentNumber);          
          break;
        case '*':
          res = Number(firstNumber) * Number(currentNumber);          
          break;
        case '/':
          if(currentNumber!=='0') {
            res = Number(firstNumber) / Number(currentNumber);
          } else {
            res = "Can't divide by zero"
          }          
          break;
        case '%':
            res = Number(firstNumber) * (Number(currentNumber)/100);
            break;
        case "neg":
            res = Number(currentNumber) * -1;          
            break;
        default:
          break; 
      }
      setCurrentNumber(String(res));
      setOperation('');
  };

  const handleSumNumbers = () => {
    if (enableLog) console.log('handleSumNumbers', firstNumber, operation, currentNumber);    
      
    if(firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }
  };

  const handleMinusNumbers = () => {
    if (enableLog) console.log('handleMinusNumbers', firstNumber, operation, currentNumber);    
      
    if(firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }
  };

  const handleMultiplyNumbers = () => {
    if (enableLog) console.log('handleMultiplyNumbers', firstNumber, operation, currentNumber);    
      
    if(firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }
  };

  const handleDivisionNumbers = () => {
    if (enableLog) console.log('handleDivisionNumbers', firstNumber, operation, currentNumber);    
      
    if(firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }
  };

  const handlePercentageNumbers = () => {
    if (enableLog) console.log('handlePercentageNumbers', firstNumber, operation, currentNumber);    
      
    if(firstNumber === '0' ) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    }
  };

  const handleNegativeNumber = () => {
    if (enableLog) console.log('handleNegativeNumber', currentNumber);
      
    if(currentNumber !== '0' ) {
      setFirstNumber(String(currentNumber));
      setOperation("neg");
      if (enableLog) console.log('handleNegativeNumber', currentNumber, operation);
      handleExecuteOperation();
    }
  };

  const handleMemorizeNumber = () => {
    if (enableLog) console.log('handleMemorizeNumber', currentNumber);    
      
    if(currentNumber !== '0' ) {
      setMemoryNumber(String(currentNumber));
      handleOnClear();
    } else {
      handleAddNumber(memoryNumber);
    }
    if (enableLog) console.log('handleMemorizeNumber', memoryNumber, currentNumber); 
  };

  const handleEquals = () => {
    if (enableLog) console.log("handleEquals",firstNumber , operation , currentNumber);
    if(firstNumber !== '0' && operation !== '') {
      if (enableLog) console.log("swtich", operation);

        handleExecuteOperation();

    } else {
      if (enableLog) console.log("handleEquals não entrou");
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>          
          <Button label="C" onClick={handleOnClear}/>
          <Button label="M" onClick={handleMemorizeNumber}/>
          <Button label="%" onClick={handlePercentageNumbers}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="*" onClick={handleMultiplyNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="+/-" onClick={handleNegativeNumber}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>      
    </Container>
  );
}

export default App;
