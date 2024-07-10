const app = Vue.createApp({
    mixins: Object.values(mixins),
    data() {
        return {
            loading: true,
            hiddenMenu: false,
            showMenuItems: false,
            menuColor: false,
            scrollTop: 0,
            renderers: [],
            currentPath: document.location.pathname.replace('/Rinskings/', '').split('/')[0]
        }
    },
    created() {
        window.addEventListener("load", () => {
            this.loading = false;
        })
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true)
        this.render()
    },
    methods: {
        render() {
            for (let i of this.renderers) i()
        },
        handleScroll() {
            let wrap = this.$refs.homePostsWrap
            let newScrollTop = document.documentElement.scrollTop
            if (this.scrollTop < newScrollTop) {
                this.hiddenMenu = true
                this.showMenuItems = false
            } else this.hiddenMenu = false
            if (wrap) {
                if (newScrollTop <= window.innerHeight - 100) this.menuColor = true
                else this.menuColor = false
            }
            this.scrollTop = newScrollTop;
        },
    },
});
app.mount("#layout")
