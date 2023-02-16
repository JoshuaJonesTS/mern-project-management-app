import Clients from "../components/Clients";
import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
        <AddClientModal/>
        <Projects/>
        <Clients/>
    </>
  )
}
