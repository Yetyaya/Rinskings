const app = Vue.createApp({
  mixins: Object.values(mixins),
  data () {
    return {
      loading: true,
      hiddenMenu: false,
      showMenuItems: false,
      menuColor: false,
      scrollTop: 0,
      renderers: [],
      currentPath: document.location.pathname
        .replace('/Rinskings/', '')
        .split('/')[0],
      currentCategory: '所有公告',
      newsPrev: false,
      newsNext: false,
      prevNone: false,
      nextNone: false,
      vueCurrent: 1,
      drinkMenu: [
        {
          product: '季節限定',
          drink: [
            { name: '愛文芒果杉林青', priceM: 70, priceL: 80, priceB: 95, desc: '整顆新鮮愛文芒果果肉榨汁，搭配杉林溪四季春茶。清爽果香, 尾韻回甘', rec: true, hot: false },
            { name: '愛文芒果那堤', priceM: 80, priceL: 95, priceB: null, desc: '新鮮愛文芒果榨汁與香純鮮奶的完美搭配', rec: true, hot: false },
            { name: '赤西杉林青', priceM: 50, priceL: 60, priceB: 75, desc: '100%西瓜榨汁搭配杉林溪四季春茶', rec: true, hot: false },
            { name: '赤西那堤', priceM: 55, priceL: 65, priceB: null, desc: '新鮮西瓜榨汁與香純鮮奶的完美搭配', rec: true, hot: false }
          ]
        }, {
          product: '嚴選純萃',
          drink: [
            { name: '雪杉紅茶', priceM: 30, priceL: 35, priceB: 55, desc: '嚴選台灣三大高山阿里山蜜香紅茶，滑順回甘，滋味醇厚', rec: true, hot: true },
            { name: '杉林青茶', priceM: 30, priceL: 35, priceB: 55, desc: '嚴選台灣三大高山杉林溪四季春茶，香醇韻味，尾韻回甘', rec: true, hot: true }
          ]
        }, {
          product: '純萃那提',
          drink: [
            { name: '雪杉紅那提', priceM: 60, priceL: 65, priceB: 85, desc: '嚴選阿里山蜜香紅茶搭配香純鮮奶，絕對茶奶完美比例', rec: true, hot: true },
            { name: '杉林青那提', priceM: 60, priceL: 65, priceB: 85, desc: '嚴選杉林溪四季春茶搭配香純鮮奶，絕對茶奶完美比例', rec: false, hot: true }
          ]
        }, {
          product: '鮮果特調',
          drink: [
            { name: '蘋果杉林青', priceM: 65, priceL: 75, priceB: 90, desc: '100%新鮮現榨慢磨蘋果原汁搭配杉林溪四季春茶', rec: true, hot: true },
            { name: '芭樂杉林青', priceM: 60, priceL: 70, priceB: 85, desc: '新鮮現榨慢磨芭樂原汁搭配杉林溪四季春茶', rec: true, hot: true },
            { name: '金鑽鳳梨杉林青', priceM: 60, priceL: 70, priceB: 85, desc: '金鑽鳳梨慢磨榨汁搭配杉林青茶', rec: false, hot: true },
            { name: '百香杉林青', priceM: 60, priceL: 70, priceB: 85, desc: '手工現挖百香果【榨汁濾籽】搭配杉林青茶', rec: false, hot: true },
            { name: '紫葡杉林青', priceM: 70, priceL: 80, priceB: 95, desc: '台灣巨峰葡萄慢磨榨汁搭配杉林青茶', rec: false, hot: true },
            { name: '火龍蘋果鳳梨青', priceM: 70, priceL: 80, priceB: 95, desc: '鮮榨火龍果，蘋果、鳳梨搭配杉林青茶', rec: true, hot: true },
            { name: '百香芭樂杉林青', priceM: 65, priceL: 75, priceB: 90, desc: '百香果榨汁濾籽，芭樂慢磨榨汁搭配杉林青茶', rec: false, hot: false },
            { name: '百香鳳梨杉林青', priceM: 65, priceL: 75, priceB: 90, desc: '100%新鮮現榨慢磨鳳梨汁 + 百香果原汁 + 杉林溪四季春茶', rec: false, hot: true },
            { name: '鮮檸百香杉林青', priceM: 65, priceL: 75, priceB: 90, desc: '100%鮮榨檸檬汁 + 百香果榨汁濾籽 + 杉林溪四季春茶', rec: false, hot: false },
            { name: '鮮檸芭樂杉林青', priceM: 65, priceL: 75, priceB: 90, desc: '100%鮮榨檸檬汁 + 100%鮮榨芭樂汁 + 杉林溪四季春茶', rec: true, hot: false },
            { name: '鮮檸鳳梨杉林青', priceM: 65, priceL: 75, priceB: 90, desc: '100%鮮榨慢磨鳳梨汁 + 鮮榨檸檬汁 + 杉林溪四季春茶', rec: false, hot: false }
          ]
        }, {
          product: '鮮果那提',
          drink: [
            { name: '蘋果那提', priceM: 75, priceL: 90, priceB: null, desc: '香甜蘋果慢磨榨汁與香純鮮奶的完美搭配', rec: true, hot: false },
            { name: '芭樂那提', priceM: 70, priceL: 85, priceB: null, desc: '新鮮芭樂慢磨榨汁與香純鮮奶的完美搭配', rec: false, hot: false },
            { name: '火龍果那提青', priceM: 75, priceL: 90, priceB: null, desc: '當季火龍果慢磨榨汁與香純鮮奶的完美搭配', rec: false, hot: false }
          ]
        }, {
          product: '鮮果氣泡',
          drink: [
            { name: '蘋果泡泡', priceM: 60, priceL: 70, priceB: null, desc: '香甜蘋果慢磨榨汁與氣泡水的清爽搭配', rec: true, hot: false },
            { name: '芭樂泡泡', priceM: 55, priceL: 65, priceB: null, desc: '新鮮芭樂慢磨榨汁與氣泡水的完美搭配', rec: false, hot: false },
            { name: '金鑽鳳梨泡泡', priceM: 55, priceL: 65, priceB: null, desc: '金鑽鳳梨慢磨榨汁與氣泡水的香甜搭配', rec: true, hot: false },
            { name: '鮮檸泡泡', priceM: 45, priceL: 55, priceB: null, desc: '新鮮檸檬慢磨榨汁與氣泡水的酸爽搭配', rec: true, hot: false },
            { name: '百香泡泡', priceM: 55, priceL: 65, priceB: null, desc: '百香果慢磨榨汁與氣泡水的香甜搭配', rec: false, hot: false },
            { name: '紫葡泡泡', priceM: 65, priceL: 75, priceB: null, desc: '葡萄慢磨榨汁與氣泡水的輕盈搭配', rec: true, hot: false },
            { name: '百香芭樂泡泡', priceM: 60, priceL: 70, priceB: null, desc: '百香果、芭樂與氣泡水的爽口搭配', rec: false, hot: false },
            { name: '火龍蘋果鳳梨泡泡', priceM: 65, priceL: 75, priceB: null, desc: '火龍果、蘋果、鳳梨與氣泡水的多重酸甜搭配', rec: false, hot: false }
          ]
        }
      ],
      ingredientArr: [
        { name: '蜜香紅', category: { cn: '茶葉', en: 'Tea' }, desc: '茶湯呈蜜棗色，帶有濃濃果香，入口滑順回甘，清爽甘甜。', place: '阿里山茶區', img: 'tea1' },
        { name: '四季春', category: { cn: '茶葉', en: 'Tea' }, desc: '茶湯水色蜜綠澄清，香氣輕揚優雅、入口滋味甘醇濃郁，喉韻極佳，口齒生津。', place: '杉林溪茶區', img: 'tea2' },
        { name: '蘋果', category: { cn: '果物', en: 'Organic Fruits' }, desc: '味道甜美，口感爽脆，富含礦物質和維生素，是生活中常食用的水果之一。', place: '臺灣在地果園', img: 'fruit1' },
        { name: '芭樂', category: { cn: '果物', en: 'Organic Fruits' }, desc: '營養價值極高，是臺灣常見水果裡的維生素Ｃ含量冠軍。膳食纖維含量高，屬於高鉀水果，有助於維持血壓的穩定，是非常好的保健水果。', place: '臺灣在地果園', img: 'fruit2' },
        { name: '金鑽鳳梨', category: { cn: '果物', en: 'Organic Fruits' }, desc: '打破以往鳳梨太酸的印象，為高糖度的鳳梨品種，入口細緻飽滿，清香酸甜，風味絕佳。', place: '臺灣在地果園', img: 'fruit3' },
        { name: '百香果', category: { cn: '果物', en: 'Organic Fruits' }, desc: '香氣濃郁，酸甜多汁，營養價值高，有維生素Ａ、Ｂ、Ｃ、鎂、磷、鐵、鋅等多種人體有益元素，固有「果汁之王」的美稱。', place: '臺灣在地果園', img: 'fruit4' },
        { name: '火龍果', category: { cn: '果物', en: 'Organic Fruits' }, desc: '外表像是一團艷紅的火球而得名，蘊含「甜菜紅素」，甜度較高，果肉較柔軟，富含維生素、膳食纖維、有機酸、鉀、鐵、葉酸等礦物質、多酚類及花青素等植化素。', place: '臺灣在地果園', img: 'fruit5' },
        { name: '巨峰葡萄', category: { cn: '果物', en: 'Organic Fruits' }, desc: '是目前台灣生產、栽種面積最多的品種。果肉透明，肉質軟Ｑ而多汁，帶有草莓香味，風味香甜輕馥。', place: '臺灣在地果園', img: 'fruit6' },
        { name: '檸檬', category: { cn: '果物', en: 'Organic Fruits' }, desc: '富含豐富的維生素C、纖維、維生素B1、維生素B2、果酸。有促進人體新陳代謝、提高免疫力、協助骨膠原生成，美白護膚等多種功效。', place: '臺灣在地果園', img: 'fruit7' },
        { name: '愛文芒果', category: { cn: '果物', en: 'Organic Fruits' }, desc: '果肉金黃，皮薄肉嫩，香味濃郁多汁，高甜又帶有點微酸滋味，十分香甜好吃，是人人皆知也最受歡迎的水果品種之一。', place: '臺灣在地果園', img: 'fruit8' },
        { name: '西瓜', category: { cn: '果物', en: 'Organic Fruits' }, desc: '西瓜風味香甜，不含脂肪外，還富含維生素A、B、C，胡蘿蔔素、鉀及鐵等礦物質與水溶性纖維，果肉多汁細緻，清甜爽口，是夏日消暑解渴首選的水果之一。', place: '臺灣在地果園', img: 'fruit9' },
        { name: '全脂鮮乳', category: { cn: '鮮乳', en: 'Whole Milk' }, desc: '台灣第一瓶榮獲國際雙保證的品牌，以極鮮溫控技術給予牧場直送般的新鮮，讓人喝了不自覺露出幸福滿意的笑容。', place: '福樂一番鮮', img: 'milk' }
      ],
      guest: {
        name: null,
        phone: null,
        email: null,
        theme: '宅配訂購',
        message: null
      },
      formVerification: {
        name: null,
        phone: null,
        email: null,
        message: null
      },
      sendEmailAnimate: false
    }
  },
  created () {
    window.addEventListener('load', () => {
      this.loading = false;
    })
  },
  mounted () {
    // scroll 動畫
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 900,
      easing: 'ease',
      once: false
    });
    window.addEventListener('scroll', this.handleScroll, true);
    this.render();

    // 輪播圖
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: false,
      speed: 1200,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: false,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: false,
          translate: ["120%", 0, -500],
        }
      },
    })

    // 聯絡我們 郵件設定
    emailjs.init({
      publicKey: "hqZ4VZdmkOXEoQWgt",
    });
  },
  methods: {
    render () {
      for (let i of this.renderers) i();
    },
    handleScroll () {
      let wrap = this.$refs.homePostsWrap;
      let newScrollTop = document.documentElement.scrollTop;
      if (this.scrollTop < newScrollTop) {
        this.hiddenMenu = true;
        this.showMenuItems = false;
      } else this.hiddenMenu = false;
      if (wrap) {
        if (newScrollTop <= window.innerHeight - 100) this.menuColor = true;
        else this.menuColor = false;
      }
      this.scrollTop = newScrollTop;
    },
    transitionPrev () {
      if (this.vueCurrent == 1) {
        this.vueCurrent = 1;
        this.newsPrev = false;
        this.prevNone = true;
      } else {
        this.vueCurrent--;
        this.newsPrev = true;
      }

      setTimeout(() => {
        this.newsPrev = false;
        this.prevNone = false;
      }, 1000);
    },
    transitionNext (total) {
      if (this.vueCurrent < total) {
        this.vueCurrent++;
        this.newsNext = true;
      } else {
        this.vueCurrent = total;
        this.newsNext = false;
        this.nextNone = true;
      }

      setTimeout(() => {
        this.newsNext = false;
        this.nextNone = false;
      }, 1000);
    },
    sendEmail () {
      const that = this
      let replyMessage = []
      switch (that.guest.theme) {
        case '意見反應':
          replyMessage = ['芸蒔刻已經收到您的意見回饋。', '面對您提出的建議，我們會認真考慮並思考改進的可能性。', '感謝您花費寶貴的時間填寫這些訊息，幫助芸蒔刻更加進步。', '我們會努力把關產品品質並致力做到最好，還請您繼續支持我們，見證我們的成長💪。']
          break;
        case '客服申訴':
          replyMessage = ['芸蒔刻已經收到您的意見回饋。', '面對您提出的問題，我們會仔細查驗並盡速改進。', '感謝您花費寶貴的時間填寫這些訊息，幫助芸蒔刻更加進步。', '我們會努力把關產品品質並致力做到最好，還請您繼續支持我們，見證我們的成長💪。']
          break;
        case '廠商接洽':
          replyMessage = ['芸蒔刻已經收到您的合作提案訊息。', '面對您提出的建議，我們還需要一些時間仔細思考。', '感謝您花費寶貴的時間填寫這些訊息，芸蒔刻真的十分感謝您對我們的欣賞。', '未來幾天會盡速給予回覆，還請您再關注電子信箱的訊息哦。']
          break;
        case '異業合作':
          replyMessage = ['芸蒔刻已經收到您的合作提案訊息。', '面對您提出的建議，我們還需要一些時間仔細思考。', '感謝您花費寶貴的時間填寫這些訊息，芸蒔刻真的十分感謝您對我們的欣賞。', '未來幾天會盡速給予回覆，還請您再關注電子信箱的訊息哦。']
          break;
        case '加盟諮詢':
          replyMessage = ['芸蒔刻已經收到您的加盟訊息。', '面對您提出的詢問，我們還需要一些時間仔細思考。', '感謝您花費寶貴的時間填寫這些訊息，芸蒔刻真的十分感謝您對我們的欣賞。', '未來幾天會盡速給予回覆，還請您再關注電子信箱的訊息哦。']
          break;
        default:
          replyMessage = ['芸蒔刻已經收到您的訂購資訊，將盡速出貨。', '未來幾天再請您關注宅配收取的相關訊息哦。']
          break;
      }
      const verification = Object.values(this.formVerification)
      if (verification.indexOf(false) === -1 && verification.indexOf(null) === -1) {
        emailjs.send("service_gnzh6ol","template_64o3qyj",{
          name: that.guest.name,
          phone: that.guest.phone,
          email: that.guest.email,
          theme: that.guest.theme,
          message: that.guest.message,
          replyMessage: replyMessage
        })
          .then(() => {
            this.sendEmailAnimate = true
            setTimeout(() => {
              this.guest.name = null
              this.guest.phone = null
              this.guest.email = null
              this.guest.theme = '宅配訂購'
              this.guest.message = null
              Object.values(this.formVerification).forEach((item,id) => {
                if (item === null) {
                  that.formVerification[Object.keys(that.formVerification)[id]] = null
                }
              })
              replyMessage = []
            }, 500)
          }, (error) => {
            console.log('FAILED...', error)
          })
      } else {
        Object.values(this.formVerification).forEach((item,id) => {
          if (item === null) {
            that.formVerification[Object.keys(that.formVerification)[id]] = false
          }
        })
      }
    }
  },
  watch: {
    'guest.name'(val) {
      if (val === null) {
        this.formVerification.name = null
      } else {
        val.length ? this.formVerification.name = true : this.formVerification.name = false
      }
    },
    'guest.phone'(val) {
      const regex = /^09[0-9]{8}$/
      if (val === null) {
        this.formVerification.phone = null
      } else {
        regex.test(val) ? this.formVerification.phone = true : this.formVerification.phone = false
      }
    },
    'guest.email'(val) {
      const regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (val === null) {
        this.formVerification.email = null
      } else {
        regex.test(val) ? this.formVerification.email = true : this.formVerification.email = false
      }
    },
    'guest.message'(val) {
      if (val === null) {
        this.formVerification.message = null
      } else {
        val.length > 0 ? this.formVerification.message = true : this.formVerification.message = false
      }
    },
  },
})

app.mount('#layout')
