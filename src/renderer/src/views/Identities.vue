<template>
    <div class="container">
        <h3>Identities</h3>

        <IdentityList />
        <IdentityForm />
    </div>
</template>

<script setup lang="ts">
import IdentityList from '@renderer/components/IdentityList.vue'
import IdentityForm from '@renderer/components/IdentityForm.vue'

</script>