import * as React from "react";
import "./Decor.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Form = (props) => {
  const [timeZone, setTimeZone] = React.useState("");
  
  function handleChange(event) 
  {
    setTimeZone(event.target.value);
    props.func(event.target.value);
  }
  const [newArr, setNewArr] = React.useState([]);
  React.useEffect(()=>{
    console.log(props.myArr);
    if(props.myArr.length !== 0)
    {
      setNewArr(props.myArr);
      setTimeZone((props.myArr)[0])
    }
    
  }, [props.myArr])

  let ind = 0;
  const listElements = newArr?.map(item => {
    return <MenuItem value={item} key={++ind}>{item}</MenuItem>;
  });

  return (
    <div className="page--form">
      <h3>Select Timezone: </h3>
      <div className="page--div">
        <FormControl className="page--dropdown">
          <InputLabel id="demo-simple-select-label">Pick</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeZone}
            label="Time Zone"
            onChange={handleChange}
          >
            {props.myArr.length !==0 && listElements}
          </Select>
        </FormControl>
        <Button>
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};
