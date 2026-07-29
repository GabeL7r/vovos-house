import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const TERRACOTTA = "#c45e39";
const CREAM = "#f6eedc";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: TERRACOTTA,
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 20,
            height: 18,
            background: CREAM,
            clipPath: "polygon(50% 0%, 100% 42%, 100% 100%, 0% 100%, 0% 42%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
