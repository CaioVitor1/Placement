import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { Box, width } from '@mui/system';
import profile from '../../../assets/caio.png';
import { UseDrawerContext } from '../../contexts';

interface ISidebar {
    children: React.ReactNode
}

export const Sidebar: React.FC<ISidebar> = ({ children }) => {
    const theme = useTheme();
    const downMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const { DrawerIsOpen, toggleDrawer } = UseDrawerContext();

    return(
        <>
            <Drawer open={DrawerIsOpen} variant={downMatch ?  'temporary' : 'permanent'} onClose={toggleDrawer}>
                <Box width={theme.spacing(28)} display='flex' flexDirection='column' height='100%'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Avatar 
                            sx={{height: theme.spacing(12), width: theme.spacing(12)}} 
                            src={profile}
                        />

                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Página inicial'>
                            Casa
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={downMatch ? 0 : theme.spacing(28)} >
                {children}
            </Box>
       
        </>
    );
};