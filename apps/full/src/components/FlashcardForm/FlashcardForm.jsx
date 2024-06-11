import './FlashcardForm.css'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormGroup, Switch, FormLabel } from '@mui/material'

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
            control={<Switch checked={showPinyin} onChange={() => setShowPinyin(!showPinyin)} />} 
            label="Show pinyin" 
          />
        </FormGroup>
        <button className="play-btn" onClick={handlePlay}>Play!</button>

      </div>
    </>
  )
}