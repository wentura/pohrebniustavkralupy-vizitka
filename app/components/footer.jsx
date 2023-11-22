import Menu from "./menu";
import Signature from "./signature";

export default function Footer() {
  return (
    <div className="text-center">
      <Menu klas="flex justify-center" />
      <Signature />
    </div>
  );
}
