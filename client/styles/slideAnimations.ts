import { keyframes } from "@chakra-ui/react";

const fromLeft = keyframes`
    0% { 
        transform: translateX(-100vw);
    }
    100% { 
        transform: translateX(0);
    }
`;

export const slideInLeft = `${fromLeft} 1s forwards`;

const fromRight = keyframes`
    0% { 
        transform: translateX(200vw);
    }
    100% { 
        transform: translateX(0);
    }
`;

export const slideInRight = `${fromRight} 1s forwards`;
