<template>
    <div>
        <HeadNavbar />
		<LoginForm />
    </div>
</template>

<script>
    'use strict'

    import HeadNavbar from './HeadNavbar'
    import LoginForm from './LoginForm'

    export default {
        name: 'Login',
        components: {
            HeadNavbar,
            LoginForm
        }
    }
</script>
