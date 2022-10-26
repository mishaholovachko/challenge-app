import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
        background: {
            default: "#F5F5F5",
          }
	},

	typography: {
		fontFamily: ['Inter', 'sans-serif'].join(','),
		h1: {
			fontSize: '36px',
			fontWeight: 700,
			lineHeight: '43.57px',
		},
		h2: {
			fontSize: '24px',
			fontWeight: 700,
			lineHeight: '29.05px',
		},
		h3: {
			fontSize: '16px',
			fontWeight: 700,
			lineHeight: '20px',
		},
		h4: {
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: '20px',
		},
	},

})
