import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserDTO } from "@/types/users";
import { ApiErrorKey } from "@/types/errors";
import { UserRole } from "@/types/users";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    // this call is only aviable for logged admin users
    if (!user || user.role !== UserRole.ADMIN) {
      return NextResponse.json(
        {
          errors: [{ key: ApiErrorKey.UNAUTHORIZED }],
        },
        { status: 403 }
      );
    }

    const userKeys = [];
    for await (const key of kv.scanIterator({ match: "user:*" })) {
      userKeys.push(key);
    }

    if (userKeys.length === 0) {
      return NextResponse.json([]);
    }

    const users = await kv.mget<UserDTO[]>(...userKeys);

    const mappedUsers = users
      .map((user) => {
        if (!user) return null;
        return {
          id: user.id,
          email: user.email,
          role: user.role,
        };
      })
      .filter(Boolean);

    return NextResponse.json(mappedUsers);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return NextResponse.json(
      {
        errors: [
          {
            key: ApiErrorKey.INTERNAL_SERVER_ERROR,
          },
        ],
      },
      { status: 500 }
    );
  }
}
