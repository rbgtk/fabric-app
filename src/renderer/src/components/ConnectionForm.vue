<template>
    <div class="mb-3">
        <label for="name" class="form-label">New Connection Name</label>
        <input type="text" name="name" id="name" class="form-control" v-model="input.name">
    </div>

    <div class="mb-3">
        <label for="host" class="form-label">Remote Host</label>
        <input type="text" name="host" id="host" class="form-control" v-model="input.host">
    </div>

    <div class="mb-3">
        <label for="port" class="form-label">Remote Port</label>
        <input type="text" name="port" id="port" class="form-control" v-model="input.port">
    </div>

    <button type="submit" class="btn btn-primary" @click="createConnection">Create</button>
</template>

<script setup lang="ts">
import { useConnectionStore } from '@renderer/stores/connectionStore'
import Connection from '@renderer/models/connection'

const connectionStore = useConnectionStore()

const input: Connection = {
    name: '',
    host: '',
    port: 443
}

function createConnection() {
    if (!input.name) throw new Error("Invalid name")
    if (!input.host) throw new Error("Invalid host")
    if (!input.port) throw new Error("Invalid port")

    connectionStore.addConnection(input)
}

</script>