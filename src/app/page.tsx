import DynamicSettings from "./components/FloatingNavBar/DynamicSettings";
import { NavBar } from "./components/FloatingNavBar/NavBar";
import { Sliders } from "./components/Slider/Sliders";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 w-full h-screen justify-center items-center">
      <NavBar />
    </div>
  );
}
