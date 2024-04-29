<template>
	<header class="w-full border-b border-gray-200 bg-white/50 backdrop-blur dark:bg-slate-800">
		<div class="flex items-center justify-between h-20 px-3 mx-auto max-w-7xl">

			<NuxtLink to="/" class="text-xl font-semibold">
				<img src="~/assets/images/logo.svg" alt="Logo" height="100%" width="100%" />
			</NuxtLink>

			<nav class="flex items-center space-x-2">

				<!--<template v-for="n in menu" :key="`menuItem${n.name}`">
					<NuxtLink
						class="px-3 py-2 text-sm font-medium text-gray-500 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
						:to="n.link"
						>{{ n.name }}</NuxtLink
					>
				</template>-->

				<NuxtLink 
					class="px-3 py-2 text-sm font-medium text-gray-500 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
					:to="localPath('/')">
					{{ $t('books') }}
				</NuxtLink>

				<NuxtLink 
					class="px-3 py-2 text-sm font-medium text-gray-500 transition-all rounded-lg link hover:text-primary hover:bg-primary-50"
					:to="localPath('/authors')">
					{{ $t('authors') }}
				</NuxtLink>
				
				<LangSwitcher />

				<button @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
					<svg
                v-if="$colorMode.value == 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-50"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
              </svg>
				</button>

			</nav>
		</div>
	</header>
</template>

<script setup>
	const { locale } = useI18n();

	//console.log(locale.value);  locale doesn't change because the Header component is rendered once!

	const localPath = useLocalePath();
	
	/*const menu = ref([
		{ name: "Books", link: "/" },
		{ name: "Authors", link: "/authors" },
	]);*/
	

</script>

<style scoped>
	.router-link-active.link {
		@apply text-primary bg-primary-50;
	}
</style>