import { FaIcon } from "@/components/Icon";
import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEdit, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  return (
    <Center w="100vw" h="100vh" bg="#f8d685">
      <Flex
        rounded="xl"
        overflow="hidden"
        boxShadow="2xl"
        direction={["column", "row"]}
      >
        <Image
          src="https://github.com/tdkn.png"
          width={180}
          height={180}
          objectFit="cover"
          alt="avatar"
        />
        <VStack p={5} align="start" bg="white">
          <Heading as="h1" size="lg">
            Shun Tedokon
          </Heading>
          <Box>
            <Text>App Developer in Okinawa, Japan.</Text>
            <Text>{"I love Swift & JavaScript."}</Text>
          </Box>
          <Spacer />
          <ButtonGroup size="sm" isAttached variant="outline">
            <Tooltip label="Twitter">
              <IconButton
                as="a"
                mr="-px"
                aria-label="Twitter"
                icon={<FaIcon icon={faTwitter} />}
                href="https://twitter.com/tdkn_"
              />
            </Tooltip>
            <Tooltip label="GitHub">
              <IconButton
                as="a"
                mr="-px"
                aria-label="GitHub"
                icon={<FaIcon icon={faGithub} />}
                href="https://github.com/tdkn"
              />
            </Tooltip>
            <Tooltip label="Facebook">
              <IconButton
                as="a"
                mr="-px"
                aria-label="Facebook"
                icon={<FaIcon icon={faFacebook} />}
                href="https://facebook.com/shun.tedokon"
              />
            </Tooltip>
            <Tooltip label="Blog">
              <IconButton
                as="a"
                aria-label="Blog"
                icon={<FaIcon icon={faEdit} />}
                href="https://tdkn.dev"
              />
            </Tooltip>
            <Tooltip label="Email">
              <IconButton
                as="a"
                aria-label="Email"
                icon={<FaIcon icon={faEnvelope} />}
                href="mailto:web@tedokon.com"
              />
            </Tooltip>
          </ButtonGroup>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Home;
