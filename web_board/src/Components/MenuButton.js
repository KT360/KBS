import React from "react";
import { VStack, Icon, Button, Text } from "@chakra-ui/react";

export default function MenuButton({action, icon ,text, colorScheme = "green", ...props}){

    return (
        <Button onClick={action} colorScheme={colorScheme} {...props}>
            <VStack>
                <Icon as={icon} boxSize={6} />
                <Text>{text}</Text>
            </VStack>
        </Button>

    )
}