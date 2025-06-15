import Logo from "./Logo";
import Info from "./Info";

function Nav() {
  return (
    <>
      <div className="flex justify-between py-6">
        <Logo className=" text-2xl" />
        <Info className=" " />
      </div>
    </>
  );
}

export default Nav;
