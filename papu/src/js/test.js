// import axios from 'axios'
// axios.get()
// window.$ = $;
//import axios from 'axios'
// Vue.prototype.$http = axios; // 将 $http 替换成  axios
// Vue.prototype.$http.defaults.baseURL = 'http://192.168.31.13:41000' //请求地址的公有部分

// import qs from 'qs';

try {
    //Alert.alert('message','Finished!')
    let address ="http://10.21.109.37:8080/order/post";
    const axios = require('axios');
    //const _this=this;

    axios.post(address,{ "address": "nanshan xueyuan road 1088", "email": "yuchenlichuck@gmail.com", "instructions":"sss", "price":"1"}
    )
        .then(response => {
            console.log(response);

        })
} catch (error) {
    console.log(error);
    //this.setState({ refreshing: false })
}

//
// created()
// {  // 组件创建成功的钩子函数
//     // 拿到要访问课程详情的课程id
//     let id = this.$route.params.pk || this.$route.query.pk || 1;
//     this.$axios({
//         url: `http://127.0.0.1:8000/course/detail/${id}/`,  // 后台接口
//         method: 'post',  // 请求方式
//     }).then(response => {  // 请求成功
//         console.log('请求成功');
//         console.log(response.data);
//         this.course_ctx = response.data;  // 将后台数据赋值给前台变量完成页面渲染
//     }).catch(error => {  // 请求失败
//         console.log('请求失败');
//         console.log(error);
//     })
// }