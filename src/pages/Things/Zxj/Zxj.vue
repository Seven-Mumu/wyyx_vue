<template>
  <div class="zxjContainer">
    <div class="m-zxjindex"
         data-reactid=".0.1">
      <div class="m-goodsCollection m-zxjindexdetail"
           data-reactid=".0.1.0">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="(src,index) in imgArr"
                 :key="index">
              <img :src="src"
                   alt="">
            </div>
          </div>
        </div>
        <div class="m-indexAdvice"
             data-reactid=".0.1.0.1">
          <div class="top"
               data-reactid=".0.1.0.1.0">
            <h3 class="title"
                data-reactid=".0.1.0.1.0.0"><span data-reactid=".0.1.0.1.0.0.0">建议征集</span><i class="u-icon u-icon-row"
                 data-reactid=".0.1.0.1.0.0.1"></i></h3>
            <p class="desc"
               data-reactid=".0.1.0.1.0.1">告诉我们，你的好物标准</p>
          </div>
          <div class="middle"
               data-reactid=".0.1.0.1.1">
            <div class="wraper"
                 data-reactid=".0.1.0.1.1.0">
              <div class="m-lazyload "
                   data-reactid=".0.1.0.1.1.0.0"><img data-original=""
                     data-src="https://yanxuan.nosdn.127.net/6fbb1dc250ec56595717c3701f58c642.jpeg?imageView&amp;quality=75&amp;thumbnail=272x200"
                     class="swiper-lazy J_lazyload_pre J_lazyload_end"
                     data-reactid=".0.1.0.1.1.0.0.0"
                     src="https://yanxuan.nosdn.127.net/6fbb1dc250ec56595717c3701f58c642.jpeg?imageView&amp;quality=75&amp;thumbnail=272x200"></div>
            </div>
            <div class="baseInfo"
                 data-reactid=".0.1.0.1.1.1">
              <div class="acttitle"
                   data-reactid=".0.1.0.1.1.1.0">
                <h3 class="name"
                    data-reactid=".0.1.0.1.1.1.0.0">你会喜欢蜂蜜柚子茶吗？</h3>
              </div>
              <div class="counts"
                   data-reactid=".0.1.0.1.1.1.1">
                <div class="count"
                     data-reactid=".0.1.0.1.1.1.1.0"><i class="u-icon u-icon-count1"
                     data-reactid=".0.1.0.1.1.1.1.0.0"></i><span data-reactid=".0.1.0.1.1.1.1.0.1">30</span><span data-reactid=".0.1.0.1.1.1.1.0.2">条建议</span></div>
                <div class="count count1"
                     data-reactid=".0.1.0.1.1.1.1.1"><i class="u-icon u-icon-view1"
                     data-reactid=".0.1.0.1.1.1.1.1.0"></i><span data-reactid=".0.1.0.1.1.1.1.1.1">448</span><span data-reactid=".0.1.0.1.1.1.1.1.2">人看过</span></div>
              </div>
            </div>
          </div>
          <div class="ft"
               data-reactid=".0.1.0.1.2">
            <div class="descdetail"
                 data-reactid=".0.1.0.1.2.0">我们找到了海外优质的果园，希望能调制一款随时可冲饮的水果茶。你会更喜欢常见的玻璃罐装，还是会希望有方便携带出门的独立小包装。如若推出罐装款，是否会需要搭配一些配件汤勺？关于其他口味的想法，都快来说说吧</div>
            <div class="advicebtn"
                 data-reactid=".0.1.0.1.2.1">我要建议</div>
          </div>
        </div>
        <div class="m-indexSample"
             data-reactid=".0.1.0.2">
          <div class="top"
               data-reactid=".0.1.0.2.0">
            <h3 class="title"
                data-reactid=".0.1.0.2.0.0"><span data-reactid=".0.1.0.2.0.0.0">样式甄选</span><i class="u-icon u-icon-row"
                 data-reactid=".0.1.0.2.0.0.1"></i></h3>
            <p class="desc"
               data-reactid=".0.1.0.2.0.1">请挑选，你喜爱的好物款式</p>
          </div>
          <div class="m-sampleItem">
            <div class="headerItem">
              <div class="titleItem">
                <span class="title1">

                  <span>海外篇</span>

                </span>
                <span class="title2">多味花生豆</span>
              </div>
              <div class="content">混搭泰国特色，挑战你的味蕾，甄选你喜欢的口味</div>
            </div>

            <ul class="bottomList">
              <li v-for="(item,index) in listArr"
                  :key="index">
                <img :src="item.src"
                     alt="">
                <div class="desc">{{item.desc}}</div>
                <div class="like">
                  <span class='likeImg'></span>
                  <span class="likeText">喜欢</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="try">
          <div class="tryHeader">
            <div class="title">样品试用</div>
            <div class="title2">加入我们，一起检验好物初样</div>
          </div>
          <div class="tryImg">
            <div class="timer">
              距离报名结束还有：{{day}}天 {{h}}时 {{m}}分 {{s}}秒
            </div>
            <img src="https://yanxuan.nosdn.127.net/f1cc07a5d17b9c46b2fd23245cab6b1d.png?imageView&quality=75&thumbnail=750y550"
                 alt="">
          </div>
          <div class="bor">
            <div class="tryMiddle">
              <p class="middle1">Smart 电烤箱</p>
              <p class="middle2">状态：申请中</p>
            </div>
            <div class="tryBottom">
              <span class="left">
                <span class="left1">599元</span>
                <span class="left2">参考价</span>
              </span>
              <span class="line"></span>
              <span class="right">
                <span class="right1">1人</span>
                <span class="right2">招募甄选家</span>
              </span>
            </div>
            <div class="request">立即申请</div>
          </div>
        </div>
        <div class="result">
          <div class="resultHeader">
            <div class="resultTitle">甄选结果</div>
            <div class="resultTitle2">因为你们，这些好物得以面世</div>
          </div>
          <ul class="resultList">
            <li class="resultLi"
                v-for="(item,index) in resultArr"
                :key="index">
              <img :src="item.src"
                   alt="">
              <div class="cheap"
                   v-show="item.highlight===1">抄底特惠</div>
              <div class="text">{{item.text}}</div>
              <div class="price">￥{{item.price}}</div>
            </li>
          </ul>
        </div>
        <div class="resultBottom">
          <div class="bottomHeader">甄选家月报</div>
          <div class="content">
            <img src="https://yanxuan.nosdn.127.net/c365674c1a28e094e8b74339f3024749.jpeg?imageView&quality=75&thumbnail=550y356"
                 alt="">
            <h3 class="title">网易严选3周年-粉丝生日趴</h3>
            <p class="text">3月末，我们分别在广州、北京、杭州的有家民宿严选HOME，还有长沙严选粉丝-来来的家 一起提前庆祝严选生日！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      imgArr: ['https://yanxuan.nosdn.127.net/cbd1f75b06ad2d740956e4e46a721b57.jpg?imageView&quality=75&thumbnail=670x371', 'https://yanxuan.nosdn.127.net/ac5bdd0277eed0e2cb5a52e270381f8a.jpg?imageView&quality=75&thumbnail=670x371'],
      listArr: [
        {
          src: 'https://yanxuan.nosdn.127.net/a691af65327b70a5a27cbb4b90f9971d.jpg?imageView&quality=65&thumbnail=300x300',
          desc: '鲜虾味'
        },
        {
          src: 'https://yanxuan.nosdn.127.net/f28672362d2d13433cfa4ab48d9e6ae6.jpg?imageView&quality=65&thumbnail=300x300',
          desc: '烧烤味'
        },
        {
          src: 'https://yanxuan.nosdn.127.net/853a2586ee50f7ce8b6ae8d3927548dc.jpg?imageView&quality=65&thumbnail=300x300',
          desc: '芥末味'
        },
        {
          src: 'https://yanxuan.nosdn.127.net/c7d80e4e54ba18d608afc681612e182a.jpg?imageView&quality=65&thumbnail=300x300',
          desc: '鸡肉味'
        }
      ],
      day: '',
      h: '',
      m: '',
      s: '',
      resultArr: [
        {
          src: 'https://yanxuan-item.nosdn.127.net/6c73606ceefd113fb1944331c290824d.png?imageView&quality=65&thumbnail=330x330',
          text: '泰国制造 天然乳胶枕 玻尿酸豪华礼盒',
          price: 239,
          highlight: 1
        },
        {
          src: 'https://yanxuan-item.nosdn.127.net/2004c274c9112096345d1cb47bc00565.png?imageView&quality=65&thumbnail=330x330',
          text: '玩味系列·双盖彩色陶瓷煲',
          price: 199,
          highlight: 0
        },
        {
          src: 'https://yanxuan-item.nosdn.127.net/6b69d2d0b70a427b8ab2ec39c650c864.png?imageView&quality=65&thumbnail=330x330',
          text: '铝柄钢丝跳绳',
          price: 59,
          highlight: 0
        },
        {
          src: 'https://yanxuan-item.nosdn.127.net/745a8814c19996459284db168d598e16.png?imageView&quality=65&thumbnail=330x330',
          text: '大理石风九色晕染眼影盘',
          price: 99,
          highlight: 1
        },
      ]

    }
  },
  mounted () {

    // 倒计时
    setInterval(() => {
      // 获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date("2019-10-24 23:59:59");
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.day = parseInt(leftTime / 1000 / 60 / 60 / 24, 10)
        const h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        if (h < 10) {
          this.h = `0${h}`
        } else {
          this.h = h
        }
        const m = Math.floor((leftTime / 1000 / 60) % 60);
        if (m < 10) {
          this.m = `0${m}`
        } else {
          this.m = m
        }
        const s = Math.floor((leftTime / 1000) % 60);
        if (s < 10) {
          this.s = `0${s}`
        } else {
          this.s = s
        }
      }
    }, 1000);





    this.$nextTick(() => {
      // 轮播图
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      })

      // 竖屏滑动
      const height = document.documentElement.clientHeight - 180
      const zxjindex = document.querySelector('.m-zxjindex')
      zxjindex.style.height = height + 'px'
      if (!this.bscroll) {
        this.bscroll = new BScroll('.m-zxjindex', {
          click: true,
          bounce: false
        })
      } else {
        this.bscroll.refresh()
      }
    })
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.zxjContainer
  padding-top 180px
  .m-zxjindex
    .m-goodsCollection
      .m-indexAdvice
        width 100%
        height 750px
        background-color #fff
        padding 0 30px 40px
        box-sizing border-box
        margin-top 20px
        .top
          height 142px
          padding 34px 0
          box-sizing border-box
          text-align center
          .title
            font-size 32px
            margin-bottom 12px
          .desc
            font-size 24px
            color #7f7f7f
        .middle
          height 248px
          background-color #f4f4f4
          padding 24px 0 24px 24px
          box-sizing border-box
          display flex
          .wraper
            width 272px
            height 200px
            img
              width 100%
              height 100%
          .baseInfo
            width 382px
            height 200px
            padding 20px 0 20px 20px
            box-sizing border-box
            .acttitle
              .name
                font-size 32px
            .counts
              display flex
              margin-top 80px
              justify-content space-around
              font-size 24px
              color #7f7f7f
        .ft
          height 160px
          margin-top 32px
          font-size 24px
          color #7f7f7f
          text-align left
          line-height 40px
          position relative
          .advicebtn
            width 100%
            height 88px
            text-align center
            line-height 88px
            border 1px solid #7F7F7F
            position absolute
            bottom -130px
            left 0
            border-radius 10px
            font-size 28px
            color #333
      .m-indexSample
        height 1252px
        margin-top 20px
        padding 0 30px
        box-sizing border-box
        background-color #fff
        .top
          height 142px
          padding 34px 0
          box-sizing border-box
          border-bottom 1px solid #ccc
          text-align center
          .title
            font-size 32px
            color #333
          .desc
            color #7f7f7f
            font-size 24px
            margin-top 20px
        .m-sampleItem
          .headerItem
            height 136px
            .titleItem
              padding 30px 0 12px
              height 70px
              box-sizing border-box
              .title1
                display inline-block
                width 100px
                height 32px
                background-color #F09005
                transform skewX(-20deg)
                border-radius 8px
                span
                  display inline-block
                  width 100px
                  height 32px
                  transform skewX(20deg)
                  text-align center
                  line-height 32px
                  color #ffffff
              .title2
                font-size 28px
                color #333
                margin-left 10px
            .content
              color #999
              font-size 24px
          .bottomList
            display flex
            flex-wrap wrap
            >li
              width 344px
              height 486px
              padding 0 10px 48px 0
              box-sizing border-box
              position relative
              img
                width 334px
                height 318px
              >.desc
                height 40px
                margin 18px 0 16px
                color #333
                text-align center
                font-size 28px
              .like
                width 136px
                height 44px
                border 1px solid #F09005
                border-radius 20px
                text-align center
                line-height 44px
                color #F09005
                position absolute
                top 390px
                left 50%
                margin-left -68px
                .likeImg
                  display inline-block
                  width 32px
                  height 44px
                  background-image url('http://yanxuan.nosdn.127.net/hxm/yanxuan-expert/p/20161201/style/img/sprites/checkbox-s0b9643cf77-6ba0da822b.png')
                  background-repeat no-repeat
                  background-position 0 -693px
                  vertical-align middle
                  margin-right 10px
      .try
        width 100%
        height 1076px
        background-color #fff
        margin-top 20px
        padding 0 30px
        box-sizing border-box
        .tryHeader
          height 142px
          padding 34px 0
          box-sizing border-box
          text-align center
          .title
            font-size 32px
          .title2
            color #7f7f7f
            font-size 24px
            margin-top 10px
        .tryImg
          width 100%
          height 480px
          position relative
          .timer
            width 350px
            height 100px
            background-color rgba(0, 0, 0, 0.5)
            color #fff
            text-align center
            border-radius 50px
            line-height 50px
            position absolute
            top 20px
            left 50%
            margin-left -175px
          img
            width 100%
            height 100%
            border-radius 10px 10px 0 0
        .bor
          width 100%
          height 422px
          border 1px solid #cccccc
          border-top 0
          .tryMiddle
            height 160px
            // background-color red
            text-align center
            .middle1
              font-size 32px
            .middle2
              margin-top 40px
              font-size 28px
              color #7f7f7f
          .tryBottom
            height 100px
            // background-color yellow
            display flex
            justify-content space-around
            align-items center
            .left
              display flex
              flex-direction column
              .left1
                font-size 28px
                color #b4282d
              .left2
                color #7f7f7f
                font-size 24px
                margin-top 10px
            .right
              display flex
              flex-direction column
              .right1
                font-size 28px
                text-align center
                color #b4282d
              .right2
                color #7f7f7f
                font-size 24px
                margin-top 10px
            .line
              width 2px
              height 70px
              background-color #ccc
              display inline-block
          .request
            width 610px
            height 88px
            border 1px solid #cccccc
            font-size 28px
            text-align center
            line-height 88px
            margin-left 30px
      .result
        width 100%
        height 1208px
        background-color #fff
        margin 20px 0
        padding 0 30px
        box-sizing border-box
        .resultHeader
          height 142px
          padding 34px 0
          box-sizing border-box
          text-align center
          .resultTitle
            font-size 32px
          .resultTitle2
            font-size 24px
            color #7f7f7f
            margin-top 10px
        .resultList
          height 1044px
          margin-top 20px
          display flex
          flex-wrap wrap
          .resultLi
            width 334px
            >img
              width 334px
              height 334px
            &:nth-child(2n+1)
              margin-right 20px
            .cheap
              width 130px
              height 30px
              background-color #f48f18
              color #fff
              margin 20px 0 0 6px
              text-align center
              line-height 30px
              // padding 5px 16px
              border-radius 5px
              box-sizing border-box
            .text
              width 100%
              color #333
              margin 16px 0
              font-size 28px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .price
              color #b4282d
              font-size 32px
      .resultBottom
        width 100%
        height 936px
        background-color #fff
        margin-top 20px
        padding-bottom 60px
        box-sizing border-box
        position relative
        .bottomHeader
          height 120px
          font-size 32px
          margin-bottom 12px
          text-align center
          line-height 120px
          box-sizing border-box
        .content
          width 630px
          height 756px
          position absolute
          bottom 70px
          left 50%
          transform translateX(-50%)
          padding 30px 30px 68px
          box-sizing border-box
          border 10px solid #ccc
          .title
            width 438px
            height 52px
            font-size 36px
            font-weight bold
            margin 30px 0 14px 0
            background-color #eee
          .text
            color #7f7f7f
            font-size 28px
            line-height 42px
      .swiper-container
        margin-top 20px
        width 750px
        height 320px
        margin-bottom 53px
        overflow visible !important
      .swiper-container .swiper-wrapper .swiper-slide
        width 620px
        border-radius 20px
      .swiper-container .swiper-wrapper .swiper-slide img
        width 100%
        height 320px
        border-radius 20px
      .swiper-container .swiper-wrapper .swiper-slide-prev
        margin-top 18px
        height 284px !important
      .swiper-container .swiper-wrapper .swiper-slide-prev img
        height 284px !important
      .swiper-container .swiper-wrapper .swiper-slide-next
        margin-top 18px
        height 284px !important
      .swiper-container .swiper-wrapper .swiper-slide-next img
        height 284px !important
      .swiper-container .swiper-wrapper .swiper-slide-active
        width 620px
</style>

 