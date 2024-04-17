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
        content: `2008 年的斯德哥爾摩水資源獎，頒給了提出「虛擬水」概念的東尼艾倫教授。所謂的「虛擬水」，是指食品或消費品在生產及銷售過程中所需要的用水量。這概念指出，人們不僅在飲用和淋浴時需要水，在消費其他產品時也會消耗大量的水。例如，一杯咖啡在種植、生產、包裝和運輸的過程中，得消耗 140 升的水，這相當於一個英國人平均每天飲用和家庭生活的用水量。
    
        「虛擬水」的概念進一步說明了「虛擬水」的交易模式，這對全球的貿易政策及水資源利用產生了重大影響。這項理論指出，氣候潮
        濕地區的農業，多半會利用廉價的自然降雨，而非成本高昂的灌溉系統，因此能大幅降低農業的生產成本。這些地區可以通過農作物，將水資源「出口」到較為炎熱乾旱的國家。而氣候向來乾旱的國家，則可以「進口」需水量很大的農作物，紓緩國內水資源不足的壓力。儘管檯面上的交易只看得到農產品，實際上卻包括了水資源的交換。
        舉例來說，在埃及，已經有越來越多的傳統食品是由進口糧食所製造的，反而不是尼羅河所灌溉種植的小麥。如果埃及堅持所有的穀物都由自己種植，很快就會面臨水資源不足的窘境。
    
        世界水資源週所提出的報告也使用了這一個概念，指出當前世界性的糧食危機在於過於浪費，而非生產不足。因為一份糧食從生產、加工、運輸、儲存、販賣以至於烹煮，每一環節都要消耗水資源，要是消費者丟棄買回來的食物，也意味著浪費了生長、運送、貯存過程中所使用的水。專家表示，唯有避免浪費食物，才能有效落實節水政策。`
    }

]