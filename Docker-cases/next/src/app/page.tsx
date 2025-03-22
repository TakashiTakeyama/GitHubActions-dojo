import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Next.js Docker サンプル
        </h1>
        <p className="text-gray-600 mb-6">
          このアプリケーションは、Next.jsとDockerを使用して構築されたサンプルアプリケーションです。
        </p>

        {/* publicフォルダから画像を読み込むサンプル */}
        <div className="my-8 flex justify-center">
          <div className="relative w-full max-w-md h-64 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/zoro.png"
              alt="Next.js Logo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            このアプリケーションは以下の技術スタックを使用しています：
          </p>
          <ul className="list-disc list-inside mt-2 text-blue-700">
            <li>Next.js 14</li>
            <li>React 18</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            公開フォルダの使い方
          </h2>
          <p className="text-gray-600">
            画像やファビコンなどの静的ファイルは{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">public/</code>{" "}
            ディレクトリに配置します。
            これらのファイルはビルドプロセスを通さずに、直接ウェブルートからアクセス可能です。
          </p>
          <div className="mt-2 text-sm text-gray-500">
            例:{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              /images/nextjs-logo.jpg
            </code>{" "}
            は{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              public/images/nextjs-logo.jpg
            </code>{" "}
            にあります。
          </div>
        </div>
      </div>
    </div>
  );
}
