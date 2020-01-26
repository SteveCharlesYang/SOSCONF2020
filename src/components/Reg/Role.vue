<template>
  <div class="section section-basic">
    <div class="container">
      <div class="tab-content tab-space">
        <div class="tab-pane active" id="reg-speaker">
          <h3>招募演讲者</h3>
          <p>
            我们希望学生能积极交流，让学生站上舞台，展示诞生在实验室里的创想，分享蕴含在编码中的激情，畅聊属于开源理念的未来!<br />
            了解演讲、闪电演讲、以及workshop报名详情请点击下方按钮“报名成为演讲者”<br />
            报名截止时间 4月25日
          </p>
          <button
            class="btn btn-primary btn-round"
            onclick="window.location.href='https://www.bagevent.com/event/speechApply/6302910'"
          >
            报名成为演讲者
          </button>
        </div>
        <div class="tab-pane" id="reg-volunteer">
          <h3>招募志愿者</h3>
          <p>
            中文学生开源年会将定在5月16日、17日举办。<br />
            活动已经进入了紧张的筹备中，我们需要广大社区朋友们的支援。<br />
            如果你对SOSCON感兴趣，那么以志工的身份参与到会议中一定会给你带来意义非凡的活动体验。
          </p>
          <button 
            class="btn btn-primary btn-round"
            onclick="window.location.href='https://www.bagevent.com/event/registerTicket/6348596'"
          >
            报名成为志愿者
          </button>
        </div>
        <div class="tab-pane" id="reg-ticket">
          <h3>获取学生票</h3>
          <p>
            我们汇聚了各路大神, 现在, 就差志同道合的你<br />
            在这里, 你能感受到科技的魅力, 也能结交到志同道合的朋友<br />
            如果你相信开源的力量, 那么就点击取票, 和我们一起, 成为第一批开拓者,
            见证元年的盛事
          </p>
          <button
            class="btn btn-primary btn-round"
            onclick="window.location.href='https://www.bagevent.com/event/registerTicket/6302910'"
          >
            报名获取学生票
          </button>
        </div>
        <div class="tab-pane" id="reg-community">
          <h3>合作社区报名</h3>
          <p>
            我们希望各高校开源社区能与我们一同合作，为我们带来更富有多样性的2020中文学生开源年会：<br />
            合作社区将能够在组委会的支持下，承办不同的分会场，举办富有本社区特色的活动。<br />
            若你的社区希望加入我们，请点击“报名加入合作社区”。
          </p>
          <button
            class="btn btn-primary btn-round"
            onclick="window.location.href='https://www.bagevent.com/event/registerTicket/6348596'"
          >
            报名加入合作社区
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Role'
}
</script>
