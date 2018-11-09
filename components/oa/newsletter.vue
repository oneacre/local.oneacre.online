<template>
  <div class="newsletter_wrapper">
    <div class="oa_modal_wrapper" v-show='show_modal' @click.self='show_modal = !show_modal'>
      <div class="oa_modal">
        <div class="oa_modal_title">oneacre.online</div>
        <div class="oa_modal_content">

          <p>We will send you links</p>

          <p>If you sign up for our newsletter</p>
          <!-- Begin MailChimp Signup Form -->
          <form action="//online.us14.list-manage.com/subscribe/post?u=9473977eedf1a7da237b22b89&amp;id=85337ef85c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <!-- <label for="mce-EMAIL">Email Address</label> -->
                <input type="email" onfocus="this.value=''" value="Email Address" name="EMAIL" class="required email" id="mce-EMAIL">
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>

              <!-- do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_9473977eedf1a7da237b22b89_85337ef85c" tabindex="-1" value=""></div>

              <input type="submit" value="↵" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="oa_preserve" @click='show_modal = !show_modal'>
      Newsletter
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      show_modal: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.oa_preserve {
  position: fixed;
  padding: 15px;
  font-size: 18px;
  bottom: 40px;
  right: 40px;
  text-transform: lowercase;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: $color-primary;
  cursor: pointer;
  -webkit-transition: .2s;
  transition: .2s;
  z-index: 2;
  color: $color-primary;
}

.oa_preserve:hover {
  background-color: $color-primary;
  color: #fff;
}

.oa_modal_wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(255,255,255,0.9);
  border: 1px solid $color-primary;
  color: $color-primary;
  top: 0;
  left: 0;
  z-index: 999;
  cursor: url(/images/oneacre/close.png), pointer;
}

.oa_modal {
  width: 600px;
  background-color: #fff;
  position: fixed;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  border: 1px solid $color-primary;
  text-align: center;
  font-size: 25px;
  margin: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: auto;
}

.oa_modal_title {
  border-bottom: 1px solid $color-primary;
  padding: 10px 15px 8px;
}

.oa_modal_content {
  padding: 50px 20px;
}

.oa_modal p {
  text-transform: lowercase;
  margin-bottom: .225em;
}

.oa_modal #mc_embed_signup_scroll {
  width: 100%;
  position: relative;
  margin: 30px auto 20px;
  width: 100%;
}

.oa_modal #mce-EMAIL {
  padding: 5px 10px;
  width: 100%;
  height: 35px;
  font-family: 'Alverata-Regular', serif;
  font-size: 16px;
  color: rgba(0,0,0,0.4);
  border: 1px solid $color-primary;
}

.oa_modal #mc-embedded-subscribe {
  border: 1px solid $color-primary;
  background-color: #FFF;
  padding: 10px 0 0 0 ;
  position: absolute;
  right: 0;
  top: 0;
  color: $color-primary;
  cursor: pointer;
  -webkit-transition: .15s;
  transition: .15s;
  font-size: 13px;
  text-align: center;
  height: 35px;
  width: 35px;
}

.oa_modal #mc-embedded-subscribe:hover {
  background-color: $color-primary;
  color: #FFF;
}
</style>
