"use client";

import React, { use, useState } from "react";
import { TextField, Button, Callout } from "@radix-ui/themes";
import { FaBug } from "react-icons/fa";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller, set } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>
            You will need admin privileges to install and access this
            application.
          </Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("Un unexpected error occurred. Please try again later.");
          }
        })}
      >
        <TextField.Root placeholder="Search the docs…" {...register("title")}>
          <TextField.Slot>
            <FaBug height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Reply to comment…" {...field} />
          )}
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
