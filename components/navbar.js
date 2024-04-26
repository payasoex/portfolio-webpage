import Logo from "./logo";
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Flex
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({href, path, children}) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
    return (
        <Link 
            as={NextLink} 
            href={href}
            target={target}
            p={2}
            bg={active ? 'glassTeal': "undefined"}
            color={active ? '#202023' : inactiveColor}
            borderRadius={5}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const {path} = props;
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between" >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/skills" path={path}>
                        Skills
                    </LinkItem>
                    <LinkItem href="https://github.com/payasoex/portfolio-webpage" path={path} target="_blank">
                        Source Code
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton/>
                    <Box ml={2} display={{base: "inline-block", md:"none"}}>
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon />} 
                                variant="outline" 
                                aria-label="Options" 
                            />
                            <MenuList>
                                <Link  as={NextLink} href="/" passHref>
                                    <MenuItem>About</MenuItem>
                                </Link>
                                <Link  as={NextLink} href="/works" passHref>
                                    <MenuItem>Works</MenuItem>
                                </Link>
                                <Link  as={NextLink} href="/skills" passHref>
                                    <MenuItem>Skills</MenuItem>
                                </Link>
                                <Link  as={NextLink} href="https://github.com/payasoex/portfolio-webpage" passHref target="_blank">
                                    <MenuItem>Source Code</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
