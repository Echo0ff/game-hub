import { Select, Portal, createListCollection } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatform";
import type { FilterPlatform } from "../hooks/usePlatform";
import { useMemo } from "react";

interface Props {
  onSelectPlatform: (platform: FilterPlatform) => void;
}

const SelectPlateform = ({ onSelectPlatform }: Props) => {
  const { platforms } = usePlatforms();
  const collection = useMemo(() => {
    // platforms 已经是 Platform[] 数组，不需要 .results
    const items = platforms || [];
    
    return createListCollection<FilterPlatform>({
      items,
      itemToString: (item) => item.name,
      itemToValue: (item) => item.id.toString(),
    });
  }, [platforms]); // 依赖数组也应该是 platforms
  return (
    <Select.Root
      collection={collection}
      size="md"
      variant="outline"
      marginBottom={2}
      width="180px"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select platform" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content >
            {collection.items.map((platform) => (
              <Select.Item onClick={() => onSelectPlatform(platform)} item={platform} key={platform.id}>
                {platform.name}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default SelectPlateform;
