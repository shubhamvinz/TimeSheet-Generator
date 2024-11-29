import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";

const Main = () => {
  return (
    <div className="HeroSec">
      {/* Logos Above the Box */}
      <div className="logo">
        <img src="./VINZ.png" alt="VINZ Logo" />
        <img src="./Zoho.png" alt="Zoho Logo" />
      </div>

      {/* Form Section */}
      <div className="Card">
        <div className="fields">
          {/* Row 1: List of Projects and List of Contributors */}
          <div className="row">
            <div className="input-group">
              <div className="label">
              List of Projects <span style={{ color: "red" }}>*</span>
              </div>
              <FormControl fullWidth>
                <InputLabel>Options</InputLabel>
                <Select value="" onChange={() => {}}>
                  <MenuItem value={10}>Option 1</MenuItem>
                  <MenuItem value={20}>hello</MenuItem>
                  <MenuItem value={30}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="input-group">
              <div className="label">
              List of Contributors <span style={{ color: "red" }}>*</span>
              </div>
              <FormControl fullWidth>
                <InputLabel>Options</InputLabel>
                <Select value="" onChange={() => {}}>
                  <MenuItem value={10}>Option 1</MenuItem>
                  <MenuItem value={20}>Option 2</MenuItem>
                  <MenuItem value={30}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Row 2: From and To */}
          <div className="row">
            <div className="input-group">
              <div className="label">
              From <span style={{ color: "red" }}>*</span>
              </div>
              
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Pick a Date"
                  value={null}
                  onChange={() => {}}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="input-group">
              <div className="label">
              To <span style={{ color: "red" }}>*</span>
              </div>
             
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Pick a Date"
                  value={null}
                  onChange={() => {}}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <hr />
        <div className="btn">
          <Button variant="contained" className="generate-btn">
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
