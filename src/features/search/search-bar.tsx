import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

/** search section with the input field to filter books by title */
export const SearchBar = () => {
    return (
        <div>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={['1','2','3'].map((option) => option)}
                renderInput={
                (params) => (
                    <>
                        <TextField
                            {...params}
                            label="Začnite písať názov knihy"
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </>
                )}
            />
        </div>
    );
}