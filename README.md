# 潜水艦ゲーム

# アクセス
- heroku URL: https://intense-harbor-94892.herokuapp.com/ 

## ブランチ戦略
- 作業ブランチはherokuブランチから切る
  - herokuブランチは常に最新にしておく
1. 作業完了後，作業ブランチからherokuブランチにPRを出してマージ
2. ローカルのherokuブランチにpull
3. ローカルのherokuブランチから，herokuのmasterに変更分をpush
4. リモートのmasterへのマージ(PR)はよしなに行う（毎回マージしなくても良い） 
5. リモートのmasterへマージを行ったさいは，ローカルにpullしておく（念の為）

## 参考リンク
- 完成品: https://murmuring-shelf-77610.herokuapp.com
  - 見本のコード: https://github.com/progedu/submarine-online
- 潜水艦の画像: https://github.com/progedu/submarine-online/blob/master/public/images/submarine.png 
- ミサイルの画像: https://github.com/progedu/submarine-online/blob/master/public/images/missile.png
- 爆発のアニメーション: https://github.com/progedu/submarine-online/blob/master/public/images/bomlist.png