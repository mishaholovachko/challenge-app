import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { ChangeEvent, FC, ReactElement, useState } from "react"
import SearchIcon from "../../assets/icons/SearchIcon";

type SearchType = {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const Search = ({handleSearch}: SearchType): ReactElement => {

    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
                placeholder="Search"
                // value={values.search}
                onChange={handleSearch}
                startAdornment={<SearchIcon />}
            />
        </FormControl>

    )
}

export default Search