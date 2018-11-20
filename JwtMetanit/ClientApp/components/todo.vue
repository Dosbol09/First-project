<template v-if="">
  <div id="todo-list">
  <form >
              <div class="form-group">
                  <label for="name">Name:</label>
                  <input class="form-control" v-model="name" required/>
              </div>
              <div class="form-group">
                  <label for="tegs">Tegs</label>
                  <input class="form-control" v-model="tegs" required/>
              </div>
              <div class="form-group">
                  <label for="descirption">Description</label>
                  <input class="form-control" v-model="description" required/>
              </div>
              <div class="panel-body">
                  <button type="submit" @click="saveData()" class="btn btn-sm btn-primary">Сохранить</button>
                  <a id="reset" @click="reset()" class="btn btn-sm btn-primary">Сбросить</a>
              </div>
          </form>
          <br>
          <input type="text" v-model="search" placeholder="search" />
          <table class="table table-condensed table-striped table-bordered">
              <thead><tr><th width="30%">Name</th><th width="20%">Tegs</th><th width="20%">Description</th><th width="10%">Complate</th><th width="20%"></th></tr></thead>
          </table>
          <table class="table">
              <tr class="post" v-for="post in filteredPosts ">

                  <td width="30%" :class="{completed: post.iscomplate}">{{ post.name }}</td>
                  <td width="20%" :class="{completed: post.iscomplate}">{{ post.tegs }}</td>
                  <td width="20%" :class="{completed: post.iscomplate}">{{ post.description }}</td>
                  <td width="10%"><input type="checkbox" v-model="post.iscomplate"></input></td>
                  <td width="20%"><a @click="deleteData(post)">Delete</a></td>
              </tr>
          </table>
</div>
</template>
<script>
import axios from 'axios'
  export default{
    data(){ return {
            endpoint: 'api/missions/get',
            posts: [],
            post: {
            },
            search: '',
            input: "ast",
            id: "",
            name: "",
            tegs: "",
            description: "",
            iscomplate: "false"


        }},



        methods: {
            deleteData: function (post) {
                var index = this.posts.indexOf(post);

                axios.delete('api/missions/delete/' + post.id).then(response=> {

                    this.posts.splice(index, 1);

                }).catch(error=>{
                  console.log(error)
                })

            },
            saveData: function () {

                var name = this.name;
                var tegs = this.tegs;
                var description = this.description;
                var iscomplate = this.iscomplate;
              axios.post('api/missions/post', {  name, tegs, description, iscomplate }).then(function (response) {

                }, function (response) {

                })
            },
            reset: function () {
                this.id = '';
                this.name = '';
                this.tegs = '';
                this.description = '';
                this.complate = '';



            },





            getAllPosts: function () {

                axios.get(this.endpoint).then(response=>{
                  this.posts=response.data
                }).catch(error=>{
                  console.log(error)
                })
            }
        },
        computed: {
            filteredPosts: function () {
                return this.posts.filter((post) => {
                    return post.name.match(this.search);
                });
            }
        },






        created: function () {
            this.getAllPosts()

        }
  }
</script>
<style>
.completed{
  text-decoration: line-through;
  color: grey;
}
</style>
