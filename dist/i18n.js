/*jshint esversion: 6 */
// ██╗      █████╗ ███╗   ██╗ ██████╗ ██╗   ██╗ █████╗  ██████╗ ███████╗
// ██║     ██╔══██╗████╗  ██║██╔════╝ ██║   ██║██╔══██╗██╔════╝ ██╔════╝
// ██║     ███████║██╔██╗ ██║██║ ████╗██║   ██║███████║██║ ████╗█████╗
// ██║     ██╔══██║██║╚██╗██║██║   ██║██║   ██║██╔══██║██║   ██║██╔══╝
// ███████╗██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝██║  ██║╚██████╔╝███████╗
// ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
// language file for https://stake.hey.network
/*
|  # FORMAT
|  language code format: ISO 639-1
|  refer to this list: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
|
|  # INSTRUCTIONS
|  you can either submit a pull request (highly preferred)
|  or send a translation file to this email address: nab@hey.network
|  1. Add you language name in the first object (LANGUAGES_LIST). Please
|  use the ISO 639-1 language code (link provided above)
|  2. Translate every sub object. You have some examples, follow the lead,
|  You should be fine. If you have any question, ask us on our Hey page.
|  3. Don't have Hey yet? Get it on https://hey.network
|  Join the chat on hey.network
|
*/

const LANGUAGES_LIST = {
	"en": "English",
	"fr": "Français",
	"jp": "日本語",
	"cn": "华语",
	"pl": "Polski",
};
const txt = {
	"general": {
		"confirm": {
			"fr": "OK",
			"en": "OK",
			"jp": "OK",
			"cn": "OK",
			"pl": "OK",
		},
		"cancel": {
			"fr": "Annuler",
			"en": "Cancel",
			"jp": "キャンセル",
			"cn": "取消",
			"pl": "Anuluj",
		}
	},
	"home": {
		"start": {
			"fr": "S'inscrire",
			"en": "Start",
			"jp": "開始",
			"cn": "开始",
			"pl": "Start",
		},
		"whatishey": {
			"fr": "Qu'est ce que Hey?",
			"en": "What is Hey?",
			"jp": "ちょっと何ですか？",
			"cn": "Hey 是什么？",
			"pl": "Czym jest Hey?",
		},
		"premiumForLife": {
			"fr": "Premium à vie",
			"en": "Premium for life",
			"jp": "人生のためのプレミアム",
			"cn": "终身奖励",
			"pl": "Premium - na całe życie",
		},
		"forTheFirst": {
			"fr": "Pour le premier Million d'inscrits",
			"en": "for first 1M users",
			"jp": "最初の100万人のユーザー向け",
			"cn": "对于前100万个的用户",
			"pl": "dla pierwszego miliona użytkowników",
		},
		"title": {
			"fr": "Délégez vos <span class=\"grad\">LOOM</span> et <span class=\"grad\">gagnez en encore plus</span>",
			"en": "Delegate <span class=\"grad\">LOOM</span> and <span class=\"grad\">earn rewards</span>",
			"jp": "<span class=\"grad\">#ハッシュ</span> と <span class=\"grad\">トレンドトピックでチャット</span>",
			"cn": "利用<span class=\"grad\">LOOM</span>并<span class=\"grad\">获得奖励</span>",
			"pl": "Delegat <span class=\"grad\">LOOM</span> - <span class=\"grad\">zdobywaj nagrody</span>",
		},
		"nfo": {
			"fr": "Un jeu d'enfant, en 3 minutes, rentabilisez vos LOOM tant qu'il ne sont pas encore utiles.",
			"en": "Maximize your profits. Earn additional LOOM while yours are idle. Three minutes or less.",
			"jp": "簡単なことは何もありません、それは3分しかかかりません、あなたがこれまでのところ彼らと何もすることができない間あなたの織機から利益を得ます",
			"cn": "没有什么比这更容易，只需要3分钟，虽然目前LOOMs没办法为你做任何事情, 但你可以用你的LOOMs而获得利润。",
			"pl": "To bardzo proste i zajmuje tylko 3 minuty! Zarabiaj dzięki swoim tokenom LOOM",
		},
		"stake": {
			"fr": "Stakez vos LOOM",
			"en": "Stake with us!",
			"jp": "私たちとステーク",
			"cn": "和我们一起抵押代币吧！",
			"pl": "Zarabiaj z nami",
		},
		"telegram": {
			"fr": "Rejoindre sur Telegram",
			"en": "Join us on Telegram",
			"jp": "Telegram で私たちに参加",
			"cn": "加入我们的电报",
			"pl": "Dołącz do nas na Telegramie",
		},
		"join": {
			"fr": "Rejoignez nous sur Telegram pour poser des questions ou nous rencontrer: <span class=\"fluo\">#StakeHeyNetwork</span>",
			"en": "Hey, Loomers! Our team at <span class=\"fluo\">#Hey</span> is ready and waiting to offer info about <span class=\"fluo\">#Loom</span>, <span class=\"fluo\">#staking</span>, and <span class=\"fluo\">#rewards</span>. We're here to help you earn interest and increase ROI. All you have to do is ask.",
			"jp": "<span class=\"fluo\">#HeyNetwork</span> のディスカッションに参加しましょう",
			"cn": "嘿Loomers！我们在<span class=\"fluo\">#Hey</span>，差不多已经准备好给你们很多有关#Loom，＃权益代币和#奖励的信息。你们可以利用你的LOOM并获得一些利润！",
			"pl": "Hej Loomersi! My w <span class=\"fluo\">#Hey</span> jesteśmy prawie gotowi by dostarczyć wam informacji <span class=\"fluo\">#Loom</span>, <span class=\"fluo\">#Zarobek</span> i <span class=\"fluo\">#Nagrody</span>. Wykorzystaj swoje tokeny LOOM by dzięki nim zarabiać!",
		},
		"footer": {
			"copyright": {
				"fr": "Copyright",
				"en": "Copyright",
				"jp": "著作権",
				"cn": "版权",
				"pl": "Prawa autorskie",
			},
			"rights": {
				"fr": "Tous droits réservés.",
				"en": "All rights Reserved.",
				"jp": "全著作権所有",
				"cn": "版权所有。",
				"pl": "Wszelkie prawa zastrzeżone.",
			},
			"aboutUs": {
				"fr": "A propos",
				"en": "About us",
				"jp": "私たちに関しては",
				"cn": "关于我们",
				"pl": "O nas",
			},
			"manifesto": {
				"fr": "Manifesto",
				"en": "Manifesto",
				"jp": "マニフェスト",
				"cn": "宣言",
				"pl": "Manifest",
			},
			"support": {
				"fr": "Support",
				"en": "Support",
				"jp": "補助",
				"cn": "客服",
				"pl": "Wsparcie",
			},
			"contactUs": {
				"fr": "Contactez-nous",
				"en": "Contact us",
				"jp": "お問い合わせ",
				"cn": "联系我们",
				"pl": "Kontakt",
			},
			"stakingGuide": {
				"fr": "Guide de <em>Staking</em>",
				"en": "Staking Guide",
				"jp": "<em>Staking</em>ガイド",
				"cn": "权益代币的指南",
				"pl": "Przewodnik - jak zarabiać",
			},
			"website": {
				"fr": "Site web Hey",
				"en": "Hey website",
				"jp": "<em>Hey</em> ウェブサイト",
				"cn": "<em>Hey</em>网站",
				"ok": "Strona Hey"
			},
			"dashboard": {
				"fr": "Tableau de bord",
				"en": "Dashboard",
				"jp": "計器盤",
				"cn": "仪表盘",
				"pl": "Panel",
			}
		}
	}
};
