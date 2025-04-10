import Navbar from "./components/Navbar";
import Herosection from "./Herosection/page";
import Ourservices from "./Ourservices/page";
import ClientsLine from "./clientsline/page";
import Topchoice from "./Topchoice/page"
import Ourprocess from "./Ourprocess/page"



export default function Home() {
  return (
   <>
    <Navbar/>
    <Herosection/>
    <Ourservices/>
    <ClientsLine/>
    <Topchoice/>
    <Ourprocess/>
    
   </>
  );
}
