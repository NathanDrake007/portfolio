import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// model Project {
//   id          String   @id @default(uuid())
//   title       String
//   description String
//   image       String
//   date        DateTime @default(now())
//   published   Boolean
//   featured    Boolean
//   codeLink    String
//   hostedLink  String
// }
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log(body);
  const project = await prisma.project.create({
    data: body,
  });
  return NextResponse.json({
    data: project,
    message: "Successfully created a project",
  });
};
