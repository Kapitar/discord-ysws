import Image from "next/image";
import Link from "next/link";

export default function Flag() {
  return (
    <Link
      href="https://hackclub.com/"
      target="_blank"
      aria-label="Hack Club's homepage"
      style={{ position: "absolute", top: 4, left: 0, zIndex: 2 }}
    >
      <Image
        src="https://assets.hackclub.com/flag-orpheus-left.svg"
        alt="Hack Club flag"
        style={{
          transformOrigin: "0% 0%",
          transition: "transform 0.1s",
        }}
        className="flag"
        width={128}
        height={128}
      />
    </Link>
  );
}
