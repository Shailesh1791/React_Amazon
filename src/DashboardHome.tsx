import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import CategoryIcon from '@mui/icons-material/Category';
import PaymentIcon from '@mui/icons-material/Payment';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import MoreIcon from '@mui/icons-material/MoreVert';
import MoreIconInfo from '@mui/icons-material/More';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { dashboardMappingService } from './services';
import DashboardMobileMenu from './components/DashboardMobileMenu';
import DashboardMenu from './components/DashboardMenu';
import { AppBar, Drawer, DrawerHeader, Search, SearchIconWrapper, StyledInputBase } from './components/DashboardMenuDrawer';

const ProductDashboard = React.lazy(() => import("./ProductManagement/ProductDashboard"));
const OrderDashboard = React.lazy(() => import("./OrderManagement/OrderDashboard"));
const PaymentDashboard = React.lazy(() => import("./PaymentManagement/PaymentDashboard"));
const InventoryDashboard = React.lazy(() => import("./InventoryManagement/InventoryDashboard"));
const CartDashboard = React.lazy(() => import("./CartManagement/CartDashboard"));
const NotificationDashboard = React.lazy(() => import("./NotificationManagement/NotificationDashboard"));
const OrderTrackingDashboard = React.lazy(() => import("./OrderTracking/OrderTrackingDashboard"));
const ReactWindow = React.lazy(() => import("./Mixed/ReactWindow"));

const DashbaordHome: React.FC = (): React.ReactElement => {
    const serviceCall = dashboardMappingService();
    const [currentPage, setCurrentPage] = useState("Order");
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    useEffect(() => {
        const orderServiceCall = async () => {
            const data = await serviceCall.getOrderDataList();
            console.log("order list", data);
        };
        const productServiceCall = async () => {
            const data = await serviceCall.getProductDataList();
            console.log("product list", data);
        }
        orderServiceCall();
        productServiceCall();
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={[
                            {
                                marginRight: 5,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Amazon Store
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Order', 'Product', 'Payment', 'Inventory', 'Notification', "Cart", "Order Track"].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={[{ minHeight: 48, px: 2.5, }, open ? { justifyContent: 'initial', } : { justifyContent: 'center', },]}
                                onClick={() => setCurrentPage(text)}
                            >
                                <ListItemIcon
                                    sx={[{ minWidth: 0, justifyContent: 'center', }, open ? { mr: 3, } : { mr: 'auto', },]}
                                >
                                    {index === 0 ? <AssignmentAddIcon />
                                        : index === 1 ? <CategoryIcon />
                                            : index === 2 ? <PaymentIcon />
                                                : index === 3 ? <InventoryIcon />
                                                    : index === 4 ? <NotificationsIcon />
                                                        : index === 5 ? <ShoppingCartCheckoutIcon />
                                                            : <TrackChangesIcon />}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={[open ? { opacity: 1, } : { opacity: 0, },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Contact', 'Help & Support', 'SignOut', "Others"].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton sx={[{ minHeight: 48, px: 2.5, },
                            open ? { justifyContent: 'initial', } : { justifyContent: 'center', },]}
                                onClick={() => setCurrentPage(text)}
                            >
                                <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center', },
                                open ? { mr: 3, } : { mr: 'auto', },]}
                                >
                                    {index === 0 ? <ContactsIcon />
                                        : index === 1 ? <ContactSupportIcon />
                                            : index === 2 ? < LogoutIcon /> : <MoreIconInfo />}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={[open ? { opacity: 1, } : { opacity: 0, },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {<DashboardMobileMenu />}
            {<DashboardMenu />}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {currentPage === "Order" ? <OrderDashboard />
                    : currentPage === "Product" ? <ProductDashboard />
                        : currentPage === "Payment" ? <PaymentDashboard />
                            : currentPage === "Inventory" ? <InventoryDashboard />
                                : currentPage === "Cart" ? <CartDashboard />
                                    : currentPage === "Notification" ? <NotificationDashboard />
                                        : currentPage === "Contact" ? <OrderTrackingDashboard />
                                            : currentPage === "Help & Support" ? <OrderTrackingDashboard />
                                                : currentPage === "SignOut" ? <OrderTrackingDashboard />
                                                    : <ReactWindow />}

            </Box>
        </Box>
    );
};

export default React.memo(DashbaordHome);