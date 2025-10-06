import OffersView from "@/views/OffersView/OffersView";

export default function Home() {
  const isLoggedIn = true;

  return isLoggedIn ? <OffersView /> : null;
}
