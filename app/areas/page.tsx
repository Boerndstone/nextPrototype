import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes/dist/cjs/index.js";

const issuesPage = async () => {
  const areas = await prisma.area.findMany();
  const hiddenOnMobile = "hidden md:table-cell";
  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="issues/new">Neues Gebiet</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className={hiddenOnMobile}>
              Description
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Date
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {areas.map((area) => (
            <Table.Row key={area.id}>
              <Table.Cell>{area.name}</Table.Cell>
              <Table.Cell>{area.orientation}</Table.Cell>
              <Table.Cell>{area.online}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default issuesPage;
