# hubot-theater

A Hubot script that returns theater schedule data via Yahoo!映画

## Installation

    $ npm install https://github.com/bouzuya/hubot-theater/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-theater/archive/{VERSION}.tar.gz

## Example

    bouzuya> hubot theater
      hubot> OSシネマズミント神戸
                                   ランナーランナー                                       08:30  13:30  21:30
                                   6才のボクが、大人になるまで。                          13:20  18:10
                                   西遊記～はじまりのはじまり～《吹替》                   09:00  16:10
                                   西遊記～はじまりのはじまり～《字幕》                   13:50  18:40  21:00
                                   ドラキュラZERO                                         19:00
                                   近キョリ恋愛                                           11:20
                                   クローバー                                             15:40  18:40
                                   美女と野獣                                             10:10  13:20  16:00
                                   グレース・オブ・モナコ　公妃の切り札                   08:40
                                   映画ハピネスチャージプリキュア！ 人形の国のバレリーナ  08:30
                                   インターステラー《字幕》                               09:50  11:20  14:50  18:20
                                   サボタージュ《吹替》                                   16:40
                                   サボタージュ《字幕》                                   21:00
                                   ふしぎな岬の物語                                       10:50
                                   MIRACLE デビクロくんの恋と魔法                         10:00  12:40  15:20  18:00  20:40
                                   想いのこし                                             10:30  13:10  15:50  18:30  21:10
                                   神さまの言うとおり                                     11:00  12:50  15:30  18:20  20:50
                                   STAND BY ME ドラえもん                                 08:40
                                   ヘラクレス《デジタル3D/吹替》                          21:40
                                   イコライザー                                           21:10
                                   蜩ノ記〈ひぐらしのき〉                                 08:40
             神戸国際松竹
                                   パワー・ゲーム                                         11:40  20:35
                                   楽園追放－Expelled from Paradise－                     16:00  20:15
                                   日々ロック                                             09:10  11:25  16:05  18:20
                                   紙の月                                                 11:35  14:10  16:45  19:20
                                   小野寺の弟・小野寺の姉                                 13:40
                                   インターステラー《字幕》                               09:40  13:00  19:00
                                   エクスペンダブルズ3 ワールドミッション                 09:00
                                   救いたい                                               09:30  13:50  18:05
                                   イコライザー                                           16:20

## Configuration

See [`src/scripts/theater.coffee`](src/scripts/theater.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-theater
[travis-badge]: https://travis-ci.org/bouzuya/hubot-theater.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-theater
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-theater.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-theater
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-theater.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
