// Homepage

export default function Home() {
  return (
      <main className="relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden bg-red-800">
        <h3 id="header" className="font-rocker text-9xl hidden lg:block">L.A. Killer</h3>
        <div id="header-stacked" className="text-7xl sm:text-8xl flex flex-col text-center justify center lg:hidden">
          <h3 className="font-rocker">
            L.A.
          </h3>
          <h3 className="font-rocker">
            Killer
          </h3>
        </div>
      </main>
  );
}