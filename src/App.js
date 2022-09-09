
import './App.css';
import UseReducer from './components/Hooks/useReducer/useReducer'
import {StyledButton , FancyButton , SubmitButton} from './components/Styled-Components/Button'



function App() {
  return (
    <div className="App">
      const SerialPort = require("serialport");
const port = "COM1";
var message = "Hakuna Matata";

const serialPort = new SerialPort(port, {
  baudRate: 9600
});

serialPort.write(message, function(err) {
  if (err) {
    return console.log("Error on write: ", err.message);
  }
  console.log("Message sent successfully");
});
   {/* <UseReducer />
    <StyledButton as="a"  variant="outline">Styled Button</StyledButton>
    <div>
    <br />
    </div>

    <FancyButton>FancyButton</FancyButton>
    <SubmitButton type="submit">SubmitButton</SubmitButton> */}
    </div>



  );
}

export default App;
