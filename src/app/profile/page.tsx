import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Twój Profil</h1>
      <div>
        <p>Email: {session?.user?.email}</p>
        <p>Status: Jesteś zalogowany/a.</p>
      </div>
    </div>
  );
}
