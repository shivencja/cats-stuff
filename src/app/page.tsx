import OffersView from "@/views/OffersView/OffersView";

export default async function Home() {
  const isLoggedIn = true;
  return isLoggedIn ? <OffersView /> : null;
}
