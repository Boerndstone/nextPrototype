"use client";

import React from "react";
import { TextField, Button } from "@radix-ui/themes";
import { FaBug } from "react-icons/fa";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Search the docs…">
        <TextField.Slot>
          <FaBug height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <SimpleMDE placeholder="Reply to comment…" />
      <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
