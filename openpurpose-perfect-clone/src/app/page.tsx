import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GreenBall from "@/components/GreenBall";

export default function Home() {
  return (
    <main className="w-full bg-white font-suisse text-primary antialiased">
      <main className="grid h-svh place-items-center">
        <Header />
        <GreenBall />
        <Footer />
      </main>
      <h2
        id="radix-:r1:"
        style={{
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0px, 0px, 0px, 0px)",
          whiteSpace: "nowrap",
          overflowWrap: "normal"
        }}
      >
        Help dialog
      </h2>
    </main>
  );
}
