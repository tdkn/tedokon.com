import { Icon } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FaIconProps {
  icon: IconProp;
}

export const FaIcon = (props: FaIconProps) => {
  const { icon } = props;
  return (
    <Icon
      as={FontAwesomeIcon}
      icon={icon}
      display="block"
      transition="color 0.2s"
      _hover={{ color: "gray.600" }}
    />
  );
};
