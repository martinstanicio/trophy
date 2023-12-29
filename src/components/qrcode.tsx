import QRSvg from "@wojtekmaj/react-qr-svg";

export type Props = { id: string };

export default function QRCode({ id }: Props) {
  return (
    <div className="border-2 p-4">
      <QRSvg value={id} bgColor="transparent" className="w-full" />
    </div>
  );
}
