import { NativeBaseProvider, Box } from "native-base";

function Chat() {
    return ( 
        <NativeBaseProvider>
            <Box>
                Hello
            </Box>
        </NativeBaseProvider>
     );
}

export default Chat;