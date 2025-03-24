Next.js の Server Actions において [Version Skew を検知できない問題](https://github.com/vercel/next.js/issues/75541)へのワークアラウンド

## 検知できていることの確認方法

1. `npm run build`
2. `npm run start`
3. ブラウザで `http://localhost:3000` にアクセスし、そのまま放置する
4. サーバーを停止
5. deploymentId.ts の内容を変更
6. `npm run build`
7. `npm run start`
8. ブラウザの開発者ツールのネットワークパネルを開いておいた上で、「Server Action」ボタンをクリックする
9. ミドルウェアからエラーレスポンスが返ってくることを確認する
