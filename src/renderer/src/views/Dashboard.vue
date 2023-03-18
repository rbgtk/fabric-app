<template>
    <div class="mb-3">
        <h3>Connections</h3>

        <ConnectionList />
    </div>

    <div class="mb-3">
        <h3>Identities</h3>

        <IdentityList />
    </div>
</template>

<script setup lang="ts">
import ConnectionList from '@renderer/components/ConnectionList.vue'
import IdentityList from '@renderer/components/IdentityList.vue'

</script>