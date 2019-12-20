(function (global, factory) {
  global.Rate = factory()
})(this, function () {

  function install(_Vue) {
    _Vue.component('my-rate', {
      template: `<span class='rate_box'>
                    <span ref='up' class="up" @mouseout="sure(value)">
                        <i v-for='i in n' :class='"icon-"+(type||"start")' @mouseover="change(i)" @click='sure(i)' @touchstart='change(i)'></i>
                    </span>
                    <span class="down" :style="{width:width+'%'}">
                        <i v-for='i in n' :class='"icon-"+(type||"start")+"_cover"'></i>
                    </span>
                </span>`,
      props: ['n', 'value', 'type'],
      data() {
        return {
          width: 0
        }
      },
      components: {

      },
      methods: {
        change(i) {
          this.width = i / this.n * 100
        },
        sure(i) {
          this.change(i);
          // this.value = i;
          this.$emit('input', i)
        }
      },
    })
    
  }
  return {
    install
  }
})