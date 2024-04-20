// 登录组件
const Login = {
  data() {
    return {
      // 用户身份
      users: [
        {
          name: 选手选填部分,
          userName: 'producer',
          component: 选手选填部分,
        },
        {
          name: 选手选填部分,
          userName: 'distributor',
          component: 选手选填部分,
        },
        {
          name: 选手选填部分,
          userName: 'retailer',
          component: 选手选填部分,
        },
        {
          name: 选手选填部分,
          userName: 'consumer',
          component: 选手选填部分,
        },
      ],
      currentUser: 选手选填部分, // 当前用户
      address: '', // 角色地址  
      countdown: 5, // 倒计时时间
      loginItem: '', // 登录用户信息
      timer: null, // 处理倒计时的定时器
    }
  },
  template: `
    <div class="login">
      <!-- 角色选择 -->
      <h3 v-if="currentUser === null">选手选填部分</h3>
      <el-row :gutter="80"  v-if="currentUser === null">
        <el-col :span="6" v-for="选手选填部分" :key="index">
          <div @click="选手选填部分">选手选填部分</div>
        </el-col>
      </el-row>

      <!-- 角色登录 -->
      <div v-else class="is-login">
        <h3>登录中......(倒计时：选手选填部分 秒)</h3>
        <div>角色: 
          <span>选手选填部分</span>
        </div>

        <!-- 非消费者则显示角色地址 -->
        <div v-if="选手选填部分">角色地址:
          <span>选手选填部分</span>
        </div>

        <!-- 直接登录按钮 -->
        <el-button type="primary" 选手选填部分>直接登录</el-button>
      </div>
    </div>
  `,
  methods: {
    // 登录时有个5秒的倒计时，这里是在点击直接登录时，清楚倒计时，直接跳到相关页面
    clearTimer() {
      clearInterval(选手选填部分);
      this.$emit(选手选填部分, { 
        component: this.loginItem.component, 
        user: this.loginItem.name, 
      });
    },
    // 倒计时
    countdownInterval() {
      this.timer = setInterval(() => {
        if(this.countdown <= 0){
          选手选填部分
        }
        选手选填部分
      }, 选手选填部分);
    },
    // 点击用户登录，获取用户地址
    handleClick(item) {
      // console.log(item);
      this.loginItem = item;
      // 处理消费者角色，其他三个角色都有一个角色地址
      if (item.userName !== 选手选填部分) {
        axios({
          method: 'get',
          url: `http://localhost:8080/userinfo?userName=${item.userName}`,
        })
        .then(ret => {
          this.address = 选手选填部分;
          this.currentUser = 选手选填部分;
          this.countdownInterval();
        }) 
        .catch(err => {
          console.log(err)
        })
      } else {
        this.currentUser = item.name;
        this.countdownInterval();
      }
    }
  }
}