import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";
import './calculator.css'


const Calculator = () => {
    const [numbers, setNumbers] = useState({
        num1: '',
        num2: ''
    })
    const [sign, setSign] = useState('+')
    const [result, setResult] = useState()
    const [operationsCount, setOperationsCount] = useState(0)

    const handelChange = (e) =>{
        const {name,value} = e.target;
        setNumbers((prevNumbers) => ({
            ...prevNumbers,
            [name]: value
        }))
    }
    const calculate = (e) => {
        console.log(e.target.value)
        setSign(e.target.value)
        
        let ans = 0
        if (e.target.value == '+'){
            ans=Number(numbers.num1)+Number(numbers.num2)
        }
        else if (e.target.value == '-'){
            ans=Number(numbers.num1)-Number(numbers.num2)
        }
        else if (e.target.value == '*'){
            ans=Number(numbers.num1)*Number(numbers.num2)
        }
        else if (e.target.value == '/'){
            ans=Number(numbers.num1)/Number(numbers.num2)
        }
        console.log(ans);
        setResult(ans)
        setOperationsCount(operationsCount+1)

    }
    const handleReset = () => {
        setNumbers({
            num1: '',
            num2: ''
        })
    }
  return (
    <>
      <h1>Basic Calculator</h1>

      <p>Total Operations: {operationsCount}</p>

      <div className="input-section">

      <TextField type="number" id="outlined-basic" name="num1" label="Number 1" variant="outlined" value={numbers.num1} onChange={handelChange}/>
      <p style={{margin:'30px'}}>{sign}</p>
      <TextField type="number" id="outlined-basic" name="num2" label="Number 2" variant="outlined" value={numbers.num2} onChange={handelChange}/>
      </div>

      <div className="operation-sign">

      <Button variant="contained" onClick={calculate} value='+'>+</Button>
      <Button variant="contained" onClick={calculate} value='-'>-</Button>
      <Button variant="contained" onClick={calculate} value='*'>*</Button>
      <Button variant="contained" onClick={calculate} value='/'>/</Button>
      </div>
      <div className="btn">

      <Button variant="contained" onClick={handleReset}>Reset</Button>
      <p>Result: {result}</p>
      </div>

    </>
  );
};

export default Calculator;
