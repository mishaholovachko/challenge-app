import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
        background: {
            default: "#F5F5F5",
          }
	},

	components: {
		MuiChip: {
		  styleOverrides: {
			colorPrimary: {
			  backgroundColor: 'white',
			  color: 'black'
			},
			colorSecondary: {
			  backgroundColor: '#444444',
			  color: 'white',
			},
			root: {
				border: '1px solid #444444',
				borderRadius: 16,
				'&:hover': {
					backgroundColor: '#444444',
					boxShadow: 'none',
				},

			}
		  },
		},
	  },

})
