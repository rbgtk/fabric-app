<template>
    <div class="container">
        <h3>Connections</h3>

        <ConnectionList />
        <ConnectionForm />
    </div>
</template>

<script setup lang="ts">
import ConnectionList from '@renderer/components/ConnectionList.vue'
import ConnectionForm from '@renderer/components/ConnectionForm.vue'

</script>