import Header from "@/components/header";
import ListItem from "@/components/list-item";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>
          <section className="mb-2">
            <h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
              <ListItem 
                image="/Liked_Playlist.png"
                name="Liked Songs"
                href="liked"
              />
            </section>
          </section>
        </Header>
        <section className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold">Latest Tracks</h1>
          </div>
          <div>
            List of Songs
          </div>
        </section>
    </main>
  );
}
