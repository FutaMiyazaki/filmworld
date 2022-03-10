# FilmWorld

## URL: https://filmworld.app/

<br>

## トップページ

![filmworld_top_pc](https://user-images.githubusercontent.com/74496398/157682943-0c297de3-2c6e-4da3-80ff-3b1bc57ab000.png)

<br>

## レスポンシブ対応

![filmworld_top_mobile](https://user-images.githubusercontent.com/74496398/157683539-756da445-1c81-4f5e-bbe5-9693fe4ab0d3.png)

<br>

## アプリケーション概要

フロントエンドフレームワークに [Next.js](https://nextjs.org/) を、外部 API に [TMDb](https://www.themoviedb.org/) を使用した映画情報検索アプリケーションです。

<br>

## 作成の背景

様々なサブスプリクションサービスが広まり、最新の映画だけでなく過去に公開された映画を観る機会が増えているかと思います。ですが、これまで公開された膨大な数の映画の中から自分の観たいと思う映画を新発見するのは簡単なことではないと感じました。そこで映画探しの手助けとなるような存在を目指して、本アプリケーションを作成しました。

<br>

## 使用した技術

- react 17.0.2
- Next.js 12.0.7
- TypeScript 4.5.5
- Material-UI 5.2.8
- ESLint 8.6.0
- swr 1.1.2
- Jest (追加予定)

<br>

## インフラ

![filmworld_infrastructure](https://user-images.githubusercontent.com/74496398/152685644-41643163-c550-4df6-aefc-6e42f3df71e9.png)

### Vervel の選定理由

- Next.js も Vercel サーバーも Vercel 社製であり、親和性が高いため
- インフラレイヤを意識することなくアプリケーション開発に集中するため

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
    - 制作会社
  - ソート機能
    - 人気順
    - 興行収入順
    - 公開日順
  - 公開年による絞り込み機能
  - オススメ映画表示機能
    - ジャンルおよび公開年を選択するだけでオススメの映画を表示する
  - ページネーション機能
    - Material-UI の pagination component を利用
- お気に入り保存機能
  - データの保存先は、localstorage を利用
- MUI を使用した レイアウト・UI
- レスポンシブ対応
  - MUI の Grid コンポーネントを利用することで、レスポンシブ対応を実現
  - PC・タブレットでは、ドロワーメニュー
  - スマートフォンでは、ボトムメニュー
