import { ImageResponse } from "next/og";

// 이미지 크기 정의 (OpenGraph 표준 규격)
export const size = {
  width: 1200,
  height: 630,
};

// 이미지 콘텐츠 타입 정의
export const contentType = "image/png";

// 동적 OG 이미지 생성 함수 (Satori 엔진 활용)
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#000000",
          fontFamily: "sans-serif",
          border: "16px solid #f3f4f6", // 세련된 연회색 보더 테두리
        }}
      >
        {/* 브랜드 명칭 "WeDoDare" */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: "900",
            letterSpacing: "-0.04em",
            color: "#000000",
            lineHeight: 1,
          }}
        >
          WeDoDare
        </div>

        {/* 사용자 피드백 슬로건 문구 "도전하고 기록하다" */}
        <div
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#4b5563", // 차분한 다크 그레이 색상
            marginTop: "24px",
            letterSpacing: "0.08em",
          }}
        >
          도전하고 기록하다
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
