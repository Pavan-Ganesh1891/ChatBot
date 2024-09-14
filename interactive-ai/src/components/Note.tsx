"use client";

import { Note as NoteModel } from "@prisma/client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import AddEditNoteDialog from "./AddEditNoteDialog";

interface NoteProps {
  note: NoteModel;
}
export default function Note({ note }: NoteProps) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const wasUpdated = note.updateAT > note.createAt;
  const createdUpdatedAtTimestamp = (
    wasUpdated ? note.updateAT : note.createAt
  ).toDateString();

  return (
    <>
      <Card
        className="cursor-pointer transition-shadow hover:shadow-lg"
        onClick={() => setShowEditDialog(true)}
      >
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>
            {createdUpdatedAtTimestamp}
            {wasUpdated && "(updated)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{note.content}</p>
        </CardContent>
      </Card>
      <AddEditNoteDialog
        open={showEditDialog}
        setOpen={setShowEditDialog}
        noteToEdit={note}
      />
    </>
  );

  // at page.tsx -->
  //return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
  //{allNotes.map((note)=>(
  // <Note note={note} key={node.id} />)
  //)}
  //   {allNotes.length==00 &&(
  //<div className="col-span-full tedt-center"
  //> {"You dont have any notes yet. Why dont you create one?"}</div>)}
  //</div>
}
