import Moment from "react-moment";
import logo from "../assets/Logo.png";

function Navbar({ info }) {
  return (
    <nav className="py-5 px-8 bg-white w-full flex justify-between">
      <div className="w-1/3">
        <img src={logo} alt="" />
      </div>

      <div className="text-center font-bold text-indigo-900 text-xl w-1/3">
        <h6>Early Warning System (EWS) BPBD Kabupaten Bekasi</h6>
        <h6>Zona Pantauan {info?.iot_node?.serial_number}</h6>
        <h1 className="text-2xl">ID Perangkat {info?.serial_number}</h1>
      </div>

      <div className="text-indigo-900 w-1/3 text-right">
        <Moment format="LLLL" locale="id-ID" className="font-medium"></Moment>
        <p className="">{info?.area}</p>
      </div>
    </nav>
  );
}

export default Navbar;
