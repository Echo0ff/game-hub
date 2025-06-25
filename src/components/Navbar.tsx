import { ColorModeButton } from "@/components/ui/color-mode"
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import SearchBar from "./SearchBar"

interface NavbarProps {
    onSearch: (search: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  return (
    <HStack>
        <Image src={logo} alt="logo" boxSize="60px" />
        <ColorModeButton />
        <SearchBar onSearch={onSearch} />
    </HStack>
  )
}

export default Navbar