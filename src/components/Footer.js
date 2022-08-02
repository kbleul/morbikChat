
import { Box , Stack , Typography} from "@mui/material"
import {useTheme} from "../utils/themeContex"

import Logo_footer from "../assets/images/MF.png"
import Logo_footer_dark from "../assets/images/MF(2).png"


const Footer = () => {

     const theme = useTheme()

     return(<Box mt="80px" bgcolor={theme === "light" ? "##f2f2f2" : "#1f2222"}>
               <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">

                   <img src={theme === "light" ? Logo_footer : Logo_footer_dark} alt="logo" width="200px" height="150px" /> 

                    <Typography variant="h5" sx={{ fontSize: { lg: '12px', xs: '10px' } }} mt="41px" textAlign="center" pb="40px" color={theme === "light"  ? "black" : "white"}>Morbik Inc.</Typography>

               </Stack>
          </Box>)
}

export default Footer