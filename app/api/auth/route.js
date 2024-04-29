import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.user.findMany({});
    return Response.json(data);
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}

