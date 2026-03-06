export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Next.js Docker サンプル
            </h3>
            <p className="text-gray-300 text-sm">
              Next.jsアプリケーションをDocker化するサンプルプロジェクト
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://nextjs.org"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Next.js 公式サイト
                </a>
              </li>
              <li>
                <a
                  href="https://docker.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Docker 公式サイト
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">お問い合わせ</h3>
            <p className="text-gray-300 text-sm">
              GitHub
              Actionsについてのお問い合わせは、GitHubリポジトリのIssuesをご利用ください。
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GitHubActions-dojo サンプル. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
