import { FormControl, OutlinedInput } from "@mui/material"
import { ChangeEvent, ReactElement } from "react"

import SearchIcon from "../../assets/icons/SearchIcon";

type SearchType = {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const Search = ({handleSearch}: SearchType): ReactElement => {

    return (
        <FormControl  variant="outlined">
            <OutlinedInput
                sx={{ height: 40, backgroundColor: 'white' }}
                startAdornment={<SearchIcon />}
                onChange={handleSearch}
                placeholder="Search"
            />
        </FormControl>
    )
}

export default Search