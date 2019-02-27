# 【Learning Session】React&Vue勉強会

### このセッションで学べること
- React, Vueの基本的な開発フロー
- SPAの開発
- webpack, babelを使ったjsのビルド周り
- SPAのデプロイ方法やDocker周りも少し学べます！

### レギュレーション

2チームに分かれてモブプロで開発を進めます。

- （参加人数が多ければ）チームを2つに分ける
- チームAにはReactで書かれたアプリケーションを、チームBにはVueで書かれたアプリケーションを渡をする
- チームAは、Reactで書かれたアプリケーションを元にVueで同じ挙動をするアプリケーションを開発をする
- チームBは、Vueで書かれたアプリケーションを元にReactで同じ挙動をするアプリケーションを開発をする
- 最初の15分程度の時間に、2チームともコードリーディングと設計をする
- ドライバーは1人15分で交代し、一周したら1名が他のチームに移る
- 2周したら切り上げ、ReactとVueについて2チーム合同で議論してみる

## 配布するコードについて

配布するコードはzipで固められていますので、事前に伝えたパスワードを使って解凍して動作することを確認してください。
下記のコマンドを実行することで、アプリが動作することが分かります。

```
git@github.com:morosawamikihito/react-vue-webpack.git
cd /path/to/react-vue-webpack.git
unzip -P [password] [react or vue].zip
cd [react or vue]
yarn install
yarn run dev  # localhost:18080にアプリがバインディングされます
```

## 環境

|ソフトウェア|バージョン|
| --- | --- |
| nodejs | v10.15.1 |
| npm | v6.4.1 |
| yarn | v1.13.0 |
| docker | v18.09.2 |
| make | v3.81 |

## ビルドの仕方・devサーバの立ち上げ方

```
# devサーバの立ち上げ方
下記のコマンドでlocalhost:18080にサーバがバインディングされます

cd /path/to/react-vue-webpack/[react | vue]
root@host yarn run dev


# ビルド
下記のコマンドでnginx + 成果物が配置されたdockerイメージが作成されます

cd /path/to/react-vue-webpack/[react | vue]
root@host make build


# イメージの実行
下記のコマンドで作成されたイメージが起動します

cd /path/to/react-vue-webpack/[react | vue]
root@host make run
```

