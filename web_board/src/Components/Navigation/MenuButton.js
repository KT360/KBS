import React from "react";
import { VStack, Icon, Button, Text } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'

//Big button with Icon to navigate to the next page
export default function MenuButton({action, icon ,text, colorScheme, ...props}){

    return (
            <Button margin={5} width='200px' height='200px'  onClick={action} colorScheme={colorScheme} {...props}>
                <VStack>
                    <Icon as={icon} boxSize={20}/>
                    <Text>{text}</Text>
                </VStack>
            </Button>
    )
}