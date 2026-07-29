import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const TERRACOTTA = "#c45e39";
const CREAM = "#f6eedc";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: TERRACOTTA,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 108,
            height: 96,
            background: CREAM,
            clipPath: "polygon(50% 0%, 100% 42%, 100% 100%, 0% 100%, 0% 42%)",
            position: "absolute",
            left: 36,
            top: 42,
          }}
        />
        <div
          style={{
            display: "flex",
            width: 16,
            height: 24,
            background: TERRACOTTA,
            position: "absolute",
            left: 82,
            top: 114,
            borderRadius: "3px 3px 0 0",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
