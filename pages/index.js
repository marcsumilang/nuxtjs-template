import { todoService } from '@/services/todos/todos.service';
import { userService } from '@/services/users/users.service';
// import { todoService } from '@/assets/services/todo.service';

export default {
  data() {
    return {
      todos: []
    }
  },

  async asyncData(){
    const todos = await userService.list();
    return { todos }
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