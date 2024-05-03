import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import {
  Grid,
  Box,
  Card,
  Flex,
  Heading,
  Text,
  Button,
  Link,
} from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import EditIssueButton from "./EditIssueButton";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  //   if (typeof params.id != "number") {
  //     notFound();
  //   }
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my="2">
          <IssueStatusBadge status={issue.status}></IssueStatusBadge>
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
