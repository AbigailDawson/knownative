//The traditional texts have been sourced at the Band A (novice-beginner), Band B (intermediate), and Band C (advanced) levels from a mock TOCFL test

// The TOCFL Bands break down as follows:
// Band	    Level	    Suggested Learning Hours	Number of words
// Novice	Novice 1	30-120 hrs	                300
// Novice	Novice 2    30-120 hrs	                300
// A	    Level 1	    120-240 hrs	                500
// A	    Level 2	    240-360 hrs	                1000
// B	    Level 3	    360-480 hrs	                2500
// B	    Level 4	    480-960 hrs	                5000
// C	    Level 5	    960-1920 hrs	            8000
// C	    Level 6	    above 1920 hrs	            8000
// Source: https://lmit.edu.tw/lc/tocfl

const demoTexts = [
    {
        title: `開計程車`,
        source: `https://tocfl.edu.tw/assets/files/mock/rd_mock_test_BandA_en_t.pdf`,
        content: `每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！`
    },
    
    {
        title: `信用卡雖然很方便`,
        source: `https://tocfl.edu.tw/assets/files/rd_mock_test_BandB_t.pdf`,
        content: `信用卡雖然很方便，但是不小心的話，一下子就會花掉很多錢，所以現在還不了錢的人越來越多。像是奇美，她用信用卡買了太多東西，結果沒辦法還錢，所以必須同時做三份工作，把賺來的錢全部還給銀行。會出現這樣的問題，主要是因為使用信用卡的人常常沒什麼錢卻買很多東西，而且還會不清楚自己花了多少錢；另一個原因是，現在的銀行對使用者的要求越來越低，連沒有工作的學生也能申請信用卡，對還錢的方式一開始也說得不清楚。結果這張給人方便的卡片也給人們帶來了很大的麻煩。`
    },
    
    {
        title: `故斯德哥爾摩水資源獎`,
        source: `https://tocfl.edu.tw/assets/files/mock/rd_mock_test_BandC_t_2022.pdf`,
        content: `我常想，住豪宅或是升職、加薪，真能讓人快樂嗎？讀完鮑教授新作《祝你今年快樂》後，便發覺那都只能算是一閃即逝的喜悅，並非真實而長久。誠如書中所言：「快樂是一種遍布在生命之中，滿足和幸福的感受，而喜悅則像煙火，稍縱即逝。」
        或許你認為這道理誰都懂，然想遠比做容易。這本書告訴我們兩件事：快樂是需要練習的；再則，追兔子的狗，比躺在門廊上睡覺的狗更快樂！這原理並非為捉到兔子能令人快樂，而是當我們為突破挑戰與困境而忙碌時，往往能從中發現自己的才能，找出更多存在的價值。這也說明了為何許多不需要克服難題的有錢人，其實並不快樂。
        這讓我想起《國家科學院期刊》一項調查結果，他們發現 50％的快樂，由快樂的設定點決定，生活條件只佔 10％，剩下的 40％則取決於行動。換言之，快樂是由思維主導的。鮑教授也在書中舉例，大腦重僅 1.35 公斤，佔人體的比重很小，卻指引全身動作，進而導引人生的發展。就像體重數十公斤的飛行員，卻要駕駛重達數十萬公斤的飛機，飛機雖沉重、力量強大，但只按飛行員導引的方向飛行。
        最近我依著鮑教授的建議，開始練習微笑，心中同時想著「我很快樂」，也似乎真找出了環境或生活中讓自己快樂的事，看來此法確實值得大家一試。不過據我的實作經驗顯示，有件事得注意，就是千萬別說出「我想要快樂」。一旦你這麼說，等於承認自己是在不快樂的狀態之下，反而容易弄巧成拙。`
    }

]