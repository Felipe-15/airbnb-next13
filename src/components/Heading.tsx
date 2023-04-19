"use client";

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading = ({ title, center, subtitle }: Props) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div
        className="
                font-light
                text-neutral-500
                mt-2
            "
      ></div>
    </div>
  );
};

export default Heading;
