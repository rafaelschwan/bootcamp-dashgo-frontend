import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'
      >
        <Sidebar />
        <Box
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p='8'
        >
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Listagem de usuários</Heading>
            <Button 
              as='a'
              size='sm'
              fontSize='small'
              colorScheme='pink'
              leftIcon={<Icon as={RiAddLine} fontSize={20}/>}
            >
              Criar novo
            </Button>
          </Flex>

          <Table
            colorScheme='whiteAlpha'
          >
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' widht='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width='6'>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Rafael Schwan</Text>
                    <Text fontSize='sm'color='gray.300'>rafaelschwan@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  10 de outubro de 2021
                </Td>
                <Td>
                  <Button 
                    as='a'
                    size='sm'
                    fontSize='small'
                    colorScheme='green'
                    leftIcon={<Icon as={RiPencilLine} fontSize={18}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Rafael Schwan</Text>
                    <Text fontSize='sm'color='gray.300'>rafaelschwan@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  10 de outubro de 2021
                </Td>
                <Td>
                  <Button 
                    as='a'
                    size='sm'
                    fontSize='small'
                    colorScheme='green'
                    leftIcon={<Icon as={RiPencilLine} fontSize={18}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Rafael Schwan</Text>
                    <Text fontSize='sm'color='gray.300'>rafaelschwan@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  10 de outubro de 2021
                </Td>
                <Td>
                  <Button 
                    as='a'
                    size='sm'
                    fontSize='small'
                    colorScheme='green'
                    leftIcon={<Icon as={RiPencilLine} fontSize={18}/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>

          </Table>

          <Pagination />

        </Box>
      </Flex>
    </Box>
  );
}