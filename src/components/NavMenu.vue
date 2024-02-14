<template>
  <section class="bg-gray-950">
    <div class="container xl:px-40 lg:px-32 md:px-16 sm:px-8 px-4 mx-auto flex items-center sm:justify-around gap-4">
      <a @click="showDropdown = false" href="/">
        <h1
          class="text-7xl leading-snug py-1 selection:font-black text-gray-50 hover:text-yellow-500 transition-colors ease-in-out">
          HEADING
        </h1>
      </a>


      <div class="nav-menu mobile-nav">
        <div class="toggle" @click="toggleDropdown">
          <svg v-if="!showDropdown" class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11 11V4a1 1 0 0 1 2 0v7h7a1 1 0 0 1 0 2h-7v7a1 1 0 0 1-2 0v-7H4a1 1 0 0 1 0-2h7z" stroke-width="4"
              stroke-linecap="square" />
          </svg>
          <svg v-else class="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13H5v-2h14v2z" />
          </svg>
        </div>
        <div ref="navigation" class="dropdown-mob py-2 px-6" :class="{ active: showDropdown }">
          <div class="nav-inner__mob">
            <ul class="flex gap-2 sm:flex-col md:flex-row">
              <a @click="forceClose" href="/profile">
                <li class="text-2xl text-gray-50 hover:text-yellow-500 uppercase">Profile</li>
              </a>
              <a @click="forceClose" href="/projects">
                <li class="text-2xl text-gray-50 hover:text-yellow-500 uppercase">Projects</li>
              </a>
              <a @click="forceClose" href="/contact">
                <li class="text-2xl text-gray-50 hover:text-yellow-500 uppercase">Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav-menu desktop-nav">
        <div class="nav-inner">
          <ul class="flex gap-2 sm:flex-col md:flex-row">
            <a href="/profile">
              <li class="text-2xl text-gray-50 hover:text-yellow-500 uppercase">Profile</li>
            </a>
            <a href="/projects">
              <li class="text-2xl text-gray-50 hover:text-yellow-500 uppercase">Projects</li>
            </a>
            <a href="/contact">
              <li class="text-2xl text-gray-50 hover:text-yellow-500 uppercase">Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const showDropdown = ref(false);
    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    const forceClose = () => {
      showDropdown.value = false;
    };

    onMounted(() => {
      window.addEventListener("resize", () => {

        showDropdown.value = false;

      });
    })
    return { showDropdown, toggleDropdown, forceClose };
  }
};
</script>
<style scoped>
.mobile-nav {
  display: none;
}

.desktop-nav {
  display: block;
}

.plus,
.minus {
  width: 48px;
  height: 48px;
  fill: #fff0f0;
  cursor: pointer;
}

.plus:hover,
.minus:hover {
  fill: rgb(234 179 8);
}

@media (max-width: 768px) {
  .mobile-nav {
    display: block;
  }

  .desktop-nav {
    display: none;
  }

  .dropdown-mob {
    position: absolute;
    top: 100px;
    left: 100vw;
    width: 100%;
    height: 100%;
    background-color: black;
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    z-index: 15;
  }

  .dropdown-mob.active {
    left: 0;
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    transform: translateX(0);
  }

  .dropdown-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>