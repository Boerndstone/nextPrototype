import { Button, Link } from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issuses/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
