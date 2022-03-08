import { useEffect, useState } from 'react'
import { Box, Container, Button, Text, Center, Heading, Input } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  const [url, setUrl] = useState("https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world")

  useEffect(() => {
    console.log(url)
  }, [url])

  return (
    <Box mt={16}>
      <Container maxW="container.lg">
        <Heading mb={8}>Deploy Button</Heading>
        <Text mb={8}>Deploy public Git projects with the Deploy Button, providing an easy-to-use flow to set up new projects with Vercel and GitHub, GitLab, or Bitbucket.</Text>
        <Input 
          onChange={(e) => setUrl("https://vercel.com/new/clone?repository-url=" + e.target.value)}
          mb={8}
        />
        <Center>
          <Link href={url}>
            <Button bgColor="dodgerblue" color="white">Deploy</Button>
          </Link>
        </Center>
      </Container>
    </Box>
  )
}
