<template>
  <div class="container">
    <h1>MAIN CONTENT</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos" :key="index">
          <td>{{todo.id}}</td>
          <td>{{todo.name}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos" :key="index">
          <td>{{todo.id}}</td>
          <td>{{todo.name}}</td>
        </tr>
      </tbody>
    </table>

      <div data-aos="fade-left" data-aos-delay="500" data-aos-offset="200">
        <h2>TESTING AOS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien dui, lacinia ac viverra sit amet, sodales ut tellus. Cras consequat mollis aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat risus quam, vehicula vulputate ante aliquet id. Ut porttitor mollis vulputate. Curabitur sapien ipsum, vulputate id turpis sit amet, rutrum cursus leo. Sed fermentum nec sem viverra tincidunt. Phasellus ac est et diam tincidunt maximus. Nullam eu lacus id diam ornare rutrum a et mauris. Aliquam vulputate urna quis nisl lobortis, rutrum luctus lorem vehicula.</p>
      </div>

      <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos" :key="index">
          <td>{{todo.id}}</td>
          <td>{{todo.name}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todos" :key="index">
          <td>{{todo.id}}</td>
          <td><nuxt-link :to="`/user/${todo.id}`">{{todo.name}}</nuxt-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  @import url('./index.scss');
</style>
<script src="./index.js" lang="js" />