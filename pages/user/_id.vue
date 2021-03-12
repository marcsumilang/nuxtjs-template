<template>
  <div class="container">
    <h1 class="text-center">SUB CONTENT</h1>
        <div data-aos="fade-left" data-aos-delay="500" data-aos-offset="200" class="text-center">
            <div class="row">
                <div class="col-sm">
                  <h2>{{ user.name }}</h2>
                </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <label>Email:</label> {{ user.email }}
              </div>
              <div class="col-sm">
                <label>Website:</label> {{ user.website }}
              </div>
            </div>
        </div>
  </div>
</template>

<!-- <style scoped>
  @import url('./todo.scss');
</style> -->
<script src="./user.js" lang="js" />