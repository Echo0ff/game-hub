import { Menu, Button, Portal } from "@chakra-ui/react";
import { useState } from "react";

const SortGameList = ({
  onSelectOrdering,
}: {
  onSelectOrdering: (ordering: string) => void;
}) => {
  const ordering = [
    { value: "relevance", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-added", label: "Added" },
    { value: "-created", label: "Created" },
    { value: "-updated", label: "Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Metacritic" },
  ];
  const [selectedOrdering, setSelectedOrdering] = useState<string | null>(null);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          marginBottom={2}
          height="40px"
          width="180px"
          fontWeight={"bold"}
          color={"gray.500"}
        >
          {ordering.find((order) => order.value === selectedOrdering)?.label ||
            "Sort by: Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {ordering.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => {
                  setSelectedOrdering(order.value);
                  onSelectOrdering(order.value);
                }}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortGameList;
