<template>
	<header class="w-full border-b border-gray-200 bg-white/50 backdrop-blur">
		<div class="flex items-center justify-between h-20 px-3 mx-auto max-w-7xl">

			<NuxtLink to="/" class="text-xl font-semibold">{{ $t('bookstore') }}</NuxtLink>

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