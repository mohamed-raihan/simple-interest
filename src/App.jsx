import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [interest, setInterest] = useState(0);

  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validate = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    /*reg exp = /^[0-9]*$ 
    match() - check the pattern matches the value 
    if the value matches otherwise returns null */

    // console.log(value.match(/^[0-9]*$/));
    /* !! - to convert to boolean */

    if (!!value.match(/^[0-9]*$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(true);
      } else {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(false);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(false);
      } else {
        setYear(value);
        setIsYear(false);
      }
    }
  };

  const handleReset = () => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setIsPrinciple(true);
    setIsRate(true);
    setIsYear(true);
    setInterest(0)
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setInterest((principle * rate * year) / 100);
  };

  return (
    <>
      <Row className="p-5 mt-5 rounded">
        <Col lg={4} md={3}></Col>
        <Col lg={4} md={6} sm={12} className="shadow p-4 rounded">
          <h2 className="text-center">Simple Interest</h2>
          <p className="text-center">Calculate your simple interest easily</p>
          <div className="bg-warning p-3 rounded shadow m-2">
            <h1 className="text-center">₹{interest}</h1>
            <p className="text-center">Total simple interest</p>
          </div>
          <form onSubmit={handleCalculate} action="">
            <div className="m-1 mt-4">
              <TextField
                value={principle || ""}
                name="principle"
                onChange={(e) => validate(e)}
                className="w-100"
                id="outlined-basic"
                label="₹ Principle Amount"
                variant="outlined"
              />
              {!isPrinciple && <p className="text-danger">*Invalid input</p>}
            </div>
            <div className="m-1 mt-3">
              <TextField
                value={rate || ""}
                onChange={(e) => validate(e)}
                name="rate"
                className="w-100"
                id="outlined-basic"
                label="Rate of Interest(p.a)%"
                variant="outlined"
              />
              {!isRate && <p className="text-danger">*Invalid input</p>}
            </div>
            <div className="m-1 mt-3">
              <TextField
                value={year || ""}
                onChange={(e) => validate(e)}
                name="year"
                className="w-100"
                id="outlined-basic"
                label="Year(Yr)"
                variant="outlined"
              />
              {!isYear && <p className="text-danger">*Invalid input</p>}
            </div>
            <div className="d-flex justify-content-between mt-3">
              <Button
                type="submit"
                disabled={isPrinciple && isRate && isYear ? false : true}
                className="bg-success"
                variant="contained"
              >
                Calculate
              </Button>
              <Button onClick={handleReset} variant="outlined">
                Reset
              </Button>
            </div>
          </form>
        </Col>
        <Col lg={4} md={3}></Col>
      </Row>
    </>
  );
}

export default App;
