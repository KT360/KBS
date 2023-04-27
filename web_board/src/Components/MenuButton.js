import React from "react";
import { VStack, Icon, Button, Text } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'

export default function MenuButton({action, icon ,text, colorScheme, ...props}){

    return (
            <Button width='200px' height='200px' onClick={action} colorScheme={colorScheme} {...props}>
                <VStack>
                    <Icon as={icon}/>
                    <Text>{text}</Text>
                </VStack>
            </Button>
    )
}