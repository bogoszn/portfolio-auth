import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // 1. Basic validation
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Name, email, and password are required." },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: "Password must be at least 8 characters." },
      { status: 400 },
    );
  }

  // 2. Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json(
      { error: "An account with this email already exists." },
      { status: 409 },
    );
  }

  // 3. Hash the password — this is the line that matters most in this whole project
  const hashedPassword = await bcrypt.hash(password, 12);

  // 4. Store the user with the HASH, never the raw password
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json(
    { id: user.id, email: user.email, name: user.name },
    { status: 201 },
  );
}
