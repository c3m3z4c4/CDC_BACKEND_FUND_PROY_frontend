
import {Box, Table, Thead, Tbody, Tr, Th, Td, Skeleton, SkeletonCircle, SkeletonText  } from '@chakra-ui/react';
import {format} from 'date-fns'
import { useFetch } from '../../hooks/useFetch'
// eslint-disable-next-line react/prop-types
const RegisterTable = () => {

const { data, loading, error } =  useFetch('https://backend-cemeza1.vercel.app/horas')


  return (
    <Box>
      {error && <li>Error: {error}</li>}
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Fecha</Th>
            <Th>Latitud</Th>
            <Th>Longitud</Th>
            <Th>Ciudad</Th>
            <Th>Dirección IP</Th>
          </Tr>
        </Thead>
        {loading ? 
            <Tbody>
                <Tr>
                  <Td><Skeleton  height='20px' /></Td>
                  <Td><Skeleton  height='20px' /></Td>
                  <Td><Skeleton  height='20px' /></Td>
                  <Td><Skeleton  height='20px' /></Td>
                  <Td><Skeleton  height='20px' /></Td>
                </Tr>
            </Tbody>:
        <Tbody>
          {data.map(({id, fecha, latitud, longitud, ipaddress, ciudad}) => (
            <Tr key={id}>
              {/* <Td>{format(new Date(data.fecha), 'dd-MM-yyyy')}</Td> */}
              <Td>{format(new Date(fecha), 'dd-MM-yyyy')}</Td>
              <Td>{latitud}</Td>
              <Td>{longitud}</Td>
              <Td>{ciudad}</Td>
              <Td>{ipaddress}</Td>
            </Tr>
          ))}
        </Tbody>}
      </Table>
    </Box>
  )
}

export default RegisterTable
