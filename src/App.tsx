import React, { ChangeEvent, useEffect, useState } from "react";
import { Chip, CssBaseline, Grid, Stack, ThemeProvider } from "@mui/material";

import Search from "./components/Search/Search";

import { FILTER_ITEMS } from "./config/mockData";
import { getData } from "./services";

import { theme } from "./muiTheme";

function App() {

  const [selectedFilter, setSelectedFilter] = useState('agents')

  const handleSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event:', event)
  }

  const handleFilter = (value: string) => {
    setSelectedFilter(value)
  }

  useEffect(() => {
    getData(selectedFilter).then((data) => {
      console.log('data:', data)
    })
  }, [selectedFilter]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container alignItems="center">
        <Search handleSearch={handleSearchData}/>

        <Stack direction="row" spacing={1}>
          {
            FILTER_ITEMS.map((item) => (
              <Chip label={item.title} variant="outlined" onClick={() => handleFilter(item.value)} key={item.value}/>
            ))
          }
        </Stack>
        </Grid>
    </ThemeProvider>
  );
}

export default App;