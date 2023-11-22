import Link from "next/link";

export default function Menu({ klas }) {
  klas ? klas : "";
  return (
    <div className={`flex ${klas}`}>
      <ul className="flex gap-8">
        <li>
          <Link href="/pohrby">pohřby</Link>
        </li>
        <li>
          <Link href="/parte">parte</Link>
        </li>
        <li>informace pro pozůstalé</li>
        <li>smuteční katalog</li>
        <li>galerie</li>
        <li>o nás</li>
        <li>kontakt</li>
      </ul>
    </div>
  );
}
