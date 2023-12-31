import Link from 'next/link'
// import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
height: 40px;
line-height: 20px;
padding: 10px;
`

const Logo = () => {
    return (
        <Link href="/" >
            <LogoBox>
                <Text 
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    letterSpacing={.2}
                    ml={3}
                >
                    Javier Retamal
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo