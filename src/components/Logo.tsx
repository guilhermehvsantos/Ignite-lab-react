import LightUsApp from "../assets/logo.png"
export function Logo() {
  return (
    <div className="flex py-auto items-center">
      <img className="max-h-[60px]" src={LightUsApp} alt="Logo do lightUsApp" />
      <strong className="text-5xl">
        Ignite Lab
      </strong>
    </div>
  );
}

