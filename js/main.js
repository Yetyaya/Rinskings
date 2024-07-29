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
    }
  },
  created () {
    window.addEventListener('load', () => {
      this.loading = false;
    })
  },
  mounted () {
    var s = skrollr.init({
      forceHeight: false,
      smoothScrolling : true,
      smoothScrollingDuration: 1000,
      render: function(data) {
        //Log the current scroll position.
        console.log(data.curTop);
      }
    });
    window.addEventListener('scroll', this.handleScroll, true);
    this.render();
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
  },
})

app.mount('#layout')
