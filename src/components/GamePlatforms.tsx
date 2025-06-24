import { HStack, Icon } from "@chakra-ui/react"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import type { Platform } from "../hooks/useGameList"

const platformIcons: Record<string, React.ElementType> = {
  pc: FaWindows,
  "playstation5": FaPlaystation,
  xbox: FaXbox,
  "nintendo-switch": BsNintendoSwitch,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe
}

interface GamePlatformsProps {
  platforms: Platform[];
}

const GamePlatforms = ({ platforms }: GamePlatformsProps) => {
  return (
    <HStack>
      {platforms.map((platform: Platform) => {
        const IconComponent = platformIcons[platform.platform.slug];
        if (!IconComponent) {
          return null;
        }
        return (
          <Icon key={platform.platform.id} as={IconComponent} color="gray.500" />
        );
      })}
    </HStack>
  )
}

export default GamePlatforms