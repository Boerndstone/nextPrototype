"use client";

import React, { use, useState } from "react";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import { FaBug } from "react-icons/fa";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller, set } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
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
            setSubmitting(true);
            axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setSubmitting(false);
            setError("Un unexpected error occurred. Please try again later.");
          }
        })}
      >
        <TextField.Root placeholder="Search the docs…" {...register("title")}>
          <TextField.Slot>
            <FaBug height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Reply to comment…" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
