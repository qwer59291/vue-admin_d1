<template>
  <!-- <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
    class="demo-ruleForm login-container">
     <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录
      </el-button>
      <el-button @click.native.prevent="handleReset2">重置</el-button>-
    </el-form-item>
  </el-form> -->
  <el-form :model="ruleForm" class="demo-ruleForm login-container" ref="ruleForm" :rules="rules" label-width="50px"
    label-position="left">
    <h3 class="title">系统登录</h3>
    <el-form-item label="帐号" prop="account">
      <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="请输入帐号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-checkbox class="remember" v-model="checked" checked>记住密码</el-checkbox>
    <el-form-item style="width:100%;" label-width="0">
      <el-button type="primary" style="width:100%;" @click="submitForm('ruleForm')" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      logining: false,
      ruleForm: {
        account: "",
        checkPass: ""
      },
      checked: true,
      rules: {
        account: [
          { required: true, message: "帐号不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "请输入6到12位帐号", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 12, message: "请输入6到12位密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
