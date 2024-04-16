import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}

const AreasDetailPage = async ({ params }: Props) => {
  //   if (typeof params.id != "number") {
  //     notFound();
  //   }
  const area = await prisma.area.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!area) {
    notFound();
  } else {
    return (
      <div>
        <Heading>{area.name}</Heading>
        <Flex gap="3" my="2">
          <Text>{area.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose">{area.latitude}</Card>
      </div>
    );
  }
};

export default AreasDetailPage;
