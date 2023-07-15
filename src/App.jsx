
import { ChakraProvider, Box } from '@chakra-ui/react';

import TablaRegistros from './components/TablaRegistros'
import AddressHeader from './components/AddressHeader';

const App = () => {
  return (
    <ChakraProvider>
      <Box p={2}>
      <AddressHeader />
      </Box>
      <Box p={4}>
        <TablaRegistros />
      </Box>
    </ChakraProvider>
  );
};

export default App;
