import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const jsonString = JSON.stringify(body.content);

  const post = await prisma.post.create({
    data: {
      title: body.title,
      summary: body.summary,
      image: body.image,
      readingTime: body.readingTime,
      tag: body.tag,
      content: jsonString,
    },
  });
  return NextResponse.json({
    data: post,
    message: "Successfully created a post",
  });
};
