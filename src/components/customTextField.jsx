import React ,{useState}from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function CustomTextField  ({onSearch}) {
    const [searchTerm,setSearchTerm] = useState("");

    const handleKeyDown = ((event)=>{
        if(event.key==='Enter'){
            onSearch(searchTerm);
            console.log('Search Term:', searchTerm);
        }
    })

  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder="Search..." 
      size='small'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleKeyDown}
      style={{
        paddingLeft: 150,
        width: '60%'
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        sx: { borderRadius: '16px',
              } // Set the border radius here
      }}
    />
  );
};

export default CustomTextField;
