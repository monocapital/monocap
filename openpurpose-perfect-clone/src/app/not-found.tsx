import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main className="w-full bg-white font-suisse text-primary antialiased">
      <Header />
      <p className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">Not Found</p>
    </main>
  );
}
