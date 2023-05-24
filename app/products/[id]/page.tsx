import { Metadata } from "next";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
type Props = { params: { id: string } };
export function generateMetadata({ params: { id } }: Props): Metadata {
  return {
    title: `it is products #${id}`,
  };
}
export default function Page({ params: { id } }: Props) {
  // const { id } = params;
  return (
    <div>
      <h1>it is product #{id}</h1>
    </div>
  );
}
export const dynamicParams = false;
