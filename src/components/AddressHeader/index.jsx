// import { useState } from 'react';
import {VStack, Heading, Spacer, Text, Flex, Box, Spinner, Stack ,   Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,} from '@chakra-ui/react';
import { useFetch } from '../../hooks/useFetch';
import { useSendInfo } from '../../hooks/useSendInfo';

import {format} from 'date-fns'


const AddressHeader = () => {
  const fecha = new Date(); 
  const fechaRegistro = format(new Date(fecha), 'yyyy-MM-dd')
  
  const { data, loading, error } =  useFetch('https://api.ipbase.com/v1/json/')

  useSendInfo('http://localhost:3000/nueva-hora', fechaRegistro, data.latitude, data.longitude, data.ip, data.city)



  return (
    <Box >
      { error && 
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      }
      <VStack spacing={4}>
      <Heading size="lg">Registrar Datos</Heading>
      <Stack margin={3}>
          <Box margin={4}>
            <Text fontSize='lg' as='b'>Fecha:</Text>
            <Text fontSize='md' as='i'>{format(new Date(fecha), 'dd-MM-yyyy')}</Text>
          </Box>
          <Spacer />
          <Box margin={4}>
            <Text fontSize='lg' as='b'>Ciudad:</Text>
            <Text fontSize='md' as='i'>{loading ? <Spinner /> :  data.city}</Text>
          </Box>
          <Spacer />
          <Box margin={4}>
            <Text fontSize='lg' as='b'>Latitud:</Text>
            <Text fontSize='md' as='i'>{loading ? <Spinner /> :  data.latitude}</Text>
          </Box>
          <Spacer />
          <Box margin={4}>
            <Text fontSize='lg' as='b'>Longitud:</Text>
            <Text fontSize='md' as='i'>{loading ? <Spinner /> :  data.longitude}</Text>
          </Box>
          <Spacer />
          <Box margin={4}>
            <Text fontSize='lg' as='b'>Direccion IP:</Text>
            <Text fontSize='md' as='i'>{loading ? <Spinner /> :  data.ip}</Text>
          </Box>
          <Spacer />
        </Stack>
      </VStack>
    </Box> 
  )
}

export default AddressHeader
