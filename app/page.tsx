import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
       <h1 className="text-center text-4xl font-bold">Lazy Load List</h1>
       <Hero />
    </>
  );
}
