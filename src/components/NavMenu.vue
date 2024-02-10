<template>
    <div class="nav-menu md:hidden lg:hidden xl:hidden">
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
    </div>
    
    <div ref="navigation" class="dropdown py-2 px-6" :class="{ active: showDropdown }">
        <div class="dropdown-inner">
            <ul class="flex gap-2 sm:flex-col md:flex-row">
                <a href="/profile">
                    <li class="text-2xl hover:text-white uppercase">Profile</li>
                </a>
                <a href="/projects">
                    <li class="text-2xl hover:text-white uppercase">Projects</li>
                </a>
                <a href="/contact">
                    <li class="text-2xl hover:text-white uppercase">Contact</li>
                </a>
            </ul>
        </div>
    </div>
</template>

<script>
// Bug here when resizing the window that causes menu to pop out
export default {
    data() {
        return {
            showDropdown: true,
            showMenu: false,
        };
    },
    methods: {
        toggleDropdown() {
            if (!this.isResized) {
            this.showDropdown = !this.showDropdown;
            }
        }
    },
    mounted() {
        this.showMenu = window.innerWidth <= 768;
        this.showDropdown = window.innerWidth >= 768;
        window.addEventListener('resize', () => {
            this.showDropdown = window.innerWidth >= 768;
            if (window.innerWidth == 768) {
                this.showDropdown = false;
            }
        });
    },
    beforeDestroy() {
        window.removeEventListener('resize', () => {
            this.isResized = true;
            this.showDropdown = window.innerWidth <= 768;
        });
        
    }
};
</script>

<style scoped>
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
    position: relative;
    left: 100vw;
    list-style-type: none;
    background-color: #fff;
    display: flex;
    align-items: flex-start;
    background-color: black;
    width: 100vw;
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    z-index: 5;
}

.dropdown.active {
    left: 0;
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    transform: translateX(0);
}

@media screen and (max-width: 768px) {
    .dropdown {
        position: absolute;
        top: 72px;
        width: 100%;
        height: 100%;
    }

    .dropdown-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
