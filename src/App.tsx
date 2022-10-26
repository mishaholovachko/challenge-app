import React, { ChangeEvent } from "react";
import { Chip, CssBaseline, Grid, Stack, ThemeProvider } from "@mui/material";

import Search from "./components/Search/Search";
import { FILTER_ITEMS } from "./mockData";

import { theme } from "./muiTheme";

function App() {

  const handleSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event:', event)
  }

  const handleFilter = (value: string) => {
    console.log('value:', value)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container alignItems="center">
        <Search handleSearch={handleSearchData}/>

        <Stack direction="row" spacing={1}>
          {
            FILTER_ITEMS.map((item) => (
              <Chip label={item.title} variant="outlined" onClick={() => handleFilter(item.value)} />
            ))
          }
        </Stack>
        </Grid>
    </ThemeProvider>
  );
}

export default App;