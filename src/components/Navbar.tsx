import { ColorModeButton } from "@/components/ui/color-mode"
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} alt="logo" boxSize="60px" />
        <ColorModeButton />
    </HStack>
  )
}

export default Navbar