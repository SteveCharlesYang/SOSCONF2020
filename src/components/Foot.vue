<template>
  <footer class="footer" data-background-color="black">
    <div class="container">
      <nav class="float-left">
        <ul>
          <li>
            <router-link to="/coop" class="nav-link">
              参与合作
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link">
              联系我们
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright float-right">
        SOSCONF &copy; 2020
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Foot"
};
</script>
