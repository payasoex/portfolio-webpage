import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'


import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover {
    transform: rotate(20deg);
`

const Logo = () => {
    const footPrintImg = `/images/footprint.png`

    return (
        <Link href="/" passHref>
            <LogoBox>
                <Image src={footPrintImg} alt="Logo" width={30} height={30} />
                <Text
                    color={useColorModeValue('gray.700', 'white')}
                    ml={2}
                    display={{ base: 'none', md: 'block' }}
                >
                    Javier Retamal
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo