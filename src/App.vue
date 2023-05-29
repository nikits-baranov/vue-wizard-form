<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper min-h-screen flex flex-col">
    <header class="flex-none z-50 w-full">
      <div class="container mx-auto">
        <div class="relative -mx-4 flex items-center justify-between">
          <div class="max-w-full px-4">
            <a href="javascript:void(0)" class="block w-full py-5">
              <img src="./assets/logo.svg" alt="logo" class="w-[60px]" />
            </a>
          </div>
          <div class="flex w-full items-center justify-between px-4">
            <div>
              <nav
                id="navbarCollapse"
                class="right-4 top-full w-full rounded-lg bg-white py-5 px-6 transition-all static block max-w-full"
              >
                <ul class="flex">
                  <li>
                    <RouterLink
                      class="text-dark hover:text-primary py-2 text-base font-medium ml-12 inline-flex"
                      to="/"
                    >
                      Home
                    </RouterLink>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary py-2 text-base font-medium ml-12 inline-flex"
                    >
                      ES6 solution
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="javascript:void(0)"
                class="bg-primary rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
              >
                View source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <RouterView />

    <footer class="flex-none pb-3 pt-5">
      <div class="text-center text-black">Nikita Baranov – Software Developer</div>
      <a
        href="https://github.com/nikits-baranov"
        class="block mt-1 text-center text-primary underline text-sm"
      >
        Github
      </a>
    </footer>
  </div>
</template>
