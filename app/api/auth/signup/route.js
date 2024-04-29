import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    if (user) {
      return NextResponse.json(
        { message: "User Already exists" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSaltSync(10);
    const passwordHasd = await bcrypt.hash(password, salt);
    const newPost = await prisma.user.create({
      data: {
        email,
        password: passwordHasd,
        name,
      },
    });
    return Response.json(newPost);
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}
