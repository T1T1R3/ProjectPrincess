import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': { color: 'white' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'white', borderRadius: '10px' },
    '&:hover fieldset': { borderColor: 'white', borderRadius: '10px' },
    '&.Mui-focused fieldset': { borderColor: 'white', borderRadius: '10px' }
  }
});

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <CustomTextField
      value={searchTerm}
      variant="outlined"
      size="small"
      sx={{ my: -5 }}
      slotProps={{
        input: {
          startAdornment: <SearchIcon sx={{ mr: 4, color: "#FFFFFF" }} />,
        },
        classes: { notchedOutline: 'custom-outline' },
      }}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
