"use strict"

const kaomojiCollection = {
    "kaomoji": {
        "angry": [
            "凸(｀0´)凸",
            "凸ಠ益ಠ)凸",
            "凸(⊙▂⊙✖ )",
            "┌П┐(►˛◄’!)",
            "凸(｀⌒´メ)凸",
            "( ︶︿︶)_╭∩╮"
        ],
        "bears": [
            "ʕ •ᴥ•ʔ",
            "ᶘಠᴥಠᶅ"
        ],
        "blushing flower girl": [
            "(˶◕‿◕˶✿)",
            "(⁄ ⁄◕⁄ω⁄◕⁄ ⁄✿)"
        ],
        "cats": [
            "ฅ(＾・ω・＾ฅ)",
            `චᆽච`
        ],
        "christmas": [
            "(＾∇^*)ノ⌒☆ -=★ -=☆*Merry X’mas*☆",
            "。∈・^ミβ(*´ω｀人´ω｀*)*:..｡o○☆*ﾟ¨ﾟMerry Christmas .｡.:*"
        ],
        "confused": [
            "「(°ヘ°)",
            "( ・◇・)？",
            "ヾ(´･ ･｀｡)ノ”",
            "⊙.☉"
        ],
        "dogs": [
            "▼・ᴥ・▼",
            "U・ᴥ・U"
        ],
        "jailed": [
            "||Φ|(|ﾟ|∀|ﾟ|)|Φ||",
            "━━━━||Φ|(|´|Д|`|)|Φ||━━━━"
        ],
        "flower girl": [
            "(　◕‿◕✿)",
            "(◕▽◕✿)"
        ],
        "sad flower girl": [
            "(◕‸ ◕✿) *pout*",
            "(◕︿◕✿)"
        ],
        "table flipping throwing": [
            "(╯°□°）╯︵ ┻━┻",
            "┻━┻ミ＼(≧ﾛ≦＼)"
        ],
        "bears table flipping throwing": [
            "ʕノ•ᴥ•ʔノ ︵ ┻━┻",
            " ┳┳ヾ(T(エ)Tヽ)"
        ],
        "setting the table": [
            "┬──┬ ノ( ゜-゜ノ)",
            "(ヘ･_･)ヘ┳━┳"
        ],
        "good morning": [
            "(*^｡^*)Rise (*^o^*)And ＼(*^0^*)／Shineｰ!!",
            "(_ _)(-.-)(~O~)*yawn*・・(~O~)(-.-)"
        ],
        "kissing kisses": [
            "( ˘ ³˘)♥",
            "(ɔˆ ³(ˆ⌣ˆc)"
        ],
        "throwing kisssing kisses": [
            "★⌒ヽ(●’､＾●)Kiss!",
            "(^з^)-☆Chu!!"
        ],
        "hugs hugging": [
            "(つ・▽・)つ⊂(・▽・⊂)",
            "(つ≧▽≦)つ⊂(・ヮ・⊂)"
        ],
        "happy birthday": [
            "[＼／]…..φ(・д・。) Happy birthday♪",
            "Happy♪ヾ|*ﾟ∀ﾟ*|ﾉ” Birthday♪"
        ],
        "mad": [
            "┗(｀Дﾟ┗(｀ﾟДﾟ´)┛ﾟД´)┛",
            "!!!!|┛*｀Д´|┛・・~~┻━┻　┳━┳"
        ],
        "nervous":[
            "(ﾟωﾟ；)",
            "(*ﾟдﾟ*)ﾄﾞｷﾄﾞｷ",
            "┣¨キ(*ﾟДﾟ*)┣¨キ"
        ],
        "pigs": [
            "(´・(oo)・｀)",
            "(V´・(oo)・｀V)"
        ],
        "deep crying face": [
            "ಥ_ಥ",
            "ಥ╭╮ಥ"
        ],
        "denko shoboon": [
            "(´・ω・｀)",
            "Σ(´・ω・｀)"
        ],
        "raise your dongers": [
            "ヽ༼ຈل͜ຈ༽ﾉ",
            "✺◟༼ຈ ل͜ ຈ༽◞✺"
        ],
        "strolling happy gary": [
            "ᕕ( ᐛ )ᕗ",
            "ᐠ( ᐛ )ᐟ"
        ],
        "it’s here kitaaa": [
            "ｷﾀ━(ﾟ∀ﾟ)━!",
            "ｷﾀ━━━(Дﾟ(○=(ﾟ∀ﾟ)=○)Дﾟ)━━━!!"
        ],
        "laughing": [
            "(´∀｀)",
            "ヽ（´∀｀）ノ"
        ],
        "lenny face": [
            "( ͡° ͜ʖ ͡°)",
            "ᕦ( ͡° ͜ʖ ͡°)ᕤ"
        ],
        "look of disapproval": [
            "ಠ_ಠ",
            "ლ(ಠ益ಠლ)"
        ],
        "love": [
            "(๑♡3♡๑)",
            "(｡♥‿♥｡)"
        ],
        "orz":[
            "_|￣|○",
            "il||li ＿|￣|○ il||l",
            "///orz///",
            "▄█▀█●"
        ],
        "shrug": [
            `¯\\\_(ツ)_/¯`,
            `¯\\\_㋡_/¯`
        ],
        "smiling": [
            "（＾－＾）",
            "（＾O＾）"
        ],
        "smug face": [
            "ಸ‿ಸ",
            "ಇ(ಸ‿ಸ)ಇ"
        ],
        "sparkles": [
            "✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧",
            "*＊✿❀　❀✿＊*"
        ],
        "cheerful": [
            "(❁´◡`❁)",
            "ヾ(＠^∇^＠)ノ"
        ],
        "excited": [
            "✧ ─=≡Σ((( つ•̀ω•́)つ",
            "✖‿✖",
            "(((o(*ﾟ▽ﾟ*)o)))"
        ],
        "blushing flattered": [
            "(〃 ω 〃)",
            "‧⁺( ᵒ̴̶̷̥́ ◡ ᵒ̴̶̷̣̥̀ )⁺‧"
        ],
        "sad crying": [
            "o（ｉДｉ）o",
            "˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚"
        ],
        "sad depressed": [
            "(◞ ‸ ◟ㆀ)",
            "(╯︵╰)"
        ],
        "seal": [
            "(ᵔᴥᵔ)"
        ],
        "weird awkward": [
            "( ་ ⍸ ་ )",
            "(　☉д⊙)"
        ],
        "weird creepy": [
            "(´⊙◞⊱​◟⊙｀)​",
            "(´◉◞⊖◟◉｀)"
        ],
        "weird wtf gross": [
            "༼;´༎ຶ ۝ ༎ຶ༽",
            "(◞≼⓪≽◟⋌⋚⋛⋋◞≼⓪≽)"
        ],
        "weird hide stalkerific": [
            "|ω・)",
            "┬┴┬┴┤(･_├┬┴┬┴"
        ]
    },
    "nameMap": {
        // eslint-disable-line
    },
    "nameArr": [
        // eslint-disable-line
    ]
}

const kaomoji = kaomojiCollection.kaomoji

for (const fullName in kaomoji) {
	fullName.split(" ").forEach(partiallyName => {
		while (kaomojiCollection.nameMap[partiallyName]) {
            partiallyName = `_${partiallyName}`
        }
        kaomojiCollection.nameMap[partiallyName] = fullName
        kaomojiCollection.nameArr.push(partiallyName)
	})
}

const nameMap = kaomojiCollection.nameMap
const nameArr = kaomojiCollection.nameArr
