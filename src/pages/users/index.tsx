import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from 'next/link';
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { GetServerSideProps } from "next";

export default function UserList(/*{ users }*/) {
  const [page, setPage] = useState(1);
  const { data , isLoading, isFetching, error } = useUsers(page, /* { initialData: users, } */);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

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
              <Heading size='lg' fontWeight='normal'>
                Listagem de usuários
                { isFetching && !isLoading && <Spinner size='sm' color='gray.500' ml='4' /> }
              </Heading>
              <Link href='/users/create' passHref>
                <Button 
                  as='a'
                  size='sm'
                  fontSize='small'
                  colorScheme='pink'
                  leftIcon={<Icon as={RiAddLine} fontSize={20}/>}
                >
                  Criar novo
                </Button>
              </Link>
          </Flex>

          { isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : ( 
            <>
              <Table
                colorScheme='whiteAlpha'
              >
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color='gray.300' widht='8'>
                      <Checkbox colorScheme='pink' />
                    </Th>
                    <Th>Usuário</Th>
                    { isWideVersion && <Th>Data de cadastro</Th> }
                    { isWideVersion && <Th width='6'>Ações</Th> }
                  </Tr>
                </Thead>
                <Tbody> 
                  {data.users.map(user => {
                    return (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme='pink' />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight='bold'>{user.name}</Text>
                          <Text fontSize='sm'color='gray.300'>{user.email}</Text>
                        </Box>
                      </Td>
                      { isWideVersion && <Td>{user.createdAt}</Td> }
                      { isWideVersion && <Td>
                        <Button 
                          as='a' 
                          size='sm'
                          fontSize='small'
                          colorScheme='green'
                          leftIcon={<Icon as={RiPencilLine} fontSize={18}/>}
                        >
                          Editar
                        </Button>
                      </Td>}
                    </Tr>)
                  })}                  
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )} 
        </Box>
      </Flex>
    </Box>
  );
}

/*
exemplo ssr
export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getUsers(1)

  return {
    props: {
      users
    }
  }
}
*/