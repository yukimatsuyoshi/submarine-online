# 潜水艦ゲーム

# 開発メモ
- herokuの環境変数としてherokuのURLとAPI Keyを登録する方法
  - heroku config:set HEROKU_URL='https://intense-harbor-94892.herokuapp.com/'
  - heroku config:set TWITTER_CONSUMER_KEY='xxxxx'
  - heroku config:set TWITTER_CONSUMER_SECLET='xxxxx'
- herokuのmasterにpushする際にconfig.jsをignoreしないようにしたあと，自分のgithubにpushする際にignoreしようとすると，キャッシュが残っているせいでignoreされない --> 以下コマンドでキャッシュを削除しよう
  - git rm -r --cached . //ファイル全体キャッシュ削除
  - git rm -r --cached [ファイル名]  //ファイル指定してキャッシュ削除

# アクセス
- heroku URL: https://intense-harbor-94892.herokuapp.com/ 

## ブランチ戦略
- 作業ブランチはherokuブランチから切る
  - herokuブランチは常に最新にしておく
1. 作業完了後，作業ブランチからherokuブランチにPRを出してマージ
2. ローカルのherokuブランチにpull
3. ローカルのherokuブランチから，herokuのmasterに変更分をpush
   - herokuのURL(callback)やアクセスキーなどはherokuの環境変数に登録しておく
   - git push heroku heroku:master
   - この際，config.jsをgitignoreしないようにする
   - 自分のgitにpushする際はignoreする（セキュリティのため）
4. リモートのmasterへのマージ(PR)はよしなに行う（毎回マージしなくても良い） 
5. リモートのmasterへマージを行ったさいは，ローカルにpullしておく（念の為）

## 参考リンク
- 完成品: https://murmuring-shelf-77610.herokuapp.com
  - 見本のコード: https://github.com/progedu/submarine-online
- 潜水艦の画像: https://github.com/progedu/submarine-online/blob/master/public/images/submarine.png 
- ミサイルの画像: https://github.com/progedu/submarine-online/blob/master/public/images/missile.png
- 爆発のアニメーション: https://github.com/progedu/submarine-online/blob/master/public/images/bomlist.png