import React, { ChangeEvent } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Search from "./components/Search/Search";

import { theme } from "./muiTheme";

function App() {

  const handleSearchData = (event: ChangeEvent<HTMLInputElement>) => {
  console.log('event:', event)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Search handleSearch={handleSearchData}/>
    </ThemeProvider>
  );
}

export default App;