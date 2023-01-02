import { Avatar, Divider, Drawer, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material';
import { Box, width } from '@mui/system';
import profile from '../../../assets/caio.png';
interface ISidebar {
    children: React.ReactNode
}

export const Sidebar: React.FC<ISidebar> = ({ children }) => {
    const theme = useTheme();
    return(
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} display='flex' flexDirection='column' height='100%'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Avatar 
                            sx={{height: theme.spacing(12), width: theme.spacing(12)}} 
                            src={profile}
                        />

                    </Box>

                    <Divider />

                    <Box flex={1} color='green'>
                        <ListItemButton>
                            <ListItemIcon >

                            </ListItemIcon>
                            <ListItemText>
                            Casa
                            </ListItemText>
                        </ListItemButton>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)} >
                {children}
            </Box>
       
        </>
    );
};