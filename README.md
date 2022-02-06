# FilmWorld

## URL: https://filmworld.app/

<br>

## トップページ

![filmworld_top_pc](https://user-images.githubusercontent.com/74496398/152686017-24bb7afa-80ab-4c2b-8adf-4cbc71edffba.png)

<br>

## レスポンシブ対応

![filmworld_top_mobile](https://user-images.githubusercontent.com/74496398/152686490-37e5b583-746b-47b7-bbb3-8c8e093f3e35.png)

<br>

## アプリケーション概要

フロントエンドフレームワークに [Next.js](https://nextjs.org/) を、外部 API に [TMDb](https://www.themoviedb.org/) を使用した映画情報検索アプリケーションです。

<br>

## 使用した技術

- react 17.0.2
- Next.js 12.0.7
- Material-UI 5.2.8
- ESLint 8.6.0
- swr 1.1.2
- Jest (今後追加予定)

<br>

## インフラ

![filmworld_infrastructure](https://user-images.githubusercontent.com/74496398/152685644-41643163-c550-4df6-aefc-6e42f3df71e9.png)

<br>

## 機能・特徴一覧

- swr を利用した外部 API からのデータ取得
  - カスタムフックの作成
- 映画表示機能
  - 各種情報に応じた一覧表示
    - 人気
    - 歴代興行収入
    - ジャンル
    - 出演キャスト
  - ソート機能
    - 人気順
    - 興行収入順
    - 公開日順
  - ページネーション機能
    - Material-UI の pagination component を利用
- お気に入り保存機能
  - データの保存先は、localstorage を利用
- Material-UI を使用したモダンな UI
- レスポンシブ対応
  - PC・タブレットでは、ドロワーメニュー
  - スマートフォンでは、ボトムメニュー
