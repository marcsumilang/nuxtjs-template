import { userService } from '@/services/users/users.service';

export default {
    data() {
      return {
        todos: []
      }
    },
  
    async asyncData({ params }){
        console.log(params);
      const user = await userService.show(params.id);
      console.log(user);
      return { user }
    },
  
    // mounted(){
    //   this.users();
    // },
  
    // methods:{
    //   users(){
    //     this.todos = todoService.list();
    //   }
    // }
  }