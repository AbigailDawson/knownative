import './FlashcardForm.css'
import { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { FormGroup } from '@mui/material';

export default function FlashcardForm({ selectedFront, setSelectedFront, showPinyin, setShowPinyin, handlePlay }) {

  return(
    <>
      <div>
        <FormGroup>
          <FormControl>
            <FormLabel id="radio-buttons-group-label">Choose which to display on the front:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel 
                value="chinese" 
                control={<Radio />} 
                label="Chinese" 
                checked={selectedFront === 'chinese'}
                onChange={() => setSelectedFront('chinese')}
              />
              <FormControlLabel 
                value="english" 
                control={<Radio />} 
                label="English" 
                checked={selectedFront === 'english'}
                onChange={() => setSelectedFront('english')}
              />
            </RadioGroup>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControlLabel 
            control={<Switch defaultChecked />} 
            label="Show pinyin" 
            checked={showPinyin}
            onChange={() => setShowPinyin(!showPinyin)}
          />
        </FormGroup>
      </div>
      <button onClick={handlePlay}>Play!</button>
    </>
  )
}