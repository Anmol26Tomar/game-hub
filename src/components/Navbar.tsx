import { HStack, Image, Text} from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import logo from "../assets/logo.png"
import SearchInput from './SearchInput'
const Navbar = () => {
  return (
    <HStack padding={'10px'}>
        <Image src={logo} boxSize="5%"/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar