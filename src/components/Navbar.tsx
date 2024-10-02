import { HStack, Image, Text} from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
        <Image src={logo} boxSize="5%"/>
        <Text fontSize={'3xl'}>GAME HUB</Text>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar