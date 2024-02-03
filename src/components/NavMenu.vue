<template>
    <div class="nav-menu">
        <div class="toggle" @click="toggleDropdown">
            <svg v-if="!showDropdown" class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11 11V4a1 1 0 0 1 2 0v7h7a1 1 0 0 1 0 2h-7v7a1 1 0 0 1-2 0v-7H4a1 1 0 0 1 0-2h7z" />
            </svg>
            <svg v-else class="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 13H5v-2h14v2z" />
            </svg>
        </div>

        <div class="dropdown py-2 px-6" :class="{ active: showDropdown }">
            <div class="dropdown-inner">
                <ul>
                    <li>asdas</li>
                    <li>asdas</li>
                    <li>asdas</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropdown: false
        };
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    }
};
</script>

<style scoped>
.nav-menu {
    position: relative;
}

.toggle {
    cursor: pointer;
}

.plus,
.minus {
    width: 48px;
    height: 48px;
    fill: #fff0f0;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 100vw;
    list-style-type: none;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: black;
    width: 100vw;
}

.dropdown.active {
    left: 0;
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    transform: translateX(0);
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
    transform: translateX(-300vw);
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    transform: translateX(-100vw);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-100vw);
    opacity: 0;
}
</style>
