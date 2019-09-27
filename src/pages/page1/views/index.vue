<template>
    <div>
        <h1>This is page1 index</h1>|
        <a @click="goFn('/')">Page1</a>
    </div>
</template>

<script>

export default {
    methods: {
        goFn(name) {
            this.$openRouter({
                homepath: '/index',
                name: name, // 跳转地址
            })
        }
    }
}
</script>