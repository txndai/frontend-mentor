import React from 'react'
 import { FaShare } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const PopupTray = () => {
    return (
        <div className='inline mx-auto'>
            <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
            <button {...bindTrigger(popupState)} className='bg-grayish-blue rounded-full flex flex-col justify-center w-8 h-8 focus:outline-none'>
                <FaShare className='inline mx-auto'/>
            </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
          >
            <Box p={2}>
              <Typography>The content of the Popover.</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>

        </div>
    )
}

export default PopupTray