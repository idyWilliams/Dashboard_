import Image from "next/image";


export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {


  return (
    <Image
      src={`/logo/app_logo.png`}
      alt="app_logo"
      className=""
      height={26}
      width={70}
    />
  );
}
